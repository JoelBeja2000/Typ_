import { IPhraseProvider, IStorageProvider } from '../../domain/ports/TypingPorts';
import { ZEN_PHRASES } from '../../data/ZenPhrases';

export class BrowserPhraseProvider implements IPhraseProvider {
  async getPhrases(language: string, count: number): Promise<string[]> {
    // Current implementation uses Static JSON.
    return []; 
  }

  getZenPhrases(): string[] {
    return ZEN_PHRASES;
  }
}

export class BrowserStorageProvider implements IStorageProvider {
  private SCORE_KEY = 'typ_total_score';

  getScore(): number {
    return Number(localStorage.getItem(this.SCORE_KEY) || 0);
  }

  saveScore(score: number): void {
    localStorage.setItem(this.SCORE_KEY, score.toString());
  }
}
