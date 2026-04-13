import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

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
    offsetY = 0
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bandsRef = useRef(bands);
    const meshRef = useRef<THREE.Mesh | null>(null);
    const innerMeshRef = useRef<THREE.Mesh | null>(null);
    const morphRef = useRef({ t: 1, src: new Float32Array(0), dst: new Float32Array(0), active: false, currentShape: shape });
    const shapeCacheRef = useRef<Record<string, Float32Array>>({});
    const vcRef = useRef(0);

    useEffect(() => { bandsRef.current = bands; }, [bands]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const container = containerRef.current;
        if (!container) return;

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        camera.position.z = 9;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        const width = container.clientWidth || 180;
        const height = container.clientHeight || 180;
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Use lower segments to avoid NaN issues
        const BASE_SIZE = 2;
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

            // Apply external vertical offset (bounce)
            mesh.position.y = -offsetY;
            innerMesh.position.y = -offsetY;

            // Squash and Stretch: scale Y down and X/Z up when hitting bottom
            // offsetY max is 1.5. Squash happens when offsetY > 1.3
            const squashFactor = offsetY > 1.3 ? 1 - (offsetY - 1.3) * 0.8 : 1;
            const stretchFactor = 1 + (1 - squashFactor) * 0.5;
            
            // Audio deformation
            const audioDeform = 1 + b.bass * 0.5 + b.mid * 0.3 + b.high * 0.15;
            
            mesh.scale.set(stretchFactor * audioDeform, squashFactor * audioDeform, stretchFactor * audioDeform);
            innerMesh.scale.set(stretchFactor * audioDeform * 0.55, squashFactor * audioDeform * 0.55, stretchFactor * audioDeform * 0.55);

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