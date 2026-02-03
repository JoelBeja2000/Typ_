import React from 'react';
import BirdAnimation from './BirdAnimation';
import { VisualsConfig } from '../types/visuals';

interface WordPanelProps {
    currentPhrase: string;
    normalizedTypedText: string;
    currentWordInfo: { word: string; userTypedSlice: string };
    isComposingState: boolean;
    palette: string;
    customColor: string;
    frequencyBands: { bass: number; mid: number; high: number };
    birdRotation: { x: number; y: number; z: number };
    birdPos3D: { x: number; y: number; z: number };
    birdSize: number;
    visualsConfig: VisualsConfig;
    combo: number;
    comboMultiplier: number;
    isMusicLightingEnabled: boolean;
    onDimensionalMenu: (e: React.MouseEvent | any) => void;
    PALETTE_COLORS: Record<string, string>;
}

export const WordPanel: React.FC<WordPanelProps> = ({
    currentPhrase,
    normalizedTypedText,
    currentWordInfo,
    isComposingState,
    palette,
    customColor,
    frequencyBands,
    birdRotation,
    birdPos3D,
    birdSize,
    visualsConfig,
    combo,
    comboMultiplier,
    isMusicLightingEnabled,
    onDimensionalMenu,
    PALETTE_COLORS,
}) => {
    const renderVocabField = () => {
        return (
            <div className="w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-10 md:p-14 min-h-[180px] flex flex-col justify-center relative overflow-hidden transition-all duration-1000 shadow-inner">
                <div className="font-mono text-2xl md:text-3xl relative mx-12 md:mx-20">
                    <div className="text-[var(--text-ghost)] whitespace-pre-wrap leading-relaxed">
                        {currentPhrase.split('').map((char, i) => {
                            let color = "text-[var(--text-ghost)]";
                            if (i < normalizedTypedText.length) {
                                color = normalizedTypedText[i] === char ? "text-[var(--accent-primary)]" : "text-red-400 bg-red-500/10 border-b-2 border-red-500/30";
                            }
                            return (
                                <span key={i} className={`${color} transition-all inline-block relative`}>
                                    {char === ' ' ? '\u00A0' : char}
                                    {i === normalizedTypedText.length && (
                                        <span className="absolute left-0 bottom-[-4px] w-full h-[3px] bg-[var(--accent-primary)] animate-pulse shadow-[0_0_15px_var(--accent-primary)]" />
                                    )}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    const sphereColor = palette === 'custom' ? customColor : PALETTE_COLORS[palette] || customColor;

    return (
        <div className="w-full relative group flex justify-center">
            {/* CENTRAL CINEMATIC BOX */}
            <div className="w-full bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative" style={{ overflow: 'visible' }}>

                {/* CONTENT AREA */}
                <div className="w-full flex-grow flex flex-col items-center select-none">
                    <div className="w-full">
                        {renderVocabField()}
                    </div>

                    {/* BOTTOM INTERACTIVE GROUP: Word Pill + 3D Animations */}
                    <div className="w-full flex flex-col items-center gap-4 mt-6 relative">
                        {/* SPHERES CONTAINER - ABSOLUTE POSITIONING */}
                        {/* LEFT SPHERE */}
                        <div className="absolute hidden md:block"
                            style={{
                                left: '0px',
                                top: '50%',
                                transform: `translateY(-50%)`,
                                width: `${birdSize * 0.8}px`,
                                height: `${birdSize * 0.8}px`,
                                pointerEvents: 'auto',
                                zIndex: 50,
                                opacity: 0.8
                            }}>
                            <BirdAnimation
                                key={`circle-left`}
                                color={sphereColor}
                                speed={0.75}
                                bands={frequencyBands}
                                rotation={birdRotation}
                                position={birdPos3D}
                                side="left"
                                scale={(birdSize * 0.8) / 180}
                                config={visualsConfig}
                                combo={combo * comboMultiplier}
                                lightingEnabled={isMusicLightingEnabled}
                                onClick={onDimensionalMenu} />
                        </div>
                        {/* RIGHT SPHERE */}
                        <div className="absolute hidden md:block"
                            style={{
                                right: '0px',
                                top: '50%',
                                transform: `translateY(-50%)`,
                                width: `${birdSize * 0.8}px`,
                                height: `${birdSize * 0.8}px`,
                                pointerEvents: 'auto',
                                zIndex: 50,
                                opacity: 0.8
                            }}>
                            <BirdAnimation
                                key={`circle-right`}
                                color={sphereColor}
                                speed={0.75}
                                bands={frequencyBands}
                                rotation={birdRotation}
                                position={birdPos3D}
                                side="right"
                                scale={(birdSize * 0.8) / 180}
                                config={visualsConfig}
                                combo={combo * comboMultiplier}
                                lightingEnabled={isMusicLightingEnabled}
                                onClick={onDimensionalMenu} />
                        </div>

                        {/* CURRENT WORD PILL SECTION */}
                        <div className="relative mt-4 overflow-visible flex items-center justify-center gap-8" style={{ height: `${birdSize * 0.8}px` }}>
                            <div className="bg-[var(--bg-floating)] backdrop-blur-3xl border border-[var(--border-strong)] rounded-[2.5rem] px-14 h-24 flex items-center justify-center min-w-[400px] shadow-3xl scale-110 z-30 relative overflow-visible">
                                <div className="relative font-mono text-4xl flex items-center h-full min-w-[200px]">
                                    <div className="absolute inset-0 text-[var(--text-ghost)] whitespace-pre flex items-center justify-start pointer-events-none opacity-40">{currentWordInfo.word}</div>
                                    <div className="relative flex items-center whitespace-pre h-full">
                                        {currentWordInfo.userTypedSlice.split('').map((userChar, idx) => {
                                            const correct = userChar === (currentWordInfo.word[idx] || '');
                                            const color = (isComposingState && idx === currentWordInfo.userTypedSlice.length - 1) ? "text-yellow-400" : (correct ? 'text-[var(--accent-primary)]' : 'text-red-400 bg-red-500/10 border-b-2 border-red-500/30');
                                            return <span key={idx} className={`relative inline-block ${color}`}>{userChar === ' ' ? '\u00A0' : userChar}</span>;
                                        })}
                                        <span className="inline-block w-0.5 h-10 bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] animate-pulse rounded-full ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordPanel;