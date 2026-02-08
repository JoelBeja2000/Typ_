import React from 'react';
import FingerGuide from '../FingerGuide';


interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  targetKeyData: any;
  onSelectLevel?: (keys: string[]) => void;
  onSelectPhrases?: (phrases: string[]) => void;
  onWaveMode?: (active: boolean) => void;
  isCircuitMode: boolean;
  onToggleCircuitMode: () => void;
  circuitTimer?: number;
  circuitDuration?: number;
  onDurationChange?: (val: number) => void;
  isRandomCircuit?: boolean;
  onToggleRandomCircuit?: () => void;
  onCircuitCycle?: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  isOpen,
  onClose,
  targetKeyData,
  onSelectLevel,
  onSelectPhrases,
  onWaveMode,
  isCircuitMode,
  onToggleCircuitMode,
  circuitTimer,
  circuitDuration,
  onDurationChange,
  isRandomCircuit,
  onToggleRandomCircuit,
  onCircuitCycle,
}) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[450px] z-[2001] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)]">
            Guía Técnica
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"
            >
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>

        {/* CIRCUIT CONTROLS */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={onToggleCircuitMode}
            className={`flex-grow flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all ${isCircuitMode ? 'bg-[var(--accent-primary)] text-black' : 'bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)]'}`}
          >
            <i className={`fa ${isCircuitMode ? 'fa-refresh fa-spin' : 'fa-circle-o-notch'}`}></i>
            <span>
              {isCircuitMode && circuitTimer !== undefined ? `CIRCUITO (${circuitTimer}s)` : 'MODO CIRCUITO'}
            </span>
          </button>

          {/* CONFIG TOGGLES (Only show if requested or always?) User asked for controls. */}
          <div className="flex items-center gap-2 bg-[var(--bg-glass)] p-1 rounded-lg border border-[var(--border-glass)]">
            <input
              type="number"
              value={circuitDuration || 30}
              onChange={(e) => onDurationChange && onDurationChange(parseInt(e.target.value) || 30)}
              className="w-12 bg-transparent text-[10px] font-bold text-center text-[var(--text-primary)] outline-none border-r border-[var(--border-glass)]"
              title="Duración (segundos)"
            />
            <button
              onClick={onToggleRandomCircuit}
              className={`px-2 py-1 rounded text-[10px] uppercase font-bold transition-all ${isRandomCircuit ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              title="Modo Aleatorio"
            >
              <i className="fa fa-random"></i>
            </button>
          </div>
        </div>
      </div>
      <FingerGuide
        targetKeyData={targetKeyData}
        onSelectLevel={onSelectLevel}
        onSelectPhrases={onSelectPhrases}
        onWaveMode={onWaveMode}
        onCircuitCycle={onCircuitCycle}
      />
    </aside>
  );
};

export default RightSidebar;