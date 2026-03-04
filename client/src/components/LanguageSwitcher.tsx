/*
 * 语言切换器组件
 * 用于导航栏中切换中英文
 */
import { useTranslation } from "react-i18next";
import { switchLanguage } from "@/lib/i18n";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("zh") ? "zh" : "en";

  const toggle = () => {
    const newLang = currentLang === "zh" ? "en" : "zh";
    switchLanguage(newLang);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
      title={currentLang === "zh" ? "Switch to English" : "切换为中文"}
    >
      <Globe size={14} className="opacity-60" />
      <span className="font-medium text-xs">{currentLang === "zh" ? "EN" : "中文"}</span>
    </button>
  );
}
