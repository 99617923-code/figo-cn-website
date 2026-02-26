/*
 * 「量子棱镜」— 浮动CTA组件
 * 固定在页面右侧的快速咨询按钮组
 * 包含：电话咨询、在线咨询、微信扫码、回到顶部
 * 营销目标：随时可见的转化入口，降低客户决策门槛
 */
import { COMPANY_INFO } from "@/lib/constants";
import { Phone, MessageCircle, ArrowUp, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [showBackTop, setShowBackTop] = useState(false);
  const [phoneExpanded, setPhoneExpanded] = useState(false);
  const [wechatExpanded, setWechatExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/FigoAgent#contact";
    }
  };

  return (
    <>
      {/* Floating buttons */}
      <div className="fixed right-4 bottom-8 z-40 flex flex-col items-center gap-3">
        {/* Back to top */}
        {showBackTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.12] transition-all duration-300 shadow-lg shadow-black/20"
            title="回到顶部"
          >
            <ArrowUp size={18} />
          </button>
        )}

        {/* WeChat */}
        <div className="relative">
          {wechatExpanded && (
            <div className="absolute right-full mr-3 bottom-0 bg-[#12121e]/95 backdrop-blur-xl rounded-2xl border border-white/[0.1] p-5 shadow-2xl shadow-black/40 w-64">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium text-white">微信咨询</div>
                <button
                  onClick={() => setWechatExpanded(false)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="w-full aspect-square rounded-xl bg-white flex items-center justify-center mb-3 overflow-hidden">
                {/* 微信二维码占位 - 使用SVG生成简单的二维码样式 */}
                <div className="text-center p-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="white" />
                    {/* QR code pattern */}
                    <rect x="10" y="10" width="25" height="25" fill="#0c0c14" rx="2" />
                    <rect x="13" y="13" width="19" height="19" fill="white" rx="1" />
                    <rect x="16" y="16" width="13" height="13" fill="#0c0c14" rx="1" />
                    <rect x="65" y="10" width="25" height="25" fill="#0c0c14" rx="2" />
                    <rect x="68" y="13" width="19" height="19" fill="white" rx="1" />
                    <rect x="71" y="16" width="13" height="13" fill="#0c0c14" rx="1" />
                    <rect x="10" y="65" width="25" height="25" fill="#0c0c14" rx="2" />
                    <rect x="13" y="68" width="19" height="19" fill="white" rx="1" />
                    <rect x="16" y="71" width="13" height="13" fill="#0c0c14" rx="1" />
                    {/* Center data */}
                    <rect x="40" y="10" width="5" height="5" fill="#0c0c14" />
                    <rect x="48" y="10" width="5" height="5" fill="#0c0c14" />
                    <rect x="40" y="18" width="5" height="5" fill="#0c0c14" />
                    <rect x="55" y="18" width="5" height="5" fill="#0c0c14" />
                    <rect x="40" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="48" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="55" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="40" y="48" width="5" height="5" fill="#0c0c14" />
                    <rect x="48" y="48" width="5" height="5" fill="#0c0c14" />
                    <rect x="55" y="48" width="5" height="5" fill="#0c0c14" />
                    <rect x="65" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="75" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="85" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="65" y="48" width="5" height="5" fill="#0c0c14" />
                    <rect x="85" y="48" width="5" height="5" fill="#0c0c14" />
                    <rect x="65" y="55" width="5" height="5" fill="#0c0c14" />
                    <rect x="75" y="55" width="5" height="5" fill="#0c0c14" />
                    <rect x="85" y="55" width="5" height="5" fill="#0c0c14" />
                    <rect x="65" y="65" width="5" height="5" fill="#0c0c14" />
                    <rect x="75" y="65" width="5" height="5" fill="#0c0c14" />
                    <rect x="85" y="65" width="5" height="5" fill="#0c0c14" />
                    <rect x="40" y="55" width="5" height="5" fill="#0c0c14" />
                    <rect x="48" y="55" width="5" height="5" fill="#0c0c14" />
                    <rect x="10" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="18" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="25" y="40" width="5" height="5" fill="#0c0c14" />
                    <rect x="10" y="48" width="5" height="5" fill="#0c0c14" />
                    <rect x="25" y="48" width="5" height="5" fill="#0c0c14" />
                    <rect x="10" y="55" width="5" height="5" fill="#0c0c14" />
                    <rect x="18" y="55" width="5" height="5" fill="#0c0c14" />
                    <rect x="25" y="55" width="5" height="5" fill="#0c0c14" />
                    {/* Fire hawk logo center */}
                    <rect x="42" y="25" width="16" height="16" fill="white" stroke="#0c0c14" strokeWidth="1" rx="2" />
                    <text x="50" y="36" textAnchor="middle" fill="#0c0c14" fontSize="10" fontWeight="bold">火</text>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-white/40 text-center leading-relaxed">
                扫码添加企业微信<br />获取一对一专属咨询服务
              </p>
            </div>
          )}
          <button
            onClick={() => {
              setWechatExpanded(!wechatExpanded);
              setPhoneExpanded(false);
            }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
            title="微信咨询"
          >
            {/* WeChat icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.825 4.408c-3.958 0-7.174 2.42-7.174 5.402 0 2.983 3.216 5.404 7.174 5.404.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.108.24-.243 0-.06-.024-.12-.04-.178l-.325-1.233a.492.492 0 0 1 .177-.554C21.905 18.87 22.6 17.3 22.6 15.8c0-2.982-2.815-5.4-7.177-5.4zm-2.95 3.07c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm5.9 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z" />
            </svg>
          </button>
        </div>

        {/* Phone */}
        <div className="relative">
          {phoneExpanded && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#12121e]/95 backdrop-blur-xl rounded-xl border border-white/[0.1] px-4 py-3 shadow-2xl shadow-black/40">
              <div className="text-xs text-white/40 mb-1">售前热线</div>
              <a href={`tel:${COMPANY_INFO.salesPhone.replace(/-/g, "")}`} className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
                {COMPANY_INFO.salesPhone}
              </a>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-[#12121e] border-r border-t border-white/[0.1] rotate-45" />
            </div>
          )}
          <button
            onClick={() => {
              setPhoneExpanded(!phoneExpanded);
              setWechatExpanded(false);
            }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
            title="电话咨询"
          >
            <Phone size={18} />
          </button>
        </div>

        {/* Quick consult */}
        <button
          onClick={scrollToContact}
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
          title="在线咨询"
        >
          <MessageCircle size={18} />
        </button>
      </div>
    </>
  );
}
