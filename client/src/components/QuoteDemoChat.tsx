/*
 * 「量子棱镜」— AI 智能报价模拟聊天框
 * 模拟用户提交需求 → AI 分析 → 出报价的完整交互流程
 * 自动播放动画，让访客直观感受智能报价体验
 */
import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, FileText, Download, Sparkles } from "lucide-react";

interface ChatMessage {
  role: "user" | "ai";
  content: string;
  typing?: boolean;
  isQuote?: boolean;
  quoteData?: {
    projectName: string;
    totalPrice: string;
    modules: { name: string; price: string }[];
    timeline: string;
  };
}

interface QuoteDemoChatProps {
  isEn?: boolean;
}

// 中文对话脚本
const SCRIPT_ZH: Omit<ChatMessage, "typing">[] = [
  { role: "user", content: "你好，我想做一个装修行业的AI智能报价系统，客户输入户型和需求，自动生成报价单。" },
  { role: "ai", content: "您好！了解您的需求了。我来帮您分析一下这个装修行业AI智能报价系统的开发方案。请问几个关键问题：\n\n1. 需要支持哪些装修类型？（全屋/局部/商装）\n2. 报价单需要包含材料品牌选择吗？\n3. 是否需要3D户型预览功能？" },
  { role: "user", content: "全屋和局部都要支持，需要材料品牌选择，3D暂时不需要。另外要支持微信小程序端。" },
  { role: "ai", content: "明白了！根据您的需求，我已经完成分析。以下是项目报价方案：" },
  {
    role: "ai",
    content: "",
    isQuote: true,
    quoteData: {
      projectName: "装修行业AI智能报价系统",
      totalPrice: "¥168,000",
      modules: [
        { name: "AI对话报价引擎", price: "¥45,000" },
        { name: "材料知识库管理", price: "¥28,000" },
        { name: "报价单PDF生成", price: "¥18,000" },
        { name: "微信小程序端", price: "¥35,000" },
        { name: "管理后台系统", price: "¥25,000" },
        { name: "数据分析看板", price: "¥17,000" },
      ],
      timeline: "45个工作日",
    },
  },
];

// 英文对话脚本
const SCRIPT_EN: Omit<ChatMessage, "typing">[] = [
  { role: "user", content: "Hi, I need an AI quoting system for the renovation industry. Customers input their room type and requirements, and it auto-generates a quote." },
  { role: "ai", content: "Hello! I understand your needs. Let me analyze the development plan for this renovation AI quoting system. A few key questions:\n\n1. What renovation types? (Full/Partial/Commercial)\n2. Need material brand selection?\n3. Need 3D room preview?" },
  { role: "user", content: "Support both full and partial. Need material brands. No 3D for now. Also need WeChat Mini Program support." },
  { role: "ai", content: "Got it! Based on your requirements, here's the project quote:" },
  {
    role: "ai",
    content: "",
    isQuote: true,
    quoteData: {
      projectName: "Renovation AI Smart Quoting System",
      totalPrice: "$23,800",
      modules: [
        { name: "AI Dialogue Quoting Engine", price: "$6,500" },
        { name: "Material Knowledge Base", price: "$3,800" },
        { name: "Quote PDF Generator", price: "$2,500" },
        { name: "WeChat Mini Program", price: "$5,000" },
        { name: "Admin Dashboard", price: "$3,500" },
        { name: "Analytics Dashboard", price: "$2,500" },
      ],
      timeline: "45 working days",
    },
  },
];

