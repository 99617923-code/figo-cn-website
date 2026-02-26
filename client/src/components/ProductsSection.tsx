/*
 * 「量子棱镜」— 产品矩阵
 * 毛玻璃卡片 + 渐变边框光泽 + stagger入场动画
 */
import { PRODUCTS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { ExternalLink, Cpu, Target, User, Watch, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cpu, Target, User, Watch, Sparkles,
};

function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const { ref, isInView } = useInView();
  const Icon = iconMap[product.icon] || Sparkles;

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
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
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        style={{
          background: `linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06))`,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "inherit",
        }}
      />

      {/* Gradient accent line top */}
      <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${product.gradient} opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />

      {/* Header */}
      <div className="relative flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={22} className="text-white" />
        </div>
        <div className="p-2 text-white/20 group-hover:text-white/60 transition-colors">
          <ExternalLink size={16} />
        </div>
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-semibold text-white mb-1 group-hover:text-white transition-colors">{product.name}</h3>
      <p className="relative text-sm text-white/40 mb-4 group-hover:text-white/50 transition-colors">{product.tagline}</p>

      {/* Description */}
      <p className="relative text-sm text-white/55 leading-relaxed mb-6">{product.description}</p>

      {/* Stats */}
      <div className="relative grid grid-cols-3 gap-3 mb-6">
        {product.stats.map((stat) => (
          <div key={stat.label} className="text-center py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all">
            <div className="font-mono-data text-sm font-semibold text-white">{stat.value}</div>
            <div className="text-[10px] text-white/40 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="relative flex flex-wrap gap-1.5">
        {product.features.map((feature) => (
          <span
            key={feature}
            className="px-2.5 py-1 text-[11px] text-white/45 bg-white/[0.04] rounded-md border border-white/[0.06] group-hover:text-white/60 group-hover:border-white/[0.1] transition-all"
          >
            {feature}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function ProductsSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();

  return (
    <section id="products" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Product Matrix</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            五大AI产品<span className="gradient-text">矩阵</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            从底层API管理到上层应用场景，火鹰科技已构建覆盖AI全链路的产品生态，每一款产品都经过真实业务场景的打磨与验证。
          </p>
        </div>

        {/* Product grid - first 3 in top row, last 2 centered below */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {PRODUCTS.slice(0, 3).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-6 max-w-4xl mx-auto">
          {PRODUCTS.slice(3).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
