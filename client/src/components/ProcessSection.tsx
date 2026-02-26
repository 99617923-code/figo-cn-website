/*
 * 「量子棱镜」— 开发流程
 * 展示AI智能体定制开发的专业流程
 */
import { useInView } from "@/hooks/useInView";
import { MessageSquare, Search, Code2, Rocket, Headphones, Brain, Cpu, Zap, Shield, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Brain,
    step: "01",
    title: "AI需求诊断",
    aiTag: "AI分析",
    description: "运用AI需求分析框架，深入解构业务场景与用户痛点，智能匹配最优AI解决方案路径。",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI架构设计",
    aiTag: "模型选型",
    description: "AI架构师团队进行大模型选型评估、Prompt工程设计、RAG知识库架构和AI Agent工作流编排。",
  },
  {
    icon: Zap,
    step: "03",
    title: "AI敏捷开发",
    aiTag: "AI辅助",
    description: "AI辅助编码加速开发效率，每两周交付可演示版本，实时调优模型参数确保AI效果达标。",
  },
  {
    icon: Shield,
    step: "04",
    title: "AI安全上线",
    aiTag: "安全审计",
    description: "AI内容安全审查、模型幻觉检测、压力测试与红队对抗，确保AI系统安全可靠后正式部署。",
  },
  {
    icon: RefreshCw,
    step: "05",
    title: "AI持续进化",
    aiTag: "模型迭代",
    description: "7×24小时AI系统监控，持续收集用户反馈微调模型，定期升级基座模型保持技术领先。",
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
      <div className="glass-card rounded-2xl p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
              <Icon size={18} className="text-blue-400" />
            </div>
            <span className="font-mono-data text-xs text-white/30">{step.step}</span>
          </div>
          {step.aiTag && (
            <span className="text-[9px] font-medium text-emerald-400/70 bg-emerald-500/8 border border-emerald-500/15 px-2 py-0.5 rounded-full">{step.aiTag}</span>
          )}
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
