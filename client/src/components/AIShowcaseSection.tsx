/**
 * AI能力实时展示板块
 * i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { useState, useEffect, useRef } from "react";
import { Bot, User, Sparkles, MessageSquare, Mic, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ChatMessage {
  role: "user" | "ai";
  content: string;
}

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
        isAI ? "bg-gradient-to-br from-emerald-500 to-cyan-500" : "bg-white/10 border border-white/10"
      }`}>
        {isAI ? <Bot size={14} className="text-white" /> : <User size={14} className="text-white/60" />}
      </div>
      <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
        isAI ? "bg-white/[0.04] border border-white/[0.06] text-white/80" : "bg-blue-500/10 border border-blue-500/15 text-white/80"
      }`}>
        <div className="whitespace-pre-line">
          {animate && isAI ? <TypewriterText text={message.content} /> : message.content}
        </div>
      </div>
    </div>
  );
}

const SCENARIO_ICONS = [MessageSquare, Mic, BarChart3];
const SCENARIO_GRADIENTS = ["from-amber-500 to-red-500", "from-orange-500 to-rose-500", "from-violet-500 to-fuchsia-500"];

export default function AIShowcaseSection() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const [activeTab, setActiveTab] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(1);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scenarioLabels = [t("showcase.tab1"), t("showcase.tab2"), t("showcase.tab3")];
  const scenarioBadges = [t("showcase.badge1"), t("showcase.badge2"), t("showcase.badge3")];

  // Build messages from i18n
  const scenarioMessages: ChatMessage[][] = [
    [
      { role: "user", content: t("showcase.s1.u1") },
      { role: "ai", content: t("showcase.s1.a1") },
      { role: "user", content: t("showcase.s1.u2") },
      { role: "ai", content: t("showcase.s1.a2") },
    ],
    [
      { role: "user", content: t("showcase.s2.u1") },
      { role: "ai", content: t("showcase.s2.a1") },
      { role: "user", content: t("showcase.s2.u2") },
      { role: "ai", content: t("showcase.s2.a2") },
    ],
    [
      { role: "user", content: t("showcase.s3.u1") },
      { role: "ai", content: t("showcase.s3.a1") },
    ],
  ];

  const currentMessages = scenarioMessages[activeTab];

  useEffect(() => {
    setVisibleMessages(1);
    setAnimatingIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (visibleMessages >= currentMessages.length) return;
    const timer = setTimeout(() => {
      setVisibleMessages((prev) => prev + 1);
      setAnimatingIndex(visibleMessages);
    }, 2500);
    return () => clearTimeout(timer);
  }, [visibleMessages, activeTab, currentMessages.length]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-emerald-400/80 mb-3 block">{t("showcase.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("showcase.title")}<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{t("showcase.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">{t("showcase.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {scenarioLabels.map((label, i) => {
              const Icon = SCENARIO_ICONS[i];
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? "bg-white/10 border border-white/15 text-white shadow-lg"
                      : "bg-white/[0.02] border border-white/[0.06] text-white/50 hover:text-white/70 hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === i ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-white/30"
                  }`}>{scenarioBadges[i]}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a16]/80 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${SCENARIO_GRADIENTS[activeTab]} flex items-center justify-center`}>
                  <Sparkles size={12} className="text-white" />
                </div>
                <span className="text-sm font-medium text-white/70">{scenarioLabels[activeTab]}</span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t("showcase.online")}
                </span>
              </div>
              <span className="text-[10px] text-white/20">{t("showcase.poweredBy")}</span>
            </div>

            <div ref={chatContainerRef} className="p-5 space-y-4 h-[420px] overflow-y-auto scrollbar-thin">
              <div className="text-center">
                <span className="text-[11px] text-white/20 bg-white/[0.03] px-3 py-1 rounded-full">{t("showcase.demoNote")}</span>
              </div>

              {currentMessages.slice(0, visibleMessages).map((msg, i) => (
                <ChatBubble key={`${activeTab}-${i}`} message={msg} animate={i === animatingIndex && msg.role === "ai"} />
              ))}

              {visibleMessages < currentMessages.length && currentMessages[visibleMessages]?.role === "ai" && (
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

            <div className="px-5 py-3 border-t border-white/[0.06] bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/20">{t("showcase.inputPlaceholder")}</div>
                <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium opacity-50 cursor-default">{t("showcase.send")}</button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-white/15">{t("showcase.tryMoss")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
