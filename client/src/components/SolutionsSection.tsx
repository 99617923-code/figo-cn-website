/*
 * 「量子棱镜」— 解决方案板块
 * 展示 Ring AI 和 AI 智能报价系统等行业解决方案
 * 与产品矩阵分离，强调场景化落地能力
 * i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { Link } from "wouter";
import { ArrowRight, Watch, Calculator, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SolutionItem {
  id: string;
  path: string;
  gradient: string;
  gradientBg: string;
  icon: React.ReactNode;
  nameKey: string;
  taglineKey: string;
  descKey: string;
  highlights: string[];
  highlightKeys: string[];
  badge?: string;
  badgeKey?: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "ai-quote",
    path: "/solutions/ai-quote",
    gradient: "from-amber-500 to-orange-500",
    gradientBg: "rgba(245,158,11,0.08)",
    icon: <Calculator size={24} className="text-amber-400" />,
    nameKey: "solutions.aiQuote.name",
    taglineKey: "solutions.aiQuote.tagline",
    descKey: "solutions.aiQuote.desc",
    highlights: [
      "AI对话式报价",
      "全行业适用",
      "一行代码嵌入",
      "PDF报价单导出",
    ],
    highlightKeys: [
      "solutions.aiQuote.h1",
      "solutions.aiQuote.h2",
      "solutions.aiQuote.h3",
      "solutions.aiQuote.h4",
    ],
    badge: "NEW",
    badgeKey: "solutions.aiQuote.badge",
  },
  {
    id: "ring-ai",
    path: "/products/ring-ai",
    gradient: "from-teal-500 to-green-500",
    gradientBg: "rgba(20,184,166,0.08)",
    icon: <Watch size={24} className="text-teal-400" />,
    nameKey: "solutions.ringAI.name",
    taglineKey: "solutions.ringAI.tagline",
    descKey: "solutions.ringAI.desc",
    highlights: [
      "全品牌兼容",
      "AI健康分析",
      "家人绑定",
      "订阅增值",
    ],
    highlightKeys: [
      "solutions.ringAI.h1",
      "solutions.ringAI.h2",
      "solutions.ringAI.h3",
      "solutions.ringAI.h4",
    ],
  },
];

function SolutionCard({ solution, index }: { solution: SolutionItem; index: number }) {
  const { ref, isInView } = useInView();
  const { t, i18n } = useTranslation();
  const isZh = i18n.language?.startsWith("zh");

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link href={solution.path}>
        <div
          className="relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 cursor-pointer h-full"
          style={{ background: `linear-gradient(135deg, ${solution.gradientBg}, transparent 60%)` }}
        >
          {/* Badge */}
          {solution.badgeKey && (
            <div className="absolute top-4 right-4 z-10">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${solution.gradient} text-white shadow-lg`}>
                <Sparkles size={10} />
                {t(solution.badgeKey)}
              </span>
            </div>
          )}

          <div className="p-8 lg:p-10">
            {/* Icon + Name */}
            <div className="flex items-center gap-4 mb-5">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} bg-opacity-20 flex items-center justify-center backdrop-blur-sm border border-white/10`}>
                {solution.icon}
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                  {t(solution.nameKey)}
                </h3>
                <p className={`text-sm bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent font-medium`}>
                  {t(solution.taglineKey)}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
              {t(solution.descKey)}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              {solution.highlightKeys.map((key, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 bg-white/[0.04] border border-white/[0.06]"
                >
                  {t(key)}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
              <span>{isZh ? "查看详情" : "Learn More"}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className={`h-[2px] bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      </Link>
    </div>
  );
}

export default function SolutionsSection() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();

  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.5), transparent 60%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3 block">
            {t("solutions.sectionLabel")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("solutions.title")}<span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{t("solutions.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {t("solutions.subtitle")}
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {SOLUTIONS.map((solution, i) => (
            <SolutionCard key={solution.id} solution={solution} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
