/*
 * 「量子棱镜」— FigoAI 智能工具平台 产品详情页
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import {
  Sparkles, FileText, Video, GraduationCap, MessageSquare, Scissors, Table2,
  Building2, Briefcase, ShoppingCart, Megaphone, BookOpen, Headphones,
  Zap, Shield, Layers, Gauge,
  CreditCard, BarChart3, Settings, Puzzle,
} from "lucide-react";

export default function FigoAI() {
  return (
    <>
    <ProductSEO
      name="FigoAI 智能工具平台"
      tagline="企业级AI智能工具订阅平台"
      description="FigoAI集成多种AI能力的一站式智能工具平台，涵盖AI写标书、AI视频创作、学术AI助手、企微智能客服、直播切片、AI智能表格等6大核心工具。按量付费，让每个企业都能用得起AI。"
      keywords={["AI工具平台", "AI写标书", "AI视频创作", "企微智能客服", "直播切片", "AI智能表格", "FigoAI", "火鹰科技"]}
      path="/FigoAgent/products/figo-ai"
    />
    <ProductDetailLayout
      name="FigoAI 智能工具平台"
      tagline="AI 驱动的企业级智能工具订阅平台"
      heroDescription="集成多种 AI 能力的一站式智能工具平台，涵盖 AI 写标书、AI 视频创作、学术 AI 助手、企微智能客服、直播切片、AI 智能表格等 6 大核心工具。按量付费，用多少付多少，让每个企业都能用得起 AI。"
      gradient="from-violet-500 to-fuchsia-500"
      gradientColors="rgba(139,92,246,0.5), rgba(217,70,239,0.5)"
      heroIcon={<Sparkles size={28} className="text-white" />}
      stats={[
        { value: "10,000+", label: "累计用户" },
        { value: "100,000+", label: "处理任务" },
        { value: "6+", label: "AI工具" },
        { value: "按量付费", label: "计费模式" },
      ]}
      features={[
        {
          icon: <FileText size={20} className="text-white" />,
          title: "AI 写标书",
          description: "上传招标文件，AI 自动分析评分标准和技术要求，智能生成投标方案、技术方案、商务报价等完整标书内容，大幅缩短标书编写时间。",
          badge: "热门",
        },
        {
          icon: <Video size={20} className="text-white" />,
          title: "AI 视频创作",
          description: "输入文字脚本或关键词，AI 自动生成视频内容，支持数字人口播、图文混排、字幕自动生成等多种视频制作模式，零门槛创作专业视频。",
          badge: "热门",
        },
        {
          icon: <GraduationCap size={20} className="text-white" />,
          title: "学术 AI 助手",
          description: "论文润色、文献综述生成、摘要提取、引用格式化、查重降重等学术写作全流程 AI 辅助，支持中英文学术论文。",
        },
        {
          icon: <MessageSquare size={20} className="text-white" />,
          title: "企微智能客服",
          description: "深度集成企业微信，AI 自动回复客户咨询，支持多轮对话、知识库问答、工单转接、客户画像分析等功能，7×24 小时智能服务。",
        },
        {
          icon: <Scissors size={20} className="text-white" />,
          title: "直播切片",
          description: "AI 自动识别直播中的精彩片段，智能切片并生成短视频。支持自动添加字幕、配乐、转场效果，一场直播产出数十条优质短视频。",
        },
        {
          icon: <Table2 size={20} className="text-white" />,
          title: "AI 智能表格",
          description: "用自然语言操作表格数据，AI 自动完成数据清洗、分析、可视化和报告生成。支持 Excel 导入导出，让数据分析不再需要编程技能。",
        },
        {
          icon: <CreditCard size={20} className="text-white" />,
          title: "灵活按量计费",
          description: "所有工具按实际使用量计费，无月费无年费。充值即用，用完再充，支持多种充值套餐，充值越多单价越低。",
        },
        {
          icon: <Puzzle size={20} className="text-white" />,
          title: "持续扩展的工具库",
          description: "平台持续上线新的 AI 工具，覆盖更多业务场景。用户订阅后可使用所有工具，一个平台满足多种 AI 需求。",
        },
      ]}
      scenarios={[
        {
          title: "招投标公司",
          description: "标书编写是招投标公司的核心工作，AI 写标书工具可将标书编写时间从数天缩短至数小时，大幅提升投标效率和中标率。",
          icon: <Briefcase size={22} className="text-white" />,
        },
        {
          title: "电商与新媒体",
          description: "AI 视频创作和直播切片工具，帮助电商和新媒体团队快速产出大量优质视频内容，降低内容制作成本，提升营销效率。",
          icon: <ShoppingCart size={22} className="text-white" />,
        },
        {
          title: "高校与科研机构",
          description: "学术 AI 助手为研究人员提供论文写作、文献管理、数据分析等全方位支持，加速科研产出。",
          icon: <BookOpen size={22} className="text-white" />,
        },
        {
          title: "企业客户服务",
          description: "企微智能客服帮助企业实现客户咨询的自动化处理，降低人工客服成本，提升响应速度和服务质量。",
          icon: <Headphones size={22} className="text-white" />,
        },
        {
          title: "直播电商/MCN",
          description: "直播切片工具自动将长直播内容切割为精彩短视频，帮助 MCN 机构和主播高效运营多平台短视频账号。",
          icon: <Megaphone size={22} className="text-white" />,
        },
        {
          title: "中小企业数字化",
          description: "AI 智能表格让不懂编程的业务人员也能进行数据分析，降低中小企业数字化转型的技术门槛和人力成本。",
          icon: <Building2 size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: "多模型融合架构",
          description: "每个 AI 工具根据任务特点选择最优模型组合。写标书使用长文本模型，视频创作使用多模态模型，智能表格使用代码生成模型，确保每个场景都有最佳效果。",
          metric: "多模型",
          metricLabel: "智能调度",
        },
        {
          title: "异步任务处理引擎",
          description: "视频创作、标书生成等耗时任务采用异步处理架构，支持任务队列、进度追踪、断点续传。用户提交任务后可离开页面，完成后自动通知。",
          metric: "异步",
          metricLabel: "任务引擎",
        },
        {
          title: "插件化工具扩展",
          description: "平台采用插件化架构，每个 AI 工具作为独立插件运行。新工具开发遵循标准接口规范，可快速上线。第三方开发者也可贡献工具插件。",
          metric: "插件化",
          metricLabel: "架构设计",
        },
        {
          title: "企业级数据隔离",
          description: "多租户架构确保不同企业的数据完全隔离，上传的文件和生成的内容仅对所属用户可见。支持数据加密存储和定期清理策略。",
          metric: "多租户",
          metricLabel: "数据隔离",
        },
      ]}
      architectureDescription="FigoAI 平台采用微服务 + 插件化架构，核心包括统一网关层、工具插件引擎、异步任务调度器和计费结算系统。每个 AI 工具作为独立微服务运行，通过标准接口与平台对接。异步任务调度器基于消息队列实现，支持优先级调度和资源隔离。计费系统实时追踪每次调用的资源消耗，精确到 Token 级别。"
    />
    </>
  );
}
