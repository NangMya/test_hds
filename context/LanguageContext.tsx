"use client"
import { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import km from "@/locales/km.json";

type Language = "en" | "km";

// type TranslationKeys = {
//   greeting: string;
// };
type TranslationKeys = any;


const translations: Record<Language, TranslationKeys> = {
  en,
  km, 
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialLang = (): Language => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang");
      if (stored === "km" || stored === "en") return stored;
    }
    return "en"; 
  };

  const [language, setLanguageState] = useState<Language>(getInitialLang);
  const [t, setT] = useState<TranslationKeys>(translations[getInitialLang()]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language;
    if (stored === "km" || stored === "en") {
      setLanguageState(stored);
      setT(translations[stored]);
    }
    setMounted(true); 
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setT(translations[lang]);
    localStorage.setItem("lang", lang);
  };

  if (!mounted) return null; 

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
