import React, { useState, useEffect, useMemo } from 'react';
import { KeyData } from '../../types';
import { FINGER_NAMES, FINGER_COLORS, KEYBOARD_LAYOUT } from '../../constants';
import { GUIDE_PHASES } from '../data/GuideData';

interface FingerGuideProps {
  targetKeyData?: KeyData;
  onSelectLevel?: (keys: string[]) => void; // Callback to highlight keys on main keyboard
  onSelectPhrases?: (phrases: string[]) => void; // Callback to update practice text
  onWaveMode?: (active: boolean) => void;
  onCircuitCycle?: () => void;
}

type Mode = 'guide' | 'practice';

const FingerGuide: React.FC<FingerGuideProps> = ({ targetKeyData, onSelectLevel, onSelectPhrases, onWaveMode, onCircuitCycle }) => {
  const [mode, setMode] = useState<Mode>('practice');
  const [expandedPhaseId, setExpandedPhaseId] = useState<string | null>(null);
  const [selectedLevelId, setSelectedLevelId] = useState<string | null>(null);
  const [isWaveActive, setIsWaveActive] = useState(false);

  // Derived state to get all finger cards for the mapping tab
  const fingerKeys = useMemo(() => {
    const map: Record<string, string[]> = {};
    KEYBOARD_LAYOUT.flat().forEach(k => {
      if (!map[k.finger]) map[k.finger] = [];
      if (!map[k.finger].includes(k.label)) map[k.finger].push(k.label);
    });
    return map;
  }, []);

  // Animation effect for Wave Mode
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isWaveActive) {
      if (onWaveMode) onWaveMode(true);
    } else {
      if (onWaveMode) onWaveMode(false);
    }
    return () => clearInterval(interval);
  }, [isWaveActive, onWaveMode]);

  // Find current level across all phases
  const currentLevel = useMemo(() => GUIDE_PHASES.flatMap(p => p.levels).find(l => l.id === selectedLevelId), [selectedLevelId]);

  useEffect(() => {
    if (currentLevel) {
      if (onSelectLevel) onSelectLevel(currentLevel.keys);
      if (onSelectPhrases) onSelectPhrases(currentLevel.phrases);
    }
  }, [currentLevel, onSelectLevel, onSelectPhrases]);

  return (
    <div className="flex flex-col h-full min-h-0 bg-[var(--bg-glass-strong)] rounded-2xl border border-[var(--border-glass)] overflow-hidden transition-all duration-500">

      {/* Header - Tab Switcher */}
      <div className="flex border-b border-[var(--border-glass)]">
        <button
          onClick={() => setMode('practice')}
          className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${mode === 'practice' ? 'text-[var(--accent-primary)] bg-[var(--bg-glass)] border-b-2 border-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          Práctica
        </button>
        <button
          onClick={() => setMode('guide')}
          className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${mode === 'guide' ? 'text-[var(--accent-primary)] bg-[var(--bg-glass)] border-b-2 border-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          Mapeo de Dedos
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

        {/* Dynamic Content Area */}
        <div className="space-y-6">

          {mode === 'guide' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-xs uppercase text-[var(--text-secondary)] font-bold tracking-wider mb-4">Guía de Asignación Física</h4>
              {Object.entries(FINGER_NAMES).filter(([f]) => f !== 'thumb').map(([finger, name]) => (
                <div
                  key={finger}
                  className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-3 h-3 rounded-full shadow-[0_0_10px]"
                      style={{
                        backgroundColor: (FINGER_COLORS as any)[finger],
                        boxShadow: `0 0 12px ${(FINGER_COLORS as any)[finger]}`
                      }}
                    />
                    <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {name}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(fingerKeys[finger] || []).sort().map(label => (
                      <span key={label} className="px-2 py-1 text-[10px] font-mono rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-secondary)]">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {mode === 'practice' && (
            <div className="space-y-6 animate-fade-in">
              {/* Wave Mode Toggle */}

              <button
                onClick={() => setIsWaveActive(!isWaveActive)}
                className={`w-full py-4 rounded-xl border flex items-center justify-center gap-3 transition-all duration-500 group relative overflow-hidden ${isWaveActive ? 'border-[var(--accent-primary)] shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)]' : 'border-[var(--border-glass)] bg-[var(--bg-glass)]'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-10 transform transition-transform duration-1000 ${isWaveActive ? 'translate-x-full animate-shimmer' : '-translate-x-full'}`} />
                <i className={`fa fa-water text-lg transition-transform ${isWaveActive ? 'animate-bounce text-[var(--accent-primary)]' : 'text-[var(--text-secondary)]'}`}></i>
                <span className={`font-bold tracking-widest uppercase ${isWaveActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)]'}`}>
                  {isWaveActive ? 'Modo Oleada Activo' : 'Activar Modo Oleada'}
                </span>
              </button>

              <div className="space-y-3">
                <h4 className="text-xs uppercase text-[var(--text-secondary)] font-bold tracking-wider mb-2">Fases de Aprendizaje</h4>

                {GUIDE_PHASES.map(phase => (
                  <div key={phase.id} className="rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] overflow-hidden">
                    {/* Phase Header */}
                    <button
                      onClick={() => setExpandedPhaseId(expandedPhaseId === phase.id ? null : phase.id)}
                      className={`w-full p-4 flex items-center justify-between transition-colors ${expandedPhaseId === phase.id ? 'bg-[var(--bg-glass-strong)]' : 'hover:bg-[var(--bg-glass-strong)]'}`}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className={`text-sm font-black uppercase ${expandedPhaseId === phase.id ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}`}>{phase.title}</span>
                        <span className="text-[10px] text-[var(--text-secondary)] opacity-70">{phase.description}</span>
                      </div>
                      <i className={`fa fa-chevron-down transition-transform text-[var(--text-secondary)] ${expandedPhaseId === phase.id ? 'rotate-180 text-[var(--accent-primary)]' : ''}`}></i>
                    </button>

                    {/* Phase Levels */}
                    {expandedPhaseId === phase.id && (
                      <div className="p-2 space-y-1 bg-[var(--bg-app)]/30 border-t border-[var(--border-glass)]">
                        {phase.levels.map(level => (
                          <button
                            key={level.id}
                            onClick={() => setSelectedLevelId(String(level.id))}
                            className={`w-full p-3 rounded-lg text-left border flex items-center justify-between transition-all ${selectedLevelId === level.id ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]' : 'border-transparent hover:bg-[var(--bg-glass)]'}`}
                          >
                            <div className="flex flex-col">
                              <span className={`text-xs font-bold ${selectedLevelId === level.id ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}`}>{level.title}</span>
                              {selectedLevelId === level.id && (
                                <span className="text-[9px] text-[var(--text-secondary)] mt-1 font-mono">"{level.phrases[0].substring(0, 30)}..."</span>
                              )}
                            </div>
                            {selectedLevelId === level.id && <i className="fa fa-check text-[var(--accent-primary)] text-xs"></i>}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer / Status */}
      <div className="p-4 border-t border-[var(--border-glass)] bg-[var(--bg-glass)] text-[10px] text-[var(--text-secondary)] text-center">
        {mode === 'practice' ? 'Selecciona una fase y nivel para practicar.' : 'Mapeo físico de dedos para teclado ISO.'}
      </div>
    </div>

  );
};

export default FingerGuide;
