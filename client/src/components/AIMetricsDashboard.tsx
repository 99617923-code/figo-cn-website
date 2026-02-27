/**
 * AI技术数据仪表盘 — 实时展示AI系统运行数据
 * 营销目标：用实时数据展示技术实力，增强专业感和信任感
 * 放在AI架构板块之后
 */
import { useInView } from "@/hooks/useInView";
import { useEffect, useState, useRef } from "react";
import { Activity, Cpu, Database, Globe, Shield, Zap } from "lucide-react";

interface MetricConfig {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  color: string;
  description: string;
  trend: string;
}

const METRICS: MetricConfig[] = [
  {
    icon: <Activity size={16} />,
    label: "日均API调用",
    value: 2847563,
    suffix: "",
    color: "text-emerald-400",
    description: "火鹰引擎每日处理的API请求数",
    trend: "+12.3%",
  },
  {
    icon: <Cpu size={16} />,
    label: "模型推理延迟",
    value: 47,
    suffix: "ms",
    color: "text-blue-400",
    description: "平均端到端响应时间",
    trend: "-8.5%",
  },
  {
    icon: <Database size={16} />,
    label: "知识库文档",
    value: 1285634,
    suffix: "",
    color: "text-purple-400",
    description: "已索引的企业知识文档数",
    trend: "+23.1%",
  },
  {
    icon: <Globe size={16} />,
    label: "服务可用性",
    value: 99.99,
    suffix: "%",
    color: "text-cyan-400",
    description: "过去30天系统可用性",
    trend: "稳定",
  },
  {
    icon: <Shield size={16} />,
    label: "安全拦截",
    value: 15823,
    suffix: "",
    prefix: "",
    color: "text-amber-400",
    description: "今日内容安全过滤次数",
    trend: "+5.2%",
  },
  {
    icon: <Zap size={16} />,
    label: "并发处理",
    value: 8500,
    suffix: "",
    prefix: "",
    color: "text-rose-400",
    description: "峰值每秒并发请求数",
    trend: "+18.7%",
  },
];

function AnimatedMetric({ metric, isVisible }: { metric: MetricConfig; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || animatedRef.current) return;
    animatedRef.current = true;

    const duration = 1500;
    const startTime = Date.now();
    const target = metric.value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      if (target < 100) {
        setDisplayValue(parseFloat((eased * target).toFixed(2)));
      } else {
        setDisplayValue(Math.round(eased * target));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, metric.value]);

  const formatValue = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(val >= 10000 ? 0 : 1)}K`;
    if (val < 100 && val % 1 !== 0) return val.toFixed(2);
    return val.toLocaleString();
  };

  return (
    <div className="group relative p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.04), rgba(139,92,246,0.04))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "inherit" }}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <div className={`w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center ${metric.color}`}>
            {metric.icon}
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
            metric.trend.startsWith("+") ? "text-emerald-400/70 bg-emerald-500/10" :
            metric.trend.startsWith("-") ? "text-blue-400/70 bg-blue-500/10" :
            "text-white/30 bg-white/5"
          }`}>
            {metric.trend}
          </span>
        </div>

        <div className="font-mono text-2xl lg:text-3xl font-bold text-white mb-1">
          {metric.prefix}{formatValue(displayValue)}{metric.suffix}
        </div>
        <div className="text-xs text-white/50 font-medium">{metric.label}</div>
        <div className="text-[10px] text-white/25 mt-1">{metric.description}</div>
      </div>
    </div>
  );
}

export default function AIMetricsDashboard() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: gridRef, isInView: gridVisible } = useInView();

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="container relative">
        {/* Compact Header */}
        <div
          ref={titleRef}
          className={`flex items-center justify-between mb-8 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400/80 tracking-wider uppercase">Live System Metrics</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white">AI系统实时数据</h3>
          </div>
          <span className="text-[10px] text-white/20 hidden sm:block">数据每5分钟自动更新</span>
        </div>

        {/* Metrics Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 transition-all duration-700 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {METRICS.map((metric, i) => (
            <AnimatedMetric
              key={metric.label}
              metric={metric}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
