import React from 'react';
import { KEY_TO_FINGER_MAP, FINGER_COLORS } from '../../constants';


interface MacKeyboardProps {
  activeKey: string;
  targetKey: string;
  showZones?: boolean;
  bands?: { bass: number; mid: number; high: number };
}

const MacKeyboard: React.FC<MacKeyboardProps> = ({ activeKey, targetKey, showZones = false, bands = { bass: 0, mid: 0, high: 0 } }) => {
  const isKeyActive = (key: string) => activeKey.toLowerCase() === key.toLowerCase();

  const normalize = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const isKeyTarget = (key: string) => {
    const lowerKey = key.toLowerCase();
    const lowerTarget = targetKey.toLowerCase();
    const normalizedTarget = normalize(targetKey);

    if (lowerKey === 'space' && targetKey === ' ') return true;
    if (lowerKey === 'enter' && (targetKey === 'enter' || targetKey === 'return')) return true;

    // Normalización básica
    if (lowerKey === normalizedTarget) return true;

    // Mapeo exhaustivo de símbolos para distribución ISO Español
    const symbols: Record<string, string[]> = {
      'º': ['º', '\\', 'ª'],
      '1': ['1', '!', '|'],
      '2': ['2', '"', '@'],
      '3': ['3', '·', '#'],
      '4': ['4', '$', '~'],
      '5': ['5', '%', '€'],
      '6': ['6', '&', '¬'],
      '7': ['7', '/'],
      '8': ['8', '('],
      '9': ['9', ')'],
      '0': ['0', '='],
      "'": ["'", '?', '"'],
      '¡': ['¡', '¿'],
      '<': ['<', '>'],
      // Tecla tras P: Acento grave (`), Circunflejo (^) y Corchete apertura ([)
      '[': ['[', '^', '`'],
      // Tecla tras la anterior: Más (+), Asterisco (*) y Corchete cierre (])
      ']': [']', '*', '+'],
      // Tecla tras Ñ: Acento agudo (´), Diéresis (¨) y Llave apertura ({)
      '{': ['{', '¨', '´'],
      // Tecla tras la anterior: Cedilla (ç), Llave cierre (}) y Ç
      '}': ['}', 'ç', 'Ç'],
      ',': [',', ';'],
      '.': ['.', ':'],
      '-': ['-', '_'],
    };

    if (symbols[lowerKey]) {
      return symbols[lowerKey].includes(targetKey) || lowerKey === lowerTarget;
    }

    return lowerKey === lowerTarget;
  };

  const getFingerColor = (key: string) => {
    let k = key.toLowerCase();

    // Teclas de sistema y modificadores
    if (k === 'tab' || k === 'capslock' || k === 'shift' || k === 'control' || k === 'fn') return FINGER_COLORS['left-pinky'];
    if (k === 'enter' || k === 'backspace') return FINGER_COLORS['right-pinky'];
    if (k === 'space') return FINGER_COLORS['thumb'];
    if (k === 'alt' || k === 'meta') return FINGER_COLORS['thumb'];

    // Asignación explícita para la zona derecha ISO (todo al meñique derecho)
    // Esto cubre las teclas de acentos, corchetes, más, ç, etc.
    if (['[', ']', '{', '}', "'", '¡', '+', '*', 'ç', '´', '`', '^', '¨'].includes(k)) {
      return FINGER_COLORS['right-pinky'];
    }

    const data = KEY_TO_FINGER_MAP[k];
    if (data) return FINGER_COLORS[data.finger];

    return null;
  };

  const getKeyStyle = (key: string, widthClass: string = 'w-[44px]', heightClass: string = 'h-[44px]', xRatio: number = 0.5) => {
    const active = isKeyActive(key);
    const target = isKeyTarget(key);

    let baseClass = `flex flex-col items-center justify-center rounded-[6px] text-[11px] font-medium transition-all duration-100 border relative `;

    let extraStyle: any = {};

    if (active) {
      baseClass += `bg-[var(--accent-primary)]/20 border-[var(--accent-primary)] text-[var(--accent-primary)] translate-y-[1px] shadow-[0_0_20px_var(--accent-glow)] `;
    } else if (target) {
      baseClass += `border-[var(--accent-primary)] bg-[var(--key-target-bg)] text-[var(--text-primary)] shadow-[0_0_15px_var(--accent-glow)] animate-pulse `;
    } else if (showZones) {
      const fingerColor = getFingerColor(key);
      if (fingerColor) {
        baseClass += `bg-opacity-10 `;
        extraStyle = {
          borderColor: fingerColor,
          color: fingerColor,
          backgroundColor: `${fingerColor}10`,
          boxShadow: `0 0 8px ${fingerColor}20`
        };
      } else {
        baseClass += `bg-[var(--key-bg)] border-[var(--border-glass)] text-[var(--key-text)] shadow-[0_2px_0_var(--key-shadow)] `;
      }
    } else {
      baseClass += `bg-[var(--key-bg)] border-b-2 border-[var(--border-glass)] text-[var(--key-text)] shadow-[0_2px_0_var(--key-shadow)] `;

      // GAMING RGB EFFECTS
      const bassWeight = Math.max(0, 1 - xRatio * 2);
      const midWeight = Math.max(0, 1 - Math.abs(xRatio - 0.5) * 4);
      const highWeight = Math.max(0, (xRatio - 0.5) * 2);

      const intensity = (bands.bass * bassWeight) + (bands.mid * midWeight) + (bands.high * highWeight);

      if (intensity > 0.02) {
        const hue = 200 + (xRatio * 160); // Shifts from blue to pink/red
        extraStyle = {
          backgroundColor: `hsla(${hue}, 80%, 50%, ${intensity * 0.3})`,
          boxShadow: `0 0 ${intensity * 20}px hsla(${hue}, 80%, 50%, 0.5)`,
          borderColor: `hsla(${hue}, 80%, 50%, ${intensity * 0.6})`,
          color: `hsla(${hue}, 80%, 90%, ${0.5 + intensity * 0.5})`
        };
      }
    }

    return { className: `${baseClass} ${widthClass} ${heightClass}`, style: extraStyle };
  };

  const K = ({ k, w, h, x, children }: { k: string, w?: string, h?: string, x?: number, children?: React.ReactNode }) => {
    const s = getKeyStyle(k, w, h, x);
    return <div className={s.className} style={s.style}>{children}</div>
  };

  // Helper para 3 símbolos (ISO Style): Top(Shift) & Bottom(Normal) Centrados, Right(AltGr) Abajo-Derecha
  const IsoKey = ({ top, bottom, right }: { top: string, bottom: string, right: string }) => (
    <div className="w-full h-full relative">
      <div className="flex flex-col items-center justify-center h-full w-full pt-1">
        <span className="text-[10px] leading-none opacity-80 font-medium mb-0.5">{top}</span>
        <span className="text-[13px] font-bold leading-none">{bottom}</span>
      </div>
      <span className="absolute bottom-[4px] right-[4px] text-[10px] opacity-70 leading-none font-medium">{right}</span>
    </div>
  );

  // Helper específico para la tecla Ç (Letra centrada + Símbolo AltGr)
  const LetterKey = ({ l, s }: { l: string, s: string }) => (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[12px] font-medium">{l}</span>
      </div>
      <span className="absolute bottom-[4px] right-[5px] text-[11px] opacity-70 leading-none font-medium">{s}</span>
    </div>
  );

  // Helper para 2 símbolos estándar (Shift arriba, Normal abajo)
  const DualKey = ({ t, b }: { t: string, b: string }) => (
    <div className="flex flex-col items-center justify-center">
      <span className="text-[10px] opacity-70 mb-[-2px]">{t}</span>
      <span className="text-[12px] font-bold">{b}</span>
    </div>
  );

  const functionKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];

  return (
    <div className="scale-[0.55] md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.95] origin-center flex justify-center select-none">
      <div className="bg-transparent rounded-[10px] p-1 flex flex-col gap-[6px] w-[755px]">

        {/* Touchbar */}
        <div className="flex gap-[1px] items-center mb-1">
          <div className="h-[30px] w-[60px] bg-[var(--key-bg)] rounded text-[9px] text-[var(--key-text)] flex items-center justify-center">esc</div>
          <div className="h-[30px] flex-grow bg-[var(--bg-app)] rounded flex items-center justify-around px-2">
            {functionKeys.map(f => (
              <div key={f} className="text-[8px] font-bold text-[var(--text-secondary)]">{f}</div>
            ))}
          </div>
          <div className="h-[30px] w-[40px] bg-[var(--key-bg)] rounded flex items-center justify-center text-[var(--key-text)]"><i className="fa fa-volume-up text-[10px]"></i></div>
        </div>

        {/* Fila 1 - Números */}
        <div className="flex gap-[6px]">
          <K k="º" x={0.00}><IsoKey top="ª" bottom="º" right="\" /></K>
          <K k="1" x={0.07}><IsoKey top="!" bottom="1" right="|" /></K>
          <K k="2" x={0.14}><IsoKey top='"' bottom="2" right="@" /></K>
          <K k="3" x={0.21}><IsoKey top="·" bottom="3" right="#" /></K>
          <K k="4" x={0.28}><IsoKey top="$" bottom="4" right="~" /></K>
          <K k="5" x={0.35}><IsoKey top="%" bottom="5" right="€" /></K>
          <K k="6" x={0.42}><IsoKey top="&" bottom="6" right="¬" /></K>
          <K k="7" x={0.50}><DualKey t="/" b="7" /></K>
          <K k="8" x={0.58}><DualKey t="(" b="8" /></K>
          <K k="9" x={0.67}><DualKey t=")" b="9" /></K>
          <K k="0" x={0.75}><DualKey t="=" b="0" /></K>
          <K k="'" x={0.83}><DualKey t="?" b="'" /></K>
          <K k="¡" x={0.91}><DualKey t="¿" b="¡" /></K>
          <K k="backspace" x={1.00} w="flex-grow">⌫</K>
        </div>

        {/* Filas 2 y 3 con Enter Vertical ISO */}
        <div className="flex gap-[6px] items-start w-full">
          <div className="flex flex-col gap-[6px] flex-grow-0">
            {/* Fila 2 - QWERTY */}
            <div className="flex flex-row gap-[6px]">
              <K k="tab" x={0.00} w="w-[68px]">⇥</K>
              <K k="q" x={0.12}>Q</K>
              <K k="w" x={0.20}>W</K>
              <K k="e" x={0.28}>E</K>
              <K k="r" x={0.36}>R</K>
              <K k="t" x={0.44}>T</K>
              <K k="y" x={0.52}>Y</K>
              <K k="u" x={0.60}>U</K>
              <K k="i" x={0.68}>I</K>
              <K k="o" x={0.76}>O</K>
              <K k="p" x={0.84}>P</K>
              <K k="[" x={0.90}><IsoKey top="^" bottom="`" right="[" /></K>
              <K k="]" x={0.96}><IsoKey top="*" bottom="+" right="]" /></K>
            </div>
            {/* Fila 3 - ASDFG */}
            <div className="flex flex-row gap-[6px]">
              <div className={`${getKeyStyle('capslock', 'w-[80px]', 'h-[44px]', 0.0).className} relative`} style={getKeyStyle('capslock', 'w-[80px]', 'h-[44px]', 0.0).style}>
                <div className={`w-1 h-1 rounded-full bg-green-500 absolute top-2 left-2 ${isKeyActive('capslock') ? 'opacity-100' : 'opacity-0'}`}></div>
                ⇪
              </div>
              <K k="a" x={0.15}>A</K>
              <K k="s" x={0.23}>S</K>
              <K k="d" x={0.31}>D</K>
              <K k="f" x={0.39}>F</K>
              <K k="g" x={0.47}>G</K>
              <K k="h" x={0.55}>H</K>
              <K k="j" x={0.63}>J</K>
              <K k="k" x={0.71}>K</K>
              <K k="l" x={0.79}>L</K>
              <K k="ñ" x={0.87}>Ñ</K>
              <K k="{" x={0.93}><IsoKey top="¨" bottom="´" right="{" /></K>
              <K k="}" x={0.98}><LetterKey l="Ç" s="}" /></K>
            </div>
          </div>
          {/* Enter Vertical ISO */}
          <div className={`${getKeyStyle('enter', 'w-[52px]', 'h-[94px]').className} flex-col !justify-end pb-4`} style={getKeyStyle('enter').style}>
            <span className="text-xl opacity-70 mb-2">↵</span>
          </div>
        </div>

        {/* Fila 4 - ZXCV */}
        <div className="flex gap-[6px]">
          <K k="shift" x={0.00} w="w-[56px]">⇧</K>
          <K k="<" x={0.15}><DualKey t=">" b="<" /></K>
          <K k="z" x={0.22}>Z</K>
          <K k="x" x={0.30}>X</K>
          <K k="c" x={0.38}>C</K>
          <K k="v" x={0.46}>V</K>
          <K k="b" x={0.54}>B</K>
          <K k="n" x={0.62}>N</K>
          <K k="m" x={0.70}>M</K>
          <K k="," x={0.78}><DualKey t=";" b="," /></K>
          <K k="." x={0.86}><DualKey t=":" b="." /></K>
          <K k="-" x={0.94}><DualKey t="_" b="-" /></K>
          <K k="shift" x={1.00} w="flex-grow">⇧</K>
        </div>

        {/* Fila 5 - Espacio */}
        <div className="flex gap-[6px]">
          <K k="fn" x={0.00}>fn</K>
          <K k="control" x={0.06}>⌃</K>
          <K k="alt" x={0.12} w="w-[54px]">⌥</K>
          <K k="meta" x={0.20} w="w-[64px]">⌘</K>
          <K k="space" x={0.50} w="w-[250px]">{''}</K>
          <K k="meta" x={0.80} w="w-[64px]">⌘</K>
          <K k="alt" x={0.88} w="w-[54px]">⌥</K>
          <div className="flex flex-col justify-end h-[44px] w-[44px]">
            <K k="arrowleft" x={0.94} w="w-full" h="h-[21px]"><i className="fa fa-caret-left"></i></K>
          </div>
          <div className="flex flex-col gap-[2px] w-[44px]">
            <K k="arrowup" x={0.97} w="w-full" h="h-[21px]"><i className="fa fa-caret-up"></i></K>
            <K k="arrowdown" x={0.97} w="w-full" h="h-[21px]"><i className="fa fa-caret-down"></i></K>
          </div>
          <div className="flex flex-col justify-end h-[44px] w-[44px]">
            <K k="arrowright" x={1.00} w="w-full" h="h-[21px]"><i className="fa fa-caret-right"></i></K>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacKeyboard;