/*
 * 「量子棱镜」— SEO结构化数据
 * JSON-LD Schema.org 标记
 */
import { useEffect } from "react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "广州火鹰信息科技有限公司",
  alternateName: "火鹰科技",
  url: "https://www.figo.cn",
  logo: "https://www.figo.cn/static/images/logo.png",
  description: "火鹰科技，20年软件定制开发经验，专注AI智能体、大模型应用、数字人、智能客服等AI解决方案定制开发。国家高新技术企业。",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    addressLocality: "广州市",
    addressRegion: "广东省",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86-020-29869409",
    email: "ceo@figo.cn",
    contactType: "customer service",
    availableLanguage: ["Chinese", "English"],
  },
  sameAs: [
    "https://api.figo.cn",
    "https://www.salespark.vip",
    "https://moss.figo.cn",
    "https://www.figoai.xyz",
  ],
  knowsAbout: [
    "AI智能体开发",
    "大模型API管理",
    "数字人定制",
    "声音克隆",
    "智能客服",
    "AI SaaS平台",
    "软件定制开发",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI智能体定制开发服务",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI智能体定制开发",
          description: "基于大模型能力，为企业量身打造专属AI智能体",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "大模型API集成",
          description: "统一大模型API接入方案，支持20+主流模型",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "数字人/声音克隆",
          description: "基于AI技术深度复刻真人的思维模式和声音特征",
        },
      },
    ],
  },
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "火鹰科技 - AI智能体定制开发专家",
  url: "https://www.figo.cn",
  description: "20年软件定制开发经验，专注AI智能体、大模型应用定制开发",
  publisher: {
    "@type": "Organization",
    name: "广州火鹰信息科技有限公司",
  },
};

export default function SEOHead() {
  useEffect(() => {
    // Inject JSON-LD structured data
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(orgScript);

    const webScript = document.createElement("script");
    webScript.type = "application/ld+json";
    webScript.textContent = JSON.stringify(websiteData);
    document.head.appendChild(webScript);

    return () => {
      document.head.removeChild(orgScript);
      document.head.removeChild(webScript);
    };
  }, []);

  return null;
}
