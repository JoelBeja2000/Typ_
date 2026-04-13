// --- HARDENED PHYSICS INLINE ---
const PHYSICS = {
    sphere: {
        baseSize: 0.45,
        bounceSpeed: 0.0025,
        bounceAmplitude: 3.1,
        squashThreshold: 2.7,
        squashIntensity: 1.5,
        stretchIntensity: 0.8,
    },
    audio: {
        bassWeight: 0.5,
        midWeight: 0.3,
        highWeight: 0.15,
        sizeMultiplier: 1.0,
        innerMeshScale: 0.55
    },
    curtain: {
        repulsionPadding: 1.1,
        frustumHeightReference: 8.39,
    }
};

console.log('MorphSphere Worker: Ready');

self.onerror = (err) => {
    console.error('MorphSphere Worker Error:', err);
};

self.onmessage = (e: MessageEvent) => {
    const { type, payload } = e.data;
    switch (type) {
        case 'init': 
            init(payload.canvas, payload.params); 
            break;
        case 'resize': 
            resize(payload.width, payload.height);
            break;
        case 'updateBands': 
            bands = payload.bands; 
            break;
        case 'updateColor': 
            color = payload.color; 
            if (material) material.color.set(color); 
            break;
        case 'updateFloor': 
            floorHeight = payload.floorHeight; 
            break;
        case 'updateShape': 
            updateShape(payload.shape); 
            break;
        case 'updateLighting':
            lightingEnabled = payload.lightingEnabled;
            break;
    }
};

import * as THREE from 'three';

const SHAPES = ['icosahedron', 'sphere', 'torus', 'box', 'cone', 'octahedron', 'tetrahedron', 'dodecahedron', 'cylinder'];

const createGeometry = (shape: string, size: number, segments: number): THREE.BufferGeometry => {
    switch (shape) {
        case 'sphere': return new THREE.SphereGeometry(size, 32, 32);
        case 'torus': return new THREE.TorusGeometry(size * 0.75, size * 0.25, 32, 64);
        case 'box': return new THREE.BoxGeometry(size * 1.5, size * 1.5, size * 1.5, 10, 10, 10);
        case 'cone': return new THREE.ConeGeometry(size * 1.1, size * 1.8, 64, 32);
        case 'octahedron': return new THREE.OctahedronGeometry(size * 1.2, 2);
        case 'tetrahedron': return new THREE.TetrahedronGeometry(size * 1.2, 2);
        case 'dodecahedron': return new THREE.DodecahedronGeometry(size * 1.2, 2);
        case 'cylinder': return new THREE.CylinderGeometry(size * 0.9, size * 0.9, size * 1.8, 64, 32);
        case 'icosahedron':
        default: return new THREE.IcosahedronGeometry(size, 2);
    }
};

let canvas: OffscreenCanvas;
let renderer: THREE.WebGLRenderer;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let mesh: THREE.Mesh;
let innerMesh: THREE.Mesh;
let material: THREE.MeshBasicMaterial;
let innerMaterial: THREE.MeshBasicMaterial;
let currentGeo: THREE.IcosahedronGeometry;
let innerGeo: THREE.IcosahedronGeometry;

let VC = 0;
let shapeCache: Record<string, Float32Array> = {};
let morph = { t: 1, src: new Float32Array(0), dst: new Float32Array(0), active: false, currentShape: 'icosahedron' };

let color = '#7F77DD';
let oppositeColor = '#DD777F';
let bands = { bass: 0, mid: 0, high: 0 };
let lightingEnabled = false;
let floorHeight = 0.62;

let time = 0;
let rafID: number;
let startTime = 0;
let isBouncing = false; // Explicit control relative to combo
let bounceWeight = 0; // Target weight for delayed entry
let currentBounceWeight = 0; // Smoothed weight

