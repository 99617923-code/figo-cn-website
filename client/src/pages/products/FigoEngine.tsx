/*
 * 「量子棱镜」— 火鹰引擎 FigoAPI 产品详情页
 * 企业级大模型API管理平台
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import {
  Cpu, Route, Shield, Activity, Key, CreditCard,
  BarChart3, Users, Bug, Megaphone, Database,
  Building2, GraduationCap, ShoppingCart, Stethoscope, Factory, Headphones,
  Zap, Server, Lock, Globe,
} from "lucide-react";

const MODELS = [
  "OpenAI", "Claude", "Gemini", "DeepSeek", "通义千问", "文心一言",
  "智谱 GLM", "Moonshot", "讯飞星火", "MiniMax", "字节豆包", "百川",
  "阶跃星辰", "零一万物", "腾讯混元", "Groq", "Cohere", "硅基流动",
  "xAI Grok", "Azure OpenAI", "Ollama", "自定义接入",
];

export default function FigoEngine() {
  return (
    <>
    <ProductSEO
      name="火鹰引擎 FigoAPI"
      tagline="企业级大模型API管理平台"
      description="火鹰引擎FigoAPI是新一代企业级大模型API管理平台，统一接入OpenAI、Claude、Gemini、DeepSeek等20+主流大模型。提供智能路由、自动熔断、内容安全过滤、精细计费等核心能力，为企业AI应用保驾护航。"
      keywords={["大模型API管理", "AI API网关", "OpenAI API代理", "大模型统一接入", "AI模型路由", "企业级AI平台", "火鹰引擎", "FigoAPI", "火鹰科技"]}
      path="/products/figo-engine"
    />
    <ProductDetailLayout
      name="火鹰引擎 FigoAPI"
      tagline="新一代企业级大模型 API 管理平台"
      heroDescription="一个平台管理所有大模型 API。火鹰引擎提供统一的 API 网关，一键接入 OpenAI、Claude、Gemini、DeepSeek 等 20+ 主流大模型。智能路由、自动熔断、内容安全过滤、精细计费，为企业 AI 应用保驾护航。仅需替换一行 base_url，即可无缝切换所有模型。"
      gradient="from-blue-500 to-purple-600"
      gradientColors="rgba(59,130,246,0.5), rgba(139,92,246,0.5)"
      heroIcon={<Cpu size={28} className="text-white" />}
      stats={[
        { value: "20+", label: "模型供应商" },
        { value: "100+", label: "可用模型" },
        { value: "99.9%", label: "服务可用性" },
        { value: "<50ms", label: "转发延迟" },
      ]}
      features={[
        {
          icon: <Globe size={20} className="text-white" />,
          title: "统一 API 网关",
          description: "支持 OpenAI、Claude、Gemini、DeepSeek 等 20+ 主流大模型统一接入，标准化 OpenAI 格式输出，一个密钥调用所有模型，无需修改代码即可切换。",
        },
        {
          icon: <Route size={20} className="text-white" />,
          title: "智能路由引擎",
          description: "基于健康度评分的动态路由算法，自动熔断故障渠道并定时探活恢复，按成本最优策略智能选择渠道，确保每次请求都走最优路径。",
          badge: "独家",
        },
        {
          icon: <Server size={20} className="text-white" />,
          title: "高可用渠道管理",
          description: "渠道健康检测、负载均衡、优先级配置、失败自动重试，多渠道冗余保障服务 99.9% 可用，单渠道故障不影响整体服务。",
        },
        {
          icon: <Shield size={20} className="text-white" />,
          title: "内容安全过滤",
          description: "内置敏感词过滤引擎，请求/响应双向审核，支持拦截、替换、标记三种策略，满足国内合规要求，保护企业数据安全。",
          badge: "独家",
        },
        {
          icon: <Key size={20} className="text-white" />,
          title: "令牌精细管控",
          description: "API Key 生成与管理、额度限制、IP 白名单、模型访问控制、使用统计一站式管理，精确控制每个令牌的权限范围。",
        },
        {
          icon: <CreditCard size={20} className="text-white" />,
          title: "灵活计费体系",
          description: "按量计费 + 充值套餐，支持 60+ 模型独立定价，充值越多折扣越大，成本透明可控，支持企业级财务对账。",
        },
        {
          icon: <Activity size={20} className="text-white" />,
          title: "渠道健康度监控",
          description: "实时展示每个渠道的健康评分、延迟、成功率、熔断状态，可视化运维一目了然，支持告警通知和自动恢复。",
          badge: "独家",
        },
        {
          icon: <BarChart3 size={20} className="text-white" />,
          title: "数据分析仪表盘",
          description: "实时调用量、成本统计、模型性能分析、错误率监控、财务中心多维度报表，全方位掌握 API 使用情况。",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: "RBAC 权限体系",
          description: "管理员/开发者角色分离，详细操作审计日志（含变更前后对比），用户分组管理，满足企业级权限管控需求。",
        },
        {
          icon: <Bug size={20} className="text-white" />,
          title: "在线调试工具",
          description: "内置 API 调试工具，支持模型选择、参数调节、流式对话、Token 计数、一键生成代码，开发效率倍增。",
          badge: "独家",
        },
        {
          icon: <Megaphone size={20} className="text-white" />,
          title: "推广联盟系统",
          description: "内置推荐返佣机制，推广链接自动追踪，佣金统计与提现管理，助力平台裂变增长，快速扩大用户规模。",
        },
        {
          icon: <Database size={20} className="text-white" />,
          title: "企业级数据备份",
          description: "一键全量备份到云端，支持版本管理、数据恢复，自动保留最近 7 个版本，确保数据安全万无一失。",
          badge: "独家",
        },
      ]}
      scenarios={[
        {
          title: "企业AI应用开发",
          description: "为企业内部AI应用提供统一的模型调用入口，开发团队无需关心底层模型切换，专注业务逻辑开发。支持多项目隔离和独立计费。",
          icon: <Building2 size={22} className="text-white" />,
        },
        {
          title: "AI SaaS平台搭建",
          description: "作为AI SaaS产品的底层模型管理层，提供多租户隔离、用量计费、模型路由等能力，快速搭建面向客户的AI服务平台。",
          icon: <Factory size={22} className="text-white" />,
        },
        {
          title: "教育培训行业",
          description: "为在线教育平台提供AI辅导、智能批改、知识问答等能力，通过智能路由确保高峰期服务稳定，内容安全过滤保障教学环境。",
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: "电商与零售",
          description: "智能客服、商品描述生成、用户画像分析等场景，通过按量计费控制成本，多模型冗余保障大促期间服务不中断。",
          icon: <ShoppingCart size={22} className="text-white" />,
        },
        {
          title: "医疗健康",
          description: "辅助诊断、病历摘要、医学文献检索等场景，内容安全过滤确保医疗信息准确性，RBAC权限保障数据隐私合规。",
          icon: <Stethoscope size={22} className="text-white" />,
        },
        {
          title: "智能客服中心",
          description: "为企业客服系统提供多模型支撑，根据问题复杂度智能路由到不同模型，降低成本的同时保证回答质量。",
          icon: <Headphones size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: "高性能转发架构",
          description: "基于异步非阻塞架构设计，支持流式传输（SSE），转发延迟低于 50ms，单节点可承载数千并发请求，支持水平扩展。",
          metric: "<50ms",
          metricLabel: "转发延迟",
        },
        {
          title: "智能熔断与自愈",
          description: "实时监控渠道健康状态，故障渠道自动熔断隔离，定时探活检测恢复，确保整体服务 99.9% 可用性，无需人工干预。",
          metric: "99.9%",
          metricLabel: "服务可用性",
        },
        {
          title: "OpenAI 兼容协议",
          description: "完全兼容 OpenAI API 协议，现有使用 OpenAI SDK 的项目仅需修改 base_url 一行代码即可接入，零学习成本，零迁移风险。",
          metric: "1行",
          metricLabel: "代码修改量",
        },
        {
          title: "企业级安全防护",
          description: "支持 IP 白名单、令牌权限隔离、操作审计日志、内容安全过滤等多层安全机制，满足等保合规要求，保障企业数据安全。",
          metric: "多层",
          metricLabel: "安全防护",
        },
      ]}
      architectureDescription="火鹰引擎采用微服务架构设计，核心组件包括 API 网关层、智能路由层、渠道管理层和数据分析层。网关层负责请求接入和协议转换，路由层基于实时健康度评分进行动态调度，渠道管理层维护与各大模型供应商的连接池，数据分析层提供全链路的调用追踪和性能监控。"
    >
      {/* 支持模型生态 */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Model Ecosystem</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">支持 20+ 主流大模型</h2>
            <p className="mt-4 text-base text-white/50">统一接入国内外主流大模型，标准化 OpenAI 兼容格式，无缝切换无需改代码</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {MODELS.map((model) => (
              <span
                key={model}
                className="px-4 py-2.5 text-sm text-white/60 bg-white/[0.04] rounded-xl border border-white/[0.06] hover:bg-white/[0.08] hover:text-white/80 hover:border-white/[0.12] transition-all"
              >
                {model}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 快速接入代码示例 */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Quick Start</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">3 步完成接入</h2>
            <p className="mt-4 text-base text-white/50">无需复杂配置，最快 5 分钟即可开始调用</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6 mb-10">
              {[
                { step: "1", title: "注册获取密钥", desc: "免费注册账号，在控制台创建 API Key，即刻获得调用凭证" },
                { step: "2", title: "替换 API 地址", desc: "将 OpenAI 的 base_url 替换为火鹰引擎地址，无需修改其他代码" },
                { step: "3", title: "开始调用", desc: "使用任意 OpenAI 兼容 SDK 发起请求，自动路由到最优渠道" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/45">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-white/40">Python 示例</span>
              </div>
              <pre className="p-5 text-sm text-white/70 overflow-x-auto font-mono leading-relaxed">
{`from openai import OpenAI

client = OpenAI(
    api_key="your-figoapi-key",
    base_url="https://api.figo.cn/v1"  # 仅需修改此行
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}]
)`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </ProductDetailLayout>
    </>
  );
}
