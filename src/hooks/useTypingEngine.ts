import { useState, useCallback, useRef, useEffect } from 'react';
import { TypingService } from '../domain/services/TypingService';
import { TypingStats } from '../domain/models/TypingSession';
import { IPhraseProvider, IStorageProvider } from '../domain/ports/TypingPorts';

interface TypingEngineCallbacks {
  onCorrectChar?: (char: string, combo: number) => void;
  onErrorChar?: (char: string) => void;
  onPhraseComplete?: (phrase: string) => void;
}

export const useTypingEngine = (
  phraseProvider: IPhraseProvider,
  storageProvider: IStorageProvider,
  typingService: TypingService,
  callbacks?: TypingEngineCallbacks
) => {
  const [phrases, setPhrases] = useState<string[]>([]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [stats, setStats] = useState<TypingStats>({ wpm: 0, accuracy: 100, mistakes: 0, totalChars: 0 });
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(() => storageProvider.getScore());
  const [isInfiniteMode, setIsInfiniteMode] = useState(false);
  const [currentLevelId, setCurrentLevelId] = useState<string | null>(null);

  const saveLevelProgress = useCallback((id: string, progress: number) => {
    const existing = Number(localStorage.getItem(`typ_progress_${id}`) || 0);
    if (progress > existing) {
      localStorage.setItem(`typ_progress_${id}`, Math.round(progress).toString());
    }
  }, []);

  // Use refs for frequency data to avoid re-renders if possible, 
  // but here we need state for UI reactivity.

  const currentPhrase = phrases[phraseIndex] || '';

  const restart = useCallback(() => {
    setTypedText('');
    setStartTime(null);
    setIsFinished(false);
    setCombo(0);
    setStats({ wpm: 0, accuracy: 100, mistakes: 0, totalChars: 0 });
  }, []);

  const processNewValue = useCallback((newVal: string) => {
    if (isFinished) return;
    
    let currentStart = startTime;
    if (!currentStart && newVal.length > 0) {
      currentStart = Date.now();
      setStartTime(currentStart);
    }

    const prevLen = typedText.length;
    const isDeletion = newVal.length < prevLen;

    if (isDeletion) {
      setTypedText(newVal);
      return;
    }

    // Process only additions
    const result = typingService.processInput(
      newVal,
      currentPhrase,
      currentStart,
      stats.mistakes,
      combo,
      isInfiniteMode
    );

    setTypedText(newVal);
    setStats(result.stats);
    setCombo(result.combo);

    if (result.isCorrect) {
      const addedChar = newVal[newVal.length - 1];
      callbacks?.onCorrectChar?.(addedChar, result.combo);
    } else {
      callbacks?.onErrorChar?.(newVal[newVal.length - 1]);
    }

    if (result.isPhraseComplete) {
      callbacks?.onPhraseComplete?.(currentPhrase);
      
      if (isInfiniteMode) {
        const earned = typingService.calculateScore(result.stats.wpm, result.stats.accuracy);
        const newScore = score + earned;
        setScore(newScore);
        storageProvider.saveScore(newScore);
        
        const zen = phraseProvider.getZenPhrases();
        const next = zen[Math.floor(Math.random() * zen.length)];
        
        // Use a small delay for visual feedback before clearing
        setTimeout(() => {
          setPhrases([next]);
          setPhraseIndex(0);
          setTypedText('');
        }, 50);
      } else if (phraseIndex < phrases.length - 1) {
        if (currentLevelId) {
          const progress = ((phraseIndex + 1) / phrases.length) * 100;
          saveLevelProgress(currentLevelId, progress);
        }
        setTimeout(() => {
          setPhraseIndex(prev => prev + 1);
          setTypedText('');
        }, 50);
      } else {
        // Infinite Loop for practice levels/modes
        if (currentLevelId) {
          saveLevelProgress(currentLevelId, 100);
        }
        // Instead of setIsFinished(true), we wrap around to the first phrase
        setTimeout(() => {
          setPhraseIndex(0);
          setTypedText('');
        }, 50);
      }
    }
  }, [isFinished, startTime, typedText.length, currentPhrase, stats.mistakes, combo, isInfiniteMode, typingService, callbacks, phraseIndex, phrases.length, score, storageProvider, phraseProvider]);

  // Periodic WPM update (even if not typing)
  useEffect(() => {
    if (startTime && !isFinished && typedText.length > 0) {
      const interval = setInterval(() => {
        const newStats = typingService.calculateStats(startTime, typedText, currentPhrase, stats.mistakes);
        setStats(prev => ({ ...prev, wpm: newStats.wpm, accuracy: newStats.accuracy }));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime, isFinished, typedText, currentPhrase, stats.mistakes, typingService]);

  return {
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
    currentLevelId,
    setCurrentLevelId,
    restart
  };
};
