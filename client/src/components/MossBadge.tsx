/**
 * Moss自研产品标识组件
 * i18n国际化支持
 */
import { useState, useEffect } from "react";
import { Sparkles, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function MossBadge() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-[100px] right-4 z-40 animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <div className="relative group">
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X size={10} className="text-white/50" />
        </button>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0c0c14]/90 backdrop-blur-xl border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
            <Sparkles size={10} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-emerald-400/90 leading-tight">Powered by Moss</span>
            <span className="text-[9px] text-white/30 leading-tight">{t("mossBadge.desc")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
