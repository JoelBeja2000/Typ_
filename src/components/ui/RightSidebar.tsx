import React from 'react';
import { useTranslation } from '../../i18n/LanguageContext';

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[400px] z-[2001] theme-glass backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="flex items-center justify-end mb-12">
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)] hover:text-[var(--text-primary)] transition-all"
        >
          <i className="fa fa-close"></i>
        </button>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="w-32 h-32 bg-[var(--accent-primary)]/10 rounded-[40px] flex items-center justify-center mb-10 border border-[var(--accent-primary)]/30 shadow-[0_0_50px_var(--accent-glow)]">
          <i className="fa fa-github text-[var(--accent-primary)]" style={{ fontSize: '100px' }}></i>
        </div>
        
        <h2 className="text-2xl font-black text-[var(--text-primary)] mb-4 tracking-tighter">
          {t('sidebar.right.support_title')}
        </h2>
        
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-10 max-w-[280px]">
          {t('sidebar.right.support_desc')}
        </p>

        <a 
          href="https://github.com/JoelBeja2000/OveTyp_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative px-8 py-4 bg-[var(--accent-primary)] text-black font-black rounded-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_var(--accent-glow)]"
        >
          <i className="fa fa-star"></i>
          {t('sidebar.right.star_button')}
        </a>

        <div className="mt-12 pt-12 border-t border-[var(--border-glass)] w-full text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] opacity-30">
          {t('sidebar.right.footer')}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;