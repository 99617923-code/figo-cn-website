/*
 * 「量子棱镜」— 企微二维码弹窗组件
 * i18n国际化支持
 */
import { X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

const WECHAT_QR_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663267704571/YtbUYDAJtEwhIZuy.png";

interface WechatQRModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function WechatQRModal({ open, onClose, title, subtitle }: WechatQRModalProps) {
  const { t } = useTranslation();
  const displayTitle = title || t("wechatQR.defaultTitle");
  const displaySubtitle = subtitle || t("wechatQR.defaultSubtitle");

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, handleEsc]);

  if (!open) return null;

  try {
    // @ts-ignore
    if (window._hmt) { window._hmt.push(["_trackEvent", "wechat_qr_modal", "open", displayTitle]); }
  } catch {}

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-sm bg-[#12121e]/95 backdrop-blur-xl rounded-2xl border border-white/[0.1] shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.12] transition-all z-10"
        >
          <X size={16} />
        </button>

        <div className="p-6 pt-8">
          <div className="text-center mb-5">
            <h3 className="text-lg font-semibold text-white mb-1">{displayTitle}</h3>
            <p className="text-sm text-white/40">{displaySubtitle}</p>
          </div>

          <div className="mx-auto w-56 h-56 rounded-xl bg-white p-2 mb-5">
            <img src={WECHAT_QR_URL} alt="WeChat QR Code" className="w-full h-full object-contain rounded-lg" />
          </div>

          <div className="text-center space-y-2">
            <p className="text-xs text-white/50">{t("wechatQR.instructions")}</p>
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-400/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("wechatQR.online")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useWechatQRModal() {
  const [open, setOpen] = useState(false);
  return { open, openModal: () => setOpen(true), closeModal: () => setOpen(false) };
}
