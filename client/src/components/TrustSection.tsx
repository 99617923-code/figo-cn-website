/*
 * 「量子棱镜」— 信任背书板块
 * 客户评价 + 企业资质 + 合作伙伴logo墙 + 数据社会证明
 * 营销目标：让客户产生信任感、敬佩感和合作欲望
 */
import { useInView } from "@/hooks/useInView";
import { COMPANY_INFO, getCompanyYears } from "@/lib/constants";
import { Star, Quote, Shield, Award, Building2, CheckCircle2 } from "lucide-react";

/* ─── 客户评价数据 ─── */
const TESTIMONIALS = [
  {
    name: "张总",
    title: "某教育科技公司 CEO",
    content: "火鹰科技帮我们部署的数字人复刻系统，让创始人的数字分身7×24小时在线接待客户，自动收集需求并生成方案。网站线索转化率提升了40%，大幅缩短了销售周期。非常专业的团队！",
    rating: 5,
    industry: "教育科技",
  },
  {
    name: "李总监",
    title: "某金融集团 技术总监",
    content: "选择火鹰科技做大模型API集成，是我们今年最正确的决定。统一的API网关让我们的AI应用开发效率提升了3倍，成本降低了60%。",
    rating: 5,
    industry: "金融科技",
  },
  {
    name: "王总",
    title: "某连锁企业 董事长",
    content: "火鹰科技的AI销售训练系统让我们300多名销售人员的成交率平均提升了35%。系统的游戏化设计让团队学习积极性非常高，投入产出比远超预期。",
    rating: 5,
    industry: "零售连锁",
  },
  {
    name: "陈经理",
    title: "某制造企业 信息化负责人",
    content: "与火鹰科技合作已经超过5年了，从最初的企业管理系统到现在的AI智能化升级，他们的技术能力和服务态度一直让我们非常放心。",
    rating: 5,
    industry: "智能制造",
  },
];

/* ─── 企业资质数据 ─── */
const QUALIFICATIONS = [
  { icon: <Shield size={20} className="text-blue-400" />, title: "国家高新技术企业", code: COMPANY_INFO.highTechCode },
  { icon: <Award size={20} className="text-purple-400" />, title: "CMMI Level-3 认证", code: "国际软件能力成熟度" },
  { icon: <Building2 size={20} className="text-amber-400" />, title: "新四板挂牌企业", code: `股权代码 ${COMPANY_INFO.stockCode}` },
  { icon: <CheckCircle2 size={20} className="text-emerald-400" />, title: "双软认证企业", code: COMPANY_INFO.softwareCode },
];

/* ─── 服务行业数据 ─── */
const INDUSTRIES = [
  "金融科技", "教育培训", "医疗健康", "智能制造",
  "电商零售", "物流运输", "房地产", "政务服务",
  "文化传媒", "能源环保", "农业科技", "跨境贸易",
];

/* ─── 子组件 ─── */

function TestimonialCard({ item, index }: { item: typeof TESTIMONIALS[0]; index: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-700 group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transitionDelay: `${index * 120}ms`,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.04), rgba(139,92,246,0.04))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "inherit" }}
      />

      {/* Quote icon */}
      <div className="relative mb-4">
        <Quote size={24} className="text-blue-500/30" />
      </div>

      {/* Rating */}
      <div className="relative flex gap-1 mb-4">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Content */}
      <p className="relative text-sm text-white/60 leading-relaxed mb-6">
        "{item.content}"
      </p>

      {/* Author */}
      <div className="relative flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white/70 text-sm font-semibold border border-white/10">
          {item.name[0]}
        </div>
        <div>
          <div className="text-sm font-medium text-white/80">{item.name}</div>
          <div className="text-xs text-white/40">{item.title}</div>
        </div>
        <span className="ml-auto px-2.5 py-1 text-[10px] text-blue-300/70 bg-blue-500/10 rounded-full border border-blue-500/20">
          {item.industry}
        </span>
      </div>
    </div>
  );
}

function QualificationCard({ item, index }: { item: typeof QUALIFICATIONS[0]; index: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-4 p-5 rounded-xl transition-all duration-700 group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.04), rgba(139,92,246,0.04))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "inherit" }}
      />
      <div className="relative w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
        {item.icon}
      </div>
      <div className="relative">
        <div className="text-sm font-semibold text-white/80">{item.title}</div>
        <div className="text-xs text-white/40 mt-0.5">{item.code}</div>
      </div>
    </div>
  );
}

/* ─── 主组件 ─── */

export default function TrustSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: qualRef, isInView: qualVisible } = useInView();
  const { ref: indRef, isInView: indVisible } = useInView();
  const companyYears = getCompanyYears();

  return (
    <section id="trust" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Trust & Credentials</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            值得信赖的<span className="gradient-text">技术伙伴</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {companyYears}年行业深耕，5000+项目交付经验，国家高新技术企业认证。我们用实力赢得每一位客户的信赖。
          </p>
        </div>

        {/* Customer Testimonials */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-20">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Qualifications + Industries */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Qualifications */}
          <div>
            <div
              ref={qualRef}
              className={`mb-8 transition-all duration-700 ${qualVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h3 className="text-xl font-bold text-white mb-2">企业资质认证</h3>
              <p className="text-sm text-white/45">多项国家级认证，彰显企业硬实力</p>
            </div>
            <div className="grid gap-3">
              {QUALIFICATIONS.map((item, i) => (
                <QualificationCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Right: Industries served */}
          <div>
            <div
              ref={indRef}
              className={`mb-8 transition-all duration-700 ${indVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h3 className="text-xl font-bold text-white mb-2">覆盖行业领域</h3>
              <p className="text-sm text-white/45">深耕12+行业，积累丰富的行业解决方案经验</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {INDUSTRIES.map((industry, i) => (
                <div
                  key={industry}
                  className="relative px-4 py-3.5 rounded-xl text-center text-sm text-white/50 hover:text-white/80 transition-all duration-300 group cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06))", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "inherit" }}
                  />
                  <span className="relative">{industry}</span>
                </div>
              ))}
            </div>

            {/* Trust stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="font-mono text-2xl font-bold text-blue-400">{companyYears}+</div>
                <div className="text-xs text-white/40 mt-1">年行业经验</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="font-mono text-2xl font-bold text-purple-400">5000+</div>
                <div className="text-xs text-white/40 mt-1">项目交付</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="font-mono text-2xl font-bold text-emerald-400">98%</div>
                <div className="text-xs text-white/40 mt-1">客户满意度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
