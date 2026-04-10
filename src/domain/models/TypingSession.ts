export type Finger = 'left-pinky' | 'left-ring' | 'left-middle' | 'left-index' | 'thumb' | 'right-index' | 'right-middle' | 'right-ring' | 'right-pinky';

export interface TypingStats {
  wpm: number;
  accuracy: number;
  mistakes: number;
  totalChars: number;
}

export interface TypingSession {
  phrase: string;
  typedText: string;
  stats: TypingStats;
  startTime: number | null;
  isFinished: boolean;
  combo: number;
}
