/*
 * 「量子棱镜」— AI智能体定制开发服务页面
 * i18n国际化支持
 */
import { useEffect, useState } from "react";
import { CheckCircle2, Code2, Zap, Shield, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import WechatQRModal from "@/components/WechatQRModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const STEP_ICONS = [
  <Users size={24} />,
  <Code2 size={24} />,
  <Zap size={24} />,
  <Shield size={24} />,
  <TrendingUp size={24} />,
];

export default function Services() {
  const { t } = useTranslation();
  const [showWechatModal, setShowWechatModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    { step: "1", titleKey: "servicesPage.step1Title", descKey: "servicesPage.step1Desc" },
    { step: "2", titleKey: "servicesPage.step2Title", descKey: "servicesPage.step2Desc" },
    { step: "3", titleKey: "servicesPage.step3Title", descKey: "servicesPage.step3Desc" },
    { step: "4", titleKey: "servicesPage.step4Title", descKey: "servicesPage.step4Desc" },
    { step: "5", titleKey: "servicesPage.step5Title", descKey: "servicesPage.step5Desc" },
  ];

  const techStack = [
    { catKey: "servicesPage.techLLM", items: ["OpenAI GPT-4o", "Claude 3.5", "Gemini Pro", "DeepSeek V3", t("servicesPage.qwen"), t("servicesPage.ernie")] },
    { catKey: "servicesPage.techFramework", items: ["LangChain", "LlamaIndex", "FastAPI", "Node.js", "React", "Vue"] },
    { catKey: "servicesPage.techDB", items: ["PostgreSQL", "MongoDB", "Redis", "Milvus", "Pinecone", "Weaviate"] },
    { catKey: "servicesPage.techDeploy", items: [t("servicesPage.aliCloud"), "AWS", "Azure", t("servicesPage.privateDeploy"), t("servicesPage.hybridCloud"), t("servicesPage.edgeComputing")] },
  ];

  const successCases = [
    {
      titleKey: "servicesPage.case1Title",
      descKey: "servicesPage.case1Desc",
      metrics: [
        { labelKey: "servicesPage.case1m1", value: "98%" },
        { labelKey: "servicesPage.case1m2", value: "5000+" },
        { labelKey: "servicesPage.case1m3", value: "4.8/5" },
      ],
    },
    {
      titleKey: "servicesPage.case2Title",
      descKey: "servicesPage.case2Desc",
      metrics: [
        { labelKey: "servicesPage.case2m1", value: "1200+" },
        { labelKey: "servicesPage.case2m2", value: "49000+" },
        { labelKey: "servicesPage.case2m3", value: "35%" },
      ],
    },
    {
      titleKey: "servicesPage.case3Title",
      descKey: "servicesPage.case3Desc",
      metrics: [
        { labelKey: "servicesPage.case3m1", value: "+45%" },
        { labelKey: "servicesPage.case3m2", value: "60%" },
        { labelKey: "servicesPage.case3m3", value: "<3s" },
      ],
    },
  ];

  return (
    <>
      <Navbar isDetailPage={true} />
      <ProductSEO
        name={t("servicesPage.seoName")}
        tagline={t("servicesPage.seoTagline")}
        description={t("servicesPage.seoDesc")}
        keywords={["AI Agent Development", "AI Custom Service", "LLM Application", "AI Solution", "Enterprise AI", "Figo Technology"]}
        path="/services"
      />

      <div className="min-h-screen bg-[#0c0c14] text-white pt-32 pb-20">
        <section className="container mb-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t("servicesPage.heroTitle1")}
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t("servicesPage.heroTitle2")}
              </span>
            </h1>
            <p className="text-lg text-white/60 mb-8">{t("servicesPage.heroSubtitle")}</p>
            <button
              onClick={() => setShowWechatModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              {t("servicesPage.bookConsult")}
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        <section className="container mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">{t("servicesPage.processTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-white/60">{t(item.descKey)}</p>
                  <div className="mt-4 text-emerald-400">{STEP_ICONS[idx]}</div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="container mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">{t("servicesPage.techTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">{t(stack.catKey)}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="container mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">{t("servicesPage.casesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map((case_, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">{t(case_.titleKey)}</h3>
                <p className="text-white/60 mb-6">{t(case_.descKey)}</p>
                <div className="space-y-3">
                  {case_.metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-white/60">{t(metric.labelKey)}</span>
                      <span className="text-emerald-400 font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t("servicesPage.ctaTitle")}</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">{t("servicesPage.ctaSubtitle")}</p>
            <button
              onClick={() => setShowWechatModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              {t("servicesPage.ctaButton")}
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        <section className="container mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t("servicesPage.relatedTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/products/figo-engine" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">{t("servicesPage.related1Name")}</h3>
                <p className="text-sm text-white/60">{t("servicesPage.related1Desc")}</p>
              </div>
            </Link>
            <Link href="/products/moss" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">{t("servicesPage.related2Name")}</h3>
                <p className="text-sm text-white/60">{t("servicesPage.related2Desc")}</p>
              </div>
            </Link>
            <Link href="/products/salespark" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">SaleSpark</h3>
                <p className="text-sm text-white/60">{t("servicesPage.related3Desc")}</p>
              </div>
            </Link>
          </div>
        </section>
      </div>

      <WechatQRModal open={showWechatModal} onClose={() => setShowWechatModal(false)} />
      <Footer />
    </>
  );
}
