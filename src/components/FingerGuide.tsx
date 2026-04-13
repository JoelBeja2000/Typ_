import React, { useState, useEffect, useMemo } from 'react';
import { KeyData } from '../../types';
import { GUIDE_PHASES } from '../data/GuideData';
import { PHRASE_CATEGORIES } from '../data/ZenPhrases';

const getLevelProgress = (levelId: string): number => {
  const progress = localStorage.getItem(`typ_progress_${levelId}`);
  return progress ? Number(progress) : 0;
};

interface FingerGuideProps {
  targetKeyData?: KeyData;
  onSelectLevel?: (keys: string[]) => void; // Callback to highlight keys on main keyboard
  onSelectPhrases?: (phrases: string[], levelId?: string) => void; // Callback to update practice text
}

const FingerGuide: React.FC<FingerGuideProps> = ({ targetKeyData, onSelectLevel, onSelectPhrases }) => {
  const [expandedPhaseId, setExpandedPhaseId] = useState<string | null>(null);
  const [selectedLevelId, setSelectedLevelId] = useState<string | null>(null);

  // Find current level across all phases
  const currentLevel = useMemo(() => GUIDE_PHASES.flatMap(p => p.levels).find(l => l.id === selectedLevelId), [selectedLevelId]);

  useEffect(() => {
    if (currentLevel) {
      if (onSelectLevel) onSelectLevel(currentLevel.keys);
      if (onSelectPhrases) onSelectPhrases(currentLevel.phrases, currentLevel.id);
    }
  }, [currentLevel, onSelectLevel, onSelectPhrases]);

  return (
    <div className="flex flex-col h-full min-h-0 bg-[var(--bg-glass-strong)] rounded-2xl border border-[var(--border-glass)] overflow-hidden transition-all duration-500">
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        <div className="space-y-6">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h4 className="text-xs uppercase text-[var(--text-secondary)] font-bold tracking-wider mb-2">Fases de Aprendizaje</h4>

              {GUIDE_PHASES.filter(p => p.id !== 'fase_estrellas').map(phase => (
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
                            <span className={`text-[11px] font-black uppercase tracking-wider ${selectedLevelId === level.id ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}`}>
                              {level.title}
                            </span>
                            <div className="flex items-center gap-1.5 mt-1">
                              <div className="flex gap-0.5">
                                {[...Array(3)].map((_, i) => (
                                  <i 
                                    key={i} 
                                    className={`fa ${i < level.difficulty ? 'fa-star text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]' : 'fa-star-o text-[var(--text-ghost)] opacity-20'} text-[8px]`}
                                  ></i>
                                ))}
                              </div>
                              <span className="text-[8px] font-black uppercase tracking-widest text-[var(--text-secondary)] opacity-40">
                                {level.difficulty === 1 ? 'Básico' : level.difficulty === 2 ? 'Medio' : 'Experto'}
                              </span>
                            </div>
                            {selectedLevelId === level.id && (
                              <span className="text-[9px] text-[var(--text-secondary)] mt-2 font-mono leading-relaxed opacity-60">
                                "{level.phrases[0].substring(0, 30)}..."
                              </span>
                            )}
                          </div>
                          {selectedLevelId === level.id && <i className="fa fa-chevron-right text-[var(--accent-primary)] text-[10px] animate-pulse"></i>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-[var(--border-glass)] bg-[var(--bg-glass)] text-[10px] text-[var(--text-secondary)] text-center">
        Selecciona una fase y nivel para practicar.
      </div>
    </div>
  );
};

export default FingerGuide;
