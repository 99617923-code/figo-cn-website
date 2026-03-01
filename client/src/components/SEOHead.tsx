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
        telephone: `+86-${COMPANY_INFO.salesPhone.replace(/-/g, "")}`,
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
      "https://widget.figo.cn",
    ],
    knowsAbout: [
      "AI智能体开发",
      "大模型API管理",
      "数字人定制",
      "声音克隆",
      "智能客服",
      "AI SaaS平台",
      "AI法律咨询",
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
            name: "数字人复刻/声音克隆",
            description: "深度复刻创始人的思维、声音和知识体系，打造7×24小时在线的数字分身",
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

function getFAQData() {
  const years = getCompanyYears();
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "火鹰科技在AI智能体开发方面有哪些优势？",
        acceptedAnswer: {
          "@type": "Answer",
          text: `火鹰科技成立于2005年，拥有${years}年软件开发经验，是国家高新技术企业、CMMI Level-3认证企业。已成功交付5000+项目，在AI智能体领域已推出火鹰引擎、SaleSpark、数字人复刻系统、Ring AI、法睿聊、FigoAI等6大产品。`,
        },
      },
      {
        "@type": "Question",
        name: "AI智能体定制开发的周期和费用大概是多少？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "项目周期和费用取决于具体需求的复杂度。基础AI对话机器人2-4周可交付，中等复杂度的AI智能体需要6-10周，大型AI平台需要3-6个月。我们提供免费的需求评估和方案报价服务。",
        },
      },
      {
        "@type": "Question",
        name: "你们支持哪些大模型的接入？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "我们的火鹰引擎平台已接入20+主流大模型，包括OpenAI GPT-4o、Claude 3.5、Gemini Pro、DeepSeek V3/R1、通义千问、文心一言等。同时支持开源模型的私有化部署。",
        },
      },
      {
        "@type": "Question",
        name: "项目交付后提供哪些售后服务？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "我们提供3-12个月免费维护期、7×24小时技术支持、定期系统巡检、功能迭代升级服务、完整技术文档和培训服务。客户满意度达98%。",
        },
      },
      {
        "@type": "Question",
        name: "数据安全和隐私保护如何保障？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "所有系统采用多租户架构确保数据隔离，传输层使用TLS 1.3加密，存储层使用AES-256加密。支持私有化部署，严格遵守《网络安全法》和《个人信息保护法》。",
        },
      },
    ],
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

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.textContent = JSON.stringify(getFAQData());
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(orgScript);
      document.head.removeChild(webScript);
      document.head.removeChild(faqScript);
    };
  }, []);

  return null;
}
