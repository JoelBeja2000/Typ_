import React, { useState } from 'react';
import FingerGuide from '../FingerGuide';
import { GUIDE_PHASES } from '../../data/GuideData';


interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  targetKeyData: any;
  onSelectLevel?: (keys: string[]) => void;
  onSelectPhrases?: (phrases: string[], levelId?: string) => void;
  focus: string;
  onFocusChange: (focus: string) => void;
  getBtnClass: (active: boolean) => string;
  currentMusicStyle: any;
  onMusicStyleChange: (style: any) => void;
  TECHNO_STYLE: any;
  AMBIENT_STYLE: any;
  ACID_HOUSE_STYLE: any;
  isInfiniteMode: boolean;
  onToggleZenMode: () => void;
  score: number;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  isOpen,
  onClose,
  targetKeyData,
  onSelectLevel,
  onSelectPhrases,
  focus,
  onFocusChange,
  getBtnClass,
  currentMusicStyle,
  onMusicStyleChange,
  TECHNO_STYLE,
  AMBIENT_STYLE,
  ACID_HOUSE_STYLE,
  isInfiniteMode,
  onToggleZenMode,
  score,
}) => {
  const [expandedStar, setExpandedStar] = useState<number | null>(null);

  // Group levels from GUIDE_PHASES fase_estrellas by difficulty (star)
  const starLevels = (star: number) => {
    return GUIDE_PHASES.find(p => p.id === 'fase_estrellas')?.levels.filter(l => l.difficulty === star) || [];
  };

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[450px] z-[2001] theme-glass backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="flex flex-col gap-8 mb-8 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-1">
              Estado de Sesión
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-[24px] font-black text-[var(--text-primary)] tracking-tighter">
                {score.toLocaleString()}
              </span>
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] mt-2 italic opacity-50">Pts</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)] hover:text-[var(--text-primary)] transition-all"
          >
            <i className="fa fa-close"></i>
          </button>
        </div>

        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4">
            🏆 Desafíos por Estrellas
          </h2>
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map((star) => {
              const levels = starLevels(star);
              const isExpanded = expandedStar === star;
              const name = star === 1 ? 'Novato' : star === 2 ? 'Experto' : 'Maestro';
              
              return (
                <div key={star} className="flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500">
                  <button
                    onClick={() => setExpandedStar(isExpanded ? null : star)}
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
                      <div className="p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] space-y-1">
                        {levels.map((level) => {
                          const progress = localStorage.getItem(`typ_progress_${level.id}`) || "0";
                          return (
                            <button
                              key={level.id}
                              onClick={() => {
                                onSelectPhrases?.(level.phrases, level.id);
                                if (level.keys) onSelectLevel?.(level.keys);
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
                              <div className="w-full h-[2px] bg-white/5 rounded-full relative overflow-hidden">
                                <div 
                                  className="absolute inset-y-0 left-0 bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)] transition-all duration-1000" 
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4">
            Estilos de Música
          </h2>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => onMusicStyleChange(TECHNO_STYLE)}
              className={getBtnClass(currentMusicStyle === TECHNO_STYLE)}
            >
              <span>{TECHNO_STYLE.name}</span> <i className="fa fa-bolt"></i>
            </button>
            <button
              onClick={() => onMusicStyleChange(AMBIENT_STYLE)}
              className={getBtnClass(currentMusicStyle === AMBIENT_STYLE)}
            >
              <span>{AMBIENT_STYLE.name}</span> <i className="fa fa-leaf"></i>
            </button>
            <button
              onClick={() => onMusicStyleChange(ACID_HOUSE_STYLE)}
              className={getBtnClass(currentMusicStyle === ACID_HOUSE_STYLE)}
            >
              <span>{ACID_HOUSE_STYLE.name}</span> <i className="fa fa-flask"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <FingerGuide
          targetKeyData={targetKeyData}
          onSelectLevel={onSelectLevel}
          onSelectPhrases={onSelectPhrases}
        />
      </div>
    </aside>
  );
};

export default RightSidebar;