/*
 * 「量子棱镜」— 合作伙伴/技术生态板块
 * 展示合作的技术平台和服务的行业客户类型
 * 营销目标：通过知名品牌背书，增强客户信任感
 */
import { useInView } from "@/hooks/useInView";

/* ─── 技术合作伙伴数据 ─── */
const TECH_PARTNERS = [
  { name: "OpenAI", category: "大模型" },
  { name: "Anthropic", category: "大模型" },
  { name: "Google", category: "大模型" },
  { name: "DeepSeek", category: "大模型" },
  { name: "阿里云", category: "云服务" },
  { name: "腾讯云", category: "云服务" },
  { name: "华为云", category: "云服务" },
  { name: "百度智能云", category: "大模型" },
  { name: "讯飞星火", category: "大模型" },
  { name: "智谱AI", category: "大模型" },
  { name: "通义千问", category: "大模型" },
  { name: "AWS", category: "云服务" },
];

/* ─── 服务客户行业类型 ─── */
const CLIENT_TYPES = [
  { name: "上市公司", count: "30+", color: "text-blue-400" },
  { name: "独角兽企业", count: "15+", color: "text-purple-400" },
  { name: "政府机构", count: "20+", color: "text-amber-400" },
  { name: "500强企业", count: "10+", color: "text-emerald-400" },
  { name: "高校/科研", count: "25+", color: "text-cyan-400" },
  { name: "创业公司", count: "200+", color: "text-rose-400" },
];

function PartnerBadge({ partner, index }: { partner: typeof TECH_PARTNERS[0]; index: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center px-6 py-4 rounded-xl transition-all duration-700 group cursor-default ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{
        transitionDelay: `${index * 60}ms`,
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "inherit" }}
      />
      <div className="relative text-center">
        <div className="text-sm font-semibold text-white/60 group-hover:text-white/90 transition-colors">
          {partner.name}
        </div>
        <div className="text-[10px] text-white/25 mt-0.5">{partner.category}</div>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: clientRef, isInView: clientVisible } = useInView();

  return (
    <section id="partners" className="relative py-20 lg:py-28">
      <div className="container relative">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Technology Ecosystem</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            技术<span className="gradient-text">生态合作</span>
          </h2>
          <p className="mt-4 text-sm text-white/45 leading-relaxed">
            深度整合全球领先的AI大模型和云计算平台，为客户提供最优技术方案
          </p>
        </div>

        {/* Tech partners grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {TECH_PARTNERS.map((partner, i) => (
            <PartnerBadge key={partner.name} partner={partner} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <span className="text-xs text-white/25 tracking-widest uppercase">Trusted By</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>

        {/* Client types */}
        <div
          ref={clientRef}
          className={`transition-all duration-700 ${clientVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_TYPES.map((type, i) => (
              <div
                key={type.name}
                className="text-center p-5 rounded-2xl transition-all duration-300 group cursor-default"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className={`font-mono text-2xl font-bold ${type.color} mb-1`}>
                  {type.count}
                </div>
                <div className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
                  {type.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
