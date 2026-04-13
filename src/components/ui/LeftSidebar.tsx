import React from 'react';
import { AccordionItem } from './AccordionItem';
import { MusicStyle } from '../../domain/models/MusicStyles';
import { FINGER_NAMES, FINGER_COLORS, KEYBOARD_LAYOUT } from '../../../constants';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  onLanguageChange: (lang: string) => void;
  currentMusicStyle: MusicStyle;
  onMusicStyleChange: (style: MusicStyle) => void;
  TECHNO_STYLE: MusicStyle;
  AMBIENT_STYLE: MusicStyle;
  ACID_HOUSE_STYLE: MusicStyle;
  getBtnClass: (active: boolean) => string;
  themes: any[];
  currentTheme: any;
  onThemeChange: (theme: any) => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isOpen,
  onClose,
  language,
  onLanguageChange,
  currentMusicStyle,
  onMusicStyleChange,
  TECHNO_STYLE,
  AMBIENT_STYLE,
  ACID_HOUSE_STYLE,
  getBtnClass,
  themes,
  currentTheme,
  onThemeChange,
}) => {
  const fingerKeys = React.useMemo(() => {
    const map: Record<string, string[]> = {};
    KEYBOARD_LAYOUT.flat().forEach(k => {
      if (!map[k.finger]) map[k.finger] = [];
      if (!map[k.finger].includes(k.label)) map[k.finger].push(k.label);
    });
    return map;
  }, []);

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-[400px] z-[2001] theme-glass backdrop-blur-3xl border-r border-[var(--border-glass)] p-8 transition-all duration-500 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto custom-scrollbar`}
    >
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="px-3 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-black text-lg shadow-[0_0_15px_var(--accent-glow)] min-w-[80px]">
            OveTyp_
          </div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]">
            OveTyp_
          </h2>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"
        >
          <i className="fa fa-close"></i>
        </button>
      </div>

      <div className="space-y-4 mb-12">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6">
          Idioma del Sistema
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Idiomas */}
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
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6">
          Mapeo de Dedos
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(FINGER_NAMES).filter(([f]) => f !== 'thumb').map(([finger, name]) => (
            <div
              key={finger}
              className="p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full shadow-[0_0_8px]"
                  style={{
                    backgroundColor: (FINGER_COLORS as any)[finger],
                    boxShadow: `0 0 10px ${(FINGER_COLORS as any)[finger]}`
                  }}
                />
                <span className="text-[10px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                  {name}
                </span>
              </div>

              <div className="flex flex-wrap gap-1">
                {(fingerKeys[finger] || []).sort().map(label => (
                  <span key={label} className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-secondary)]">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </aside >
  );
};

export default LeftSidebar;