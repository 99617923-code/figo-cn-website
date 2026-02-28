/**
 * 产品对比矩阵 — 帮助客户快速选择合适的AI产品
 * 营销目标：降低选择焦虑，引导客户找到最适合的产品
 * 放在产品矩阵板块之后
 */
import { useInView } from "@/hooks/useInView";
import { CheckCircle2, MinusCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const COMPARISON_DATA = {
  categories: [
    {
      name: "适用场景",
      features: [
        { name: "智能客服/问答", products: [true, false, true, false, true] },
        { name: "销售培训/模拟", products: [false, true, false, false, false] },
        { name: "数字人/声音克隆", products: [false, false, true, false, false] },
        { name: "健康数据分析", products: [false, false, false, true, false] },
        { name: "内容创作/标书", products: [false, false, false, false, true] },
        { name: "API统一管理", products: [true, false, false, false, false] },
      ],
    },
    {
      name: "核心能力",
      features: [
        { name: "大模型接入", products: [true, true, true, true, true] },
        { name: "私有化部署", products: [true, true, true, false, true] },
        { name: "知识库/RAG", products: [true, false, true, false, true] },
        { name: "实时语音合成", products: [false, false, true, false, false] },
        { name: "数据可视化", products: [true, true, false, true, true] },
        { name: "游戏化设计", products: [false, true, false, false, false] },
      ],
    },
  ],
  products: [
    { name: "FigoAPI", path: "/products/figo-engine", gradient: "from-blue-500 to-purple-600" },
    { name: "SaleSpark", path: "/products/salespark", gradient: "from-orange-500 to-rose-500" },
    { name: "Moss", path: "/products/moss", gradient: "from-amber-500 to-red-600" },
    { name: "Ring AI", path: "/products/ring-ai", gradient: "from-emerald-500 to-cyan-500" },
    { name: "FigoAI", path: "/products/figo-ai", gradient: "from-violet-500 to-fuchsia-500" },
  ],
};

export default function ProductComparisonMatrix() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: tableRef, isInView: tableVisible } = useInView();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="container relative">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Product Comparison</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
            产品能力<span className="gradient-text">对比矩阵</span>
          </h2>
          <p className="mt-3 text-sm text-white/50 leading-relaxed">
            快速了解每款产品的核心能力，找到最适合您业务场景的AI解决方案
          </p>
        </div>

        {/* Comparison Table */}
        <div
          ref={tableRef}
          className={`max-w-5xl mx-auto overflow-x-auto transition-all duration-700 ${tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="min-w-[700px]">
            {/* Product Headers */}
            <div className="grid grid-cols-6 gap-0 mb-1">
              <div className="p-3" /> {/* Empty corner */}
              {COMPARISON_DATA.products.map((product) => (
                <div key={product.name} className="p-3 text-center">
                  <Link
                    href={product.path}
                    className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${product.gradient} opacity-80 hover:opacity-100 transition-opacity`}
                  >
                    {product.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Categories & Features */}
            {COMPARISON_DATA.categories.map((category) => (
              <div key={category.name} className="mb-2">
                {/* Category Header */}
                <div className="px-4 py-2">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-white/30">{category.name}</span>
                </div>

                {/* Feature Rows */}
                {category.features.map((feature, fi) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-6 gap-0 rounded-lg transition-colors ${
                      fi % 2 === 0 ? "bg-white/[0.02]" : ""
                    } hover:bg-white/[0.04]`}
                  >
                    <div className="p-3 flex items-center">
                      <span className="text-xs text-white/60">{feature.name}</span>
                    </div>
                    {feature.products.map((supported, pi) => (
                      <div key={pi} className="p-3 flex items-center justify-center">
                        {supported ? (
                          <CheckCircle2 size={16} className="text-emerald-400" />
                        ) : (
                          <MinusCircle size={16} className="text-white/10" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom CTA Row */}
            <div className="grid grid-cols-6 gap-0 mt-3 pt-3 border-t border-white/[0.06]">
              <div className="p-3" />
              {COMPARISON_DATA.products.map((product) => (
                <div key={product.name} className="p-3 text-center">
                  <Link
                    href={product.path}
                    className="inline-flex items-center gap-1 text-[11px] text-blue-400/70 hover:text-blue-400 transition-colors"
                  >
                    了解详情 <ArrowRight size={10} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
