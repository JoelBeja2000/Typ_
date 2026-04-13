import { useTranslation, LanguageProvider } from './src/i18n/LanguageContext';

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

const LightOffStyles = () => (
  <style>{`
    @keyframes light-on-pop {
      0% { filter: brightness(0.2); }
      15% { filter: brightness(1.4) contrast(1.1); }
      30% { filter: brightness(0.6); }
      45% { filter: brightness(1.2); }
      60% { filter: brightness(0.9); }
      100% { filter: brightness(1); }
    }
    }
    .light-off-transition {
      transition: background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .light-on-anim {
      animation: light-on-pop 0.6s ease-out;
    }
  `}</style>
);

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

const lightenColor = (r: number, g: number, b: number, amount: number) => {
  return `rgb(${Math.min(255, r + amount)}, ${Math.min(255, g + amount)}, ${Math.min(255, b + amount)})`;
}

const themeManager = new BrowserThemeManager();

const AppContent: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const masterStartTime = useRef(performance.now());
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedId = localStorage.getItem('ovetyp-theme-id');
      if (savedId) {
        return THEMES.find(t => t.id === savedId) || THEMES.find(t => t.id === 'emerald') || THEMES[0];
      }
    }
    return THEMES.find(t => t.id === 'emerald') || THEMES[0];
  });

  // Persist theme choice
  useEffect(() => {
    localStorage.setItem('ovetyp-theme-id', currentTheme.id);
  }, [currentTheme]);
  const [isPureBlack, setIsPureBlack] = useState(false);
  const [forceScheme, setForceScheme] = useState<'dark' | 'light' | null>(null);
  // Removed local language state (handled by context)
  const [focus, setFocus] = useState('Básico');

  const [solvedWords, setSolvedWords] = useState<string[]>([]);
  const typedTextRef = useRef('');

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
    setCurrentLevelId,
    currentLevelId,
    restart
  } = useTypingEngine(phraseProvider, storageProvider, typingService, {
    onCorrectChar: (char, combo) => {
      if (isTypingSoundsEnabled && char === ' ') {
        audioSystemRef.current?.playSuccess(combo, false);
      }
      
      if (char === ' ') {
        // Add the completed word to the curtain
        const words = typedTextRef.current.trim().split(/\s+/);
        const lastWord = words[words.length - 1];
        if (lastWord) {
          setSolvedWords(prev => {
            const next = [...prev, lastWord];
            return next.slice(-100); // More room for individual words
          });
        }
      }
    },
    onErrorChar: () => {
      if (isTypingSoundsEnabled) audioSystemRef.current?.playError();
      setWordHasMistake(true);
    },
    onPhraseComplete: (phrase) => {
      setWordHasMistake(false);
      if (inputRef.current) inputRef.current.value = '';
      
      // Add the final word of the phrase if it wasn't added by space
      const words = phrase.trim().split(/\s+/);
      const lastWord = words[words.length - 1];
      if (lastWord) {
        setSolvedWords(prev => {
          if (prev[prev.length - 1] === lastWord) return prev;
          const next = [...prev, lastWord];
          return next.slice(-100);
        });
      }
    }
  });

  // Keep ref in sync
  useEffect(() => {
    typedTextRef.current = typedText;
  }, [typedText]);

  const activeLevel = useMemo(() => {
    if (!currentLevelId) return null;
    const practiceLevelsList = [
      { id: 'practice_indice', title: 'Dedos Índices', fingers: ['L2', 'R2'], keys: ['F', 'G', 'V', 'B', 'R', 'T', 'J', 'H', 'N', 'M', 'Y', 'U'] },
      { id: 'practice_anular', title: 'Anulares', fingers: ['L4', 'R4'], keys: ['S', 'W', 'X', 'L', 'O'] },
      { id: 'practice_corazon', title: 'Corazones', fingers: ['L3', 'R3'], keys: ['D', 'E', 'C', 'K', 'I'] },
      { id: 'practice_menique', title: 'Dedos Meñique', fingers: ['L5', 'R5'], keys: ['A', 'Q', 'Z', 'Ñ', 'P'] },
    ];
    const practiceLevel = practiceLevelsList.find(l => l.id === currentLevelId);
    if (practiceLevel) return practiceLevel;

    return GUIDE_PHASES.flatMap(p => p.levels).find(l => l.id === currentLevelId) || null;
  }, [currentLevelId]);

  const [activeKey, setActiveKey] = useState('');
  const [isLevelActive, setIsLevelActive] = useState(false);
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

  // AUTO-FIT UI SCALE LOGIC
  useEffect(() => {
    const handleResize = () => {
      // Standard target height where everything fits comfortably at 1.0 scale
      // WordPanel (~550px) + Gap (~50px) + KeyboardStats (~50px) + Keyboard (~250px) + Padding (~80px)
      const targetHeight = 980; 
      const availableHeight = window.innerHeight;
      
      if (availableHeight < targetHeight) {
        // Calculate required scale but don't go too small (limit at 0.7)
        const newScale = Math.max(0.7, availableHeight / targetHeight);
        setUiScale(newScale);
      } else {
        // If there's plenty of space, stay at 1.0 or user default
        setUiScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const setPalette = (id: string) => {
    const theme = THEMES.find(t => t.id === id);
    if (theme) setCurrentTheme(theme);
  };

  const [expandedLeftCat, setExpandedLeftCat] = useState<string | null>('config');
  const [showZones, setShowZones] = useState(false);
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [currentMusicStyle, setCurrentMusicStyle] = useState<MusicStyle>(TECHNO_STYLE);
  const [isTypingSoundsEnabled, setIsTypingSoundsEnabled] = useState(true);
  const [comboMultiplier, setComboMultiplier] = useState(1.0);
  const [isMusicLightingEnabled, setIsMusicLightingEnabled] = useState(true);
  const [frequencyBands, setFrequencyBands] = useState({ bass: 0, mid: 0, high: 0 });
  const oppositeColor = useMemo(() => {
    return `rgb(${255 - currentTheme.r}, ${255 - currentTheme.g}, ${255 - currentTheme.b})`;
  }, [currentTheme]);

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
  const [floorHeight, setFloorHeight] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ovetyp-floorHeight');
      if (saved) return parseFloat(saved);
    }
    return 0.62;
  });
  const [isDebugMode, setIsDebugMode] = useState(false);

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

  // Sync floorHeight to persistent browser memory
  useEffect(() => {
    localStorage.setItem('ovetyp-floorHeight', floorHeight.toString());
  }, [floorHeight]);

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
      if (audioSystemRef.current && isMusicEnabled && audioReady) {
        setFrequencyBands(audioSystemRef.current.getFrequencyBands());
      } else {
        setFrequencyBands({ bass: 0, mid: 0, high: 0 });
      }
      frameId = requestAnimationFrame(pollEnergy);
    };
    frameId = requestAnimationFrame(pollEnergy);
    return () => cancelAnimationFrame(frameId);
  }, [isMusicEnabled, audioReady]);

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
      const newPhrases = generateLocalPhrases(language, focus, 10);
      setPhrases(newPhrases.map(p => p.normalize('NFC').toLowerCase()));
      setTypedText(''); lastProcessedText.current = ''; setPhraseIndex(0); setCombo(0); setWordHasMistake(false);
      if (inputRef.current) inputRef.current.value = '';
      setIsLoading(false);
      if (focus === 'Básico') setCurrentLevelId(null); // Reset if going back to basic generator
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
    // Legacy fetching logic removed as infinite mode is deleted
  }, [phraseIndex, phrases.length, language, focus, isLoading, isGuideMode]);

  const handleInput = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    const val = e.currentTarget.value.normalize('NFC');
    processNewValue(val);
  }, [processNewValue]);

  const handleCompositionStart = useCallback(() => { isComposingRef.current = true; setIsComposingState(true); }, []);
  const handleCompositionEnd = useCallback((e: React.CompositionEvent<HTMLTextAreaElement>) => {
    isComposingRef.current = false; setIsComposingState(false);
    const val = e.currentTarget.value.normalize('NFC');
    setTypedText(val);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    setActiveKey(e.key);
    setTimeout(() => setActiveKey(''), 150);
    audioSystemRef.current?.resume();
  }, []);

  // Removed legacy WPM loop - logic moved to useTypingEngine

  // restart is provided by useTypingEngine

  const getBtnClass = (active: boolean) => `w-full p-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-between group ${active ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]' : 'bg-transparent border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]'}`;

  const handleSelectPhrases = useCallback((newPhrases: string[], levelId?: string) => {
    if (!newPhrases || newPhrases.length === 0) return;
    setIsGuideMode(true); // Enable Guide Mode
    if (levelId) setCurrentLevelId(levelId);

    setPhrases(newPhrases.map(p => p.normalize('NFC').toLowerCase()));
    setTypedText('');
    lastProcessedText.current = '';
    setPhraseIndex(0);
    setCombo(0);
    setSolvedWords([]); // Reset curtain
    setIsPureBlack(true); // Cinematic mode
    setWordHasMistake(false);
    if (inputRef.current) inputRef.current.value = '';
    setStartTime(null);
    setIsFinished(false);
    setIsLoading(false);
    setIsLevelActive(true);
    setTimeout(() => inputRef.current?.focus(), 10);
  }, [setCurrentLevelId, setPhrases, setTypedText, setPhraseIndex, setCombo, setStartTime, setIsFinished, setIsLoading]);

  const handleRestart = useCallback(() => {
    restart();
    setPhraseIndex(0);
    setWordHasMistake(false);
    setSolvedWords([]);
    if (inputRef.current) inputRef.current.value = '';
  }, [restart, setPhraseIndex]);

  const handleDebugFillCurtain = useCallback(() => {
    if (!phrases || phrases.length === 0) return;
    const allWords = phrases.join(' ').trim().split(/\s+/).filter(Boolean);
    setSolvedWords(allWords);
  }, [phrases]);

  const handleGoHome = useCallback(() => {
    setIsLevelActive(false);
    setIsPureBlack(false);
    setSolvedWords([]);
  }, []);

  const cycleShapes = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const shapes: GeometryType[] = [
      'icosahedron', 'sphere', 'torus', 'box', 'cone', 'octahedron', 'tetrahedron', 'dodecahedron', 'cylinder'
    ];
    setVisualsConfig(prev => {
      const current = prev.outerSphere.shape;
      const index = shapes.indexOf(current);
      const nextIndex = (index === -1 ? 0 : index + 1) % shapes.length;
      const nextShape = shapes[nextIndex];
      return {
        ...prev,
        outerSphere: { ...prev.outerSphere, shape: nextShape },
        innerSphere: { ...prev.innerSphere, shape: nextShape }
      };
    });
  }, []);


  return (
    <div
      className={`min-h-screen relative flex flex-col items-center overflow-y-auto overflow-x-hidden light-off-transition ${isPureBlack ? 'light-off-anim' : 'light-on-anim'}`}
      style={{
        width: '100%',
        backgroundColor: isPureBlack ? '#000000' : 'transparent',
        transition: 'background-color 0.6s ease-in-out'
      }}
    >
      <LightOffStyles />
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
        isInfiniteMode={false}
        onToggleZenMode={() => { }}
        score={score}
      />

      {/* SCALE WRAPPER: Ensures content fits the viewport height */}
      <div 
        className="w-full h-full flex flex-col items-center"
        style={{
          transform: `scale(${uiScale})`,
          transformOrigin: 'top center',
          flexShrink: 0
        }}
      >
        {/* MAIN VIEWPORT */}
        <main className="flex-grow flex flex-col items-center justify-start py-8 xl:py-12 px-4 relative transition-all duration-500" style={{ opacity: (showLeftSidebar || showRightSidebar) ? 0.3 : 1 }}>
        
        <div className="flex flex-row items-stretch justify-center gap-4 xl:gap-12 relative w-full px-4 overflow-visible">
          
          <div 
            className="flex w-[350px] xl:w-[450px] shrink-0 z-0 overflow-visible relative"
          >
            {isLevelActive && (
              <>
                <div className="absolute inset-0 w-full h-full z-[60] pointer-events-none opacity-80">
                  <MorphSphere
                      color={`rgb(${currentTheme.r}, ${currentTheme.g}, ${currentTheme.b})`}
                      bands={frequencyBands}
                      side="left"
                      lightingEnabled={isMusicLightingEnabled}
                      onClick={cycleShapes} 
                      shape={visualsConfig.outerSphere.shape}
                      floorHeight={floorHeight}
                      masterStartTime={startTime}
                      isBouncing={combo >= 5}
                      oppositeColor={oppositeColor}
                  />
                </div>
                <WordCurtain 
                  text={solvedWords.join('  ') + (typedText ? '  ' + typedText : '')} 
                  color={`rgb(${currentTheme.r}, ${currentTheme.g}, ${currentTheme.b})`} 
                  frequencyBands={frequencyBands}
                  combo={combo}
                  repulsionCenter={{ x: -1, y: -1 }}
                  repulsionEnergy={0.8}
                  repulsionShape={visualsConfig.outerSphere.shape}
                  repulsionRotation={(performance.now() - masterStartTime.current) * 0.002}
                  floorHeight={floorHeight}
                  masterStartTime={masterStartTime.current}
                />
              </>
            )}
          </div>

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
                  onCycleShapes={cycleShapes}
                  isLevelActive={isLevelActive}
                  activeLevel={activeLevel}
                  onSelectLevel={(level: any) => handleSelectPhrases(level.phrases, level.id)}
                  themeScheme={(forceScheme === 'light' || (currentTheme.scheme === 'light' && !forceScheme)) ? 'light' : currentTheme.scheme}
                  currentMusicStyle={currentMusicStyle}
                  onMusicStyleChange={setCurrentMusicStyle}
                  currentLevelProgress={currentPhrase.length > 0 ? Math.min(100, Math.round((normalizedTypedText.length / currentPhrase.length) * 100)) : 0}
                  currentLevelScore={score}
                  currentLevelAccuracy={stats.accuracy}
                />



                <KeyboardSection
                  keyboardType={keyboardType}
                  activeKey={activeKey}
                  targetChar={targetChar}
                  showZones={showZones}
                  isMusicLightingEnabled={isMusicLightingEnabled}
                  frequencyBands={frequencyBands}
                  stats={stats}
                  isZenMode={false}
                  score={score}
                  onRestart={handleRestart}
                  onZenToggle={() => { }}
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
                  isLevelActive={isLevelActive}
                  onGoHome={handleGoHome}
                  onDebugFillCurtain={handleDebugFillCurtain}
                  oppositeColor={oppositeColor}
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
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-1 opacity-60">{t('common.points')}</div>
                <div className="text-2xl font-black text-[var(--text-primary)] tracking-tighter tabular-nums">
                  {score.toLocaleString()}
                </div>
              </div>
              <div className="p-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                  <i className="fa fa-paint-brush"></i>
                  <span>{t('settings.personalization')}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setCurrentTheme(theme);
                        if (theme.scheme === 'light') setIsPureBlack(false);
                      }}
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
                    title={t('settings.custom_color')}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="px-4 py-3 space-y-3">
                <div
                  onClick={() => {
                    const nextVal = !isPureBlack;
                    setIsPureBlack(nextVal);
                    if (nextVal) setForceScheme('dark');
                  }}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{t('settings.pure_black')}</span>
                  <div className={`w-8 h-4 rounded-full relative transition-colors ${isPureBlack ? 'bg-[var(--accent-primary)]' : 'bg-white/10'}`}>
                    <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${isPureBlack ? 'left-4.5' : 'left-0.5'}`} />
                  </div>
                </div>

                <div
                  onClick={() => {
                    const effectiveIsLight = forceScheme === 'light' || (currentTheme.scheme === 'light' && forceScheme === null);
                    if (!effectiveIsLight) {
                      setForceScheme('light');
                      setIsPureBlack(false);
                    } else {
                      setForceScheme('dark');
                    }
                  }}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  {/* Effective light mode state logic */}
                  {(() => {
                    const activeLight = forceScheme === 'light' || (currentTheme.scheme === 'light' && !forceScheme);
                    return (
                      <>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{t('settings.day_mode')}</span>
                        <div className={`w-8 h-4 rounded-full relative transition-colors ${activeLight ? 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.4)]' : 'bg-white/10'}`}>
                          <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${activeLight ? 'left-4.5' : 'left-0.5'}`} />
                        </div>
                      </>
                    );
                  })()}
                </div>

                <div
                  onClick={() => setIsDebugMode(!isDebugMode)}
                  className="flex items-center justify-between cursor-pointer group pt-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{t('settings.debug_mode')}</span>
                  <div className={`w-8 h-4 rounded-full relative transition-colors ${isDebugMode ? 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.4)]' : 'bg-white/10'}`}>
                    <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${isDebugMode ? 'left-4.5' : 'left-0.5'}`} />
                  </div>
                </div>
              </div>

              <button onClick={() => { setIsTypingSoundsEnabled(!isTypingSoundsEnabled); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${isTypingSoundsEnabled ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'}`}>
                <i className="fa fa-keyboard-o w-4"></i>
                <span>{t('settings.sound')}</span>
              </button>
              <button onClick={() => { setIsMusicEnabled(!isMusicEnabled); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${isMusicEnabled ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'}`}>
                <i className="fa fa-music w-4"></i>
                <span>{t('settings.music')}</span>
              </button>
              <button onClick={cycleShapes} className="w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 hover:bg-[var(--accent-primary)]/20">
                <i className="fa fa-cube w-4"></i>
                <div className="flex flex-col">
                    <span className="text-[7px] opacity-60">{t('common.geometry')}</span>
                    <span className="leading-none">{visualsConfig.outerSphere.shape}</span>
                </div>
              </button>

              {isDebugMode && (
                <div className="bg-pink-500/5 border-t border-pink-500/20">
                  <div className="px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-pink-500 opacity-60">{t('settings.debug_tools')}</div>
                  
                  <div className="px-4 py-3 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider text-pink-500/80">
                      <span><i className="fa fa-level-up w-4"></i> {t('settings.floor_height')}</span>
                      <span>{Math.round(floorHeight * 100)}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="1.5" 
                      step="0.01" 
                      value={floorHeight}
                      onChange={(e) => setFloorHeight(parseFloat(e.target.value))}
                      className="w-full h-1 bg-pink-500/20 rounded-lg appearance-none cursor-pointer accent-pink-500"
                    />
                  </div>

                  <button 
                    onClick={handleDebugFillCurtain} 
                    className="w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all text-pink-400 hover:text-pink-300 hover:bg-pink-500/10"
                  >
                    <i className="fa fa-bug w-4"></i>
                    <span>{t('settings.fill_curtains')}</span>
                  </button>
                </div>
              )}
            </div>

          </div>
          </div>

          <div className="hidden xl:flex w-[450px] shrink-0 z-0 overflow-visible relative">
            {isLevelActive && (
              <>
                <div className="absolute inset-0 w-full h-full z-[60] pointer-events-none opacity-80">
                  <MorphSphere
                      color={`rgb(${currentTheme.r}, ${currentTheme.g}, ${currentTheme.b})`}
                      bands={frequencyBands}
                      side="right"
                      lightingEnabled={isMusicLightingEnabled}
                      onClick={cycleShapes} 
                      shape={visualsConfig.outerSphere.shape}
                      floorHeight={floorHeight}
                      masterStartTime={startTime}
                      isBouncing={combo >= 5}
                      oppositeColor={oppositeColor}
                  />
                </div>
                <WordCurtain 
                  className="relative z-[10]"
                  text={solvedWords.join('  ') + (typedText ? '  ' + typedText : '')} 
                  color={`rgb(${currentTheme.r}, ${currentTheme.g}, ${currentTheme.b})`} 
                  frequencyBands={frequencyBands}
                  combo={combo}
                  repulsionCenter={{ x: -1, y: -1 }}
                  repulsionEnergy={0.8}
                  repulsionShape={visualsConfig.outerSphere.shape}
                  repulsionRotation={(performance.now() - masterStartTime.current) * -0.002}
                  floorHeight={floorHeight}
                  masterStartTime={masterStartTime.current}
                />
              </>
            )}
          </div>

        </div>
        </main>
      </div>

      <footer className="fixed bottom-6 right-8 text-[var(--text-secondary)] text-[8px] font-black uppercase tracking-[0.5em] font-mono opacity-20 select-none">OVETYP_</footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;