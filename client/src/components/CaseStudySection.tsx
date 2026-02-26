/*
 * 「量子棱镜」— 成功案例板块
 * 展示真实项目案例，用数据说话
 * 营销目标：通过具体的数据和成果，让客户看到合作的价值
 */
import { useInView } from "@/hooks/useInView";
import { getCompanyYears } from "@/lib/constants";
import {
  TrendingUp, Clock, Users, Zap,
  GraduationCap, ShoppingCart, Building2, Stethoscope, Truck, Landmark,
} from "lucide-react";

interface CaseStudy {
  industry: string;
  industryIcon: React.ReactNode;
  title: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; improvement: string }[];
  techStack: string[];
  duration: string;
  gradient: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    industry: "教育科技",
    industryIcon: <GraduationCap size={18} className="text-white" />,
    title: "某头部在线教育平台 — AI导师替身系统",
    challenge: "平台拥有200+名师，但学员咨询量巨大，名师无法7×24小时在线。学员等待时间长，续费率下降。",
    solution: "基于Moss导师替身系统，为每位名师打造AI数字分身，深度复刻教学风格和知识体系，实现全天候智能答疑。",
    results: [
      { metric: "学员满意度", value: "96%", improvement: "+40%" },
      { metric: "续费率提升", value: "78%", improvement: "+25%" },
      { metric: "响应时间", value: "<3s", improvement: "-95%" },
    ],
    techStack: ["大模型微调", "声音克隆", "知识图谱", "企微集成"],
    duration: "8周",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    industry: "金融科技",
    industryIcon: <Landmark size={18} className="text-white" />,
    title: "某持牌金融集团 — 统一大模型API平台",
    challenge: "集团旗下多个业务线各自对接不同大模型，成本高、管理混乱、合规风险大。需要统一管控和成本优化。",
    solution: "部署火鹰引擎FigoAPI，统一管理20+大模型接入，实现智能路由、内容安全过滤和精细化成本管控。",
    results: [
      { metric: "AI开发效率", value: "3x", improvement: "+200%" },
      { metric: "模型调用成本", value: "降低", improvement: "-60%" },
      { metric: "合规通过率", value: "100%", improvement: "全量" },
    ],
    techStack: ["API网关", "智能路由", "内容安全", "私有化部署"],
    duration: "6周",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    industry: "零售连锁",
    industryIcon: <ShoppingCart size={18} className="text-white" />,
    title: "某全国连锁品牌 — AI销售训练系统",
    challenge: "300+门店销售人员水平参差不齐，传统培训成本高、效果差。新人上手慢，老员工缺乏持续提升动力。",
    solution: "定制SaleSpark AI销售训练平台，融入品牌专属销售话术和场景，游戏化成长体系激发团队学习积极性。",
    results: [
      { metric: "平均成交率", value: "提升", improvement: "+35%" },
      { metric: "新人上手周期", value: "缩短", improvement: "-50%" },
      { metric: "培训成本", value: "降低", improvement: "-70%" },
    ],
    techStack: ["AI对话引擎", "销售方法论", "游戏化设计", "数据分析"],
    duration: "10周",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    industry: "医疗健康",
    industryIcon: <Stethoscope size={18} className="text-white" />,
    title: "某智能穿戴品牌 — AI健康管理App",
    challenge: "智能戒指硬件已量产，但配套App功能单一，缺乏AI分析能力，用户留存率低，无法形成数据闭环。",
    solution: "基于Ring AI方案开发全功能健康管理App，集成AI健康分析、家人绑定、多维数据可视化和订阅增值服务。",
    results: [
      { metric: "用户日活", value: "提升", improvement: "+180%" },
      { metric: "付费转化率", value: "12%", improvement: "+8x" },
      { metric: "用户留存", value: "提升", improvement: "+65%" },
    ],
    techStack: ["Flutter跨平台", "AI健康模型", "BLE蓝牙", "订阅计费"],
    duration: "12周",
    gradient: "from-emerald-500 to-teal-500",
  },
];

/* ─── 子组件 ─── */

function CaseCard({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {
  const { ref, isInView } = useInView();
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
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(59,130,246,0.03), rgba(139,92,246,0.03))`,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "inherit",
          }}
        />

        <div className={`relative grid lg:grid-cols-5 gap-0 ${!isEven ? "lg:grid-flow-dense" : ""}`}>
          {/* Left: Case info */}
          <div className={`lg:col-span-3 p-8 lg:p-10 ${!isEven ? "lg:col-start-3" : ""}`}>
            {/* Industry badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center`}>
                {caseStudy.industryIcon}
              </div>
              <span className="text-xs font-medium tracking-wider uppercase text-white/40">{caseStudy.industry}</span>
              <span className="px-2.5 py-1 text-[10px] text-white/50 bg-white/[0.06] rounded-full border border-white/[0.08]">
                <Clock size={10} className="inline mr-1 -mt-0.5" />
                {caseStudy.duration}交付
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
              {caseStudy.title}
            </h3>

            {/* Challenge & Solution */}
            <div className="space-y-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                  <span className="text-xs font-medium text-red-400/70 uppercase tracking-wider">Challenge</span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed pl-4">{caseStudy.challenge}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                  <span className="text-xs font-medium text-emerald-400/70 uppercase tracking-wider">Solution</span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed pl-4">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-[11px] text-white/40 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:text-white/60 hover:border-white/[0.1] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Results metrics */}
          <div className={`lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
            style={{ background: "rgba(255,255,255,0.015)" }}
          >
            <div className="text-xs font-medium tracking-wider uppercase text-white/30 mb-6 flex items-center gap-2">
              <TrendingUp size={14} className="text-blue-400/60" />
              项目成果
            </div>

            <div className="space-y-6">
              {caseStudy.results.map((result) => (
                <div key={result.metric} className="group/metric">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm text-white/50">{result.metric}</span>
                    <span className={`font-mono text-lg font-bold bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}>
                      {result.improvement}
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${caseStudy.gradient} transition-all duration-1000 ease-out`}
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

/* ─── 主组件 ─── */

export default function CaseStudySection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: statsRef, isInView: statsVisible } = useInView();
  const companyYears = getCompanyYears();

  return (
    <section id="cases" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 60%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Case Studies</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            客户<span className="gradient-text">成功案例</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            每一个案例背后，都是火鹰科技{companyYears}年技术积累的沉淀。用数据说话，用成果证明实力。
          </p>
        </div>

        {/* Case studies list */}
        <div className="space-y-8 lg:space-y-10 mb-20">
          {CASE_STUDIES.map((caseStudy, i) => (
            <CaseCard key={caseStudy.title} caseStudy={caseStudy} index={i} />
          ))}
        </div>

        {/* Bottom summary stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
              <Users size={18} className="text-blue-400" />
            </div>
            <div className="font-mono text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-xs text-white/40">企业客户</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
              <Zap size={18} className="text-purple-400" />
            </div>
            <div className="font-mono text-3xl font-bold text-white mb-1">5000+</div>
            <div className="text-xs text-white/40">项目交付</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={18} className="text-emerald-400" />
            </div>
            <div className="font-mono text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-xs text-white/40">客户满意度</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
              <Clock size={18} className="text-amber-400" />
            </div>
            <div className="font-mono text-3xl font-bold text-white mb-1">{companyYears}年+</div>
            <div className="text-xs text-white/40">行业经验</div>
          </div>
        </div>
      </div>
    </section>
  );
}
