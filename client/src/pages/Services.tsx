/*
 * 「量子棱镜」— AI智能体定制开发服务页面
 * 详细介绍服务流程、技术栈、成功案例
 */
import { useEffect, useState } from "react";
import { CheckCircle2, Code2, Zap, Shield, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import WechatQRModal from "@/components/WechatQRModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROCESS_STEPS = [
  {
    step: "1",
    title: "需求评估",
    description: "深入了解企业业务流程、痛点和目标，制定AI智能体解决方案",
    icon: <Users size={24} />,
  },
  {
    step: "2",
    title: "方案设计",
    description: "设计AI智能体架构、交互流程、集成方案，提供详细技术方案文档",
    icon: <Code2 size={24} />,
  },
  {
    step: "3",
    title: "开发实施",
    description: "基于大模型能力进行快速开发，支持多轮迭代优化，确保质量",
    icon: <Zap size={24} />,
  },
  {
    step: "4",
    title: "测试部署",
    description: "完整的功能测试、性能测试、安全测试，支持私有化部署",
    icon: <Shield size={24} />,
  },
  {
    step: "5",
    title: "上线运维",
    description: "7×24小时技术支持、定期巡检、功能迭代升级、持续优化",
    icon: <TrendingUp size={24} />,
  },
];

const TECH_STACK = [
  {
    category: "大模型",
    items: ["OpenAI GPT-4o", "Claude 3.5", "Gemini Pro", "DeepSeek V3", "通义千问", "文心一言"],
  },
  {
    category: "开发框架",
    items: ["LangChain", "LlamaIndex", "FastAPI", "Node.js", "React", "Vue"],
  },
  {
    category: "数据库",
    items: ["PostgreSQL", "MongoDB", "Redis", "Milvus", "Pinecone", "Weaviate"],
  },
  {
    category: "部署方案",
    items: ["阿里云", "AWS", "Azure", "私有化部署", "混合云", "边缘计算"],
  },
];

const SUCCESS_CASES = [
  {
    title: "AI法律咨询系统",
    description: "为法律服务企业打造的AI法律咨询系统，覆盖8大法律领域，已服务100+企业客户",
    metrics: [
      { label: "咨询准确率", value: "98%" },
      { label: "日均咨询", value: "5000+" },
      { label: "客户满意度", value: "4.8/5" },
    ],
  },
  {
    title: "AI销售训练平台",
    description: "企业级AI销售训练平台，通过AI虚拟客户进行沉浸式训练，已帮助1000+销售团队提升业绩",
    metrics: [
      { label: "活跃用户", value: "1200+" },
      { label: "训练场次", value: "49000+" },
      { label: "平均提升", value: "35%" },
    ],
  },
  {
    title: "数字人复刻系统",
    description: "为企业创始人打造的数字分身，7×24小时在线接待客户，自动生成方案，已帮助50+企业提升获客效率",
    metrics: [
      { label: "客户转化", value: "+45%" },
      { label: "成本节省", value: "60%" },
      { label: "响应速度", value: "<3s" },
    ],
  },
];

export default function Services() {
  const [showWechatModal, setShowWechatModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar isDetailPage={true} />
      <ProductSEO
        name="AI智能体定制开发服务"
        tagline="从需求评估到上线运维的完整解决方案"
        description="火鹰科技提供专业的AI智能体定制开发服务，涵盖需求评估、方案设计、开发实施、测试部署、上线运维全流程。支持20+主流大模型，提供私有化部署方案，已成功交付5000+项目。"
        keywords={["AI智能体定制开发", "AI定制服务", "大模型应用开发", "AI解决方案", "企业级AI开发", "私有化部署", "火鹰科技"]}
        path="/services"
      />

      <div className="min-h-screen bg-[#0c0c14] text-white pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mb-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              AI智能体
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                定制开发服务
              </span>
            </h1>
            <p className="text-lg text-white/60 mb-8">
              从需求评估到上线运维，火鹰科技为企业提供完整的AI智能体定制开发解决方案。
              <br />
              21年软件开发经验，已成功交付5000+项目。
            </p>
            <button
              onClick={() => setShowWechatModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              预约技术咨询
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* Service Process */}
        <section className="container mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">服务流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                  <div className="mt-4 text-emerald-400">{item.icon}</div>
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="container mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">技术栈</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((stack, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">{stack.category}</h3>
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

        {/* Success Cases */}
        <section className="container mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUCCESS_CASES.map((case_, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">{case_.title}</h3>
                <p className="text-white/60 mb-6">{case_.description}</p>
                <div className="space-y-3">
                  {case_.metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-white/60">{metric.label}</span>
                      <span className="text-emerald-400 font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container">
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">准备好开启AI智能体之旅了吗？</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              联系我们的技术团队，获取免费的需求评估和方案报价。我们将为您量身打造最适合的AI智能体解决方案。
            </p>
            <button
              onClick={() => setShowWechatModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              立即咨询
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* Related Products */}
        <section className="container mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">相关产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/products/figo-engine" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">火鹰引擎 FigoAPI</h3>
                <p className="text-sm text-white/60">企业级大模型API管理平台</p>
              </div>
            </Link>
            <Link href="/products/moss" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">火鹰数字人复刻系统</h3>
                <p className="text-sm text-white/60">数字人复刻与声音克隆</p>
              </div>
            </Link>
            <Link href="/products/salespark" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">SaleSpark</h3>
                <p className="text-sm text-white/60">AI销售训练平台</p>
              </div>
            </Link>
          </div>
        </section>
      </div>

      <WechatQRModal
        open={showWechatModal}
        onClose={() => setShowWechatModal(false)}
        title="预约技术咨询"
        subtitle="扫码添加企业微信，获取一对一专属咨询服务"
      />
      <Footer />
    </>
  );
}
