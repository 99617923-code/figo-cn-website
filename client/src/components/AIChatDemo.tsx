/**
 * Hero区AI聊天演示 - 缩小版本
 * 参考AIShowcaseSection的多模态展示方式
 * 全自动循环播放，展示6大产品能力
 */
import { useState, useEffect, useRef } from "react";
import { Bot, User, FileText, Video, Mic, TrendingUp, Zap, Upload } from "lucide-react";

interface Message {
  role: "user" | "ai";
  content: string;
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
    aiResponse: "✅ 标书已完成！\n\n📄 投标标书.docx\n共 600 页\n\n包含：项目理解、技术方案、商务报价、实施计划、风险管理等完整内容\n\n已自动生成为Word文档，可直接下载",
    contentType: "proposal",
    contentPreview: (
      <div className="w-full h-full flex flex-col gap-3 p-3">
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-3 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div className="text-left">
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
    aiResponse: "✅ 已为您生成专业报价单\n\n项目预算：¥50,000\n专业版：¥150,000\n企业版：按需定制\n\n报价单已生成为Excel文件",
    contentType: "chart",
    contentPreview: (
      <div className="w-full h-full flex flex-col gap-2 p-3">
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
    aiResponse: "⏳ 视频生成进度：75%\n预计完成时间：30秒\n分辨率：1080P\n格式：MP4\n\n✅ 视频已生成完成",
    contentType: "video",
    contentPreview: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
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
    aiResponse: "✅ 已为您生成专业合同文档\n包含：服务范围、价格、交付时间、保密条款\n\n合同已生成为Word文档，可直接使用",
    contentType: "document",
    contentPreview: (
      <div className="w-full h-full flex flex-col gap-2 p-3">
        <div className="bg-white/10 rounded p-2 text-xs">
          <div className="font-semibold text-white/90 mb-1">📋 服务合同.docx</div>
          <div className="text-white/60 text-[10px] space-y-0.5">
            <div>✓ 第一条：服务范围与内容</div>
            <div>✓ 第二条：价格与支付方式</div>
            <div>✓ 第三条：交付时间与里程碑</div>
            <div>✓ 第四条：保密与知识产权</div>
          </div>
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
    aiResponse: "✅ 英语讲解已启动\n您的发音：7.5/10\n建议：重点关注R音的发音\n\n讲解已生成语音文件，可下载学习",
    contentType: "audio",
    contentPreview: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center border border-white/10">
          <div className="text-xl">🎤</div>
        </div>
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
    aiResponse: "✅ 评分结果\n整体评分：8.2/10\n建议：增加产品优势说明，强化客户信心",
    contentType: "card",
    contentPreview: (
      <div className="w-full h-full flex flex-col gap-2 p-3">
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-1">8.2</div>
          <div className="text-xs text-white/60">/10</div>
        </div>
        <div className="space-y-1 text-[10px]">
          <div className="flex justify-between">
            <span className="text-white/60">共情力</span>
            <span className="text-emerald-400">9/10</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">逻辑性</span>
            <span className="text-emerald-400">8/10</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">专业度</span>
            <span className="text-yellow-400">7/10</span>
          </div>
        </div>
      </div>
    ),
  },
];

function TypewriterText({ text, speed = 30 }: { text: string; speed?: number }) {
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
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-0.5 h-3 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

export default function AIChatDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "👋 你好！我是火鹰AI助手，快速体验6大产品能力" },
  ]);
  const [displayedMessages, setDisplayedMessages] = useState(1);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const currentScenario = SCENARIOS[currentIndex];

  // 自动循环演示
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % SCENARIOS.length;
      setCurrentIndex(nextIndex);
      setMessages([
        { role: "ai", content: "👋 你好！我是火鹰AI助手，快速体验6大产品能力" },
        { role: "user", content: SCENARIOS[nextIndex].userQuery },
        { role: "ai", content: SCENARIOS[nextIndex].aiResponse },
      ]);
      setDisplayedMessages(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // 逐步显示消息
  useEffect(() => {
    if (displayedMessages < messages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [displayedMessages, messages.length]);

  // 自动滚动
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedMessages]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-full items-stretch w-full">
      {/* 左侧：聊天窗口 */}
      <div className="flex-1 flex flex-col gap-2 lg:gap-3 justify-between min-w-0">
        <div className="text-xl lg:text-3xl font-bold text-white leading-tight">
          与 <span className="text-cyan-400">AI</span> 对话
          <br />
          快速体验<span className="text-cyan-400">6大产品</span>能力
        </div>

        {/* 消息框 */}
        <div
          ref={chatContainerRef}
          className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 overflow-y-auto flex flex-col gap-2 min-h-0"
        >
          {messages.slice(0, displayedMessages).map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
            >
              <div
                className={`flex gap-2 max-w-xs ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
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
              </div>
            </div>
          ))}
        </div>

        {/* 输入框（装饰） */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="输入您的需求..."
            className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm opacity-50"
            disabled
          />
          <button
            disabled
            className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold text-sm opacity-50"
          >
            发送
          </button>
        </div>
      </div>

      {/* 右侧：多模态内容展示区 */}
      <div className="flex-1 flex flex-col items-center justify-center min-w-0">
        <div className="w-full h-full bg-white/8 backdrop-blur-sm border border-cyan-400/20 rounded-xl lg:rounded-2xl p-3 lg:p-6 text-center flex flex-col justify-between items-center gap-2 lg:gap-3 animate-fade-up overflow-hidden">
          {/* 标题和图标 */}
          <div className="flex flex-col items-center gap-1 lg:gap-2">
            <div className="text-2xl lg:text-4xl text-cyan-400">
              {currentScenario.icon}
            </div>
            <div className="text-sm lg:text-lg font-bold text-cyan-400 line-clamp-2">
              {currentScenario.title}
            </div>
          </div>

          {/* 多模态内容预覽 */}
          <div className="flex-1 w-full min-h-0 flex items-center justify-center text-xs lg:text-sm">
            {currentScenario.contentPreview}
          </div>

          {/* 场景指示器 */}
          <div className="flex gap-1">
            {SCENARIOS.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-6 bg-cyan-400"
                    : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
