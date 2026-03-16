/**
 * 产品对比矩阵 — i18n国际化支持
 */
import { useInView } from "@/hooks/useInView";
import { CheckCircle2, MinusCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const PRODUCTS = [
  { nameKey: "comparison.p1", path: "/products/figo-engine", gradient: "from-blue-500 to-purple-600" },
  { nameKey: "comparison.p2", path: "/products/salespark", gradient: "from-orange-500 to-rose-500" },
  { nameKey: "comparison.p3", path: "/products/moss", gradient: "from-amber-500 to-red-600" },
  { nameKey: "comparison.p4", path: "/products/reviewhub", gradient: "from-emerald-500 to-cyan-500" },
  { nameKey: "comparison.p5", path: "/products/farui-chat", gradient: "from-blue-500 to-indigo-600" },
  { nameKey: "comparison.p6", path: "/products/figo-ai", gradient: "from-violet-500 to-fuchsia-500" },
];

const CATEGORIES = [
  {
    nameKey: "comparison.cat1",
    features: [
      { nameKey: "comparison.f1", products: [true, false, true, false, false, true] },
      { nameKey: "comparison.f2", products: [false, true, false, false, false, false] },
      { nameKey: "comparison.f3", products: [false, false, true, false, false, false] },
      { nameKey: "comparison.f4", products: [false, false, false, true, false, false] },
      { nameKey: "comparison.f5", products: [false, false, false, false, true, false] },
      { nameKey: "comparison.f6", products: [false, false, false, false, false, true] },
      { nameKey: "comparison.f7", products: [true, false, false, false, false, false] },
    ],
  },
  {
    nameKey: "comparison.cat2",
    features: [
      { nameKey: "comparison.f8", products: [true, true, true, true, true, true] },
      { nameKey: "comparison.f9", products: [true, true, true, true, true, true] },
      { nameKey: "comparison.f10", products: [true, false, true, false, false, true] },
      { nameKey: "comparison.f11", products: [false, false, true, false, false, false] },
      { nameKey: "comparison.f12", products: [true, true, false, true, true, true] },
      { nameKey: "comparison.f13", products: [true, true, true, true, true, true] },
    ],
  },
];

export default function ProductComparisonMatrix() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const { ref: tableRef, isInView: tableVisible } = useInView();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">{t("comparison.sectionLabel")}</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
            {t("comparison.matrixTitle")}<span className="gradient-text">{t("comparison.matrixHighlight")}</span>
          </h2>
          <p className="mt-3 text-sm text-white/50 leading-relaxed">{t("comparison.matrixSubtitle")}</p>
        </div>

        <div
          ref={tableRef}
          className={`max-w-5xl mx-auto overflow-x-auto transition-all duration-700 ${tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="min-w-[700px]">
            <div className="grid grid-cols-7 gap-0 mb-1">
              <div className="p-3" />
              {PRODUCTS.map((product) => (
                <div key={product.nameKey} className="p-3 text-center">
                  <Link
                    href={product.path}
                    className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${product.gradient} opacity-80 hover:opacity-100 transition-opacity`}
                  >
                    {t(product.nameKey)}
                  </Link>
                </div>
              ))}
            </div>

            {CATEGORIES.map((category) => (
              <div key={category.nameKey} className="mb-2">
                <div className="px-4 py-2">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-white/30">{t(category.nameKey)}</span>
                </div>
                {category.features.map((feature, fi) => (
                  <div
                    key={feature.nameKey}
                    className={`grid grid-cols-7 gap-0 rounded-lg transition-colors ${fi % 2 === 0 ? "bg-white/[0.02]" : ""} hover:bg-white/[0.04]`}
                  >
                    <div className="p-3 flex items-center">
                      <span className="text-xs text-white/60">{t(feature.nameKey)}</span>
                    </div>
                    {feature.products.map((supported, pi) => (
                      <div key={pi} className="p-3 flex items-center justify-center">
                        {supported ? <CheckCircle2 size={16} className="text-emerald-400" /> : <MinusCircle size={16} className="text-white/10" />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            <div className="grid grid-cols-7 gap-0 mt-3 pt-3 border-t border-white/[0.06]">
              <div className="p-3" />
              {PRODUCTS.map((product) => (
                <div key={product.nameKey} className="p-3 text-center">
                  <Link href={product.path} className="inline-flex items-center gap-1 text-[11px] text-blue-400/70 hover:text-blue-400 transition-colors">
                    {t("comparison.learnMore")} <ArrowRight size={10} />
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
