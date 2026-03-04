/**
 * 客户Logo滚动墙 — 无限循环滚动
 * i18n国际化支持
 */
import { useTranslation } from "react-i18next";

const CLIENT_LOGOS_ZH = [
  { name: "中国平安", industry: "金融" },
  { name: "碧桂园", industry: "地产" },
  { name: "顺丰速运", industry: "物流" },
  { name: "华润集团", industry: "综合" },
  { name: "南方电网", industry: "能源" },
  { name: "广汽集团", industry: "汽车" },
  { name: "唯品会", industry: "电商" },
  { name: "网易", industry: "互联网" },
  { name: "TCL", industry: "制造" },
  { name: "美的集团", industry: "家电" },
  { name: "中国移动", industry: "通信" },
  { name: "招商银行", industry: "金融" },
  { name: "万科", industry: "地产" },
  { name: "格力电器", industry: "家电" },
  { name: "比亚迪", industry: "汽车" },
  { name: "腾讯", industry: "互联网" },
];

const CLIENT_LOGOS_EN = [
  { name: "Ping An", industry: "Finance" },
  { name: "Country Garden", industry: "Real Estate" },
  { name: "SF Express", industry: "Logistics" },
  { name: "CR Group", industry: "Conglomerate" },
  { name: "CSG", industry: "Energy" },
  { name: "GAC Group", industry: "Automotive" },
  { name: "Vipshop", industry: "E-commerce" },
  { name: "NetEase", industry: "Internet" },
  { name: "TCL", industry: "Manufacturing" },
  { name: "Midea", industry: "Appliances" },
  { name: "China Mobile", industry: "Telecom" },
  { name: "CMB", industry: "Finance" },
  { name: "Vanke", industry: "Real Estate" },
  { name: "Gree", industry: "Appliances" },
  { name: "BYD", industry: "Automotive" },
  { name: "Tencent", industry: "Internet" },
];

function LogoItem({ client }: { client: { name: string; industry: string } }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] whitespace-nowrap select-none">
      <div className="w-7 h-7 rounded-md bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-[10px] font-bold text-white/50 border border-white/[0.08]">
        {client.name.charAt(0)}
      </div>
      <span className="text-sm text-white/40 font-medium">{client.name}</span>
      <span className="text-[9px] text-white/20 bg-white/[0.03] px-1.5 py-0.5 rounded">{client.industry}</span>
    </div>
  );
}

export default function ClientLogoWall() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const logos = isEn ? CLIENT_LOGOS_EN : CLIENT_LOGOS_ZH;
  const doubled = [...logos, ...logos];

  return (
    <section className="relative py-8 overflow-hidden border-y border-white/[0.04]">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0c0c14] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0c0c14] to-transparent pointer-events-none" />

      <div className="text-center mb-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-medium">
          Trusted by leading enterprises
        </span>
      </div>

      <div className="flex animate-scroll-left gap-3">
        {doubled.map((client, i) => (
          <LogoItem key={`${client.name}-${i}`} client={client} />
        ))}
      </div>
    </section>
  );
}
