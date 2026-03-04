/*
 * 「量子棱镜」— 产品矩阵
 * 毛玻璃卡片 + 渐变边框光泽 + stagger入场动画
 * i18n国际化支持
 */
import { PRODUCTS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Cpu, Target, User, Watch, Sparkles, Scale, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import WechatQRModal from "@/components/WechatQRModal";
import { useTranslation } from "react-i18next";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cpu, Target, User, Watch, Sparkles, Scale,
};

const PRODUCT_I18N_MAP: Record<string, string> = {
  "figo-engine": "figoEngine",
  "salespark": "salespark",
  "moss": "moss",
  "ring-ai": "ringAI",
  "farui-chat": "faruiChat",
  "figo-ai": "figoAI",
};

// Stats label keys mapping per product
const PRODUCT_STATS_KEYS: Record<string, string[]> = {
  "figo-engine": ["products.figoEngine.stats.models", "products.figoEngine.stats.availability", "products.figoEngine.stats.latency"],
  "salespark": ["products.salespark.stats.users", "products.salespark.stats.sessions", "products.salespark.stats.methods"],
  "moss": ["products.moss.stats.voice", "products.moss.stats.uptime", "products.moss.stats.proposal"],
  "ring-ai": ["products.ringAI.stats.compat", "products.ringAI.stats.lang", "products.ringAI.stats.health"],
  "farui-chat": ["products.faruiChat.stats.fields", "products.faruiChat.stats.code", "products.faruiChat.stats.domestic"],
  "figo-ai": ["products.figoAI.stats.users", "products.figoAI.stats.tasks", "products.figoAI.stats.tools"],
};

// Stats value translation keys for products with Chinese values
const PRODUCT_STATS_VALUE_KEYS: Record<string, (string | null)[]> = {
  "moss": ["products.moss.stats.voiceVal", null, "products.moss.stats.proposalVal"],
  "ring-ai": ["products.ringAI.stats.compatVal", "products.ringAI.stats.langVal", null],
  "farui-chat": ["products.faruiChat.stats.fieldsVal", "products.faruiChat.stats.codeVal", null],
};

function ProductCard({ product, index, onGetDemo }: { product: typeof PRODUCTS[0]; index: number; onGetDemo: (name: string) => void }) {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();
  const Icon = iconMap[product.icon] || Sparkles;
  const i18nKey = PRODUCT_I18N_MAP[product.id];
  const statsKeys = PRODUCT_STATS_KEYS[product.id] || [];
  const featuresKey = `products.${i18nKey}.features`;

  return (
    <div
      ref={ref}
      className={`group relative block rounded-2xl p-6 lg:p-8 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06))`,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "inherit",
        }}
      />
      <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${product.gradient} opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />

      <div className="relative flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={22} className="text-white" />
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-medium text-emerald-400">AI Powered</span>
        </div>
      </div>

      <h3 className="relative text-xl font-semibold text-white mb-1 group-hover:text-white transition-colors">
        {t(`products.${i18nKey}.name`)}
      </h3>
      <p className="relative text-sm text-white/40 mb-4 group-hover:text-white/50 transition-colors">{t(`products.${i18nKey}.tagline`)}</p>
      <p className="relative text-sm text-white/55 leading-relaxed mb-6">{t(`products.${i18nKey}.description`)}</p>

      <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
        {product.stats.map((stat, si) => {
          const valueKeys = PRODUCT_STATS_VALUE_KEYS[product.id];
          const valueKey = valueKeys?.[si];
          const displayValue = valueKey ? t(valueKey) : stat.value;
          return (
            <div key={stat.label} className="text-center py-2 sm:py-2.5 px-1 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all">
              <div className="font-mono-data text-xs sm:text-sm font-semibold text-white">{displayValue}</div>
              <div className="text-[9px] sm:text-[10px] text-white/40 mt-0.5">{statsKeys[si] ? t(statsKeys[si]) : stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="relative flex flex-wrap gap-1.5 mb-6">
        {(t(`products.${i18nKey}.features`, { returnObjects: true }) as string[]).map((feature: string) => (
          <span
            key={feature}
            className="px-2.5 py-1 text-[11px] text-white/45 bg-white/[0.04] rounded-md border border-white/[0.06] group-hover:text-white/60 group-hover:border-white/[0.1] transition-all"
          >
            {feature}
          </span>
        ))}
      </div>

      <div className="relative flex gap-3">
        <Link
          href={product.detailPath}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-white/70 bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white hover:border-white/[0.15] transition-all duration-300"
        >
          {t("products.learnMore")}
          <ArrowRight size={14} />
        </Link>
        <button
          onClick={() => onGetDemo(t(`products.${i18nKey}.name`))}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-white/80 bg-gradient-to-r ${product.gradient} opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18z" />
          </svg>
          {t("products.getDemo")}
        </button>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [qrProductName, setQrProductName] = useState("");

  const handleGetDemo = (productName: string) => {
    setQrProductName(productName);
    setQrModalOpen(true);
  };

  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">{t("products.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("products.title")}<span className="gradient-text">{t("products.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} onGetDemo={handleGetDemo} />
          ))}
        </div>
      </div>

      <WechatQRModal
        open={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        title={t("products.getDemoTitle", { name: qrProductName })}
        subtitle={t("products.getDemoSubtitle")}
      />
    </section>
  );
}
