/*
 * 「量子棱镜」— SEO结构化数据
 * JSON-LD Schema.org 标记
 * 年份自动计算，电话/地址使用真实数据
 */
import { useEffect } from "react";
import { COMPANY_INFO, getCompanyYears } from "@/lib/constants";

function getStructuredData() {
  const years = getCompanyYears();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: `https://${COMPANY_INFO.website}`,
    logo: `https://${COMPANY_INFO.website}/static/images/logo.png`,
    description: `火鹰科技，${years}年软件定制开发经验，专注AI智能体、大模型应用、数字人、智能客服等AI解决方案定制开发。国家高新技术企业。`,
    foundingDate: String(COMPANY_INFO.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: "番禺区南浦凹凸凹创意园C317-318",
      addressLocality: "广州市",
      addressRegion: "广东省",
      addressCountry: "CN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+86-${COMPANY_INFO.salesPhone.replace(/-/g, "")}`,
        contactType: "sales",
        availableLanguage: ["Chinese", "English"],
        areaServed: "CN",
      },
      {
        "@type": "ContactPoint",
        telephone: `+86-${COMPANY_INFO.phone}`,
        email: COMPANY_INFO.email,
        contactType: "customer service",
        availableLanguage: ["Chinese", "English"],
      },
    ],
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
}

function getWebsiteData() {
  const years = getCompanyYears();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "火鹰科技 - AI智能体定制开发专家",
    url: `https://${COMPANY_INFO.website}`,
    description: `${years}年软件定制开发经验，专注AI智能体、大模型应用定制开发`,
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
    },
  };
}

export default function SEOHead() {
  useEffect(() => {
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.textContent = JSON.stringify(getStructuredData());
    document.head.appendChild(orgScript);

    const webScript = document.createElement("script");
    webScript.type = "application/ld+json";
    webScript.textContent = JSON.stringify(getWebsiteData());
    document.head.appendChild(webScript);

    return () => {
      document.head.removeChild(orgScript);
      document.head.removeChild(webScript);
    };
  }, []);

  return null;
}
