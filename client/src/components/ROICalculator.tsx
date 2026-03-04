/**
 * ROI计算器 — i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const SCENARIOS = [
  {
    id: "customer-service",
    labelKey: "roi.scenario1",
    icon: "💬",
    defaults: { teamSize: 10, avgSalary: 8000, efficiency: 60 },
    baseInvestment: 15,
    perPersonCost: 0.8,
    descKey: "roi.scenario1Desc",
  },
  {
    id: "sales-training",
    labelKey: "roi.scenario2",
    icon: "🎯",
    defaults: { teamSize: 30, avgSalary: 12000, efficiency: 35 },
    baseInvestment: 20,
    perPersonCost: 0.5,
    descKey: "roi.scenario2Desc",
  },
  {
    id: "digital-human",
    labelKey: "roi.scenario3",
    icon: "🧑‍💼",
    defaults: { teamSize: 5, avgSalary: 20000, efficiency: 80 },
    baseInvestment: 25,
    perPersonCost: 3,
    descKey: "roi.scenario3Desc",
  },
];

export default function ROICalculator() {
  const { t, i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");
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
    if (isEn) {
      if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
      if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
      return value.toLocaleString();
    }
    if (value >= 10000) return `${(value / 10000).toFixed(1)}${isEn ? '0K' : '万'}`;
    return value.toLocaleString();
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-emerald-400/80 mb-3 block">{t("roi.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("roi.title")}<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{t("roi.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">{t("roi.subtitle")}</p>
        </div>

        <div
          ref={calcRef}
          className={`max-w-5xl mx-auto transition-all duration-700 ${calcVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
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
                <span>{t(scenario.labelKey)}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-5">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-xs text-white/40 mb-6">{t(SCENARIOS[activeScenario].descKey)}</p>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/50">{t("roi.teamSize")}</label>
                    <span className="font-mono text-sm text-emerald-400 font-semibold">{teamSize}{isEn ? " people" : "人"}</span>
                  </div>
                  <input type="range" min={1} max={100} value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-1">
                    <span>1</span><span>100</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/50">{t("roi.avgSalary")}</label>
                    <span className="font-mono text-sm text-emerald-400 font-semibold">¥{avgSalary.toLocaleString()}</span>
                  </div>
                  <input type="range" min={3000} max={50000} step={1000} value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-1">
                    <span>¥3,000</span><span>¥50,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/50">{t("roi.efficiencyGain")}</label>
                    <span className="font-mono text-sm text-emerald-400 font-semibold">{efficiencyGain}%</span>
                  </div>
                  <input type="range" min={10} max={90} step={5} value={efficiencyGain}
                    onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-1">
                    <span>10%</span><span>90%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04]">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator size={16} className="text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-400/80 tracking-wider uppercase">{t("roi.roiLabel")}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-5xl lg:text-6xl font-bold text-emerald-400">{roi.roiPercent}</span>
                  <span className="text-2xl text-emerald-400/60 font-bold">%</span>
                </div>
                <p className="text-sm text-white/40">{t("roi.annualROI")}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign size={14} className="text-blue-400" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">{t("roi.annualSavings")}</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">¥{formatCurrency(roi.annualSavings)}</div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={14} className="text-purple-400" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">{t("roi.netProfit")}</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">¥{formatCurrency(roi.netSavings)}</div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={14} className="text-amber-400" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">{t("roi.payback")}</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">
                    {roi.paybackMonths}<span className="text-sm text-white/40 ml-1">{t("roi.months")}</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign size={14} className="text-rose-400" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">{t("roi.investment")}</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">¥{formatCurrency(roi.aiInvestment)}</div>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
              >
                {t("roi.getReport")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <p className="text-center text-[10px] text-white/20 mt-6">{t("roi.disclaimer")}</p>
        </div>
      </div>
    </section>
  );
}
