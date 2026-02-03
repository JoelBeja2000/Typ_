import React from 'react';
import { Finger, KeyData } from '../../types';
import { FINGER_NAMES, FINGER_COLORS } from '../../constants';


interface FingerGuideProps {
  targetKeyData?: KeyData;
}

const FingerGuide: React.FC<FingerGuideProps> = ({ targetKeyData }) => {
  const fingers: Finger[] = [
    'left-pinky', 'left-ring', 'left-middle', 'left-index',
    'thumb',
    'right-index', 'right-middle', 'right-ring', 'right-pinky'
  ];

  return (
    <div className="p-8 rounded-[2rem] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border border-[var(--border-glass)] flex flex-col transition-colors duration-500">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-[var(--accent-primary)] flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-glow)]"></span>
        MOTOR_BIOMETRICO
      </h3>

      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-end gap-2 h-28 px-4">
          {fingers.map((f) => {
            const isActive = targetKeyData?.finger === f;
            const color = FINGER_COLORS[f];

            return (
              <div key={f} className="flex flex-col items-center">
                <div
                  className={`w-4 rounded-full transition-all duration-700 ease-out ${isActive ? 'h-24 shadow-[0_0_25px_var(--accent-glow)]' : 'h-10'}`}
                  style={{
                    backgroundColor: isActive ? color : 'var(--text-muted)',
                    boxShadow: isActive ? `0 0 25px ${color}` : 'none',
                    opacity: isActive ? 1 : 0.2
                  }}
                />
              </div>
            );
          })}
        </div>

        {targetKeyData ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-1">Target_Unit</p>
              <p className="text-lg font-black text-[var(--text-primary)] tracking-tighter">{FINGER_NAMES[targetKeyData.finger]}</p>
            </div>
            <div className="p-5 bg-[var(--bg-glass)] rounded-3xl border border-[var(--border-glass)] italic transition-colors duration-500">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-3">Logic_Protocol</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-mono">
                "{targetKeyData.why}"
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-24 border-2 border-dashed border-[var(--border-glass)] rounded-[2rem]">
            <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--text-secondary)]">Listening...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FingerGuide;