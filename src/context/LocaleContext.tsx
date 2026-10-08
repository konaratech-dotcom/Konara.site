import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  DEFAULT_LANGUAGE_CODE,
  DEFAULT_REGION_CODE,
  getLanguage,
  getRegion,
  languages,
  regions,
  type Language,
  type LanguageCode,
  type Region,
} from "../data/locales";

type LocaleContextValue = {
  region: Region;
  language: Language;
  changeRegion: (regionCode: string) => void;
  changeLanguage: (languageCode: LanguageCode) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(
  undefined,
);

const REGION_STORAGE_KEY = "konara-region";
const LANGUAGE_STORAGE_KEY = "konara-language";

function getInitialRegion(): Region {
  const savedRegion = localStorage.getItem(
    REGION_STORAGE_KEY,
  );

  if (savedRegion) {
    const matchingRegion = getRegion(savedRegion);

    if (matchingRegion) {
      return matchingRegion;
    }
  }

  return (
    getRegion(DEFAULT_REGION_CODE) ??
    regions[0]
  );
}

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem(
    LANGUAGE_STORAGE_KEY,
  ) as LanguageCode | null;

  if (
    savedLanguage &&
    languages.some(
      (item) => item.code === savedLanguage,
    )
  ) {
    return (
      getLanguage(savedLanguage) ??
      getLanguage(DEFAULT_LANGUAGE_CODE) ??
      languages[0]
    );
  }

  return (
    getLanguage(DEFAULT_LANGUAGE_CODE) ??
    languages[0]
  );
}

export function LocaleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [region, setRegion] = useState<Region>(
    getInitialRegion,
  );

  const [language, setLanguage] = useState<Language>(
    getInitialLanguage,
  );

  const changeRegion = (regionCode: string) => {
    const nextRegion = getRegion(regionCode);

    if (!nextRegion) return;

    setRegion(nextRegion);

    const defaultLanguage = getLanguage(
      nextRegion.defaultLanguage,
    );

    if (defaultLanguage) {
      setLanguage(defaultLanguage);
    }
  };

  const changeLanguage = (
    languageCode: LanguageCode,
  ) => {
    const nextLanguage = getLanguage(
      languageCode,
    );

    if (!nextLanguage) return;

    setLanguage(nextLanguage);
  };

  useEffect(() => {
    localStorage.setItem(
      REGION_STORAGE_KEY,
      region.code,
    );
  }, [region]);

  useEffect(() => {
    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      language.code,
    );

    document.documentElement.lang =
      language.code;

    /*
      KONARA remains left-to-right until the
      translated Arabic and Urdu interfaces
      are actually implemented.
    */
    document.documentElement.dir = language.direction;
  }, [language]);

  const value = useMemo(
    () => ({
      region,
      language,
      changeRegion,
      changeLanguage,
    }),
    [region, language],
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error(
      "useLocale must be used inside LocaleProvider",
    );
  }

  return context;
}