/*
 * 「量子棱镜」— FAQ常见问题板块
 * 手风琴展开效果
 * 营销目标：消除客户疑虑，增强信任感，同时提升SEO（FAQ结构化数据）
 */
import { useInView } from "@/hooks/useInView";
import { getCompanyYears } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const companyYears = getCompanyYears();

const FAQ_DATA = [
  {
    question: "火鹰科技在AI智能体开发方面有哪些优势？",
    answer: `火鹰科技成立于2005年，拥有${companyYears}年软件开发经验，是国家高新技术企业（GR201544001141）、CMMI Level-3认证企业。我们已成功交付5000+项目，在AI智能体领域已推出火鹰引擎、SaleSpark、导师替身系统、Ring AI、FigoAI等5大产品，覆盖API管理、销售训练、数字人、IoT+AI、工具平台等多个方向。团队100+人，核心技术人员平均10年以上开发经验。`,
  },
  {
    question: "AI智能体定制开发的周期和费用大概是多少？",
    answer: "项目周期和费用取决于具体需求的复杂度。一般来说，基础AI对话机器人2-4周可交付，中等复杂度的AI智能体（如销售训练系统）需要6-10周，大型AI平台（如SaaS产品）需要3-6个月。我们提供免费的需求评估和方案报价服务，您可以联系我们的售前团队获取精确报价。",
  },
  {
    question: "你们支持哪些大模型的接入？",
    answer: "我们的火鹰引擎（FigoAPI）平台已接入20+主流大模型，包括OpenAI GPT-4o/GPT-4、Claude 3.5 Sonnet/Opus、Google Gemini Pro/Ultra、DeepSeek V3/R1、通义千问、文心一言、讯飞星火、智谱GLM-4等。同时支持开源模型的私有化部署，如Llama 3、Qwen、ChatGLM等。我们的统一API网关可以实现智能路由、自动熔断和成本优化。",
  },
  {
    question: "项目交付后提供哪些售后服务？",
    answer: "我们提供完善的售后服务体系：1）项目交付后提供3-12个月免费维护期；2）7×24小时技术支持热线；3）定期系统巡检和性能优化；4）按需提供功能迭代和升级服务；5）提供完整的技术文档和培训服务。我们的客户满意度达98%，很多客户与我们保持了5年以上的长期合作关系。",
  },
  {
    question: "数据安全和隐私保护如何保障？",
    answer: "数据安全是我们的核心关注点：1）所有系统采用多租户架构，确保数据完全隔离；2）传输层使用TLS 1.3加密，存储层使用AES-256加密；3）支持私有化部署，数据完全存储在客户自己的服务器上；4）严格遵守《网络安全法》和《个人信息保护法》；5）定期进行安全审计和渗透测试。我们已通过多个行业的安全合规审查。",
  },
  {
    question: "如何开始合作？",
    answer: "合作流程非常简单：1）联系我们的售前团队（电话/在线咨询/邮件均可）；2）我们安排资深顾问进行免费需求沟通；3）出具详细的技术方案和报价；4）双方确认后签署合同，启动项目；5）按里程碑交付，全程透明可控。您也可以先预约我们现有产品的演示，深入了解我们的技术实力。",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: { item: typeof FAQ_DATA[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: isOpen ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
          border: `1px solid ${isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
        }}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer"
        >
          <span className={`text-sm lg:text-base font-medium transition-colors ${isOpen ? "text-white" : "text-white/70 group-hover:text-white"}`}>
            {item.question}
          </span>
          <ChevronDown
            size={18}
            className={`flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? "rotate-180 text-blue-400" : "text-white/40 group-hover:text-white/60"}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 pb-5">
            <p className="text-sm text-white/50 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { ref: titleRef, isInView: titleVisible } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400/80 mb-3 block">FAQ</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            常见<span className="gradient-text">问题</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            关于AI智能体定制开发，您可能想了解的问题
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
