
/*
 * 「量子棱镜」— 火鹰数字人复刻系统 Moss 产品详情页
 * 数字人复刻系统
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import { useTranslation } from "react-i18next";
import {
  User, Mic2, BookOpen, MessageCircle, Heart, Users,
  Globe, Briefcase, ShoppingCart, GraduationCap, Megaphone, UserCheck,
  Zap, Brain, Shield, Layers,
  Clock, Bot, Database, Settings, FileText, Plug, BarChart3, Sparkles,
} from "lucide-react";

export default function Moss() {
  const { t, i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");

  return (
    <>
    <ProductSEO
      name={isEn ? "Moss - Digital Human Replication System" : "火鹰数字人复刻系统"}
      tagline={isEn ? "Replicate the Founder's IP, Let AI Host Every Customer for You" : "复刻创始人IP，让AI替你接待每一位客户"}
      description={isEn ? "The Moss Digital Human Replication System deeply replicates the founder's thinking, voice, and knowledge system to create a 7x24 online digital avatar. Embed it on your official website with a single line of code, and the AI will automatically receive visitors, collect requirements, generate proposals, and convert website traffic into sales leads." : "火鹰数字人复刻系统深度复刻创始人的思维、声音和知识体系，打造7×24小时在线的数字分身。一行代码嵌入官网，AI自动接待访客、收集需求、生成方案，将网站流量转化为销售线索。"}
      keywords={isEn ? ["AI Digital Human", "Digital Human Replication", "Voice Cloning", "AI Digital Avatar", "Intelligent Lead Generation", "Founder IP", "AI Agent Custom Development", "RAG Knowledge Base", "Moss", "Firehawk Tech"] : ["AI数字人", "数字人复刻", "声音克隆", "AI数字分身", "智能获客", "创始人 IP", "AI智能体定制开发", "RAG知识库", "Moss", "火鹰科技"]}
      path="/products/moss"
    />
    <ProductDetailLayout
      name={isEn ? "Moss - Digital Human Replication System" : "火鹰数字人复刻系统"}
      tagline={isEn ? "Replicate the Founder's IP · Let AI Host Every Customer for You" : "复刻创始人IP · 让AI替你接待每一位客户"}
      heroDescription={isEn ? "Deeply replicates the founder's thinking, voice, and knowledge system to create a 7x24 online digital avatar. Embed it on your official website with a single line of code, and the AI will automatically receive visitors, collect requirements, generate proposals, and convert website traffic into sales leads." : "深度复刻创始人的思维、声音和知识体系，打造 7×24 小时在线的数字分身。一行代码嵌入官网，AI自动接待访客、收集需求、生成方案，将网站流量转化为销售线索。"}
      gradient="from-amber-500 to-red-600"
      gradientColors="rgba(245,158,11,0.5), rgba(220,38,38,0.5)"
      heroIcon={<User size={28} className="text-white" />}
      stats={[
        { value: "7×24", label: isEn ? "Always Online" : "全天候在线" },
        { value: "50+", label: isEn ? "Rounds of Conversation Memory" : "轮对话记忆" },
        { value: "<3s", label: isEn ? "Response Speed" : "响应速度" },
        { value: "PDF", label: isEn ? "Auto-generates Proposals" : "自动出方案" },
      ]}
      features={[
        {
          icon: <Bot size={20} className="text-white" />,
          title: isEn ? "Digital Human Replication" : "数字人复刻",
          description: isEn ? "Deeply replicates the thinking patterns, expression habits, and professional knowledge of founders/mentors to create a highly realistic AI digital avatar. Supports persona configuration, personality trait modeling, and multi-role management." : "深度复刻创始人/导师的思维模式、表达习惯和专业知识，打造高度还原的AI数字分身。支持人设画像配置、性格特征建模和多角色管理。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <Mic2 size={20} className="text-white" />,
          title: isEn ? "Voice Cloning" : "声音克隆",
          description: isEn ? "Collects real voice samples and uses AI voice cloning technology to restore unique timbre and intonation for automatic voice replies in conversations. Supports timbre restoration, speech synthesis, and automatic playback." : "采集真实声音样本，通过AI声音克隆技术还原独特的音色和语调，对话自动语音回复。支持音色还原、语音合成和自动播放。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <Database size={20} className="text-white" />,
          title: isEn ? "Intelligent Knowledge Base" : "智能知识库",
          description: isEn ? "Supports document upload, URL crawling, AI-powered smart chunking, and vector retrieval to build an enterprise-exclusive knowledge system. Includes capabilities like document parsing, website crawling, vector search, and AI summarization." : "支持文档上传、URL爬取、AI智能分块和向量检索，构建企业专属知识体系。涵盖文档解析、网站爬取、向量检索和AI总结等能力。",
        },
        {
          icon: <MessageCircle size={20} className="text-white" />,
          title: isEn ? "Multi-turn Intelligent Conversation" : "多轮智能对话",
          description: isEn ? "Integrates persona, knowledge base, and conversational memory to generate highly personalized and intelligent responses, supporting up to 50 turns of context memory. Uses RAG technology to ensure professional and accurate answers." : "融合人设、知识库和对话记忆，生成高度个性化的智能回复，支持50轮上下文记忆。采用RAG检索增强技术，确保回答专业准确。",
        },
        {
          icon: <Globe size={20} className="text-white" />,
          title: isEn ? "Website Widget" : "网站Widget",
          description: isEn ? "Embed the founder's digital human on any website with a single line of code for 24/7 intelligent customer service. Zero development cost, plug and play." : "一行代码嵌入任意网站，创始人数字人在线接待访客，7×24小时智能客服。零开发成本，即装即用。",
        },
        {
          icon: <FileText size={20} className="text-white" />,
          title: isEn ? "Intelligent Lead Generation Engine" : "智能获客引擎",
          description: isEn ? "AI automatically identifies customer intent, intelligently guides them to provide contact information, and generates a custom proposal PDF with project overview, functional modules, and detailed pricing upon confirming requirements." : "AI自动识别客户意向，智能引导收集联系方式，确认需求后自动生成包含项目概述、功能模块、报价明细的专属方案PDF。",
          badge: isEn ? "Hot" : "热门",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: isEn ? "WeChat Messaging Channel" : "微信消息通道",
          description: isEn ? "Integrates with personal or corporate WeChat accounts for automated AI message replies. Supports group chat management and bulk messaging to cover all customer touchpoints." : "对接微信个人号/企业微信，AI自动回复消息，支持群聊管理和批量触达，全方位覆盖客户触点。",
        },
        {
          icon: <GraduationCap size={20} className="text-white" />,
          title: isEn ? "AI Coach Mode" : "AI教练模式",
          description: isEn ? "When enabled, automatically triggers an AI coach evaluation when users send messages in English. Supports student training and provides ability assessment feedback, suitable for educational and training scenarios." : "开启后用户发英文时自动触发AI教练评估，支持学员训练和能力评估反馈，适用于教育培训场景。",
        },
      ]}
      scenarios={[
        {
          title: isEn ? "Lead Generation on Corporate Website" : "企业官网获客",
          description: isEn ? "Embed the founder's digital human widget on the corporate website. Visitors can chat with the founder's AI upon entering the site. The AI automatically introduces products, answers questions, collects requirements, and generates proposals, converting website traffic into sales leads." : "在企业官网嵌入创始人数字人Widget，访客进入网站即可与创始人AI对话。AI自动介绍产品、解答疑问、收集需求、生成方案，将网站流量转化为销售线索。",
          icon: <Globe size={22} className="text-white" />,
        },
        {
          title: isEn ? "Mentor/Coach Services" : "导师/教练服务",
          description: isEn ? "Knowledge-based mentors or coaches can create digital avatars to answer student questions 24/7 and provide personalized guidance. One mentor can serve tens of thousands of students simultaneously, multiplying their influence." : "知识付费导师或教练创建数字分身，7×24小时回答学员问题，提供个性化指导。一个导师同时服务上万学员，影响力倍增。",
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: isEn ? "Sales Team Empowerment" : "销售团队赋能",
          description: isEn ? "Replicate the scripts and experience of top sales champions to provide AI assistance for the entire sales team. Automatically receive customers, uncover needs, and generate proposals, significantly shortening the sales cycle." : "复刻销售冠军的话术和经验，为整个销售团队提供AI辅助。自动接待客户、挖掘需求、生成方案，大幅缩短销售周期。",
          icon: <Briefcase size={22} className="text-white" />,
        },
        {
          title: isEn ? "Private Domain Operations" : "私域运营",
          description: isEn ? "Through the WeChat messaging channel, the AI automatically manages private customer groups, provides proactive follow-ups, timed outreach, and re-engages inactive users, increasing customer loyalty and conversion rates." : "通过微信消息通道，AI自动管理私域客户群，主动关怀跟进、定时触达、沉默唤回，提升客户粘性和转化率。",
          icon: <Megaphone size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: isEn ? "Deep Personality Modeling" : "深度人格建模",
          description: isEn ? "Builds a detailed personality model by analyzing multi-dimensional data such as the founder's historical conversations, professional knowledge, and expression style. It not only replicates knowledge content but also restores thinking patterns and expression habits, making the digital avatar truly 'like' the person." : "通过分析创始人的历史对话、专业知识、表达风格等多维度数据，构建精细的人格模型。不仅复刻知识内容，更还原思维方式和表达习惯，让数字分身真正「像」本人。",
          metric: isEn ? "Multi-dimensional" : "多维度",
          metricLabel: isEn ? "Personality Modeling" : "人格建模",
        },
        {
          title: isEn ? "AI Voice Cloning Technology" : "AI声音克隆技术",
          description: isEn ? "Collects real voice samples and uses advanced AI voice cloning technology to restore unique timbre and intonation. Conversations are automatically replied to with a synthesized voice, making the digital avatar not just talk, but talk like the person." : "采集真实声音样本，通过先进的AI声音克隆技术还原独特的音色和语调。对话自动语音回复，让数字分身不仅会说，更像本人在说。",
          metric: isEn ? "High-Fidelity" : "高保真",
          metricLabel: isEn ? "Voice Restoration" : "声音还原",
        },
        {
          title: isEn ? "RAG Knowledge Retrieval Enhancement" : "RAG 知识检索增强",
          description: isEn ? "Employs Retrieval-Augmented Generation (RAG) technology, supporting document upload, URL crawling, AI-powered smart chunking, and vector retrieval. Answers are based on real knowledge content, avoiding AI hallucinations and ensuring professionalism and accuracy." : "采用检索增强生成（RAG）技术，支持文档上传、URL爬取、AI智能分块和向量检索。回答基于真实知识内容，避免AI幻觉，确保专业性和准确性。",
          metric: "RAG",
          metricLabel: isEn ? "Architecture" : "技术架构",
        },
        {
          title: isEn ? "Fully Automated Lead Generation Loop" : "全自动获客闭环",
          description: isEn ? "The AI completes the entire closed loop from visitor reception → needs discovery → proposal generation → lead notification. It automatically generates a custom proposal PDF and notifies administrators for follow-up in real-time, efficiently converting website traffic into sales leads." : "AI自动完成访客接待→需求挖掘→方案生成→线索通知的完整闭环。自动生成专属方案PDF，实时通知管理员跟进，将网站流量高效转化为销售线索。",
          metric: isEn ? "Full Loop" : "全闭环",
          metricLabel: isEn ? "Automated Leads" : "自动获客",
        },
      ]}
      architectureDescription={isEn ? "The Digital Human Replication System uses a RAG (Retrieval-Augmented Generation) architecture, with core components including a knowledge vectorization engine, semantic retrieval module, personality modeling layer, and speech synthesis layer. The knowledge base is converted into vector storage via an Embedding model. During a conversation, relevant knowledge fragments are first retrieved, then combined with the personality model to generate a response in the founder's style. The voice cloning module achieves high-fidelity speech synthesis. The system also integrates an intelligent lead generation engine to automate the complete loop from conversation to proposal generation." : "数字人复刻系统采用 RAG（检索增强生成）架构，核心包括知识向量化引擎、语义检索模块、人格建模层和语音合成层。知识库通过 Embedding 模型转化为向量存储，对话时先检索相关知识片段，再结合人格模型生成符合创始人风格的回答。声音克隆模块实现高保真语音合成。系统还集成了智能获客引擎，自动完成从对话到方案生成的完整闭环。"}
    />
    </>
  );
}

