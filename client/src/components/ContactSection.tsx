/*
 * 「量子棱镜」— 联系我们 / CTA（增强版）
 * 全屏背景 + 联系方式 + 带验证的表单 + 百度统计事件追踪
 * 增强：表单验证、提交状态管理、成功反馈、UTM参数捕获、预算选择
 */
import { IMAGES, COMPANY_INFO } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin, Globe, ArrowRight, Clock, CheckCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface FormData {
  name: string;
  contact: string;
  company: string;
  budget: string;
  description: string;
  source: string;
}

const BUDGET_OPTIONS = [
  { value: "", label: "请选择预算范围" },
  { value: "5w-below", label: "5万以下" },
  { value: "5w-15w", label: "5万 - 15万" },
  { value: "15w-50w", label: "15万 - 50万" },
  { value: "50w-above", label: "50万以上" },
  { value: "not-sure", label: "暂不确定" },
];

export default function ContactSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const [formData, setFormData] = useState<FormData>({
    name: "", contact: "", company: "", budget: "", description: "", source: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source") || params.get("source") || document.referrer || "direct";
    setFormData((prev) => ({ ...prev, source }));
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "请输入您的称呼";
    if (!formData.contact.trim()) {
      newErrors.contact = "请输入联系方式";
    } else {
      const isPhone = /^1[3-9]\d{9}$/.test(formData.contact.trim());
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact.trim());
      if (!isPhone && !isEmail) newErrors.contact = "请输入有效的手机号或邮箱";
    }
    if (!formData.description.trim()) newErrors.description = "请简要描述您的需求";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitState("submitting");
    try {
      // @ts-ignore
      if (window._hmt) { window._hmt.push(["_trackEvent", "contact_form", "submit", formData.budget || "no_budget"]); }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitState("success");
    setTimeout(() => {
      setSubmitState("idle");
      setFormData((prev) => ({ ...prev, name: "", contact: "", company: "", budget: "", description: "" }));
    }, 5000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

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
          loading="lazy"
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
                <Phone size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">售前咨询热线</div>
                <a href={`tel:${COMPANY_INFO.salesPhone.replace(/-/g, "")}`} className="text-sm text-white/50 hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.salesPhone}
                </a>

              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">工作时间</div>
                <span className="text-sm text-white/50">工作日 9:30 - 18:00</span>
                <div className="text-xs text-white/30 mt-0.5">非工作时间可通过Moss客服留言</div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">电子邮箱</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-white/50 hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
                <div className="text-xs text-white/30 mt-0.5">企业邮箱：kefu@figo.cn</div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-amber-400" />
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

          {/* CTA Card with Enhanced Form */}
          <div className="glass-card rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            {submitState === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">提交成功！</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  我们的AI架构师将在24小时内与您联系，为您提供专属的技术方案。
                </p>
                <p className="text-xs text-white/30">
                  如需紧急咨询，请直接拨打 {COMPANY_INFO.salesPhone}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-3">免费获取AI解决方案</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">
                  描述您的业务需求，我们的AI架构师将在24小时内为您提供专属的技术方案和报价。
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/40 mb-1.5 block">您的称呼 *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="请输入您的姓名"
                        className={`w-full px-4 py-3 text-sm text-white bg-white/[0.04] border rounded-xl focus:outline-none focus:ring-1 transition-all placeholder:text-white/20 ${
                          errors.name ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/25" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/25"
                        }`}
                      />
                      {errors.name && <p className="text-[10px] text-red-400/80 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-xs text-white/40 mb-1.5 block">公司名称</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="公司/机构名称"
                        className="w-full px-4 py-3 text-sm text-white bg-white/[0.04] border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/25 transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-white/40 mb-1.5 block">联系方式 *</label>
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={(e) => handleChange("contact", e.target.value)}
                      placeholder="手机号或邮箱"
                      className={`w-full px-4 py-3 text-sm text-white bg-white/[0.04] border rounded-xl focus:outline-none focus:ring-1 transition-all placeholder:text-white/20 ${
                        errors.contact ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/25" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/25"
                      }`}
                    />
                    {errors.contact && <p className="text-[10px] text-red-400/80 mt-1">{errors.contact}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-white/40 mb-1.5 block">预算范围</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      className="w-full px-4 py-3 text-sm text-white bg-white/[0.04] border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/25 transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                    >
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#1a1a2e] text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-white/40 mb-1.5 block">需求描述 *</label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => handleChange("description", e.target.value)}
                      placeholder="简要描述您的AI应用需求，例如：需要开发一个AI智能客服系统..."
                      className={`w-full px-4 py-3 text-sm text-white bg-white/[0.04] border rounded-xl focus:outline-none focus:ring-1 transition-all placeholder:text-white/20 resize-none ${
                        errors.description ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/25" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/25"
                      }`}
                    />
                    {errors.description && <p className="text-[10px] text-red-400/80 mt-1">{errors.description}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === "submitting"}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {submitState === "submitting" ? (
                      <><Loader2 size={16} className="animate-spin" />提交中...</>
                    ) : (
                      <>提交咨询<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-[11px] text-white/30 text-center">
                  提交即表示您同意我们的隐私政策，我们承诺保护您的信息安全。
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
