import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import FingerGuide from './src/components/FingerGuide';
import { WordPanel } from './src/components/WordPanel';
import { KeyboardSection } from './src/components/KeyboardSection';
import LeftSidebar from './src/components/ui/LeftSidebar';
import RightSidebar from './src/components/ui/RightSidebar';
import BirdAnimation from './src/components/BirdAnimation';
import { WebAudioSystem } from './src/infrastructure/audio/WebAudioSystem';
import { MusicSequencer } from './src/domain/services/MusicSequencer';
import { TECHNO_STYLE, AMBIENT_STYLE, ACID_HOUSE_STYLE, MusicStyle } from './src/domain/models/MusicStyles';
import { KEY_TO_FINGER_MAP, SPACE_DATA } from './constants';
import { Language, TypingStats } from './types';
import { generatePracticePhrases } from './services/geminiService';
import { VisualsConfig, DEFAULT_VISUALS_CONFIG } from './src/types/visuals';
import { GUIDE_PHASES } from './src/data/GuideData';
import { BrowserThemeManager } from './src/infrastructure/ui/BrowserThemeManager';
import { ZEN_PHRASES } from './src/data/ZenPhrases';
import { THEMES } from './src/domain/models/Theme';
import { TypingService } from './src/domain/services/TypingService';
import { BrowserPhraseProvider, BrowserStorageProvider } from './src/infrastructure/adapters/BrowserAdapters';
import { useTypingEngine } from './src/hooks/useTypingEngine';

import './src/infrastructure/ui/styles/Keyboard.css';

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

