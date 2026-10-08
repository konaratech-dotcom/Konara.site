export type LanguageCode =
  | "en"
  | "de"
  | "fr"
  | "nl"
  | "es"
  | "pt"
  | "it"
  | "pl"
  | "cs"
  | "sk"
  | "hu"
  | "ro"
  | "bg"
  | "el"
  | "tr"
  | "sv"
  | "no"
  | "da"
  | "fi"
  | "uk"
  | "ar"
  | "hi"
  | "ur"
  | "bn"
  | "ms"
  | "id"
  | "tl"
  | "ja"
  | "ko"
  | "zh-CN"
  | "zh-TW"
  | "th"
  | "vi";

export type Language = {
  code: LanguageCode;
  name: string;
  nativeName: string;
  direction: "ltr" | "rtl";
};

export type Region = {
  code: string;
  name: string;
  flag: string;
  defaultLanguage: LanguageCode;
};

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", direction: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", direction: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", direction: "ltr" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", direction: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", direction: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", direction: "ltr" },
  { code: "it", name: "Italian", nativeName: "Italiano", direction: "ltr" },
  { code: "pl", name: "Polish", nativeName: "Polski", direction: "ltr" },
  { code: "cs", name: "Czech", nativeName: "Čeština", direction: "ltr" },
  { code: "sk", name: "Slovak", nativeName: "Slovenčina", direction: "ltr" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", direction: "ltr" },
  { code: "ro", name: "Romanian", nativeName: "Română", direction: "ltr" },
  { code: "bg", name: "Bulgarian", nativeName: "Български", direction: "ltr" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", direction: "ltr" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", direction: "ltr" },
  { code: "sv", name: "Swedish", nativeName: "Svenska", direction: "ltr" },
  { code: "no", name: "Norwegian", nativeName: "Norsk", direction: "ltr" },
  { code: "da", name: "Danish", nativeName: "Dansk", direction: "ltr" },
  { code: "fi", name: "Finnish", nativeName: "Suomi", direction: "ltr" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", direction: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", direction: "rtl" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", direction: "ltr" },
  { code: "ur", name: "Urdu", nativeName: "اردو", direction: "rtl" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", direction: "ltr" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", direction: "ltr" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", direction: "ltr" },
  { code: "tl", name: "Filipino", nativeName: "Filipino", direction: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", direction: "ltr" },
  { code: "ko", name: "Korean", nativeName: "한국어", direction: "ltr" },
  { code: "zh-CN", name: "Chinese Simplified", nativeName: "简体中文", direction: "ltr" },
  { code: "zh-TW", name: "Chinese Traditional", nativeName: "繁體中文", direction: "ltr" },
  { code: "th", name: "Thai", nativeName: "ไทย", direction: "ltr" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", direction: "ltr" },
];

export const regions: Region[] = [
  { code: "ZA", name: "South Africa", flag: "🇿🇦", defaultLanguage: "en" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", defaultLanguage: "en" },
  { code: "US", name: "United States", flag: "🇺🇸", defaultLanguage: "en" },
  { code: "CA", name: "Canada", flag: "🇨🇦", defaultLanguage: "en" },
  { code: "AU", name: "Australia", flag: "🇦🇺", defaultLanguage: "en" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", defaultLanguage: "en" },

  { code: "DE", name: "Germany", flag: "🇩🇪", defaultLanguage: "de" },
  { code: "AT", name: "Austria", flag: "🇦🇹", defaultLanguage: "de" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", defaultLanguage: "de" },

  { code: "FR", name: "France", flag: "🇫🇷", defaultLanguage: "fr" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", defaultLanguage: "nl" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", defaultLanguage: "nl" },

  { code: "ES", name: "Spain", flag: "🇪🇸", defaultLanguage: "es" },
  { code: "PT", name: "Portugal", flag: "🇵🇹", defaultLanguage: "pt" },
  { code: "IT", name: "Italy", flag: "🇮🇹", defaultLanguage: "it" },

  { code: "PL", name: "Poland", flag: "🇵🇱", defaultLanguage: "pl" },
  { code: "CZ", name: "Czechia", flag: "🇨🇿", defaultLanguage: "cs" },
  { code: "SK", name: "Slovakia", flag: "🇸🇰", defaultLanguage: "sk" },
  { code: "HU", name: "Hungary", flag: "🇭🇺", defaultLanguage: "hu" },
  { code: "RO", name: "Romania", flag: "🇷🇴", defaultLanguage: "ro" },
  { code: "BG", name: "Bulgaria", flag: "🇧🇬", defaultLanguage: "bg" },
  { code: "GR", name: "Greece", flag: "🇬🇷", defaultLanguage: "el" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", defaultLanguage: "tr" },

  { code: "SE", name: "Sweden", flag: "🇸🇪", defaultLanguage: "sv" },
  { code: "NO", name: "Norway", flag: "🇳🇴", defaultLanguage: "no" },
  { code: "DK", name: "Denmark", flag: "🇩🇰", defaultLanguage: "da" },
  { code: "FI", name: "Finland", flag: "🇫🇮", defaultLanguage: "fi" },

  { code: "UA", name: "Ukraine", flag: "🇺🇦", defaultLanguage: "uk" },

  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", defaultLanguage: "ar" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", defaultLanguage: "ar" },
  { code: "QA", name: "Qatar", flag: "🇶🇦", defaultLanguage: "ar" },

  { code: "IN", name: "India", flag: "🇮🇳", defaultLanguage: "hi" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", defaultLanguage: "ur" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", defaultLanguage: "bn" },

  { code: "MY", name: "Malaysia", flag: "🇲🇾", defaultLanguage: "ms" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", defaultLanguage: "en" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", defaultLanguage: "id" },
  { code: "PH", name: "Philippines", flag: "🇵🇭", defaultLanguage: "tl" },

  { code: "JP", name: "Japan", flag: "🇯🇵", defaultLanguage: "ja" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", defaultLanguage: "ko" },

  { code: "CN", name: "China", flag: "🇨🇳", defaultLanguage: "zh-CN" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰", defaultLanguage: "zh-TW" },
  { code: "TW", name: "Taiwan", flag: "🇹🇼", defaultLanguage: "zh-TW" },

  { code: "TH", name: "Thailand", flag: "🇹🇭", defaultLanguage: "th" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", defaultLanguage: "vi" },

  { code: "KE", name: "Kenya", flag: "🇰🇪", defaultLanguage: "en" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", defaultLanguage: "en" },
  { code: "GH", name: "Ghana", flag: "🇬🇭", defaultLanguage: "en" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", defaultLanguage: "ar" },
  { code: "MA", name: "Morocco", flag: "🇲🇦", defaultLanguage: "ar" },
];

export const DEFAULT_REGION_CODE = "ZA";
export const DEFAULT_LANGUAGE_CODE: LanguageCode = "en";

export function getRegion(code: string) {
  return regions.find((region) => region.code === code);
}

export function getLanguage(code: LanguageCode) {
  return languages.find((language) => language.code === code);
}