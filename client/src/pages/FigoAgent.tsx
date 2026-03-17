/*
 * 「量子棱镜」设计系统 — 火鹰科技AI智能体定制开发独立站
 * 路径: /FigoAgent/
 * 独立于旧站点，作为AI智能体业务的专属展示页
 * 
 * 营销型网站完整结构（AI增强版 v2）：
 * 1. Hero首屏 - 第一印象，统计数据社会证明
 * 2. AI技术架构 - 三层AI架构可视化，展示技术深度
 * 3. 产品矩阵 - 展示AI产品实力（AI Powered标签）
 * 3.5 产品对比矩阵 - 快速选择合适产品
 * 4. AI能力演示 - 实时对话演示，展示Moss等自研产品
 * 5. 服务能力 - 全栈AI服务覆盖（AI标签）
 * 6. 成功案例 - 真实项目数据，用成果说话
 * 6.5 ROI计算器 - 直观展示投资回报，降低决策门槛
 * 7. 信任背书 - 客户评价、资质证书、行业覆盖
 * 8. 技术生态 - 合作伙伴和客户类型
 * 9. 开发流程 - AI化专业方法论
 * 10. 关于我们 - 企业历史和实力
 * 11. FAQ常见问题 - 消除疑虑，提升SEO
 * 12. 紧迫感CTA - 限时优惠，促进转化
 * 13. 联系我们 - 转化入口
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AIArchitectureSection from "@/components/AIArchitectureSection";
import ProductsSection from "@/components/ProductsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductComparisonMatrix from "@/components/ProductComparisonMatrix";
import AIShowcaseSection from "@/components/AIShowcaseSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudySection from "@/components/CaseStudySection";
import ROICalculator from "@/components/ROICalculator";
import TrustSection from "@/components/TrustSection";
import PartnersSection from "@/components/PartnersSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import UrgencyCTA from "@/components/UrgencyCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function FigoAgent() {
  return (
    <div className="min-h-screen bg-[#0c0c14] text-white overflow-x-hidden">
      <SEOHead />
      <Navbar />
      <main>
        <HeroSection />
        <AIArchitectureSection />
        <ProductsSection />
        <SolutionsSection />
        <ProductComparisonMatrix />
        <AIShowcaseSection />
        <ServicesSection />
        <CaseStudySection />
        <ROICalculator />
        <TrustSection />
        <PartnersSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <UrgencyCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
