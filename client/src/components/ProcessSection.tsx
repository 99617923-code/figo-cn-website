/*
 * 「量子棱镜」— 开发流程
 * 展示AI智能体定制开发的专业流程
 */
import { useInView } from "@/hooks/useInView";
import { MessageSquare, Search, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "需求沟通",
    description: "深入了解业务场景、用户痛点和期望目标，明确AI智能体的功能边界和技术要求。",
  },
  {
    icon: Search,
    step: "02",
    title: "方案设计",
    description: "AI架构师团队制定技术方案，包括模型选型、系统架构、数据流设计和交互方案。",
  },
  {
    icon: Code2,
    step: "03",
    title: "敏捷开发",
    description: "采用Scrum敏捷开发模式，每两周交付可演示版本，确保开发方向与需求一致。",
  },
  {
    icon: Rocket,
    step: "04",
    title: "测试上线",
    description: "全面的功能测试、性能测试和安全审计，确保系统稳定可靠后正式部署上线。",
  },
  {
    icon: Headphones,
    step: "05",
    title: "持续运维",
    description: "提供7×24小时技术支持，持续监控系统运行状态，定期优化模型效果和系统性能。",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isInView } = useInView();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-600 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Connector line (not on last item) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px">
          <div className="w-full h-px bg-gradient-to-r from-blue-500/30 to-purple-500/30" />
        </div>
      )}

      <div className="glass-card rounded-2xl p-6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
            <Icon size={18} className="text-blue-400" />
          </div>
          <span className="font-mono-data text-xs text-white/30">{step.step}</span>
        </div>
        <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container">
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-cyan-400/80 mb-3 block">Process</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            专业<span className="gradient-text">开发流程</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            经过5000+项目打磨的标准化开发流程，确保每一个AI智能体项目高质量交付。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
