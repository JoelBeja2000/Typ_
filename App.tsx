import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Keyboard from './components/Keyboard';
import MacKeyboard from './components/MacKeyboard';
import FingerGuide from './components/FingerGuide';
import { AudioWave } from './src/components/AudioWave';
import { WebAudioSystem } from './src/infrastructure/audio/WebAudioSystem';
import { MusicSequencer } from './src/domain/services/MusicSequencer';
import { TECHNO_STYLE, AMBIENT_STYLE, ACID_HOUSE_STYLE, MusicStyle } from './src/domain/models/MusicStyles';
import { KEY_TO_FINGER_MAP, SPACE_DATA } from './constants';
import { Language, TypingStats } from './types';
import { generatePracticePhrases } from './services/geminiService';

// --- COMPONENTES UI AUXILIARES ---

interface AccordionItemProps {
  id: string;
  title: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
  icon: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, isExpanded, onToggle, children, icon }) => {
  return (
    <div className="flex flex-col border-b border-[var(--border-glass)]">
      <button
        onClick={() => onToggle(id)}
        className={`flex items-center justify-between py-5 px-2 transition-all duration-300 group ${isExpanded ? 'translate-x-1' : ''}`}
      >
        <div className="flex items-center gap-3">
          <i className={`fa ${icon} text-[10px] ${isExpanded ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}`}></i>
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isExpanded ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}`}>
            {title}
          </span>
        </div>
        <i className={`fa fa-chevron-right text-[8px] transition-transform duration-500 ${isExpanded ? 'rotate-90 text-[var(--accent-primary)]' : 'text-[var(--text-secondary)]'}`}></i>
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-6 pt-2 px-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

const HiddenInput = React.memo(({
  inputRef,
  onInput,
  onCompositionStart,
  onCompositionEnd,
  onKeyDown,
  onBlur
}: {
  inputRef: React.RefObject<HTMLTextAreaElement | null>,
  onInput: (e: React.FormEvent<HTMLTextAreaElement>) => void,
  onCompositionStart: () => void,
  onCompositionEnd: (e: React.CompositionEvent<HTMLTextAreaElement>) => void,
  onKeyDown: (e: React.KeyboardEvent) => void,
  onBlur: () => void
}) => {
  return (
    <textarea
      ref={inputRef}
      onInput={onInput}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none z-[-1] caret-transparent cursor-none resize-none m-0 p-0 border-0 outline-none"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      tabIndex={0}
    />
  );
});
HiddenInput.displayName = 'HiddenInput';

const hexToRgba = (hex: string, alpha: number) => {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
  }
  return `rgba(162, 173, 145, ${alpha})`;
}

type Palette = 'alpine' | 'ocean' | 'sunset' | 'amethyst' | 'custom';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [palette, setPalette] = useState<Palette>('alpine');
  const [customColor, setCustomColor] = useState('#A2AD91');

  const [language, setLanguage] = useState<Language>('es');
  const [focus, setFocus] = useState('Básico');
  const [phrases, setPhrases] = useState<string[]>([]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [activeKey, setActiveKey] = useState('');
  const [stats, setStats] = useState<TypingStats>({ wpm: 0, accuracy: 100, mistakes: 0, totalChars: 0 });
  const [combo, setCombo] = useState(0);
  const [wordHasMistake, setWordHasMistake] = useState(false);

  const [startTime, setStartTime] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [keyboardType, setKeyboardType] = useState<'standard' | 'mac'>('mac');
  const [expandedLeftCat, setExpandedLeftCat] = useState<string | null>('config');
  const [showZones, setShowZones] = useState(false);
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [currentMusicStyle, setCurrentMusicStyle] = useState<MusicStyle>(TECHNO_STYLE);
  const [isZenMode, setIsZenMode] = useState(false);
  const [isTypingSoundsEnabled, setIsTypingSoundsEnabled] = useState(true);
  const [comboMultiplier, setComboMultiplier] = useState(1.0);
  const [isMusicLightingEnabled, setIsMusicLightingEnabled] = useState(false);
  const [frequencyBands, setFrequencyBands] = useState({ bass: 0, mid: 0, high: 0 });

  const [isComposingState, setIsComposingState] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const isComposingRef = useRef(false);
  const lastProcessedText = useRef('');

  // HEXAGONAL ARCHITECTURE: Infrastructure & Domain Injection
  const audioSystemRef = useRef<WebAudioSystem | null>(null);
  const sequencerRef = useRef<MusicSequencer | null>(null);
  const comboRef = useRef(combo);
  const [audioReady, setAudioReady] = useState(false);

  const currentPhrase = useMemo(() => phrases[phraseIndex] || '', [phrases, phraseIndex]);
  const normalizedTypedText = useMemo(() => typedText.normalize('NFC'), [typedText]);

  const currentWordInfo = useMemo(() => {
    const phraseParts = currentPhrase.split(' ');
    const typedParts = normalizedTypedText.split(' ');

    let currentWord = '';
    let userTypedSlice = '';

    for (let i = 0; i < typedParts.length; i++) {
      if (i < phraseParts.length) {
        if (i === typedParts.length - 1) {
          currentWord = phraseParts[i];
          userTypedSlice = typedParts[i];
        }
      }
    }

    if (typedParts.length === 1 && typedParts[0] === '') {
      currentWord = phraseParts[0] || '';
      userTypedSlice = '';
    } else if (typedParts.length <= phraseParts.length && normalizedTypedText.endsWith(' ')) {
      currentWord = phraseParts[typedParts.length] || '';
      userTypedSlice = '';
    }

    return { word: currentWord, userTypedSlice: userTypedSlice };
  }, [currentPhrase, normalizedTypedText]);

  const targetChar = useMemo(() => {
    if (isFinished || isLoading) return '';
    if (normalizedTypedText.length < currentPhrase.length) {
      return currentPhrase[normalizedTypedText.length];
    }
    return '';
  }, [currentPhrase, normalizedTypedText, isFinished, isLoading]);

  const targetKeyData = useMemo(() => {
    if (!targetChar) return null;
    return KEY_TO_FINGER_MAP[targetChar.toLowerCase()] || null;
  }, [targetChar]);

  useEffect(() => { comboRef.current = combo; }, [combo]);

  useEffect(() => {
    // Initialize Hexagonal Audio System
    const sys = new WebAudioSystem();
    audioSystemRef.current = sys;
    sequencerRef.current = new MusicSequencer(sys, currentMusicStyle);
    setAudioReady(true);

    return () => { sequencerRef.current?.stop(); };
  }, []);

  useEffect(() => {
    if (isMusicEnabled && audioReady) {
      sequencerRef.current?.start(() => comboRef.current);
    } else {
      sequencerRef.current?.stop();
    }
  }, [isMusicEnabled, audioReady]);

  useEffect(() => {
    if (sequencerRef.current) {
      sequencerRef.current.setStyle(currentMusicStyle);
      sequencerRef.current.setMultiplier(comboMultiplier);
      if (isMusicEnabled) sequencerRef.current.start(() => comboRef.current);
    }
  }, [currentMusicStyle, isMusicEnabled, comboMultiplier]);

  // Audio Reactive Keyboard Lighting Loop
  useEffect(() => {
    let frameId: number;
    const pollEnergy = () => {
      if (isMusicLightingEnabled && audioSystemRef.current) {
        setFrequencyBands(audioSystemRef.current.getFrequencyBands());
      } else {
        setFrequencyBands({ bass: 0, mid: 0, high: 0 });
      }
      frameId = requestAnimationFrame(pollEnergy);
    };
    frameId = requestAnimationFrame(pollEnergy);
    return () => cancelAnimationFrame(frameId);
  }, [isMusicLightingEnabled]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-palette', palette);
    if (palette === 'custom') {
      document.documentElement.style.setProperty('--accent-primary', customColor);
      document.documentElement.style.setProperty('--accent-glow', hexToRgba(customColor, 0.4));
    } else {
      document.documentElement.style.removeProperty('--accent-primary');
      document.documentElement.style.removeProperty('--accent-glow');
    }
  }, [theme, palette, customColor]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const cyclePalette = () => {
    const palettes: Palette[] = ['alpine', 'ocean', 'sunset', 'amethyst'];
    setPalette(prev => prev === 'custom' ? palettes[0] : palettes[(palettes.indexOf(prev) + 1) % palettes.length]);
  };

  useEffect(() => {
    const keepFocus = () => {
      if (!showLeftSidebar && !showRightSidebar && !isLoading && !isFinished && document.activeElement !== colorInputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 10);
      }
    };
    window.addEventListener('click', keepFocus);
    window.addEventListener('focus', keepFocus);
    return () => {
      window.removeEventListener('click', keepFocus);
      window.removeEventListener('focus', keepFocus);
    };
  }, [showLeftSidebar, showRightSidebar, isLoading, isFinished]);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      const newPhrases = await generatePracticePhrases(language, focus);
      setPhrases(newPhrases.map(p => p.normalize('NFC')));
      setTypedText(''); lastProcessedText.current = ''; setPhraseIndex(0); setCombo(0); setWordHasMistake(false);
      if (inputRef.current) inputRef.current.value = '';
      setIsLoading(false);
    };
    init();
  }, [language, focus]);

  // Lógica de procesamiento de caracteres mejorada para el FLOW
  useEffect(() => {
    const current = normalizedTypedText;
    const previous = lastProcessedText.current.normalize('NFC');
    if (current === previous || isComposingRef.current) return;
    if (!startTime && current.length > 0) setStartTime(Date.now());

    if (current.length > previous.length) {
      const idx = current.length - 1;
      const tChar = currentPhrase[idx];
      const typedChar = current[idx];

      if (idx < currentPhrase.length) {
        if (!isZenMode && typedChar !== tChar) {
          setWordHasMistake(true); setCombo(0);
          if (isTypingSoundsEnabled) audioSystemRef.current?.playError();
          setStats(prev => ({
            ...prev, mistakes: prev.mistakes + 1, totalChars: prev.totalChars + 1,
            accuracy: Math.round(((prev.totalChars + 1 - (prev.mistakes + 1)) / (prev.totalChars + 1)) * 100)
          }));
        } else {
          // Acierto (o auto-validación Zen)
          setStats(prev => ({
            ...prev, totalChars: prev.totalChars + 1,
            accuracy: Math.round(((prev.totalChars + 1 - prev.mistakes) / (prev.totalChars + 1)) * 100)
          }));

          // Combo increment: ONLY on space or end of phrase (Word-based)
          if (typedChar === ' ' || idx === currentPhrase.length - 1) {
            if (isZenMode || !wordHasMistake) {
              const newCombo = combo + 1;
              setCombo(newCombo);
              comboRef.current = newCombo; // Sync Ref IMMEDIATELY for the sequencer
              if (isTypingSoundsEnabled) audioSystemRef.current?.playSuccess(newCombo, isZenMode);
            }
            setWordHasMistake(false);
          } else {
            // Provide sound feedback for letters in Zen but no combo
            if (isZenMode && isTypingSoundsEnabled) audioSystemRef.current?.playSuccess(combo, true);
          }
        }
      }
    }

    lastProcessedText.current = current;

    // Transición de frase instantánea para el FLOW
    if (current === currentPhrase && currentPhrase.length > 0) {
      if (phraseIndex < phrases.length - 1) {
        // En modo ZEN el salto es inmediato, en modo normal mantenemos el pequeñísimo micro-tiempo para feedback visual
        const delay = isZenMode ? 0 : 50;
        setTimeout(() => {
          setPhraseIndex(prev => prev + 1);
          setTypedText('');
          lastProcessedText.current = '';
          if (inputRef.current) inputRef.current.value = '';
        }, delay);
      } else {
        if (isZenMode) {
          const delay = 0;
          setTimeout(() => {
            setPhraseIndex(0);
            setTypedText('');
            lastProcessedText.current = '';
            if (inputRef.current) inputRef.current.value = '';
          }, delay);
        } else {
          setIsFinished(true);
        }
      }
    }
  }, [normalizedTypedText, currentPhrase, phraseIndex, phrases.length, startTime, wordHasMistake, combo, isZenMode]);

  const isFetchingMore = useRef(false);

  // Infinite Zen: Pre-fetch phrases when running low
  useEffect(() => {
    // If Zen is ON, and we are near the end of the current buffer, fetch more proactively
    if (isZenMode && !isLoading && !isFetchingMore.current && phraseIndex >= phrases.length - 2) {
      const fetchMore = async () => {
        isFetchingMore.current = true;
        try {
          const more = await generatePracticePhrases(language, focus);
          if (more && more.length > 0) {
            const normalized = more.map(p => p.normalize('NFC'));
            setPhrases(prev => [...prev, ...normalized]);
          }
        } catch (err) {
          console.error("Failed to fetch more Zen phrases:", err);
        } finally {
          isFetchingMore.current = false;
        }
      };
      fetchMore();
    }
  }, [isZenMode, phraseIndex, phrases.length, language, focus, isLoading]);

  const handleInput = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    let val = e.currentTarget.value.normalize('NFC');

    // MODO ZEN: Se traga CUALQUIER input y lo mapea a la secuencia correcta
    if (isZenMode) {
      const phrase = phrases[phraseIndex] || '';
      if (val.length <= phrase.length) {
        val = phrase.substring(0, val.length);
        e.currentTarget.value = val;
      } else {
        // Si ya terminó la frase pero sigue escribiendo, ignoramos el extra
        val = phrase;
        e.currentTarget.value = val;
      }
    }

    setTypedText(val);
  }, [isZenMode, phrases, phraseIndex]);

  const handleCompositionStart = useCallback(() => { isComposingRef.current = true; setIsComposingState(true); }, []);
  const handleCompositionEnd = useCallback((e: React.CompositionEvent<HTMLTextAreaElement>) => {
    isComposingRef.current = false; setIsComposingState(false);
    let val = e.currentTarget.value.normalize('NFC');

    if (isZenMode) {
      const phrase = phrases[phraseIndex] || '';
      if (val.length <= phrase.length) {
        val = phrase.substring(0, val.length);
        e.currentTarget.value = val;
      }
    }

    setTypedText(val);
  }, [isZenMode, phrases, phraseIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    setActiveKey(e.key);
    setTimeout(() => setActiveKey(''), 150);
    audioSystemRef.current?.resume();
  }, []);

  useEffect(() => {
    if (startTime && !isFinished) {
      const interval = setInterval(() => {
        const timeElapsed = (Date.now() - startTime) / 60000;
        let correctChars = 0;
        const current = normalizedTypedText;
        for (let i = 0; i < current.length; i++) if (current[i] === currentPhrase[i]) correctChars++;
        setStats(prev => ({ ...prev, wpm: Math.round((correctChars / 5) / (timeElapsed || 0.001)) || 0 }));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime, isFinished, normalizedTypedText, currentPhrase]);

  const restart = async () => {
    setTypedText(''); lastProcessedText.current = ''; setPhraseIndex(0); setCombo(0); setWordHasMistake(false);
    if (inputRef.current) inputRef.current.value = '';
    setStats({ wpm: 0, accuracy: 100, mistakes: 0, totalChars: 0 });
    setStartTime(null); setIsFinished(false); setIsLoading(true);
    const newPhrases = await generatePracticePhrases(language, focus);
    setPhrases(newPhrases.map(p => p.normalize('NFC')));
    setIsLoading(false);
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const setSimpleWarmup = () => {
    setIsLoading(true);
    const warmupPhrases = ["a a a a a a a a", "j j j j j j j j", "f f f f f f f f", "d d d d d d d d", "k k k k k k k k"];
    setPhrases(warmupPhrases); setTypedText(''); lastProcessedText.current = ''; setPhraseIndex(0); setCombo(0); setWordHasMistake(false); setStartTime(null); setStats({ wpm: 0, accuracy: 100, mistakes: 0, totalChars: 0 });
    setIsFinished(false); setIsLoading(false); setShowLeftSidebar(false);
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const getBtnClass = (active: boolean) => `w-full p-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-between group ${active ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]' : 'bg-transparent border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]'}`;



  return (
    <div className="min-h-screen relative flex flex-row items-stretch overflow-hidden bg-[var(--bg-app)] transition-colors duration-500">
      <HiddenInput inputRef={inputRef} onInput={handleInput} onCompositionStart={handleCompositionStart} onCompositionEnd={handleCompositionEnd} onKeyDown={handleKeyDown} onBlur={() => setIsComposingState(false)} />
      <input type="color" ref={colorInputRef} onChange={(e) => { setCustomColor(e.target.value); setPalette('custom'); }} value={customColor} className="fixed opacity-0 pointer-events-none -z-10" />

      <button onClick={() => setShowLeftSidebar(true)} className={`fixed left-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-l-0 rounded-r-2xl transition-all duration-500 group ${showLeftSidebar ? 'translate-x-[-100%] opacity-0' : 'opacity-100'}`}><i className="fa fa-chevron-right text-[10px] text-[var(--text-secondary)]"></i></button>
      <button onClick={() => setShowRightSidebar(true)} className={`fixed right-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-r-0 rounded-l-2xl transition-all duration-500 group ${showRightSidebar ? 'translate-x-[100%] opacity-0' : 'opacity-100'}`}><i className="fa fa-chevron-left text-[10px] text-[var(--text-secondary)]"></i></button>

      <div className={`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-md transition-all duration-500 ${(showLeftSidebar || showRightSidebar) ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => { setShowLeftSidebar(false); setShowRightSidebar(false); }} />

      <aside className={`fixed top-0 left-0 h-full w-[400px] z-[2001] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border-r border-[var(--border-glass)] p-8 transition-all duration-500 transform ${showLeftSidebar ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4"><div className="w-14 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-black text-xl shadow-[0_0_15px_var(--accent-glow)]">Typ_</div><h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]">System_Core</h2></div>
          <button onClick={() => setShowLeftSidebar(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"><i className="fa fa-close"></i></button>
        </div>
        <div className="mb-8">
          <button onClick={setSimpleWarmup} className="w-full py-5 rounded-[1.5rem] bg-[var(--accent-primary)] text-[var(--bg-app)] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_var(--accent-glow)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
            <i className="fa fa-bolt group-hover:animate-bounce"></i>
            <span>Calentamiento "A A A"</span>
          </button>
          <p className="mt-4 text-[8px] text-[var(--text-ghost)] uppercase tracking-widest text-center px-4 leading-relaxed">Práctica de teclas base para entrar en calor.</p>
        </div>
        <AccordionItem id="config" title="Configuración" icon="fa-sliders" isExpanded={expandedLeftCat === 'config'} onToggle={setExpandedLeftCat}>
          <div className="space-y-4">
            <button onClick={() => setLanguage('es')} className={getBtnClass(language === 'es')}><span>Español</span> <span>🇪🇸</span></button>
            <button onClick={() => setLanguage('en')} className={getBtnClass(language === 'en')}><span>English</span> <span>🇺🇸</span></button>
            <div className="h-[1px] bg-[var(--border-glass)] my-2" />
            <button onClick={() => setFocus('Básico')} className={getBtnClass(focus === 'Básico')}><span>Básico</span></button>
            <button onClick={() => setFocus('Programación')} className={getBtnClass(focus === 'Programación')}><span>Programación</span></button>
            <button onClick={() => setFocus('Teclas Raras')} className={getBtnClass(focus === 'Teclas Raras')}><span>Teclas Raras</span></button>
          </div>
        </AccordionItem>

        <AccordionItem id="music" title="Estilo Musical" icon="fa-music" isExpanded={expandedLeftCat === 'music'} onToggle={setExpandedLeftCat}>
          <div className="space-y-4">
            <button onClick={() => setCurrentMusicStyle(TECHNO_STYLE)} className={getBtnClass(currentMusicStyle.name === TECHNO_STYLE.name)}><span>Berlín Techno</span> <i className="fa fa-circle"></i></button>
            <button onClick={() => setCurrentMusicStyle(AMBIENT_STYLE)} className={getBtnClass(currentMusicStyle.name === AMBIENT_STYLE.name)}><span>Cyber Ambient</span> <i className="fa fa-cloud"></i></button>
            <button onClick={() => setCurrentMusicStyle(ACID_HOUSE_STYLE)} className={getBtnClass(currentMusicStyle.name === ACID_HOUSE_STYLE.name)}><span>Acid House 303</span> <i className="fa fa-flask"></i></button>
          </div>
        </AccordionItem>
      </aside>

      <aside className={`fixed top-0 right-0 h-full w-[450px] z-[2001] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform ${showRightSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-12"><h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)]">Guía Técnica</h2><button onClick={() => setShowRightSidebar(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"><i className="fa fa-close"></i></button></div>
        <FingerGuide targetKeyData={targetKeyData} />
      </aside>

      <main className="flex-grow flex flex-col items-center justify-center p-8 transition-all duration-500" style={{ opacity: (showLeftSidebar || showRightSidebar) ? 0.3 : 1 }}>
        <div className="w-full max-w-5xl flex flex-col items-center gap-8">
          <div className="w-full bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] rounded-[1.5rem] p-10 md:p-14 min-h-[180px] flex flex-col justify-center relative overflow-hidden">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-8 h-8 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[var(--text-secondary)] font-mono text-[8px] uppercase tracking-[0.4em]">Iniciando_Motor...</p>
              </div>
            ) : isFinished ? (
              <div className="text-center animate-in zoom-in duration-700">
                <h2 className="text-3xl font-black text-[var(--text-primary)] mb-6 font-mono tracking-tighter">OBJETIVO_CUMPLIDO</h2>
                <button onClick={restart} className="group px-10 py-4 rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] font-black uppercase tracking-widest hover:bg-[var(--accent-primary)]/10 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all">Siguiente Protocolo</button>
              </div>
            ) : (
              <div className="font-mono text-2xl md:text-3xl relative select-none">
                <div className="text-[var(--text-ghost)] whitespace-pre-wrap leading-relaxed">
                  {currentPhrase.split('').map((char, i) => {
                    let color = "text-[var(--text-ghost)]";
                    if (i < normalizedTypedText.length) {
                      if (isComposingState && i === normalizedTypedText.length - 1) color = "text-yellow-400 border-b-2 border-yellow-400/50";
                      else color = normalizedTypedText[i] === char ? "text-[var(--accent-primary)]" : "text-red-400 bg-red-500/10 border-b-2 border-red-500/30";
                    }
                    return <span key={i} className={`${color} transition-all inline-block`}>{char === ' ' ? '\u00A0' : char}{i === normalizedTypedText.length && <span className="absolute left-0 bottom-[-4px] w-full h-[3px] bg-[var(--accent-primary)] animate-pulse shadow-[0_0_15px_var(--accent-primary)]" />}</span>;
                  })}
                </div>
              </div>
            )}
          </div>

          {!isLoading && !isFinished && (
            <div className="bg-[var(--bg-floating)] backdrop-blur-xl border border-[var(--border-strong)] rounded-[1.5rem] px-12 h-24 flex items-center justify-center min-w-[360px] shadow-2xl">
              <div className="relative font-mono text-3xl flex items-center h-full min-w-[200px]">
                <div className="absolute inset-0 text-[var(--text-ghost)] whitespace-pre flex items-center justify-start pointer-events-none">{currentWordInfo.word}</div>
                <div className="relative flex items-center whitespace-pre h-full">
                  {currentWordInfo.userTypedSlice.split('').map((userChar, idx) => {
                    const correct = userChar === (currentWordInfo.word[idx] || '');
                    const color = (isComposingState && idx === currentWordInfo.userTypedSlice.length - 1) ? "text-yellow-400" : (correct ? 'text-[var(--accent-primary)]' : 'text-red-400 bg-red-500/10 border-b-2 border-red-500/30');
                    return <span key={idx} className={`relative inline-block ${color}`}>{userChar === ' ' ? '\u00A0' : userChar}</span>;
                  })}
                  <span className="inline-block w-0.5 h-10 bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] animate-pulse rounded-full ml-[-1px]" />
                </div>
              </div>
            </div>
          )}

          <div className="w-full relative flex flex-col items-center">
            <div className="w-full bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] rounded-[1.5rem] p-10 pt-20 flex justify-center shadow-2xl relative">

              <div className="absolute top-6 left-6 flex items-start gap-2 z-[100]">
                {/* PRIMARY ACTIONS */}
                <div className="flex gap-2">
                  <button onClick={restart} className="h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all" title="Reiniciar"><i className="fa fa-refresh"></i></button>
                  <button onClick={() => setIsZenMode(!isZenMode)} className={`h-11 px-4 flex items-center justify-center border rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all group ${isZenMode ? 'bg-[var(--accent-primary)] text-[var(--bg-app)] border-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]' : 'bg-[var(--bg-glass)] text-[var(--text-secondary)] border-[var(--border-strong)]'}`} title="Modo Swallow (Traga-todo)">
                    <i className={`fa ${isZenMode ? 'fa-bolt' : 'fa-shield'} mr-2 ${isZenMode ? 'animate-pulse' : ''}`}></i>
                    ZEN {isZenMode ? 'ON' : 'OFF'}
                  </button>
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={`h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all duration-300 ${showSettings ? 'bg-[var(--accent-primary)] text-[var(--bg-app)] border-[var(--accent-primary)] rotate-90 shadow-[0_0_20px_var(--accent-glow)]' : 'bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)]'}`}
                    title="Configuración Visual"
                  >
                    <i className="fa fa-gear"></i>
                  </button>
                </div>

                {/* EXPANDABLE SETTINGS GRID (NOW EXPANDS RIGHT) */}
                <div className={`grid grid-rows-2 grid-flow-col gap-2 transition-all duration-500 transform origin-left ${showSettings ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'}`}>
                  <button onClick={() => setIsTypingSoundsEnabled(!isTypingSoundsEnabled)} className={`h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all ${isTypingSoundsEnabled ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border-[var(--accent-primary)]' : 'bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)]'}`} title="Sonido de teclas"><i className={`fa ${isTypingSoundsEnabled ? 'fa-keyboard-o' : 'fa-keyboard-o opacity-40'}`}></i></button>
                  <button onClick={() => setIsMusicEnabled(!isMusicEnabled)} className={`h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all ${isMusicEnabled ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border-[var(--accent-primary)]' : 'bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)]'}`} title="Música Progresiva"><i className={`fa ${isMusicEnabled ? 'fa-volume-up' : 'fa-volume-off'}`}></i></button>
                  <button onClick={() => setIsMusicLightingEnabled(!isMusicLightingEnabled)} className={`h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all ${isMusicLightingEnabled ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border-[var(--accent-primary)]' : 'bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)]'}`} title="Luces Rítmicas"><i className={`fa ${isMusicLightingEnabled ? 'fa-lightbulb-o' : 'fa-lightbulb-o opacity-40'}`}></i></button>
                  <button onClick={toggleTheme} className="h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all" title="Tema"><i className={`fa ${theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o'}`}></i></button>
                  <button onClick={cyclePalette} className="h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-all" title="Paleta"><i className="fa fa-paint-brush"></i></button>
                  <button onClick={() => colorInputRef.current?.click()} className={`h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--text-secondary)] transition-all ${palette === 'custom' ? 'text-[var(--accent-primary)]' : ''}`} title="Color Personalizado"><i className="fa fa-eyedropper"></i></button>
                  <button onClick={() => setShowZones(!showZones)} className={`h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all ${showZones ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border-[var(--accent-primary)]' : 'bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)]'}`} title="Zonas Dactilares"><i className="fa fa-hand-paper-o"></i></button>
                </div>
              </div>

              <div className="absolute top-6 left-1/2 -translate-x-1/2 h-11 w-[400px] bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl flex items-center px-4 overflow-hidden shadow-2xl z-20 transition-all duration-500" style={{ boxShadow: combo > 15 ? `0 0 30px ${hexToRgba(customColor, 0.3)}` : 'none' }}>
                {audioReady && audioSystemRef.current && (
                  <>
                    {/* MODULAR WAVES: Dynamic rendering based on current style and combo lifecycle */}
                    {currentMusicStyle.layers.map((layer) => {
                      const scaledCombo = combo * comboMultiplier;
                      const isActive = scaledCombo >= layer.minCombo && (layer.maxCombo === undefined || scaledCombo <= layer.maxCombo);
                      return isActive && (
                        <AudioWave
                          key={layer.id}
                          analyser={audioSystemRef.current!.getAnalysers()[layer.id as keyof ReturnType<WebAudioSystem['getAnalysers']>] || audioSystemRef.current!.getAnalysers().master}
                          type={layer.type as any}
                          color={layer.color}
                          active={startTime !== null && !isFinished}
                          opacityMultiplier={layer.opacity}
                          yOffset={layer.yOffset}
                        />
                      );
                    })}
                  </>
                )}
                <div className="flex items-center gap-4 relative z-10 w-full justify-between group">
                  <div className="flex items-baseline gap-1.5"><span className="text-[14px] font-black text-[var(--accent-primary)] font-mono">{stats.wpm}</span><span className="text-[7px] font-bold text-[var(--text-secondary)] uppercase">WPM</span></div>
                  <div className="h-4 w-[1px] bg-[var(--border-strong)]" />
                  <div className="flex items-baseline gap-1.5"><span className="text-[14px] font-black text-[var(--text-primary)] font-mono">{stats.accuracy}</span><span className="text-[7px] font-bold text-[var(--text-secondary)] uppercase">%ACC</span></div>
                  <div className="h-4 w-[1px] bg-[var(--border-strong)]" />
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-[14px] font-black font-mono transition-all duration-300 ${combo > 0 ? 'text-[var(--accent-primary)] scale-125' : 'text-[var(--text-muted)]'}`}>
                      {combo}
                    </span>
                    <span className="text-[7px] font-bold text-[var(--text-secondary)] uppercase">COMBO</span>
                  </div>
                  <div className="h-4 w-[1px] bg-[var(--border-strong)]" />
                  <div className="flex items-center gap-1 opacity-40"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse"></div><span className="text-[6px] font-black text-[var(--text-secondary)] uppercase">LIVE</span></div>

                  {/* TOOLTIP: Words to next sound */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-xl border border-[var(--border-strong)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    <span className="text-[7px] font-black text-[var(--accent-primary)] uppercase tracking-widest">
                      Ritmo Siguiente en +{Math.max(1, Math.ceil((currentMusicStyle.layers.find(l => (combo * comboMultiplier) < l.minCombo)?.minCombo || 0) / (comboMultiplier || 1)) - combo)} Palabras
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full">
                {keyboardType === 'standard'
                  ? <Keyboard activeKey={activeKey} targetKey={targetChar} showZones={showZones} bands={frequencyBands} />
                  : <MacKeyboard activeKey={activeKey} targetKey={targetChar} showZones={showZones} bands={frequencyBands} />
                }
              </div>

              <div className={`absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[var(--bg-glass)] border border-[var(--border-strong)] px-6 py-2.5 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 ${showSettings ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>
                <div className="flex flex-col">
                  <span className="text-[7px] font-black text-[var(--text-secondary)] uppercase tracking-tighter">Dificultad</span>
                  <span className="text-[8px] font-bold text-[var(--text-ghost)] uppercase transform scale-75 origin-left">Velocidad Música</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value={comboMultiplier}
                  onChange={(e) => setComboMultiplier(parseFloat(e.target.value))}
                  className="w-24 accent-[var(--accent-primary)] h-1.5"
                />
                <span className="text-[10px] font-mono font-black text-[var(--accent-primary)] w-8 text-center">{comboMultiplier.toFixed(1)}x</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-6 right-8 text-[var(--text-secondary)] text-[8px] font-black uppercase tracking-[0.5em] font-mono opacity-20">ALPINE_ECODECOR_PRO // 2025</footer>
    </div>
  );
};

export default App;