function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function init(c: OffscreenCanvas, params: any) {
    console.log('MorphSphere Worker: init', params);
    canvas = c;
    startTime = params.startTime || 0;
    color = params.color;
    bands = params.bands;
    lightingEnabled = params.lightingEnabled;
    floorHeight = params.floorHeight;
    oppositeColor = params.oppositeColor || color;
    morph.currentShape = params.shape;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, params.width / params.height, 0.1, 1000);
    camera.position.z = 9;

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(params.width, params.height, false); // False means don't set DOM styles
    renderer.setClearColor(0x000000, 0);

    const BASE_SIZE = PHYSICS.sphere.baseSize;
    const BASE_SEGMENTS = 2;
    const baseGeo = new THREE.IcosahedronGeometry(BASE_SIZE, BASE_SEGMENTS);
    VC = baseGeo.attributes.position.count;

    SHAPES.forEach(shapeName => {
        const geo = createGeometry(shapeName, BASE_SIZE, BASE_SEGMENTS);
        const positions = geo.attributes.position;
        const arr = new Float32Array(VC * 3);
        const scale = BASE_SIZE;
        for (let i = 0; i < VC; i++) {
            const idx = Math.floor((i / VC) * positions.count);
            arr[i * 3] = positions.getX(idx);
            arr[i * 3 + 1] = positions.getY(idx);
            arr[i * 3 + 2] = positions.getZ(idx);
        }
        shapeCache[shapeName] = arr;
        geo.dispose();
    });
    baseGeo.dispose();

    currentGeo = new THREE.IcosahedronGeometry(BASE_SIZE, BASE_SEGMENTS);
    innerGeo = new THREE.IcosahedronGeometry(BASE_SIZE, BASE_SEGMENTS);
    
    material = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), wireframe: true, transparent: true, opacity: 0.85 });
    innerMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FFFFFF'), wireframe: true, transparent: true, opacity: 0.2 });
    
    mesh = new THREE.Mesh(currentGeo, material);
    innerMesh = new THREE.Mesh(innerGeo, innerMaterial);
    innerMesh.scale.setScalar(0.55);
    
    scene.add(mesh);
    scene.add(innerMesh);

    if (shapeCache[morph.currentShape]) {
         applyShapeDirectly(shapeCache[morph.currentShape]);
    }

    animate();
}

function applyShapeDirectly(vertexData: Float32Array) {
    const pos = currentGeo.attributes.position;
    const innerPos = innerGeo.attributes.position;
    for (let i = 0; i < VC; i++) {
        pos.setXYZ(i, vertexData[i * 3], vertexData[i * 3 + 1], vertexData[i * 3 + 2]);
        innerPos.setXYZ(i, vertexData[i * 3], vertexData[i * 3 + 1], vertexData[i * 3 + 2]);
    }
    pos.needsUpdate = true;
    innerPos.needsUpdate = true;
}

