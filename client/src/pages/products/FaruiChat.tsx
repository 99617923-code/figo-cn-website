/*
 * 「量子棱镜」— 法睿聊 AI法律咨询SaaS系统 产品详情页
 * 基于阿里云通义法睿大模型的多租户法律咨询SaaS平台
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import { useTranslation } from "react-i18next";
import {
  Scale, Code2, Shield, Server, BarChart3, Users,
  Globe, Building2, GraduationCap, Briefcase, Landmark, UserCheck,
  Zap, Brain, Lock, Layers,
  FileText, Plug, Settings, BookOpen,
} from "lucide-react";

export default function FaruiChat() {
  const { t, i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");

  const LEGAL_DOMAINS = [
    { emoji: "📄", name: isEn ? "Contract Disputes" : "合同纠纷" },
    { emoji: "👷", name: isEn ? "Labor Disputes" : "劳动争议" },
    { emoji: "🏠", name: isEn ? "Property Disputes" : "房产纠纷" },
    { emoji: "💍", name: isEn ? "Marriage & Family" : "婚姻家庭" },
    { emoji: "🚗", name: isEn ? "Traffic Accidents" : "交通事故" },
    { emoji: "💡", name: isEn ? "Intellectual Property" : "知识产权" },
    { emoji: "⚖️", name: isEn ? "Criminal Defense" : "刑事辩护" },
    { emoji: "📋", name: isEn ? "General Consultation" : "综合咨询" },
  ];

  return (
    <>
    <ProductSEO
      name={isEn ? "FaruiChat" : "法睿聊"}
      tagline={isEn ? "AI Legal Consultation SaaS System" : "AI法律咨询SaaS系统"}
      description={isEn ? "FaruiChat is a multi-tenant SaaS platform based on Alibaba Cloud's Tongyi Farui large model. Enterprise customers can embed professional AI legal consultation services on their own websites with just one line of JavaScript code. It covers 8 major legal fields including contract disputes and labor disputes, and is fully deployed domestically, ensuring security and compliance." : "法睿聊是基于阿里云通义法睿大模型的多租户SaaS平台，企业客户只需嵌入一行JavaScript代码，即可在自己的网站上拥有专业的AI法律咨询服务。覆盖合同纠纷、劳动争议等8大法律领域，完全国产化部署，安全合规。"}
      keywords={isEn ? ["AI Legal Consultation", "Legal SaaS", "Tongyi Farui", "Intelligent Legal Advisor", "AI Agent Customization", "Legal Consultation System", "Multi-tenant SaaS", "Figo Tech"] : ["AI法律咨询", "法律 SaaS", "通义法睦", "智能法律顾问", "AI智能体定制开发", "法律咨询系统", "法睦聘", "多租户 SaaS", "火鹰科技"]}
      path="/products/farui-chat"
    />
    <ProductDetailLayout
      name={isEn ? "FaruiChat" : "法睿聊"}
      tagline={isEn ? "Empower Your Website with AI Legal Consultation" : "为您的网站赋予 AI 法律咨询能力"}
      heroDescription={isEn ? "A multi-tenant SaaS platform based on Alibaba Cloud's Tongyi Farui large model. Enterprise customers can embed professional AI legal consultation services on their own websites with just one line of JavaScript code. It covers 8 major legal fields including contract disputes, labor disputes, and property disputes, and is fully deployed domestically, ensuring security and compliance." : "基于阿里云通义法睿大模型的多租户 SaaS 平台。企业客户只需嵌入一行 JavaScript 代码，即可在自己的网站上拥有专业的 AI 法律咨询服务。覆盖合同纠纷、劳动争议、房产纠纷等 8 大法律领域，完全国产化部署，安全合规。"}
      gradient="from-blue-500 to-indigo-600"
      gradientColors="rgba(59,130,246,0.5), rgba(79,70,229,0.5)"
      heroIcon={<Scale size={28} className="text-white" />}
      stats={[
        { value: isEn ? "8" : "8大", label: isEn ? "Legal Fields" : "法律领域" },
        { value: isEn ? "1 Line" : "1行", label: isEn ? "Code Embed" : "代码嵌入" },
        { value: "100%", label: isEn ? "Domestic Deployment" : "国产化部署" },
        { value: isEn ? "Multi-tenant" : "多租户", label: isEn ? "SaaS Architecture" : "SaaS架构" },
      ]}
      features={[
        {
          icon: <Brain size={20} className="text-white" />,
          title: isEn ? "Tongyi Farui AI Engine" : "通义法睿AI引擎",
          description: isEn ? "Powered by Alibaba Cloud's Tongyi Farui model, it covers 8 major legal fields such as contract and labor disputes, providing professional and accurate legal advice. Cites legal articles and cases for reliable answers." : "基于阿里云通义法睿大模型，覆盖合同纠纷、劳动争议、房产纠纷等8大法律领域，提供专业精准的法律咨询服务。引用法条、案例，回答专业可靠。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <Code2 size={20} className="text-white" />,
          title: isEn ? "One-Line Code Embedding" : "一行代码嵌入",
          description: isEn ? "Add professional AI legal consultation to your site with a single line of JavaScript. Supports custom themes, welcome messages, and consultation categories for zero-cost, plug-and-play setup." : "只需在网站中添加一行JavaScript代码，即可拥有专业的AI法律咨询功能。支持自定义主题色、欢迎语、咨询类别等，零开发成本即装即用。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <Shield size={20} className="text-white" />,
          title: isEn ? "Secure Isolation Architecture" : "安全隔离架构",
          description: isEn ? "Utilizes an iframe security isolation mechanism with domain whitelist-based multi-tenant authentication to ensure data security and privacy. Each tenant's data is completely isolated." : "采用iframe安全隔离机制，基于域名白名单的多租户授权验证，确保数据安全与隐私保护。每个租户数据完全隔离，互不干扰。",
        },
        {
          icon: <Server size={20} className="text-white" />,
          title: isEn ? "Fully Domestic Deployment" : "完全国产化部署",
          description: isEn ? "Zero overseas dependencies, fully deployed on Alibaba Cloud in China, compliant with regulations like the Data Security Law and Personal Information Protection Law, suitable for government and enterprise clients." : "零海外依赖，全部部署在中国阿里云，符合《数据安全法》《个人信息保护法》等法规要求，适合政企客户使用。",
          badge: isEn ? "Compliant" : "合规",
        },
        {
          icon: <BarChart3 size={20} className="text-white" />,
          title: isEn ? "Usage Statistics & Billing" : "用量统计与计费",
          description: isEn ? "View real-time data on chat counts, token consumption, and cost statistics. Credit-based billing offers flexibility and control—pay only for what you use. Test credits are granted upon approval." : "实时查看聊天次数、Token消耗、成本统计等数据。按积分计费，灵活可控，用多少付多少，审核通过即赠送测试积分。",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: isEn ? "Multi-Tenant SaaS Architecture" : "多租户SaaS架构",
          description: isEn ? "Supports multiple enterprise customers simultaneously, with each tenant independently managing their applications, domains, and data without interference. Centralized admin backend for efficient operation." : "支持多企业客户同时使用，每个租户独立管理应用、域名和数据，互不干扰。统一管理后台，高效运营。",
        },
        {
          icon: <Settings size={20} className="text-white" />,
          title: isEn ? "Tenant Management Portal" : "租户管理门户",
          description: isEn ? "Tenants can self-manage application settings, domain whitelists, credit top-ups, and usage tracking. Admins can approve tenants, manage credits, and view global statistics." : "租户可自主管理应用配置、域名白名单、积分充值、用量查看等。管理员可审核租户、管理积分、查看全局统计。",
        },
        {
          icon: <Plug size={20} className="text-white" />,
          title: isEn ? "4-Step Quick Integration" : "4步快速接入",
          description: isEn ? "Submit application → Platform review → Get embed code → Start using. A simple and efficient process. Get free test credits upon approval to start your zero-cost experience." : "提交入驻申请→平台审核→获取嵌入代码→开始使用。流程简单高效，审核通过即赠送测试积分，零成本体验。",
          badge: isEn ? "Simple" : "简单",
        },
      ]}
      scenarios={[
        {
          title: isEn ? "Law Firm Websites" : "律师事务所官网",
          description: isEn ? "Law firms can embed FaruiChat on their websites, allowing visitors to get initial AI legal advice, filtering qualified leads and reducing the workload of lawyers answering basic questions, thus improving client acquisition efficiency." : "律所在官网嵌入法睿聊，访客可直接获得AI法律初步咨询，筛选有效客户线索，降低律师重复解答基础问题的工作量，提升获客效率。",
          icon: <Landmark size={22} className="text-white" />,
        },
        {
          title: isEn ? "Corporate Legal Compliance" : "企业法务合规",
          description: isEn ? "Companies can embed FaruiChat in their internal portals for employees to consult on legal issues like contract reviews, labor laws, and intellectual property at any time, reducing corporate legal risks and external counsel fees." : "企业在内部门户嵌入法睿聊，员工可随时咨询合同审查、劳动法规、知识产权等法律问题，降低企业法律风险，减少外部法律顾问费用。",
          icon: <Building2 size={22} className="text-white" />,
        },
        {
          title: isEn ? "Legal Education & Training" : "法律教育培训",
          description: isEn ? "Law schools or training institutions can embed FaruiChat into their platforms, allowing students to practice legal case analysis, query laws, and simulate consultations with AI, enhancing learning efficiency and practical skills." : "法学院校或培训机构在平台嵌入法睿聊，学生可通过AI进行法律案例分析练习、法条查询和模拟咨询，提升学习效率和实践能力。",
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: isEn ? "Government Service Platforms" : "政务服务平台",
          description: isEn ? "Government agencies can embed FaruiChat on public service websites to provide citizens with 24/7 legal consultation on livelihood issues such as labor disputes, property disputes, and marriage and family matters." : "政府部门在公共服务网站嵌入法睿聊，为市民提供7×24小时法律咨询服务，涵盖劳动争议、房产纠纷、婚姻家庭等民生法律问题。",
          icon: <Briefcase size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: isEn ? "Tongyi Farui Large Model" : "通义法睿大模型",
          description: isEn ? "Based on Alibaba Cloud's Tongyi Farui model, specifically trained for Chinese legal scenarios, covering core legal systems like the Civil Code, Labor Law, and Company Law. Its answers cite specific legal articles and judicial interpretations, making it far more professional than general-purpose models." : "基于阿里云通义法睿大模型，专为中国法律场景优化训练，覆盖民法典、劳动法、公司法等核心法律体系。回答引用具体法条和司法解释，专业性远超通用大模型。",
          metric: isEn ? "Professional-Grade" : "专业级",
          metricLabel: isEn ? "Legal AI" : "法律AI",
        },
        {
          title: isEn ? "iframe Secure Isolation" : "iframe安全隔离",
          description: isEn ? "Employs iframe sandbox isolation technology, running the widget in a separate, secure environment completely isolated from the host website. A domain whitelist-based authorization mechanism prevents unauthorized embedding and data leakage." : "采用iframe沙箱隔离技术，Widget运行在独立的安全环境中，与宿主网站完全隔离。基于域名白名单的授权验证机制，防止未授权嵌入和数据泄露。",
          metric: isEn ? "Sandbox-Level" : "沙箱级",
          metricLabel: isEn ? "Security Isolation" : "安全隔离",
        },
        {
          title: isEn ? "Multi-Tenant Data Isolation" : "多租户数据隔离",
          description: isEn ? "Each tenant has an independent application ID, domain configuration, and data space, ensuring complete data isolation between tenants. A unified credit-based billing system ensures transparent and controllable usage, supporting flexible plans and top-up options." : "每个租户拥有独立的应用ID、域名配置和数据空间，租户间数据完全隔离。统一的积分计费系统确保用量透明可控，支持灵活的套餐和充值方案。",
          metric: isEn ? "Fully Isolated" : "完全隔离",
          metricLabel: isEn ? "Data Security" : "数据安全",
        },
        {
          title: isEn ? "100% Domestic Tech Stack" : "100%国产化技术栈",
          description: isEn ? "From the AI model to the cloud infrastructure, the entire solution uses domestic technologies with zero overseas dependencies. Deployed in Alibaba Cloud's China regions, it meets compliance and data localization requirements, suitable for the security audits of government and enterprise clients." : "从AI模型到云基础设施全部采用国产化方案，零海外依赖。部署在阿里云中国区域，满足等保合规和数据本地化要求，适合政企客户的安全审查。",
          metric: "100%",
          metricLabel: isEn ? "Localization Rate" : "国产化率",
        },
      ]}
      architectureDescription={isEn ? "FaruiChat uses a multi-tenant SaaS architecture, comprising a tenant management layer, a widget embedding layer, an AI inference layer, and a data statistics layer. The tenant management layer handles enterprise onboarding, application configuration, and domain authorization. The widget embedding layer enables one-line code embedding via secure iframe isolation. The AI inference layer connects to Alibaba Cloud's Tongyi Farui model to provide professional legal consultation. The data statistics layer tracks usage, token consumption, and cost analysis in real-time." : "法睿聊采用多租户SaaS架构设计，核心包括租户管理层、Widget嵌入层、AI推理层和数据统计层。租户管理层负责企业入驻审核、应用配置和域名授权；Widget嵌入层通过iframe安全隔离实现一行代码嵌入；AI推理层对接阿里云通义法睿大模型，提供专业法律咨询能力；数据统计层实时追踪用量、Token消耗和成本分析。"}
    >
      {/* 8大法律咨询领域 */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Legal Domains</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">{isEn ? "Covers 8 Major Legal Consultation Fields" : "覆盖 8 大法律咨询领域"}</h2>
            <p className="mt-4 text-base text-white/50">{isEn ? "Powered by the Tongyi Farui large model, covering common legal consultation scenarios to provide professional and accurate legal advice" : "基于通义法睿大模型，覆盖常见法律咨询场景，提供专业精准的法律建议"}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {LEGAL_DOMAINS.map((domain) => (
              <div
                key={domain.name}
                className="glass-card rounded-xl p-5 text-center hover:border-white/15 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{domain.emoji}</div>
                <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{domain.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 快速接入代码示例 */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Quick Start</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">{isEn ? "4 Steps to Get Started" : "4 步完成接入"}</h2>
            <p className="mt-4 text-base text-white/50">{isEn ? "A few simple steps to empower your website with AI legal consultation capabilities" : "简单几步，让您的网站拥有AI法律咨询能力"}</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6 mb-10">
              {[
                { step: "1", title: isEn ? "Submit Onboarding Application" : "提交入驻申请", desc: isEn ? "Fill in company information, submit the application, and wait for platform review" : "填写企业信息，提交入驻申请，等待平台审核" },
                { step: "2", title: isEn ? "Platform Review" : "平台审核", desc: isEn ? "After admin approval, you'll receive test credits to start your zero-cost experience" : "管理员审核通过后赠送测试积分，零成本开始体验" },
                { step: "3", title: isEn ? "Get Embed Code" : "获取嵌入代码", desc: isEn ? "Log in to the tenant portal, create an application, and get your exclusive JS code snippet" : "登录租户门户，创建应用并获取专属JS代码片段" },
                { step: "4", title: isEn ? "Start Using" : "开始使用", desc: isEn ? "Embed the code into your website to instantly have a professional AI legal advisor" : "将代码嵌入网站，即刻拥有专业的AI法律顾问" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/45">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-white/40">index.html</span>
              </div>
              <pre className="p-5 text-sm text-white/70 overflow-x-auto font-mono leading-relaxed">
{isEn ? `<!-- Embed AI legal consultation with just one line of code -->
<script
  src="https://widget.figo.cn/api/widget/loader.js"
  data-app-id="fc_your_app_id">
</script>` : `<!-- 只需一行代码，即可嵌入AI法律咨询 -->
<script
  src="https://widget.figo.cn/api/widget/loader.js"
  data-app-id="fc_your_app_id">
</script>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </ProductDetailLayout>
    </>
  );
}

