import React, { useEffect, useRef } from 'react';

interface MorphSphereProps {
    className?: string;
    color?: string;
    bands?: { bass: number, mid: number, high: number };
    side?: 'left' | 'right';
    onClick?: (e: React.MouseEvent) => void;
    lightingEnabled?: boolean;
    shape?: string;
    floorHeight?: number;
    masterStartTime?: number;
    offsetY?: number;
}

const MorphSphere: React.FC<MorphSphereProps> = ({
    className = "",
    color = "#7F77DD",
    bands = { bass: 0, mid: 0, high: 0 },
    side = 'left',
    onClick,
    lightingEnabled = false,
    shape = 'icosahedron',
    floorHeight = 0.62,
    masterStartTime,
    offsetY
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const workerRef = useRef<Worker | null>(null);
    const isInitializedRef = useRef(false);
    const offscreenRef = useRef<OffscreenCanvas | null>(null);

    // 1. Create Worker and Canvas
    useEffect(() => {
        if (typeof window === 'undefined' || !containerRef.current) return;
        const container = containerRef.current;
        
        const canvas = document.createElement('canvas');
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.className = 'w-full h-full block';
        container.appendChild(canvas);
        
        workerRef.current = new Worker(new URL('../workers/morphSphere.worker.ts', import.meta.url), { type: 'module' });
        offscreenRef.current = canvas.transferControlToOffscreen();
        
        return () => {
            workerRef.current?.terminate();
            workerRef.current = null;
            isInitializedRef.current = false;
            if (container.contains(canvas)) container.removeChild(canvas);
        };
    }, []);

    // 2. Initialize when dimensions are ready
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver((entries) => {
            if (!entries[0]) return;
            const { width, height } = entries[0].contentRect;
            if (width === 0 || height === 0) return;

            if (workerRef.current) {
                if (!isInitializedRef.current) {
                    // DEFERRED INITIALIZATION
                    workerRef.current.postMessage({
                        type: 'init',
                        payload: { 
                            canvas: offscreenRef.current, 
                            params: { 
                                startTime: masterStartTime || performance.now(),
                                width, height, color, bands, 
                                lightingEnabled, shape, floorHeight 
                            } 
                        }
                    }, [offscreenRef.current!]);
                    isInitializedRef.current = true;
                } else {
                    workerRef.current.postMessage({ type: 'resize', payload: { width, height } });
                }
            }
        });
        observer.observe(container);

        return () => observer.disconnect();
    }, [color, bands, lightingEnabled, shape, floorHeight]);

    // Send props updates to worker
    useEffect(() => { 
        if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateBands', payload: { bands } }); 
    }, [bands]);

    useEffect(() => { 
        if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateColor', payload: { color } }); 
    }, [color]);

    useEffect(() => { 
        if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateFloor', payload: { floorHeight } }); 
    }, [floorHeight]);

    useEffect(() => { 
        if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateShape', payload: { shape } }); 
    }, [shape]);

    useEffect(() => {
        if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateLighting', payload: { lightingEnabled } });
    }, [lightingEnabled]);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onClick) onClick(e);
    };

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