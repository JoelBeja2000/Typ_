export interface IPhraseProvider {
  getPhrases(language: string, count: number): Promise<string[]>;
  getZenPhrases(): string[];
}

export interface IStorageProvider {
  getScore(): number;
  saveScore(score: number): void;
}
