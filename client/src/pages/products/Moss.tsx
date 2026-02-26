/*
 * 「量子棱镜」— 火鹰导师替身系统 Moss 产品详情页
 * 数字人复刻系统
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import {
  User, Mic2, BookOpen, MessageCircle, Heart, Users,
  GraduationCap, Briefcase, Dumbbell, Stethoscope, Palette, Megaphone,
  Zap, Brain, Shield, Layers,
  Clock, Bot, Database, Settings,
} from "lucide-react";

export default function Moss() {
  return (
    <>
    <ProductSEO
      name="火鹰导师替身系统 Moss"
      tagline="AI数字人复刻系统"
      description="火鹰导师替身系统Moss深度复刻导师的思维模式、声音特征和知识体系，打造7×24小时在线的AI数字分身。自动回复学员咨询、主动关怀跟进、智能管理对话，让导师影响力突破时空限制。"
      keywords={["AI数字人", "导师替身", "声音克隆", "AI数字分身", "知识付费AI", "在线教育AI", "RAG知识库", "Moss", "火鹰科技"]}
      path="/FigoAgent/products/moss"
    />
    <ProductDetailLayout
      name="火鹰导师替身系统"
      tagline="AI 数字人复刻 · 让导师的影响力突破时空限制"
      heroDescription="深度复刻导师的思维模式、声音特征和知识体系，打造 7×24 小时在线的数字分身。自动回复学员咨询、主动关怀跟进、智能管理对话，让每一位导师都能同时服务无限学员，影响力倍增。"
      gradient="from-amber-500 to-red-600"
      gradientColors="rgba(245,158,11,0.5), rgba(220,38,38,0.5)"
      heroIcon={<User size={28} className="text-white" />}
      stats={[
        { value: "高保真", label: "声音克隆" },
        { value: "7×24h", label: "在线服务" },
        { value: "OpenAI", label: "API兼容" },
        { value: "无限", label: "并发服务" },
      ]}
      features={[
        {
          icon: <Bot size={20} className="text-white" />,
          title: "导师替身 AI",
          description: "深度学习导师的表达风格、思维逻辑和专业知识，生成高度还原的数字替身。学员与替身对话时，感受如同与真人导师交流。",
          badge: "核心",
        },
        {
          icon: <Mic2 size={20} className="text-white" />,
          title: "高保真声音克隆",
          description: "仅需少量语音样本即可克隆导师声音，支持实时语音合成，音色、语调、语速高度还原，让数字替身不仅会说，更像导师在说。",
          badge: "核心",
        },
        {
          icon: <Database size={20} className="text-white" />,
          title: "专属知识库",
          description: "上传导师的课程资料、书籍内容、问答记录等，构建专属知识库。AI 基于知识库进行精准回答，确保内容的专业性和一致性。",
        },
        {
          icon: <MessageCircle size={20} className="text-white" />,
          title: "智能对话管理",
          description: "支持多轮对话、上下文记忆、话题引导等高级对话能力。自动识别学员意图，精准匹配知识库内容，提供个性化回答。",
        },
        {
          icon: <Heart size={20} className="text-white" />,
          title: "主动关怀跟进",
          description: "根据学员学习进度和互动频率，AI 主动发起关怀对话，提醒学习计划、推荐课程内容、跟进学习效果，提升学员粘性。",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: "学员管理系统",
          description: "完整的学员档案管理、分组管理、标签系统、互动记录追踪，帮助导师团队高效管理大规模学员群体。",
        },
        {
          icon: <Clock size={20} className="text-white" />,
          title: "7×24 小时在线",
          description: "数字替身全天候在线服务，不受时间和精力限制。学员随时提问随时获得回复，大幅提升服务体验和满意度。",
        },
        {
          icon: <Settings size={20} className="text-white" />,
          title: "灵活配置管理",
          description: "支持自定义替身人设、回复风格、知识范围、服务时段等参数，导师可随时调整替身行为，保持品牌一致性。",
        },
      ]}
      scenarios={[
        {
          title: "知识付费/在线教育",
          description: "知识付费导师创建数字替身，7×24 小时回答学员问题，提供个性化学习指导。一个导师同时服务上万学员，收入不设上限。",
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: "企业内训/管理咨询",
          description: "企业高管或外部顾问的数字替身，持续为团队提供管理建议、业务指导和知识传承，降低咨询成本，提升培训效率。",
          icon: <Briefcase size={22} className="text-white" />,
        },
        {
          title: "健身/运动教练",
          description: "健身教练的数字替身为学员提供训练计划咨询、饮食建议、动作纠正指导，突破线下一对一的服务瓶颈。",
          icon: <Dumbbell size={22} className="text-white" />,
        },
        {
          title: "心理咨询/情感陪伴",
          description: "心理咨询师的数字替身提供初步的情绪疏导和心理支持，7×24 小时陪伴，及时发现需要人工介入的情况并转接。",
          icon: <Stethoscope size={22} className="text-white" />,
        },
        {
          title: "艺术/创意指导",
          description: "艺术导师的数字替身为学员提供作品点评、创作建议、技法指导，让艺术教育突破地域和时间限制。",
          icon: <Palette size={22} className="text-white" />,
        },
        {
          title: "品牌IP/KOL运营",
          description: "为网红、KOL 打造数字替身，自动回复粉丝私信、参与评论互动、提供个性化推荐，维护粉丝关系，提升变现效率。",
          icon: <Megaphone size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: "深度人格建模",
          description: "通过分析导师的历史对话、课程内容、写作风格等多维度数据，构建精细的人格模型。不仅复刻知识内容，更还原思维方式和表达习惯，让替身真正「像」导师。",
          metric: "多维度",
          metricLabel: "人格建模",
        },
        {
          title: "先进声音克隆技术",
          description: "基于最新的语音合成技术，仅需 3-5 分钟的语音样本即可完成声音克隆。支持情感语音合成，能够根据对话内容自动调整语调和情感表达。",
          metric: "3-5分钟",
          metricLabel: "克隆样本",
        },
        {
          title: "RAG 知识检索增强",
          description: "采用检索增强生成（RAG）技术，将导师的知识库与大模型能力深度融合。回答基于真实知识内容，避免 AI 幻觉，确保专业性和准确性。",
          metric: "RAG",
          metricLabel: "技术架构",
        },
        {
          title: "OpenAI 兼容 API",
          description: "提供标准的 OpenAI 兼容 API 接口，可轻松集成到微信公众号、小程序、企业微信、网站等各种平台，快速部署上线。",
          metric: "全平台",
          metricLabel: "集成支持",
        },
      ]}
      architectureDescription="导师替身系统采用 RAG（检索增强生成）架构，核心包括知识向量化引擎、语义检索模块、人格建模层和语音合成层。知识库通过 Embedding 模型转化为向量存储，对话时先检索相关知识片段，再结合人格模型生成符合导师风格的回答。声音克隆模块基于 VITS 架构实现高保真语音合成。"
    />
    </>
  );
}
