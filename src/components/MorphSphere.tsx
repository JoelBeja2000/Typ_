import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PHYSICS } from '../config/physics';

interface MorphSphereProps {
    className?: string;
    color?: string;
    bands?: { bass: number, mid: number, high: number };
    side?: 'left' | 'right';
    onClick?: (e: React.MouseEvent) => void;
    lightingEnabled?: boolean;
    shape?: string;
    offsetY?: number;
}

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

const MorphSphere: React.FC<MorphSphereProps> = ({
    className = "",
    color = "#7F77DD",
    bands = { bass: 0, mid: 0, high: 0 },
    side = 'left',
    onClick,
    lightingEnabled = false,
    shape = 'icosahedron',
    floorHeight = 0.62
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bandsRef = useRef(bands);
    const meshRef = useRef<THREE.Mesh | null>(null);
    const innerMeshRef = useRef<THREE.Mesh | null>(null);
    const morphRef = useRef({ t: 1, src: new Float32Array(0), dst: new Float32Array(0), active: false, currentShape: shape });
    const shapeCacheRef = useRef<Record<string, Float32Array>>({});
    const vcRef = useRef(0);
    const floorHeightRef = useRef(floorHeight);

    useEffect(() => { bandsRef.current = bands; }, [bands]);
    useEffect(() => { floorHeightRef.current = floorHeight; }, [floorHeight]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const container = containerRef.current;
        if (!container) return;

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const scene = new THREE.Scene();
        const initialWidth = container.clientWidth || 300;
        const initialHeight = container.clientHeight || 500;
        
        // Ensure camera aspect matches initial container size to avoid squashing
        const camera = new THREE.PerspectiveCamera(50, initialWidth / initialHeight, 0.1, 1000);
        camera.position.z = 9;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(initialWidth, initialHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        
        // Handle dynamic resizing
        const resizeObserver = new ResizeObserver((entries) => {
            if (!entries[0]) return;
            const { width, height } = entries[0].contentRect;
            if (width === 0 || height === 0) return;
            
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });
        resizeObserver.observe(container);

        // Use lower segments to avoid NaN issues
        const BASE_SIZE = PHYSICS.sphere.baseSize;
        const BASE_SEGMENTS = 2;
        
        // Create base geometry
        const baseGeo = new THREE.IcosahedronGeometry(BASE_SIZE, BASE_SEGMENTS);
        const VC = baseGeo.attributes.position.count;

        // Create shape cache with normalized vertex counts
        const shapeCache: Record<string, Float32Array> = {};
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
        
        // Clean up base geometry
        baseGeo.dispose();

        // Use icosahedron as base for consistent vertex count
        const currentGeo = new THREE.IcosahedronGeometry(BASE_SIZE, BASE_SEGMENTS);
        const innerGeo = new THREE.IcosahedronGeometry(BASE_SIZE, BASE_SEGMENTS);
        
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(color),
            wireframe: true,
            transparent: true,
            opacity: 0.85,
        });
        
        const innerMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color('#FFFFFF'),
            wireframe: true,
            transparent: true,
            opacity: 0.2,
        });
        
        const mesh = new THREE.Mesh(currentGeo, material);
        const innerMesh = new THREE.Mesh(innerGeo, innerMaterial);
        innerMesh.scale.setScalar(0.55);
        
        meshRef.current = mesh;
        innerMeshRef.current = innerMesh;
        
        scene.add(mesh);
        scene.add(innerMesh);

        // Save to refs
        shapeCacheRef.current = shapeCache;
        vcRef.current = VC;
        
        let time = 0;
        
        function easeInOutCubic(t: number) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.016;

            const b = bandsRef.current;
            const morph = morphRef.current;
            
            // Handle morphing
            let vertexData: Float32Array;
            
            if (morph.active && morph.t < 1) {
                morph.t = Math.min(1, morph.t + 0.025);
                const ease = easeInOutCubic(morph.t);
                vertexData = new Float32Array(VC * 3);
                for (let i = 0; i < VC * 3; i++) {
                    vertexData[i] = morph.src[i] + (morph.dst[i] - morph.src[i]) * ease;
                }
                if (morph.t >= 1) {
                    morph.active = false;
                }
            } else {
                vertexData = shapeCache[morph.currentShape];
            }

            // Apply vertex positions
            const pos = currentGeo.attributes.position;
            const innerPos = innerGeo.attributes.position;
            for (let i = 0; i < VC; i++) {
                pos.setXYZ(i, vertexData[i * 3], vertexData[i * 3 + 1], vertexData[i * 3 + 2]);
                innerPos.setXYZ(i, vertexData[i * 3], vertexData[i * 3 + 1], vertexData[i * 3 + 2]);
            }
            pos.needsUpdate = true;
            innerPos.needsUpdate = true;

            // Apply internal vertical physical bounce (Gravitational acceleration model)
            // Calculate fixed ceiling originating from the 62% mark
            const fixedApexY = 2.5432;
            
            // Current user floor
            const currentFloorHeight = floorHeightRef.current;
            const floorY = - (currentFloorHeight - 0.5) * 8.39;
            const targetFloor = floorY + PHYSICS.sphere.baseSize;

            // Total vertical stretch needed to connect the fixed ceiling to the new floor distance
            const dynamicBounceAmplitude = fixedApexY - targetFloor;
            const dynamicSquashThreshold = Math.max(0, dynamicBounceAmplitude - 0.4);

            const bounceTime = performance.now() * PHYSICS.sphere.bounceSpeed;
            const currentOffset = (1 - Math.abs(Math.cos(bounceTime))) * dynamicBounceAmplitude;

            mesh.position.y = fixedApexY - currentOffset;
            innerMesh.position.y = fixedApexY - currentOffset;

            // Squash down from currentOffset
            const squashFactor = currentOffset > dynamicSquashThreshold ? 
                1 - ((currentOffset - dynamicSquashThreshold) * PHYSICS.sphere.squashIntensity) : 1;
            
            const stretchFactor = 1 + (1 - squashFactor) * PHYSICS.sphere.stretchIntensity;
            
            // Audio deformation math
            const audioEnergy = b.bass * PHYSICS.audio.bassWeight + b.mid * PHYSICS.audio.midWeight + b.high * PHYSICS.audio.highWeight;
            
            // 1. Structural vertex deformation
            const visualDeform = 1 + audioEnergy;
            
            // 2. Physical geometric scaling (New robust feature!)
            const sizeMultiplier = 1 + (audioEnergy * PHYSICS.audio.sizeMultiplier);
            
            mesh.scale.set(
                stretchFactor * visualDeform * sizeMultiplier, 
                squashFactor * visualDeform * sizeMultiplier, 
                stretchFactor * visualDeform * sizeMultiplier
            );
            
            const innerScale = stretchFactor * visualDeform * sizeMultiplier * PHYSICS.audio.innerMeshScale;
            innerMesh.scale.set(innerScale, innerScale, innerScale);

            // Rotation
            mesh.rotation.x += 0.004 + b.bass * 0.015;
            mesh.rotation.y += 0.006 + b.mid * 0.01;
            innerMesh.rotation.x -= 0.002;
            innerMesh.rotation.y -= 0.004;
            innerMesh.rotation.z += 0.001;

            // Color shift
            if (lightingEnabled) {
                const hue = (time * 12 + b.bass * 60) % 360;
                const sat = 0.55 + b.bass * 0.35;
                const lit = 0.45 + b.mid * 0.3;
                material.color.setHSL(hue / 360, sat, lit);
            }

            material.opacity = 0.7 + b.bass * 0.25;
            innerMaterial.opacity = 0.25 + b.bass * 0.2;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            resizeObserver.disconnect();
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            currentGeo.dispose();
            innerGeo.dispose();
            material.dispose();
            innerMaterial.dispose();
            renderer.dispose();
            scene.clear();
        };
    }, []);

    // Listen for shape changes to trigger morphing
    useEffect(() => {
        const mesh = meshRef.current;
        const VC = vcRef.current;
        const cache = shapeCacheRef.current;
        const morph = morphRef.current;
        
        if (!mesh || !VC || !cache[shape] || morph.currentShape === shape) return;
        
        // Get current positions as source
        const pos = mesh.geometry.attributes.position;
        const src = new Float32Array(VC * 3);
        for (let i = 0; i < VC; i++) {
            src[i * 3] = pos.getX(i);
            src[i * 3 + 1] = pos.getY(i);
            src[i * 3 + 2] = pos.getZ(i);
        }
        
        // Start morph
        morph.src = src;
        morph.dst = cache[shape];
        morph.t = 0;
        morph.active = true;
        morph.currentShape = shape;
    }, [shape]);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onClick) onClick(e);
    };

    useEffect(() => {
        if (meshRef.current) {
            (meshRef.current.material as THREE.MeshBasicMaterial).color.set(color);
        }
    }, [color]);

    return (
        <div
            ref={containerRef}
            className={`w-full h-full flex items-center justify-center pointer-events-auto cursor-pointer ${className}`}
            onClick={handleClick}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default MorphSphere;