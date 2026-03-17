/*
 * 「量子棱镜」— AI智能报价系统 解决方案落地页
 * 路径: /solutions/ai-quote
 * 定位: 为客户定制开发并私有化部署的 AI 智能报价系统
 * 
 * GEO 优化重点：
 * - 高事实密度：具体数字、行业名称、技术细节
 * - 长尾关键词覆盖：AI智能报价系统定制开发、私有化部署、行业报价系统
 * - 结构化内容：清晰的标题层级、行业场景、交付流程
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import QuoteDemoChat from "@/components/QuoteDemoChat";
import { useTranslation } from "react-i18next";
import {
  Calculator, MessageSquare, FileText, Zap, Globe, Shield,
  Building2, Paintbrush, Megaphone, Factory, ShoppingCart, Stethoscope,
  Brain, BarChart3, Users, Clock,
  Code2, Database, Layers, Lock,
  Server, Settings, Wrench, CheckCircle2, ArrowRight,
  Rocket, HardDrive, Key, RefreshCw,
} from "lucide-react";

export default function AIQuote() {
  const { i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");

  return (
    <>
    <ProductSEO
      name={isEn ? "AI Smart Quoting System - Custom Development" : "AI智能报价系统 - 定制开发"}
      tagline={isEn ? "Custom-Built AI Quoting Solutions with Private Deployment for Every Industry" : "为各行各业定制开发并私有化部署的AI智能报价系统"}
      description={isEn
        ? "Figo Tech provides custom AI smart quoting system development with private deployment. Built on large language models, the system understands customer needs through conversational AI, matches pricing plans intelligently, and generates professional quotes. Fully customized for your industry with complete data sovereignty. 21 years of software development expertise."
        : "火鹰科技为企业定制开发AI智能报价系统，支持私有化部署，数据完全自主可控。基于大语言模型，通过AI对话自动理解客户需求、智能匹配报价方案、实时生成专业报价单。深度适配软件开发、装修建材、广告传媒、工业制造等各行各业。21年软件定制开发经验，已为多家企业成功交付。"
      }
      keywords={isEn
        ? ["AI Smart Quoting System", "Custom Quoting Software Development", "Private Deployment AI Quote", "Industry Quoting System", "AI Agent Custom Development", "Intelligent Pricing System", "Figo Technology"]
        : ["AI智能报价系统定制开发", "智能报价系统私有化部署", "AI报价软件开发", "行业报价系统定制", "智能报价解决方案", "AI询价系统开发", "报价系统私有化", "火鹰科技", "广州AI开发公司"]
      }
      path="/solutions/ai-quote"
    />
    <ProductDetailLayout
      breadcrumbCategory={{ label: isEn ? "Solutions" : "解决方案", href: "/#solutions" }}
      heroBackgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663267704571/XAMAdpWLjiWEUWvDujnjHu/ai-quote-hero-bg-VMv8jsCAAoRfRqSfANKm5L.webp"
      name={isEn ? "AI Smart Quoting System" : "AI 智能报价系统"}
      tagline={isEn ? "Custom-Built for Your Industry, Deployed on Your Servers" : "按行业深度定制，部署在您自己的服务器上"}
      heroDescription={isEn
        ? "Figo Tech provides end-to-end custom development of AI smart quoting systems with private deployment. Based on large language models, the system understands customer needs through natural language conversation, intelligently matches pricing plans, and generates professional quotes with PDF export. Every system is deeply customized for your specific industry — your pricing rules, your knowledge base, your brand. Data stays on your servers, fully under your control. With 21 years of software development expertise and 5000+ delivered projects, we build quoting systems that truly fit your business."
        : "火鹰科技为企业提供 AI 智能报价系统的全流程定制开发与私有化部署服务。基于大语言模型，系统通过自然语言对话自动理解客户需求、智能匹配报价方案、实时生成专业报价单并导出 PDF。每套系统都针对您的行业深度定制——您的定价规则、您的知识库、您的品牌。数据部署在您自己的服务器上，完全自主可控。21年软件定制开发经验，5000+ 项目成功交付，打造真正适合您业务的智能报价系统。"
      }
      gradient="from-amber-500 to-orange-500"
      gradientColors="rgba(245,158,11,0.5), rgba(249,115,22,0.5)"
      heroIcon={<Calculator size={28} className="text-white" />}
      stats={[
        { value: isEn ? "Private" : "私有化", label: isEn ? "Deployment" : "独立部署" },
        { value: isEn ? "Custom" : "深度定制", label: isEn ? "For Your Industry" : "适配行业" },
        { value: isEn ? "Your Data" : "数据自主", label: isEn ? "Full Control" : "完全可控" },
        { value: "21+", label: isEn ? "Years Experience" : "年开发经验" },
      ]}
      features={[
        {
          icon: <MessageSquare size={20} className="text-white" />,
          title: isEn ? "Conversational AI Quoting" : "AI 对话式智能报价",
          description: isEn
            ? "Customers describe their needs in natural language, and the AI automatically understands requirements, asks clarifying questions, and generates accurate quotes through multi-turn dialogue. No forms to fill, no waiting for callbacks. Like talking to an experienced sales consultant."
            : "客户用自然语言描述需求，AI 自动理解需求要点、追问关键细节、通过多轮对话生成精准报价。无需填写复杂表单，无需等待人工回电。就像和一位经验丰富的销售顾问对话一样自然。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <Brain size={20} className="text-white" />,
          title: isEn ? "Intelligent Requirement Analysis" : "智能需求分析引擎",
          description: isEn
            ? "Based on large language model understanding, automatically extracts key dimensions from customer descriptions: project scope, technical complexity, timeline requirements, budget range, etc. Structured analysis replaces manual interpretation, ensuring no requirement detail is missed."
            : "基于大语言模型的深度理解能力，自动从客户描述中提取关键维度：项目范围、技术复杂度、工期要求、预算区间等。结构化分析替代人工判断，确保不遗漏任何需求细节。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <FileText size={20} className="text-white" />,
          title: isEn ? "Auto Quote Generation" : "自动生成专业报价单",
          description: isEn
            ? "AI automatically generates professional quotes including project breakdown, pricing details, timeline estimates, and terms. Supports PDF export with your enterprise branding and custom templates. Ready for direct client presentation."
            : "AI 自动生成包含项目拆解、费用明细、工期估算、服务条款的专业报价单。支持 PDF 导出，完全使用您企业的品牌标识和自定义模板。报价文档专业规范，可直接发送给客户决策。",
        },
        {
          icon: <Database size={20} className="text-white" />,
          title: isEn ? "Industry Knowledge Base" : "行业专属知识库",
          description: isEn
            ? "We build a custom knowledge base tailored to your industry: product catalogs, pricing rules, discount policies, material costs, labor rates, etc. The AI quotes based on your actual business data, not generic estimates. Knowledge base supports continuous updates."
            : "我们为您的行业量身搭建专属知识库：产品目录、定价规则、折扣策略、材料成本、人工费率等。AI 基于您企业的真实业务数据进行报价，而非泛泛估算。知识库支持持续更新迭代。",
        },
        {
          icon: <BarChart3 size={20} className="text-white" />,
          title: isEn ? "Lead Data Analytics" : "线索数据沉淀分析",
          description: isEn
            ? "Every inquiry conversation is automatically recorded and analyzed: customer intent level, budget range, project type, conversion probability. Build your own customer data asset and optimize sales follow-up strategy."
            : "每一次询价对话自动记录和分析：客户意向度评估、预算区间判断、项目类型分类、转化概率预测。沉淀企业自有客户数据资产，优化销售跟进策略。",
        },
        {
          icon: <Server size={20} className="text-white" />,
          title: isEn ? "Private Deployment" : "私有化独立部署",
          description: isEn
            ? "The entire system is deployed on your own servers — cloud or on-premise. All data, conversations, and business logic stay within your infrastructure. No third-party dependencies, no data leakage risk. Full operational autonomy."
            : "整套系统部署在您自己的服务器上——云服务器或本地机房均可。所有数据、对话记录、业务逻辑完全在您的基础设施内运行。无第三方依赖，无数据泄露风险，完全自主运营。",
          badge: isEn ? "Key" : "关键",
        },
        {
          icon: <Settings size={20} className="text-white" />,
          title: isEn ? "Visual Admin Dashboard" : "可视化管理后台",
          description: isEn
            ? "A comprehensive admin dashboard for managing pricing rules, knowledge base, conversation templates, and analytics. Non-technical staff can configure and update the system without coding. Full control over your quoting logic."
            : "完善的管理后台，用于管理定价规则、知识库、对话模板和数据分析。非技术人员也能通过可视化界面配置和更新系统，无需编码。完全掌控报价逻辑。",
        },
        {
          icon: <Shield size={20} className="text-white" />,
          title: isEn ? "Enterprise Security" : "企业级安全保障",
          description: isEn
            ? "TLS 1.3 encrypted transmission, AES-256 data storage encryption, role-based access control. Private deployment ensures all sensitive business data — pricing strategies, customer information, cost structures — never leaves your network."
            : "TLS 1.3 加密传输，AES-256 数据存储加密，基于角色的访问控制。私有化部署确保所有敏感商业数据——定价策略、客户信息、成本结构——永远不会离开您的网络。",
        },
      ]}
      scenarios={[
        {
          title: isEn ? "Software Development" : "软件定制开发",
          description: isEn
            ? "Customers describe software needs, AI analyzes functional modules, technical complexity, and development workload, generating detailed quotes with module breakdown, timeline, and team configuration. Figo Tech has deployed this for its own business as a proven case."
            : "客户描述软件需求，AI 自动分析功能模块、技术复杂度、开发工作量，生成包含模块拆解、工期规划、团队配置的详细报价单。火鹰科技已在自身业务中实际应用验证。",
          icon: <Code2 size={22} className="text-white" />,
        },
        {
          title: isEn ? "Renovation & Construction" : "装修建材行业",
          description: isEn
            ? "Customers input room dimensions and style preferences, AI calculates material quantities, labor costs, and generates itemized renovation quotes. Supports material brand and grade selection with transparent, traceable pricing."
            : "客户输入户型面积、装修风格偏好，AI 自动计算材料用量、人工费用，生成分项明细的装修报价单。支持材料品牌和档次选择，报价透明可追溯。",
          icon: <Paintbrush size={22} className="text-white" />,
        },
        {
          title: isEn ? "Advertising & Media" : "广告传媒行业",
          description: isEn
            ? "Clients describe campaign needs, AI analyzes media channels, creative requirements, and production costs to generate comprehensive advertising quotes with ROI projections."
            : "客户描述推广需求，AI 分析投放渠道、创意制作、物料生产等成本，生成包含 ROI 预估的综合广告方案报价。支持品牌策划、视频制作、新媒体运营等细分场景。",
          icon: <Megaphone size={22} className="text-white" />,
        },
        {
          title: isEn ? "Manufacturing" : "工业制造行业",
          description: isEn
            ? "Customers specify product specifications, quantities, and materials. AI calculates raw material costs, processing fees, mold costs, and logistics to generate production quotes with BOM matching."
            : "客户提供产品规格、数量、材质要求，AI 计算原材料成本、加工费用、模具费用、物流成本，生成生产报价单。支持 BOM 清单自动匹配和批量折扣计算。",
          icon: <Factory size={22} className="text-white" />,
        },
        {
          title: isEn ? "E-commerce & Retail" : "电商零售行业",
          description: isEn
            ? "Supports custom product quoting, bulk order pricing, and distributor tiered pricing. AI automatically applies discount rules, calculates logistics, and generates orders for B2B and B2C scenarios."
            : "支持定制商品报价、批量采购定价、分销商阶梯报价。AI 自动应用折扣规则、计算物流费用、生成订单。适用于 B2B 批发和 B2C 定制商品场景。",
          icon: <ShoppingCart size={22} className="text-white" />,
        },
        {
          title: isEn ? "Healthcare" : "医疗健康行业",
          description: isEn
            ? "Patients describe symptoms or service needs, AI recommends treatment plans and generates cost estimates. Applicable to dental clinics, medical aesthetics, health checkups, with package and personalized pricing."
            : "患者描述症状或服务需求，AI 推荐诊疗方案并生成费用预估。适用于口腔诊所、医美机构、体检中心等，支持套餐组合和个性化方案定价。",
          icon: <Stethoscope size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: isEn ? "LLM-Powered Understanding" : "大模型深度理解引擎",
          description: isEn
            ? "Built on mainstream large language models (DeepSeek, GPT-4o, Claude, Qwen, etc.) via FigoAPI unified gateway. The AI truly understands customer intent rather than simple keyword matching, achieving 95%+ requirement understanding accuracy. We select and fine-tune the optimal model for your industry."
            : "基于主流大语言模型（DeepSeek、GPT-4o、Claude、通义千问等），通过火鹰引擎 FigoAPI 统一网关接入。AI 真正理解客户意图而非简单关键词匹配，需求理解准确率达 95% 以上。我们为您的行业选择并调优最适合的模型。",
          metric: "95%+",
          metricLabel: isEn ? "Understanding Accuracy" : "需求理解准确率",
        },
        {
          title: isEn ? "Configurable Pricing Engine" : "可配置定价引擎",
          description: isEn
            ? "Flexible pricing rule engine supports fixed pricing, tiered pricing, formula-based pricing, and AI-estimated pricing. Enterprises configure pricing rules through a visual backend without coding. Supports multi-currency, multi-tax, and multi-discount strategies."
            : "灵活的定价规则引擎，支持固定定价、阶梯定价、公式定价、AI 估算定价等多种模式。企业可通过可视化后台配置定价规则，无需编码。支持多币种、多税率、多折扣策略。",
          metric: isEn ? "4 Modes" : "4种模式",
          metricLabel: isEn ? "Pricing Strategies" : "定价策略",
        },
        {
          title: isEn ? "Real-Time PDF Generation" : "实时 PDF 报价单生成",
          description: isEn
            ? "Automatically generates professional PDF quotes with your enterprise branding, detailed line items, terms and conditions. Generation time under 3 seconds. Fully customizable templates matching your corporate identity."
            : "自动生成带您企业品牌标识的专业 PDF 报价单，包含详细的项目拆解、费用明细、服务条款。生成时间 3 秒内。模板完全按照您的企业 VI 定制设计。",
          metric: "<3s",
          metricLabel: isEn ? "Generation Time" : "报价单生成",
        },
        {
          title: isEn ? "Private Server Architecture" : "私有化服务器架构",
          description: isEn
            ? "Microservices architecture deployed entirely on your infrastructure. Supports Docker containerized deployment, Kubernetes orchestration, or traditional server deployment. All data stored in your own database with full backup and disaster recovery capabilities."
            : "微服务架构完整部署在您的基础设施上。支持 Docker 容器化部署、Kubernetes 编排或传统服务器部署。所有数据存储在您自己的数据库中，具备完整的备份和灾备能力。",
          metric: isEn ? "100%" : "100%",
          metricLabel: isEn ? "Data Sovereignty" : "数据自主可控",
        },
      ]}
      architectureDescription={isEn
        ? "The AI Smart Quoting System uses a microservices architecture with four core modules: Conversational AI Engine (multi-turn dialogue management, intent recognition, requirement extraction), Pricing Engine (rule-based and AI-estimated pricing, knowledge base matching), Document Generator (real-time PDF generation, custom templates, multi-language support), and Analytics Platform (lead scoring, conversion tracking, data visualization). The entire system is deployed on the client's own servers, with all LLM calls routed through configurable API gateways. Supports Docker, Kubernetes, or bare-metal deployment."
        : "AI 智能报价系统采用微服务架构，核心包含四大模块：对话 AI 引擎（多轮对话管理、意图识别、需求提取）、定价引擎（规则定价与 AI 估算、知识库匹配）、文档生成器（实时 PDF 生成、自定义模板、多语言支持）、数据分析平台（线索评分、转化追踪、数据可视化）。整套系统部署在客户自有服务器上，所有大模型调用通过可配置的 API 网关路由。支持 Docker、Kubernetes 或裸机部署。"
      }
    >
      {/* 定制交付流程区域 */}
      <section className="py-20 lg:py-28 bg-[#0c0c14] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06]"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.5), transparent 60%)" }} />
        </div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3 block">
              {isEn ? "DELIVERY PROCESS" : "交付流程"}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {isEn ? "From Requirement to Private Deployment" : "从需求到私有化上线，全流程交付"}
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              {isEn
                ? "Figo Tech provides end-to-end custom development services. We deeply understand your industry, build a system tailored to your business, and deploy it on your own infrastructure."
                : "火鹰科技提供端到端的定制开发服务。深入理解您的行业，构建完全适配您业务的系统，部署到您自己的基础设施上。"
              }
            </p>
          </div>

          {/* 4步交付流程 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: <MessageSquare size={24} className="text-amber-400" />,
                title: isEn ? "Requirement Deep Dive" : "需求深度调研",
                desc: isEn
                  ? "Our team conducts in-depth analysis of your industry, pricing logic, customer interaction patterns, and business workflows to define the system blueprint."
                  : "我们的团队深入调研您的行业特点、定价逻辑、客户交互模式和业务流程，明确系统蓝图。",
                detail: isEn ? "1-2 weeks" : "1-2 周",
              },
              {
                step: "02",
                icon: <Wrench size={24} className="text-amber-400" />,
                title: isEn ? "Custom Development" : "定制开发",
                desc: isEn
                  ? "Build the AI dialogue engine, pricing engine, knowledge base, and admin dashboard — all customized for your specific industry and business rules."
                  : "搭建 AI 对话引擎、定价引擎、行业知识库、管理后台——全部按照您的行业和业务规则定制开发。",
                detail: isEn ? "4-8 weeks" : "4-8 周",
              },
              {
                step: "03",
                icon: <Server size={24} className="text-amber-400" />,
                title: isEn ? "Private Deployment" : "私有化部署",
                desc: isEn
                  ? "Deploy the complete system on your servers (Alibaba Cloud, Tencent Cloud, AWS, or on-premise). Configure security, backup, and monitoring."
                  : "将完整系统部署到您的服务器上（阿里云、腾讯云、AWS 或本地机房）。配置安全策略、数据备份和运行监控。",
                detail: isEn ? "1 week" : "1 周",
              },
              {
                step: "04",
                icon: <RefreshCw size={24} className="text-amber-400" />,
                title: isEn ? "Training & Iteration" : "培训与持续迭代",
                desc: isEn
                  ? "Train your team to manage the system independently. Provide ongoing technical support, knowledge base updates, and feature iterations as your business evolves."
                  : "培训您的团队独立管理系统。提供持续的技术支持、知识库更新和功能迭代，随业务发展不断优化。",
                detail: isEn ? "Ongoing" : "持续服务",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 h-full hover:border-amber-500/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-bold text-amber-500/20 font-mono">{item.step}</span>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{item.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                    <Clock size={12} className="text-amber-400" />
                    <span className="text-xs text-amber-400 font-medium">{item.detail}</span>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight size={16} className="text-amber-500/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 为什么选择私有化部署 */}
      <section className="py-20 lg:py-28 bg-[#0a0a16] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3 block">
              {isEn ? "WHY PRIVATE DEPLOYMENT" : "为什么选择私有化部署"}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {isEn ? "Your System, Your Data, Your Rules" : "您的系统，您的数据，您的规则"}
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              {isEn
                ? "Unlike SaaS solutions where your data lives on someone else's servers, a privately deployed system gives you complete control over every aspect."
                : "与 SaaS 方案不同，私有化部署让您对系统的每个方面拥有完全的掌控权。您的商业数据、定价策略、客户信息，全部在您自己的服务器上。"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <HardDrive size={22} className="text-amber-400" />,
                title: isEn ? "Complete Data Sovereignty" : "数据完全自主",
                desc: isEn
                  ? "All customer conversations, pricing data, and business intelligence stored exclusively on your infrastructure. Zero data exposure to third parties."
                  : "所有客户对话、定价数据和商业智能完全存储在您的基础设施上。零数据暴露给第三方。",
              },
              {
                icon: <Key size={22} className="text-amber-400" />,
                title: isEn ? "No Vendor Lock-in" : "无供应商锁定",
                desc: isEn
                  ? "You own the complete source code and deployment. No recurring SaaS fees, no dependency on external services. Your system runs independently."
                  : "您拥有完整的源代码和部署。无需持续支付 SaaS 费用，不依赖外部服务。您的系统完全独立运行。",
              },
              {
                icon: <Settings size={22} className="text-amber-400" />,
                title: isEn ? "Unlimited Customization" : "无限定制空间",
                desc: isEn
                  ? "Every feature, workflow, and UI element can be customized to match your exact business needs. No compromises, no one-size-fits-all limitations."
                  : "每个功能、工作流和界面元素都可以按照您的确切业务需求定制。没有妥协，没有'一刀切'的限制。",
              },
              {
                icon: <Shield size={22} className="text-amber-400" />,
                title: isEn ? "Compliance Ready" : "合规无忧",
                desc: isEn
                  ? "Meet industry-specific compliance requirements (GDPR, data localization, etc.) by keeping all data within your controlled environment."
                  : "通过将所有数据保留在您的受控环境中，轻松满足行业特定的合规要求（数据本地化、等保等）。",
              },
              {
                icon: <Zap size={22} className="text-amber-400" />,
                title: isEn ? "Performance Optimization" : "性能可优化",
                desc: isEn
                  ? "Optimize server resources, caching strategies, and model selection based on your actual usage patterns. No shared resources, no performance degradation."
                  : "根据实际使用模式优化服务器资源、缓存策略和模型选择。无共享资源，无性能降级。",
              },
              {
                icon: <RefreshCw size={22} className="text-amber-400" />,
                title: isEn ? "Independent Upgrade Control" : "独立升级控制",
                desc: isEn
                  ? "Upgrade on your schedule, not the vendor's. Test new features in staging before production. Full control over your system's evolution."
                  : "按照您的节奏升级，而非供应商的。在生产环境之前在测试环境验证新功能。完全掌控系统演进。",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-amber-500/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 模拟交互演示区域 - 展示定制系统的效果 */}
      <section className="py-20 lg:py-28 bg-[#0c0c14] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3 block">
              {isEn ? "INTERACTIVE DEMO" : "交互演示"}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {isEn ? "See How Your Custom System Could Work" : "看看您的定制系统将如何工作"}
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              {isEn
                ? "Below is a simulated conversation showing how a custom AI quoting system handles a renovation industry inquiry — from understanding needs to generating a detailed quote with module breakdown."
                : "以下是一个模拟对话演示，展示定制化 AI 智能报价系统如何处理装修行业的询价——从理解需求到生成包含模块拆解的详细报价单。每套系统都将根据您的行业特点深度定制。"
              }
            </p>
          </div>

          <QuoteDemoChat isEn={isEn} />

          <p className="text-center text-xs text-white/30 mt-8">
            {isEn
              ? "* This is a simulated demo showing the system's capabilities. The actual system will be customized for your specific industry and business rules."
              : "※ 以上为模拟演示，展示系统能力。实际系统将根据您的行业和业务规则深度定制。"
            }
          </p>
        </div>
      </section>
    </ProductDetailLayout>
    </>
  );
}
