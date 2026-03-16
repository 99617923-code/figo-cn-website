# 火鹰科技官网（figo.cn）GEO 优化方案

> **GEO（Generative Engine Optimization，生成式引擎优化）** 是针对 AI 搜索引擎（如 ChatGPT、Google AI Overview、Perplexity、Gemini 等）的内容优化策略，目标是让品牌在 AI 生成的回答中被引用和推荐。研究表明，到 2026 年约 60% 的搜索将不产生网站点击 [1]，品牌必须在 AI 回答中直接获得可见度。

---

## 一、当前站点 GEO 审计结果

经过对 figo.cn 站点代码和配置的全面审计，以下是当前 GEO 就绪度的评估：

| 审计项目 | 当前状态 | GEO 就绪度 | 优先级 |
|---------|---------|-----------|-------|
| Schema.org 结构化数据 | 已有 Organization、WebSite、LocalBusiness、FAQPage、Product | **良好** | 需优化 |
| 多语言支持 | 中英西三语 i18next，但缺少 hreflang 标签 | **中等** | 高 |
| robots.txt | 已有，但未明确允许 AI 爬虫 | **不足** | 高 |
| sitemap.xml | 已有，但缺少 ReviewHub 和 Services 页面 | **不足** | 高 |
| llms.txt | 不存在 | **缺失** | 高 |
| HTML lang 属性动态切换 | 不存在 | **缺失** | 中 |
| 内容"事实密度" | 结构化数据中有，但页面内容缺少引用和统计 | **中等** | 中 |
| "回答块"格式 | 页面以组件渲染为主，缺少40-60字的直接回答段 | **不足** | 中 |
| Open Graph 多语言 | 仅中文 og:locale | **不足** | 中 |
| SSR/预渲染 | 纯 SPA，无 SSR | **不足** | 低（长期） |

### 关键发现

当前站点在传统 SEO 方面已有不错的基础——具备 Organization、LocalBusiness、FAQPage 等 Schema 标记，有完整的 meta 标签和 Open Graph 配置。然而在 GEO 层面存在几个显著缺口：AI 爬虫访问策略缺失、缺少 llms.txt 文件、sitemap 不完整、多语言 SEO 标签（hreflang）缺失，以及内容格式未针对 AI 提取进行优化。

---

## 二、GEO 优化方案（按优先级排序）

### 优先级 P0：立即可实施的技术优化

#### 1. 创建 llms.txt 文件

> llms.txt 是一个新兴标准，类似于 robots.txt，但专门为大语言模型提供网站内容的结构化概览，帮助 AI 系统理解网站的核心信息和内容层次 [2]。

**具体内容**：在网站根目录创建 `/llms.txt`，包含公司简介、核心产品列表、服务能力、联系方式、技术栈等关键信息，以纯文本格式呈现，方便 LLM 直接解析。

#### 2. 更新 robots.txt 允许 AI 爬虫

当前 robots.txt 仅配置了基本的 Allow/Disallow 规则，需要明确允许主流 AI 爬虫（GPTBot、Google-Extended、ClaudeBot、PerplexityBot 等）访问站点内容。

#### 3. 完善 sitemap.xml

当前 sitemap 缺少以下页面：ReviewHub 产品页、Services 服务页、Ring AI 页面的正确路径。同时需要添加多语言 sitemap 支持（hreflang 注解）。

#### 4. 添加 hreflang 标签

站点已支持中英西三语，但缺少 `<link rel="alternate" hreflang="xx">` 标签。这对于 AI 搜索引擎理解多语言内容关系至关重要，也直接影响不同语言用户搜索时的内容匹配。

#### 5. 动态切换 HTML lang 属性

当用户切换语言时，`<html lang="zh-CN">` 应同步更新为对应语言代码（`en`、`es`），帮助 AI 爬虫正确识别页面语言。

### 优先级 P1：内容格式优化

#### 6. 增强 Schema 结构化数据

在现有基础上扩展：

| Schema 类型 | 当前状态 | 优化方向 |
|------------|---------|---------|
| Organization | 已有 | 添加 `areaServed` 全球化、补充 `award` 资质信息 |
| FAQPage | 已有5个问答 | 扩展到10-15个，覆盖更多长尾问题 |
| SoftwareApplication | 产品页已有 | 补充 `offers`、`review`、`aggregateRating` |
| HowTo | 缺失 | 为"如何定制AI智能体"等流程添加 |
| Service | 缺失 | 为12项服务能力添加独立 Service Schema |
| Article/BlogPosting | 缺失 | 未来博客内容需要 |
| BreadcrumbList | 产品页已有 | 保持 |

