/**
 * 「量子棱镜」— Hero首屏
 * 全屏动态渐变背景 + 品牌宣言 + 数据统计
 * 公司年份基于2005年成立自动计算
 */
import { IMAGES, STATS, getCompanyYears } from "@/lib/constants";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedNumber({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target <= 0) return;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return <>{current}</>;
}

function StatItem({ value, suffix, label, delay }: { value: string; suffix: string; label: string; delay: number }) {
  const numericValue = value === "DYNAMIC_YEARS" ? getCompanyYears() : (parseInt(value.replace(/,/g, "")) || 0);

  return (
    <div className="text-center" style={{ animationDelay: `${delay}ms` }}>
      <div className="font-mono-data text-3xl lg:text-4xl font-bold text-white">
        <AnimatedNumber target={numericValue} duration={2000} />
        <span className="gradient-text">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-white/50">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const companyYears = getCompanyYears();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt="AI technology background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/60 via-[#0a0e1a]/40 to-[#0a0e1a]/80" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-600/15 blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/70">{companyYears}年技术沉淀 · 国家高新技术企业</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up stagger-1">
            <span className="text-white">构建下一代</span>
            <br />
            <span className="gradient-text">AI 智能体</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base lg:text-lg text-white/60 max-w-2xl mb-10 leading-relaxed animate-fade-up stagger-2">
            从大模型API管理到数字人复刻，从AI销售训练到智能工具平台——火鹰科技为企业提供全栈AI智能体定制开发服务，让AI真正为业务创造价值。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up stagger-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              探索产品矩阵 <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              预约技术咨询
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up stagger-4">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 200} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-xs text-white/30 tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/30" />
      </div>
    </section>
  );
}
