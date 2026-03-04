/*
 * 「量子棱镜」— FAQ常见问题板块
 * 手风琴展开效果
 * i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { getCompanyYears } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ_KEYS = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
  { qKey: "faq.q6", aKey: "faq.a6" },
];

function FAQItem({ qKey, aKey, index, isOpen, onToggle }: { qKey: string; aKey: string; index: number; isOpen: boolean; onToggle: () => void }) {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();
  const years = getCompanyYears();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: isOpen ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
          border: `1px solid ${isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
        }}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer"
        >
          <span className={`text-sm lg:text-base font-medium transition-colors ${isOpen ? "text-white" : "text-white/70 group-hover:text-white"}`}>
            {t(qKey, { years })}
          </span>
          <ChevronDown
            size={18}
            className={`flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? "rotate-180 text-blue-400" : "text-white/40 group-hover:text-white/60"}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 pb-5">
            <p className="text-sm text-white/50 leading-relaxed">{t(aKey, { years })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">{t("faq.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("faq.title")}<span className="gradient-text">{t("faq.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {FAQ_KEYS.map((item, i) => (
            <FAQItem
              key={i}
              qKey={item.qKey}
              aKey={item.aKey}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
