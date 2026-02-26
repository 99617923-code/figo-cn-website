/*
 * 「量子棱镜」— 服务能力
 * 六大核心服务 + 生态系统图 + zigzag布局
 */
import { IMAGES, SERVICES, getCompanyYears } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Bot, Blocks, AudioWaveform, LayoutDashboard, Cloud, Wifi } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bot, Blocks, AudioWaveform, LayoutDashboard, Cloud, Wifi,
};

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, isInView } = useInView();
  const Icon = iconMap[service.icon] || Bot;

  return (
    <div
      ref={ref}
      className={`group relative glass-card rounded-2xl p-6 transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
          <Icon size={20} className="text-blue-400" />
        </div>
        <span className="text-[9px] font-medium text-cyan-400/60 tracking-wider uppercase bg-cyan-500/5 border border-cyan-500/10 px-2 py-0.5 rounded-full">AI</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function ServicesSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: imgRef, isInView: imgVisible } = useInView();

  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-emerald-400/80 mb-3 block">Services</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            全栈AI开发<span className="gradient-text-green">服务能力</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {getCompanyYears()}年软件定制开发经验与前沿AI技术的深度融合，为企业提供从咨询到交付的一站式AI解决方案。
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Ecosystem image */}
        <div
          ref={imgRef}
          className={`relative rounded-2xl overflow-hidden border border-white/5 transition-all duration-700 ${
            imgVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={IMAGES.ecosystem}
            alt="火鹰科技AI产品生态系统"
            className="w-full h-64 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">AI 产品生态</h3>
            <p className="text-sm text-white/60 max-w-lg">
              以火鹰引擎为核心，连接大模型、数字人、智能工具、IoT硬件等多个应用场景，构建完整的AI产品生态闭环。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
