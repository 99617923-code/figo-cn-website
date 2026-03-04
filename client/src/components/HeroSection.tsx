/*
 * 「量子棱镜」— Hero首屏
 * 简洁大气的全屏设计：新背景图 + 大标题 + 核心数据
 * i18n国际化支持
 */
import { STATS, getCompanyYears } from "@/lib/constants";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AIChatDemo from "./AIChatDemo";
import WechatQRModal, { useWechatQRModal } from "./WechatQRModal";

function AnimatedNumber({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target <= 0) return;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return <>{current}</>;
}

// Suffix translation keys for stats
const STAT_SUFFIX_KEYS = [
  "hero.suffixYears",
  "hero.suffixPlus",
  "hero.suffixPlus",
  "hero.suffixPlus",
];

function StatItem({ value, suffix, labelKey, delay, suffixKey }: { value: string; suffix: string; labelKey: string; delay: number; suffixKey?: string }) {
  const { t } = useTranslation();
  const numericValue = value === "DYNAMIC_YEARS" ? getCompanyYears() : (parseInt(value.replace(/,/g, "")) || 0);
  const displaySuffix = suffixKey ? t(suffixKey) : suffix;

  return (
    <div
      className="relative group text-center px-2 sm:px-4 lg:px-6 py-2 sm:py-4 flex-shrink-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-mono-data text-xl sm:text-2xl lg:text-5xl font-bold text-white tracking-tight">
        <AnimatedNumber target={numericValue} duration={2000} />
        <span className="text-emerald-400">{displaySuffix}</span>
      </div>
      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/50 tracking-wide">{t(labelKey)}</div>
    </div>
  );
}

// 将STATS的label映射到i18n key
const STAT_LABEL_KEYS = [
  "hero.statYears",
  "hero.statProjects",
  "hero.statProducts",
  "hero.statModels",
];

export default function HeroSection() {
  const { t } = useTranslation();
  const companyYears = getCompanyYears();
  const { open, openModal, closeModal } = useWechatQRModal();

  return (
    <section id="hero" className="relative min-h-screen lg:min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a15] via-[#0a1428] to-[#0d1f3c]" />

      {/* Content */}
      <div className="relative z-10 container pt-24 sm:pt-32 lg:pt-20 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[600px] lg:min-h-[500px] h-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-10 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300/90 font-medium">{t("hero.badge", { years: companyYears })}</span>
          </div>

          {/* Heading — larger, bolder */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.1] mb-8 animate-fade-up stagger-1">
            <span className="text-white">{t("hero.title1")}</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>

          {/* Subtitle — cleaner */}
          <p className="text-lg lg:text-xl text-white/55 max-w-2xl mb-12 leading-relaxed animate-fade-up stagger-2">
            {t("hero.subtitle")}
            <br className="hidden sm:block" />
            {t("hero.subtitle2")}
          </p>

          {/* Stats — moved up before CTA buttons */}
          <div className="flex flex-nowrap items-center overflow-x-auto animate-fade-up stagger-3 -mx-6 px-6 pb-8 mb-4">
            {STATS.map((stat, i) => (
              <div key={STAT_LABEL_KEYS[i]} className="flex items-center flex-shrink-0">
                <StatItem value={stat.value} suffix={stat.suffix} labelKey={STAT_LABEL_KEYS[i]} delay={i * 200} suffixKey={STAT_SUFFIX_KEYS[i]} />
                {i < STATS.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/10 mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-20 animate-fade-up stagger-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              {t("hero.exploreProducts")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/15 text-white/80 hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-300"
            >
              {t("hero.bookConsult")}
            </button>
          </div>
        </div>
        {/* 右侧：AI聊天演示 - 仅PC端显示 */}
        <div className="hidden lg:flex w-full h-96">
          <AIChatDemo />
        </div>
      </div>
      </div>

      {/* 企业微信二维码弹窗 */}
      <WechatQRModal open={open} onClose={closeModal} title={t("wechatModal.defaultTitle")} subtitle={t("wechatModal.defaultSubtitle")} />
    </section>
  );
}
