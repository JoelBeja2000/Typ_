import React from 'react';
import Keyboard from './Keyboard';
import MacKeyboard from './MacKeyboard';

import { AudioWave } from './AudioWave';
import { WebAudioSystem } from '../infrastructure/audio/WebAudioSystem';
import { TypingStats } from '../../types';


interface KeyboardSectionProps {
    keyboardType: 'standard' | 'mac';
    activeKey: string;
    targetChar: string;
    showZones: boolean;
    isMusicLightingEnabled: boolean;
    frequencyBands: { bass: number; mid: number; high: number };
    // New props for integrated UI
    stats: TypingStats;
    isZenMode: boolean;
    score: number;
    onRestart: () => void;
    onZenToggle: () => void;
    audioReady: boolean;
    audioSystem: WebAudioSystem | null;
    currentMusicStyle: any;
    startTime: number | null;
    isFinished: boolean;
    combo: number;
    comboMultiplier: number;
    onDimensionalMenu: (e: React.MouseEvent | any) => void;
    hexToRgba: (hex: string, alpha: number) => string;
    customColor: string;
    // Guide Integration
    highlightedKeys?: string[];
    isWaveActive?: boolean;
    isLevelActive?: boolean;
    onGoHome?: () => void;
    onDebugFillCurtain?: () => void;
}

export const KeyboardSection: React.FC<KeyboardSectionProps> = React.memo(({
    keyboardType,
    activeKey,
    targetChar,
    showZones,
    isMusicLightingEnabled,
    frequencyBands,
    stats,
    isZenMode,
    score,
    onRestart,
    onZenToggle,
    audioReady,
    audioSystem,
    currentMusicStyle,
    startTime,
    isFinished,
    combo,
    comboMultiplier,
    onDimensionalMenu,
    hexToRgba,
    customColor,
    highlightedKeys = [],
    isWaveActive = false,
    isLevelActive = false,
    onGoHome,
    onDebugFillCurtain,
}) => {
    const bands = isMusicLightingEnabled ? frequencyBands : { bass: 0, mid: 0, high: 0 };

    return (
        <div className="flex flex-col items-center w-full transition-all duration-500 z-20 pb-2 gap-2">

            {/* INTEGRATED CONTROL ROW - Tucked within keyboard area */}
            <div className="w-full max-w-[900px] flex items-center justify-between gap-4 px-2">

                {/* ACTION BUTTONS (LEFT) */}
                <div className="flex gap-2">
                    {/* HOME BUTTON (LEFTMOST) */}
                    {isLevelActive && (
                        <button 
                            onClick={onGoHome} 
                            className="h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-red-500 hover:text-red-400 transition-all shadow-lg hover:scale-105" 
                            title="Volver al Selector"
                        >
                            <i className="fa fa-home text-lg"></i>
                        </button>
                    )}
                    
                    {/* RESET BUTTON */}
                    <button 
                        onClick={onRestart} 
                        className="h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-lg hover:scale-105" 
                        title="Reiniciar"
                    >
                        <i className="fa fa-refresh"></i>
                    </button>
                </div>

                {/* STATS BAR (CENTERED) */}
                <div className="h-11 flex-grow max-w-[420px] bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl flex items-center px-6 overflow-hidden shadow-2xl transition-all duration-500 relative" style={{ boxShadow: combo > 15 ? `0 0 30px ${hexToRgba(customColor, 0.3)}` : 'none' }}>
                    {audioReady && audioSystem && currentMusicStyle.layers.map((layer: any) => (
                        combo * comboMultiplier >= layer.minCombo && (layer.maxCombo === undefined || combo * comboMultiplier <= layer.maxCombo) && (
                            <AudioWave key={layer.id} analyser={audioSystem.getAnalysers()[layer.id as keyof ReturnType<WebAudioSystem['getAnalysers']>] || audioSystem.getAnalysers().master} type={layer.type as any} color={layer.color} active={startTime !== null && !isFinished} opacityMultiplier={layer.opacity} yOffset={layer.yOffset} />
                        )
                    ))}
                    <div className="flex items-center gap-4 relative z-10 w-full justify-between">
                        <div className="flex items-baseline gap-1"><span className="text-[12px] font-black text-[var(--accent-primary)] font-mono">{stats.wpm}</span><span className="text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase">WPM</span></div>
                        <div className="flex items-baseline gap-1"><span className="text-[12px] font-black text-[var(--text-primary)] font-mono">{stats.accuracy}</span><span className="text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase">%ACC</span></div>
                        <div className="flex items-baseline gap-1"><span className={`text-[12px] font-black font-mono transition-all ${combo > 0 ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`}>{combo}</span><span className="text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase">COMBO</span></div>
                        <div className="flex items-baseline gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"><span className="text-[12px] font-black text-[var(--accent-primary)] font-mono">{score.toLocaleString()}</span><span className="text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase ml-1">SCORE</span></div>
                        <div className="flex items-center gap-1 opacity-40 animate-pulse"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" /><span className="text-[6px] font-black text-[var(--text-secondary)]">LIVE</span></div>
                    </div>
                </div>

                {/* SIDE ACTIONS (RIGHT) */}
                <div className="flex flex-col gap-2 relative">
                    <button 
                        onClick={onDimensionalMenu} 
                        className={`h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all duration-500 bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] shadow-lg hover:scale-105 active:scale-95`} 
                        title="Control Center"
                    >
                        <i className="fa fa-gear"></i>
                    </button>
                </div>
            </div>

            <div className="flex justify-center w-full transition-all duration-500 transform hover:scale-[1.01]">
                {keyboardType === 'standard' ? (
                    <Keyboard
                        activeKey={activeKey}
                        targetKey={targetChar}
                        showZones={showZones}
                        bands={bands}
                    />
                ) : (
                    <MacKeyboard
                        activeKey={activeKey}
                        targetKey={targetChar}
                        showZones={showZones}
                        bands={bands}
                        highlightedKeys={highlightedKeys}
                        isWaveActive={isWaveActive}
                    />
                )}
            </div>
        </div>
    );
});

export default KeyboardSection;
