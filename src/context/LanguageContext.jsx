import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('f5_language') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('f5_language', language);
    // Optional: Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (path, options = {}) => {
    const keys = path.split('.');
    let result = translations[language];
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        // Fallback to Spanish if translation is missing in current language
        let fallback = translations['es'];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            // Return path or empty array/object safely
            return options.returnObjects ? (options.defaultValue || []) : path;
          }
        }
        return (typeof fallback === 'string' || options.returnObjects) ? fallback : path;
      }
    }
    
    // Ensure we return a string unless returnObjects is true
    if (typeof result !== 'string' && !options.returnObjects) {
      return path;
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
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
