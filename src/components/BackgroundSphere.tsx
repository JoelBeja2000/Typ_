import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VisualsConfig, DEFAULT_VISUALS_CONFIG } from '../types/visuals';
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
    speed = 1.0,
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

    // Modulo de Color Rítmico
    const [dynamicColor, setDynamicColor] = React.useState(new THREE.Color(color));

    useEffect(() => {
        // Instant update if base color changes (e.g. palette change)
        setDynamicColor(new THREE.Color(color));
    }, [color]);

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

        let outerSphere: THREE.Mesh | null = null;
        let innerSphere: THREE.Mesh | null = null;
        let outerOriginalPositions: Float32Array | null = null;
        let innerOriginalPositions: Float32Array | null = null;

        // Base material color ref for animation loop
        const baseColorRef = new THREE.Color(color);

        // ALWAYS RENDER SPHERES (Bird mode removed)
        const oConf = configRef.current.outerSphere;
        const iConf = configRef.current.innerSphere;

        const oGeo = new THREE.IcosahedronGeometry(oConf.size, oConf.segments);
        const oMat = new THREE.MeshBasicMaterial({ color: baseColorRef, wireframe: oConf.isWireframe, transparent: true, opacity: oConf.opacity });
        outerSphere = new THREE.Mesh(oGeo, oMat);
        outerOriginalPositions = oGeo.attributes.position.array.slice() as Float32Array;

        const iGeo = new THREE.IcosahedronGeometry(iConf.size, iConf.segments);
        const iMat = new THREE.MeshBasicMaterial({ color: baseColorRef, wireframe: iConf.isWireframe, transparent: true, opacity: iConf.opacity });
        innerSphere = new THREE.Mesh(iGeo, iMat);
        innerOriginalPositions = iGeo.attributes.position.array.slice() as Float32Array;

        meshGroup.add(outerSphere);
        meshGroup.add(innerSphere);

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

            // RHYTHMIC COLOR PULSE
            // RHYTHMIC COLOR PULSE
            if (activeLightingRef.current) {
                const energy = ((b?.bass || 0) + (b?.mid || 0)) / 512; // Normalize 0-1

                // Keyboard Gradient Logic Replication
                // Left side (Bass/Keys 1-5): Blue/Cyan (~220 hue)
                // Right side (Treble/Keys 6-0): Pink/Red (~340 hue)
                const targetHue = side === 'left' ? 220 : 340;

                // Intensity modulates saturation and lightness for "glow" effect
                const saturation = 0.7 + (energy * 0.3); // 70-100%
                const lightness = 0.5 + (energy * 0.4);  // 50-90%

                const rhythmicColor = new THREE.Color().setHSL(targetHue / 360, saturation, lightness);

                // Pulse size slighty with color
                const pulseScale = 1.0 + (energy * 0.2);

                if (outerSphere) {
                    (outerSphere.material as THREE.MeshBasicMaterial).color.copy(rhythmicColor);
                    // Optional: could also pulse opacity slightly
                }
                if (innerSphere) {
                    (innerSphere.material as THREE.MeshBasicMaterial).color.copy(rhythmicColor);
                }
            } else {
                if (outerSphere) (outerSphere.material as THREE.MeshBasicMaterial).color.copy(baseColorRef);
                if (innerSphere) (innerSphere.material as THREE.MeshBasicMaterial).color.copy(baseColorRef);
            }

            // ALWAYS ANIMATE SPHERES
            if (outerSphere && innerSphere) {
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

export default BackgroundSphere;
