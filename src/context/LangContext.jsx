import { createContext, useContext, useState } from 'react';
import ar from '../locales/ar';
import en from '../locales/en';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ar');
  const t = lang === 'ar' ? ar : en;

  const toggle = () => setLang(l => l === 'ar' ? 'en' : 'ar');

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
