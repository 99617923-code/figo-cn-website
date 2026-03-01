/*
 * 「量子棱镜」— 法睿聊 AI法律咨询SaaS系统 产品详情页
 * 基于阿里云通义法睿大模型的多租户法律咨询SaaS平台
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import {
  Scale, Code2, Shield, Server, BarChart3, Users,
  Globe, Building2, GraduationCap, Briefcase, Landmark, UserCheck,
  Zap, Brain, Lock, Layers,
  FileText, Plug, Settings, BookOpen,
} from "lucide-react";

const LEGAL_DOMAINS = [
  { emoji: "📄", name: "合同纠纷" },
  { emoji: "👷", name: "劳动争议" },
  { emoji: "🏠", name: "房产纠纷" },
  { emoji: "💍", name: "婚姻家庭" },
  { emoji: "🚗", name: "交通事故" },
  { emoji: "💡", name: "知识产权" },
  { emoji: "⚖️", name: "刑事辩护" },
  { emoji: "📋", name: "综合咨询" },
];

export default function FaruiChat() {
  return (
    <>
    <ProductSEO
      name="法睿聊"
      tagline="AI法律咨询SaaS系统"
      description="法睿聊是基于阿里云通义法睿大模型的多租户SaaS平台，企业客户只需嵌入一行JavaScript代码，即可在自己的网站上拥有专业的AI法律咨询服务。覆盖合同纠纷、劳动争议等8大法律领域，完全国产化部署，安全合规。"
      keywords={["AI法律咨询", "法律SaaS", "通义法睿", "智能法律顾问", "法律咨询系统", "法睿聊", "多租户SaaS", "火鹰科技"]}
      path="/products/farui-chat"
    />
    <ProductDetailLayout
      name="法睿聊"
      tagline="为您的网站赋予 AI 法律咨询能力"
      heroDescription="基于阿里云通义法睿大模型的多租户 SaaS 平台。企业客户只需嵌入一行 JavaScript 代码，即可在自己的网站上拥有专业的 AI 法律咨询服务。覆盖合同纠纷、劳动争议、房产纠纷等 8 大法律领域，完全国产化部署，安全合规。"
      gradient="from-blue-500 to-indigo-600"
      gradientColors="rgba(59,130,246,0.5), rgba(79,70,229,0.5)"
      heroIcon={<Scale size={28} className="text-white" />}
      stats={[
        { value: "8大", label: "法律领域" },
        { value: "1行", label: "代码嵌入" },
        { value: "100%", label: "国产化部署" },
        { value: "多租户", label: "SaaS架构" },
      ]}
      features={[
        {
          icon: <Brain size={20} className="text-white" />,
          title: "通义法睿AI引擎",
          description: "基于阿里云通义法睿大模型，覆盖合同纠纷、劳动争议、房产纠纷等8大法律领域，提供专业精准的法律咨询服务。引用法条、案例，回答专业可靠。",
          badge: "核心",
        },
        {
          icon: <Code2 size={20} className="text-white" />,
          title: "一行代码嵌入",
          description: "只需在网站中添加一行JavaScript代码，即可拥有专业的AI法律咨询功能。支持自定义主题色、欢迎语、咨询类别等，零开发成本即装即用。",
          badge: "核心",
        },
        {
          icon: <Shield size={20} className="text-white" />,
          title: "安全隔离架构",
          description: "采用iframe安全隔离机制，基于域名白名单的多租户授权验证，确保数据安全与隐私保护。每个租户数据完全隔离，互不干扰。",
        },
        {
          icon: <Server size={20} className="text-white" />,
          title: "完全国产化部署",
          description: "零海外依赖，全部部署在中国阿里云，符合《数据安全法》《个人信息保护法》等法规要求，适合政企客户使用。",
          badge: "合规",
        },
        {
          icon: <BarChart3 size={20} className="text-white" />,
          title: "用量统计与计费",
          description: "实时查看聊天次数、Token消耗、成本统计等数据。按积分计费，灵活可控，用多少付多少，审核通过即赠送测试积分。",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: "多租户SaaS架构",
          description: "支持多企业客户同时使用，每个租户独立管理应用、域名和数据，互不干扰。统一管理后台，高效运营。",
        },
        {
          icon: <Settings size={20} className="text-white" />,
          title: "租户管理门户",
          description: "租户可自主管理应用配置、域名白名单、积分充值、用量查看等。管理员可审核租户、管理积分、查看全局统计。",
        },
        {
          icon: <Plug size={20} className="text-white" />,
          title: "4步快速接入",
          description: "提交入驻申请→平台审核→获取嵌入代码→开始使用。流程简单高效，审核通过即赠送测试积分，零成本体验。",
          badge: "简单",
        },
      ]}
      scenarios={[
        {
          title: "律师事务所官网",
          description: "律所在官网嵌入法睿聊，访客可直接获得AI法律初步咨询，筛选有效客户线索，降低律师重复解答基础问题的工作量，提升获客效率。",
          icon: <Landmark size={22} className="text-white" />,
        },
        {
          title: "企业法务合规",
          description: "企业在内部门户嵌入法睿聊，员工可随时咨询合同审查、劳动法规、知识产权等法律问题，降低企业法律风险，减少外部法律顾问费用。",
          icon: <Building2 size={22} className="text-white" />,
        },
        {
          title: "法律教育培训",
          description: "法学院校或培训机构在平台嵌入法睿聊，学生可通过AI进行法律案例分析练习、法条查询和模拟咨询，提升学习效率和实践能力。",
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: "政务服务平台",
          description: "政府部门在公共服务网站嵌入法睿聊，为市民提供7×24小时法律咨询服务，涵盖劳动争议、房产纠纷、婚姻家庭等民生法律问题。",
          icon: <Briefcase size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: "通义法睿大模型",
          description: "基于阿里云通义法睿大模型，专为中国法律场景优化训练，覆盖民法典、劳动法、公司法等核心法律体系。回答引用具体法条和司法解释，专业性远超通用大模型。",
          metric: "专业级",
          metricLabel: "法律AI",
        },
        {
          title: "iframe安全隔离",
          description: "采用iframe沙箱隔离技术，Widget运行在独立的安全环境中，与宿主网站完全隔离。基于域名白名单的授权验证机制，防止未授权嵌入和数据泄露。",
          metric: "沙箱级",
          metricLabel: "安全隔离",
        },
        {
          title: "多租户数据隔离",
          description: "每个租户拥有独立的应用ID、域名配置和数据空间，租户间数据完全隔离。统一的积分计费系统确保用量透明可控，支持灵活的套餐和充值方案。",
          metric: "完全隔离",
          metricLabel: "数据安全",
        },
        {
          title: "100%国产化技术栈",
          description: "从AI模型到云基础设施全部采用国产化方案，零海外依赖。部署在阿里云中国区域，满足等保合规和数据本地化要求，适合政企客户的安全审查。",
          metric: "100%",
          metricLabel: "国产化率",
        },
      ]}
      architectureDescription="法睿聊采用多租户SaaS架构设计，核心包括租户管理层、Widget嵌入层、AI推理层和数据统计层。租户管理层负责企业入驻审核、应用配置和域名授权；Widget嵌入层通过iframe安全隔离实现一行代码嵌入；AI推理层对接阿里云通义法睿大模型，提供专业法律咨询能力；数据统计层实时追踪用量、Token消耗和成本分析。"
    >
      {/* 8大法律咨询领域 */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Legal Domains</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">覆盖 8 大法律咨询领域</h2>
            <p className="mt-4 text-base text-white/50">基于通义法睿大模型，覆盖常见法律咨询场景，提供专业精准的法律建议</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {LEGAL_DOMAINS.map((domain) => (
              <div
                key={domain.name}
                className="glass-card rounded-xl p-5 text-center hover:border-white/15 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{domain.emoji}</div>
                <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{domain.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 快速接入代码示例 */}
      <section className="relative py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">Quick Start</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">4 步完成接入</h2>
            <p className="mt-4 text-base text-white/50">简单几步，让您的网站拥有AI法律咨询能力</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6 mb-10">
              {[
                { step: "1", title: "提交入驻申请", desc: "填写企业信息，提交入驻申请，等待平台审核" },
                { step: "2", title: "平台审核", desc: "管理员审核通过后赠送测试积分，零成本开始体验" },
                { step: "3", title: "获取嵌入代码", desc: "登录租户门户，创建应用并获取专属JS代码片段" },
                { step: "4", title: "开始使用", desc: "将代码嵌入网站，即刻拥有专业的AI法律顾问" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
                <span className="ml-2 text-xs text-white/40">index.html</span>
              </div>
              <pre className="p-5 text-sm text-white/70 overflow-x-auto font-mono leading-relaxed">
{`<!-- 只需一行代码，即可嵌入AI法律咨询 -->
<script
  src="https://widget.figo.cn/api/widget/loader.js"
  data-app-id="fc_your_app_id">
</script>`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </ProductDetailLayout>
    </>
  );
}
