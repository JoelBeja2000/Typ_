import React, { useRef, useEffect } from 'react';

interface AudioWaveProps {
    analyser: AnalyserNode;
    active: boolean;
    color: string;
    type: 'kick' | 'bass' | 'hihat' | 'master';
    opacityMultiplier?: number;
    yOffset?: number; // Shifts the wave up or down
}

export const AudioWave: React.FC<AudioWaveProps> = ({ analyser, active, color, type, opacityMultiplier = 1, yOffset = 0 }) => {
    const pathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationId: number;
        let time = 0;
        let smoothedEnergy = 0;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const render = () => {
            analyser.getByteFrequencyData(dataArray);

            let currentEnergy = 0;

            // Specialized Frequency Detection
            if (type === 'kick') {
                for (let i = 0; i < 4; i++) currentEnergy += dataArray[i];
                currentEnergy /= 4;
            } else if (type === 'bass') {
                for (let i = 2; i < 12; i++) currentEnergy += dataArray[i];
                currentEnergy /= 10;
            } else if (type === 'hihat' || type === 'percussion' || type === 'snare' || type === 'ghost') {
                for (let i = 30; i < 60; i++) currentEnergy += dataArray[i];
                currentEnergy /= 30;
                currentEnergy *= 3;
            } else if (type === 'lead') {
                for (let i = 10; i < 30; i++) currentEnergy += dataArray[i];
                currentEnergy /= 20;
            } else if (type === 'ambient') {
                for (let i = 0; i < 20; i++) currentEnergy += dataArray[i];
                currentEnergy /= 20;
            } else { // master or unknown type
                for (let i = 0; i < 20; i++) currentEnergy += dataArray[i];
                currentEnergy /= 20;
            }

            const normEnergy = Math.min(currentEnergy / 255, 1);
            smoothedEnergy += (normEnergy - smoothedEnergy) * 0.15;

            const width = 200;
            const height = 40;
            const centerY = (height / 2) + yOffset;
            const segments = 24;

            time += 0.02 + smoothedEnergy * 0.05;

            const points: { x: number, y: number }[] = [];

            for (let i = 0; i <= segments; i++) {
                const x = (i / segments) * width;
                const normalizedX = (i / segments) * 2 - 1;
                const mask = Math.exp(-Math.pow(normalizedX * 1.8, 2));

                let offset = 0;
                const amp = 5 + smoothedEnergy * 25;

                if (type === 'kick') {
                    offset = Math.sin(time * 8) * amp * mask * Math.cos(normalizedX * Math.PI);
                } else if (type === 'hihat' || (type as string) === 'snare' || (type as string) === 'ghost') {
                    offset = Math.sin(normalizedX * 20 + time * 30) * amp * 0.4 * mask;
                    offset += (Math.random() - 0.5) * amp * 0.2 * mask;
                } else {
                    offset = Math.sin(normalizedX * 4 + time * 5) * amp * mask;
                    offset += Math.sin(normalizedX * 8 - time * 3) * (amp * 0.3) * mask;
                }

                points.push({ x, y: centerY + offset });
            }

            const path = points.reduce((acc, p, i) => {
                if (i === 0) return `M ${p.x},${p.y}`;
                const p0 = points[i - 1];
                const cp1x = p0.x + (p.x - p0.x) / 2;
                return acc + ` C ${cp1x},${p0.y} ${cp1x},${p.y} ${p.x},${p.y}`;
            }, "");

            if (pathRef.current) {
                pathRef.current.setAttribute('d', path);
                pathRef.current.setAttribute('stroke-width', (0.8 + smoothedEnergy * 1.5).toFixed(2));
            }

            if (containerRef.current) {
                const targetOpacity = active ? (0.6 + smoothedEnergy * 0.4) * opacityMultiplier : 0.1;
                containerRef.current.style.opacity = targetOpacity.toString();
            }

            animationId = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationId);
    }, [analyser, type, yOffset, active, opacityMultiplier]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl bg-blend-screen" style={{
            transition: 'opacity 0.2s ease-out'
        }}>
            <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                <path
                    ref={pathRef}
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};
