/*
 * 「量子棱镜」— 开发流程
 * 展示AI智能体定制开发的专业流程
 * i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { Brain, Cpu, Zap, Shield, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";

const STEP_ICONS = [Brain, Cpu, Zap, Shield, RefreshCw];
const STEP_KEYS = [
  { titleKey: "process.step1.title", tagKey: "process.step1.tag", descKey: "process.step1.desc" },
  { titleKey: "process.step2.title", tagKey: "process.step2.tag", descKey: "process.step2.desc" },
  { titleKey: "process.step3.title", tagKey: "process.step3.tag", descKey: "process.step3.desc" },
  { titleKey: "process.step4.title", tagKey: "process.step4.tag", descKey: "process.step4.desc" },
  { titleKey: "process.step5.title", tagKey: "process.step5.tag", descKey: "process.step5.desc" },
];

function StepCard({ index }: { index: number }) {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();
  const Icon = STEP_ICONS[index];
  const keys = STEP_KEYS[index];
  const stepNum = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-600 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="glass-card rounded-2xl p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
              <Icon size={18} className="text-blue-400" />
            </div>
            <span className="font-mono-data text-xs text-white/30">{stepNum}</span>
          </div>
          <span className="text-[9px] font-medium text-emerald-400/70 bg-emerald-500/8 border border-emerald-500/15 px-2 py-0.5 rounded-full">{t(keys.tagKey)}</span>
        </div>
        <h3 className="text-base font-semibold text-white mb-2">{t(keys.titleKey)}</h3>
        <p className="text-xs text-white/50 leading-relaxed">{t(keys.descKey)}</p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container">
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-cyan-400/80 mb-3 block">{t("process.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("process.title")}<span className="gradient-text">{t("process.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {STEP_KEYS.map((_, i) => (
            <StepCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
