import { GoogleGenAI, Type } from "@google/genai";
import { Language } from "../types";
import { LOCAL_PHRASE_DB, PhraseCategory } from "../constants/phrases";

let aiInstance: GoogleGenAI | null = null;
const getAI = () => {
    if (aiInstance) return aiInstance;
    const API_KEY = (import.meta as any).env?.VITE_GEMINI_API_KEY || "";
    if (!API_KEY) return null;
    try {
        aiInstance = new GoogleGenAI(API_KEY);
        return aiInstance;
    } catch (err) {
        console.error("Failed to initialize GoogleGenAI:", err);
        return null;
    }
};

/**
 * Obtiene frases de práctica. 
 * Ahora prioriza la base de datos local para garantizar funcionamiento offline y sin latencia.
 */
export const generatePracticePhrases = async (language: Language, focus: string, count: number = 5): Promise<string[]> => {
  // Mapeo simple del foco a las categorías locales
  let category: PhraseCategory = 'basico';
  if (focus.toLowerCase().includes('raras') || focus.toLowerCase().includes('especial')) category = 'teclas_raras';
  if (focus.toLowerCase().includes('progra') || focus.toLowerCase().includes('código')) category = 'programacion';
  if (focus.toLowerCase().includes('acent') || focus.toLowerCase().includes('ácent')) category = 'acentuacion';

  // Intentamos obtener de la base de datos local
  const localPhrases = LOCAL_PHRASE_DB[language]?.[category];

  if (localPhrases && localPhrases.length > 0) {
    // Si queremos más frases de las que hay, las repetimos o simplemente barajamos y devolvemos
    // Para modo infinito, mejor barajar y devolver el número solicitado (aunque se repitan si pedimos muchas)
    const shuffled = [...localPhrases].sort(() => Math.random() - 0.5);
    const result: string[] = [];
    while (result.length < count) {
      result.push(...shuffled);
    }
    return result.slice(0, count);
  }

  // Fallback a IA si por alguna razón no hay frases locales para ese idioma/categoría
  const ai = getAI();
  if (!ai) return ["Error al cargar frases (API Key falta). Por favor, usa el modo offline."];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Genera ${count} frases cortas y útiles para practicar mecanografía en idioma ${language}. 
      El enfoque es: ${focus}. 
      Devuelve solo un array JSON de strings.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Error generating phrases:", error);
    return ["Error al cargar frases. Por favor, reinicia."];
  }
};

export const explainKeyUtility = async (keyLabel: string): Promise<string> => {
  const ai = getAI();
  if (!ai) return `La tecla ${keyLabel} es fundamental para una navegación rápida y eficiente sin levantar las manos del teclado.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Explica brevemente por qué es importante usar la tecla "${keyLabel}" en un teclado y cómo mejora la productividad de un programador o escritor. Máximo 2 frases.`,
    });
    return response.text.trim();
  } catch {
    return `La tecla ${keyLabel} es fundamental para una navegación rápida y eficiente sin levantar las manos del teclado.`;
  }
};
