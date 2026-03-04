/*
 * 语言切换器组件
 * 支持中文、英文、西班牙语切换
 * 使用下拉菜单选择语言
 */
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { switchLanguage, type SupportedLang } from "@/lib/i18n";
import { Globe, ChevronDown } from "lucide-react";

const LANGUAGES: { code: SupportedLang; label: string; flag: string }[] = [
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Normalize language code
  const currentLang: SupportedLang = i18n.language?.startsWith("zh")
    ? "zh"
    : i18n.language?.startsWith("es")
      ? "es"
      : "en";

  const currentConfig = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[1];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: SupportedLang) => {
    switchLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
        title="Switch Language"
      >
        <Globe size={14} className="opacity-60" />
        <span className="font-medium text-xs">{currentConfig.label}</span>
        <ChevronDown
          size={12}
          className={`opacity-40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-36 rounded-lg border border-white/10 bg-[#0a1428]/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50 animate-fade-up">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors duration-150 ${
                lang.code === currentLang
                  ? "text-emerald-400 bg-emerald-500/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
              {lang.code === currentLang && (
                <span className="ml-auto text-emerald-400 text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
