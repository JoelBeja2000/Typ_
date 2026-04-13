import React, { useState, useEffect, useCallback } from 'react';
import { KEY_TO_FINGER_MAP, FINGER_COLORS } from '../../constants';

export interface KeyDef {
    id: string;
    base: string;
    shift: string;
    alt: string;
    label?: string;
    special?: 'space' | 'delete' | 'return' | 'tab' | 'shift' | 'esc' | 'caps' | 'fn' | 'ctrl' | 'opt' | 'cmd' | 'up' | 'down' | 'left' | 'right' | 'eject' | 'f';
    width?: string;
    h?: string;
    className?: string;
}

export const KEYBOARD_GRID: KeyDef[][] = [
    // Function Row (Row 0)
    [
        { id: 'esc', base: 'Escape', shift: 'Escape', alt: 'Escape', special: 'esc', width: 'w-[60px]', h: 'h-[22px]' },
        { id: 'f1', base: 'F1', shift: 'F1', alt: 'F1', label: 'F1', special: 'f', h: 'h-[22px]' },
        { id: 'f2', base: 'F2', shift: 'F2', alt: 'F2', label: 'F2', special: 'f', h: 'h-[22px]' },
        { id: 'f3', base: 'F3', shift: 'F3', alt: 'F3', label: 'F3', special: 'f', h: 'h-[22px]' },
        { id: 'f4', base: 'F4', shift: 'F4', alt: 'F4', label: 'F4', special: 'f', h: 'h-[22px]' },
        { id: 'f5', base: 'F5', shift: 'F5', alt: 'F5', label: 'F5', special: 'f', h: 'h-[22px]' },
        { id: 'f6', base: 'F6', shift: 'F6', alt: 'F6', label: 'F6', special: 'f', h: 'h-[22px]' },
        { id: 'f7', base: 'F7', shift: 'F7', alt: 'F7', label: 'F7', special: 'f', h: 'h-[22px]' },
        { id: 'f8', base: 'F8', shift: 'F8', alt: 'F8', label: 'F8', special: 'f', h: 'h-[22px]' },
        { id: 'f9', base: 'F9', shift: 'F9', alt: 'F9', label: 'F9', special: 'f', h: 'h-[22px]' },
        { id: 'f10', base: 'F10', shift: 'F10', alt: 'F10', label: 'F10', special: 'f', h: 'h-[22px]' },
        { id: 'f11', base: 'F11', shift: 'F11', alt: 'F11', label: 'F11', special: 'f', h: 'h-[22px]' },
        { id: 'f12', base: 'F12', shift: 'F12', alt: 'F12', label: 'F12', special: 'f', h: 'h-[22px]' },
        { id: 'eject', base: '', shift: '', alt: '', label: '⚙', special: 'eject', h: 'h-[22px]', width: 'w-[60px]' },
    ],
    // Numbers Row (Row 1)
    [
        { id: 'row1_0', base: 'º', shift: 'ª', alt: '\\' },
        { id: 'row1_1', base: '1', shift: '!', alt: '|' },
        { id: 'row1_2', base: '2', shift: '"', alt: '@' },
        { id: 'row1_3', base: '3', shift: '·', alt: '#' },
        { id: 'row1_4', base: '4', shift: '$', alt: '~' },
        { id: 'row1_5', base: '5', shift: '%', alt: '€' },
        { id: 'row1_6', base: '6', shift: '&', alt: '¬' },
        { id: 'row1_7', base: '7', shift: '/', alt: '' },
        { id: 'row1_8', base: '8', shift: '(', alt: '' },
        { id: 'row1_9', base: '9', shift: ')', alt: '' },
        { id: 'row1_10', base: '0', shift: '=', alt: '' },
        { id: 'row1_11', base: "'", shift: '?', alt: '' },
        { id: 'row1_12', base: '¡', shift: '¿', alt: '' },
        { id: 'delete', base: 'Backspace', shift: 'Backspace', alt: 'Backspace', label: '⌫', special: 'delete', width: 'w-[80px]' },
    ],
    // QWERTY Row (Row 2) - Note: ISO Enter handles rows 2 and 3
    [
        { id: 'tab', base: 'Tab', shift: 'Tab', alt: 'Tab', label: '⇥', special: 'tab', width: 'w-[80px]' },
        { id: 'q', base: 'q', shift: 'Q', alt: 'q' },
        { id: 'w', base: 'w', shift: 'W', alt: 'w' },
        { id: 'e', base: 'e', shift: 'E', alt: 'é' },
        { id: 'r', base: 'r', shift: 'R', alt: 'r' },
        { id: 't', base: 't', shift: 'T', alt: 't' },
        { id: 'y', base: 'y', shift: 'Y', alt: 'y' },
        { id: 'u', base: 'u', shift: 'U', alt: 'ú' },
        { id: 'i', base: 'i', shift: 'I', alt: 'í' },
        { id: 'o', base: 'o', shift: 'O', alt: 'ó' },
        { id: 'p', base: 'p', shift: 'P', alt: 'p' },
        { id: 'row2_11', base: '`', shift: '^', alt: '[' },
        { id: 'row2_12', base: '+', shift: '*', alt: ']' },
        { id: 'return', base: 'Enter', shift: 'Enter', alt: 'Enter', label: '↵', special: 'return', width: 'w-[44px]', h: 'h-[96px]' },
    ],
    // ASDF Row (Row 3)
    [
        { id: 'caps', base: 'CapsLock', shift: 'CapsLock', alt: 'CapsLock', label: '⇪', special: 'caps', width: 'w-[88px]' },
        { id: 'a', base: 'a', shift: 'A', alt: 'á' },
        { id: 's', base: 's', shift: 'S', alt: 's' },
        { id: 'd', base: 'd', shift: 'D', alt: 'd' },
        { id: 'f', base: 'f', shift: 'F', alt: 'f' },
        { id: 'g', base: 'g', shift: 'G', alt: 'g' },
        { id: 'h', base: 'h', shift: 'H', alt: 'h' },
        { id: 'j', base: 'j', shift: 'J', alt: 'j' },
        { id: 'k', base: 'k', shift: 'K', alt: 'k' },
        { id: 'l', base: 'l', shift: 'L', alt: 'l' },
        { id: 'ñ', base: 'ñ', shift: 'Ñ', alt: 'ñ' },
        { id: 'row3_11', base: '´', shift: '¨', alt: '{' },
        { id: 'row3_12', base: 'ç', shift: 'Ç', alt: '}' }, // Mapping Ç to shift layer of this key
    ],
    // ZXCV Row (Row 4)
    [
        { id: 'shift_l', base: 'Shift', shift: 'Shift', alt: 'Shift', label: '⇧', special: 'shift', width: 'w-[56px]' },
        { id: 'row4_1', base: '<', shift: '>', alt: '' },
        { id: 'z', base: 'z', shift: 'Z', alt: 'z' },
        { id: 'x', base: 'x', shift: 'X', alt: 'x' },
        { id: 'c', base: 'c', shift: 'C', alt: 'c' },
        { id: 'v', base: 'v', shift: 'V', alt: 'v' },
        { id: 'b', base: 'b', shift: 'B', alt: 'b' },
        { id: 'n', base: 'n', shift: 'N', alt: 'n' },
        { id: 'm', base: 'm', shift: 'M', alt: 'm' },
        { id: 'row4_9', base: ',', shift: ';', alt: '' },
        { id: 'row4_10', base: '.', shift: ':', alt: '' },
        { id: 'row4_11', base: '-', shift: '_', alt: '' },
        { id: 'shift_r', base: 'Shift', shift: 'Shift', alt: 'Shift', label: '⇧', special: 'shift', width: 'w-[118px]' },
    ],
    // Bottom Row (Row 5)
    [
        { id: 'fn', base: 'Fn', shift: 'Fn', alt: 'Fn', label: 'fn', special: 'fn', width: 'w-[44px]' },
        { id: 'ctrl', base: 'Control', shift: 'Control', alt: 'Control', label: '⌃', special: 'ctrl' },
        { id: 'opt_l', base: 'Option', shift: 'Option', alt: 'Option', label: '⌥', special: 'opt', width: 'w-[44px]' },
        { id: 'cmd_l', base: 'Command', shift: 'Command', alt: 'Command', label: '⌘', special: 'cmd', width: 'w-[64px]' },
        { id: 'space', base: ' ', shift: ' ', alt: ' ', label: '', special: 'space', width: 'w-[250px]' },
        { id: 'cmd_r', base: 'Command', shift: 'Command', alt: 'Command', label: '⌘', special: 'cmd', width: 'w-[64px]' },
        { id: 'opt_r', base: 'Option', shift: 'Option', alt: 'Option', label: '⌥', special: 'opt', width: 'w-[44px]' },
        { id: 'left', base: 'ArrowLeft', shift: 'ArrowLeft', alt: 'ArrowLeft', label: '◀', special: 'left', h: 'h-[22px]' },
        { id: 'up', base: 'ArrowUp', shift: 'ArrowUp', alt: 'ArrowUp', label: '▲', special: 'up', h: 'h-[22px]' },
        { id: 'down', base: 'ArrowDown', shift: 'ArrowDown', alt: 'ArrowDown', label: '▼', special: 'down', h: 'h-[22px]' },
        { id: 'right', base: 'ArrowRight', shift: 'ArrowRight', alt: 'ArrowRight', label: '▶', special: 'right', h: 'h-[22px]' },
    ]
];

