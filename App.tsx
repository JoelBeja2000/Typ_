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

// ... (existing imports)

// ... (existing imports)

// Inside App component:

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
  const [uiScale, setUiScale] = useState(1);

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
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-palette', palette);
    document.documentElement.style.setProperty('--ui-scale', uiScale.toString());

    if (palette === 'custom') {
      document.documentElement.style.setProperty('--accent-primary', customColor);
      document.documentElement.style.setProperty('--accent-glow', hexToRgba(customColor, 0.4));
    } else {
      document.documentElement.style.removeProperty('--accent-primary');
      document.documentElement.style.removeProperty('--accent-glow');
    }
  }, [theme, palette, customColor, uiScale]);

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
      setIsGuideMode(false); // Reset to generator mode when language/focus changes
      const newPhrases = await generatePracticePhrases(language, focus, 10);
      setPhrases(newPhrases.map(p => p.normalize('NFC')));
      setTypedText(''); lastProcessedText.current = ''; setPhraseIndex(0); setCombo(0); setWordHasMistake(false);
      if (inputRef.current) inputRef.current.value = '';
      setIsLoading(false);
    };
    init();
  }, [language, focus]);

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
          setStats(prev => ({
            ...prev, totalChars: prev.totalChars + 1,
            accuracy: Math.round(((prev.totalChars + 1 - prev.mistakes) / (prev.totalChars + 1)) * 100)
          }));

          if (typedChar === ' ' || idx === currentPhrase.length - 1) {
            if (isZenMode || !wordHasMistake) {
              const newCombo = combo + 1;
              setCombo(newCombo);
              comboRef.current = newCombo;
              if (isTypingSoundsEnabled) audioSystemRef.current?.playSuccess(newCombo, isZenMode);
            }
            setWordHasMistake(false);
          } else {
            if (isZenMode && isTypingSoundsEnabled) audioSystemRef.current?.playSuccess(combo, true);
          }
        }
      }
    }

    lastProcessedText.current = current;

    if (current === currentPhrase && currentPhrase.length > 0) {
      if (phraseIndex < phrases.length - 1) {
        const delay = isZenMode ? 0 : 50;
        setTimeout(() => {
          setPhraseIndex(prev => prev + 1);
          setTypedText('');
          lastProcessedText.current = '';
          if (inputRef.current) inputRef.current.value = '';
        }, delay);
      } else {
        if (isZenMode) {
          const delay = 50;
          setTimeout(() => {
            // Cycle back to 0 if in Guide Mode (Zen Loop), otherwise maybe fetch more (handled by other effect)
            if (isGuideMode) {
              setPhraseIndex(0);
            } else {
              setPhraseIndex(0); // Also reset here, but fetcher will append?
              // Actually Zen Mode usually appends. If we are at the end and no more phrases, loop?
              // The fetcher below handles appending.
              // If isGuideMode is true, we simply loop or stop.
              // Let's just reset index to 0 effectively looping the drill.
              setPhraseIndex(0);
            }
            setTypedText('');
            lastProcessedText.current = '';
            if (inputRef.current) inputRef.current.value = '';
          }, delay);
        } else {
          setIsFinished(true);
        }
      }
    }
  }, [normalizedTypedText, currentPhrase, phraseIndex, phrases.length, startTime, wordHasMistake, combo, isZenMode, isGuideMode]);

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
    if (isZenMode && !isLoading && !isFetchingMore.current && phraseIndex >= phrases.length - 5 && !isGuideMode) {
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
  }, [isZenMode, phraseIndex, phrases.length, language, focus, isLoading, isGuideMode]);

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
    setStartTime(null); setIsFinished(false);

    // If in Guide Mode, just reset state, don't fetch new phrases
    if (isGuideMode) {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 10);
      return;
    }

    setIsLoading(true);
    const newPhrases = await generatePracticePhrases(language, focus, 10);
    setPhrases(newPhrases.map(p => p.normalize('NFC')));
    setIsLoading(false);
    setTimeout(() => inputRef.current?.focus(), 10);
  };

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

      {/* LEFT SIDEBAR */}
      <LeftSidebar
        isOpen={showLeftSidebar}
        onClose={() => setShowLeftSidebar(false)}
        language={language}
        focus={focus}
        expandedCategory={expandedLeftCat}
        onExpandCategory={setExpandedLeftCat}
        onLanguageChange={setLanguage}
        onFocusChange={setFocus}
        currentMusicStyle={currentMusicStyle}
        onMusicStyleChange={setCurrentMusicStyle}
        TECHNO_STYLE={TECHNO_STYLE}
        AMBIENT_STYLE={AMBIENT_STYLE}
        ACID_HOUSE_STYLE={ACID_HOUSE_STYLE}
        getBtnClass={getBtnClass}
        uiScale={uiScale}
        onUiScaleChange={setUiScale}
      />

      {/* RIGHT SIDEBAR */}
      <RightSidebar
        isOpen={showRightSidebar}
        onClose={() => setShowRightSidebar(false)}
        targetKeyData={targetKeyData}
        onSelectLevel={setHighlightedKeys}
        onSelectPhrases={handleSelectPhrases}
        onWaveMode={setIsWaveActive}
        isCircuitMode={isCircuitMode}
        onToggleCircuitMode={() => setIsCircuitMode(!isCircuitMode)}
        circuitTimer={circuitTimer}
        circuitDuration={circuitDuration}
        onDurationChange={setCircuitDuration}
        isRandomCircuit={isRandomCircuit}
        onToggleRandomCircuit={() => setIsRandomCircuit(!isRandomCircuit)}
        onCircuitCycle={handleManualCircuitCycle}
      />

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
                  onDimensionalMenu={(e) => { setShowDimensionalSettings(!showDimensionalSettings); }}
                  PALETTE_COLORS={PALETTE_COLORS}
                  isCircuitMode={isCircuitMode}
                  circuitTimer={circuitTimer}
                  circuitTitle={currentCircuitTitle}
                  onCircuitCycle={handleManualCircuitCycle}
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
                  onDimensionalMenu={(e) => { setShowDimensionalSettings(!showDimensionalSettings); }}
                  hexToRgba={hexToRgba}
                  customColor={customColor}
                  highlightedKeys={highlightedKeys}
                  isWaveActive={isWaveActive}
                />

              </div>
            </div>
          )}

          {/* PREFERENCES DROPDOWN MENU */}
          <div className={`fixed bg-[var(--bg-glass-strong)] backdrop-blur-3xl border border-[var(--border-glass)] rounded-lg shadow-2xl z-[2000] transition-all duration-300 origin-top-right ${showDimensionalSettings ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
            style={{
              right: '4.5rem',
              bottom: '6.5rem',
              width: '180px',
              transformOrigin: 'top right'
            }}>

            {/* DROPDOWN ITEMS */}
            <div className="flex flex-col divide-y divide-[var(--border-glass)]">
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
              <button onClick={() => { toggleTheme(); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5`}>
                <i className={`fa ${theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o'} w-4`}></i>
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
              <button onClick={() => { cyclePalette(); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5`}>
                <i className="fa fa-paint-brush w-4"></i>
                <span>Paleta</span>
              </button>
              <button onClick={() => { colorInputRef.current?.click(); }} className={`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5`}>
                <i className="fa fa-eyedropper w-4"></i>
                <span>Color</span>
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