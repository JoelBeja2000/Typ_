import React, { useState } from 'react';
import { VisualsConfig } from '../types/visuals';
import { MusicStyle, TECHNO_STYLE, AMBIENT_STYLE, ACID_HOUSE_STYLE } from '../domain/models/MusicStyles';
import { FINGER_COLORS, FINGER_NAMES, KEY_TO_FINGER_MAP } from '../../constants';

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
    currentMusicStyle?: MusicStyle;
    onMusicStyleChange?: (style: MusicStyle) => void;
    currentLevelProgress?: number;
    currentLevelScore?: number;
    currentLevelAccuracy?: number;
    onCycleShapes?: () => void;
    activeLevel?: any;
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
    currentMusicStyle = TECHNO_STYLE,
    onMusicStyleChange,
    currentLevelProgress = 0,
    currentLevelScore = 0,
    currentLevelAccuracy = 100,
    onCycleShapes,
    activeLevel,
}) => {
    const textColor = themeScheme === 'light' ? 'text-black' : 'text-white';
    const themeColor = 'text-[var(--accent-primary)]';
    const musicStyles = [TECHNO_STYLE, AMBIENT_STYLE, ACID_HOUSE_STYLE];
    const musicIcons = ['fa-bolt', 'fa-leaf', 'fa-flask'];
    
    const [expandedStars, setExpandedStars] = useState<number | null>(null);
    const [practiceExpanded, setPracticeExpanded] = useState(false);
    const [musicExpanded, setMusicExpanded] = useState(false);

    const togglePractice = () => {
        setPracticeExpanded(!practiceExpanded);
    };

    const practiceLevels = [
        { id: 'practice_indice', title: 'Dedos Índices', fingers: ['L2', 'R2'], keys: ['F', 'G', 'V', 'B', 'R', 'T', 'J', 'H', 'N', 'M', 'Y', 'U'] },
        { id: 'practice_anular', title: 'Anulares', fingers: ['L4', 'R4'], keys: ['S', 'W', 'X', 'L', 'O'] },
        { id: 'practice_corazon', title: 'Dedos Corazón', fingers: ['L3', 'R3'], keys: ['D', 'E', 'C', 'K', 'I'] },
        { id: 'practice_menique', title: 'Dedos Meñique', fingers: ['L5', 'R5'], keys: ['A', 'Q', 'Z', 'Ñ', 'P'] },
    ];

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
                    <i key={i} className={`fa fa-star text-[6px] ${i < difficulty ? 'text-amber-400' : 'text-[var(--text-ghost)] opacity-30'}`}></i>
                ))}
            </div>
        );
    };

    const renderLevelSelector = () => {
        const starLevels = (star: number) => {
            return GUIDE_PHASES.find(p => p.id === 'fase_estrellas')?.levels.filter(l => l.difficulty === star) || [];
        };

        return (
            <div className="w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-6 flex flex-col items-center relative overflow-hidden transition-all duration-1000 shadow-inner">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column 1: Star Levels */}
                    <div className="space-y-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center">
                            🏆 Niveles
                        </h2>
                        {[1, 2, 3].map(star => {
                        const levels = starLevels(star);
                        const isExpanded = expandedStars === star;
                        const name = star === 1 ? 'Novato' : star === 2 ? 'Experto' : 'Maestro';
                        
                        return (
                            <div key={star} className="w-full flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500">
                                <button
                                    onClick={() => toggleStars(star)}
                                    className={`w-full p-4 flex items-center justify-between transition-all ${isExpanded ? 'bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]' : 'hover:bg-[var(--bg-glass-strong)]'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col">
                                            <div className="flex gap-1 mb-1">
                                                {Array.from({ length: star }).map((_, i) => (
                                                    <i key={i} className={`fa fa-star text-[12px] ${isExpanded ? 'text-[var(--accent-primary)] animate-pulse' : 'text-amber-400 opacity-60'}`}></i>
                                                ))}
                                            </div>
                                            <span className={`text-[12px] font-black uppercase tracking-wider ${isExpanded ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}`}>
                                                {name}
                                            </span>
                                        </div>
                                    </div>
                                    <i className={`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${isExpanded ? 'rotate-180 text-[var(--accent-primary)]' : ''}`}></i>
                                </button>

                                <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
<div className="p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-2 gap-2">
                                            {levels.slice(0, 4).map((level) => {
                                                const levelProgress = typeof window !== 'undefined' ? Number(localStorage.getItem(`typ_progress_${level.id}`) || 0) : 0;
                                                const isComplete = levelProgress >= 100;
                                                return (
                                                <button
                                                    key={level.id}
                                                    onClick={() => onSelectLevel && onSelectLevel(level)}
                                                    className={`w-full p-3 rounded-xl text-left border hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex flex-col gap-2 transition-all group relative overflow-hidden ${isComplete ? 'border-green-500/50 bg-green-500/10' : 'border-transparent'}`}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    <div className="flex items-center justify-between relative z-10">
                                                        <span className={`text-[11px] font-black uppercase tracking-widest ${isComplete ? 'text-green-400' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'} transition-colors`}>
                                                            {level.title}
                                                        </span>
                                                        <div className="flex items-center gap-1">
                                                            {levelProgress > 0 && (
                                                                <span className={`text-[8px] font-bold ${isComplete ? 'text-green-400' : 'text-[var(--text-ghost)]'}`}>
                                                                    {levelProgress}%
                                                                </span>
                                                            )}
                                                            <i className={`fa ${isComplete ? 'fa-check' : 'fa-play'} text-[8px] ${isComplete ? 'text-green-400' : 'text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all'}`}></i>
                                                        </div>
                                                    </div>
                                                    {levelProgress > 0 && (
                                                        <div className="w-full h-[2px] bg-[var(--text-muted)] rounded-full relative overflow-hidden">
                                                            <div 
                                                                className={`absolute inset-y-0 left-0 ${isComplete ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]'} transition-all duration-1000`} 
                                                                style={{ width: `${levelProgress}%` }}
                                                            ></div>
                                                        </div>
                                                    )}
                                                </button>
                                            );})}
                                            </div>

                </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>

                    {/* Column 2: Practice + Music */}
                    <div className="space-y-4">
                        {/* Practice */}
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center">
                            ✋ Práctica
                        </h2>
                        <div className="flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500">
                            <button
                                onClick={togglePractice}
                                className={`w-full p-4 flex items-center justify-between transition-all ${practiceExpanded ? 'bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]' : 'hover:bg-[var(--bg-glass-strong)]'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col">
                                        <i className={`fa fa-hand-paper-o text-[14px] mb-1 ${practiceExpanded ? 'text-[var(--accent-primary)] animate-pulse' : 'text-amber-400 opacity-60'}`}></i>
                                        <span className={`text-[12px] font-black uppercase tracking-wider ${practiceExpanded ? 'text-[var(--accent-primary)]' : 'text-white'}`}>
                                            Práctica de Dedos
                                        </span>
                                    </div>
                                </div>
                                <i className={`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${practiceExpanded ? 'rotate-180 text-[var(--accent-primary)]' : ''}`}></i>
                            </button>
                            
                            <div className={`grid transition-all duration-500 ease-in-out ${practiceExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-2 gap-2">
                                        {practiceLevels.map(level => (
                                            <button
                                                key={level.id}
                                                onClick={() => {
                                                    const hugePhrase = Array(100).fill(level.keys.join(' ')).join(' ');
                                                    onSelectLevel && onSelectLevel({ ...level, phrases: [hugePhrase] });
                                                }}
                                                className="w-full p-3 rounded-xl text-left border border-transparent hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex flex-col gap-2 transition-all group relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="flex items-center justify-between relative z-10">
                                                    <span className="text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                                        {level.title}
                                                    </span>
                                                    <i className="fa fa-play text-[8px] text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"></i>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Music */}
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center">
                            🎵 Música
                        </h2>
                        <div className="flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500">
                            <button
                                onClick={() => setMusicExpanded(!musicExpanded)}
                                className={`w-full p-4 flex items-center justify-between transition-all ${musicExpanded ? 'bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]' : 'hover:bg-[var(--bg-glass-strong)]'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col">
                                        <i className={`fa ${musicIcons[musicStyles.indexOf(currentMusicStyle)] || 'fa-music'} text-[14px] mb-1 ${musicExpanded ? 'text-[var(--accent-primary)] animate-pulse' : 'text-amber-400 opacity-60'}`}></i>
                                        <span className={`text-[12px] font-black uppercase tracking-wider ${musicExpanded ? 'text-[var(--accent-primary)]' : 'text-white'}`}>
                                            {currentMusicStyle.name}
                                        </span>
                                    </div>
                                </div>
                                <i className={`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${musicExpanded ? 'rotate-180 text-[var(--accent-primary)]' : ''}`}></i>
                            </button>
                            
                            <div className={`grid transition-all duration-500 ease-in-out ${musicExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-1 gap-2">
                                        {musicStyles.filter(s => s.name !== currentMusicStyle.name).map((style, idx) => (
                                            <button
                                                key={style.name}
                                                onClick={() => onMusicStyleChange && onMusicStyleChange(style)}
                                                className="w-full p-3 rounded-xl text-left border border-transparent hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex items-center gap-3 transition-all group relative overflow-hidden"
                                            >
                                                <i className={`fa ${musicIcons[musicStyles.indexOf(style)] || 'fa-music'} text-[12px] text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)]`}></i>
                                                <span className="text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                                    {style.name}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] animate-pulse text-center">
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
                        className="absolute top-0 left-0 h-full text-[var(--text-secondary)] opacity-40 whitespace-nowrap leading-none transition-transform duration-300 ease-out flex items-center will-change-transform"
                        style={{ transform: `translateX(calc(-${offset}ch))` }}
                    >
                        {currentPhrase.split('').map((char, i) => {
                            let color = "text-white";
                            let glow = "";
                            if (i < normalizedTypedText.length) {
                                const isMismatch = normalizedTypedText[i] !== char;
                                const isLastChar = i === normalizedTypedText.length - 1;

                                if (isMismatch) {
                                    if (isLastChar && isComposingState) {
                                        color = "text-white border-b-2 border-[var(--accent-primary)] animate-pulse";
                                    } else {
                                        color = "text-red-400 bg-red-500/10 border-b-2 border-red-500/30";
                                    }
                                } else {
                                    color = "text-white";
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
                    {/* Level Stats Display - Only show when level is finished */}
                    {isLevelActive && currentLevelProgress >= 100 && (
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <div className="bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse">
                                <span className="text-[9px] font-black uppercase tracking-widest text-green-400">PTS</span>
                                <span className="text-[14px] font-bold text-green-400">{currentLevelScore.toLocaleString()}</span>
                            </div>
                            <div className="bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse">
                                <span className="text-[9px] font-black uppercase tracking-widest text-green-400">%</span>
                                <span className="text-[14px] font-bold text-green-400">{currentLevelProgress}%</span>
                            </div>
                            <div className="bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse">
                                <span className="text-[9px] font-black uppercase tracking-widest text-green-400">ACC</span>
                                <span className="text-[14px] font-bold text-green-400">{currentLevelAccuracy}%</span>
                            </div>
                        </div>
                    )}
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

                    {/* BOTTOM INTERACTIVE GROUP: Word Pill + 3D Animations - Only show when level active */}
                    <div className={`w-full flex flex-col items-center gap-4 mt-6 relative transition-all duration-1000 ${isLevelActive ? 'opacity-100' : 'opacity-0 h-0 pointer-events-none'}`}>


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

                        {/* CURRENT WORD PILL SECTION WITH FINGER GUIDES */}
                        <div className="relative overflow-visible flex items-center justify-center gap-8 min-h-[144px] w-full max-w-6xl">
                            
                            {/* Left Finger Guides */}
                            {isLevelActive && activeLevel && (
                                <div className="hidden lg:flex flex-col gap-3 items-end flex-1 pr-4 animate-in fade-in slide-in-from-left-4 duration-1000">
                                    {activeLevel.fingers.filter(f => f.startsWith('L')).map(fingerCode => {
                                        const fingerKey = Object.entries(FINGER_CODE_MAP).find(([k]) => k === fingerCode)?.[0];
                                        if (!fingerKey) return null;
                                        const mappingKey = fingerCode === 'L2' ? 'left-index' : fingerCode === 'L3' ? 'left-middle' : fingerCode === 'L4' ? 'left-ring' : 'left-pinky';
                                        return (
                                            <div key={fingerCode} className="p-3 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] min-w-[140px] shadow-lg backdrop-blur-sm">
                                                <div className="flex items-center gap-2 mb-1.5 justify-start">
                                                    <span className="w-2 h-2 rounded-full shadow-[0_0_8px]" style={{ backgroundColor: FINGER_COLORS[mappingKey as any], boxShadow: `0 0 10px ${FINGER_COLORS[mappingKey as any]}` }} />
                                                    <span className="text-[10px] font-black uppercase tracking-wider text-[var(--accent-primary)]">
                                                        {FINGER_NAMES[mappingKey as any]}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-1 justify-start">
                                                    {activeLevel.keys.filter(k => KEY_TO_FINGER_MAP[k.toLowerCase()]?.finger === mappingKey).map(k => (
                                                        <span key={k} className="px-1.5 py-0.5 text-[10px] font-black rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-primary)]">
                                                            {k}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* CENTRAL PILL */}
                            <div className="bg-[var(--bg-floating)] backdrop-blur-3xl border border-[var(--border-strong)] rounded-[2.5rem] px-14 h-24 flex items-center justify-center min-w-[400px] shadow-3xl scale-110 z-30 relative overflow-visible">
                                <div className="relative font-mono text-4xl flex items-center h-full min-w-[200px]">
                                    <div className={`absolute inset-0 whitespace-pre flex items-center justify-start pointer-events-none ${textColor}`}>
                                        {currentWordInfo.word.split('').map((char, idx) => {
                                            const userChar = currentWordInfo.userTypedSlice[idx];
                                            const isTyped = userChar !== undefined;
                                            const isIncorrect = isTyped && userChar !== char;
                                            return (
                                                <span key={idx} className={isIncorrect ? 'opacity-0' : ''}>
                                                    {char}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <div className="relative flex items-center whitespace-pre h-full">
                                        {currentWordInfo.userTypedSlice.split('').map((userChar, idx) => {
                                            const correct = userChar === (currentWordInfo.word[idx] || '');
                                            const color = (isComposingState && idx === currentWordInfo.userTypedSlice.length - 1) ? "text-yellow-400" : (correct ? themeColor : 'text-red-400 bg-red-500/10 border-b-2 border-red-500/30 z-10');
                                            return <span key={idx} className={`relative inline-block ${color}`}>{userChar === ' ' ? '\u00A0' : userChar}</span>;
                                        })}
                                        <span className="inline-block w-0.5 h-10 bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] animate-pulse rounded-full ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Finger Guides */}
                            {isLevelActive && activeLevel && (
                                <div className="hidden lg:flex flex-col gap-3 items-start flex-1 pl-4 animate-in fade-in slide-in-from-right-4 duration-1000">
                                    {activeLevel.fingers.filter(f => f.startsWith('R')).map(fingerCode => {
                                        const mappingKey = fingerCode === 'R2' ? 'right-index' : fingerCode === 'R3' ? 'right-middle' : fingerCode === 'R4' ? 'right-ring' : 'right-pinky';
                                        return (
                                            <div key={fingerCode} className="p-3 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] min-w-[140px] shadow-lg backdrop-blur-sm">
                                                <div className="flex items-center gap-2 mb-1.5 justify-start">
                                                    <span className="w-2 h-2 rounded-full shadow-[0_0_8px]" style={{ backgroundColor: FINGER_COLORS[mappingKey as any], boxShadow: `0 0 10px ${FINGER_COLORS[mappingKey as any]}` }} />
                                                    <span className="text-[10px] font-black uppercase tracking-wider text-[var(--accent-primary)]">
                                                        {FINGER_NAMES[mappingKey as any]}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-1 justify-start">
                                                    {activeLevel.keys.filter(k => KEY_TO_FINGER_MAP[k.toLowerCase()]?.finger === mappingKey).map(k => (
                                                        <span key={k} className="px-1.5 py-0.5 text-[10px] font-black rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-primary)]">
                                                            {k}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordPanel;