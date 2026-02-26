/*
 * 「量子棱镜」— 联系我们 / CTA
 * 全屏背景 + 联系方式 + 表单
 */
import { IMAGES, COMPANY_INFO } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={IMAGES.ctaBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c14] via-[#0c0c14]/80 to-[#0c0c14]" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-purple-400/80 mb-3 block">Contact Us</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            开启您的<span className="gradient-text">AI 之旅</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            无论您是需要定制AI智能体、搭建大模型平台，还是探索AI在业务中的应用可能性，我们的专业团队都将为您提供一对一的技术咨询服务。
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">联系方式</h3>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">电子邮箱</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-white/50 hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">咨询热线</div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-white/50 hover:text-purple-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">公司地址</div>
                <span className="text-sm text-white/50">{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Globe size={18} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">官方网站</div>
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-cyan-400 transition-colors">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="glass-card rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-3">免费获取AI解决方案</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              描述您的业务需求，我们的AI架构师将在24小时内为您提供专属的技术方案和报价。
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">您的称呼</label>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  className="w-full px-4 py-3 text-sm text-white bg-white/[0.04] border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/25 transition-all placeholder:text-white/20"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">联系方式</label>
                <input
                  type="text"
                  placeholder="手机号或邮箱"
                  className="w-full px-4 py-3 text-sm text-white bg-white/[0.04] border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/25 transition-all placeholder:text-white/20"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">需求描述</label>
                <textarea
                  rows={3}
                  placeholder="简要描述您的AI应用需求..."
                  className="w-full px-4 py-3 text-sm text-white bg-white/[0.04] border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/25 transition-all placeholder:text-white/20 resize-none"
                />
              </div>
              <button className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5">
                提交咨询
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="mt-4 text-[11px] text-white/30 text-center">
              提交即表示您同意我们的隐私政策，我们承诺保护您的信息安全。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