#### 7. 优化内容"事实密度"

Princeton 大学研究发现，包含权威引用、统计数据和引语的内容可以将低排名网站在 AI 回答中的可见度提升高达 40% [3]。建议在页面中增加：

- 具体的项目交付数据（如"已为200+企业交付AI解决方案"）
- 行业权威引用（如 Gartner、IDC 等机构的 AI 市场数据）
- 客户证言和具体案例数据

#### 8. 创建"回答块"格式内容

AI 模型偏好 40-60 字的清晰"回答块"（Answer Blocks），而非长篇叙述 [4]。建议在每个产品页和服务页的顶部添加简洁的"快速回答"段落，直接回答"这个产品是什么"、"适合谁用"、"核心优势是什么"等问题。

### 优先级 P2：品牌可见度提升

#### 9. 增加品牌在第三方平台的提及

研究表明，品牌提及（包括未链接的提及）与 AI 可见度的相关性比传统反向链接高 3:1 [5]。建议：

- 在知乎、CSDN、掘金等技术社区发布 AI 开发相关内容
- 在 GitHub 开源部分工具或 SDK
- 在 Product Hunt、G2 等国际平台注册产品
- 参与 Reddit、Hacker News 等社区的 AI 相关讨论

#### 10. 创建引用友好的内容类型

根据研究，LLM 最常引用的内容格式包括 [6]：带 Schema 标记的产品 FAQ、行业解决方案页面、产品对比文章、统计数据汇总、操作指南和原创研究报告。建议创建"广州 AI 定制开发公司对比"、"AI 智能体开发成本指南"等引用友好型内容。

### 优先级 P3：长期架构优化

#### 11. SSR/预渲染方案

当前站点为纯 SPA（单页应用），AI 爬虫可能无法完整抓取 JavaScript 渲染的内容。长期建议迁移到 Next.js 或添加预渲染方案（如 react-snap），确保所有页面内容在 HTML 源码中可见。

#### 12. 多语言 SEO 独立 URL

当前三语内容共享同一 URL，仅通过 JavaScript 切换。理想的 GEO 方案是为每种语言提供独立 URL（如 `/en/`、`/es/`），或使用子域名（`en.figo.cn`），以便 AI 爬虫能够独立索引每种语言的内容。

---

## 三、本次可立即实施的优化清单

基于以上分析，以下是本次可以直接在代码中实施的优化项：

| 序号 | 优化项 | 预计效果 | 实施难度 |
|-----|-------|---------|---------|
| 1 | 创建 llms.txt | 帮助 LLM 理解站点全貌 | 低 |
| 2 | 更新 robots.txt 允许 AI 爬虫 | 确保 AI 爬虫可访问 | 低 |
| 3 | 完善 sitemap.xml | 提升页面发现率 | 低 |
| 4 | 添加 hreflang 标签 | 多语言内容正确匹配 | 低 |
| 5 | 动态切换 HTML lang | AI 正确识别页面语言 | 低 |
| 6 | 扩展 FAQ Schema | 覆盖更多长尾问题 | 中 |
| 7 | 添加 Service Schema | 12项服务获得结构化标记 | 中 |
| 8 | 添加 HowTo Schema | 流程类内容被 AI 引用 | 中 |
| 9 | Open Graph 多语言适配 | 社交分享和 AI 引用优化 | 低 |
| 10 | 增强"事实密度" | 提升 AI 回答中的引用率 | 中 |

---

## 参考资料

[1]: https://virayo.com/blog/generative-engine-optimization-strategies "Virayo - 10 Generative Engine Optimization Strategies"
[2]: https://directiveconsulting.com/blog/a-guide-to-generative-engine-optimization-geo-best-practices/ "Directive - A Guide to GEO Best Practices"
[3]: https://www.yotpo.com/blog/chatgpt-seo-geo-tips/ "Yotpo - ChatGPT SEO & GEO 2026: 12 Tips"
[4]: https://www.yotpo.com/blog/chatgpt-seo-geo-tips/ "Yotpo - Answer Blocks Format"
[5]: https://virayo.com/blog/generative-engine-optimization-strategies "Virayo - Web Mentions vs Backlinks"
[6]: https://directiveconsulting.com/blog/a-guide-to-generative-engine-optimization-geo-best-practices/ "Directive - Citation-Worthy Content Types"
