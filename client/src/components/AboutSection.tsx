/*
 * 「量子棱镜」— 关于我们
 * 公司年份基于2005年成立自动计算，无需每年更新
 * i18n国际化支持
 */
import { IMAGES, COMPANY_INFO, getCompanyYears } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Shield, Award, Users, Clock, CheckCircle, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

function AdvantageCard({ icon: Icon, titleKey, descKey, index }: { icon: LucideIcon; titleKey: string; descKey: string; index: number }) {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();
  const years = getCompanyYears();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-5 transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon size={20} className="text-amber-400 mb-3" />
      <h3 className="text-base font-semibold text-white mb-1.5">{t(titleKey, { years, code: COMPANY_INFO.stockCode })}</h3>
      <p className="text-xs text-white/50 leading-relaxed">{t(descKey, { years, code: COMPANY_INFO.stockCode })}</p>
    </div>
  );
}

const ADVANTAGES = [
  { icon: Clock, titleKey: "about.adv1Title", descKey: "about.adv1Desc" },
  { icon: Users, titleKey: "about.adv2Title", descKey: "about.adv2Desc" },
  { icon: Award, titleKey: "about.adv3Title", descKey: "about.adv3Desc" },
  { icon: Shield, titleKey: "about.adv4Title", descKey: "about.adv4Desc" },
];

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: imgRef, isInView: imgVisible } = useInView();
  const companyYears = getCompanyYears();
  const isEn = !i18n.language?.startsWith("zh");

  // 资质标签的英文翻译
  const qualificationsEn: Record<string, string> = {
    "国家高新技术企业": "National High-Tech Enterprise",
    "CMMI Level-3": "CMMI Level-3",
    "新四板挂牌": "NEEQ Listed",
    "双软认证": "Dual Software Certified",
  };

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container">
        <div
          ref={titleRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3 block">{t("about.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            <span className="gradient-text">{t("about.title", { years: companyYears })}</span>{t("about.titleSuffix")}
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {t("about.subtitle", { company: COMPANY_INFO.name, year: COMPANY_INFO.established, years: companyYears })}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div
            ref={imgRef}
            className={`relative rounded-2xl overflow-hidden border border-white/5 transition-all duration-700 ${
              imgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src={IMAGES.heritage}
              alt={`${COMPANY_INFO.name} ${companyYears} years`}
              className="w-full h-72 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex flex-wrap gap-2">
                {COMPANY_INFO.qualifications.map((q) => (
                  <span key={q} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-amber-300/80 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    <CheckCircle size={12} />
                    {isEn ? (qualificationsEn[q] || q) : q}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {ADVANTAGES.map((adv, i) => (
              <AdvantageCard key={adv.titleKey} icon={adv.icon} titleKey={adv.titleKey} descKey={adv.descKey} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
