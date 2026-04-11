import { Language } from '../../types';
import { LOCAL_PHRASE_DB, PhraseCategory } from '../../constants/phrases';

export const generateLocalPhrases = (language: Language, focus: string, count: number = 5): string[] => {
  let category: PhraseCategory = 'basico';
  const f = focus.toLowerCase();
  if (f.includes('raras') || f.includes('especial')) category = 'teclas_raras';
  if (f.includes('progra') || f.includes('código')) category = 'programacion';
  if (f.includes('acent') || f.includes('ácent')) category = 'acentuacion';

  const localPhrases = LOCAL_PHRASE_DB[language]?.[category] || LOCAL_PHRASE_DB['es']['basico'];

  const shuffled = [...localPhrases].sort(() => Math.random() - 0.5);
  const result: string[] = [];
  while (result.length < count) {
    result.push(...shuffled);
  }
  return result.slice(0, count);
};
