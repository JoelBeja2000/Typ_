import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VisualsConfig, DEFAULT_VISUALS_CONFIG, GeometryType } from '../types/visuals';
import { getMusicTransform } from '../domain/visuals/modeling';

interface BackgroundSphereProps {
    className?: string;
    speed?: number;
    color?: string;
    bands?: { bass: number, mid: number, high: number };
    rotation?: { x: number, y: number, z: number };
    position?: { x: number, y: number, z: number };
    side?: 'left' | 'right';
    scale?: number;
    config?: VisualsConfig;
    combo?: number;
    onClick?: (e: React.MouseEvent) => void;
    lightingEnabled?: boolean;
}

const BackgroundSphere: React.FC<BackgroundSphereProps> = ({
    className = "",
    color = "#ffffff",
    bands,
    rotation = { x: 0, y: 0, z: 0 },
    position = { x: 0, y: 0, z: 0 },
    side = 'left',
    scale = 1.0,
    config = DEFAULT_VISUALS_CONFIG,
    combo = 0,
    onClick,
    lightingEnabled = false
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bandsRef = useRef(bands);
    const rotationRef = useRef(rotation);
    const positionRef = useRef(position);
    const scaleRef = useRef(scale);
    const configRef = useRef(config);
    const comboRef = useRef(combo);
    const activeLightingRef = useRef(lightingEnabled);

    // Sync refs
    useEffect(() => { bandsRef.current = bands; }, [bands]);
    useEffect(() => { rotationRef.current = rotation; }, [rotation]);
    useEffect(() => { positionRef.current = position; }, [position]);
    useEffect(() => { scaleRef.current = scale; }, [scale]);
    useEffect(() => { configRef.current = config; }, [config]);
    useEffect(() => { comboRef.current = combo; }, [combo]);
    useEffect(() => { activeLightingRef.current = lightingEnabled; }, [lightingEnabled]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // AGGRESSIVE CLEANUP: Ensure no zombie canvases exist
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        const width = container.clientWidth || 400;
        const height = container.clientHeight || 400;
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const meshGroup = new THREE.Group();
        scene.add(meshGroup);
        camera.position.z = 10;

        const BASE_SEGMENTS = 4;
        const BASE_SIZE = 7;
        const baseGeo = new THREE.IcosahedronGeometry(BASE_SIZE, BASE_SEGMENTS);
        const vertexCount = baseGeo.attributes.position.count;

        const sampleGeo = (geo: THREE.BufferGeometry) => {
            const positions = geo.attributes.position;
            const output = new Float32Array(vertexCount * 3);
            for (let i = 0; i < vertexCount; i++) {
                const idx = Math.floor((i / vertexCount) * positions.count);
                output[i * 3] = positions.getX(idx);
                output[i * 3 + 1] = positions.getY(idx);
                output[i * 3 + 2] = positions.getZ(idx);
            }
            geo.dispose();
            return output;
        };

        const createShapePositions = (shape: GeometryType, size: number) => {
            let geo: THREE.BufferGeometry;
            switch (shape) {
                case 'box': geo = new THREE.BoxGeometry(size * 1.5, size * 1.5, size * 1.5, 8, 8, 8); break;
                case 'octahedron': geo = new THREE.OctahedronGeometry(size, 4); break;
                case 'tetrahedron': geo = new THREE.TetrahedronGeometry(size, 4); break;
                case 'dodecahedron': geo = new THREE.DodecahedronGeometry(size, 2); break;
                case 'knot': geo = new THREE.TorusKnotGeometry(size * 0.6, size * 0.2, 128, 32); break;
                case 'torus': geo = new THREE.TorusGeometry(size * 0.8, size * 0.3, 32, 64); break;
                case 'icosahedron':
                default: geo = new THREE.IcosahedronGeometry(size, BASE_SEGMENTS); break;
            }
            return sampleGeo(geo);
        };

        // BAKE ALL SHAPES
        const currentConf = configRef.current;
        const outerShapeCache: Record<string, Float32Array> = {
            icosahedron: createShapePositions('icosahedron', currentConf.outerSphere.size),
            box: createShapePositions('box', currentConf.outerSphere.size),
            octahedron: createShapePositions('octahedron', currentConf.outerSphere.size),
            tetrahedron: createShapePositions('tetrahedron', currentConf.outerSphere.size),
            dodecahedron: createShapePositions('dodecahedron', currentConf.outerSphere.size),
            knot: createShapePositions('knot', currentConf.outerSphere.size),
            torus: createShapePositions('torus', currentConf.outerSphere.size),
        };

        const innerShapeCache: Record<string, Float32Array> = {
            icosahedron: createShapePositions('icosahedron', currentConf.innerSphere.size),
            box: createShapePositions('box', currentConf.innerSphere.size),
            octahedron: createShapePositions('octahedron', currentConf.innerSphere.size),
            tetrahedron: createShapePositions('tetrahedron', currentConf.innerSphere.size),
            dodecahedron: createShapePositions('dodecahedron', currentConf.innerSphere.size),
            knot: createShapePositions('knot', currentConf.innerSphere.size),
            torus: createShapePositions('torus', currentConf.innerSphere.size),
        };

        const baseColorRef = new THREE.Color(color);
        const oGeo = baseGeo.clone();
        const oMat = new THREE.MeshBasicMaterial({ color: baseColorRef, wireframe: currentConf.outerSphere.isWireframe, transparent: true, opacity: currentConf.outerSphere.opacity });
        const outerMesh = new THREE.Mesh(oGeo, oMat);

        const iGeo = baseGeo.clone();
        const iMat = new THREE.MeshBasicMaterial({ color: baseColorRef, wireframe: currentConf.innerSphere.isWireframe, transparent: true, opacity: currentConf.innerSphere.opacity });
        const innerMesh = new THREE.Mesh(iGeo, iMat);

        meshGroup.add(outerMesh);
        meshGroup.add(innerMesh);

        let outerSrc = outerShapeCache[currentConf.outerSphere.shape].slice();
        let outerDst = outerShapeCache[currentConf.outerSphere.shape].slice();
        let innerSrc = innerShapeCache[currentConf.innerSphere.shape].slice();
        let innerDst = innerShapeCache[currentConf.innerSphere.shape].slice();
        let activeShape = currentConf.outerSphere.shape;
        let morphProg = 1.0;

        const worker = new Worker(new URL('../domain/visuals/modeling.worker.ts', import.meta.url), { type: 'module' });
        let isOuterWorking = false;
        let isInnerWorking = false;

        worker.onmessage = (e) => {
            const { positions, name } = e.data;
            if (name === 'outer' && outerMesh) {
                outerMesh.geometry.attributes.position.array.set(positions);
                outerMesh.geometry.attributes.position.needsUpdate = true;
                isOuterWorking = false;
            } else if (name === 'inner' && innerMesh) {
                innerMesh.geometry.attributes.position.array.set(positions);
                innerMesh.geometry.attributes.position.needsUpdate = true;
                isInnerWorking = false;
            }
        };

        const clock = new THREE.Clock();
        let frameId: number;

        function animate() {
            frameId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();
            const dt = clock.getDelta();
            const b = bandsRef.current;
            const conf = configRef.current;
            const comb = comboRef.current;

            // Trigger Morph on shape change - Check both inner AND outer
            if (conf && (activeShape !== conf.outerSphere.shape || activeShape !== conf.innerSphere.shape)) {
                if (outerMesh.geometry.attributes.position && innerMesh.geometry.attributes.position) {
                    outerSrc = (outerMesh.geometry.attributes.position.array as Float32Array).slice();
                    innerSrc = (innerMesh.geometry.attributes.position.array as Float32Array).slice();
                }
                const nextOuter = conf.outerSphere.shape;
                const nextInner = conf.innerSphere.shape;
                
                outerDst = outerShapeCache[nextOuter] || outerShapeCache['icosahedron'];
                innerDst = innerShapeCache[nextInner] || innerShapeCache['icosahedron'];
                
                activeShape = nextOuter; // We use outer as the "master" sync for both
                morphProg = 0.0;
            }

            if (morphProg < 1.0) {
                morphProg = Math.min(1.0, morphProg + dt * conf.outerSphere.morphSpeed);
            }

            if (activeLightingRef.current) {
                const energy = ((b?.bass || 0) + (b?.mid || 0)) / 512;
                const rhythmicColor = new THREE.Color().setHSL((side === 'left' ? 220 : 340) / 360, 0.7 + energy * 0.3, 0.5 + energy * 0.4);
                (outerMesh.material as THREE.MeshBasicMaterial).color.copy(rhythmicColor);
                (innerMesh.material as THREE.MeshBasicMaterial).color.copy(rhythmicColor);
            } else {
                (outerMesh.material as THREE.MeshBasicMaterial).color.copy(baseColorRef);
                (innerMesh.material as THREE.MeshBasicMaterial).color.copy(baseColorRef);
            }

            if (!isOuterWorking && outerSrc && outerDst) {
                isOuterWorking = true;
                const pos = outerMesh.geometry.attributes.position.array.slice() as Float32Array;
                worker.postMessage({
                    name: 'outer', positions: pos, srcPositions: outerSrc, dstPositions: outerDst,
                    morphProgress: morphProg, time, bands: b, config: conf.outerSphere, combo: comb
                }, [pos.buffer]);
            }
            if (!isInnerWorking && innerSrc && innerDst) {
                isInnerWorking = true;
                const pos = innerMesh.geometry.attributes.position.array.slice() as Float32Array;
                worker.postMessage({
                    name: 'inner', positions: pos, srcPositions: innerSrc, dstPositions: innerDst,
                    morphProgress: morphProg, time, bands: b, config: conf.innerSphere, combo: comb
                }, [pos.buffer]);
            }

            outerMesh.rotation.y += 0.005 * conf.globalRotationSpeed;
            innerMesh.rotation.y -= 0.01 * conf.globalRotationSpeed;
            const audioEnergy = ((b?.bass || 0) + (b?.high || 0)) / 512;
            outerMesh.rotation.x += audioEnergy * 0.1;
            innerMesh.rotation.z += audioEnergy * 0.15;

            const r = rotationRef.current;
            const p = positionRef.current;
            const s = scaleRef.current;
            const musicXform = getMusicTransform(b, conf);
            meshGroup.rotation.set(THREE.MathUtils.degToRad(r.x + musicXform.rotation.x), THREE.MathUtils.degToRad(r.y * (side === 'right' ? -1 : 1) + musicXform.rotation.y * (side === 'right' ? -1 : 1)), THREE.MathUtils.degToRad(r.z * (side === 'right' ? -1 : 1) + musicXform.rotation.z * (side === 'right' ? -1 : 1)));
            // We ignore p.x here because the containers are already positioned Left/Right in WordPanel layout.
            // This prevents "double-positioning" that separates inner/outer meshes visually.
            meshGroup.position.set(musicXform.offset.x * (side === 'right' ? -1 : 1), p.y + musicXform.offset.y, p.z + musicXform.offset.z);
            meshGroup.scale.set(s, s, s);
            renderer.render(scene, camera);
        }

        animate();
        return () => {
            cancelAnimationFrame(frameId);
            worker.terminate();
            if (container && renderer.domElement && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
            scene.clear();
        };
    }, [color, side]);

    return (
        <div
            ref={containerRef}
            className={`w-full h-full flex items-center justify-center pointer-events-auto cursor-pointer ${className}`}
            onClick={onClick}
        />
    );
};

export default BackgroundSphere;
