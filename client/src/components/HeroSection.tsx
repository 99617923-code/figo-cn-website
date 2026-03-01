/**
 * 「量子棱镜」— Hero首屏
 * 简洁大气的全屏设计：新背景图 + 大标题 + 核心数据
 * 去掉多余的浮动球体，让视觉更干净
 */
import { STATS, getCompanyYears } from "@/lib/constants";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import AIChatDemo from "./AIChatDemo";
import WechatQRModal, { useWechatQRModal } from "./WechatQRModal";

const HERO_BG_URL = "https://private-us-east-1.manuscdn.com/sessionFile/bN4U4uXLu8g7u0VyGeOUbh/sandbox/8vV0SJAlnc5i4U6yw9p09Q-img-1_1772125797000_na1fn_aGVyby1iZy1jbGVhbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYk40VTR1WEx1OGc3dTBWeUdlT1ViaC9zYW5kYm94Lzh2VjBTSkFsbmM1aTRVNnl3OXAwOVEtaW1nLTFfMTc3MjEyNTc5NzAwMF9uYTFmbl9hR1Z5YnkxaVp5MWpiR1ZoYmcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ACj2gqXOuCnUD4Q6~zee0QGV6JNwQrITj7qBHJXRyT319D6FKwEMNr1AdqF6ACwDGtUMmEpjQ5zT8IC6iF7lMLZW7ED-HVXj~YI6Lq6oDS~gyNg5SHxU1mklxA3Ad1pOVD1cgAXR9tNr2HqTC43EGVrlRb8K05jAuuFrm7G-aEHe9csayns5A2~duRZjELFPOgUbCxZnEH-GhySffvcZfb-BB6aP7HuoSeptl6PwQaK1z43IorwGuoXtXfPglSHBM8-k3b5J~HYDOXqfddhIc6E74F3GC-IJUPMHaCX0ceUkjnJ2geRH73A5QaRTDJt3jKLoLVN382E1qCfuPtf0ZQ__";

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
    <div
      className="relative group text-center px-2 sm:px-4 lg:px-6 py-2 sm:py-4 flex-shrink-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-mono-data text-xl sm:text-2xl lg:text-5xl font-bold text-white tracking-tight">
        <AnimatedNumber target={numericValue} duration={2000} />
        <span className="text-emerald-400">{suffix}</span>
      </div>
      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/50 tracking-wide">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const companyYears = getCompanyYears();
  const { open, openModal, closeModal } = useWechatQRModal();

  return (
    <section id="hero" className="relative min-h-screen lg:min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a15] via-[#0a1428] to-[#0d1f3c]" />

      {/* Content */}
      <div className="relative z-10 container pt-24 sm:pt-32 lg:pt-20 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[600px] lg:min-h-[500px] h-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-10 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300/90 font-medium">{companyYears}年技术沉淀 · 国家高新技术企业</span>
          </div>

          {/* Heading — larger, bolder */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.1] mb-8 animate-fade-up stagger-1">
            <span className="text-white">构建下一代</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI 智能体
            </span>
          </h1>

          {/* Subtitle — cleaner */}
          <p className="text-lg lg:text-xl text-white/55 max-w-2xl mb-12 leading-relaxed animate-fade-up stagger-2">
            从大模型API管理到数字人复刻，从AI销售训练到智能工具平台
            <br className="hidden sm:block" />
            火鹰科技为企业提供全栈AI智能体定制开发服务
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-20 animate-fade-up stagger-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              探索产品矩阵 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/15 text-white/80 hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-300"
            >
              预约技术咨询
            </button>
          </div>

          {/* Stats — with dividers */}
          <div className="flex flex-nowrap items-center overflow-x-auto animate-fade-up stagger-4 -mx-6 px-6 pb-2">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center flex-shrink-0">
                <StatItem value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 200} />
                {i < STATS.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/10 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 右侧：AI聊天演示 - 仅PC端显示 */}
        <div className="hidden lg:flex w-full h-96">
          <AIChatDemo />
        </div>
      </div>
      </div>


      {/* 企业微信二维码弹窗 */}
      <WechatQRModal open={open} onClose={closeModal} title="预约技术咨询" subtitle="扫码添加企业微信，获取一对一专属咨询服务" />
    </section>
  );
}
