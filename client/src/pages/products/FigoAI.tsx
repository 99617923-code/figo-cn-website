/*
 * 「量子棱镜」— FigoAI 智能工具平台 产品详情页
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import { useTranslation } from "react-i18next";
import {
  Sparkles, FileText, Video, GraduationCap, MessageSquare, Scissors, Table2,
  Building2, Briefcase, ShoppingCart, Megaphone, BookOpen, Headphones,
  Zap, Shield, Layers, Gauge,
  CreditCard, BarChart3, Settings, Puzzle,
} from "lucide-react";

export default function FigoAI() {
  const { t, i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");

  return (
    <>
    <ProductSEO
      name={isEn ? "FigoAI Smart Tool Platform" : "FigoAI 智能工具平台"}
      tagline={isEn ? "Enterprise-level AI Smart Tool Subscription Platform" : "企业级AI智能工具订阅平台"}
      description={isEn ? "FigoAI is a one-stop smart tool platform integrating multiple AI capabilities, covering 6 core tools including AI Bid Writer, AI Video Creation, Academic AI Assistant, WeChat Work Smart Customer Service, Live Stream Clipping, and AI Smart Table. Pay-as-you-go, making AI affordable for every enterprise." : "FigoAI集成多种AI能力的一站式智能工具平台，涵盖AI写标书、AI视频创作、学术AI助手、企微智能客服、直播切片、AI智能表格等6大核心工具。按量付费，让每个企业都能用得起AI。"}
      keywords={isEn ? ['AI Tool Platform', 'AI Bid Writer', 'AI Video Creation', 'WeChat Work Smart Customer Service', 'AI Agent Custom Development', 'Live Stream Clipping', 'AI Smart Table', 'FigoAI', 'HuoYing Tech'] : ['AI工具平台', 'AI写标书', 'AI视频创作', '企微智能客服', 'AI智能体定制开发', '直播切片', 'AI智能表格', 'FigoAI', '火鹰科技']}
      path="/products/figo-ai"
    />
    <ProductDetailLayout
      name={isEn ? "FigoAI Smart Tool Platform" : "FigoAI 智能工具平台"}
      tagline={isEn ? "AI-Driven Enterprise-level Smart Tool Subscription Platform" : "AI 驱动的企业级智能工具订阅平台"}
      heroDescription={isEn ? "A one-stop smart tool platform integrating multiple AI capabilities, covering 6 core tools including AI Bid Writer, AI Video Creation, Academic AI Assistant, WeChat Work Smart Customer Service, Live Stream Clipping, and AI Smart Table. Pay-as-you-go, pay for what you use, making AI affordable for every enterprise." : "集成多种 AI 能力的一站式智能工具平台，涵盖 AI 写标书、AI 视频创作、学术 AI 助手、企微智能客服、直播切片、AI 智能表格等 6 大核心工具。按量付费，用多少付多少，让每个企业都能用得起 AI。"}
      gradient="from-violet-500 to-fuchsia-500"
      gradientColors="rgba(139,92,246,0.5), rgba(217,70,239,0.5)"
      heroIcon={<Sparkles size={28} className="text-white" />}
      stats={[
        { value: "10,000+", label: isEn ? "Cumulative Users" : "累计用户" },
        { value: "100,000+", label: isEn ? "Tasks Processed" : "处理任务" },
        { value: "6+", label: isEn ? "AI Tools" : "AI工具" },
        { value: isEn ? "Pay-as-you-go" : "按量付费", label: isEn ? "Billing Model" : "计费模式" },
      ]}
      features={[
        {
          icon: <FileText size={20} className="text-white" />,
          title: isEn ? "AI Bid Writer" : "AI 写标书",
          description: isEn ? "Upload the bidding documents, and the AI will automatically analyze the scoring criteria and technical requirements to intelligently generate complete bidding documents such as bidding plans, technical solutions, and business quotations, significantly shortening the time for bid writing." : "上传招标文件，AI 自动分析评分标准和技术要求，智能生成投标方案、技术方案、商务报价等完整标书内容，大幅缩短标书编写时间。",
          badge: isEn ? "Hot" : "热门",
        },
        {
          icon: <Video size={20} className="text-white" />,
          title: isEn ? "AI Video Creation" : "AI 视频创作",
          description: isEn ? "Enter text scripts or keywords, and the AI will automatically generate video content, supporting various video production modes such as digital human broadcasting, text-image mixing, and automatic subtitle generation, enabling zero-threshold creation of professional videos." : "输入文字脚本或关键词，AI 自动生成视频内容，支持数字人口播、图文混排、字幕自动生成等多种视频制作模式，零门槛创作专业视频。",
          badge: isEn ? "Hot" : "热门",
        },
        {
          icon: <GraduationCap size={20} className="text-white" />,
          title: isEn ? "Academic AI Assistant" : "学术 AI 助手",
          description: isEn ? "Full-process AI assistance for academic writing, including paper polishing, literature review generation, abstract extraction, citation formatting, and plagiarism checking, supporting both Chinese and English academic papers." : "论文润色、文献综述生成、摘要提取、引用格式化、查重降重等学术写作全流程 AI 辅助，支持中英文学术论文。",
        },
        {
          icon: <MessageSquare size={20} className="text-white" />,
          title: isEn ? "WeChat Work Smart Customer Service" : "企微智能客服",
          description: isEn ? "Deeply integrated with WeChat Work, the AI automatically replies to customer inquiries, supporting multi-turn conversations, knowledge base Q&A, work order transfer, customer profile analysis, and other functions, providing 7x24 smart service." : "深度集成企业微信，AI 自动回复客户咨询，支持多轮对话、知识库问答、工单转接、客户画像分析等功能，7×24 小时智能服务。",
        },
        {
          icon: <Scissors size={20} className="text-white" />,
          title: isEn ? "Live Stream Clipping" : "直播切片",
          description: isEn ? "AI automatically identifies exciting clips in live streams, intelligently clips them, and generates short videos. It supports automatic addition of subtitles, background music, and transition effects, producing dozens of high-quality short videos from a single live stream." : "AI 自动识别直播中的精彩片段，智能切片并生成短视频。支持自动添加字幕、配乐、转场效果，一场直播产出数十条优质短视频。",
        },
        {
          icon: <Table2 size={20} className="text-white" />,
          title: isEn ? "AI Smart Table" : "AI 智能表格",
          description: isEn ? "Operate table data with natural language, and the AI will automatically complete data cleaning, analysis, visualization, and report generation. It supports Excel import and export, making data analysis no longer require programming skills." : "用自然语言操作表格数据，AI 自动完成数据清洗、分析、可视化和报告生成。支持 Excel 导入导出，让数据分析不再需要编程技能。",
        },
        {
          icon: <CreditCard size={20} className="text-white" />,
          title: isEn ? "Flexible Pay-as-you-go" : "灵活按量计费",
          description: isEn ? "All tools are billed based on actual usage, with no monthly or annual fees. Recharge and use, and recharge when you run out. It supports a variety of recharge packages, the more you recharge, the lower the unit price." : "所有工具按实际使用量计费，无月费无年费。充值即用，用完再充，支持多种充值套餐，充值越多单价越低。",
        },
        {
          icon: <Puzzle size={20} className="text-white" />,
          title: isEn ? "Continuously Expanding Tool Library" : "持续扩展的工具库",
          description: isEn ? "The platform continuously launches new AI tools to cover more business scenarios. After subscribing, users can use all tools, and one platform meets multiple AI needs." : "平台持续上线新的 AI 工具，覆盖更多业务场景。用户订阅后可使用所有工具，一个平台满足多种 AI 需求。",
        },
      ]}
      scenarios={[
        {
          title: isEn ? "Bidding Companies" : "招投标公司",
          description: isEn ? "Bid writing is the core work of bidding companies. The AI Bid Writer tool can shorten the bid writing time from days to hours, greatly improving bidding efficiency and the win rate." : "标书编写是招投标公司的核心工作，AI 写标书工具可将标书编写时间从数天缩短至数小时，大幅提升投标效率和中标率。",
          icon: <Briefcase size={22} className="text-white" />,
        },
        {
          title: isEn ? "E-commerce & New Media" : "电商与新媒体",
          description: isEn ? "AI Video Creation and Live Stream Clipping tools help e-commerce and new media teams quickly produce a large amount of high-quality video content, reducing content production costs and improving marketing efficiency." : "AI 视频创作和直播切片工具，帮助电商和新媒体团队快速产出大量优质视频内容，降低内容制作成本，提升营销效率。",
          icon: <ShoppingCart size={22} className="text-white" />,
        },
        {
          title: isEn ? "Universities & Research Institutions" : "高校与科研机构",
          description: isEn ? "The Academic AI Assistant provides researchers with all-round support such as paper writing, literature management, and data analysis to accelerate research output." : "学术 AI 助手为研究人员提供论文写作、文献管理、数据分析等全方位支持，加速科研产出。",
          icon: <BookOpen size={22} className="text-white" />,
        },
        {
          title: isEn ? "Enterprise Customer Service" : "企业客户服务",
          description: isEn ? "WeChat Work Smart Customer Service helps enterprises automate the handling of customer inquiries, reducing manual customer service costs and improving response speed and service quality." : "企微智能客服帮助企业实现客户咨询的自动化处理，降低人工客服成本，提升响应速度和服务质量。",
          icon: <Headphones size={22} className="text-white" />,
        },
        {
          title: isEn ? "Live E-commerce/MCN" : "直播电商/MCN",
          description: isEn ? "The Live Stream Clipping tool automatically cuts long live stream content into exciting short videos, helping MCN agencies and streamers efficiently operate multi-platform short video accounts." : "直播切片工具自动将长直播内容切割为精彩短视频，帮助 MCN 机构和主播高效运营多平台短视频账号。",
          icon: <Megaphone size={22} className="text-white" />,
        },
        {
          title: isEn ? "SME Digitalization" : "中小企业数字化",
          description: isEn ? "AI Smart Table allows business personnel who do not know how to program to perform data analysis, lowering the technical threshold and labor costs for the digital transformation of small and medium-sized enterprises." : "AI 智能表格让不懂编程的业务人员也能进行数据分析，降低中小企业数字化转型的技术门槛和人力成本。",
          icon: <Building2 size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: isEn ? "Multi-model Fusion Architecture" : "多模型融合架构",
          description: isEn ? "Each AI tool selects the optimal model combination according to the task characteristics. The Bid Writer uses a long-text model, Video Creation uses a multi-modal model, and the Smart Table uses a code generation model to ensure the best results in each scenario." : "每个 AI 工具根据任务特点选择最优模型组合。写标书使用长文本模型，视频创作使用多模态模型，智能表格使用代码生成模型，确保每个场景都有最佳效果。",
          metric: isEn ? "Multi-model" : "多模型",
          metricLabel: isEn ? "Intelligent Scheduling" : "智能调度",
        },
        {
          title: isEn ? "Asynchronous Task Processing Engine" : "异步任务处理引擎",
          description: isEn ? "Time-consuming tasks such as video creation and bid generation adopt an asynchronous processing architecture, supporting task queues, progress tracking, and breakpoint resuming. Users can leave the page after submitting a task, and will be automatically notified upon completion." : "视频创作、标书生成等耗时任务采用异步处理架构，支持任务队列、进度追踪、断点续传。用户提交任务后可离开页面，完成后自动通知。",
          metric: isEn ? "Async" : "异步",
          metricLabel: isEn ? "Task Engine" : "任务引擎",
        },
        {
          title: isEn ? "Plugin-based Tool Extension" : "插件化工具扩展",
          description: isEn ? "The platform adopts a plugin-based architecture, and each AI tool runs as an independent plugin. The development of new tools follows standard interface specifications and can be launched quickly. Third-party developers can also contribute tool plugins." : "平台采用插件化架构，每个 AI 工具作为独立插件运行。新工具开发遵循标准接口规范，可快速上线。第三方开发者也可贡献工具插件。",
          metric: isEn ? "Plugin-based" : "插件化",
          metricLabel: isEn ? "Architecture Design" : "架构设计",
        },
        {
          title: isEn ? "Enterprise-level Data Isolation" : "企业级数据隔离",
          description: isEn ? "The multi-tenant architecture ensures that the data of different enterprises is completely isolated, and the uploaded files and generated content are only visible to the owner. It supports encrypted data storage and periodic cleaning strategies." : "多租户架构确保不同企业的数据完全隔离，上传的文件和生成的内容仅对所属用户可见。支持数据加密存储和定期清理策略。",
          metric: isEn ? "Multi-tenant" : "多租户",
          metricLabel: isEn ? "Data Isolation" : "数据隔离",
        },
      ]}
      architectureDescription={isEn ? "The FigoAI platform adopts a microservices + plugin-based architecture. The core includes a unified gateway layer, a tool plugin engine, an asynchronous task scheduler, and a billing and settlement system. Each AI tool runs as an independent microservice and interfaces with the platform through standard interfaces. The asynchronous task scheduler is based on a message queue and supports priority scheduling and resource isolation. The billing system tracks the resource consumption of each call in real time, accurate to the Token level." : "FigoAI 平台采用微服务 + 插件化架构，核心包括统一网关层、工具插件引擎、异步任务调度器和计费结算系统。每个 AI 工具作为独立微服务运行，通过标准接口与平台对接。异步任务调度器基于消息队列实现，支持优先级调度和资源隔离。计费系统实时追踪每次调用的资源消耗，精确到 Token 级别。"}
    />
    </>
  );
}
