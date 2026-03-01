/**
 * AI技术架构可视化板块
 * 动态连线图展示火鹰科技的三层AI技术架构
 * 底层大模型 → 中间层火鹰引擎 → 上层应用产品
 */
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const FOUNDATION_MODELS = [
  { name: "GPT-4o", color: "#10a37f" },
  { name: "Claude 3.5", color: "#d97706" },
  { name: "Gemini Pro", color: "#4285f4" },
  { name: "DeepSeek V3", color: "#6366f1" },
  { name: "Qwen 2.5", color: "#ef4444" },
  { name: "GLM-4", color: "#06b6d4" },
];

const MIDDLEWARE = [
  { name: "智能路由引擎", desc: "自动选择最优模型" },
  { name: "内容安全过滤", desc: "合规审查与风控" },
  { name: "Token 计费系统", desc: "精细化成本管控" },
  { name: "渠道健康监控", desc: "实时可用性保障" },
];

const APP_PRODUCTS = [
  { name: "Moss 智能客服", gradient: "from-amber-500 to-red-500", desc: "自研AI客服系统" },
  { name: "SaleSpark", gradient: "from-orange-500 to-rose-500", desc: "AI销售训练平台" },
  { name: "法睿聊", gradient: "from-blue-500 to-indigo-600", desc: "AI法律咨询SaaS" },
  { name: "FigoAI 工具平台", gradient: "from-violet-500 to-fuchsia-500", desc: "AI工具订阅平台" },
  { name: "数字人复刻", gradient: "from-cyan-500 to-blue-500", desc: "数字人复刻系统" },
  { name: "Ring AI", gradient: "from-emerald-500 to-cyan-500", desc: "AI健康管理" },
];

function PulsingDot({ delay = 0 }: { delay?: number }) {
  return (
    <span className="relative flex h-2 w-2" style={{ animationDelay: `${delay}ms` }}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style={{ animationDelay: `${delay}ms` }} />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
    </span>
  );
}

function DataFlowLine({ direction = "down" }: { direction?: "down" | "up" }) {
  return (
    <div className="flex justify-center py-3">
      <div className="relative w-px h-12">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/40 to-cyan-500/40" />
        <div
          className={`absolute w-1.5 h-1.5 rounded-full bg-emerald-400 left-1/2 -translate-x-1/2 animate-flow-${direction}`}
          style={{ boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)" }}
        />
      </div>
    </div>
  );
}

function LiveCounter({ label, target, suffix = "" }: { label: string; target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;
    const base = target;
    const interval = setInterval(() => {
      setCount((prev) => {
        const increment = Math.floor(Math.random() * 3) + 1;
        return prev >= base + 500 ? base : prev + increment;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono-data text-2xl lg:text-3xl font-bold text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs text-white/40 mt-1">{label}</div>
    </div>
  );
}

export default function AIArchitectureSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: archRef, isInView: archVisible } = useInView();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-4">
            <PulsingDot />
            <span className="text-xs text-emerald-400 font-medium">AI 系统运行中</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            自研<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">三层AI架构</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            从底层大模型接入到上层应用产品，火鹰科技构建了完整的AI技术栈。
            <br className="hidden sm:block" />
            本站右下角的Moss智能客服，正是我们自研AI能力的实时展示。
          </p>
        </div>

        {/* Architecture Diagram */}
        <div
          ref={archRef}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            archVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Layer 3: Application Products */}
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <span className="text-xs font-medium text-white/30 tracking-widest uppercase px-3">应用层 · Application Layer</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {APP_PRODUCTS.map((product, i) => (
                <div
                  key={product.name}
                  className="group glass-card rounded-xl p-4 text-center hover:border-white/15 transition-all duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-3 opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <span className="text-white text-xs font-bold">{product.name.charAt(0)}</span>
                  </div>
                  <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{product.name}</div>
                  <div className="text-[10px] text-white/30 mt-1">{product.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow lines */}
          <DataFlowLine direction="up" />

          {/* Layer 2: FigoEngine Middleware */}
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-500/20" />
              <span className="text-xs font-medium text-emerald-400/60 tracking-widest uppercase px-3">核心层 · 火鹰引擎 FigoAPI</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500/20" />
            </div>
            <div className="relative rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 animate-pulse" style={{ animationDuration: "3s" }} />
              </div>

              <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {MIDDLEWARE.map((item, i) => (
                  <div key={item.name} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                    <PulsingDot delay={i * 300} />
                    <div>
                      <div className="text-sm font-medium text-emerald-300/90">{item.name}</div>
                      <div className="text-[11px] text-white/35 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live stats */}
              <div className="mt-6 pt-5 border-t border-emerald-500/10 grid grid-cols-3 gap-4">
                <LiveCounter label="今日API调用" target={128456} />
                <LiveCounter label="模型响应(ms)" target={47} suffix="ms" />
                <LiveCounter label="服务可用性" target={99} suffix=".99%" />
              </div>
            </div>
          </div>

          {/* Flow lines */}
          <DataFlowLine direction="up" />

          {/* Layer 1: Foundation Models */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <span className="text-xs font-medium text-white/30 tracking-widest uppercase px-3">基座层 · Foundation Models</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {FOUNDATION_MODELS.map((model) => (
                <div
                  key={model.name}
                  className="glass-card rounded-xl p-3 text-center group hover:border-white/15 transition-all"
                >
                  <div
                    className="w-8 h-8 mx-auto rounded-lg flex items-center justify-center mb-2 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: `${model.color}20`, border: `1px solid ${model.color}30` }}
                  >
                    <span className="text-xs font-bold" style={{ color: model.color }}>{model.name.charAt(0)}</span>
                  </div>
                  <div className="text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors">{model.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
