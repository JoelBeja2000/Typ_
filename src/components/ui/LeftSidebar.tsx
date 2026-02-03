import React from 'react';
import { AccordionItem } from './AccordionItem';
import { MusicStyle } from '../../domain/models/MusicStyles';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  focus: string;
  expandedCategory: string | null;
  onExpandCategory: (id: string | null) => void;
  onLanguageChange: (lang: string) => void;
  onFocusChange: (focus: string) => void;
  currentMusicStyle: MusicStyle;
  onMusicStyleChange: (style: MusicStyle) => void;
  TECHNO_STYLE: MusicStyle;
  AMBIENT_STYLE: MusicStyle;
  ACID_HOUSE_STYLE: MusicStyle;
  getBtnClass: (active: boolean) => string;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isOpen,
  onClose,
  language,
  focus,
  expandedCategory,
  onExpandCategory,
  onLanguageChange,
  onFocusChange,
  currentMusicStyle,
  onMusicStyleChange,
  TECHNO_STYLE,
  AMBIENT_STYLE,
  ACID_HOUSE_STYLE,
  getBtnClass,
}) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-[400px] z-[2001] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border-r border-[var(--border-glass)] p-8 transition-all duration-500 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto custom-scrollbar`}
    >
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-14 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-black text-xl shadow-[0_0_15px_var(--accent-glow)]">
            Typ_
          </div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]">
            System_Core
          </h2>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"
        >
          <i className="fa fa-close"></i>
        </button>
      </div>

      <AccordionItem
        id="config"
        title="Configuración"
        icon="fa-sliders"
        isExpanded={expandedCategory === 'config'}
        onToggle={onExpandCategory}
      >
        <div className="space-y-4">
          <button
            onClick={() => onLanguageChange('es')}
            className={getBtnClass(language === 'es')}
          >
            <span>Español</span> <span>🇪🇸</span>
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={getBtnClass(language === 'en')}
          >
            <span>English</span> <span>🇺🇸</span>
          </button>
          <div className="h-[1px] bg-[var(--border-glass)] my-2" />
          <button
            onClick={() => onFocusChange('Básico')}
            className={getBtnClass(focus === 'Básico')}
          >
            <span>Básico</span>
          </button>
          <button
            onClick={() => onFocusChange('Programación')}
            className={getBtnClass(focus === 'Programación')}
          >
            <span>Programación</span>
          </button>
        </div>
      </AccordionItem>

      <AccordionItem
        id="music"
        title="Estilo Musical"
        icon="fa-music"
        isExpanded={expandedCategory === 'music'}
        onToggle={onExpandCategory}
      >
        <div className="space-y-4">
          <button
            onClick={() => onMusicStyleChange(TECHNO_STYLE)}
            className={getBtnClass(currentMusicStyle.name === TECHNO_STYLE.name)}
          >
            <span>Berlín Techno</span> <i className="fa fa-circle"></i>
          </button>
          <button
            onClick={() => onMusicStyleChange(AMBIENT_STYLE)}
            className={getBtnClass(currentMusicStyle.name === AMBIENT_STYLE.name)}
          >
            <span>Cyber Ambient</span> <i className="fa fa-cloud"></i>
          </button>
          <button
            onClick={() => onMusicStyleChange(ACID_HOUSE_STYLE)}
            className={getBtnClass(currentMusicStyle.name === ACID_HOUSE_STYLE.name)}
          >
            <span>Acid House 303</span> <i className="fa fa-flask"></i>
          </button>
        </div>
      </AccordionItem>
    </aside>
  );
};

export default LeftSidebar;