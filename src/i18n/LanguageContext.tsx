import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import es from './locales/es.json';
import en from './locales/en.json';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const translations: Record<Language, any> = { es, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Sync with localStorage or default to browser language
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('typ_app_language');
    if (saved === 'es' || saved === 'en') return saved;
    return navigator.language.startsWith('es') ? 'es' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('typ_app_language', lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path}`);
        return path;
      }
      current = current[key];
    }
    
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
