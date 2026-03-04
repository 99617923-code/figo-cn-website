/**
 * Hero区AI聊天演示 - i18n国际化支持
 * 全自动循环播放，展示6大产品能力
 */
import { useState, useEffect, useRef } from "react";
import { Bot, User, FileText, Video, Mic, TrendingUp, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Message {
  role: "user" | "ai";
  content: string;
}

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

const SCENARIO_ICONS = [
  <FileText className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
  <Video className="w-6 h-6" />,
  <FileText className="w-6 h-6" />,
  <Mic className="w-6 h-6" />,
  <TrendingUp className="w-6 h-6" />,
];

function ContentPreview({ index }: { index: number }) {
  const { t } = useTranslation();
  const previews = [
    // proposal
    <div className="w-full h-full flex flex-col gap-3 p-3">
      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-3 border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-5 h-5 text-cyan-400" />
          <div className="text-left">
            <div className="font-semibold text-white/90 text-sm">{t("chatDemo.preview.proposal.file")}</div>
            <div className="text-xs text-white/60">{t("chatDemo.preview.proposal.pages")}</div>
          </div>
        </div>
        <div className="text-[10px] text-white/60 space-y-1">
          <div>{t("chatDemo.preview.proposal.ch1")}</div>
          <div>{t("chatDemo.preview.proposal.ch2")}</div>
          <div>{t("chatDemo.preview.proposal.ch3")}</div>
          <div>{t("chatDemo.preview.proposal.ch4")}</div>
        </div>
      </div>
      <div className="text-center text-[10px] text-cyan-400 font-semibold">{t("chatDemo.preview.proposal.download")}</div>
    </div>,
    // pricing
    <div className="w-full h-full flex flex-col gap-2 p-3">
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-white/60">{t("chatDemo.preview.pricing.basic")}</span>
          <span className="text-cyan-400 font-semibold">¥50K</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden"><div className="bg-cyan-500 h-full w-1/3" /></div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-white/60">{t("chatDemo.preview.pricing.pro")}</span>
          <span className="text-emerald-400 font-semibold">¥150K</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden"><div className="bg-emerald-500 h-full w-full" /></div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-white/60">{t("chatDemo.preview.pricing.enterprise")}</span>
          <span className="text-amber-400 font-semibold">{t("chatDemo.preview.pricing.custom")}</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden"><div className="bg-amber-500 h-full w-2/3" /></div>
      </div>
    </div>,
    // video
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
      <div className="relative w-full aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-white/10">
        <div className="text-3xl">▶️</div>
      </div>
      <div className="w-full">
        <div className="flex justify-between text-[10px] text-white/60 mb-1">
          <span>{t("chatDemo.preview.video.progress")}</span><span>75%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-3/4 animate-pulse" />
        </div>
      </div>
    </div>,
    // contract
    <div className="w-full h-full flex flex-col gap-2 p-3">
      <div className="bg-white/10 rounded p-2 text-xs">
        <div className="font-semibold text-white/90 mb-1">{t("chatDemo.preview.contract.file")}</div>
        <div className="text-white/60 text-[10px] space-y-0.5">
          <div>{t("chatDemo.preview.contract.ch1")}</div>
          <div>{t("chatDemo.preview.contract.ch2")}</div>
          <div>{t("chatDemo.preview.contract.ch3")}</div>
          <div>{t("chatDemo.preview.contract.ch4")}</div>
        </div>
      </div>
      <div className="text-center text-[10px] text-cyan-400 mt-1">{t("chatDemo.preview.contract.download")}</div>
    </div>,
    // english
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-3">
      <div className="text-center">
        <div className="text-xs text-white/60 mb-1">{t("chatDemo.preview.english.score")}</div>
        <div className="text-lg font-bold text-orange-400">7.5/10</div>
      </div>
      <div className="w-full">
        <div className="flex gap-0.5 items-end justify-center h-8">
          {[0.3, 0.6, 0.8, 0.5, 0.7, 0.9, 0.4].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t opacity-60 animate-pulse"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </div>
      <div className="text-center text-[10px] text-white/50">{t("chatDemo.preview.english.play")}</div>
    </div>,
    // sales
    <div className="w-full h-full flex flex-col gap-2 p-3">
      <div className="text-center">
        <div className="text-3xl font-bold text-emerald-400 mb-1">8.2</div>
        <div className="text-xs text-white/60">/10</div>
      </div>
      <div className="space-y-1 text-[10px]">
        <div className="flex justify-between">
          <span className="text-white/60">{t("chatDemo.preview.sales.empathy")}</span>
          <span className="text-emerald-400">9/10</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">{t("chatDemo.preview.sales.logic")}</span>
          <span className="text-emerald-400">8/10</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">{t("chatDemo.preview.sales.expertise")}</span>
          <span className="text-yellow-400">7/10</span>
        </div>
      </div>
    </div>,
  ];
  return previews[index] || null;
}

const SCENARIO_KEYS = [
  { titleKey: "chatDemo.s1.title", userKey: "chatDemo.s1.user", aiKey: "chatDemo.s1.ai" },
  { titleKey: "chatDemo.s2.title", userKey: "chatDemo.s2.user", aiKey: "chatDemo.s2.ai" },
  { titleKey: "chatDemo.s3.title", userKey: "chatDemo.s3.user", aiKey: "chatDemo.s3.ai" },
  { titleKey: "chatDemo.s4.title", userKey: "chatDemo.s4.user", aiKey: "chatDemo.s4.ai" },
  { titleKey: "chatDemo.s5.title", userKey: "chatDemo.s5.user", aiKey: "chatDemo.s5.ai" },
  { titleKey: "chatDemo.s6.title", userKey: "chatDemo.s6.user", aiKey: "chatDemo.s6.ai" },
];

export default function AIChatDemo() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: t("chatDemo.greeting") },
  ]);

  const [displayedMessages, setDisplayedMessages] = useState(1);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 语言切换时重置消息
  useEffect(() => {
    setMessages([{ role: "ai", content: t("chatDemo.greeting") }]);
    setDisplayedMessages(1);
    setCurrentIndex(0);
  }, [i18n.language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % SCENARIO_KEYS.length;
      setCurrentIndex(nextIndex);
      setMessages([
        { role: "ai", content: t("chatDemo.greeting") },
        { role: "user", content: t(SCENARIO_KEYS[nextIndex].userKey) },
        { role: "ai", content: t(SCENARIO_KEYS[nextIndex].aiKey) },
      ]);
      setDisplayedMessages(1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, t]);

  useEffect(() => {
    if (displayedMessages < messages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [displayedMessages, messages.length]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedMessages]);

  return (
    <div className="flex flex-col lg:flex-row gap-1 lg:gap-6 h-full items-stretch w-full">
      <div className="flex-1 flex flex-col gap-2 lg:gap-3 justify-between min-w-0">
        <div className="text-lg sm:text-xl lg:text-3xl font-bold text-white leading-tight">
          <div>{t("chatDemo.heroLine1")} <span className="text-cyan-400">AI</span> {t("chatDemo.heroLine1Suffix")}</div>
          <div>{t("chatDemo.heroLine2")}<span className="text-cyan-400">{t("chatDemo.heroLine2Highlight")}</span>{t("chatDemo.heroLine2Suffix")}</div>
        </div>

        <div
          ref={chatContainerRef}
          className="h-[85%] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 overflow-y-auto flex flex-col gap-2 min-h-0"
        >
          {messages.slice(0, displayedMessages).map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}>
              <div className={`flex gap-2 max-w-xs ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                  msg.role === "ai" ? "bg-gradient-to-br from-emerald-500 to-cyan-500" : "bg-white/10 border border-white/10"
                }`}>
                  {msg.role === "ai" ? <Bot size={12} /> : <User size={12} />}
                </div>
                <div className={`px-3 py-2 rounded-lg text-xs lg:text-sm break-words ${
                  msg.role === "user"
                    ? "bg-cyan-500/20 border border-cyan-400/30 text-white"
                    : "bg-white/10 border border-white/10 text-white/80"
                }`}>
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

        <div className="flex gap-2">
          <input type="text" placeholder={t("chatDemo.inputPlaceholder")} className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm opacity-50" disabled />
          <button disabled className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold text-sm opacity-50">{t("chatDemo.send")}</button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center min-w-0">
        <div className="w-full h-[70%] lg:h-full bg-white/8 backdrop-blur-sm border border-cyan-400/20 rounded-xl lg:rounded-2xl p-3 lg:p-6 text-center flex flex-col justify-between items-center gap-2 lg:gap-3 animate-fade-up overflow-hidden">
          <div className="flex flex-col items-center gap-1 lg:gap-2">
            <div className="text-2xl lg:text-4xl text-cyan-400">{SCENARIO_ICONS[currentIndex]}</div>
            <div className="text-sm lg:text-lg font-bold text-cyan-400 line-clamp-2">{t(SCENARIO_KEYS[currentIndex].titleKey)}</div>
          </div>
          <div className="flex-1 w-full min-h-0 flex items-center justify-center text-xs lg:text-sm">
            <ContentPreview index={currentIndex} />
          </div>
          <div className="flex gap-1">
            {SCENARIO_KEYS.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all ${i === currentIndex ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
