
export type Finger = 'left-pinky' | 'left-ring' | 'left-middle' | 'left-index' | 'thumb' | 'right-index' | 'right-middle' | 'right-ring' | 'right-pinky';

export interface KeyData {
  key: string;
  label: string;
  finger: Finger;
  why: string;
  row: number;
}

export type Language = 'es' | 'en' | 'fr';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  focusKeys: string[];
  type: 'home-row' | 'top-row' | 'bottom-row' | 'rare-keys' | 'sentences';
}

export interface TypingStats {
  wpm: number;
  accuracy: number;
  mistakes: number;
  totalChars: number;
}
