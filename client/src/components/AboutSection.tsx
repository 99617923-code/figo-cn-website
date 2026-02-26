/*
 * 「量子棱镜」— 关于我们
 * 20年历程 + 资质展示 + 公司优势
 */
import { IMAGES, COMPANY_INFO } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Shield, Award, Users, Clock, CheckCircle, type LucideIcon } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "20年行业深耕",
    description: "自2005年成立以来，持续专注软件定制开发领域，积累了丰富的行业经验和技术沉淀。",
  },
  {
    icon: Users,
    title: "100+专业团队",
    description: "汇聚产品经理、架构师、全栈工程师、AI算法工程师等多领域专业人才。",
  },
  {
    icon: Award,
    title: "国家高新技术企业",
    description: "通过国家高新技术企业认证，CMMI Level-3资质，新四板股权代码890461。",
  },
  {
    icon: Shield,
    title: "5000+项目交付",
    description: "服务覆盖金融、教育、医疗、零售等多个行业，项目交付成功率行业领先。",
  },
];

function AdvantageCard({ adv, index }: { adv: { icon: LucideIcon; title: string; description: string }; index: number }) {
  const { ref, isInView } = useInView();
  const Icon = adv.icon;
  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-5 transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon size={20} className="text-amber-400 mb-3" />
      <h3 className="text-base font-semibold text-white mb-1.5">{adv.title}</h3>
      <p className="text-xs text-white/50 leading-relaxed">{adv.description}</p>
    </div>
  );
}

export default function AboutSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: imgRef, isInView: imgVisible } = useInView();

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
          <span className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3 block">About Us</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            <span className="gradient-text">20年</span>技术沉淀
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {COMPANY_INFO.name}成立于{COMPANY_INFO.established}年，是一家专注于软件定制开发的国家高新技术企业。从传统软件开发到AI智能体定制，我们始终站在技术前沿，为企业数字化转型提供强有力的技术支撑。
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
              alt="火鹰科技20年技术演进历程"
              className="w-full h-72 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex flex-wrap gap-2">
                {COMPANY_INFO.qualifications.map((q) => (
                  <span key={q} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-amber-300/80 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    <CheckCircle size={12} />
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((adv, i) => (
              <AdvantageCard key={adv.title} adv={adv} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
