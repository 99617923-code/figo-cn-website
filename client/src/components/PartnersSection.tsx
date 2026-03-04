/*
 * 「量子棱镜」— 合作伙伴/技术生态板块
 * i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { useTranslation } from "react-i18next";

const TECH_PARTNERS_KEYS = [
  { name: "OpenAI", catKey: "partners.catLLM" },
  { name: "Anthropic", catKey: "partners.catLLM" },
  { name: "Google", catKey: "partners.catLLM" },
  { name: "DeepSeek", catKey: "partners.catLLM" },
  { name: "partners.aliCloud", catKey: "partners.catCloud" },
  { name: "partners.tencentCloud", catKey: "partners.catCloud" },
  { name: "partners.huaweiCloud", catKey: "partners.catCloud" },
  { name: "partners.baiduCloud", catKey: "partners.catLLM" },
  { name: "partners.iflytekSpark", catKey: "partners.catLLM" },
  { name: "partners.zhipuAI", catKey: "partners.catLLM" },
  { name: "partners.qwen", catKey: "partners.catLLM" },
  { name: "AWS", catKey: "partners.catCloud" },
];

const CLIENT_TYPE_KEYS = [
  { nameKey: "partners.listed", count: "30+", color: "text-blue-400" },
  { nameKey: "partners.unicorn", count: "15+", color: "text-purple-400" },
  { nameKey: "partners.gov", count: "20+", color: "text-amber-400" },
  { nameKey: "partners.fortune500", count: "10+", color: "text-emerald-400" },
  { nameKey: "partners.university", count: "25+", color: "text-cyan-400" },
  { nameKey: "partners.startup", count: "200+", color: "text-rose-400" },
];

function PartnerBadge({ name, category, index }: { name: string; category: string; index: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center px-6 py-4 rounded-xl transition-all duration-700 group cursor-default ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 60}ms`, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "inherit" }}
      />
      <div className="relative text-center">
        <div className="text-sm font-semibold text-white/60 group-hover:text-white/90 transition-colors">{name}</div>
        <div className="text-[10px] text-white/25 mt-0.5">{category}</div>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: clientRef, isInView: clientVisible } = useInView();

  return (
    <section id="partners" className="relative py-20 lg:py-28">
      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">{t("partners.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            {t("partners.title")}<span className="gradient-text">{t("partners.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-sm text-white/45 leading-relaxed">{t("partners.subtitle")}</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {TECH_PARTNERS_KEYS.map((partner, i) => {
            const displayName = partner.name.startsWith("partners.") ? t(partner.name) : partner.name;
            return <PartnerBadge key={partner.name} name={displayName} category={t(partner.catKey)} index={i} />;
          })}
        </div>

        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <span className="text-xs text-white/25 tracking-widest uppercase">{t("partners.trustedBy")}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>

        <div
          ref={clientRef}
          className={`transition-all duration-700 ${clientVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_TYPE_KEYS.map((type) => (
              <div
                key={type.nameKey}
                className="text-center p-5 rounded-2xl transition-all duration-300 group cursor-default"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className={`font-mono text-2xl font-bold ${type.color} mb-1`}>{type.count}</div>
                <div className="text-xs text-white/40 group-hover:text-white/60 transition-colors">{t(type.nameKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
