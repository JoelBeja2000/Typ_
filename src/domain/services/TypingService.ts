import { TypingStats } from '../models/TypingSession';

export interface ProcessResult {
  stats: TypingStats;
  combo: number;
  isCorrect: boolean;
  isPhraseComplete: boolean;
}

export class TypingService {
  processInput(
    typedText: string,
    targetPhrase: string,
    startTime: number | null,
    currentMistakes: number,
    currentCombo: number,
    isInfiniteMode: boolean
  ): ProcessResult {
    const lastCharIdx = typedText.length - 1;
    if (lastCharIdx < 0) {
      return {
        stats: { wpm: 0, accuracy: 100, mistakes: 0, totalChars: 0 },
        combo: 0,
        isCorrect: true,
        isPhraseComplete: false
      };
    }

    const typedChar = typedText[lastCharIdx];
    const targetChar = targetPhrase[lastCharIdx];
    
    let isCorrect = typedChar === targetChar;
    let newMistakes = currentMistakes;
    let newCombo = currentCombo;

    // If user typed space, verify it's at a valid word boundary
    if (typedChar === ' ' && !isCorrect) {
      // Check if previous char was a letter and next char is a letter (mid-word space)
      const prevChar = targetPhrase[lastCharIdx - 1];
      const nextChar = targetPhrase[lastCharIdx + 1];
      
      // If space is in the middle of a word (letter before AND letter after), it's an error
      if (prevChar && prevChar !== ' ' && nextChar && nextChar !== ' ') {
        isCorrect = false;
      }
    }

    if (!isCorrect && !isInfiniteMode) {
      newMistakes++;
      newCombo = 0;
    } else if (isCorrect) {
      // Standard behavior: space or end of phrase triggers combo increment
      // For infinite mode, we can be more lenient or keep same
      if (typedChar === ' ' || lastCharIdx === targetPhrase.length - 1) {
        newCombo++;
      }
    } else if (isInfiniteMode) {
      // In infinite mode, we might want to just count characters
      isCorrect = true; // Pretend it's correct for progression? 
      // Nonono, let's keep it strict but allow progression.
    }

    const stats = this.calculateStats(startTime || Date.now(), typedText, targetPhrase, newMistakes);
    
    return {
      stats,
      combo: newCombo,
      isCorrect,
      isPhraseComplete: typedText === targetPhrase
    };
  }

  calculateStats(
    startTime: number,
    typedText: string,
    targetPhrase: string,
    mistakes: number
  ): TypingStats {
    const timeElapsed = (Date.now() - startTime) / 60000;
    const totalChars = typedText.length;
    
    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
      if (typedText[i] === targetPhrase[i]) correctChars++;
    }

    const wpm = Math.round((correctChars / 5) / (timeElapsed || 0.001)) || 0;
    const accuracy = totalChars > 0 
      ? Math.round(((totalChars - mistakes) / totalChars) * 100)
      : 100;

    return { wpm, accuracy, mistakes: mistakes, totalChars: totalChars };
  }

  calculateScore(wpm: number, accuracy: number): number {
    return Math.floor(wpm * (accuracy / 100) * 10);
  }

  isCharCorrect(char: string, index: number, phrase: string): boolean {
    return char === phrase[index];
  }
}