const themeManager = new BrowserThemeManager();

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(THEMES[0]);
  const [isPureBlack, setIsPureBlack] = useState(false);
  const [forceScheme, setForceScheme] = useState<'dark' | 'light' | null>(null);

  const [language, setLanguage] = useState<Language>('es');
  const [focus, setFocus] = useState('Básico');
  
  // HEXAGONAL ARCHITECTURE: Dependencies
  const phraseProvider = useMemo(() => new BrowserPhraseProvider(), []);
  const storageProvider = useMemo(() => new BrowserStorageProvider(), []);
  const typingService = useMemo(() => new TypingService(), []);

  // Hook-based State Management
  const {
    phrases,
    setPhrases,
    phraseIndex,
    setPhraseIndex,
    currentPhrase,
    typedText,
    setTypedText,
    processNewValue,
    stats,
    setStats,
    combo,
    setCombo,
    score,
    setScore,
    isFinished,
    setIsFinished,
    startTime,
    setStartTime,
    isInfiniteMode,
    setIsInfiniteMode,
    restart
  } = useTypingEngine(phraseProvider, storageProvider, typingService, {
    onCorrectChar: (char, combo) => {
      if (isTypingSoundsEnabled) {
        if (char === ' ') {
          audioSystemRef.current?.playSuccess(combo, isZenMode);
        } else {
          // Play a subtle high-pitch click or the success sound based on mode
          if (isInfiniteMode) {
             audioSystemRef.current?.playSuccess(combo, isZenMode);
          }
        }
      }
    },
    onErrorChar: () => {
      if (isTypingSoundsEnabled) audioSystemRef.current?.playError();
      setWordHasMistake(true);
    },
    onPhraseComplete: () => {
      setWordHasMistake(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  });

  const [activeKey, setActiveKey] = useState('');
  const [wordHasMistake, setWordHasMistake] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [uiScale, setUiScale] = useState(1);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [keyboardType, setKeyboardType] = useState<'standard' | 'mac'>('mac');

  useEffect(() => {
    document.documentElement.style.setProperty('--ui-scale', uiScale.toString());
    themeManager.applyThemeToDocument(currentTheme, {
      isPureBlack,
      forceScheme: forceScheme || undefined
    });
  }, [currentTheme, uiScale, isPureBlack, forceScheme]);

  const toggleInfiniteMode = () => {
    if (!isInfiniteMode) {
      const randomIdx = Math.floor(Math.random() * ZEN_PHRASES.length);
      setPhrases([ZEN_PHRASES[randomIdx]]);
      setPhraseIndex(0);
      setIsFinished(false);
      setIsGuideMode(false);
      setIsInfiniteMode(true);
    } else {
      setIsInfiniteMode(false);
    }
  };

  const setPalette = (id: string) => {
    const theme = THEMES.find(t => t.id === id);
    if (theme) setCurrentTheme(theme);
  };

  const [expandedLeftCat, setExpandedLeftCat] = useState<string | null>('config');
  const [showZones, setShowZones] = useState(false);
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [currentMusicStyle, setCurrentMusicStyle] = useState<MusicStyle>(TECHNO_STYLE);
  const [isZenMode, setIsZenMode] = useState(false);
  const [isTypingSoundsEnabled, setIsTypingSoundsEnabled] = useState(true);
  const [comboMultiplier, setComboMultiplier] = useState(1.0);
  const [isMusicLightingEnabled, setIsMusicLightingEnabled] = useState(false);
  const [frequencyBands, setFrequencyBands] = useState({ bass: 0, mid: 0, high: 0 });

  const [isGuideMode, setIsGuideMode] = useState(false);
  const [isCircuitMode, setIsCircuitMode] = useState(false);
  const circuitIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const [isComposingState, setIsComposingState] = useState(false);

  // BIRD 3D CONTROLS
  const [birdRotation, setBirdRotation] = useState({ x: 0, y: 0, z: 20 });
  const [birdPos3D, setBirdPos3D] = useState({ x: 0, y: 0, z: 0 });
  const [birdSize, setBirdSize] = useState(180);
  const [visualsConfig, setVisualsConfig] = useState<VisualsConfig>({ ...DEFAULT_VISUALS_CONFIG, type: 'circle' });
  const [showDimensionalSettings, setShowDimensionalSettings] = useState(false);

  // GUIDE STATE
  const [highlightedKeys, setHighlightedKeys] = useState<string[]>([]);
  const [isWaveActive, setIsWaveActive] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const isComposingRef = useRef(false);
  const lastProcessedText = useRef('');

  // HEXAGONAL ARCHITECTURE: Infrastructure & Domain Injection
  const audioSystemRef = useRef<WebAudioSystem | null>(null);
  const sequencerRef = useRef<MusicSequencer | null>(null);
  const comboRef = useRef(combo);
  const [audioReady, setAudioReady] = useState(false);

  // CIRCUIT MODE LOGIC
  const [circuitTimer, setCircuitTimer] = useState(30);
  const [circuitDuration, setCircuitDuration] = useState(30);
  const [isRandomCircuit, setIsRandomCircuit] = useState(false);
  const [currentCircuitTitle, setCurrentCircuitTitle] = useState('');
  const [circuitLevelIndex, setCircuitLevelIndex] = useState(0);

  const allCircuitLevels = useMemo(() => {
    // Phases: 1 (Pairs), 2 (Left Hand), 3 (Right Hand)
    // Indexes in GUIDE_PHASES are 0, 1, 2 respectively based on data structure
    const p1 = GUIDE_PHASES.find(p => p.id === 'fase_1')?.levels || [];
    const p2 = GUIDE_PHASES.find(p => p.id === 'fase_2')?.levels || [];
    const p3 = GUIDE_PHASES.find(p => p.id === 'fase_3')?.levels || [];
    return [...p1, ...p2, ...p3];
  }, []);

  // Load Level Data when Index or Mode changes
  useEffect(() => {
    if (isCircuitMode) {
      setIsGuideMode(true);

      const levels = allCircuitLevels;
      if (levels.length === 0) return;

      const level = levels[circuitLevelIndex % levels.length];

      if (level) {
        setHighlightedKeys(level.keys);
        setPhrases(level.phrases);
        // Clean title: Remove "Pares: " and numbering like "1. "
        setCurrentCircuitTitle(level.title.replace(/^Pares: |^\d+\.\s+/g, ''));
        // Reset typing state
        setTypedText('');
        lastProcessedText.current = '';
        setPhraseIndex(0);

        // SMART COMBO DECAY: Lose one instrument layer instead of full reset
        setCombo(prevCombo => {
          // Find the highest active layer
          const activeLayers = currentMusicStyle.layers
            .filter(l => l.minCombo <= prevCombo)
            .sort((a, b) => b.minCombo - a.minCombo);

          if (activeLayers.length > 0) {
            // Drop to just below the current highest layer's threshold
            const penaltyTarget = activeLayers[0].minCombo - 1;
            return Math.max(0, penaltyTarget);
          }
          return 0;
        });

        setWordHasMistake(false);
        if (inputRef.current) inputRef.current.value = '';
        setTimeout(() => inputRef.current?.focus(), 10);
      }
    }
  }, [isCircuitMode, circuitLevelIndex, currentMusicStyle]);

  // Timer Logic
  useEffect(() => {
    if (!isCircuitMode) {
      if (circuitIntervalRef.current) {
        clearInterval(circuitIntervalRef.current);
        circuitIntervalRef.current = null;
      }
      setCircuitTimer(circuitDuration);
      return;
    }

    const levels = allCircuitLevels;
    setCircuitTimer(circuitDuration); // Reset timer on mode/duration change or manual cycle if we add dependency

    const interval = setInterval(() => {
      setCircuitTimer(prev => {
        if (prev <= 1) {
          // Time's up, cycle level
          setCircuitLevelIndex(currentIndex => {
            if (isRandomCircuit) {
              let nextIndex = Math.floor(Math.random() * levels.length);
              if (levels.length > 1 && nextIndex === currentIndex) {
                nextIndex = (nextIndex + 1) % levels.length;
              }
              return nextIndex;
            }
            return (currentIndex + 1) % levels.length;
          });
          return circuitDuration; // Reset timer
        }
        return prev - 1;
      });
    }, 1000);

    circuitIntervalRef.current = interval;
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCircuitMode, circuitDuration, isRandomCircuit, allCircuitLevels]);
  // Actually, if we use setCircuitTimer in the interval callback, it's fine.
  // BUT: if we want manual click to reset timer, we need a way.
  // The logic below `handleCircuitCycle` will handle manual reset.

  const handleManualCircuitCycle = useCallback(() => {
    if (!isCircuitMode) return;
    const levels = allCircuitLevels;
    setCircuitLevelIndex(prev => {
      if (isRandomCircuit) {
        return Math.floor(Math.random() * levels.length);
      }
      return (prev + 1) % levels.length;
    });
    setCircuitTimer(circuitDuration); // Manually reset timer
  }, [isCircuitMode, isRandomCircuit, circuitDuration, allCircuitLevels]);

  const normalizedTypedText = useMemo(() => typedText.normalize('NFC'), [typedText]);

  const currentWordInfo = useMemo(() => {
    const phraseParts = currentPhrase.split(' ');
    const typedParts = typedText.split(' ');
    const currentIdx = Math.min(typedParts.length - 1, phraseParts.length - 1);

    const currentWord = phraseParts[currentIdx] || '';
    const userTypedSlice = typedParts[typedParts.length - 1] || '';

    return { word: currentWord, userTypedSlice: userTypedSlice };
  }, [currentPhrase, typedText]);

  const targetChar = useMemo(() => {
    if (isFinished || isLoading) return '';
    if (typedText.length < currentPhrase.length) {
      return currentPhrase[typedText.length];
    }
    return '';
  }, [currentPhrase, typedText, isFinished, isLoading]);

  const targetKeyData = useMemo(() => {
    if (!targetChar) return null;
    return KEY_TO_FINGER_MAP[targetChar.toLowerCase()] || null;
  }, [targetChar]);

  useEffect(() => { comboRef.current = combo; }, [combo]);

  useEffect(() => {
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

  useEffect(() => {
    let frameId: number;
    const pollEnergy = () => {
      if (audioSystemRef.current) {
        setFrequencyBands(audioSystemRef.current.getFrequencyBands());
      } else {
        setFrequencyBands({ bass: 0, mid: 0, high: 0 });
      }
      frameId = requestAnimationFrame(pollEnergy);
    };
    frameId = requestAnimationFrame(pollEnergy);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--ui-scale', uiScale.toString());
    themeManager.applyThemeToDocument(currentTheme, {
      isPureBlack,
      forceScheme: forceScheme || undefined
    });
  }, [currentTheme, uiScale, isPureBlack, forceScheme]);

  const toggleTheme = () => {
     // Simple toggle or cycle through THEMES
     const currentIndex = THEMES.indexOf(currentTheme);
     const nextIndex = (currentIndex + 1) % THEMES.length;
     setCurrentTheme(THEMES[nextIndex]);
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
      setIsGuideMode(false); // Reset to generator mode when language/focus changes
      const newPhrases = await generatePracticePhrases(language, focus, 10);
      setPhrases(newPhrases.map(p => p.normalize('NFC')));
      setTypedText(''); lastProcessedText.current = ''; setPhraseIndex(0); setCombo(0); setWordHasMistake(false);
      if (inputRef.current) inputRef.current.value = '';
      setIsLoading(false);
    };
    init();
  }, [language, focus]);

  // Removed legacy typing effect - logic moved to useTypingEngine

  const isFetchingMore = useRef(false);

  // CIRCUIT MODE LOGIC
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCircuitMode) {
      // Start with first level of Phase 1 if not already there, or keep cycling
      // We need a ref to track current level index to cycle
      let currentLevelIndex = 0;

      const cycleLevel = () => {
        // Import phases dynamically or use if available. 
        // Assuming GUIDE_PHASES is available. If not, I need to add import. 
        // For now, I'll use a mocked cycle or ideally I have the data.
        // Actually, I should probably import GUIDE_PHASES at the top. 
        // Since I can't see the top imports easily right now to add it in the same `replace`, 
        // I will trust the user has the file and I will add the import in a separate step if missing.
        // Wait, I can't use GUIDE_PHASES without importing it.
        // I'll add the logic assuming GUIDE_PHASES is imported.

        // We will cycle through Phase 1 (Indices -> Medios -> Anulares -> Meniques)
        // This is a simplified "Circuit".
        // ID order: 0, 1, 2, 3

        // We need to access the data. 
        // I will disable this effect until I add the import.
      };

      // logic placeholder
    }
    return () => clearInterval(interval);
  }, [isCircuitMode]);

  // Real implementation needs GUIDE_PHASES.
  // I will skip adding the full effect here and do it properly with the import in the next step.
  // This step is just to update the Sidebar prop.

  useEffect(() => {
    // Disable fetching more in Guide Mode (drills are fixed set)
    if (isInfiniteMode && !isLoading && !isFetchingMore.current && phraseIndex >= phrases.length - 5 && !isGuideMode) {
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
  }, [isInfiniteMode, phraseIndex, phrases.length, language, focus, isLoading, isGuideMode]);

  const handleInput = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    let val = e.currentTarget.value.normalize('NFC');

    if (isZenMode) {
      const phrase = phrases[phraseIndex] || '';
      if (val.length <= phrase.length) {
        val = phrase.substring(0, val.length);
        e.currentTarget.value = val;
      } else {
        val = phrase;
        e.currentTarget.value = val;
      }
    }

    processNewValue(val);
  }, [isZenMode, phrases, phraseIndex, processNewValue]);

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
  }, [isInfiniteMode, phrases, phraseIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    setActiveKey(e.key);
    setTimeout(() => setActiveKey(''), 150);
    audioSystemRef.current?.resume();
  }, []);

  // Removed legacy WPM loop - logic moved to useTypingEngine

  // restart is provided by useTypingEngine

  const getBtnClass = (active: boolean) => `w-full p-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-between group ${active ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]' : 'bg-transparent border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]'}`;

  const handleSelectPhrases = useCallback((newPhrases: string[]) => {
    if (!newPhrases || newPhrases.length === 0) return;
    setIsGuideMode(true); // Enable Guide Mode
    setPhrases(newPhrases.map(p => p.normalize('NFC')));
    setTypedText('');
    lastProcessedText.current = '';
    setPhraseIndex(0);
    setCombo(0);
    setWordHasMistake(false);
    if (inputRef.current) inputRef.current.value = '';
    setStartTime(null);
    setIsFinished(false);
    setIsLoading(false);
    setTimeout(() => inputRef.current?.focus(), 10);
  }, []);

  return (
    <div
      className="min-h-screen relative flex flex-row items-stretch overflow-hidden transition-colors duration-500"
      style={{
        transform: `scale(${uiScale})`,
        transformOrigin: 'center center',
        width: '100%',
        height: '100%'
      }}
    >

      <HiddenInput inputRef={inputRef} onInput={handleInput} onCompositionStart={handleCompositionStart} onCompositionEnd={handleCompositionEnd} onKeyDown={handleKeyDown} onBlur={() => setIsComposingState(false)} />
      <input type="color" ref={colorInputRef} onChange={(e) => { 
        const hex = e.target.value;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        setCurrentTheme({ id: 'custom', name: 'Custom', r, g, b });
      }} className="fixed opacity-0 pointer-events-none -z-10" />

      {/* SIDEBARS TOGGLES */}
      <button onClick={() => setShowLeftSidebar(true)} className={`fixed left-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-l-0 rounded-r-2xl transition-all duration-500 group ${showLeftSidebar ? 'translate-x-[-100%] opacity-0' : 'opacity-100'}`}><i className="fa fa-chevron-right text-[10px] text-[var(--text-secondary)]"></i></button>
      <button onClick={() => setShowRightSidebar(true)} className={`fixed right-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-r-0 rounded-l-2xl transition-all duration-500 group ${showRightSidebar ? 'translate-x-[100%] opacity-0' : 'opacity-100'}`}><i className="fa fa-chevron-left text-[10px] text-[var(--text-secondary)]"></i></button>

      <div className={`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-md transition-all duration-500 ${(showLeftSidebar || showRightSidebar) ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => { setShowLeftSidebar(false); setShowRightSidebar(false); }} />

      {/* LEFT SIDEBAR */}
      <LeftSidebar
        isOpen={showLeftSidebar}
        onClose={() => setShowLeftSidebar(false)}
        language={language}
        onLanguageChange={setLanguage}
        currentMusicStyle={currentMusicStyle}
        onMusicStyleChange={setCurrentMusicStyle}
        TECHNO_STYLE={TECHNO_STYLE}
        AMBIENT_STYLE={AMBIENT_STYLE}
        ACID_HOUSE_STYLE={ACID_HOUSE_STYLE}
        getBtnClass={getBtnClass}
        themes={THEMES}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />

      {/* RIGHT SIDEBAR */}
      <RightSidebar
        isOpen={showRightSidebar}
        onClose={() => setShowRightSidebar(false)}
        targetKeyData={targetKeyData}
        onSelectLevel={setHighlightedKeys}
        onSelectPhrases={handleSelectPhrases}
        themes={THEMES}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        focus={focus}
        onFocusChange={setFocus}
        getBtnClass={getBtnClass}
        currentMusicStyle={currentMusicStyle}
        onMusicStyleChange={setCurrentMusicStyle}
        TECHNO_STYLE={TECHNO_STYLE}
        AMBIENT_STYLE={AMBIENT_STYLE}
        ACID_HOUSE_STYLE={ACID_HOUSE_STYLE}
        isInfiniteMode={isInfiniteMode}
        onToggleZenMode={toggleInfiniteMode}
        score={score}
      />

      {/* MAIN VIEWPORT */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 pt-2 relative transition-all duration-500" style={{ opacity: (showLeftSidebar || showRightSidebar) ? 0.3 : 1 }}>
        <div className="w-full max-w-5xl flex flex-col items-center gap-4 relative">

          {!isLoading && !isFinished && (
            <div className="w-full relative group flex justify-center">

              {/* CENTRAL CINEMATIC BOX */}
              <div className="w-full theme-glass backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative" style={{ overflow: 'visible' }}>

                <WordPanel
                  currentPhrase={currentPhrase}
                  normalizedTypedText={normalizedTypedText}
                  currentWordInfo={currentWordInfo}
                  isComposingState={isComposingState}
                  palette={currentTheme.id}
                  customColor={`rgb(${currentTheme.r}, ${currentTheme.g}, ${currentTheme.b})`}
                  frequencyBands={frequencyBands}
                  birdRotation={birdRotation}
                  birdPos3D={birdPos3D}
                  birdSize={birdSize}
                  visualsConfig={visualsConfig}
                  combo={combo}
                  comboMultiplier={comboMultiplier}
                  isMusicLightingEnabled={isMusicLightingEnabled}
                  PALETTE_COLORS={{}}
                  isCircuitMode={isCircuitMode}
                  circuitTimer={circuitTimer}
                  circuitTitle={currentCircuitTitle}
                  onCircuitCycle={handleManualCircuitCycle}
                  onDimensionalMenu={(e) => { setShowDimensionalSettings(!showDimensionalSettings); }}
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
                  score={score}
                  onRestart={restart}
                  onZenToggle={() => setIsZenMode(!isZenMode)}
                  audioReady={audioReady}
                  audioSystem={audioSystemRef.current}
                  currentMusicStyle={currentMusicStyle}
                  startTime={startTime}
                  isFinished={isFinished}
                  combo={combo}
                  comboMultiplier={comboMultiplier}
                  onDimensionalMenu={(e) => { setShowDimensionalSettings(!showDimensionalSettings); }}
                  hexToRgba={(hex, a) => `rgba(${currentTheme.r}, ${currentTheme.g}, ${currentTheme.b}, ${a})`}
                  customColor={`rgb(${currentTheme.r}, ${currentTheme.g}, ${currentTheme.b})`}
                  highlightedKeys={highlightedKeys}
                  isWaveActive={isWaveActive}
                />

              </div>
            </div>
          )}



          {/* PREFERENCES DROPDOWN MENU */}
          <div className={`fixed theme-glass backdrop-blur-3xl border border-[var(--border-glass)] rounded-lg shadow-2xl z-[2000] transition-all duration-300 origin-top-right ${showDimensionalSettings ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
            style={{
              right: '4.5rem',
              bottom: '6.5rem',
              width: '180px',
              transformOrigin: 'top right'
            }}>

            {/* DROPDOWN ITEMS */}
            <div className="flex flex-col divide-y divide-[var(--border-glass)] max-h-[400px] overflow-y-auto custom-scrollbar">
              <div className="p-4 bg-[var(--accent-primary)]/5 border-b border-[var(--border-glass)]">
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-1 opacity-60">Puntos Totales</div>
                <div className="text-2xl font-black text-[var(--text-primary)] tracking-tighter tabular-nums">
                  {score.toLocaleString()}
                </div>
              </div>
              <div className="p-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                  <i className="fa fa-paint-brush"></i>
                  <span>Personalización</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {THEMES.map((theme) => (
                     <button
                       key={theme.id}
                       onClick={() => setCurrentTheme(theme)}
                       className={`w-full aspect-square rounded-full border-2 transition-all duration-300 flex items-center justify-center ${currentTheme.id === theme.id ? 'border-[var(--accent-primary)] ring-2 ring-[var(--accent-glow)]' : 'border-white/10 hover:border-white/40'}`}
                       style={{ backgroundColor: `rgb(${theme.r}, ${theme.g}, ${theme.b})` }}
                       title={theme.name}
                     >
                       {currentTheme.id === theme.id && <i className="fa fa-check text-[10px] text-white mix-blend-difference"></i>}
                     </button>
                  ))}
                  <button 
                    onClick={() => colorInputRef.current?.click()}
                    className="w-full aspect-square rounded-full border-2 border-dashed border-white/20 flex items-center justify-center hover:border-white/40 transition-all font-bold text-[18px] text-[var(--text-secondary)]"
                    title="Color Personalizado"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="px-4 py-3 space-y-3">
                <div 
                  onClick={() => setIsPureBlack(!isPureBlack)}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">Modo Negro Puro</span>
                  <div className={`w-8 h-4 rounded-full relative transition-colors ${isPureBlack ? 'bg-[var(--accent-primary)]' : 'bg-white/10'}`}>
                    <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${isPureBlack ? 'left-4.5' : 'left-0.5'}`} />
                  </div>
                </div>

                <div 
                  onClick={() => {
                    const effectiveIsLight = forceScheme === 'light' || (currentTheme.scheme === 'light' && forceScheme === null);
                    setForceScheme(effectiveIsLight ? 'dark' : 'light');
                  }}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  {/* Effective light mode state logic */}
                  {(() => {
                    const activeLight = forceScheme === 'light' || (currentTheme.scheme === 'light' && !forceScheme);
                    return (
                      <>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">Modo Día</span>
                        <div className={`w-8 h-4 rounded-full relative transition-colors ${activeLight ? 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.4)]' : 'bg-white/10'}`}>
                          <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${activeLight ? 'left-4.5' : 'left-0.5'}`} />
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              <button onClick={() => { setIsTypingSoundsEnabled(!isTypingSoundsEnabled); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${isTypingSoundsEnabled ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'}`}>
                <i className="fa fa-keyboard-o w-4"></i>
                <span>Sonido</span>
              </button>
              <button onClick={() => { setIsMusicEnabled(!isMusicEnabled); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${isMusicEnabled ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'}`}>
                <i className="fa fa-music w-4"></i>
                <span>Música</span>
              </button>
              <button onClick={() => { setIsMusicLightingEnabled(!isMusicLightingEnabled); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${isMusicLightingEnabled ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'}`}>
                <i className="fa fa-lightbulb-o w-4"></i>
                <span>Luces</span>
              </button>
              <button onClick={() => { setShowZones(!showZones); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${showZones ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'}`}>
                <i className="fa fa-hand-paper-o w-4"></i>
                <span>Guía</span>
              </button>
            </div>

          </div>
        </div>
      </main>

      <footer className="fixed bottom-6 right-8 text-[var(--text-secondary)] text-[8px] font-black uppercase tracking-[0.5em] font-mono opacity-20 select-none">ALPINE_ECODECOR_PRO // 2025</footer>
    </div>
  );
};

export default App;