/*
 * 「量子棱镜」— 成功案例板块
 * i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { getCompanyYears } from "@/lib/constants";
import {
  TrendingUp, Clock, Users, Zap,
  GraduationCap, ShoppingCart, Stethoscope, Landmark,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface CaseConfig {
  industryKey: string;
  industryIcon: React.ReactNode;
  titleKey: string;
  challengeKey: string;
  solutionKey: string;
  metrics: { key: string; value: string; improvement: string }[];
  techKey: string;
  duration: string;
  durationEn: string;
  gradient: string;
}

const CASE_CONFIGS: CaseConfig[] = [
  {
    industryKey: "cases.case1.industry",
    industryIcon: <GraduationCap size={18} className="text-white" />,
    titleKey: "cases.case1.title",
    challengeKey: "cases.case1.challenge",
    solutionKey: "cases.case1.solution",
    metrics: [
      { key: "cases.case1.metric1", value: "96%", improvement: "+40%" },
      { key: "cases.case1.metric2", value: "78%", improvement: "+25%" },
      { key: "cases.case1.metric3", value: "<3s", improvement: "-95%" },
    ],
    techKey: "cases.case1.tech",
    duration: "8周",
    durationEn: "8 Weeks",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    industryKey: "cases.case2.industry",
    industryIcon: <Landmark size={18} className="text-white" />,
    titleKey: "cases.case2.title",
    challengeKey: "cases.case2.challenge",
    solutionKey: "cases.case2.solution",
    metrics: [
      { key: "cases.case2.metric1", value: "3x", improvement: "+200%" },
      { key: "cases.case2.metric2", value: "↓", improvement: "-60%" },
      { key: "cases.case2.metric3", value: "100%", improvement: "100%" },
    ],
    techKey: "cases.case2.tech",
    duration: "6周",
    durationEn: "6 Weeks",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    industryKey: "cases.case3.industry",
    industryIcon: <ShoppingCart size={18} className="text-white" />,
    titleKey: "cases.case3.title",
    challengeKey: "cases.case3.challenge",
    solutionKey: "cases.case3.solution",
    metrics: [
      { key: "cases.case3.metric1", value: "↑", improvement: "+35%" },
      { key: "cases.case3.metric2", value: "↓", improvement: "-50%" },
      { key: "cases.case3.metric3", value: "↓", improvement: "-70%" },
    ],
    techKey: "cases.case3.tech",
    duration: "10周",
    durationEn: "10 Weeks",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    industryKey: "cases.case4.industry",
    industryIcon: <Stethoscope size={18} className="text-white" />,
    titleKey: "cases.case4.title",
    challengeKey: "cases.case4.challenge",
    solutionKey: "cases.case4.solution",
    metrics: [
      { key: "cases.case4.metric1", value: "↑", improvement: "+180%" },
      { key: "cases.case4.metric2", value: "12%", improvement: "+8x" },
      { key: "cases.case4.metric3", value: "↑", improvement: "+65%" },
    ],
    techKey: "cases.case4.tech",
    duration: "12周",
    durationEn: "12 Weeks",
    gradient: "from-emerald-500 to-teal-500",
  },
];

function CaseCard({ config, index }: { config: CaseConfig; index: number }) {
  const { ref, isInView } = useInView();
  const { t, i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className="relative rounded-3xl overflow-hidden group"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(59,130,246,0.03), rgba(139,92,246,0.03))`,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "inherit",
          }}
        />

        <div className={`relative grid lg:grid-cols-5 gap-0 ${!isEven ? "lg:grid-flow-dense" : ""}`}>
          <div className={`lg:col-span-3 p-8 lg:p-10 ${!isEven ? "lg:col-start-3" : ""}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center`}>
                {config.industryIcon}
              </div>
              <span className="text-xs font-medium tracking-wider uppercase text-white/40">{t(config.industryKey)}</span>
              <span className="px-2.5 py-1 text-[10px] text-white/50 bg-white/[0.06] rounded-full border border-white/[0.08]">
                <Clock size={10} className="inline mr-1 -mt-0.5" />
                {isEn ? config.durationEn : config.duration}{!isEn ? "交付" : " " + t("cases.delivered")}
              </span>
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
              {t(config.titleKey)}
            </h3>

            <div className="space-y-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                  <span className="text-xs font-medium text-red-400/70 uppercase tracking-wider">{t("cases.challenge")}</span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed pl-4">{t(config.challengeKey)}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                  <span className="text-xs font-medium text-emerald-400/70 uppercase tracking-wider">{t("cases.solution")}</span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed pl-4">{t(config.solutionKey)}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {(t(config.techKey, { returnObjects: true }) as string[]).map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-[11px] text-white/40 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:text-white/60 hover:border-white/[0.1] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
            style={{ background: "rgba(255,255,255,0.015)" }}
          >
            <div className="text-xs font-medium tracking-wider uppercase text-white/30 mb-6 flex items-center gap-2">
              <TrendingUp size={14} className="text-blue-400/60" />
              {t("cases.results")}
            </div>

            <div className="space-y-6">
              {config.metrics.map((result) => (
                <div key={result.key} className="group/metric">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm text-white/50">{t(result.key)}</span>
                    <span className={`font-mono text-lg font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                      {result.improvement}
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${config.gradient} transition-all duration-1000 ease-out`}
                      style={{
                        width: isInView ? "100%" : "0%",
                        transitionDelay: `${index * 150 + 300}ms`,
                        opacity: 0.6,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudySection() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: statsRef, isInView: statsVisible } = useInView();
  const companyYears = getCompanyYears();

  return (
    <section id="cases" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 60%)" }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">{t("cases.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("cases.title")}<span className="gradient-text">{t("cases.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {t("cases.subtitle", { years: companyYears })}
          </p>
        </div>

        <div className="space-y-8 lg:space-y-10 mb-20">
          {CASE_CONFIGS.map((config, i) => (
            <CaseCard key={config.titleKey} config={config} index={i} />
          ))}
        </div>

        <div
          ref={statsRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
              <Users size={18} className="text-blue-400" />
            </div>
            <div className="font-mono text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-xs text-white/40">{t("cases.clients")}</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
              <Zap size={18} className="text-purple-400" />
            </div>
            <div className="font-mono text-3xl font-bold text-white mb-1">5000+</div>
            <div className="text-xs text-white/40">{t("cases.projects")}</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={18} className="text-emerald-400" />
            </div>
            <div className="font-mono text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-xs text-white/40">{t("cases.satisfaction")}</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
              <Clock size={18} className="text-amber-400" />
            </div>
            <div className="font-mono text-3xl font-bold text-white mb-1">{companyYears}+</div>
            <div className="text-xs text-white/40">{t("cases.experience")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
