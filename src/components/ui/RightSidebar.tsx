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
}) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[450px] z-[2001] theme-glass backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="flex flex-col gap-8 mb-8 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)]">
            Progreso de Usuario
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"
          >
            <i className="fa fa-close"></i>
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