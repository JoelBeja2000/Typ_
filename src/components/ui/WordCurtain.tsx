import React, { useState, useEffect, useRef } from 'react';

interface WordCurtainProps {
  text: string;
  color?: string;
  className?: string;
  frequencyBands?: { bass: number; mid: number; high: number };
  combo?: number;
  repulsionEnergy?: number;
  repulsionCenter?: { x: number; y: number };
  repulsionShape?: string;
  repulsionRotation?: number;
  floorHeight?: number;
}

export const WordCurtain: React.FC<WordCurtainProps> = ({ 
  text, 
  color = '#00ffcc', 
  className = '',
  frequencyBands = { bass: 0, mid: 0, high: 0 },
  combo = 0,
  repulsionCenter = { x: -1, y: -1 },
  repulsionEnergy = 0,
  repulsionShape = 'icosahedron',
  repulsionRotation = 0,
  floorHeight = 0.62
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
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
    
    workerRef.current = new Worker(new URL('../../workers/wordCurtain.worker.ts', import.meta.url), { type: 'module' });
    offscreenRef.current = canvas.transferControlToOffscreen();
    
    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
      isInitializedRef.current = false;
      if (container.contains(canvas)) container.removeChild(canvas);
    };
  }, []);

  // 2. Initialize when dimensions are ready
  // We use an empty dependency array because we only want to set up the observer once.
  // The individual update effects will handle the state sync after initialization.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        const newDims = { w: Math.floor(width), h: Math.floor(height) };
        setDims(newDims);

        if (workerRef.current) {
          if (!isInitializedRef.current && width > 0 && height > 0) {
            // DEFERRED INITIALIZATION
            workerRef.current.postMessage({
              type: 'init',
              payload: { 
                canvas: offscreenRef.current, 
                dims: newDims,
                text, color, frequencyBands, floorHeight,
                repulsion: { 
                  center: repulsionCenter, energy: repulsionEnergy, 
                  shape: repulsionShape, rotate: repulsionRotation 
                }
              }
            }, [offscreenRef.current!]);
            isInitializedRef.current = true;
          } else if (isInitializedRef.current) {
            workerRef.current.postMessage({ type: 'resize', payload: { dims: newDims } });
          }
        }
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only on mount

  // 3. Send state updates to Worker
  useEffect(() => { 
    if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateText', payload: { text } }); 
  }, [text]);

  useEffect(() => { 
    if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateColor', payload: { color } }); 
  }, [color]);

  useEffect(() => { 
    if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateAudio', payload: { frequencyBands } }); 
  }, [frequencyBands]);

  useEffect(() => { 
    if (isInitializedRef.current) workerRef.current?.postMessage({ type: 'updateFloor', payload: { floorHeight } }); 
  }, [floorHeight]);

  useEffect(() => { 
    if (isInitializedRef.current) {
      workerRef.current?.postMessage({ 
        type: 'updateRepulsion', 
        payload: { center: repulsionCenter, energy: repulsionEnergy, shape: repulsionShape, rotate: repulsionRotation } 
      }); 
    }
  }, [repulsionCenter, repulsionEnergy, repulsionShape, repulsionRotation]);

  // Pointer events bridging

  // Pointer events bridging
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    const getMouseXY = (e: PointerEvent) => {
      const rect = c.getBoundingClientRect();
      // Adjust coordinate space exactly as the old physics engine did
      const configW = dims.w; const configH = dims.h;
      return {
        x: e.clientX - rect.left - (dims.w / 2 - configW / 2),
        y: e.clientY - rect.top - (dims.h / 2 - configH / 2)
      };
    };

    const onPointerDown = (e: PointerEvent) => { const pos = getMouseXY(e); workerRef.current?.postMessage({ type: 'pointerEvent', payload: { type: 'down', ...pos } }); };
    const onPointerUp = (e: PointerEvent) => { const pos = getMouseXY(e); workerRef.current?.postMessage({ type: 'pointerEvent', payload: { type: 'up', ...pos } }); };
    const onPointerMove = (e: PointerEvent) => { const pos = getMouseXY(e); workerRef.current?.postMessage({ type: 'pointerEvent', payload: { type: 'move', ...pos } }); };

    c.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointermove', onPointerMove);

    return () => {
      c.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [dims.w, dims.h]);

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`} />
  );
};
