import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useLocale } from "../context/LocaleContext";
import {
  languages,
  regions,
  type LanguageCode,
} from "../data/locales";
import { getCopy } from "../i18n/copy";

export default function LocaleSelector() {
  const {
    region,
    language,
    changeRegion,
    changeLanguage,
  } = useLocale();

  const copy = getCopy(language.code);

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "region" | "language"
  >("region");

  const wrapperRef = useRef<HTMLDivElement>(null);

  const regionNames = useMemo(() => {
    try {
      return new Intl.DisplayNames(
        [language.code],
        { type: "region" },
      );
    } catch {
      return null;
    }
  }, [language.code]);

  const languageNames = useMemo(() => {
    try {
      return new Intl.DisplayNames(
        [language.code],
        { type: "language" },
      );
    } catch {
      return null;
    }
  }, [language.code]);

  const regionName = (code: string) =>
    regionNames?.of(code) ?? code;

  const languageName = (
    code: LanguageCode,
    fallback: string,
  ) => languageNames?.of(code) ?? fallback;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectRegion = (code: string) => {
    changeRegion(code);
    setOpen(false);
  };

  const selectLanguage = (code: LanguageCode) => {
    changeLanguage(code);
    setOpen(false);
  };

  return (
    <div
      className="konara-locale"
      ref={wrapperRef}
      dir="ltr"
      data-konara-no-translate
    >
      <button
        type="button"
        className="konara-locale-trigger"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={`${copy.common.region} / ${copy.common.language}`}
      >
        <span className="konara-locale-flag">{region.flag}</span>
        <span className="konara-locale-region-code">{region.code}</span>
        <span className="konara-locale-divider">·</span>
        <span className="konara-locale-language-code">
          {language.code.split("-")[0].toUpperCase()}
        </span>
        <span
          className={`konara-locale-chevron ${
            open ? "konara-locale-chevron-open" : ""
          }`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      <div
        className={`konara-locale-panel ${
          open ? "konara-locale-panel-open" : ""
        }`}
      >
        <div className="konara-locale-panel-header">
          <div>
            <span className="konara-locale-eyebrow">KONARA</span>
            <h3>
              {copy.common.region} &amp; {copy.common.language}
            </h3>
          </div>

          <button
            type="button"
            className="konara-locale-close"
            onClick={() => setOpen(false)}
            aria-label={`${copy.common.region} / ${copy.common.language}`}
          >
            ×
          </button>
        </div>

        <div className="konara-locale-tabs">
          <button
            type="button"
            className={activeTab === "region" ? "active" : ""}
            onClick={() => setActiveTab("region")}
          >
            {copy.common.region}
          </button>

          <button
            type="button"
            className={activeTab === "language" ? "active" : ""}
            onClick={() => setActiveTab("language")}
          >
            {copy.common.language}
          </button>
        </div>

        <div className="konara-locale-current">
          <div>
            <span>{copy.common.region}</span>
            <strong>
              {region.flag}{" "}
              {regionName(region.code)}
            </strong>
          </div>

          <div>
            <span>{copy.common.language}</span>
            <strong>{language.nativeName}</strong>
          </div>
        </div>

        <div className="konara-locale-list">
          {activeTab === "region"
            ? regions.map((item) => (
                <button
                  type="button"
                  key={item.code}
                  className={`konara-locale-option ${
                    item.code === region.code
                      ? "konara-locale-option-active"
                      : ""
                  }`}
                  onClick={() => selectRegion(item.code)}
                >
                  <span className="konara-locale-option-flag">
                    {item.flag}
                  </span>

                  <span className="konara-locale-option-copy">
                    <strong>
                      {regionName(item.code)}
                    </strong>
                    <small>{item.code}</small>
                  </span>

                  {item.code === region.code && (
                    <span className="konara-locale-check">✓</span>
                  )}
                </button>
              ))
            : languages.map((item) => (
                <button
                  type="button"
                  key={item.code}
                  className={`konara-locale-option ${
                    item.code === language.code
                      ? "konara-locale-option-active"
                      : ""
                  }`}
                  onClick={() => selectLanguage(item.code)}
                >
                  <span className="konara-locale-option-copy">
                    <strong>{item.nativeName}</strong>
                    <small>
                      {languageName(item.code, item.nativeName)}
                    </small>
                  </span>

                  {item.code === language.code && (
                    <span className="konara-locale-check">✓</span>
                  )}
                </button>
              ))}
        </div>

        <div className="konara-locale-note">
          {copy.common.keepRegion} · {copy.common.otherLanguage}
        </div>
      </div>
    </div>
  );
}
