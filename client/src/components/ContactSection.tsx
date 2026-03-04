/*
 * 「量子棱镜」— 联系我们 / CTA（增强版）
 * i18n国际化支持
 */
import { IMAGES, COMPANY_INFO } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin, Globe, ArrowRight, Clock, CheckCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface FormData {
  name: string;
  contact: string;
  company: string;
  budget: string;
  description: string;
  source: string;
}

export default function ContactSection() {
  const { t } = useTranslation();
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const [formData, setFormData] = useState<FormData>({
    name: "", contact: "", company: "", budget: "", description: "", source: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const BUDGET_OPTIONS = [
    { value: "", label: t("contact.budgetDefault") },
    { value: "5w-below", label: t("contact.budget1") },
    { value: "5w-15w", label: t("contact.budget2") },
    { value: "15w-50w", label: t("contact.budget3") },
    { value: "50w-above", label: t("contact.budget4") },
    { value: "not-sure", label: t("contact.budget5") },
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source") || params.get("source") || document.referrer || "direct";
    setFormData((prev) => ({ ...prev, source }));
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = t("contact.nameError");
    if (!formData.contact.trim()) {
      newErrors.contact = t("contact.contactError");
    } else {
      const isPhone = /^1[3-9]\d{9}$/.test(formData.contact.trim());
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact.trim());
      if (!isPhone && !isEmail) newErrors.contact = t("contact.contactInvalid");
    }
    if (!formData.description.trim()) newErrors.description = t("contact.descError");
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 overflow-hidden">
        <img src={IMAGES.ctaBg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c14] via-[#0c0c14]/80 to-[#0c0c14]" />
      </div>

      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-purple-400/80 mb-3 block">{t("contact.sectionLabel")}</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {t("contact.title")}<span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">{t("contact.contactInfo")}</h3>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">{t("contact.salesHotline")}</div>
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
                <div className="text-sm font-medium text-white mb-0.5">{t("contact.workHours")}</div>
                <span className="text-sm text-white/50">{t("contact.workHoursValue")}</span>
                <div className="text-xs text-white/30 mt-0.5">{t("contact.afterHours")}</div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">{t("contact.email")}</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-white/50 hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
                <div className="text-xs text-white/30 mt-0.5">{t("contact.corpEmail")}</div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">{t("contact.address")}</div>
                <span className="text-sm text-white/50">{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Globe size={18} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-0.5">{t("contact.website")}</div>
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
                <h3 className="text-2xl font-bold text-white mb-2">{t("contact.successTitle")}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{t("contact.successMsg")}</p>
                <p className="text-xs text-white/30">{t("contact.successUrgent", { phone: COMPANY_INFO.salesPhone })}</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-3">{t("contact.formTitle")}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">{t("contact.formSubtitle")}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/40 mb-1.5 block">{t("contact.nameLabel")}</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={t("contact.namePlaceholder")}
                        className={`w-full px-4 py-3 text-sm text-white bg-white/[0.04] border rounded-xl focus:outline-none focus:ring-1 transition-all placeholder:text-white/20 ${
                          errors.name ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/25" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/25"
                        }`}
                      />
                      {errors.name && <p className="text-[10px] text-red-400/80 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-xs text-white/40 mb-1.5 block">{t("contact.companyLabel")}</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder={t("contact.companyPlaceholder")}
                        className="w-full px-4 py-3 text-sm text-white bg-white/[0.04] border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/25 transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-white/40 mb-1.5 block">{t("contact.contactLabel")}</label>
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={(e) => handleChange("contact", e.target.value)}
                      placeholder={t("contact.contactPlaceholder")}
                      className={`w-full px-4 py-3 text-sm text-white bg-white/[0.04] border rounded-xl focus:outline-none focus:ring-1 transition-all placeholder:text-white/20 ${
                        errors.contact ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/25" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/25"
                      }`}
                    />
                    {errors.contact && <p className="text-[10px] text-red-400/80 mt-1">{errors.contact}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-white/40 mb-1.5 block">{t("contact.budgetLabel")}</label>
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
                    <label className="text-xs text-white/40 mb-1.5 block">{t("contact.descLabel")}</label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => handleChange("description", e.target.value)}
                      placeholder={t("contact.descPlaceholder")}
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
                      <><Loader2 size={16} className="animate-spin" />{t("contact.submitting")}</>
                    ) : (
                      <>{t("contact.submit")}<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
