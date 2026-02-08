import React, { useState, useEffect } from 'react';
import { KeyData } from '../../types';
import { FINGER_NAMES, FINGER_COLORS, KEYBOARD_LAYOUT } from '../../constants';
import { GUIDE_PHASES, GUIDE_SECTIONS } from '../data/GuideData';

interface FingerGuideProps {
  targetKeyData?: KeyData;
  onSelectLevel?: (keys: string[]) => void; // Callback to highlight keys on main keyboard
  onSelectPhrases?: (phrases: string[]) => void; // Callback to update practice text
  onWaveMode?: (active: boolean) => void;
  onCircuitCycle?: () => void;
}

type Mode = 'guide' | 'practice';

const FingerGuide: React.FC<FingerGuideProps> = ({ targetKeyData, onSelectLevel, onSelectPhrases, onWaveMode, onCircuitCycle }) => {
  const [mode, setMode] = useState<Mode>('guide');
  const [selectedSectionId, setSelectedSectionId] = useState<string>(GUIDE_SECTIONS[0].id);
  const [expandedPhaseId, setExpandedPhaseId] = useState<string | null>(GUIDE_PHASES[0].id);
  const [selectedLevelId, setSelectedLevelId] = useState<string | null>(null);
  const [isWaveActive, setIsWaveActive] = useState(false);

  // Derived state
  const currentSection = GUIDE_SECTIONS.find(s => s.id === selectedSectionId);
  // Find current level across all phases
  const currentLevel = GUIDE_PHASES.flatMap(p => p.levels).find(l => l.id === selectedLevelId);

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

  useEffect(() => {
    if (currentLevel) {
      if (onSelectLevel) onSelectLevel(currentLevel.keys);
      if (onSelectPhrases) onSelectPhrases(currentLevel.phrases);
    }
  }, [currentLevel, onSelectLevel, onSelectPhrases]);

  return (
    <div className="flex flex-col h-full bg-[var(--bg-glass-strong)] rounded-2xl border border-[var(--border-glass)] overflow-hidden transition-all duration-500">

      {/* Header Tabs */}
      <div className="flex border-b border-[var(--border-glass)]">
        <button
          onClick={() => setMode('guide')}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${mode === 'guide' ? 'bg-[var(--accent-primary)] text-black' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-glass)]'}`}
        >
          Teoría
        </button>
        <button
          onClick={() => setMode('practice')}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${mode === 'practice' ? 'bg-[var(--accent-primary)] text-black' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-glass)]'}`}
        >
          Práctica
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

        {/* Dynamic Content Area */}
        <div className="space-y-6">
          {targetKeyData && (
            <div
              onClick={onCircuitCycle}
              className={`animate-fade-in p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--accent-primary)]/30 shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)] ${onCircuitCycle ? 'cursor-pointer hover:bg-[var(--accent-primary)]/10 transition-colors' : ''}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full shadow-[0_0_10px]"
                    style={{ backgroundColor: (FINGER_COLORS as any)[targetKeyData.finger], boxShadow: `0 0 12px ${(FINGER_COLORS as any)[targetKeyData.finger]}` }}
                  />
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {FINGER_NAMES[targetKeyData.finger]}
                  </span>
                </div>
                {/* Optional: Add a close button if needed, but for now purely informative */}
              </div>

              <div className="space-y-2">
                <div className="text-[10px] uppercase text-[var(--text-secondary)] font-bold tracking-wider">Teclas Asignadas</div>
                <div className="flex flex-wrap gap-2">
                  {KEYBOARD_LAYOUT.flat().filter(k => k.finger === targetKeyData.finger).map(k => (
                    <span key={k.label} className={`px-2 py-1 text-xs rounded border transition-colors ${k.key === targetKeyData.key ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]' : 'border-[var(--border-glass)] text-[var(--text-secondary)]'}`}>
                      {k.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {mode === 'guide' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                {GUIDE_SECTIONS.map(section => (
                  <div key={section.id}>
                    <button
                      onClick={() => setSelectedSectionId(section.id)}
                      className={`w-full p-3 rounded-lg text-left transition-all border ${selectedSectionId === section.id ? 'bg-[var(--bg-glass)] border-[var(--accent-primary)]' : 'border-transparent hover:bg-[var(--bg-glass)]'}`}
                    >
                      <h3 className={`text-sm font-bold ${selectedSectionId === section.id ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}`}>
                        {section.title}
                      </h3>
                    </button>
                    {selectedSectionId === section.id && (
                      <div className="p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] mt-2 animate-fade-in">
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {mode === 'practice' && (
            <div className="space-y-6">
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
        {mode === 'guide' ? 'Selecciona un tema para leer.' : 'Selecciona una fase y nivel para practicar.'}
      </div>
    </div>
  );
};

export default FingerGuide;
