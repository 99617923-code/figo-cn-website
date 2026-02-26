/*
 * 「量子棱镜」— 顶部导航栏
 * 毛玻璃效果 + 滚动时背景变深
 * 产品矩阵下拉菜单 + 支持首页/详情页两种模式
 */
import { NAV_ITEMS, PRODUCTS, COMPANY_INFO } from "@/lib/constants";
import { Menu, X, ChevronDown, Cpu, Target, User, Watch, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "wouter";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cpu, Target, User, Watch, Sparkles,
};

interface NavbarProps {
  /** 是否在详情页模式（非首页） */
  isDetailPage?: boolean;
}

export default function Navbar({ isDetailPage = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (isDetailPage) {
      // 在详情页中，跳转回首页对应锚点
      window.location.href = `/FigoAgent${href}`;
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDropdownEnter = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setProductDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 200);
  };

  // 检查当前路径是否匹配某个产品
  const isProductActive = (detailPath: string) => location === detailPath;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isDetailPage
          ? "bg-[#0c0c14]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/FigoAgent"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
            火
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-base leading-tight tracking-tight">{COMPANY_INFO.shortName}</span>
            <span className="text-[10px] text-white/40 leading-tight tracking-wider">AI AGENT STUDIO</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            // 产品矩阵项需要下拉菜单
            if (item.href === "#products") {
              return (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => {
                      if (!isDetailPage) {
                        handleNavClick(item.href);
                      }
                      setProductDropdownOpen(!productDropdownOpen);
                    }}
                    className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors rounded-lg hover:bg-white/5 ${
                      productDropdownOpen ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${productDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 transition-all duration-300 ${
                      productDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-[#12121e]/95 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
                      {/* Dropdown header */}
                      <div className="px-5 pt-4 pb-3 border-b border-white/[0.06]">
                        <p className="text-xs font-medium text-white/40 tracking-wider uppercase">Product Matrix</p>
                      </div>

                      {/* Product list */}
                      <div className="py-2">
                        {PRODUCTS.map((product) => {
                          const Icon = iconMap[product.icon] || Sparkles;
                          const isActive = isProductActive(product.detailPath);
                          return (
                            <Link
                              key={product.id}
                              href={product.detailPath}
                              onClick={() => setProductDropdownOpen(false)}
                              className={`flex items-center gap-3.5 px-5 py-3 transition-all duration-200 group/item ${
                                isActive
                                  ? "bg-white/[0.08]"
                                  : "hover:bg-white/[0.05]"
                              }`}
                            >
                              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity`}>
                                <Icon size={16} className="text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`text-sm font-medium leading-tight ${isActive ? "text-white" : "text-white/70 group-hover/item:text-white"} transition-colors`}>
                                  {product.name}
                                </div>
                                <div className="text-[11px] text-white/35 mt-0.5 truncate">{product.tagline}</div>
                              </div>
                              {isActive && (
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                              )}
                            </Link>
                          );
                        })}
                      </div>

                      {/* Dropdown footer */}
                      <div className="px-5 py-3 border-t border-white/[0.06] bg-white/[0.02]">
                        <Link
                          href="/FigoAgent"
                          onClick={() => {
                            setProductDropdownOpen(false);
                            setTimeout(() => {
                              const el = document.getElementById("products");
                              if (el) el.scrollIntoView({ behavior: "smooth" });
                            }, 300);
                          }}
                          className="text-xs text-blue-400/70 hover:text-blue-400 transition-colors"
                        >
                          查看全部产品 →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.href}
                href={isDetailPage ? `/FigoAgent${item.href}` : item.href}
                onClick={(e) => {
                  if (!isDetailPage) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.salesPhone.replace(/-/g, "")}`}
            className="px-3 py-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            {COMPANY_INFO.salesPhone}
          </a>
          <a
            href={isDetailPage ? "/FigoAgent#contact" : "#contact"}
            onClick={(e) => {
              if (!isDetailPage) {
                e.preventDefault();
                handleNavClick("#contact");
              }
            }}
            className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
          >
            免费咨询
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0c0c14]/95 backdrop-blur-xl border-t border-white/5 max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              if (item.href === "#products") {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setMobileProductOpen(!mobileProductOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${mobileProductOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileProductOpen && (
                      <div className="ml-4 mt-1 mb-2 space-y-0.5 border-l border-white/[0.08] pl-4">
                        {PRODUCTS.map((product) => {
                          const Icon = iconMap[product.icon] || Sparkles;
                          return (
                            <Link
                              key={product.id}
                              href={product.detailPath}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 opacity-60`}>
                                <Icon size={12} className="text-white" />
                              </div>
                              <span>{product.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={isDetailPage ? `/FigoAgent${item.href}` : item.href}
                  onClick={(e) => {
                    if (!isDetailPage) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                    setMobileOpen(false);
                  }}
                  className="px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={isDetailPage ? "/FigoAgent#contact" : "#contact"}
              onClick={(e) => {
                if (!isDetailPage) {
                  e.preventDefault();
                  handleNavClick("#contact");
                }
                setMobileOpen(false);
              }}
              className="mt-2 px-4 py-3 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
            >
              免费咨询
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
