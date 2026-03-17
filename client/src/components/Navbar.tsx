/*
 * 「量子棱镜」— 顶部导航栏
 * 毛玻璃效果 + 滚动时背景变深
 * 产品矩阵下拉菜单 + 解决方案下拉菜单 + "马上定制开发"高亮按钮
 * 支持外部链接（旧站点）
 * i18n国际化支持
 */
import { CUSTOM_DEV_ITEMS, COMPANY_INFO, PRODUCTS } from "@/lib/constants";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import WechatQRModal, { useWechatQRModal } from "./WechatQRModal";
import LanguageSwitcher from "./LanguageSwitcher";

// 产品 ID 到 i18n key 的映射
const PRODUCT_I18N_MAP: Record<string, string> = {
  "figo-engine": "figoEngine",
  salespark: "salespark",
  moss: "moss",
  reviewhub: "reviewhub",
  "farui-chat": "faruiChat",
  "figo-ai": "figoAI",
};

// 解决方案列表（可扩展）
const SOLUTIONS = [
  { id: "ai-quote", path: "/solutions/ai-quote", i18nKey: "aiQuote", isNew: true },
  { id: "ring-ai", path: "/products/ring-ai", i18nKey: "ringAI", isNew: false },
];

interface NavbarProps {
  /** 是否在详情页模式（非首页） */
  isDetailPage?: boolean;
}

export default function Navbar({ isDetailPage = false }: NavbarProps) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [customDevDropdownOpen, setCustomDevDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileCustomDevOpen, setMobileCustomDevOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const customDevDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const customDevDropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsDropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const solutionsDropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open: qrModalOpen, openModal: openQRModal, closeModal: closeQRModal } = useWechatQRModal();
  const [location] = useLocation();

  // 导航项 - 使用i18n翻译
  const navItems = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.products"), href: "#products", isProducts: true },
    { label: t("nav.solutions"), href: "#solutions", isSolutions: true },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.oldSite"), href: "https://appdev.figo.cn", external: true },
  ];

  // 定制开发下拉菜单项 - 使用i18n翻译
  const customDevItems = [
    { label: t("nav.aiAgentDev"), href: "/services" },
    { label: t("nav.appDev"), href: "https://appdev.figo.cn", external: true },
  ];

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
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(e.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (isDetailPage) {
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

  const handleSolutionsDropdownEnter = () => {
    if (solutionsDropdownTimer.current) clearTimeout(solutionsDropdownTimer.current);
    setSolutionsDropdownOpen(true);
  };

  const handleSolutionsDropdownLeave = () => {
    solutionsDropdownTimer.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
    }, 200);
  };

  // 渲染下拉菜单的通用函数
  const renderDropdown = (
    item: typeof navItems[0],
    isOpen: boolean,
    setIsOpen: (v: boolean) => void,
    ref: React.RefObject<HTMLDivElement | null>,
    onEnter: () => void,
    onLeave: () => void,
    children: React.ReactNode
  ) => (
    <div
      key={item.href}
      ref={ref}
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-full left-0 mt-2 w-56 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-[#12121e]/95 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
          <div className="py-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

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
          {navItems.map((item) => {
            // 产品矩阵 - 下拉菜单
            if (item.isProducts) {
              return renderDropdown(
                item,
                productsDropdownOpen,
                setProductsDropdownOpen,
                productsDropdownRef,
                handleProductsDropdownEnter,
                handleProductsDropdownLeave,
                PRODUCTS.filter(p => p.id !== "ring-ai").map((product) => (
                  <Link
                    key={product.id}
                    href={product.detailPath}
                    onClick={() => setProductsDropdownOpen(false)}
                    className="flex items-center justify-between px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200 block"
                  >
                    <span>{t(`products.${PRODUCT_I18N_MAP[product.id] || product.id}.name`)}</span>
                  </Link>
                ))
              );
            }

            // 解决方案 - 下拉菜单
            if (item.isSolutions) {
              return renderDropdown(
                item,
                solutionsDropdownOpen,
                setSolutionsDropdownOpen,
                solutionsDropdownRef,
                handleSolutionsDropdownEnter,
                handleSolutionsDropdownLeave,
                SOLUTIONS.map((sol) => (
                  <Link
                    key={sol.id}
                    href={sol.path}
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="flex items-center justify-between px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200 block"
                  >
                    <span>{t(`solutions.${sol.i18nKey}.name`)}</span>
                    {sol.isNew && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 rounded">NEW</span>
                    )}
                  </Link>
                ))
              );
            }

            // 外部链接（旧站点）
            if (item.external) {
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

        {/* 右侧：语言切换 + 马上定制开发按钮 */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
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
              {t("nav.customDev")}
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
                  <p className="text-xs font-medium text-white/40 tracking-wider uppercase">{t("nav.customDevService")}</p>
                </div>

                {/* Service links */}
                <div className="py-2">
                  {customDevItems.map((item) => (
                    <div key={item.href}>
                      {item.href.startsWith("/") ? (
                        <Link
                          href={item.href}
                          onClick={() => setCustomDevDropdownOpen(false)}
                          className="flex items-center justify-between px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200 block"
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
                  <p className="text-xs font-medium text-white/40 tracking-wider uppercase mb-3">{t("nav.salesWechat")}</p>
                  <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-lg bg-white p-1.5">
                      <img
                        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663267704571/YtbUYDAJtEwhIZuy.png"
                        alt={t("nav.salesWechat")}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-white/40 text-center mt-3">{t("nav.scanToAdd")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="p-2 text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0c0c14]/95 backdrop-blur-xl border-t border-white/5 max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              // 产品矩阵 - 移动端下拉菜单
              if (item.isProducts) {
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
                        {PRODUCTS.filter(p => p.id !== "ring-ai").map((product) => (
                          <Link
                            key={product.id}
                            href={product.detailPath}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileProductsOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {t(`products.${PRODUCT_I18N_MAP[product.id] || product.id}.name`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // 解决方案 - 移动端下拉菜单
              if (item.isSolutions) {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileSolutionsOpen && (
                      <div className="pl-4 py-2 space-y-1">
                        {SOLUTIONS.map((sol) => (
                          <Link
                            key={sol.id}
                            href={sol.path}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileSolutionsOpen(false);
                            }}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {t(`solutions.${sol.i18nKey}.name`)}
                            {sol.isNew && (
                              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 rounded">NEW</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // 外部链接
              if (item.external) {
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
                <span>{t("nav.customDev")}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${mobileCustomDevOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileCustomDevOpen && (
                <div className="mt-2 space-y-1">
                  {customDevItems.map((item) => (
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
