import React, { useState } from 'react';
import BirdAnimation from './BirdAnimation';
import { VisualsConfig } from '../types/visuals';

const PHASE_COLORS: Record<string, string> = {
    'fase_1': '#22d3ee',
    'fase_2': '#60a5fa',
    'fase_3': '#facc15',
    'fase_4': '#fb923c',
    'fase_6': '#f87171',
    'fase_7': '#c084fc',
};

const FINGER_CODE_MAP: Record<string, string> = {
    'L2': 'Índice Izq.',
    'L3': 'Corazón Izq.',
    'L4': 'Anular Izq.',
    'L5': 'Meñique Izq.',
    'R2': 'Índice Der.',
    'R3': 'Corazón Der.',
    'R4': 'Anular Der.',
    'R5': 'Meñique Der.',
};

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
    isCircuitMode?: boolean;
    circuitTimer?: number;
    circuitTitle?: string;
    onCircuitCycle?: () => void;
    isLevelActive?: boolean;
    onSelectLevel?: (level: any) => void;
    themeScheme?: 'dark' | 'light';
}

import { GUIDE_PHASES } from '../data/GuideData';

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
    isCircuitMode,
    circuitTimer,
    circuitTitle,
    onCircuitCycle,
    isLevelActive,
    onSelectLevel,
    themeScheme = 'dark',
}) => {
    const textColor = themeScheme === 'light' ? 'text-black' : 'text-white';
    
    const [expandedStars, setExpandedStars] = useState<number | null>(null);
    const [expandedPractice, setExpandedPractice] = useState<string | null>(null);

    const practicePhases = GUIDE_PHASES.filter(p => 
        ['fase_1', 'fase_2', 'fase_3', 'fase_4', 'fase_6'].includes(p.id)
    );

    const levelsByStars = {
        1: GUIDE_PHASES.flatMap(p => p.levels.filter(l => l.difficulty === 1)),
        2: GUIDE_PHASES.flatMap(p => p.levels.filter(l => l.difficulty === 2)),
        3: GUIDE_PHASES.flatMap(p => p.levels.filter(l => l.difficulty === 3)),
    };

    const toggleStars = (stars: number) => {
        setExpandedStars(expandedStars === stars ? null : stars);
    };

    const renderStars = (difficulty: number) => {
        return (
            <div className="flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                    <i key={i} className={`fa fa-star text-[6px] ${i < difficulty ? 'text-amber-400' : 'text-white/10'}`}></i>
                ))}
            </div>
        );
    };

    const renderLevelSelector = () => {
        return (
            <div className="w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-6 flex flex-col items-center relative overflow-hidden transition-all duration-1000 shadow-inner">
                <div className="w-full max-w-md space-y-4">
                    {[1, 2, 3].map(stars => (
                        <div key={stars} className="w-full">
                            <button
                                onClick={() => toggleStars(stars)}
                                className="w-full flex items-center justify-between px-4 py-3 bg-[var(--bg-glass)] border border-[var(--border-glass)] rounded-xl hover:border-[var(--accent-primary)] transition-all group"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                        {stars} Estrella{stars > 1 ? 's' : ''}
                                    </span>
                                    <span className="flex gap-0.5">
                                        {[...Array(3)].map((_, i) => (
                                            <i key={i} className={`fa fa-star text-[6px] ${i < stars ? 'text-amber-400' : 'text-white/10'}`}></i>
                                        ))}
                                    </span>
                                </span>
                                <i className={`fa fa-chevron-down text-xs text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-all ${expandedStars === stars ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedStars === stars ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                <div className="grid grid-colss-1 gap-3 p-2">
                                    {levelsByStars[stars as 1 | 2 | 3].slice(0, 4).map(level => (
                                        <button
                                            key={level.id}
                                            onClick={() => onSelectLevel && onSelectLevel(level)}
                                            className="w-full group relative p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-primary)] transition-all flex items-center justify-center gap-1 overflow-hidden"
                                        >
                                            <span className="text-[10px] font-black uppercase tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors relative z-10 text-center">{level.title}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="border-t border-[var(--border-glass)] my-4"></div>

                    <div className="w-full">
                        <button
                            onClick={() => setExpandedPractice(expandedPractice ? null : 'practice')}
                            className="w-full flex items-center justify-between px-4 py-3 bg-[var(--bg-glass)] border border-[var(--border-glass)] rounded-xl hover:border-[var(--accent-primary)] transition-all group"
                        >
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                Práctica de Dedos
                            </span>
                            <i className={`fa fa-chevron-down text-xs text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-all ${expandedPractice ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedPractice ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <div className="grid grid-cols-1 gap-3 p-2">
                                {practicePhases.map(phase => (
                                    <div key={phase.id} className="w-full">
                                        {phase.levels.slice(0, 1).map(level => (
                                            <button
                                                key={level.id}
                                                onClick={() => onSelectLevel && onSelectLevel(level)}
                                                className="w-full group relative p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-primary)] transition-all flex flex-col items-center gap-2 overflow-hidden"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className="w-2 h-2 rounded-full shadow-[0_0_8px]"
                                                        style={{
                                                            backgroundColor: PHASE_COLORS[phase.id],
                                                            boxShadow: `0 0 10px ${PHASE_COLORS[phase.id]}`
                                                        }}
                                                    />
                                                    <span className="text-[10px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                                                        {level.fingers.map(f => FINGER_CODE_MAP[f] || f).join(' + ')}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-1 justify-center">
                                                    {level.keys.length > 0 ? level.keys.slice(0, 8).map(key => (
                                                        <span key={key} className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-secondary)]">
                                                            {key}
                                                        </span>
                                                    )) : (
                                                        <span className="text-[8px] text-[var(--text-ghost)]">Todas las teclas</span>
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] animate-pulse">
                    Selecciona un nivel para comenzar
                </div>
            </div>
        );
    };

    const renderVocabField = () => {
        // Mono-spaced character width is exactly 1ch. 
        // We calculate the offset to keep the current index in the center.
        const offset = normalizedTypedText.length;

        return (
            <div className="w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-10 md:p-14 min-h-[160px] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-1000 shadow-inner">
                {/* Cinematic Side Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-glass-strong)] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-glass-strong)] to-transparent z-20 pointer-events-none"></div>

                <div className="font-mono text-xl md:text-3xl relative overflow-hidden h-20 w-full max-w-2xl flex items-center">
                    <div 
                        className="absolute top-0 left-0 h-full text-[var(--text-ghost)] whitespace-nowrap leading-none transition-transform duration-300 ease-out flex items-center will-change-transform"
                        style={{ transform: `translateX(calc(-${offset}ch))` }}
                    >
                        {currentPhrase.split('').map((char, i) => {
                            let color = textColor;
                            let glow = "";
                            if (i < normalizedTypedText.length) {
                                const isMismatch = normalizedTypedText[i] !== char;
                                const isLastChar = i === normalizedTypedText.length - 1;

                                if (isMismatch) {
                                    if (isLastChar && isComposingState) {
                                        color = `${textColor} border-b-2 border-[var(--accent-primary)] animate-pulse`;
                                    } else {
                                        color = "text-red-400 bg-red-500/10 border-b-2 border-red-500/30";
                                    }
                                } else {
                                    color = textColor;
                                    glow = "drop-shadow-[0_0_8px_var(--accent-primary)]";
                                }
                            }
                            return (
                                <span key={i} className={`${color} ${glow} transition-all inline-block relative font-black`}>
                                    {char === ' ' ? '\u00A0' : char}
                                    {i === normalizedTypedText.length && (
                                        <span className="absolute left-0 bottom-[-8px] w-full h-[4px] bg-[var(--accent-primary)] animate-pulse shadow-[0_0_20px_var(--accent-primary)] rounded-full" />
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
                <div className="w-full flex-grow flex flex-col items-center justify-center select-none">
                    <div className="w-full flex justify-center">
                        {isLevelActive ? renderVocabField() : renderLevelSelector()}
                    </div>

                    {/* BOTTOM INTERACTIVE GROUP: Word Pill + 3D Animations */}
                    <div className={`w-full flex flex-col items-center gap-4 mt-6 relative transition-all duration-1000 ${isLevelActive ? 'opacity-100' : 'opacity-0 h-0 pointer-events-none'}`}>
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

                        {/* CIRCUIT TIMER (Moved here) */}
                        {isCircuitMode && circuitTimer !== undefined && (
                            <button
                                onClick={onCircuitCycle}
                                className="relative z-50 flex items-center justify-center gap-4 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 cursor-pointer hover:scale-105 transition-transform active:scale-95 group"
                            >
                                <div className="bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-glow)] rounded-full px-5 py-1.5 flex items-center gap-3 transition-colors group-hover:bg-[var(--accent-primary)]/10">
                                    <i className="fa fa-refresh fa-spin text-xs"></i>
                                    <span className="font-mono font-bold text-lg tracking-wider">{circuitTimer}s</span>
                                </div>
                                {circuitTitle && (
                                    <div className="bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--border-strong)] text-[var(--text-primary)] rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg transition-colors group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]">
                                        {circuitTitle}
                                    </div>
                                )}
                            </button>
                        )}

                        {/* CURRENT WORD PILL SECTION */}
                        <div className="relative overflow-visible flex items-center justify-center gap-8" style={{ height: `${birdSize * 0.8}px` }}>
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