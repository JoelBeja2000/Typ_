import React from 'react';
import { KEYBOARD_LAYOUT, SPACE_DATA, FINGER_COLORS } from '../../constants';
import { KeyData } from '../../types';


interface KeyboardProps {
  activeKey: string;
  targetKey: string;
  showZones?: boolean;
  bands?: { bass: number; mid: number; high: number };
}

const Keyboard: React.FC<KeyboardProps> = ({ activeKey, targetKey, showZones = false, bands = { bass: 0, mid: 0, high: 0 } }) => {

  const renderKey = (keyData: KeyData, rowIndex: number, keyIndex: number, rowLength: number) => {
    const isTarget = targetKey.toLowerCase() === keyData.key.toLowerCase() ||
      (targetKey === ' ' && keyData.key === ' ');
    const isActive = activeKey.toLowerCase() === keyData.key.toLowerCase();

    // Estilos base inline/tailwind
    let className = `relative flex items-center justify-center font-mono font-black select-none text-xs md:text-sm rounded-xl transition-all duration-100 border `;
    let style: any = {};

    // Layout sizing
    if (keyData.key === ' ') {
      className += 'w-64 h-12 ';
    } else {
      className += 'w-12 h-12 md:w-14 md:h-14 ';
    }

    // Colores y Estados
    if (isActive) {
      // Estilo Outline con Glow para estado activo
      className += 'bg-[var(--accent-primary)]/20 border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-glow)] translate-y-[2px] ';
    } else if (isTarget) {
      className += 'border-[var(--accent-primary)] bg-[var(--key-target-bg)] text-[var(--text-primary)] shadow-[0_0_15px_var(--accent-glow)] scale-105 z-10 ';
    } else if (showZones) {
      const fingerColor = FINGER_COLORS[keyData.finger];
      className += `bg-opacity-10 `;
      style = {
        borderColor: fingerColor,
        color: fingerColor,
        backgroundColor: `${fingerColor}10`,
        boxShadow: `0 0 10px ${fingerColor}20`
      };
    } else {
      className += 'bg-[var(--key-bg)] border-[var(--border-glass)] text-[var(--key-text)] ';

      const xRatio = keyIndex / (rowLength || 1);
      const bassWeight = Math.max(0, 1 - xRatio * 2);
      const midWeight = Math.max(0, 1 - Math.abs(xRatio - 0.5) * 4);
      const highWeight = Math.max(0, (xRatio - 0.5) * 2);
      const intensity = (bands.bass * bassWeight) + (bands.mid * midWeight) + (bands.high * highWeight);

      if (intensity > 0.02) {
        const hue = 220 + (xRatio * 120);
        style = {
          backgroundColor: `hsla(${hue}, 70%, 50%, ${intensity * 0.25})`,
          boxShadow: `0 0 ${intensity * 15}px hsla(${hue}, 70%, 50%, 0.4)`,
          borderColor: `hsla(${hue}, 70%, 50%, ${intensity * 0.5})`,
          color: `hsla(${hue}, 70%, 90%, ${0.6 + intensity * 0.4})`
        }
      }
    }

    return (
      <div key={keyData.key} className={className} style={style}>
        {keyData.label}
        {isTarget && (
          <div className="absolute -bottom-1 w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-glow)]" />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-2 p-2 select-none opacity-80 hover:opacity-100 transition-opacity">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex gap-1.5 ${rowIndex === 3 ? 'ml-6' : ''}`}>
          {row.map((key, keyIndex) => renderKey(key, rowIndex, keyIndex, row.length))}
        </div>
      ))}
      <div className="flex justify-center mt-3">
        {renderKey(SPACE_DATA, 5, 0, 1)}
      </div>
    </div>
  );
};

export default Keyboard;