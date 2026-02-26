/**
 * AI能力实时展示板块
 * 模拟AI对话的打字机效果 + 多场景Tab切换
 * 让访客直观感受火鹰科技的AI产品能力
 */
import { useInView } from "@/hooks/useInView";
import { useState, useEffect, useRef } from "react";
import { Bot, User, Sparkles, MessageSquare, Mic, BarChart3 } from "lucide-react";

interface ChatMessage {
  role: "user" | "ai";
  content: string;
  typing?: boolean;
}

const SCENARIOS = [
  {
    id: "moss",
    label: "Moss 智能客服",
    icon: MessageSquare,
    gradient: "from-amber-500 to-red-500",
    badge: "自研产品",
    messages: [
      { role: "user" as const, content: "你们的AI智能体定制开发大概需要多长时间？" },
      { role: "ai" as const, content: "您好！根据项目复杂度不同，开发周期一般在4-12周。简单的AI客服智能体约4-6周，涉及大模型微调和知识库构建的项目约8-12周。我们采用敏捷开发模式，每两周交付可演示版本，确保方向一致。需要我为您安排一次免费的需求诊断吗？" },
      { role: "user" as const, content: "我们是教育行业，想做一个AI导师系统" },
      { role: "ai" as const, content: "教育行业是我们的优势领域！我们已经为多家教育机构部署了AI导师替身系统，核心能力包括：\n\n🎯 深度复刻导师教学风格和知识体系\n🎤 高保真声音克隆，还原导师真实声线\n📚 专属知识库构建，覆盖课程内容\n💬 7×24小时智能答疑，学员满意度提升40%\n\n最近一个教育客户的项目，8周内完成交付，学员续费率提升了25%。我可以为您安排一次产品演示。" },
    ],
  },
  {
    id: "salespark",
    label: "SaleSpark 销售训练",
    icon: Mic,
    gradient: "from-orange-500 to-rose-500",
    badge: "AI教练",
    messages: [
      { role: "user" as const, content: "我是一名销售新人，客户说'太贵了'我该怎么回应？" },
      { role: "ai" as const, content: "这是一个经典的价格异议场景！让我用SPIN销售方法论帮你分析：\n\n❌ 错误回应：直接降价或说\"我们的价格已经很便宜了\"\n\n✅ 正确策略（3步法）：\n1️⃣ 认同感受：\"我理解您对价格的关注...\"\n2️⃣ 挖掘痛点：\"如果不解决这个问题，每月损失的客户价值大约是多少？\"\n3️⃣ 价值重构：\"我们的方案帮助XX客户在3个月内ROI达到300%...\"\n\n现在让我们模拟一下这个场景，我来扮演客户，你来练习回应。准备好了吗？" },
      { role: "user" as const, content: "准备好了，开始吧" },
      { role: "ai" as const, content: "【AI客户模拟开始】\n\n我是张总，某连锁餐饮品牌的运营总监。你们的智能排班系统报价38万，说实话，市面上类似的产品十几万就能搞定。你们凭什么这么贵？\n\n⏱️ 计时开始 | 📊 评分维度：共情力·挖掘力·价值呈现·逻辑性·专业度" },
    ],
  },
  {
    id: "figoai",
    label: "FigoAI 智能工具",
    icon: BarChart3,
    gradient: "from-violet-500 to-fuchsia-500",
    badge: "多场景",
    messages: [
      { role: "user" as const, content: "帮我写一份关于智慧城市项目的投标书大纲" },
      { role: "ai" as const, content: "好的，我来为您生成智慧城市项目投标书大纲：\n\n📋 **投标书结构（共12章）**\n\n第一章 项目理解与需求分析\n├── 1.1 项目背景与政策解读\n├── 1.2 现状分析与痛点识别\n└── 1.3 需求理解与目标定义\n\n第二章 总体解决方案\n├── 2.1 设计理念与架构\n├── 2.2 技术路线图\n└── 2.3 AI+IoT融合方案\n\n第三章 核心功能设计\n├── 3.1 城市大脑数据中台\n├── 3.2 AI视频分析子系统\n├── 3.3 智能交通管理模块\n└── 3.4 应急指挥调度平台\n\n...\n\n📊 已自动匹配3个同类型中标案例作为参考\n⏱️ 完整标书预计生成时间：15分钟\n\n需要我继续生成完整内容吗？" },
    ],
  },
];

