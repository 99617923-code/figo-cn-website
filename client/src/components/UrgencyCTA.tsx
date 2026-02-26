/*
 * 「量子棱镜」— 紧迫感CTA板块
 * 在联系表单之前展示，制造紧迫感促进转化
 * 营销目标：通过限时优惠和免费名额，降低客户决策门槛
 */
import { useInView } from "@/hooks/useInView";
import { COMPANY_INFO, getCompanyYears } from "@/lib/constants";
import {
  Gift, Zap, Shield, Clock, Phone, ArrowRight,
  CheckCircle2, Sparkles,
} from "lucide-react";

const OFFERS = [
  {
    icon: <Gift size={20} className="text-amber-400" />,
    title: "免费AI需求诊断",
    description: "资深AI架构师一对一沟通，深入分析您的业务场景，输出专业的AI应用可行性报告",
    tag: "限量",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  {
    icon: <Zap size={20} className="text-blue-400" />,
    title: "免费技术方案设计",
    description: "根据您的需求，提供完整的技术架构方案、开发排期和精确报价，无任何隐性费用",
    tag: "免费",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    icon: <Sparkles size={20} className="text-purple-400" />,
    title: "产品功能演示",
    description: "预约我们5大AI产品的在线演示，亲身体验AI智能体的强大能力和实际应用效果",
    tag: "预约",
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
];

const GUARANTEES = [
  { icon: <Shield size={16} />, text: "签订正规合同，保障双方权益" },
  { icon: <Clock size={16} />, text: "按里程碑交付，全程透明可控" },
  { icon: <CheckCircle2 size={16} />, text: "3-12个月免费维护期" },
];

export default function UrgencyCTA() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: offersRef, isInView: offersVisible } = useInView();
  const { ref: guaranteeRef, isInView: guaranteeVisible } = useInView();
  const companyYears = getCompanyYears();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Accent background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.5), transparent 70%)" }}
        />
      </div>

      <div className="container relative">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-purple-400/80 mb-3 block">Get Started</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            立即开启<span className="gradient-text">AI 赋能</span>之旅
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {companyYears}年技术积累，5000+项目交付经验。让我们的专家团队为您量身定制AI解决方案。
          </p>
        </div>

        {/* Offers grid */}
        <div
          ref={offersRef}
          className={`grid md:grid-cols-3 gap-5 mb-14 transition-all duration-700 ${offersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {OFFERS.map((offer, i) => (
            <div
              key={offer.title}
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
                    {offer.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{offer.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
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
                现在咨询，享受专属优惠
              </h3>
              <p className="text-sm text-white/50">
                每月仅限10个免费AI需求诊断名额，先到先得
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
                立即免费咨询
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

        {/* Guarantees */}
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
