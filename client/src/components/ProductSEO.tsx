/*
 * 「量子棱镜」— 产品详情页SEO组件
 * 动态设置 document.title、meta description、keywords
 * 以及 JSON-LD 结构化数据（Product + BreadcrumbList）
 */
import { useEffect } from "react";
import { COMPANY_INFO, getCompanyYears } from "@/lib/constants";

interface ProductSEOProps {
  name: string;
  tagline: string;
  description: string;
  keywords: string[];
  path: string;
}

export default function ProductSEO({ name, tagline, description, keywords, path }: ProductSEOProps) {
  useEffect(() => {
    const years = getCompanyYears();
    const baseUrl = `https://${COMPANY_INFO.website}`;

    // 动态设置 title
    const originalTitle = document.title;
    document.title = `${name} - ${tagline} | 火鹰科技AI智能体定制开发解决方案`;

    // 动态设置 meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc?.getAttribute("content") || "";
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 动态设置 meta keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    const originalKw = metaKw?.getAttribute("content") || "";
    if (!metaKw) {
      metaKw = document.createElement("meta");
      metaKw.setAttribute("name", "keywords");
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute("content", keywords.join(","));

    // JSON-LD: SoftwareApplication
    const productLD = document.createElement("script");
    productLD.type = "application/ld+json";
    productLD.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `${name} - AI智能体定制开发`,
      description: description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CNY",
        description: "联系销售获取定制报价",
      },
      author: {
        "@type": "Organization",
        name: COMPANY_INFO.name,
        url: baseUrl,
      },
      areaServed: {
        "@type": "Country",
        name: "CN"
      },
    });
    document.head.appendChild(productLD);

    // JSON-LD: BreadcrumbList
    const breadcrumbLD = document.createElement("script");
    breadcrumbLD.type = "application/ld+json";
    breadcrumbLD.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "首页",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "产品矩阵",
          item: `${baseUrl}/#products`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: name,
          item: `${baseUrl}${path}`,
        },
      ],
    });
    document.head.appendChild(breadcrumbLD);

    // Cleanup
    return () => {
      document.title = originalTitle;
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute("content", originalDesc);
      const kwMeta = document.querySelector('meta[name="keywords"]');
      if (kwMeta) kwMeta.setAttribute("content", originalKw);
      try {
        document.head.removeChild(productLD);
        document.head.removeChild(breadcrumbLD);
      } catch {}
    };
  }, [name, tagline, description, keywords, path]);

  return null;
}