// Helper Components 1:1 from OveController
const IsoKey = ({ top, bottom, right }: { top: string, bottom: string, right?: string }) => (
    <div className={`w-full h-full relative`}>
        <div className="flex flex-col items-center justify-center h-full w-full pt-0 pb-[2px]">
            <span className={`text-[10px] leading-none font-medium mb-1 opacity-80`}>{top}</span>
            <span className={`text-[13px] font-bold leading-none`}>{bottom}</span>
        </div>
        {right && (
            <span className={`absolute bottom-[4px] right-[4px] text-[10px] leading-none font-medium opacity-70`}>
                {right}
            </span>
        )}
    </div>
);

const DualKey = ({ t, b }: { t: string, b: string }) => (
    <div className="flex flex-col items-center justify-center">
        <span className={`text-[10px] mb-0.5 opacity-70`}>{t}</span>
        <span className={`text-[12px] font-bold`}>{b}</span>
    </div>
);

const LetterKey = ({ l, s }: { l: string, s: string }) => (
    <div className="w-full h-full relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-[12px] font-medium`}>{l}</span>
        </div>
        {s && (
            <span className={`absolute bottom-[4px] right-[5px] text-[11px] opacity-70 leading-none font-medium`}>
                {s}
            </span>
        )}
    </div>
);

