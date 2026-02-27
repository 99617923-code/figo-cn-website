/**
 * ROI计算器 — 让客户直观看到投资回报
 * 营销目标：降低决策门槛，用数据说服客户
 * 放在案例板块之后、CTA之前
 */
import { useInView } from "@/hooks/useInView";
import { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign, Clock, ArrowRight } from "lucide-react";

const SCENARIOS = [
  {
    id: "customer-service",
    label: "AI智能客服",
    icon: "💬",
    defaults: { teamSize: 10, avgSalary: 8000, efficiency: 60 },
    baseInvestment: 15,  // 基础投入万元
    perPersonCost: 0.8,  // 每人额外成本万元
    description: "用AI替代部分人工客服，7×24小时在线",
  },
  {
    id: "sales-training",
    label: "AI销售训练",
    icon: "🎯",
    defaults: { teamSize: 30, avgSalary: 12000, efficiency: 35 },
    baseInvestment: 20,
    perPersonCost: 0.5,
    description: "AI模拟客户训练销售，提升成交率",
  },
  {
    id: "digital-human",
    label: "数字人复刻",
    icon: "🧑‍💼",
    defaults: { teamSize: 5, avgSalary: 20000, efficiency: 80 },
    baseInvestment: 25,
    perPersonCost: 3,
    description: "导师/专家数字分身，突破服务瓶颈",
  },
];

export default function ROICalculator() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: calcRef, isInView: calcVisible } = useInView();

  const [activeScenario, setActiveScenario] = useState(0);
  const [teamSize, setTeamSize] = useState(SCENARIOS[0].defaults.teamSize);
  const [avgSalary, setAvgSalary] = useState(SCENARIOS[0].defaults.avgSalary);
  const [efficiencyGain, setEfficiencyGain] = useState(SCENARIOS[0].defaults.efficiency);

  const handleScenarioChange = (index: number) => {
    setActiveScenario(index);
    setTeamSize(SCENARIOS[index].defaults.teamSize);
    setAvgSalary(SCENARIOS[index].defaults.avgSalary);
    setEfficiencyGain(SCENARIOS[index].defaults.efficiency);
  };

  const roi = useMemo(() => {
    const scenario = SCENARIOS[activeScenario];
    const monthlyCost = teamSize * avgSalary;
    const annualCost = monthlyCost * 12;
    const savingsRate = efficiencyGain / 100;
    const annualSavings = annualCost * savingsRate;
    // AI系统投入 = 基础投入 + 每人额外成本，单位万元转为元
    const aiInvestment = (scenario.baseInvestment + scenario.perPersonCost * teamSize) * 10000;
    const netSavings = annualSavings - aiInvestment;
    const roiPercent = aiInvestment > 0 ? ((netSavings / aiInvestment) * 100) : 0;
    const paybackMonths = annualSavings > 0 ? Math.max(1, Math.ceil((aiInvestment / annualSavings) * 12)) : 0;

    return {
      annualCost: Math.round(annualCost),
      annualSavings: Math.round(annualSavings),
      aiInvestment: Math.round(aiInvestment),
      netSavings: Math.round(netSavings),
      roiPercent: Math.round(roiPercent),
      paybackMonths,
    };
  }, [teamSize, avgSalary, efficiencyGain, activeScenario]);

  const formatCurrency = (value: number) => {
    if (value >= 10000) {
      return `${(value / 10000).toFixed(1)}万`;
    }
    return value.toLocaleString();
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-emerald-400/80 mb-3 block">ROI Calculator</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            AI投资<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">回报计算</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            选择您的业务场景，调整参数，即刻看到AI为您带来的投资回报
          </p>
        </div>

        <div
          ref={calcRef}
          className={`max-w-5xl mx-auto transition-all duration-700 ${calcVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {SCENARIOS.map((scenario, i) => (
              <button
                key={scenario.id}
                onClick={() => handleScenarioChange(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeScenario === i
                    ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 shadow-lg shadow-emerald-500/10"
                    : "bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/70 hover:bg-white/[0.05]"
                }`}
              >
                <span className="text-base">{scenario.icon}</span>
                <span>{scenario.label}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Left: Inputs */}
            <div className="lg:col-span-2 space-y-5">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-xs text-white/40 mb-6">{SCENARIOS[activeScenario].description}</p>

                {/* Team Size */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/50">团队人数</label>
                    <span className="font-mono text-sm text-emerald-400 font-semibold">{teamSize}人</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-1">
                    <span>1人</span><span>100人</span>
                  </div>
                </div>

                {/* Average Salary */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/50">人均月薪</label>
                    <span className="font-mono text-sm text-emerald-400 font-semibold">¥{avgSalary.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={3000}
                    max={50000}
                    step={1000}
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-1">
                    <span>¥3,000</span><span>¥50,000</span>
                  </div>
                </div>

                {/* Efficiency Gain */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/50">AI效率提升</label>
                    <span className="font-mono text-sm text-emerald-400 font-semibold">{efficiencyGain}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={90}
                    step={5}
                    value={efficiencyGain}
                    onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-1">
                    <span>10%</span><span>90%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="lg:col-span-3 space-y-4">
              {/* Main ROI Card */}
              <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04]">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator size={16} className="text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-400/80 tracking-wider uppercase">投资回报率</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-5xl lg:text-6xl font-bold text-emerald-400">
                    {roi.roiPercent}
                  </span>
                  <span className="text-2xl text-emerald-400/60 font-bold">%</span>
                </div>
                <p className="text-sm text-white/40">预计年投资回报率</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign size={14} className="text-blue-400" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">年节省成本</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">
                    ¥{formatCurrency(roi.annualSavings)}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={14} className="text-purple-400" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">净收益</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">
                    ¥{formatCurrency(roi.netSavings)}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={14} className="text-amber-400" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">回本周期</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">
                    {roi.paybackMonths}<span className="text-sm text-white/40 ml-1">个月</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign size={14} className="text-rose-400" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">预估投入</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">
                    ¥{formatCurrency(roi.aiInvestment)}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
              >
                获取专属ROI分析报告
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[10px] text-white/20 mt-6">
            * 以上数据为基于行业平均水平的预估值，实际效果因业务场景而异。联系我们获取针对您业务的精确分析。
          </p>
        </div>
      </div>
    </section>
  );
}