function TypewriterText({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, 18);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-0.5 h-4 bg-emerald-400 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

function ChatBubble({ message, animate }: { message: ChatMessage; animate: boolean }) {
  const isAI = message.role === "ai";

  return (
    <div className={`flex gap-3 ${isAI ? "" : "flex-row-reverse"}`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
        isAI
          ? "bg-gradient-to-br from-emerald-500 to-cyan-500"
          : "bg-white/10 border border-white/10"
      }`}>
        {isAI ? <Bot size={14} className="text-white" /> : <User size={14} className="text-white/60" />}
      </div>
      <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
        isAI
          ? "bg-white/[0.04] border border-white/[0.06] text-white/80"
          : "bg-blue-500/10 border border-blue-500/15 text-white/80"
      }`}>
        <div className="whitespace-pre-line">
          {animate && isAI ? (
            <TypewriterText text={message.content} />
          ) : (
            message.content
          )}
        </div>
      </div>
    </div>
  );
}

export default function AIShowcaseSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const [activeTab, setActiveTab] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(1);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const currentScenario = SCENARIOS[activeTab];

  // Reset messages when tab changes
  useEffect(() => {
    setVisibleMessages(1);
    setAnimatingIndex(0);
  }, [activeTab]);

  // Auto-advance messages
  useEffect(() => {
    if (visibleMessages >= currentScenario.messages.length) return;
    const timer = setTimeout(() => {
      setVisibleMessages((prev) => prev + 1);
      setAnimatingIndex(visibleMessages);
    }, 2500);
    return () => clearTimeout(timer);
  }, [visibleMessages, activeTab, currentScenario.messages.length]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-emerald-400/80 mb-3 block">AI in Action</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            AI能力<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">实时演示</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            以下对话场景均基于火鹰科技自研AI产品的真实能力。右下角的Moss客服，就是我们AI技术的活体证明。
          </p>
        </div>

        {/* Demo Container */}
        <div className="max-w-4xl mx-auto">
          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {SCENARIOS.map((scenario, i) => {
              const Icon = scenario.icon;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveTab(i)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? "bg-white/10 border border-white/15 text-white shadow-lg"
                      : "bg-white/[0.02] border border-white/[0.06] text-white/50 hover:text-white/70 hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon size={16} />
                  <span>{scenario.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === i
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-white/5 text-white/30"
                  }`}>
                    {scenario.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Chat Window */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a16]/80 backdrop-blur-xl overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${currentScenario.gradient} flex items-center justify-center`}>
                  <Sparkles size={12} className="text-white" />
                </div>
                <span className="text-sm font-medium text-white/70">{currentScenario.label}</span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  在线
                </span>
              </div>
              <span className="text-[10px] text-white/20">Powered by 火鹰科技</span>
            </div>

            {/* Chat messages */}
            <div ref={chatContainerRef} className="p-5 space-y-4 h-[420px] overflow-y-auto scrollbar-thin">
              {/* System message */}
              <div className="text-center">
                <span className="text-[11px] text-white/20 bg-white/[0.03] px-3 py-1 rounded-full">
                  AI 对话演示 · 基于火鹰科技自研大模型能力
                </span>
              </div>

              {currentScenario.messages.slice(0, visibleMessages).map((msg, i) => (
                <ChatBubble
                  key={`${activeTab}-${i}`}
                  message={msg}
                  animate={i === animatingIndex && msg.role === "ai"}
                />
              ))}

              {/* Typing indicator */}
              {visibleMessages < currentScenario.messages.length && currentScenario.messages[visibleMessages]?.role === "ai" && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input bar (decorative) */}
            <div className="px-5 py-3 border-t border-white/[0.06] bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/20">
                  输入消息体验AI对话...
                </div>
                <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium opacity-50 cursor-default">
                  发送
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-white/15">
                  想要真实体验？点击右下角 Moss 客服开始对话 →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
