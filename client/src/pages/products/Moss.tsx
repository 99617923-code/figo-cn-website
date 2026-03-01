/*
 * 「量子棱镜」— 火鹰数字人复刻系统 Moss 产品详情页
 * 数字人复刻系统
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import {
  User, Mic2, BookOpen, MessageCircle, Heart, Users,
  Globe, Briefcase, ShoppingCart, GraduationCap, Megaphone, UserCheck,
  Zap, Brain, Shield, Layers,
  Clock, Bot, Database, Settings, FileText, Plug, BarChart3, Sparkles,
} from "lucide-react";

export default function Moss() {
  return (
    <>
    <ProductSEO
      name="火鹰数字人复刻系统"
      tagline="复刻创始人IP，让AI替你接待每一位客户"
      description="火鹰数字人复刻系统深度复刻创始人的思维、声音和知识体系，打造7×24小时在线的数字分身。一行代码嵌入官网，AI自动接待访客、收集需求、生成方案，将网站流量转化为销售线索。"
      keywords={["AI数字人", "数字人复刻", "声音克隆", "AI数字分身", "智能获客", "创始人 IP", "AI智能体定制开发", "RAG知识库", "Moss", "火鹰科技"]}      path="/products/moss"
    />
    <ProductDetailLayout
      name="火鹰数字人复刻系统"
      tagline="复刻创始人IP · 让AI替你接待每一位客户"
      heroDescription="深度复刻创始人的思维、声音和知识体系，打造 7×24 小时在线的数字分身。一行代码嵌入官网，AI自动接待访客、收集需求、生成方案，将网站流量转化为销售线索。"
      gradient="from-amber-500 to-red-600"
      gradientColors="rgba(245,158,11,0.5), rgba(220,38,38,0.5)"
      heroIcon={<User size={28} className="text-white" />}
      stats={[
        { value: "7×24", label: "全天候在线" },
        { value: "50+", label: "轮对话记忆" },
        { value: "<3s", label: "响应速度" },
        { value: "PDF", label: "自动出方案" },
      ]}
      features={[
        {
          icon: <Bot size={20} className="text-white" />,
          title: "数字人复刻",
          description: "深度复刻创始人/导师的思维模式、表达习惯和专业知识，打造高度还原的AI数字分身。支持人设画像配置、性格特征建模和多角色管理。",
          badge: "核心",
        },
        {
          icon: <Mic2 size={20} className="text-white" />,
          title: "声音克隆",
          description: "采集真实声音样本，通过AI声音克隆技术还原独特的音色和语调，对话自动语音回复。支持音色还原、语音合成和自动播放。",
          badge: "核心",
        },
        {
          icon: <Database size={20} className="text-white" />,
          title: "智能知识库",
          description: "支持文档上传、URL爬取、AI智能分块和向量检索，构建企业专属知识体系。涵盖文档解析、网站爬取、向量检索和AI总结等能力。",
        },
        {
          icon: <MessageCircle size={20} className="text-white" />,
          title: "多轮智能对话",
          description: "融合人设、知识库和对话记忆，生成高度个性化的智能回复，支持50轮上下文记忆。采用RAG检索增强技术，确保回答专业准确。",
        },
        {
          icon: <Globe size={20} className="text-white" />,
          title: "网站Widget",
          description: "一行代码嵌入任意网站，创始人数字人在线接待访客，7×24小时智能客服。零开发成本，即装即用。",
        },
        {
          icon: <FileText size={20} className="text-white" />,
          title: "智能获客引擎",
          description: "AI自动识别客户意向，智能引导收集联系方式，确认需求后自动生成包含项目概述、功能模块、报价明细的专属方案PDF。",
          badge: "热门",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: "微信消息通道",
          description: "对接微信个人号/企业微信，AI自动回复消息，支持群聊管理和批量触达，全方位覆盖客户触点。",
        },
        {
          icon: <GraduationCap size={20} className="text-white" />,
          title: "AI教练模式",
          description: "开启后用户发英文时自动触发AI教练评估，支持学员训练和能力评估反馈，适用于教育培训场景。",
        },
      ]}
      scenarios={[
        {
          title: "企业官网获客",
          description: "在企业官网嵌入创始人数字人Widget，访客进入网站即可与创始人AI对话。AI自动介绍产品、解答疑问、收集需求、生成方案，将网站流量转化为销售线索。",
          icon: <Globe size={22} className="text-white" />,
        },
        {
          title: "导师/教练服务",
          description: "知识付费导师或教练创建数字分身，7×24小时回答学员问题，提供个性化指导。一个导师同时服务上万学员，影响力倍增。",
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: "销售团队赋能",
          description: "复刻销售冠军的话术和经验，为整个销售团队提供AI辅助。自动接待客户、挖掘需求、生成方案，大幅缩短销售周期。",
          icon: <Briefcase size={22} className="text-white" />,
        },
        {
          title: "私域运营",
          description: "通过微信消息通道，AI自动管理私域客户群，主动关怀跟进、定时触达、沉默唤回，提升客户粘性和转化率。",
          icon: <Megaphone size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: "深度人格建模",
          description: "通过分析创始人的历史对话、专业知识、表达风格等多维度数据，构建精细的人格模型。不仅复刻知识内容，更还原思维方式和表达习惯，让数字分身真正「像」本人。",
          metric: "多维度",
          metricLabel: "人格建模",
        },
        {
          title: "AI声音克隆技术",
          description: "采集真实声音样本，通过先进的AI声音克隆技术还原独特的音色和语调。对话自动语音回复，让数字分身不仅会说，更像本人在说。",
          metric: "高保真",
          metricLabel: "声音还原",
        },
        {
          title: "RAG 知识检索增强",
          description: "采用检索增强生成（RAG）技术，支持文档上传、URL爬取、AI智能分块和向量检索。回答基于真实知识内容，避免AI幻觉，确保专业性和准确性。",
          metric: "RAG",
          metricLabel: "技术架构",
        },
        {
          title: "全自动获客闭环",
          description: "AI自动完成访客接待→需求挖掘→方案生成→线索通知的完整闭环。自动生成专属方案PDF，实时通知管理员跟进，将网站流量高效转化为销售线索。",
          metric: "全闭环",
          metricLabel: "自动获客",
        },
      ]}
      architectureDescription="数字人复刻系统采用 RAG（检索增强生成）架构，核心包括知识向量化引擎、语义检索模块、人格建模层和语音合成层。知识库通过 Embedding 模型转化为向量存储，对话时先检索相关知识片段，再结合人格模型生成符合创始人风格的回答。声音克隆模块实现高保真语音合成。系统还集成了智能获客引擎，自动完成从对话到方案生成的完整闭环。"
    />
    </>
  );
}
