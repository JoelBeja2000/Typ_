import React from 'react';
import FingerGuide from '../FingerGuide';


interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  targetKeyData: any;
  onSelectLevel?: (keys: string[]) => void;
  onSelectPhrases?: (phrases: string[]) => void;
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
            Modo Especial
          </h2>
          <button
            onClick={onToggleZenMode}
            className={`w-full p-4 rounded-2xl flex items-center justify-between border transition-all duration-500 group relative overflow-hidden ${isInfiniteMode ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] shadow-[0_0_20px_rgba(var(--accent-glow-rgb),0.3)]' : 'bg-[var(--bg-glass)] border-[var(--border-glass)] hover:border-white/20'}`}
          >
            <div className="flex items-center gap-4 relative z-10">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isInfiniteMode ? 'bg-[var(--accent-primary)] text-black' : 'bg-white/5 text-[var(--text-secondary)] group-hover:bg-white/10'}`}>
                <i className={`fa ${isInfiniteMode ? 'fa-bolt' : 'fa-leaf'} text-lg`}></i>
              </div>
              <div className="flex flex-col items-start">
                <span className={`text-[12px] font-black uppercase tracking-wider ${isInfiniteMode ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>Modo Infinito</span>
                <span className="text-[9px] text-[var(--text-secondary)] opacity-60">Palíndromos y Score sin fin</span>
              </div>
            </div>
            <div className={`w-2 h-2 rounded-full transition-all ${isInfiniteMode ? 'bg-[var(--accent-primary)] animate-pulse' : 'bg-white/10'}`}></div>
          </button>
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