function resize(width: number, height: number) {
    if (!renderer) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

function updateShape(shape: string) {
    if (!shapeCache[shape] || morph.currentShape === shape) return;
    
    const pos = mesh.geometry.attributes.position;
    const src = new Float32Array(VC * 3);
    for (let i = 0; i < VC; i++) {
        src[i * 3] = pos.getX(i);
        src[i * 3 + 1] = pos.getY(i);
        src[i * 3 + 2] = pos.getZ(i);
    }
    
    morph.src = src;
    morph.dst = shapeCache[shape];
    morph.t = 0;
    morph.active = true;
    morph.currentShape = shape;
}

function animate() {
    rafID = requestAnimationFrame(animate);
    time += 0.016;

    let vertexData: Float32Array;
    
    if (morph.active && morph.t < 1) {
        morph.t = Math.min(1, morph.t + 0.025);
        const ease = easeInOutCubic(morph.t);
        vertexData = new Float32Array(VC * 3);
        for (let i = 0; i < VC * 3; i++) {
            vertexData[i] = morph.src[i] + (morph.dst[i] - morph.src[i]) * ease;
        }
        if (morph.t >= 1) morph.active = false;
    } else {
        vertexData = shapeCache[morph.currentShape];
    }

    applyShapeDirectly(vertexData);

    const fixedApexY = 2.5432;
    const floorY = - (floorHeight - 0.5) * 8.39;
    const targetFloor = floorY + PHYSICS.sphere.baseSize;
    const dynamicBounceAmplitude = fixedApexY - targetFloor;
    const dynamicSquashThreshold = Math.max(0, dynamicBounceAmplitude - 0.4);

    const bounceTime = (performance.now() - startTime) * PHYSICS.sphere.bounceSpeed;
    const rawOffset = (1 - Math.abs(Math.cos(bounceTime))) * dynamicBounceAmplitude;
    
    // DELAYED BOUNCE LOGIC: Controlled by main thread via isBouncing prop
    const targetWeight = isBouncing ? 1.0 : 0.0;
    currentBounceWeight = currentBounceWeight * 0.9 + targetWeight * 0.1; // Smooth entry/exit
    
    const currentOffset = rawOffset * currentBounceWeight;

    mesh.position.y = fixedApexY - currentOffset;
    innerMesh.position.y = fixedApexY - currentOffset;

    const squashFactor = currentOffset > dynamicSquashThreshold ? 
        1 - ((currentOffset - dynamicSquashThreshold) * PHYSICS.sphere.squashIntensity) : 1;
    const stretchFactor = 1 + (1 - squashFactor) * PHYSICS.sphere.stretchIntensity;
    
    const audioEnergy = bands.bass * PHYSICS.audio.bassWeight + bands.mid * PHYSICS.audio.midWeight + bands.high * PHYSICS.audio.highWeight;
    const visualDeform = 1 + audioEnergy;
    const sizeMultiplier = 1 + (audioEnergy * PHYSICS.audio.sizeMultiplier);
    
    mesh.scale.set(stretchFactor * visualDeform * sizeMultiplier, squashFactor * visualDeform * sizeMultiplier, stretchFactor * visualDeform * sizeMultiplier);
    const innerScale = stretchFactor * visualDeform * sizeMultiplier * PHYSICS.audio.innerMeshScale;
    innerMesh.scale.set(innerScale, innerScale, innerScale);

    mesh.rotation.x += 0.004 + bands.bass * 0.015;
    mesh.rotation.y += 0.006 + bands.mid * 0.01;
    innerMesh.rotation.x -= 0.002;
    innerMesh.rotation.y -= 0.004;
    innerMesh.rotation.z += 0.001;

    if (lightingEnabled) {
        // PALETTE LOGIC: Theme Color + Opposite Color
        const themeCol = new THREE.Color(color);
        const oppCol = new THREE.Color(oppositeColor);
        
        // Use a base temporal "drift" so it's always alive
        // Cycles every ~8 seconds
        const drift = (Math.sin(time * 0.8) + 1) / 2;
        
        // Use bass for theme, mid/high for opposite accents
        const audioT = Math.min(1.0, bands.mid * 2.0 + bands.high * 2.5);
        
        // Combine drift (30% weight) and audio (70% weight)
        const t = Math.min(1.0, drift * 0.3 + audioT * 0.7);
        
        material.color.copy(themeCol).lerp(oppCol, t);
        
        // Add brightness based on bass intensity
        material.color.multiplyScalar(0.85 + bands.bass * 0.4);
    }

    material.opacity = 0.7 + bands.bass * 0.25;
    innerMaterial.opacity = 0.25 + bands.bass * 0.2;

    renderer.render(scene, camera);
}

self.onerror = (err) => {
    console.error('MorphSphere Worker Error:', err);
};

self.onmessage = (e: MessageEvent) => {
    const { type, payload } = e.data;
    switch (type) {
        case 'init': 
            init(payload.canvas, payload.params); 
            break;
        case 'resize': 
            resize(payload.width, payload.height);
            break;
        case 'updateBands': 
            bands = payload.bands; 
            break;
        case 'updateColor': 
            color = payload.color; 
            if (material) material.color.set(color); 
            break;
        case 'updateFloor': 
            floorHeight = payload.floorHeight; 
            break;
        case 'updateShape': 
            updateShape(payload.shape); 
            break;
        case 'updateLighting':
            lightingEnabled = payload.lightingEnabled;
            break;
        case 'updateOppositeColor':
            oppositeColor = payload.oppositeColor;
            break;
        case 'updateBouncing':
            isBouncing = payload.isBouncing;
            break;
        case 'updateStartTime':
            startTime = payload.startTime;
            break;
    }
};
