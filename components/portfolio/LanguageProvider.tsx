"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, PortfolioDictionary, portfolioData } from "@/lib/portfolio-data";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  t: PortfolioDictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "leoferson_portfolio_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {
      // Fallback silently to "es" if localStorage is restricted
    }
  }, []);

  const setLocale = (next: Locale) => {
    if (next !== "es" && next !== "en") return;
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    } catch {
      // Ignore storage write errors in private browsing
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t: portfolioData[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