export default function QuoteDemoChat({ isEn = false }: QuoteDemoChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const script = isEn ? SCRIPT_EN : SCRIPT_ZH;

  // 自动滚动到底部
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // IntersectionObserver 触发自动播放
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setIsPlaying(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [hasStarted]);

  // 逐步播放对话
  useEffect(() => {
    if (!isPlaying || currentStep >= script.length) {
      if (currentStep >= script.length) setIsPlaying(false);
      return;
    }

    const msg = script[currentStep];
    const delay = msg.role === "user" ? 1200 : msg.isQuote ? 2000 : 1800;

    // 先显示 typing 状态
    const typingTimer = setTimeout(() => {
      setMessages((prev) => [...prev, { ...msg, typing: true }]);

      // 然后显示完整消息
      const contentTimer = setTimeout(() => {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...msg, typing: false };
          return updated;
        });
        setCurrentStep((s) => s + 1);
      }, msg.role === "user" ? 600 : msg.isQuote ? 1500 : 1200);

      return () => clearTimeout(contentTimer);
    }, delay);

    return () => clearTimeout(typingTimer);
  }, [isPlaying, currentStep, script]);

  // 重播
  const handleReplay = () => {
    setMessages([]);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <div ref={containerRef} className="w-full max-w-lg mx-auto">
      {/* 聊天窗口外壳 */}
      <div className="rounded-2xl border border-white/10 bg-[#12121e]/80 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
        {/* 头部 */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-gradient-to-r from-amber-500/10 to-orange-500/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {isEn ? "AI Smart Quote" : "AI 智能报价助手"}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-white/40">
                  {isEn ? "Online" : "在线"}
                </span>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-white/30 px-2 py-1 rounded-full border border-white/[0.06]">
            {isEn ? "DEMO" : "演示模式"}
          </div>
        </div>

        {/* 聊天区域 */}
        <div ref={chatRef} className="h-[420px] overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
          {/* 欢迎消息 */}
          {messages.length === 0 && !isPlaying && !hasStarted && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={28} className="text-amber-400" />
                </div>
                <p className="text-white/40 text-sm">
                  {isEn ? "Scroll down to see the demo" : "向下滚动查看演示"}
                </p>
              </div>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              {/* 头像 */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === "user"
                  ? "bg-blue-500/20 border border-blue-500/30"
                  : "bg-gradient-to-br from-amber-500 to-orange-500"
              }`}>
                {msg.role === "user" ? (
                  <User size={14} className="text-blue-400" />
                ) : (
                  <Bot size={14} className="text-white" />
                )}
              </div>

              {/* 消息内容 */}
              <div className={`max-w-[80%] ${msg.role === "user" ? "text-right" : ""}`}>
                {msg.typing ? (
                  <div className={`inline-block px-4 py-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-blue-500/20 border border-blue-500/20 rounded-tr-sm"
                      : "bg-white/[0.06] border border-white/[0.06] rounded-tl-sm"
                  }`}>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                ) : msg.isQuote && msg.quoteData ? (
                  <div className="bg-white/[0.06] border border-white/[0.06] rounded-2xl rounded-tl-sm overflow-hidden">
                    {/* 报价单头部 */}
                    <div className="px-4 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText size={14} className="text-amber-400" />
                        <span className="text-xs font-semibold text-amber-400">
                          {isEn ? "PROJECT QUOTE" : "项目报价单"}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-white">{msg.quoteData.projectName}</div>
                    </div>

                    {/* 模块明细 */}
                    <div className="px-4 py-3 space-y-2">
                      {msg.quoteData.modules.map((mod, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-white/60">{mod.name}</span>
                          <span className="text-white/80 font-mono">{mod.price}</span>
                        </div>
                      ))}
                    </div>

                    {/* 总计 */}
                    <div className="px-4 py-3 border-t border-white/[0.06] bg-white/[0.02]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/40">{isEn ? "Total" : "合计"}</span>
                        <span className="text-lg font-bold text-amber-400 font-mono">{msg.quoteData.totalPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/40">{isEn ? "Timeline" : "预计工期"}</span>
                        <span className="text-xs text-white/60">{msg.quoteData.timeline}</span>
                      </div>
                    </div>

                    {/* 下载按钮 */}
                    <div className="px-4 py-3 border-t border-white/[0.06]">
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium hover:from-amber-500/30 hover:to-orange-500/30 transition-all">
                        <Download size={12} />
                        {isEn ? "Download PDF Quote" : "下载 PDF 报价单"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={`inline-block px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-blue-500/20 border border-blue-500/20 text-white/90 rounded-tr-sm"
                      : "bg-white/[0.06] border border-white/[0.06] text-white/70 rounded-tl-sm"
                  }`}>
                    {msg.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 底部输入框（装饰性） */}
        <div className="px-4 py-3 border-t border-white/[0.06] bg-[#0c0c14]/50">
          <div className="flex items-center gap-3">
            <div className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-white/30">
              {isEn ? "Describe your project needs..." : "描述您的项目需求..."}
            </div>
            <button className="w-9 h-9 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 opacity-60">
              <Send size={14} className="text-white" />
            </button>
          </div>

          {/* 重播按钮 */}
          {!isPlaying && currentStep >= script.length && (
            <button
              onClick={handleReplay}
              className="w-full mt-2 py-2 text-xs text-white/40 hover:text-white/60 transition-colors text-center"
            >
              {isEn ? "↻ Replay Demo" : "↻ 重新播放演示"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
