/*
 * 「量子棱镜」— 页脚
 * 品牌信息 + 导航链接 + 版权声明
 * 使用旧站真实备案信息，年份自动计算
 */
import { COMPANY_INFO, NAV_ITEMS, PRODUCTS, getCompanyYears } from "@/lib/constants";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const companyYears = getCompanyYears();

  return (
    <footer className="relative border-t border-white/5 bg-[#080810]">
      <div className="container py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663267704571/yUbGYKiGhGOgSXOq.png" alt="火鹰科技" className="h-9 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-base leading-tight">{COMPANY_INFO.shortName}</span>
                <span className="text-[10px] text-white/40 leading-tight tracking-wider">AI AGENT STUDIO</span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {COMPANY_INFO.established}年成立，{companyYears}年专注软件定制开发，国家高新技术企业。从传统软件到AI智能体，始终引领技术前沿。
            </p>
            <div className="mt-4 space-y-1.5">
              <p className="text-xs text-white/30">
                <span className="text-white/50">热线：</span>
                <a href={`tel:${COMPANY_INFO.salesPhone.replace(/-/g, "")}`} className="hover:text-white/60 transition-colors">{COMPANY_INFO.salesPhone}</a>
              </p>
              <p className="text-xs text-white/30">
                <span className="text-white/50">邮箱：</span>
                <a href="mailto:kefu@figo.cn" className="hover:text-white/60 transition-colors">kefu@figo.cn</a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">快速导航</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">产品矩阵</h4>
            <ul className="space-y-2.5">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.detailPath}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">联系我们</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/40">
                <span className="text-white/60">地址：</span>{COMPANY_INFO.address}
              </li>
              <li className="text-sm text-white/40">
                <span className="text-white/60">座机：</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white/70 transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="text-sm text-white/40">
                <span className="text-white/60">官网：</span>
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">{COMPANY_INFO.website}</a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-white/25">软件企业编号：{COMPANY_INFO.softwareCode}</p>
              <p className="text-xs text-white/25 mt-1">高企编号：{COMPANY_INFO.highTechCode}</p>
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
            <span className="text-xs text-white/30">新四板股权代码: {COMPANY_INFO.stockCode}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
