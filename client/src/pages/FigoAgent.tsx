/*
 * 「量子棱镜」设计系统 — 火鹰科技AI智能体定制开发独立站
 * 路径: /FigoAgent/
 * 独立于旧站点，作为AI智能体业务的专属展示页
 * 
 * 营销型网站完整结构：
 * 1. Hero首屏 - 第一印象，统计数据社会证明
 * 2. 产品矩阵 - 展示AI产品实力
 * 3. 服务能力 - 全栈服务覆盖
 * 4. 成功案例 - 真实项目数据，用成果说话
 * 5. 信任背书 - 客户评价、资质证书、行业覆盖
 * 6. 技术生态 - 合作伙伴和客户类型
 * 7. 开发流程 - 专业方法论
 * 8. 关于我们 - 企业历史和实力
 * 9. FAQ常见问题 - 消除疑虑，提升SEO
 * 10. 紧迫感CTA - 限时优惠，促进转化
 * 11. 联系我们 - 转化入口
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudySection from "@/components/CaseStudySection";
import TrustSection from "@/components/TrustSection";
import PartnersSection from "@/components/PartnersSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import UrgencyCTA from "@/components/UrgencyCTA";
import ContactSection from "@/components/ContactSection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function FigoAgent() {
  return (
    <div className="min-h-screen bg-[#0c0c14] text-white overflow-x-hidden">
      <SEOHead />
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <CaseStudySection />
        <TrustSection />
        <PartnersSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <UrgencyCTA />
        <ContactSection />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}
