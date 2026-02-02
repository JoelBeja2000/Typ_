import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VisualsConfig, DEFAULT_VISUALS_CONFIG } from '../types/visuals';
import { getBirdPoints, getMusicTransform } from '../domain/visuals/modeling';

interface BirdAnimationProps {
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
}

const BirdAnimation: React.FC<BirdAnimationProps> = ({
    className = "",
    speed = 1.0,
    color = "#ffffff",
    bands,
    rotation = { x: 0, y: 0, z: 0 },
    position = { x: 0, y: 0, z: 0 },
    side = 'left',
    scale = 1.0,
    config = DEFAULT_VISUALS_CONFIG,
    combo = 0,
    onClick
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bandsRef = useRef(bands);
    const rotationRef = useRef(rotation);
    const positionRef = useRef(position);
    const scaleRef = useRef(scale);
    const configRef = useRef(config);
    const comboRef = useRef(combo);

    // Sync refs
    useEffect(() => { bandsRef.current = bands; }, [bands]);
    useEffect(() => { rotationRef.current = rotation; }, [rotation]);
    useEffect(() => { positionRef.current = position; }, [position]);
    useEffect(() => { scaleRef.current = scale; }, [scale]);
    useEffect(() => { configRef.current = config; }, [config]);
    useEffect(() => { comboRef.current = combo; }, [combo]);

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        // Dynamic sizing based on container
        const width = containerRef.current.clientWidth || 400;
        const height = containerRef.current.clientHeight || 400;
        renderer.setSize(width, height);
        containerRef.current.appendChild(renderer.domElement);

        const meshGroup = new THREE.Group();
        scene.add(meshGroup);
        camera.position.z = 10;

        let birdMesh: THREE.Mesh | null = null;
        let outerSphere: THREE.Mesh | null = null;
        let innerSphere: THREE.Mesh | null = null;
        let outerOriginalPositions: Float32Array | null = null;
        let innerOriginalPositions: Float32Array | null = null;

        const mainColor = new THREE.Color(color);

        if (configRef.current.type === 'bird') {
            const birdConf = configRef.current.bird;
            const birdMat = new THREE.MeshBasicMaterial({ color: mainColor, wireframe: true, transparent: true, opacity: 0.8 });
            const curve = new THREE.CatmullRomCurve3(getBirdPoints(0, undefined, birdConf, speed), true);
            const geo = new THREE.TubeGeometry(curve, birdConf.segments, birdConf.tubeRadius, birdConf.radialSegments, true);
            birdMesh = new THREE.Mesh(geo, birdMat);
            meshGroup.add(birdMesh);
        } else {
            const oConf = configRef.current.outerSphere;
            const iConf = configRef.current.innerSphere;

            const oGeo = new THREE.IcosahedronGeometry(oConf.size, oConf.segments);
            const oMat = new THREE.MeshBasicMaterial({ color: mainColor, wireframe: oConf.isWireframe, transparent: true, opacity: oConf.opacity });
            outerSphere = new THREE.Mesh(oGeo, oMat);
            outerOriginalPositions = oGeo.attributes.position.array.slice() as Float32Array;

            const iGeo = new THREE.IcosahedronGeometry(iConf.size, iConf.segments);
            const iMat = new THREE.MeshBasicMaterial({ color: mainColor, wireframe: iConf.isWireframe, transparent: true, opacity: iConf.opacity });
            innerSphere = new THREE.Mesh(iGeo, iMat);
            innerOriginalPositions = iGeo.attributes.position.array.slice() as Float32Array;

            meshGroup.add(outerSphere);
            meshGroup.add(innerSphere);
        }

        // --- WEB WORKER INITIALIZATION ---
        const worker = new Worker(new URL('../domain/visuals/modeling.worker.ts', import.meta.url), { type: 'module' });

        let isOuterWorking = false;
        let isInnerWorking = false;

        worker.onmessage = (e) => {
            const { positions, name } = e.data;
            if (name === 'outer' && outerSphere) {
                outerSphere.geometry.attributes.position.array.set(positions);
                outerSphere.geometry.attributes.position.needsUpdate = true;
                isOuterWorking = false;
            } else if (name === 'inner' && innerSphere) {
                innerSphere.geometry.attributes.position.array.set(positions);
                innerSphere.geometry.attributes.position.needsUpdate = true;
                isInnerWorking = false;
            }
        };

        const clock = new THREE.Clock();
        let frameId: number;

        function animate() {
            frameId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();
            const b = bandsRef.current;
            const conf = configRef.current;
            const comb = comboRef.current;

            if (conf.type === 'bird' && birdMesh) {
                birdMesh.geometry.dispose();
                const curve = new THREE.CatmullRomCurve3(getBirdPoints(time, b, conf.bird, speed), true, 'catmullrom', 0.5);
                birdMesh.geometry = new THREE.TubeGeometry(curve, conf.bird.segments, conf.bird.tubeRadius, conf.bird.radialSegments, true);
            } else if (conf.type === 'circle' && outerSphere && innerSphere) {
                if (outerOriginalPositions && !isOuterWorking) {
                    isOuterWorking = true;
                    const pos = outerSphere.geometry.attributes.position.array.slice() as Float32Array;
                    worker.postMessage({
                        name: 'outer',
                        positions: pos,
                        originalPositions: outerOriginalPositions,
                        time, bands: b, config: conf.outerSphere, combo: comb
                    }, [pos.buffer]);
                }
                if (innerOriginalPositions && !isInnerWorking) {
                    isInnerWorking = true;
                    const pos = innerSphere.geometry.attributes.position.array.slice() as Float32Array;
                    worker.postMessage({
                        name: 'inner',
                        positions: pos,
                        originalPositions: innerOriginalPositions,
                        time, bands: b, config: conf.innerSphere, combo: comb
                    }, [pos.buffer]);
                }

                outerSphere.rotation.y += 0.005 * conf.globalRotationSpeed;
                innerSphere.rotation.y -= 0.01 * conf.globalRotationSpeed;
                const energy = ((b?.bass || 0) + (b?.high || 0)) / 512;
                outerSphere.rotation.x += energy * 0.1;
                innerSphere.rotation.z += energy * 0.15;
            }

            const r = rotationRef.current;
            const p = positionRef.current;
            const s = scaleRef.current;
            const rotMult = side === 'right' ? -1 : 1;
            const musicXform = getMusicTransform(b, conf);

            meshGroup.rotation.x = THREE.MathUtils.degToRad(r.x + musicXform.rotation.x);
            meshGroup.rotation.y = THREE.MathUtils.degToRad(r.y * rotMult + musicXform.rotation.y * rotMult);
            meshGroup.rotation.z = THREE.MathUtils.degToRad(r.z * rotMult + musicXform.rotation.z * rotMult);
            meshGroup.position.set(p.x * rotMult + musicXform.offset.x * rotMult, p.y + musicXform.offset.y, p.z + musicXform.offset.z);
            meshGroup.scale.set(s, s, s);

            renderer.render(scene, camera);
        }

        animate();

        // Local variable to capture the element for cleanup
        const canvasElement = renderer.domElement;
        const currentContainer = containerRef.current;

        return () => {
            cancelAnimationFrame(frameId);
            worker.terminate();
            if (currentContainer && currentContainer.contains(canvasElement)) {
                currentContainer.removeChild(canvasElement);
            }
            renderer.dispose();
            scene.clear();
        };
    }, [color, side, speed, config.type]);

    return (
        <div
            ref={containerRef}
            className={`w-full h-full flex items-center justify-center pointer-events-auto cursor-pointer ${className}`}
            onClick={onClick}
        />
    );
};

export default BirdAnimation;
