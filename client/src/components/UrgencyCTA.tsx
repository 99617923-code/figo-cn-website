/*
 * 「量子棱镜」— 紧迫感CTA板块
 * i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { COMPANY_INFO, getCompanyYears } from "@/lib/constants";
import {
  Gift, Zap, Shield, Clock, Phone, ArrowRight,
  CheckCircle2, Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const OFFER_CONFIGS = [
  {
    icon: <Gift size={20} className="text-amber-400" />,
    titleKey: "urgency.offer1Title",
    descKey: "urgency.offer1Desc",
    tagKey: "urgency.offer1Tag",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  {
    icon: <Zap size={20} className="text-blue-400" />,
    titleKey: "urgency.offer2Title",
    descKey: "urgency.offer2Desc",
    tagKey: "urgency.offer2Tag",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    icon: <Sparkles size={20} className="text-purple-400" />,
    titleKey: "urgency.offer3Title",
    descKey: "urgency.offer3Desc",
    tagKey: "urgency.offer3Tag",
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
];

export default function UrgencyCTA() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: offersRef, isInView: offersVisible } = useInView();
  const { ref: guaranteeRef, isInView: guaranteeVisible } = useInView();
  const companyYears = getCompanyYears();

  const GUARANTEES = [
    { icon: <Shield size={16} />, text: t("urgency.guarantee1") },
    { icon: <Clock size={16} />, text: t("urgency.guarantee2") },
    { icon: <CheckCircle2 size={16} />, text: t("urgency.guarantee3") },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.5), transparent 70%)" }}
        />
      </div>

      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-purple-400/80 mb-3 block">{t("urgency.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("urgency.title")}<span className="gradient-text">{t("urgency.titleHighlight")}</span>{t("urgency.titleSuffix")}
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {t("urgency.subtitle", { years: companyYears })}
          </p>
        </div>

        <div
          ref={offersRef}
          className={`grid md:grid-cols-3 gap-5 mb-14 transition-all duration-700 ${offersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {OFFER_CONFIGS.map((offer, i) => (
            <div
              key={offer.titleKey}
              className="relative p-7 rounded-2xl group transition-all duration-500 hover:-translate-y-1"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "inherit" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    {offer.icon}
                  </div>
                  <span className={`px-2.5 py-1 text-[10px] font-medium rounded-full border ${offer.tagColor}`}>
                    {t(offer.tagKey)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{t(offer.titleKey)}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{t(offer.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative rounded-2xl overflow-hidden mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="relative px-8 py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                {t("urgency.ctaTitle")}
              </h3>
              <p className="text-sm text-white/50">
                {t("urgency.ctaSubtitle")}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                {t("urgency.consultNow")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.salesPhone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white/70 bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] hover:text-white transition-all"
              >
                <Phone size={16} />
                {COMPANY_INFO.salesPhone}
              </a>
            </div>
          </div>
        </div>

        <div
          ref={guaranteeRef}
          className={`flex flex-wrap justify-center gap-6 lg:gap-10 transition-all duration-700 ${guaranteeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {GUARANTEES.map((g) => (
            <div key={g.text} className="flex items-center gap-2 text-sm text-white/40">
              <span className="text-emerald-400/60">{g.icon}</span>
              {g.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
