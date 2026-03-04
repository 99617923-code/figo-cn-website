/*
 * i18n 国际化配置
 * 支持中文(zh)和英文(en)
 * 自动检测浏览器语言，支持手动切换
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import zh from "../locales/zh.json";
import en from "../locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
    },
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // 检测顺序：localStorage > 手动设置 > 浏览器语言
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "figo-lang",
      caches: ["localStorage"],
    },
  });

export default i18n;

/**
 * 根据IP地理位置自动设置语言
 * 中国IP → 中文，其他 → 英文
 */
export async function detectLanguageByIP(): Promise<void> {
  // 如果用户已手动选择过语言，不再自动切换
  const manuallySet = localStorage.getItem("figo-lang-manual");
  if (manuallySet === "true") return;

  try {
    // 使用多个免费IP定位API作为fallback
    let isChina = false;

    try {
      const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        const data = await res.json();
        isChina = data.country_code === "CN" || data.country === "China";
      }
    } catch {
      // fallback to another API
      try {
        const res = await fetch("https://ip-api.com/json/?fields=countryCode", { signal: AbortSignal.timeout(3000) });
        if (res.ok) {
          const data = await res.json();
          isChina = data.countryCode === "CN";
        }
      } catch {
        // 如果所有API都失败，默认使用浏览器语言设置
        return;
      }
    }

    const targetLang = isChina ? "zh" : "en";
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
      localStorage.setItem("figo-lang", targetLang);
    }
  } catch {
    // 静默失败，使用默认语言
  }
}

/**
 * 手动切换语言
 */
export function switchLanguage(lang: "zh" | "en"): void {
  i18n.changeLanguage(lang);
  localStorage.setItem("figo-lang", lang);
  localStorage.setItem("figo-lang-manual", "true");
}
