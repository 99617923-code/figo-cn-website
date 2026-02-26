/*
 * 「量子棱镜」设计系统 — 火鹰科技AI智能体定制开发独立站
 * 路径: /FigoAgent/
 * 独立于旧站点，作为AI智能体业务的专属展示页
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
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
        <ProductsSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
