/**
 * Hero区AI聊天演示 - 集成式设计
 * 展示效果直接嵌入AI消息中流式输出
 * PC端对话框占右侧宽度，移动端占满宽度
 */
import { useState, useEffect, useRef } from "react";
import { Bot, User, FileText, Video, Mic, TrendingUp, Zap } from "lucide-react";

interface Message {
  role: "user" | "ai";
  content: string;
  contentPreview?: React.ReactNode;
}

interface Scenario {
  id: string;
  icon: React.ReactNode;
  title: string;
  userQuery: string;
  aiResponse: string;
  contentType: "document" | "video" | "audio" | "chart" | "card" | "proposal";
  contentPreview: React.ReactNode;
}

const SCENARIOS: Scenario[] = [
  {
    id: "proposal",
    icon: <FileText className="w-6 h-6" />,
    title: "AI写标书",
    userQuery: "上传招标文件，帮我写投标标书",
    aiResponse: "✅ 标书已完成！\n\n📄 投标标书.docx\n共 600 页\n\n包含：项目理解、技术方案、商务报价、实施计划、风险管理等完整内容",
    contentType: "proposal",
    contentPreview: (
      <div className="w-full flex flex-col gap-3 p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-white/10">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <div className="text-left min-w-0">
            <div className="font-semibold text-white/90 text-sm">投标标书.docx</div>
            <div className="text-xs text-white/60">600 页 • 已完成</div>
          </div>
        </div>
        <div className="text-[10px] text-white/60 space-y-1">
          <div>✓ 第一章：项目理解与需求分析</div>
          <div>✓ 第二章：技术方案与实施方案</div>
          <div>✓ 第三章：商务报价与成本分析</div>
          <div>✓ 第四章：项目管理与风险控制</div>
        </div>
        <div className="text-center text-[10px] text-cyan-400 font-semibold">📥 点击下载标书</div>
      </div>
    ),
  },
  {
    id: "pricing",
    icon: <Zap className="w-6 h-6" />,
    title: "报价单生成",
    userQuery: "我需要报价",
    aiResponse: "✅ 已为您生成专业报价单",
    contentType: "chart",
    contentPreview: (
      <div className="w-full flex flex-col gap-2 p-3">
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-white/60">基础版</span>
            <span className="text-cyan-400 font-semibold">¥50K</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="bg-cyan-500 h-full w-1/3" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-white/60">专业版</span>
            <span className="text-emerald-400 font-semibold">¥150K</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="bg-emerald-500 h-full w-full" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-white/60">企业版</span>
            <span className="text-amber-400 font-semibold">按需定制</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="bg-amber-500 h-full w-2/3" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "video",
    icon: <Video className="w-6 h-6" />,
    title: "视频生成中",
    userQuery: "帮我做个短视频",
    aiResponse: "⏳ 视频生成进度：75%",
    contentType: "video",
    contentPreview: (
      <div className="w-full flex flex-col items-center justify-center gap-2 p-3">
        <div className="relative w-full aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-white/10">
          <div className="text-3xl">▶️</div>
        </div>
        <div className="w-full">
          <div className="flex justify-between text-[10px] text-white/60 mb-1">
            <span>进度</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-3/4 animate-pulse" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "contract",
    icon: <FileText className="w-6 h-6" />,
    title: "合同生成",
    userQuery: "生成合同",
    aiResponse: "✅ 已为您生成专业合同文档",
    contentType: "document",
    contentPreview: (
      <div className="w-full flex flex-col gap-2 p-3 bg-white/10 rounded border border-white/10">
        <div className="font-semibold text-white/90 text-sm">📋 服务合同.docx</div>
        <div className="text-white/60 text-[10px] space-y-0.5">
          <div>✓ 第一条：服务范围与内容</div>
          <div>✓ 第二条：价格与支付方式</div>
          <div>✓ 第三条：交付时间与里程碑</div>
          <div>✓ 第四条：保密与知识产权</div>
        </div>
        <div className="text-center text-[10px] text-cyan-400 mt-1">📥 点击下载</div>
      </div>
    ),
  },
  {
    id: "english",
    icon: <Mic className="w-6 h-6" />,
    title: "AI英语教练",
    userQuery: "做英语AI教练",
    aiResponse: "✅ 英语讲解已启动",
    contentType: "audio",
    contentPreview: (
      <div className="w-full flex flex-col items-center justify-center gap-3 p-3">
        <div className="text-center">
          <div className="text-xs text-white/60 mb-1">发音评分</div>
          <div className="text-lg font-bold text-orange-400">7.5/10</div>
        </div>
        <div className="w-full">
          <div className="flex gap-0.5 items-end justify-center h-8">
            {[0.3, 0.6, 0.8, 0.5, 0.7, 0.9, 0.4].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t opacity-60 animate-pulse"
                style={{ height: `${h * 100}%`, animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
        <div className="text-center text-[10px] text-white/50">🎵 点击播放讲解</div>
      </div>
    ),
  },
  {
    id: "sales",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "销售话术评分",
    userQuery: "评估销售话术",
    aiResponse: "✅ 评分结果",
    contentType: "card",
    contentPreview: (
      <div className="w-full flex flex-col gap-2 p-3">
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-1">8.2</div>
          <div className="text-xs text-white/60">/10</div>
        </div>
        <div className="space-y-1 text-[10px] text-white/60">
          <div>✓ 开场吸引力强</div>
          <div>✓ 产品优势表述清晰</div>
          <div>⚠ 需加强客户痛点挖掘</div>
        </div>
      </div>
    ),
  },
];

function TypewriterText({ text, speed = 20 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayedText, text, speed]);

  return <div className="whitespace-pre-line">{displayedText}</div>;
}

export default function AIChatDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [displayedMessages, setDisplayedMessages] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const currentScenario = SCENARIOS[currentIndex];

  // 自动循环场景
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCENARIOS.length);
      setMessages([]);
      setDisplayedMessages(0);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // 初始化消息
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { role: "user", content: currentScenario.userQuery },
        {
          role: "ai",
          content: currentScenario.aiResponse,
          contentPreview: currentScenario.contentPreview,
        },
      ]);
      setDisplayedMessages(0);
    }
  }, [currentIndex, currentScenario]);

  // 逐条显示消息
  useEffect(() => {
    if (displayedMessages < messages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [displayedMessages, messages.length]);

  // 自动滚动到底部
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedMessages]);

  return (
    <div className="flex flex-col h-full w-full gap-2 lg:gap-3">
      {/* 标题 */}
      <div className="text-lg sm:text-xl lg:text-3xl font-bold text-white leading-tight">
        与 <span className="text-cyan-400">AI</span> 对话 快速体验<span className="text-cyan-400">6大产品</span>能力
      </div>

      {/* 对话框 - PC端占右侧宽度，移动端占满宽度 */}
      <div
        ref={chatContainerRef}
        className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 lg:p-4 overflow-y-auto flex flex-col gap-3 min-h-0"
      >
        {messages.slice(0, displayedMessages).map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
          >
            <div
              className={`flex gap-2 max-w-full lg:max-w-md ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              {/* 头像 */}
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                  msg.role === "ai"
                    ? "bg-gradient-to-br from-emerald-500 to-cyan-500"
                    : "bg-white/10 border border-white/10"
                }`}
              >
                {msg.role === "ai" ? (
                  <Bot size={12} />
                ) : (
                  <User size={12} />
                )}
              </div>

              {/* 消息内容 */}
              <div className="flex flex-col gap-2 min-w-0">
                {/* 文本消息 */}
                <div
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm break-words ${
                    msg.role === "user"
                      ? "bg-cyan-500/20 border border-cyan-400/30 text-white"
                      : "bg-white/10 border border-white/10 text-white/80"
                  }`}
                >
                  {msg.role === "ai" && idx === displayedMessages - 1 ? (
                    <TypewriterText text={msg.content} speed={20} />
                  ) : (
                    <div className="whitespace-pre-line">{msg.content}</div>
                  )}
                </div>

                {/* 展示效果 - 嵌入AI消息中 */}
                {msg.role === "ai" && msg.contentPreview && (
                  <div className="max-w-full lg:max-w-md">
                    {msg.contentPreview}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 场景指示器 */}
      <div className="flex gap-1 justify-center">
        {SCENARIOS.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${
              i === currentIndex ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
