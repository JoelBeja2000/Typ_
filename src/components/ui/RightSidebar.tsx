import React from 'react';
import FingerGuide from '../FingerGuide';


interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  targetKeyData: any;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  isOpen,
  onClose,
  targetKeyData,
}) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[450px] z-[2001] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)]">
          Guía Técnica
        </h2>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"
        >
          <i className="fa fa-close"></i>
        </button>
      </div>
      <FingerGuide targetKeyData={targetKeyData} />
    </aside>
  );
};

export default RightSidebar;