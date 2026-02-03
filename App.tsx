import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import FingerGuide from './components/FingerGuide';
import { WordPanel } from './src/components/WordPanel';
import { KeyboardSection } from './src/components/KeyboardSection';
import BirdAnimation from './src/components/BirdAnimation'; // Still needed for some side effects or other uses? Let's check.
import { WebAudioSystem } from './src/infrastructure/audio/WebAudioSystem';
import { MusicSequencer } from './src/domain/services/MusicSequencer';
import { TECHNO_STYLE, AMBIENT_STYLE, ACID_HOUSE_STYLE, MusicStyle } from './src/domain/models/MusicStyles';
import { KEY_TO_FINGER_MAP, SPACE_DATA } from './constants';
import { Language, TypingStats } from './types';
import { generatePracticePhrases } from './services/geminiService';
import { VisualsConfig, DEFAULT_VISUALS_CONFIG } from './src/types/visuals';

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

const PALETTE_COLORS: Record<string, string> = {
  alpine: '#A2AD91',
  ocean: '#22d3ee',
  sunset: '#fb923c',
  amethyst: '#c084fc',
};

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

  // BIRD 3D CONTROLS
  const [birdRotation, setBirdRotation] = useState({ x: 0, y: 0, z: 20 });
  const [birdPos3D, setBirdPos3D] = useState({ x: 0, y: 0, z: 0 });
  const [birdSize, setBirdSize] = useState(180);
  const [animType, setAnimType] = useState<'bird' | 'circle'>('bird');
  const [visualsConfig, setVisualsConfig] = useState<VisualsConfig>({ ...DEFAULT_VISUALS_CONFIG, type: 'circle' });

  const toggleAnimType = () => {
    const nextType = visualsConfig.type === 'bird' ? 'circle' : 'bird';
    setVisualsConfig(prev => ({ ...prev, type: nextType }));
    setAnimType(nextType);
  };
  const [dimensionalMenuPos, setDimensionalMenuPos] = useState<{ x: number, y: number } | null>(null);
  const [showDimensionalSettings, setShowDimensionalSettings] = useState(false);
  const [uiScale, setUiScale] = useState(1);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const isComposingRef = useRef(false);
  const lastProcessedText = useRef('');

  // HEXAGONAL ARCHITECTURE: Infrastructure & Domain Injection
  const audioSystemRef = useRef<WebAudioSystem | null>(null);
  const sequencerRef = useRef<MusicSequencer | null>(null);
  const comboRef = useRef(combo);
  const [audioReady, setAudioReady] = useState(false);

  // ... (useMemo hooks) ...
  const currentPhrase = useMemo(() => phrases[phraseIndex] || '', [phrases, phraseIndex]);
  const normalizedTypedText = useMemo(() => typedText.normalize('NFC'), [typedText]);

  const currentWordInfo = useMemo(() => {
    const phraseParts = currentPhrase.split(' ');
    const typedParts = normalizedTypedText.split(' ');
    const currentIdx = Math.min(typedParts.length - 1, phraseParts.length - 1);

    const currentWord = phraseParts[currentIdx] || '';
    const userTypedSlice = typedParts[typedParts.length - 1] || '';

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

  // Audio Reactive Loop (Lighting & Visuals)
  useEffect(() => {
    let frameId: number;
    const pollEnergy = () => {
      // Poll if we have an audio system and music/visuals are potentially active
      // We check audioSystemRef.current to avoid errors
      if (audioSystemRef.current) {
        // Always update bands if system exists, so 3D visuals get data
        // Optimization: Could check if (isMusicEnabled || isMusicLightingEnabled) but for now let's ensure it works.
        // Actually, if music is OFF, getFrequencyBands returns 0s anyway, so it's safe.
        setFrequencyBands(audioSystemRef.current.getFrequencyBands());
      } else {
        setFrequencyBands({ bass: 0, mid: 0, high: 0 });
      }
      frameId = requestAnimationFrame(pollEnergy);
    };
    frameId = requestAnimationFrame(pollEnergy);
    return () => cancelAnimationFrame(frameId);
  }, []); // Run once on mount (dependencies handled inside ref check)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-palette', palette);
    // Apply UI Scale
    document.documentElement.style.setProperty('--ui-scale', uiScale.toString());

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
      // Fetch more phrases initially for a smoother experience
      const newPhrases = await generatePracticePhrases(language, focus, 10);
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
          // INFINITE ZEN: If we reached the end, but ZEN is ON, we might be waiting for more
          // Instead of looping to 0 immediately, we only loop if we've been stuck for a bit 
          // or as a safety fallback. But the pre-fetch hook should prevent this.
          // To ensure "infinite" feel, we loop to 0 ONLY if no new phrases were added.
          // If phrases were added, the condition above (phraseIndex < phrases.length - 1) 
          // will eventually trigger when this effect runs again.

          // Fallback loop if we are truly at the end of even the fetched buffer
          const delay = 50;
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
    if (isZenMode && !isLoading && !isFetchingMore.current && phraseIndex >= phrases.length - 5) {
      const fetchMore = async () => {
        isFetchingMore.current = true;
        try {
          const more = await generatePracticePhrases(language, focus, 10);
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
    const newPhrases = await generatePracticePhrases(language, focus, 10);
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
    <div
      className="min-h-screen relative flex flex-row items-stretch overflow-hidden bg-[var(--bg-app)] transition-colors duration-500"
      style={{
        transform: `scale(${uiScale})`,
        transformOrigin: 'center center',
        width: '100%',
        height: '100%'
      }}
    >

      <HiddenInput inputRef={inputRef} onInput={handleInput} onCompositionStart={handleCompositionStart} onCompositionEnd={handleCompositionEnd} onKeyDown={handleKeyDown} onBlur={() => setIsComposingState(false)} />
      <input type="color" ref={colorInputRef} onChange={(e) => { setCustomColor(e.target.value); setPalette('custom'); }} value={customColor} className="fixed opacity-0 pointer-events-none -z-10" />

      {/* SIDEBARS TOGGLES */}
      <button onClick={() => setShowLeftSidebar(true)} className={`fixed left-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-l-0 rounded-r-2xl transition-all duration-500 group ${showLeftSidebar ? 'translate-x-[-100%] opacity-0' : 'opacity-100'}`}><i className="fa fa-chevron-right text-[10px] text-[var(--text-secondary)]"></i></button>
      <button onClick={() => setShowRightSidebar(true)} className={`fixed right-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-r-0 rounded-l-2xl transition-all duration-500 group ${showRightSidebar ? 'translate-x-[100%] opacity-0' : 'opacity-100'}`}><i className="fa fa-chevron-left text-[10px] text-[var(--text-secondary)]"></i></button>

      <div className={`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-md transition-all duration-500 ${(showLeftSidebar || showRightSidebar) ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => { setShowLeftSidebar(false); setShowRightSidebar(false); }} />

      {/* LEFT SIDEBAR: Music & Basic Config */}
      <aside className={`fixed top-0 left-0 h-full w-[400px] z-[2001] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border-r border-[var(--border-glass)] p-8 transition-all duration-500 transform ${showLeftSidebar ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto custom-scrollbar`}>
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4"><div className="w-14 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-black text-xl shadow-[0_0_15px_var(--accent-glow)]">Typ_</div><h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]">System_Core</h2></div>
          <button onClick={() => setShowLeftSidebar(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"><i className="fa fa-close"></i></button>
        </div>
        <div className="mb-8">
          <button onClick={setSimpleWarmup} className="w-full py-5 rounded-[1.5rem] bg-[var(--accent-primary)] text-[var(--bg-app)] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_var(--accent-glow)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
            <i className="fa fa-bolt group-hover:animate-bounce"></i>
            <span>Calentamiento "A A A"</span>
          </button>
        </div>
        <AccordionItem id="config" title="Configuración" icon="fa-sliders" isExpanded={expandedLeftCat === 'config'} onToggle={setExpandedLeftCat}>
          <div className="space-y-4">
            <button onClick={() => setLanguage('es')} className={getBtnClass(language === 'es')}><span>Español</span> <span>🇪🇸</span></button>
            <button onClick={() => setLanguage('en')} className={getBtnClass(language === 'en')}><span>English</span> <span>🇺🇸</span></button>
            <div className="h-[1px] bg-[var(--border-glass)] my-2" />
            <button onClick={() => setFocus('Básico')} className={getBtnClass(focus === 'Básico')}><span>Básico</span></button>
            <button onClick={() => setFocus('Programación')} className={getBtnClass(focus === 'Programación')}><span>Programación</span></button>
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

      {/* RIGHT SIDEBAR: Finger Guide */}
      <aside className={`fixed top-0 right-0 h-full w-[450px] z-[2001] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform ${showRightSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-12"><h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)]">Guía Técnica</h2><button onClick={() => setShowRightSidebar(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]"><i className="fa fa-close"></i></button></div>
        <FingerGuide targetKeyData={targetKeyData} />
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 pt-2 transition-all duration-500" style={{ opacity: (showLeftSidebar || showRightSidebar) ? 0.3 : 1 }}>
        <div className="w-full max-w-5xl flex flex-col items-center gap-4 relative">

          {!isLoading && !isFinished && (
            <div className="w-full relative group flex justify-center">

              {/* CENTRAL CINEMATIC BOX */}
              <div className="w-full bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative" style={{ overflow: 'visible' }}>

                <WordPanel
                  currentPhrase={currentPhrase}
                  normalizedTypedText={normalizedTypedText}
                  currentWordInfo={currentWordInfo}
                  isComposingState={isComposingState}
                  palette={palette}
                  customColor={customColor}
                  frequencyBands={frequencyBands}
                  birdRotation={birdRotation}
                  birdPos3D={birdPos3D}
                  birdSize={birdSize}
                  visualsConfig={visualsConfig}
                  combo={combo}
                  comboMultiplier={comboMultiplier}
                  isMusicLightingEnabled={isMusicLightingEnabled}
                  onDimensionalMenu={(e) => { setDimensionalMenuPos({ x: e.clientX, y: e.clientY }); setShowDimensionalSettings(true); }}
                  PALETTE_COLORS={PALETTE_COLORS}
                />

                <KeyboardSection
                  keyboardType={keyboardType}
                  activeKey={activeKey}
                  targetChar={targetChar}
                  showZones={showZones}
                  isMusicLightingEnabled={isMusicLightingEnabled}
                  frequencyBands={frequencyBands}
                  stats={stats}
                  isZenMode={isZenMode}
                  onRestart={restart}
                  onZenToggle={() => setIsZenMode(!isZenMode)}
                  audioReady={audioReady}
                  audioSystem={audioSystemRef.current}
                  currentMusicStyle={currentMusicStyle}
                  startTime={startTime}
                  isFinished={isFinished}
                  combo={combo}
                  comboMultiplier={comboMultiplier}
                  onDimensionalMenu={(e) => { setDimensionalMenuPos({ x: e.clientX, y: e.clientY }); setShowDimensionalSettings(true); }}
                  hexToRgba={hexToRgba}
                  customColor={customColor}
                />

              </div>
            </div>
          )}

          {/* FLOATING UNIFIED CONTROL CENTER */}
          <div className={`fixed w-[380px] bg-[var(--bg-glass-strong)] backdrop-blur-3xl border border-[var(--border-glass)] rounded-[3rem] p-10 shadow-4xl transition-all duration-500 z-[2000] ${showDimensionalSettings ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}`}
            style={{
              right: dimensionalMenuPos ? 'auto' : '4rem',
              left: dimensionalMenuPos ? Math.min(window.innerWidth - 420, Math.max(48, dimensionalMenuPos.x - 190)) : 'auto',
              top: dimensionalMenuPos ? Math.min(window.innerHeight - 650, Math.max(48, dimensionalMenuPos.y - 120)) : '7rem'
            }}>
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 shadow-[0_0_15px_var(--accent-glow)]">
                  <i className="fa fa-sliders text-[var(--accent-primary)] text-sm animate-pulse"></i>
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-[var(--text-primary)]">Control_Center</h3>
              </div>
              <button onClick={() => { setShowDimensionalSettings(false); setDimensionalMenuPos(null); }} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all group active:scale-90"><i className="fa fa-times text-[var(--text-secondary)] group-hover:text-red-500 transition-colors"></i></button>
            </div>

            <div className="space-y-4 h-[520px] overflow-y-auto pr-3 custom-scrollbar flex flex-col">
              <AccordionItem id="general" title="Preferencias" icon="fa-cog" isExpanded={expandedLeftCat === 'general'} onToggle={setExpandedLeftCat}>
                <div className="grid grid-cols-4 gap-3 pb-2">
                  <button onClick={() => setIsTypingSoundsEnabled(!isTypingSoundsEnabled)} className={`h-12 flex items-center justify-center rounded-2xl border transition-all ${isTypingSoundsEnabled ? 'bg-[var(--accent-primary)]/20 border-[var(--accent-primary)] text-[var(--accent-primary)]' : 'bg-white/5 border-white/10 text-[var(--text-secondary)]'}`} title="Sonido teclas"><i className="fa fa-keyboard-o"></i></button>
                  <button onClick={() => setIsMusicEnabled(!isMusicEnabled)} className={`h-12 flex items-center justify-center rounded-2xl border transition-all ${isMusicEnabled ? 'bg-[var(--accent-primary)]/20 border-[var(--accent-primary)] text-[var(--accent-primary)]' : 'bg-white/5 border-white/10 text-[var(--text-secondary)]'}`} title="Música"><i className="fa fa-volume-up"></i></button>
                  <button onClick={() => setIsMusicLightingEnabled(!isMusicLightingEnabled)} className={`h-12 flex items-center justify-center rounded-2xl border transition-all ${isMusicLightingEnabled ? 'bg-[var(--accent-primary)]/20 border-[var(--accent-primary)] text-[var(--accent-primary)]' : 'bg-white/5 border-white/10 text-[var(--text-secondary)]'}`} title="Luces Rítmicas"><i className="fa fa-lightbulb-o"></i></button>
                  <button onClick={toggleTheme} className="h-12 flex items-center justify-center rounded-2xl border bg-white/5 border-white/10 text-[var(--text-secondary)]" title="Tema"><i className={`fa ${theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o'}`}></i></button>
                  <button onClick={cyclePalette} className="h-12 flex items-center justify-center rounded-2xl border bg-white/5 border-white/10 text-[var(--accent-primary)]" title="Paleta"><i className="fa fa-paint-brush"></i></button>
                  <button onClick={() => colorInputRef.current?.click()} className="h-12 flex items-center justify-center rounded-2xl border bg-white/5 border-white/10 text-[var(--text-secondary)]" title="Color Personalizado"><i className="fa fa-eyedropper"></i></button>
                  <button onClick={() => setShowZones(!showZones)} className={`h-12 flex items-center justify-center rounded-2xl border transition-all ${showZones ? 'bg-[var(--accent-primary)]/20 border-[var(--accent-primary)] text-[var(--accent-primary)]' : 'bg-white/5 border-white/10 text-[var(--text-secondary)]'}`} title="Guía Dactilar"><i className="fa fa-hand-paper-o"></i></button>
                  <div className="flex gap-2">
                    {/* Removed Bird Toggle Button per user request */}
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem id="difficulty" title="Algoritmo" icon="fa-bolt" isExpanded={expandedLeftCat === 'difficulty'} onToggle={setExpandedLeftCat}>
                <div className="bg-white/5 rounded-[2rem] p-6 space-y-6 border border-white/5">
                  <div className="flex justify-between items-center"><div className="flex flex-col gap-1"><span className="text-[8px] text-[var(--text-secondary)] uppercase tracking-[0.2em] font-black">Multiplicador</span><span className="text-[6px] text-[var(--text-ghost)] uppercase">Afecta ritmo y combo</span></div><span className="text-[14px] font-mono font-black text-[var(--accent-primary)]">{comboMultiplier.toFixed(1)}x</span></div>
                  <input type="range" min="0.2" max="3.0" step="0.1" value={comboMultiplier} onChange={(e) => setComboMultiplier(parseFloat(e.target.value))} className="w-full h-1.5 accent-[var(--accent-primary)] bg-white/10 rounded-full appearance-none cursor-pointer" />
                </div>
              </AccordionItem>

              <AccordionItem id="visuals" title="Dimensiones" icon="fa-cube" isExpanded={expandedLeftCat === 'visuals'} onToggle={setExpandedLeftCat}>
                <div className="space-y-6 pb-2">
                  <div className="bg-white/5 rounded-[2rem] p-6 space-y-5 border border-white/5">
                    <div className="flex justify-between items-center"><span className="text-[8px] text-[var(--text-secondary)] uppercase tracking-[0.2em] font-black">Escala_Bird</span><span className="text-[14px] font-mono font-black text-[var(--accent-primary)]">{birdSize}px</span></div>
                    <input type="range" min="100" max="1200" step="10" value={birdSize} onChange={(e) => setBirdSize(parseInt(e.target.value))} className="w-full h-1.5 accent-[var(--accent-primary)] bg-white/10 rounded-full appearance-none cursor-pointer" />
                  </div>
                  <div className="bg-white/5 rounded-[2rem] p-6 space-y-6 border border-white/5">
                    <span className="text-[8px] text-[var(--text-ghost)] uppercase tracking-[0.3em] font-black block border-b border-white/5 pb-3">Perspectiva (XYZ)</span>
                    <div className="space-y-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-[6px] uppercase text-[var(--text-secondary)]"><span>Pitch</span><span>{birdRotation.x}°</span></div>
                        <input type="range" min="-180" max="180" value={birdRotation.x} onChange={(e) => setBirdRotation({ ...birdRotation, x: parseInt(e.target.value) })} className="w-full h-1 accent-[var(--accent-primary)] cursor-pointer" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-[6px] uppercase text-[var(--text-secondary)]"><span>Yaw</span><span>{birdRotation.y}°</span></div>
                        <input type="range" min="-180" max="180" value={birdRotation.y} onChange={(e) => setBirdRotation({ ...birdRotation, y: parseInt(e.target.value) })} className="w-full h-1 accent-[var(--accent-primary)] cursor-pointer" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-[6px] uppercase text-[var(--text-secondary)]"><span>Roll</span><span>{birdRotation.z}°</span></div>
                        <input type="range" min="-180" max="180" value={birdRotation.z} onChange={(e) => setBirdRotation({ ...birdRotation, z: parseInt(e.target.value) })} className="w-full h-1 accent-[var(--accent-primary)] cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </div>

            <button
              onClick={() => { setBirdRotation({ x: 0, y: 0, z: 20 }); setBirdPos3D({ x: 0, y: 0, z: 0 }); setBirdSize(180); setVisualsConfig(DEFAULT_VISUALS_CONFIG); }}
              className="mt-8 w-full py-5 rounded-[2rem] bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30 transition-all active:scale-95 group"
            >
              <i className="fa fa-refresh mr-3 group-hover:rotate-180 transition-transform duration-700"></i>
              RESET_SYSTEM_CORE
            </button>
          </div>

        </div>
      </main>

      <footer className="fixed bottom-6 right-8 text-[var(--text-secondary)] text-[8px] font-black uppercase tracking-[0.5em] font-mono opacity-20 select-none">ALPINE_ECODECOR_PRO // 2025</footer>
    </div>
  );
};

export default App;
