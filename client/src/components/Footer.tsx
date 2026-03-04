/*
 * 「量子棱镜」— 页脚
 * 品牌信息 + 导航链接 + 产品矩阵 + APP案例 + 联系方式 + 版权声明
 * i18n国际化支持
 */
import { COMPANY_INFO, PRODUCTS, getCompanyYears } from "@/lib/constants";
import { useTranslation } from "react-i18next";

const APP_CASES = [
  { nameKey: "智能家居APP", nameEn: "Smart Home App", href: "https://appdev.figo.cn/case/app/show_184.html" },
  { nameKey: "用工发布平台", nameEn: "Labor Platform", href: "https://appdev.figo.cn/case/app/show_173.html" },
  { nameKey: "幼儿园管理系统", nameEn: "Kindergarten System", href: "https://appdev.figo.cn/case/app/show_169.html" },
  { nameKey: "一对一视频交友APP", nameEn: "Video Dating App", href: "https://appdev.figo.cn/case/app/show_168.html" },
  { nameKey: "工程施工管理系统", nameEn: "Construction System", href: "https://appdev.figo.cn/case/app/show_167.html" },
  { nameKey: "打印交易商城APP", nameEn: "Print Marketplace", href: "https://appdev.figo.cn/case/app/show_165.html" },
  { nameKey: "智慧物业管理系统", nameEn: "Smart Property System", href: "https://appdev.figo.cn/case/xiaochengxu/show_187.html" },
  { nameKey: "研学活动小程序", nameEn: "Study Tour Mini-App", href: "https://appdev.figo.cn/case/xiaochengxu/show_186.html" },
];

const PRODUCT_I18N_MAP: Record<string, string> = {
  "figo-engine": "figoEngine",
  "salespark": "salespark",
  "moss": "moss",
  "ring-ai": "ringAI",
  "farui-chat": "faruiChat",
  "figo-ai": "figoAI",
};

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const companyYears = getCompanyYears();

  const navItems = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.products"), href: "#products" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.oldSite"), href: "https://appdev.figo.cn", external: true },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#080810]">
      <div className="container py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663267704571/yUbGYKiGhGOgSXOq.png" alt="火鹰科技" className="h-9 w-auto object-contain" />
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {t("footer.brandDesc", { year: COMPANY_INFO.established, years: companyYears })}
            </p>
            <div className="mt-4 space-y-1.5">
              <p className="text-xs text-white/30">
                <span className="text-white/50">{t("footer.hotline")}</span>
                <a href={`tel:${COMPANY_INFO.salesPhone.replace(/-/g, "")}`} className="hover:text-white/60 transition-colors">{COMPANY_INFO.salesPhone}、{COMPANY_INFO.salesPhoneAlt}</a>
              </p>
              <p className="text-xs text-white/30">
                <span className="text-white/50">{t("footer.emailLabel")}</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white/60 transition-colors">{COMPANY_INFO.email}</a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.quickNav")}</h4>
            <ul className="space-y-2.5">
              {navItems.map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  {item.external ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.productMatrix")}</h4>
            <ul className="space-y-2.5">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.detailPath}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {t(`products.${PRODUCT_I18N_MAP[product.id]}.name`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* APP Cases */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.appDev")}</h4>
            <ul className="space-y-2.5">
              {APP_CASES.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {isEn ? item.nameEn : item.nameKey}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://appdev.figo.cn/case"
                  className="text-sm text-emerald-400/60 hover:text-emerald-400 transition-colors"
                >
                  {t("footer.moreCases")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("footer.contactUs")}</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/40">
                <span className="text-white/60">{t("footer.addressLabel")}</span>{COMPANY_INFO.address}
              </li>
              <li className="text-sm text-white/40">
                <span className="text-white/60">{t("footer.websiteLabel")}</span>
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">{COMPANY_INFO.website}</a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-white/25">{t("footer.softwareCode")}{COMPANY_INFO.softwareCode}</p>
              <p className="text-xs text-white/25 mt-1">{t("footer.highTechCode")}{COMPANY_INFO.highTechCode}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {COMPANY_INFO.established}-{new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.icpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/50 transition-colors"
            >
              {COMPANY_INFO.icp}
            </a>
            <span className="text-xs text-white/30">{t("footer.stockCode", { code: COMPANY_INFO.stockCode })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
