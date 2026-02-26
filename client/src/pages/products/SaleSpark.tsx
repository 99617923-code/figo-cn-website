/*
 * 「量子棱镜」— SaleSpark AI销售训练平台 产品详情页
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import {
  Target, MessageSquare, Brain, Trophy, BarChart3, Users,
  Building2, GraduationCap, Briefcase, HeartPulse, Car, Landmark,
  Zap, Shield, Layers, Gauge,
  Video, BookOpen, Gamepad2, UserCheck, LineChart, Mic,
} from "lucide-react";

export default function SaleSpark() {
  return (
    <>
    <ProductSEO
      name="SaleSpark"
      tagline="AI销售训练平台"
      description="SaleSpark是AI驱动的智能销售训练平台，通过AI虚拟客户进行沉浸式对话训练，掌握SPIN、挑战者销售、MEDDIC等8+种销售方法论。实时AI教练提供5维度评分反馈，游戏化成长体系提升销售团队战斗力。"
      keywords={["AI销售训练", "智能销售教练", "销售方法论训练", "SPIN销售", "MEDDIC", "AI虚拟客户", "销售团队培训", "SaleSpark", "火鹰科技"]}
      path="/FigoAgent/products/salespark"
    />
    <ProductDetailLayout
      name="SaleSpark"
      tagline="AI 驱动的智能销售训练平台"
      heroDescription="与逼真的 AI 虚拟客户进行沉浸式对话训练，掌握 SPIN、挑战者销售、MEDDIC 等经过验证的销售方法论。实时 AI 教练提供 5 维度评分反馈，游戏化成长体系让每位销售从新手蜕变为顶尖高手。"
      gradient="from-orange-500 to-rose-500"
      gradientColors="rgba(249,115,22,0.5), rgba(244,63,94,0.5)"
      heroIcon={<Target size={28} className="text-white" />}
      stats={[
        { value: "1,200+", label: "活跃用户" },
        { value: "49,000+", label: "训练场次" },
        { value: "8+", label: "销售方法论" },
        { value: "5维度", label: "AI评分体系" },
      ]}
      features={[
        {
          icon: <MessageSquare size={20} className="text-white" />,
          title: "AI 虚拟客户",
          description: "基于大模型驱动的虚拟客户角色，模拟真实销售场景中的各种客户类型——犹豫型、价格敏感型、技术型、决策者型等，对话自然流畅，反应真实。",
          badge: "核心",
        },
        {
          icon: <Brain size={20} className="text-white" />,
          title: "实时 AI 教练",
          description: "训练过程中 AI 教练实时分析对话，从需求挖掘、异议处理、价值传递、关系建立、成交推进 5 个维度进行评分，并给出具体改进建议。",
          badge: "核心",
        },
        {
          icon: <BookOpen size={20} className="text-white" />,
          title: "销售方法论库",
          description: "内置 SPIN、挑战者销售、MEDDIC、BANT、Sandler、NEAT、价值销售、顾问式销售等 8+ 种经典方法论，每种方法论配套专属训练场景。",
        },
        {
          icon: <Gamepad2 size={20} className="text-white" />,
          title: "游戏化成长体系",
          description: "经验值、等级、成就徽章、排行榜等游戏化元素，激发销售团队的训练热情。完成挑战解锁高级场景，持续进阶。",
        },
        {
          icon: <UserCheck size={20} className="text-white" />,
          title: "企业版管理后台",
          description: "管理者可查看团队训练数据、个人成长曲线、薄弱环节分析，支持自定义训练计划和考核标准，数据驱动销售团队管理。",
        },
        {
          icon: <Video size={20} className="text-white" />,
          title: "AI 微课视频",
          description: "AI 自动生成销售技巧微课视频，结合真实案例讲解方法论要点，碎片化学习，随时随地提升销售能力。",
        },
        {
          icon: <LineChart size={20} className="text-white" />,
          title: "训练数据分析",
          description: "详细的训练报告和趋势分析，追踪每次训练的得分变化、时长分布、方法论掌握度，量化销售能力提升。",
        },
        {
          icon: <Mic size={20} className="text-white" />,
          title: "语音对话模式",
          description: "支持语音输入进行对话训练，更贴近真实电话销售和面对面沟通场景，训练语言表达和临场应变能力。",
        },
        {
          icon: <Trophy size={20} className="text-white" />,
          title: "挑战赛与排行榜",
          description: "定期举办团队挑战赛，设置不同难度的销售场景，排行榜实时更新，营造良性竞争氛围，激发团队潜能。",
        },
      ]}
      scenarios={[
        {
          title: "B2B 企业销售团队",
          description: "针对大客户销售场景，训练复杂决策链路中的沟通技巧，掌握 MEDDIC 等企业级销售方法论，提升大单成交率。",
          icon: <Building2 size={22} className="text-white" />,
        },
        {
          title: "销售新人培训",
          description: "新入职销售人员通过 AI 虚拟客户快速积累实战经验，缩短上手周期，降低培训成本，标准化销售流程。",
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: "金融理财顾问",
          description: "模拟高净值客户咨询场景，训练理财产品推荐、风险沟通、合规话术等专业技能，提升客户信任度。",
          icon: <Landmark size={22} className="text-white" />,
        },
        {
          title: "医药销售代表",
          description: "模拟医生、药剂师等专业客户角色，训练学术推广、产品讲解、异议处理等医药销售特有场景。",
          icon: <HeartPulse size={22} className="text-white" />,
        },
        {
          title: "汽车销售顾问",
          description: "模拟展厅接待、试驾邀约、价格谈判、金融方案推荐等汽车销售全流程，提升客户体验和成交转化。",
          icon: <Car size={22} className="text-white" />,
        },
        {
          title: "SaaS 软件销售",
          description: "训练产品演示、需求发现、竞品对比、ROI 论证等 SaaS 销售核心技能，缩短销售周期，提高赢单率。",
          icon: <Briefcase size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: "大模型驱动的角色扮演",
          description: "基于 GPT-4 级别大模型构建虚拟客户角色，通过精细的 Prompt 工程和角色设定，实现高度拟真的对话体验。AI 客户能够记住上下文、表现出真实的情绪变化和决策逻辑。",
          metric: "GPT-4",
          metricLabel: "模型级别",
        },
        {
          title: "多维度实时评估引擎",
          description: "自研的 5 维度评估模型，从需求挖掘、异议处理、价值传递、关系建立、成交推进五个核心维度实时分析对话质量，每个维度细分 3-5 个子指标，评估精度达到专业教练水平。",
          metric: "5维度",
          metricLabel: "评估体系",
        },
        {
          title: "自适应难度系统",
          description: "根据用户的历史训练数据和能力评估，AI 自动调整虚拟客户的难度级别和沟通风格，确保训练始终处于最佳学习区间，既不过于简单也不过于困难。",
          metric: "自适应",
          metricLabel: "智能调节",
        },
        {
          title: "企业级数据安全",
          description: "所有训练数据加密存储，支持私有化部署，满足金融、医药等行业的数据合规要求。训练内容不会被用于模型训练，确保企业商业信息安全。",
          metric: "私有化",
          metricLabel: "部署支持",
        },
      ]}
      architectureDescription="SaleSpark 采用前后端分离架构，前端基于 React + TypeScript 构建，后端使用 Node.js 微服务架构。AI 对话引擎基于多模型融合技术，支持 GPT-4、Claude 等多种大模型作为底层驱动。实时评估系统使用自研的 NLP 分析管线，结合销售方法论知识图谱进行多维度评分。"
    />
    </>
  );
}
