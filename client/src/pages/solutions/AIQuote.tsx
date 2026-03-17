/*
 * 「量子棱镜」— AI智能报价系统 解决方案落地页
 * 路径: /solutions/ai-quote
 * 
 * GEO 优化重点：
 * - 高事实密度：具体数字、行业名称、技术细节
 * - 长尾关键词覆盖：AI智能报价系统、智能报价软件、AI自动报价
 * - 结构化内容：清晰的标题层级、FAQ、行业场景
 * - 真实案例：以火鹰科技官网 Widget 为实际案例
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import { useTranslation } from "react-i18next";
import {
  Calculator, MessageSquare, FileText, Zap, Globe, Shield,
  Building2, Paintbrush, Megaphone, Factory, ShoppingCart, Stethoscope,
  Brain, BarChart3, Users, Clock,
  Code2, Database, Layers, Lock,
} from "lucide-react";

export default function AIQuote() {
  const { i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");

  return (
    <>
    <ProductSEO
      name={isEn ? "AI Smart Quoting System" : "AI智能报价系统"}
      tagline={isEn ? "AI-Powered Intelligent Quoting Solution for All Industries" : "适用各行各业的AI智能报价解决方案"}
      description={isEn
        ? "Figo Tech's AI Smart Quoting System uses large language models to automatically understand customer needs through conversational AI, intelligently match pricing plans, and generate professional quotes in real-time. Applicable to software development, renovation, advertising, manufacturing and more. Boost quoting efficiency by 10x. One line of code to embed."
        : "火鹰科技AI智能报价系统，基于大语言模型，通过AI对话自动理解客户需求、智能匹配报价方案、实时生成专业报价单。适用于软件开发、装修建材、广告传媒、工业制造、电商零售、医疗健康等各行各业。一行代码嵌入官网，报价效率提升10倍，线索转化率提升300%。火鹰科技自研产品，已在figo.cn官网实际部署运行。"
      }
      keywords={isEn
        ? ["AI Smart Quoting System", "Intelligent Pricing Software", "AI Quote Generator", "Automated Quoting Solution", "AI Agent Custom Development", "Smart Pricing System", "Conversational AI Quote", "Figo Technology"]
        : ["AI智能报价系统", "智能报价软件", "AI自动报价", "智能报价解决方案", "AI报价机器人", "在线智能报价", "AI询价系统", "智能报价系统定制开发", "AI对话报价", "火鹰科技", "广州AI开发公司"]
      }
      path="/solutions/ai-quote"
    />
    <ProductDetailLayout
      name={isEn ? "AI Smart Quote" : "AI 智能报价系统"}
      tagline={isEn ? "AI-Powered Intelligent Quoting Solution" : "让每一次报价都精准、专业、高效"}
      heroDescription={isEn
        ? "An AI-powered intelligent quoting system based on large language models. Through natural language conversation, it automatically understands customer needs, intelligently matches pricing plans, and generates professional quotes in real-time. Applicable to software development, renovation, advertising, manufacturing, and all industries. One line of JavaScript code to embed into any website. Already deployed and running on figo.cn."
        : "基于大语言模型的 AI 智能报价系统解决方案。通过自然语言对话，自动理解客户需求、智能匹配报价方案、实时生成专业报价单并导出 PDF。适用于软件开发、装修建材、广告传媒、工业制造等各行各业。一行 JavaScript 代码嵌入任意网站，7×24 小时自动接待客户询价。火鹰科技自研产品，已在 figo.cn 官网实际部署运行。"
      }
      gradient="from-amber-500 to-orange-500"
      gradientColors="rgba(245,158,11,0.5), rgba(249,115,22,0.5)"
      heroIcon={<Calculator size={28} className="text-white" />}
      stats={[
        { value: "10x", label: isEn ? "Quoting Efficiency" : "报价效率提升" },
        { value: "7×24h", label: isEn ? "Auto Service" : "自动接待询价" },
        { value: isEn ? "All Industries" : "全行业", label: isEn ? "Applicable" : "适用覆盖" },
        { value: isEn ? "1 Line" : "一行代码", label: isEn ? "To Embed" : "即可嵌入" },
      ]}
      features={[
        {
          icon: <MessageSquare size={20} className="text-white" />,
          title: isEn ? "Conversational AI Quoting" : "AI 对话式智能报价",
          description: isEn
            ? "Customers describe their needs in natural language, and the AI automatically understands requirements, asks clarifying questions, and generates accurate quotes through multi-turn dialogue. No forms to fill, no waiting for callbacks."
            : "客户用自然语言描述需求，AI 自动理解需求要点、追问关键细节、通过多轮对话生成精准报价。无需填写复杂表单，无需等待人工回电。就像和一位经验丰富的销售顾问对话一样自然。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <Brain size={20} className="text-white" />,
          title: isEn ? "Intelligent Requirement Analysis" : "智能需求分析引擎",
          description: isEn
            ? "Based on large language model understanding, automatically extracts key dimensions from customer descriptions: project scope, technical complexity, timeline requirements, budget range, etc. Structured analysis replaces manual interpretation."
            : "基于大语言模型的深度理解能力，自动从客户描述中提取关键维度：项目范围、技术复杂度、工期要求、预算区间等。结构化分析替代人工判断，确保不遗漏任何需求细节。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <FileText size={20} className="text-white" />,
          title: isEn ? "Auto Quote Generation" : "自动生成专业报价单",
          description: isEn
            ? "AI automatically generates professional quotes including project breakdown, pricing details, timeline estimates, and terms. Supports PDF export with custom branding. Quote documents are professional and ready for client presentation."
            : "AI 自动生成包含项目拆解、费用明细、工期估算、服务条款的专业报价单。支持 PDF 导出，可自定义企业品牌和模板。报价文档专业规范，可直接发送给客户决策。",
        },
        {
          icon: <Database size={20} className="text-white" />,
          title: isEn ? "Industry Knowledge Base" : "行业知识库配置",
          description: isEn
            ? "Supports custom industry knowledge bases: product catalogs, pricing rules, discount policies, material costs, labor rates, etc. The AI quotes based on your actual business data, not generic estimates."
            : "支持配置行业专属知识库：产品目录、定价规则、折扣策略、材料成本、人工费率等。AI 基于企业真实业务数据进行报价，而非泛泛估算。知识库支持持续更新迭代。",
        },
        {
          icon: <BarChart3 size={20} className="text-white" />,
          title: isEn ? "Lead Data Analytics" : "线索数据沉淀分析",
          description: isEn
            ? "Every inquiry conversation is automatically recorded and analyzed: customer intent level, budget range, project type, conversion probability. Build a customer data asset and optimize sales follow-up strategy."
            : "每一次询价对话自动记录和分析：客户意向度评估、预算区间判断、项目类型分类、转化概率预测。沉淀客户数据资产，优化销售跟进策略。",
        },
        {
          icon: <Code2 size={20} className="text-white" />,
          title: isEn ? "One-Line Embed" : "一行代码嵌入",
          description: isEn
            ? "Just one line of JavaScript code to embed the AI quoting widget into any website. No server deployment needed, no complex integration. Compatible with all mainstream website builders and CMS platforms."
            : "仅需一行 JavaScript 代码，即可将 AI 报价 Widget 嵌入任意网站。无需服务器部署，无需复杂集成。兼容 WordPress、Shopify、自建站等所有主流建站平台。",
          badge: isEn ? "Easy" : "便捷",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: isEn ? "Multi-Tenant SaaS" : "多租户 SaaS 架构",
          description: isEn
            ? "Multi-tenant architecture supports serving multiple enterprise customers simultaneously. Each tenant has independent knowledge base, branding, and data isolation. Supports both SaaS subscription and private deployment."
            : "多租户架构支持同时服务多家企业客户。每个租户拥有独立的知识库、品牌定制和数据隔离。支持 SaaS 订阅和私有化部署两种模式。",
        },
        {
          icon: <Shield size={20} className="text-white" />,
          title: isEn ? "Enterprise Security" : "企业级安全保障",
          description: isEn
            ? "TLS 1.3 encrypted transmission, AES-256 data storage encryption, multi-tenant data isolation. Supports private deployment on customer's own servers for complete data sovereignty."
            : "TLS 1.3 加密传输，AES-256 数据存储加密，多租户数据完全隔离。支持私有化部署到客户自有服务器，数据完全自主可控。",
        },
      ]}
      scenarios={[
        {
          title: isEn ? "Software Development" : "软件定制开发",
          description: isEn
            ? "Customers describe their software needs, AI automatically analyzes functional modules, technical complexity, and development workload, generating detailed quotes with module breakdown, timeline, and team configuration. Already deployed on figo.cn as a live demo."
            : "客户描述软件需求，AI 自动分析功能模块、技术复杂度、开发工作量，生成包含模块拆解、工期规划、团队配置的详细报价单。火鹰科技官网 figo.cn 已实际部署运行，可直接体验。",
          icon: <Code2 size={22} className="text-white" />,
        },
        {
          title: isEn ? "Renovation & Construction" : "装修建材行业",
          description: isEn
            ? "Customers input room dimensions and style preferences, AI automatically calculates material quantities, labor costs, and generates itemized renovation quotes. Supports material brand and grade selection."
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
            ? "Customers specify product specifications, quantities, and materials. AI calculates raw material costs, processing fees, mold costs, and logistics to generate production quotes."
            : "客户提供产品规格、数量、材质要求，AI 计算原材料成本、加工费用、模具费用、物流成本，生成生产报价单。支持 BOM 清单自动匹配和批量折扣计算。",
          icon: <Factory size={22} className="text-white" />,
        },
        {
          title: isEn ? "E-commerce & Retail" : "电商零售行业",
          description: isEn
            ? "Supports custom product quoting, bulk order pricing, and distributor tiered pricing. AI automatically applies discount rules and generates orders."
            : "支持定制商品报价、批量采购定价、分销商阶梯报价。AI 自动应用折扣规则、计算物流费用、生成订单。适用于 B2B 批发和 B2C 定制商品场景。",
          icon: <ShoppingCart size={22} className="text-white" />,
        },
        {
          title: isEn ? "Healthcare" : "医疗健康行业",
          description: isEn
            ? "Patients describe symptoms or service needs, AI recommends treatment plans and generates cost estimates. Applicable to dental clinics, medical aesthetics, health checkups, and more."
            : "患者描述症状或服务需求，AI 推荐诊疗方案并生成费用预估。适用于口腔诊所、医美机构、体检中心等，支持套餐组合和个性化方案定价。",
          icon: <Stethoscope size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: isEn ? "LLM-Powered Understanding" : "大模型深度理解引擎",
          description: isEn
            ? "Built on mainstream large language models (DeepSeek, GPT-4o, Claude, Qwen, etc.) via FigoAPI unified gateway. The AI truly understands customer intent rather than simple keyword matching, achieving 95%+ requirement understanding accuracy."
            : "基于主流大语言模型（DeepSeek、GPT-4o、Claude、通义千问等），通过火鹰引擎 FigoAPI 统一网关接入。AI 真正理解客户意图而非简单关键词匹配，需求理解准确率达 95% 以上。支持智能路由自动选择最优模型。",
          metric: "95%+",
          metricLabel: isEn ? "Understanding Accuracy" : "需求理解准确率",
        },
        {
          title: isEn ? "Configurable Pricing Engine" : "可配置定价引擎",
          description: isEn
            ? "Flexible pricing rule engine supports fixed pricing, tiered pricing, formula-based pricing, and AI-estimated pricing. Enterprises can configure pricing rules through a visual backend without coding."
            : "灵活的定价规则引擎，支持固定定价、阶梯定价、公式定价、AI 估算定价等多种模式。企业可通过可视化后台配置定价规则，无需编码。支持多币种、多税率、多折扣策略。",
          metric: isEn ? "4 Modes" : "4种模式",
          metricLabel: isEn ? "Pricing Strategies" : "定价策略",
        },
        {
          title: isEn ? "Real-Time PDF Generation" : "实时 PDF 报价单生成",
          description: isEn
            ? "Automatically generates professional PDF quotes with custom enterprise branding, detailed line items, terms and conditions. Generation time under 3 seconds, ready for immediate client delivery."
            : "自动生成带企业品牌标识的专业 PDF 报价单，包含详细的项目拆解、费用明细、服务条款。生成时间 3 秒内，可立即发送给客户。支持自定义模板和多语言。",
          metric: "<3s",
          metricLabel: isEn ? "Generation Time" : "报价单生成",
        },
        {
          title: isEn ? "Widget Embed Architecture" : "Widget 嵌入式架构",
          description: isEn
            ? "Lightweight JavaScript Widget architecture, one line of code to embed into any website. Widget size under 50KB gzipped, no impact on host site performance. Supports custom themes and responsive design."
            : "轻量级 JavaScript Widget 架构，一行代码嵌入任意网站。Widget 体积 gzip 后不到 50KB，不影响宿主网站性能。支持自定义主题配色和响应式设计，完美适配 PC 和移动端。",
          metric: "<50KB",
          metricLabel: isEn ? "Widget Size" : "Widget 体积",
        },
      ]}
      architectureDescription={isEn
        ? "The AI Smart Quoting System uses a microservices architecture with four core modules: Conversational AI Engine (multi-turn dialogue management, intent recognition, requirement extraction), Pricing Engine (rule-based and AI-estimated pricing, knowledge base matching), Document Generator (real-time PDF generation, custom templates, multi-language support), and Analytics Platform (lead scoring, conversion tracking, data visualization). The frontend Widget communicates with backend services via WebSocket for real-time streaming responses. All LLM calls go through FigoAPI unified gateway for intelligent routing and cost optimization."
        : "AI 智能报价系统采用微服务架构，核心包含四大模块：对话 AI 引擎（多轮对话管理、意图识别、需求提取）、定价引擎（规则定价与 AI 估算、知识库匹配）、文档生成器（实时 PDF 生成、自定义模板、多语言支持）、数据分析平台（线索评分、转化追踪、数据可视化）。前端 Widget 通过 WebSocket 与后端服务通信，实现实时流式响应。所有大模型调用经由火鹰引擎 FigoAPI 统一网关，实现智能路由和成本优化。"
      }
    >
    </ProductDetailLayout>
    </>
  );
}