const IsoEnterKey = React.memo(({ focused }: { focused: boolean }) => {
    let fill = "var(--bg-glass)";
    let stroke = "var(--border-strong)";
    let textColor = "var(--text-primary)";
    if (focused) {
        fill = "rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.3)";
        stroke = "rgba(var(--theme-r), var(--theme-g), var(--theme-b), 1)";
        textColor = "var(--text-primary)";
    }

    return (
        <div style={{ position: 'relative', width: '44px', height: '94px', flexShrink: 0 }}>
            <svg fill="none" width="44" height="94" style={{ position: 'absolute', top: 0, left: 0 }}>
                <path
                    d="M 6.5,0.5 L 37.5,0.5 Q 43.5,0.5 43.5,6.5 L 43.5,87.5 Q 43.5,93.5 37.5,93.5 L 14.5,93.5 Q 8.5,93.5 8.5,87.5 L 8.5,48.5 Q 8.5,44.5 6.5,44.5 Q 0.5,44.5 0.5,38.5 L 0.5,6.5 Q 0.5,0.5 6.5,0.5 Z"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1"
                    style={{ transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
            </svg>

            <div style={{
                position: 'absolute', top: 0, left: 6,
                width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: textColor, fontSize: '14px',
                transition: 'color 0.1s'
            }}>↵</div>
        </div>
    );
});

interface KeyComponentProps {
    keyDef: KeyDef;
    active: boolean;
    target: boolean;
    highlighted: boolean;
    showZones: boolean;
    fingerColor: string | null;
}

const KeyComponent = React.memo(({ keyDef, active, target, highlighted, showZones, fingerColor }: KeyComponentProps) => {
    if (keyDef.special === 'return') {
        return (
            <div
                className={`transition-all ${active || target ? 'scale-105 -translate-y-[2px] z-20' : ''}`}
                style={{ marginLeft: '-8px', height: '44px', zIndex: 10, position: 'relative' }}
            >
                <IsoEnterKey focused={active || target} />
            </div>
        );
    }

    let baseClass = `mac-key ${keyDef.width || 'w-[44px]'} ${keyDef.h || 'h-[44px]'} ${keyDef.className || ''} `;
    if (active) baseClass += 'active ';
    if (target) baseClass += 'target ';
    if (highlighted) baseClass += 'highlighted ';

    let extraStyle: any = {};
    if (showZones && !active && !target && !highlighted) {
        if (fingerColor) {
            extraStyle = {
                borderColor: fingerColor,
                color: fingerColor,
                backgroundColor: `${fingerColor}10`,
                boxShadow: `0 0 8px ${fingerColor}20`
            };
        }
    }

    let content: React.ReactNode = keyDef.label || keyDef.base;
    if (keyDef.id.startsWith('row1_') || keyDef.id === 'row2_11' || keyDef.id === 'row2_12' || keyDef.id === 'row3_11') {
        content = <IsoKey top={keyDef.shift} bottom={keyDef.base} right={keyDef.alt === keyDef.base ? undefined : keyDef.alt} />;
    } else if (keyDef.id === 'row3_12') {
        content = <LetterKey l="Ç" s="}" />;
    } else if (keyDef.id.match(/^[a-zñ]$/)) {
        content = <LetterKey l={keyDef.base.toUpperCase()} s={keyDef.alt === keyDef.base ? "" : keyDef.alt} />;
    } else if (keyDef.shift && keyDef.shift !== keyDef.base && !keyDef.special) {
        content = <DualKey t={keyDef.shift} b={keyDef.base} />;
    }

    return (
        <div className={baseClass.trim()} style={extraStyle}>
            {keyDef.special === 'caps' && (
                <div className={`w-1 h-1 rounded-full bg-green-500 absolute top-2 left-2 ${active ? 'opacity-100' : 'opacity-0'}`}></div>
            )}
            {content}
        </div>
    );
});

interface MacKeyboardProps {
    activeKey: string;
    targetKey: string;
    showZones?: boolean;
    bands?: { bass: number; mid: number; high: number };
    highlightedKeys?: string[];
    isWaveActive?: boolean;
}

const MacKeyboard: React.FC<MacKeyboardProps> = React.memo(({
    activeKey,
    targetKey,
    showZones = false,
    bands = { bass: 0, mid: 0, high: 0 },
    highlightedKeys = [],
    isWaveActive = false
}) => {

    const normalize = useCallback((str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), []);

    const isTarget = useCallback((key: KeyDef) => {
        if (!targetKey) return false;
        const lowerKey = key.id.toLowerCase();
        const baseKey = key.base.toLowerCase();
        const lowerTarget = targetKey.toLowerCase();
        const normalizedTarget = normalize(targetKey);

        if (key.special === 'space' && targetKey === ' ') return true;
        if (key.special === 'return' && (targetKey === 'enter' || targetKey === 'return')) return true;

        if (baseKey === normalizedTarget || lowerKey === normalizedTarget) return true;
        if (key.shift.toLowerCase() === lowerTarget || key.alt.toLowerCase() === lowerTarget) return true;

        const symbols: Record<string, string[]> = {
            'row1_0': ['º', '\\', 'ª'],
            'row1_1': ['1', '!', '|'],
            'row1_2': ['2', '"', '@'],
            'row1_3': ['3', '·', '#'],
            'row1_4': ['4', '$', '~'],
            'row1_5': ['5', '%', '€'],
            'row1_6': ['6', '&', '¬'],
            'row2_11': ['[', '^', '`'],
            'row2_12': [']', '*', '+'],
            'row3_11': ['{', '¨', '´'],
            'row3_12': ['}', 'ç', 'Ç'],
        };
        if (symbols[key.id]) return symbols[key.id].includes(targetKey);

        return false;
    }, [targetKey, normalize]);

    const isActive = useCallback((key: KeyDef) => {
        if (!activeKey) return false;
        const lowerKey = key.id.toLowerCase();
        const base = key.base.toLowerCase();
        const current = activeKey.toLowerCase();

        if (key.special === 'space' && activeKey === ' ') return true;
        if (key.special === 'return' && current === 'enter') return true;
        if (key.special === 'delete' && (current === 'backspace' || current === 'delete')) return true;

        return lowerKey === current || base === current || key.shift.toLowerCase() === current || key.label?.toLowerCase() === current;
    }, [activeKey]);

    const isHighlighted = useCallback((key: KeyDef) => {
        return highlightedKeys.some(k => k.toLowerCase() === key.id.toLowerCase() || k.toLowerCase() === key.base.toLowerCase());
    }, [highlightedKeys]);

    const getFingerColor = useCallback((key: KeyDef) => {
        let k = key.id.toLowerCase();
        if (key.special === 'tab' || key.special === 'caps' || key.special === 'shift' || key.special === 'ctrl' || key.special === 'fn') return FINGER_COLORS['left-pinky'];
        if (key.special === 'return' || key.special === 'delete') return FINGER_COLORS['right-pinky'];
        if (key.special === 'space' || key.special === 'opt' || key.special === 'cmd') return FINGER_COLORS['thumb'];

        const data = KEY_TO_FINGER_MAP[k] || KEY_TO_FINGER_MAP[key.base.toLowerCase()];
        if (data) return FINGER_COLORS[data.finger];
        return null;
    }, []);

    return (
        <div className="scale-[0.55] md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.95] origin-center flex justify-center select-none">
            <div className="bg-transparent rounded-[10px] p-1 flex flex-col gap-[6px] w-[755px]">
                {KEYBOARD_GRID.map((row, rowIndex) => {
                    // Unified Row 2 and 3 for ISO Enter
                    if (rowIndex === 3) return null;
                    if (rowIndex === 2) {
                        return (
                            <div key="merged-row-2-3" className="flex flex-row gap-[6px] items-start">
                                <div className="flex flex-col gap-[6px]">
                                    <div className="flex flex-row gap-[6px]">
                                        {row.slice(0, -1).map(key => (
                                            <KeyComponent 
                                                key={key.id} 
                                                keyDef={key} 
                                                active={isActive(key)} 
                                                target={isTarget(key)} 
                                                highlighted={isHighlighted(key)} 
                                                showZones={showZones} 
                                                fingerColor={getFingerColor(key)}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex flex-row gap-[6px]">
                                        {KEYBOARD_GRID[3].map(key => (
                                            <KeyComponent 
                                                key={key.id} 
                                                keyDef={key} 
                                                active={isActive(key)} 
                                                target={isTarget(key)} 
                                                highlighted={isHighlighted(key)} 
                                                showZones={showZones} 
                                                fingerColor={getFingerColor(key)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <KeyComponent 
                                    keyDef={row[row.length - 1]} 
                                    active={isActive(row[row.length - 1])} 
                                    target={isTarget(row[row.length - 1])} 
                                    highlighted={isHighlighted(row[row.length - 1])} 
                                    showZones={showZones} 
                                    fingerColor={getFingerColor(row[row.length - 1])}
                                />
                            </div>
                        );
                    }

                    // Simple Rows (0, 1, 4, 5)
                    const isBottomRow = rowIndex === 5;
                    return (
                        <div key={rowIndex} className="flex flex-row gap-[6px] items-end">
                            {row.map((key, colIndex) => {
                                // Arrows group for bottom row
                                if (isBottomRow && (key.id === 'left' || key.id === 'up' || key.id === 'down' || key.id === 'right')) {
                                    if (key.id !== 'left') return null; // Handled below
                                    return (
                                        <React.Fragment key="arrows">
                                            <div className="flex flex-col justify-end h-[44px] w-[44px]">
                                                <KeyComponent 
                                                    keyDef={row[colIndex]} 
                                                    active={isActive(row[colIndex])} 
                                                    target={isTarget(row[colIndex])} 
                                                    highlighted={isHighlighted(row[colIndex])} 
                                                    showZones={showZones} 
                                                    fingerColor={getFingerColor(row[colIndex])}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-[2px] w-[44px]">
                                                <KeyComponent 
                                                    keyDef={row[colIndex + 1]} 
                                                    active={isActive(row[colIndex + 1])} 
                                                    target={isTarget(row[colIndex + 1])} 
                                                    highlighted={isHighlighted(row[colIndex + 1])} 
                                                    showZones={showZones} 
                                                    fingerColor={getFingerColor(row[colIndex + 1])}
                                                />
                                                <KeyComponent 
                                                    keyDef={row[colIndex + 2]} 
                                                    active={isActive(row[colIndex + 2])} 
                                                    target={isTarget(row[colIndex + 2])} 
                                                    highlighted={isHighlighted(row[colIndex + 2])} 
                                                    showZones={showZones} 
                                                    fingerColor={getFingerColor(row[colIndex + 2])}
                                                />
                                            </div>
                                            <div className="flex flex-col justify-end h-[44px] w-[44px]">
                                                <KeyComponent 
                                                    keyDef={row[colIndex + 3]} 
                                                    active={isActive(row[colIndex + 3])} 
                                                    target={isTarget(row[colIndex + 3])} 
                                                    highlighted={isHighlighted(row[colIndex + 3])} 
                                                    showZones={showZones} 
                                                    fingerColor={getFingerColor(row[colIndex + 3])}
                                                />
                                            </div>
                                        </React.Fragment>
                                    );
                                }
                                return (
                                    <KeyComponent 
                                        key={key.id} 
                                        keyDef={key} 
                                        active={isActive(key)} 
                                        target={isTarget(key)} 
                                        highlighted={isHighlighted(key)} 
                                        showZones={showZones} 
                                        fingerColor={getFingerColor(key)}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default MacKeyboard;