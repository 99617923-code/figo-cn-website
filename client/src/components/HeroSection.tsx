/*
 * 「量子棱镜」— Hero首屏
 * 全屏动态渐变背景 + 品牌宣言 + 数据统计
 */
import { IMAGES, STATS } from "@/lib/constants";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, ChevronDown } from "lucide-react";

function StatItem({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  const { ref, isInView } = useInView();
  const numValue = parseInt(value);
  const count = useCountUp(numValue, 2000, isInView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono-data text-3xl lg:text-4xl font-bold text-white">
        {isInView ? count : 0}
        <span className="gradient-text">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-white/50">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c14]/60 via-[#0c0c14]/30 to-[#0c0c14]" />
      </div>

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)",
            animation: "float-orb 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/3 -right-24 w-80 h-80 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)",
            animation: "float-orb 25s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.4), transparent 70%)",
            animation: "float-orb 18s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container pt-28 lg:pt-32 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/70 tracking-wide">20年技术沉淀 · 国家高新技术企业</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-up stagger-1" style={{ opacity: 0 }}>
            <span className="text-white">构建下一代</span>
            <br />
            <span className="gradient-text">AI 智能体</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed animate-fade-up stagger-2" style={{ opacity: 0 }}>
            从大模型API管理到数字人复刻，从AI销售训练到智能工具平台——火鹰科技为企业提供全栈AI智能体定制开发服务，让AI真正为业务创造价值。
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 lg:mt-10 flex flex-wrap gap-4 animate-fade-up stagger-3" style={{ opacity: 0 }}>
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
            >
              探索产品矩阵
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white/80 border border-white/15 rounded-xl hover:bg-white/5 hover:border-white/25 transition-all"
            >
              预约技术咨询
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-3xl animate-fade-up stagger-4" style={{ opacity: 0 }}>
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-white/30 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="text-white/30" />
      </div>
    </section>
  );
}
