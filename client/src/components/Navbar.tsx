/*
 * 「量子棱镜」— 顶部导航栏
 * 毛玻璃效果 + 滚动时背景变深
 * 产品矩阵下拉菜单 + "马上定制开发"高亮按钮（包含下拉菜单和二维码）
 * 支持外部链接（旧站点）
 */
import { NAV_ITEMS, CUSTOM_DEV_ITEMS, COMPANY_INFO, PRODUCTS } from "@/lib/constants";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import WechatQRModal, { useWechatQRModal } from "./WechatQRModal";

interface NavbarProps {
  /** 是否在详情页模式（非首页） */
  isDetailPage?: boolean;
}

export default function Navbar({ isDetailPage = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [customDevDropdownOpen, setCustomDevDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileCustomDevOpen, setMobileCustomDevOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const customDevDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const customDevDropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsDropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open: qrModalOpen, openModal: openQRModal, closeModal: closeQRModal } = useWechatQRModal();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (customDevDropdownRef.current && !customDevDropdownRef.current.contains(e.target as Node)) {
        setCustomDevDropdownOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (isDetailPage) {
      // 在详情页中，跳转回首页对应锚点
      window.location.href = `/${href}`;
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCustomDevDropdownEnter = () => {
    if (customDevDropdownTimer.current) clearTimeout(customDevDropdownTimer.current);
    setCustomDevDropdownOpen(true);
  };

  const handleCustomDevDropdownLeave = () => {
    customDevDropdownTimer.current = setTimeout(() => {
      setCustomDevDropdownOpen(false);
    }, 200);
  };

  const handleProductsDropdownEnter = () => {
    if (productsDropdownTimer.current) clearTimeout(productsDropdownTimer.current);
    setProductsDropdownOpen(true);
  };

  const handleProductsDropdownLeave = () => {
    productsDropdownTimer.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200);
  };

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
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663267704571/yUbGYKiGhGOgSXOq.png" alt="火鹰科技" className="h-9 w-auto object-contain group-hover:brightness-110 transition-all" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            // 产品矩阵 - 特殊处理，添加下拉菜单
            if (item.label === "产品矩阵") {
              return (
                <div
                  key={item.href}
                  ref={productsDropdownRef}
                  className="relative"
                  onMouseEnter={handleProductsDropdownEnter}
                  onMouseLeave={handleProductsDropdownLeave}
                >
                  <button
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${productsDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Products Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 transition-all duration-300 ${
                      productsDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-[#12121e]/95 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
                      <div className="py-2">
                        {PRODUCTS.map((product) => (
                          <Link
                            key={product.id}
                            href={product.detailPath}
                            onClick={() => setProductsDropdownOpen(false)}
                            className="flex items-center justify-between px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200 block"
                          >
                            <span>{product.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // 外部链接（旧站点）
            if ((item as any).external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                  <ExternalLink size={11} className="opacity-40" />
                </a>
              );
            }

            // 路由链接（/services 等）
            if (item.href.startsWith("/")) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.href}
                href={isDetailPage ? `/${item.href}` : item.href}
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

        {/* 右侧：马上定制开发按钮（高亮） */}
        <div className="hidden lg:flex items-center gap-4">
          <div
            ref={customDevDropdownRef}
            className="relative"
            onMouseEnter={handleCustomDevDropdownEnter}
            onMouseLeave={handleCustomDevDropdownLeave}
          >
            <button
              onClick={() => setCustomDevDropdownOpen(!customDevDropdownOpen)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:from-orange-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 text-sm"
            >
              马上定制开发
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${customDevDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full right-0 mt-2 w-64 transition-all duration-300 ${
                customDevDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-[#12121e]/95 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
                {/* Dropdown header */}
                <div className="px-5 pt-4 pb-3 border-b border-white/[0.06]">
                  <p className="text-xs font-medium text-white/40 tracking-wider uppercase">定制开发服务</p>
                </div>

                {/* Service links */}
                <div className="py-2">
                  {CUSTOM_DEV_ITEMS.map((item) => (
                    <div key={item.href}>
                      {item.href.startsWith("/") ? (
                        <Link
                          href={item.href}
                          onClick={() => setCustomDevDropdownOpen(false)}
                          className="flex items-center justify-between px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
                        >
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setCustomDevDropdownOpen(false)}
                          className="flex items-center justify-between px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
                        >
                          <span>{item.label}</span>
                          <ExternalLink size={12} className="opacity-40" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/[0.06]" />

                {/* QR Code Section */}
                <div className="px-5 py-4">
                  <p className="text-xs font-medium text-white/40 tracking-wider uppercase mb-3">销售企业微信</p>
                  <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-lg bg-white p-1.5">
                      <img
                        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663267704571/YtbUYDAJtEwhIZuy.png"
                        alt="销售企业微信二维码"
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-white/40 text-center mt-3">扫码添加销售，获取一对一咨询</p>
                </div>
              </div>
            </div>
          </div>
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
              // 产品矩阵 - 移动端下拉菜单
              if (item.label === "产品矩阵") {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <div className="pl-4 py-2 space-y-1">
                        {PRODUCTS.map((product) => (
                          <Link
                            key={product.id}
                            href={product.detailPath}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileProductsOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // 外部链接
              if ((item as any).external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                    <ExternalLink size={11} className="opacity-40" />
                  </a>
                );
              }

              if (item.href.startsWith("/")) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors block"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.href}
                  href={isDetailPage ? `/${item.href}` : item.href}
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

            {/* Mobile: 马上定制开发 */}
            <div className="mt-2 pt-2 border-t border-white/5">
              <button
                onClick={() => setMobileCustomDevOpen(!mobileCustomDevOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-400 hover:to-red-500 transition-all"
              >
                <span>马上定制开发</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${mobileCustomDevOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileCustomDevOpen && (
                <div className="mt-2 space-y-1">
                  {CUSTOM_DEV_ITEMS.map((item) => (
                    <div key={item.href}>
                      {item.href.startsWith("/") ? (
                        <Link
                          href={item.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileCustomDevOpen(false);
                          }}
                          className="flex items-center justify-between px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors block"
                        >
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileCustomDevOpen(false);
                          }}
                          className="flex items-center justify-between px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          <span>{item.label}</span>
                          <ExternalLink size={12} className="opacity-40" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
