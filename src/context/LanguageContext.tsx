import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, ContentData } from '../types/content';
import { content } from '../data/content';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ContentData;
  greetingText: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('pedro_portfolio_locale');
    if (saved === 'en' || saved === 'pt-BR') {
      return saved as Locale;
    }
    return 'pt-BR';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('pedro_portfolio_locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content[locale].meta.title;
  }, [locale]);

  const getGreeting = (): string => {
    const hour = new Date().getHours();
    const greetings = content[locale].home.greetings;
    if (hour >= 5 && hour < 12) {
      return greetings.morning;
    } else if (hour >= 12 && hour < 18) {
      return greetings.afternoon;
    } else {
      return greetings.evening;
    }
  };

  const [greetingText, setGreetingText] = useState(getGreeting());

  useEffect(() => {
    setGreetingText(getGreeting());
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: content[locale], greetingText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
