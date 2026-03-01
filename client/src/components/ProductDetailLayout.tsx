/*
 * 「量子棱镜」— 产品详情页通用布局
 * 统一的产品详情页结构：完整Navbar + Hero + 功能列表 + 应用场景 + 技术优势 + CTA + 完整Footer
 */
import { useInView } from "@/hooks/useInView";
import { COMPANY_INFO } from "@/lib/constants";
import { Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WechatQRModal from "./WechatQRModal";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

interface Scenario {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TechAdvantage {
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

interface ProductDetailProps {
  name: string;
  tagline: string;
  heroDescription: string;
  gradient: string;
  gradientColors: string;
  heroIcon: React.ReactNode;
  stats: { value: string; label: string }[];
  features: Feature[];
  scenarios: Scenario[];
  techAdvantages: TechAdvantage[];
  architectureDescription?: string;
  children?: React.ReactNode;
}

/* ─── Extracted sub-components so hooks are NOT called inside loops ─── */

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">{label}</span>
      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{title}</h2>
      <p className="mt-4 text-base text-white/50 leading-relaxed">{subtitle}</p>
    </div>
  );
}

function FeatureCard({ feature, gradient, index }: { feature: Feature; gradient: string; index: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative p-6 rounded-2xl transition-all duration-700 group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transitionDelay: `${index * 80}ms`,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.04), rgba(139,92,246,0.04))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "inherit" }}
      />
      <div className="relative flex items-start gap-4">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity`}>
          {feature.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-base font-semibold text-white">{feature.title}</h3>
            {feature.badge && (
              <span className="px-2 py-0.5 text-[10px] font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">{feature.badge}</span>
            )}
          </div>
          <p className="text-sm text-white/45 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

function ScenarioCard({ scenario, gradient, index }: { scenario: Scenario; gradient: string; index: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative p-8 rounded-2xl transition-all duration-700 group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.03), rgba(139,92,246,0.03))", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "inherit" }}
      />
      <div className="relative">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 opacity-70 group-hover:opacity-100 transition-opacity`}>
          {scenario.icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-3">{scenario.title}</h3>
        <p className="text-sm text-white/45 leading-relaxed">{scenario.description}</p>
      </div>
    </div>
  );
}

function TechCard({ adv, index }: { adv: TechAdvantage; index: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-700 group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.04), rgba(139,92,246,0.04))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "inherit" }}
      />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">{adv.title}</h3>
          {adv.metric && (
            <div className="text-right flex-shrink-0 ml-4">
              <div className="font-mono text-xl font-bold text-blue-400">{adv.metric}</div>
              {adv.metricLabel && <div className="text-[10px] text-white/40">{adv.metricLabel}</div>}
            </div>
          )}
        </div>
        <p className="text-sm text-white/45 leading-relaxed">{adv.description}</p>
      </div>
    </div>
  );
}

/* ─── Main Layout ─── */

export default function ProductDetailLayout({
  name, tagline, heroDescription, gradient, gradientColors, heroIcon,
  stats, features, scenarios, techAdvantages, architectureDescription, children,
}: ProductDetailProps) {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const companyYears = new Date().getFullYear() - 2005;

  return (
    <div className="min-h-screen bg-[#0c0c14] text-white overflow-x-hidden">
      {/* 使用完整的Navbar，传入isDetailPage标记 */}
      <Navbar isDetailPage />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-[0.12]"
            style={{ background: `radial-gradient(ellipse, ${gradientColors}, transparent 70%)` }} />
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] opacity-[0.06]"
            style={{ background: `radial-gradient(circle, ${gradientColors}, transparent 60%)` }} />
        </div>

        <div className="container relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">首页</Link>
            <ChevronRight size={14} />
            <Link href="/#products" className="hover:text-white/60 transition-colors">产品矩阵</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">{name}</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl`}>
                {heroIcon}
              </div>
              <div>
                <h1 className="text-3xl lg:text-5xl font-bold text-white">{name}</h1>
                <p className="text-lg text-white/50 mt-1">{tagline}</p>
              </div>
            </div>

            <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-3xl mb-10">
              {heroDescription}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <div className="font-mono text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setQrModalOpen(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r ${gradient} hover:shadow-lg transition-all hover:-translate-y-0.5`}
              >
                {/* WeChat icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18z" />
                </svg>
                预约产品演示
              </button>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] hover:text-white transition-all"
              >
                <Mail size={16} />
                商务咨询
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            label="Core Features"
            title="核心功能"
            subtitle={`${name}提供全方位的功能支持，满足企业在不同场景下的需求`}
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} gradient={gradient} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[400px] h-[400px] opacity-[0.06]"
            style={{ background: `radial-gradient(circle, ${gradientColors}, transparent 60%)` }} />
        </div>
        <div className="container relative">
          <SectionHeader
            label="Application Scenarios"
            title="应用场景"
            subtitle="覆盖多个行业和业务场景，为不同领域的企业提供专业的AI解决方案"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, i) => (
              <ScenarioCard key={scenario.title} scenario={scenario} gradient={gradient} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Advantages Section */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            label="Technical Advantages"
            title="技术优势"
            subtitle="基于火鹰科技多年技术积累，为产品提供坚实的技术底座"
          />
          {architectureDescription && (
            <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-sm text-white/50 leading-relaxed">{architectureDescription}</p>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-5">
            {techAdvantages.map((adv, i) => (
              <TechCard key={adv.title} adv={adv} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom content slot */}
      {children}

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.08]"
            style={{ background: `radial-gradient(ellipse, ${gradientColors}, transparent 70%)` }} />
        </div>
        <div className="container relative text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            对{name}感兴趣？
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            联系我们的专业团队，获取产品演示和定制化解决方案。火鹰科技{companyYears}年行业经验，为您提供最专业的技术服务。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setQrModalOpen(true)}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-white bg-gradient-to-r ${gradient} hover:shadow-xl transition-all hover:-translate-y-0.5`}
            >
              {/* WeChat icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18z" />
              </svg>
              扫码咨询：获取专属方案
            </button>
            <a
              href={`tel:${COMPANY_INFO.salesPhone.replace(/-/g, "")}`}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-white/70 bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] hover:text-white transition-all"
            >
              <Phone size={18} />
              电话咨询：{COMPANY_INFO.salesPhone}
            </a>
          </div>
        </div>
      </section>

      {/* 使用完整的Footer */}
      <Footer />

      {/* WeChat QR Modal */}
      <WechatQRModal
        open={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        title={`获取${name}演示`}
        subtitle="扫码添加企业微信，获取一对一产品演示和定制方案"
      />
    </div>
  );
}
