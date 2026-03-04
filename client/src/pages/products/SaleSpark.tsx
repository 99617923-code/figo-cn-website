/*
 * 「量子棱镜」— SaleSpark AI销售训练平台 产品详情页
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import { useTranslation } from "react-i18next";
import {
  Target, MessageSquare, Brain, Trophy, BarChart3, Users,
  Building2, GraduationCap, Briefcase, HeartPulse, Car, Landmark,
  Zap, Shield, Layers, Gauge,
  Video, BookOpen, Gamepad2, UserCheck, LineChart, Mic,
} from "lucide-react";

export default function SaleSpark() {
  const { t, i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");

  return (
    <>
    <ProductSEO
      name="SaleSpark"
      tagline={isEn ? "AI Sales Training Platform" : "AI销售训练平台"}
      description={isEn ? "SaleSpark is an AI-powered intelligent sales training platform that uses AI virtual customers for immersive conversational training to master 8+ sales methodologies like SPIN, Challenger Sale, and MEDDIC. A real-time AI coach provides 5-dimensional scoring feedback, and a gamified growth system enhances the sales teams combat effectiveness." : "SaleSpark是一款AI驱动的智能销售训练平台，通过AI虚拟客户进行沉浸式对话训练，掌握SPIN、挑战者销售、MEDDIC等8+销售方法论。实时AI教练提供5维度评分反馈，游戏化成长体系提升销售团队战斗力。"}
      keywords={isEn ? ["AI Sales Training", "Intelligent Sales Coach", "Sales Methodology Training", "SPIN Selling", "MEDDIC", "AI Virtual Customer", "AI Agent Custom Development", "Sales Team Training", "SaleSpark", "Firehawk Tech"] : ["AI销售训练", "智能销售教练", "销售方法论训练", "SPIN销售", "MEDDIC", "AI虚拟客户", "AI智能体定制开发", "销售团队培训", "SaleSpark", "火鹰科技"]}
      path="/products/salespark"
    />
    <ProductDetailLayout
      name="SaleSpark"
      tagline={isEn ? "AI-Powered Intelligent Sales Training Platform" : "AI 驱动的智能销售训练平台"}
      heroDescription={isEn ? "Engage in immersive conversational training with realistic AI virtual customers to master proven sales methodologies like SPIN, Challenger Sale, and MEDDIC. A real-time AI coach provides 5-dimensional scoring feedback, and a gamified growth system transforms every salesperson from a novice to a top performer." : "与逼真的 AI 虚拟客户进行沉浸式对话训练，掌握 SPIN、挑战者销售、MEDDIC 等经过验证的销售方法论。实时 AI 教练提供 5 维度评分反馈，游戏化成长体系让每位销售从新手蜕变为顶尖高手。"}
      gradient="from-orange-500 to-rose-500"
      gradientColors="rgba(249,115,22,0.5), rgba(244,63,94,0.5)"
      heroIcon={<Target size={28} className="text-white" />}
      stats={[
        { value: "1,200+", label: isEn ? "Active Users" : "活跃用户" },
        { value: "49,000+", label: isEn ? "Training Sessions" : "训练场次" },
        { value: "8+", label: isEn ? "Sales Methodologies" : "销售方法论" },
        { value: "5-dim", label: isEn ? "AI Scoring System" : "5维度AI评分体系" },
      ]}
      features={[
        {
          icon: <MessageSquare size={20} className="text-white" />,
          title: isEn ? "AI Virtual Customer" : "AI 虚拟客户",
          description: isEn ? "Powered by large models, virtual customer roles simulate various customer types in real sales scenarios—hesitant, price-sensitive, technical, decision-maker, etc.—with natural, fluent, and realistic conversations." : "基于大模型驱动的虚拟客户角色，模拟真实销售场景中的各种客户类型——犹豫型、价格敏感型、技术型、决策者型等，对话自然流畅，反应真实。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <Brain size={20} className="text-white" />,
          title: isEn ? "Real-time AI Coach" : "实时 AI 教练",
          description: isEn ? "During training, the AI coach analyzes conversations in real-time, providing scores and specific improvement suggestions across 5 dimensions: need discovery, objection handling, value proposition, relationship building, and closing." : "训练过程中 AI 教练实时分析对话，从需求挖掘、异议处理、价值传递、关系建立、成交推进 5 个维度进行评分，并给出具体改进建议。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <BookOpen size={20} className="text-white" />,
          title: isEn ? "Sales Methodology Library" : "销售方法论库",
          description: isEn ? "Includes 8+ classic methodologies like SPIN, Challenger Sale, MEDDIC, BANT, Sandler, NEAT, Value Selling, and Consultative Selling, each with dedicated training scenarios." : "内置 SPIN、挑战者销售、MEDDIC、BANT、Sandler、NEAT、价值销售、顾问式销售等 8+ 种经典方法论，每种方法论配套专属训练场景。",
        },
        {
          icon: <Gamepad2 size={20} className="text-white" />,
          title: isEn ? "Gamified Growth System" : "游戏化成长体系",
          description: isEn ? "Gamification elements like experience points, levels, achievement badges, and leaderboards motivate the sales team. Unlock advanced scenarios by completing challenges to continuously advance." : "经验值、等级、成就徽章、排行榜等游戏化元素，激发销售团队的训练热情。完成挑战解锁高级场景，持续进阶。",
        },
        {
          icon: <UserCheck size={20} className="text-white" />,
          title: isEn ? "Enterprise Admin Dashboard" : "企业版管理后台",
          description: isEn ? "Managers can view team training data, individual growth curves, and weakness analysis. Supports custom training plans and assessment standards for data-driven sales team management." : "管理者可查看团队训练数据、个人成长曲线、薄弱环节分析，支持自定义训练计划和考核标准，数据驱动销售团队管理。",
        },
        {
          icon: <Video size={20} className="text-white" />,
          title: isEn ? "AI Micro-Course Videos" : "AI 微课视频",
          description: isEn ? "AI automatically generates micro-course videos on sales techniques, explaining methodology key points with real cases for fragmented learning anytime, anywhere." : "AI 自动生成销售技巧微课视频，结合真实案例讲解方法论要点，碎片化学习，随时随地提升销售能力。",
        },
        {
          icon: <LineChart size={20} className="text-white" />,
          title: isEn ? "Training Data Analysis" : "训练数据分析",
          description: isEn ? "Detailed training reports and trend analysis track score changes, duration distribution, and methodology mastery for each session, quantifying sales capability improvement." : "详细的训练报告和趋势分析，追踪每次训练的得分变化、时长分布、方法论掌握度，量化销售能力提升。",
        },
        {
          icon: <Mic size={20} className="text-white" />,
          title: isEn ? "Voice Conversation Mode" : "语音对话模式",
          description: isEn ? "Supports voice input for conversational training, closer to real phone sales and face-to-face communication scenarios, training verbal expression and on-the-spot adaptability." : "支持语音输入进行对话训练，更贴近真实电话销售和面对面沟通场景，训练语言表达和临场应变能力。",
        },
        {
          icon: <Trophy size={20} className="text-white" />,
          title: isEn ? "Contests & Leaderboards" : "挑战赛与排行榜",
          description: isEn ? "Regular team contests with sales scenarios of varying difficulty. Leaderboards are updated in real-time to foster healthy competition and unlock team potential." : "定期举办团队挑战赛，设置不同难度的销售场景，排行榜实时更新，营造良性竞争氛围，激发团队潜能。",
        },
      ]}
      scenarios={[
        {
          title: isEn ? "B2B Enterprise Sales Teams" : "B2B 企业销售团队",
          description: isEn ? "For large account sales scenarios, train communication skills in complex decision-making chains, master enterprise-level sales methodologies like MEDDIC, and increase big-ticket deal closure rates." : "针对大客户销售场景，训练复杂决策链路中的沟通技巧，掌握 MEDDIC 等企业级销售方法论，提升大单成交率。",
          icon: <Building2 size={22} className="text-white" />,
        },
        {
          title: isEn ? "New Sales Hires Training" : "销售新人培训",
          description: isEn ? "New sales staff quickly accumulate practical experience through AI virtual customers, shortening the onboarding cycle, reducing training costs, and standardizing sales processes." : "新入职销售人员通过 AI 虚拟客户快速积累实战经验，缩短上手周期，降低培训成本，标准化销售流程。",
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: isEn ? "Financial & Wealth Advisors" : "金融理财顾问",
          description: isEn ? "Simulate high-net-worth client consultation scenarios to train professional skills like financial product recommendation, risk communication, and compliance scripts, enhancing client trust." : "模拟高净值客户咨询场景，训练理财产品推荐、风险沟通、合规话术等专业技能，提升客户信任度。",
          icon: <Landmark size={22} className="text-white" />,
        },
        {
          title: isEn ? "Pharmaceutical Sales Reps" : "医药销售代表",
          description: isEn ? "Simulate professional client roles like doctors and pharmacists to train in specific pharma sales scenarios such as academic promotion, product explanation, and objection handling." : "模拟医生、药剂师等专业客户角色，训练学术推广、产品讲解、异议处理等医药销售特有场景。",
          icon: <HeartPulse size={22} className="text-white" />,
        },
        {
          title: isEn ? "Automotive Sales Consultants" : "汽车销售顾问",
          description: isEn ? "Simulate the entire automotive sales process from showroom reception, test drive invitations, price negotiations, to financing plan recommendations, improving customer experience and conversion." : "模拟展厅接待、试驾邀约、价格谈判、金融方案推荐等汽车销售全流程，提升客户体验和成交转化。",
          icon: <Car size={22} className="text-white" />,
        },
        {
          title: isEn ? "SaaS Software Sales" : "SaaS 软件销售",
          description: isEn ? "Train core SaaS sales skills like product demos, need discovery, competitive analysis, and ROI justification to shorten the sales cycle and increase win rates." : "训练产品演示、需求发现、竞品对比、ROI 论证等 SaaS 销售核心技能，缩短销售周期，提高赢单率。",
          icon: <Briefcase size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: isEn ? "Large Model-Driven Role-Playing" : "大模型驱动的角色扮演",
          description: isEn ? "Virtual customer roles are built on GPT-4 level large models. Through fine-tuned prompt engineering and role setting, a highly realistic dialogue experience is achieved. The AI customer can remember context and exhibit realistic emotional changes and decision logic." : "基于 GPT-4 级别大模型构建虚拟客户角色，通过精细的 Prompt 工程和角色设定，实现高度拟真的对话体验。AI 客户能够记住上下文、表现出真实的情绪变化和决策逻辑。",
          metric: "GPT-4",
          metricLabel: isEn ? "Model Level" : "模型级别",
        },
        {
          title: isEn ? "Multi-dimensional Real-time Evaluation Engine" : "多维度实时评估引擎",
          description: isEn ? "A self-developed 5-dimensional evaluation model analyzes dialogue quality in real-time from five core dimensions: need discovery, objection handling, value proposition, relationship building, and closing. Each dimension is subdivided into 3-5 sub-indicators, achieving evaluation accuracy at a professional coach level." : "自研的 5 维度评估模型，从需求挖掘、异议处理、价值传递、关系建立、成交推进五个核心维度实时分析对话质量，每个维度细分 3-5 个子指标，评估精度达到专业教练水平。",
          metric: isEn ? "5-Dim" : "5维度",
          metricLabel: isEn ? "Evaluation System" : "评估体系",
        },
        {
          title: isEn ? "Adaptive Difficulty System" : "自适应难度系统",
          description: isEn ? "Based on the user\'s historical training data and ability assessment, the AI automatically adjusts the difficulty level and communication style of the virtual customer, ensuring the training is always in the optimal learning zone—neither too easy nor too difficult." : "根据用户的历史训练数据和能力评估，AI 自动调整虚拟客户的难度级别和沟通风格，确保训练始终处于最佳学习区间，既不过于简单也不过于困难。",
          metric: isEn ? "Adaptive" : "自适应",
          metricLabel: isEn ? "Smart Adjustment" : "智能调节",
        },
        {
          title: isEn ? "Enterprise-Grade Data Security" : "企业级数据安全",
          description: isEn ? "All training data is encrypted and stored, with support for private deployment to meet data compliance requirements of industries like finance and medicine. Training content is not used for model training, ensuring the security of corporate business information." : "所有训练数据加密存储，支持私有化部署，满足金融、医药等行业的数据合规要求。训练内容不会被用于模型训练，确保企业商业信息安全。",
          metric: isEn ? "On-Premise" : "私有化",
          metricLabel: isEn ? "Deployment Support" : "部署支持",
        },
      ]}
      architectureDescription={isEn ? "SaleSpark uses a front-end/back-end separated architecture. The front end is built with React + TypeScript, and the back end uses a Node.js microservices architecture. The AI dialogue engine is based on multi-model fusion technology, supporting various large models like GPT-4 and Claude as the underlying driver. The real-time evaluation system uses a self-developed NLP analysis pipeline, combined with a sales methodology knowledge graph for multi-dimensional scoring." : "SaleSpark 采用前后端分离架构，前端基于 React + TypeScript 构建，后端使用 Node.js 微服务架构。AI 对话引擎基于多模型融合技术，支持 GPT-4、Claude 等多种大模型作为底层驱动。实时评估系统使用自研的 NLP 分析管线，结合销售方法论知识图谱进行多维度评分。"}
    />
    </>
  );
}

