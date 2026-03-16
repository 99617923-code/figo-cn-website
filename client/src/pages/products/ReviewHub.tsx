/*
 * 「量子棱镜」— ReviewHub 意见汇 产品详情页
 * 产品演示直接跳转 https://review.figo.cn/
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import { useTranslation } from "react-i18next";
import {
  Star, Camera, Mic, Code, LayoutDashboard, Users, Palette, Moon,
  FileText, GitCompare, Calculator, DollarSign,
  Webhook, Shield, Zap, Globe,
  Building2, ShoppingBag, Utensils, GraduationCap, Stethoscope, Briefcase,
  ExternalLink,
} from "lucide-react";

export default function ReviewHub() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "zh";
  const isZh = lang.startsWith("zh");
  const isEs = lang.startsWith("es");

  const txt = (zh: string, en: string, es: string) => isZh ? zh : isEs ? es : en;

  return (
    <>
    <ProductSEO
      name="ReviewHub"
      tagline={txt("嵌入式意见收集与需求管理平台", "Embedded Feedback Collection & Requirements Management Platform", "Plataforma Integrada de Recopilación de Opiniones y Gestión de Requisitos")}
      description={txt(
        "ReviewHub（意见汇）是专为网站开发团队打造的嵌入式意见收集工具，支持截图标注、语音录制AI整理、一行代码嵌入、AI需求变更分析，帮助软件外包公司和产品团队高效管理客户反馈。",
        "ReviewHub is an embedded feedback collection tool designed for web development teams, supporting screenshot annotation, voice recording with AI transcription, one-line code embedding, and AI-powered requirement change analysis.",
        "ReviewHub es una herramienta integrada de recopilación de opiniones diseñada para equipos de desarrollo web, con anotación de capturas, grabación de voz con transcripción IA e integración con una línea de código."
      )}
      keywords={isZh
        ? ["ReviewHub", "意见汇", "客户反馈管理", "截图标注", "需求变更分析", "嵌入式反馈工具", "软件外包", "火鹰科技"]
        : isEs
        ? ["ReviewHub", "gestión de opiniones", "anotación de capturas", "análisis de cambios", "herramienta de feedback", "Figo Technology"]
        : ["ReviewHub", "feedback management", "screenshot annotation", "requirement change analysis", "embedded feedback tool", "Figo Technology"]
      }
      path="/products/reviewhub"
    />
    <ProductDetailLayout
      name="ReviewHub"
      tagline={txt("嵌入式意见收集与需求管理平台", "Embedded Feedback & Requirements Platform", "Plataforma Integrada de Opiniones y Requisitos")}
      heroDescription={txt(
        "专为网站开发团队打造的嵌入式意见收集工具。支持截图标注、语音录制 AI 整理、一行代码嵌入任何网站。内置 AI 需求变更分析引擎，自动对比签约功能清单，识别超纲需求并估算工作量与成本，帮助软件外包公司和产品团队高效管理客户反馈与需求变更。",
        "An embedded feedback collection tool designed for web development teams. Supports screenshot annotation, voice recording with AI transcription, and one-line code embedding into any website. Built-in AI requirement change analysis engine automatically compares signed feature lists, identifies out-of-scope requirements, and estimates workload and costs.",
        "Una herramienta integrada de recopilación de opiniones diseñada para equipos de desarrollo web. Soporta anotación de capturas, grabación de voz con transcripción IA e integración con una línea de código. Motor de análisis de cambios de requisitos con IA integrado que compara automáticamente las listas de funciones contratadas."
      )}
      gradient="from-emerald-500 to-cyan-500"
      gradientColors="rgba(16,185,129,0.5), rgba(6,182,212,0.5)"
      heroIcon={<Star size={28} className="text-white" />}
      stats={[
        { value: "28+", label: txt("API 接口", "API Endpoints", "Endpoints API") },
        { value: "6", label: txt("Webhook 事件", "Webhook Events", "Eventos Webhook") },
        { value: "99.9%", label: txt("服务可用性", "Uptime SLA", "Disponibilidad") },
        { value: txt("一行代码", "1-Line", "1 Línea"), label: txt("快速嵌入", "Quick Embed", "Integración Rápida") },
      ]}
      features={[
        {
          icon: <Camera size={20} className="text-white" />,
          title: txt("截图标注", "Screenshot Annotation", "Anotación de Capturas"),
          description: txt(
            "一键截取当前页面，支持在截图上标注、圈画、添加文字说明，精准定位问题位置，告别模糊的文字描述。",
            "One-click page capture with annotation tools for marking, circling, and adding text notes. Precisely locate issues and eliminate vague text descriptions.",
            "Captura de página con un clic, herramientas de anotación para marcar, circular y agregar notas de texto. Localice problemas con precisión."
          ),
          badge: txt("核心", "Core", "Principal"),
        },
        {
          icon: <Mic size={20} className="text-white" />,
          title: txt("语音录制 + AI 整理", "Voice Recording + AI Processing", "Grabación de Voz + IA"),
          description: txt(
            "支持语音录制反馈，Whisper 转录后 AI 自动整理为结构化修改意见，让客户用最自然的方式表达需求。",
            "Voice feedback recording with Whisper transcription and AI auto-organization into structured modification suggestions. Let clients express needs naturally.",
            "Grabación de voz con transcripción Whisper y organización automática por IA en sugerencias estructuradas."
          ),
          badge: txt("核心", "Core", "Principal"),
        },
        {
          icon: <Code size={20} className="text-white" />,
          title: txt("一行代码嵌入", "One-Line Code Embedding", "Integración con Una Línea"),
          description: txt(
            "通过 embed.js 脚本一行代码嵌入任何网站，Shadow DOM 隔离确保不影响宿主页面样式，零侵入式集成。",
            "Embed into any website with a single line of embed.js script. Shadow DOM isolation ensures zero impact on host page styles.",
            "Integre en cualquier sitio web con una sola línea de script embed.js. Aislamiento Shadow DOM sin impacto en los estilos."
          ),
          badge: txt("独家", "Exclusive", "Exclusivo"),
        },
        {
          icon: <LayoutDashboard size={20} className="text-white" />,
          title: txt("专业管理后台", "Professional Dashboard", "Panel de Administración"),
          description: txt(
            "侧边栏布局的管理后台，查看反馈列表、更新处理状态、回复客户，支持深色/浅色主题切换，全面移动端适配。",
            "Sidebar-layout dashboard for viewing feedback lists, updating status, and replying to clients. Supports dark/light themes and full mobile responsiveness.",
            "Panel con diseño de barra lateral para ver listas de opiniones, actualizar estados y responder a clientes. Temas claro/oscuro y diseño responsive."
          ),
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: txt("多租户 SaaS 架构", "Multi-Tenant SaaS Architecture", "Arquitectura SaaS Multi-Tenant"),
          description: txt(
            "支持多企业独立空间，数据完全隔离。每个企业可管理多个项目，团队成员角色权限精细控制。",
            "Independent spaces for multiple enterprises with complete data isolation. Each enterprise manages multiple projects with fine-grained role permissions.",
            "Espacios independientes para múltiples empresas con aislamiento total de datos. Control granular de permisos por roles."
          ),
        },
        {
          icon: <Palette size={20} className="text-white" />,
          title: txt("品牌定制", "Brand Customization", "Personalización de Marca"),
          description: txt(
            "自定义 Logo、主题色、提示文案，让反馈收集工具完美融入您的品牌形象，提升客户体验的专业感。",
            "Customize logo, theme colors, and prompt text to seamlessly integrate the feedback tool with your brand identity.",
            "Personalice logo, colores del tema y textos para integrar la herramienta de feedback con su identidad de marca."
          ),
        },
        {
          icon: <FileText size={20} className="text-white" />,
          title: txt("AI 需求文档管理", "AI Requirements Management", "Gestión de Requisitos con IA"),
          description: txt(
            "上传签约功能清单，AI 自动解析并建立需求基线。后续客户反馈自动与需求文档对比，智能识别变更。",
            "Upload signed feature lists for AI auto-parsing and baseline establishment. Client feedback is automatically compared against requirements to identify changes.",
            "Suba listas de funciones firmadas para análisis automático por IA. Las opiniones se comparan automáticamente con los requisitos."
          ),
          badge: txt("AI", "AI", "IA"),
        },
        {
          icon: <GitCompare size={20} className="text-white" />,
          title: txt("AI 变更分析", "AI Change Analysis", "Análisis de Cambios con IA"),
          description: txt(
            "AI 自动对比客户反馈与签约需求文档，精准识别是否超出签约范围，生成变更分析报告，避免需求蔓延。",
            "AI automatically compares client feedback against signed requirements, precisely identifying out-of-scope items and generating change analysis reports.",
            "La IA compara automáticamente las opiniones con los requisitos firmados, identificando elementos fuera del alcance y generando informes."
          ),
          badge: txt("AI", "AI", "IA"),
        },
        {
          icon: <Calculator size={20} className="text-white" />,
          title: txt("工作量与成本估算", "Workload & Cost Estimation", "Estimación de Carga y Costos"),
          description: txt(
            "对超纲需求自动估算开发工作量和成本，支持配置人天单价，帮助外包公司快速生成变更报价。",
            "Automatically estimates development workload and costs for out-of-scope requirements. Configurable daily rates help outsourcing companies generate change quotes quickly.",
            "Estima automáticamente la carga de trabajo y costos para requisitos fuera del alcance. Tarifas diarias configurables para generar cotizaciones rápidamente."
          ),
        },
      ]}
      scenarios={[
        {
          title: txt("软件外包项目管理", "Software Outsourcing Management", "Gestión de Proyectos de Outsourcing"),
          description: txt(
            "外包公司将 ReviewHub 嵌入交付的网站中，客户直接在页面上截图标注或语音反馈修改意见，AI 自动分析是否超出签约范围，高效管理需求变更。",
            "Outsourcing companies embed ReviewHub into delivered websites. Clients provide feedback directly on pages via screenshots or voice. AI analyzes if changes exceed the signed scope.",
            "Las empresas de outsourcing integran ReviewHub en los sitios entregados. Los clientes dan feedback directamente en las páginas. La IA analiza si los cambios exceden el alcance."
          ),
          icon: <Building2 size={22} className="text-white" />,
        },
        {
          title: txt("电商平台用户体验优化", "E-commerce UX Optimization", "Optimización UX de E-commerce"),
          description: txt(
            "电商平台嵌入 ReviewHub 收集内部测试人员和 VIP 用户的体验反馈，截图标注精准定位 UI 问题，加速迭代优化。",
            "E-commerce platforms embed ReviewHub to collect UX feedback from internal testers and VIP users. Screenshot annotations precisely locate UI issues for faster iteration.",
            "Las plataformas de e-commerce integran ReviewHub para recopilar feedback de testers internos y usuarios VIP. Anotaciones de capturas para localizar problemas de UI."
          ),
          icon: <ShoppingBag size={22} className="text-white" />,
        },
        {
          title: txt("SaaS 产品用户反馈", "SaaS Product User Feedback", "Feedback de Productos SaaS"),
          description: txt(
            "SaaS 产品团队使用 ReviewHub 收集用户反馈，语音 + 截图的方式降低用户反馈门槛，AI 自动归类和优先级排序。",
            "SaaS product teams use ReviewHub to collect user feedback. Voice + screenshot reduces feedback barriers, with AI auto-categorization and priority sorting.",
            "Los equipos de productos SaaS usan ReviewHub para recopilar feedback. Voz + capturas reducen las barreras, con categorización automática por IA."
          ),
          icon: <Briefcase size={22} className="text-white" />,
        },
        {
          title: txt("教育平台内容审核", "Education Platform Content Review", "Revisión de Contenido Educativo"),
          description: txt(
            "在线教育平台使用 ReviewHub 让教师和审核人员对课程页面进行标注反馈，支持语音说明复杂修改意见。",
            "Online education platforms use ReviewHub for teachers and reviewers to annotate course pages, with voice support for complex modification feedback.",
            "Las plataformas educativas usan ReviewHub para que profesores y revisores anoten páginas de cursos, con soporte de voz para feedback complejo."
          ),
          icon: <GraduationCap size={22} className="text-white" />,
        },
        {
          title: txt("医疗系统界面验收", "Healthcare System UI Acceptance", "Aceptación de Interfaces Médicas"),
          description: txt(
            "医疗信息系统交付时，医护人员通过 ReviewHub 直接在系统界面上标注问题，语音描述操作流程中的不便之处。",
            "During healthcare system delivery, medical staff use ReviewHub to annotate issues directly on system interfaces and describe workflow inconveniences via voice.",
            "Durante la entrega de sistemas médicos, el personal sanitario usa ReviewHub para anotar problemas directamente en las interfaces del sistema."
          ),
          icon: <Stethoscope size={22} className="text-white" />,
        },
        {
          title: txt("餐饮连锁数字化验收", "Restaurant Chain Digital Acceptance", "Aceptación Digital de Cadenas de Restaurantes"),
          description: txt(
            "餐饮连锁品牌的数字化系统（点餐、会员、供应链）交付验收时，门店经理通过 ReviewHub 提交使用中发现的问题。",
            "During delivery of restaurant chain digital systems (ordering, membership, supply chain), store managers submit issues discovered during use via ReviewHub.",
            "Durante la entrega de sistemas digitales de cadenas de restaurantes, los gerentes envían problemas encontrados durante el uso a través de ReviewHub."
          ),
          icon: <Utensils size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: txt("Shadow DOM 隔离架构", "Shadow DOM Isolation Architecture", "Arquitectura de Aislamiento Shadow DOM"),
          description: txt(
            "嵌入式 Widget 采用 Shadow DOM 技术，完全隔离宿主页面的 CSS 和 JavaScript，确保零侵入、零冲突。无论宿主页面使用何种框架或样式库，ReviewHub 都能完美运行。",
            "The embedded widget uses Shadow DOM technology for complete CSS and JavaScript isolation from the host page. Zero intrusion, zero conflicts. ReviewHub works perfectly regardless of the host page's framework or style library.",
            "El widget integrado usa tecnología Shadow DOM para aislamiento completo de CSS y JavaScript. Cero intrusión, cero conflictos. ReviewHub funciona perfectamente con cualquier framework."
          ),
          metric: txt("零侵入", "Zero Impact", "Cero Impacto"),
          metricLabel: txt("样式隔离", "Style Isolation", "Aislamiento"),
        },
        {
          title: txt("AI 需求分析引擎", "AI Requirements Analysis Engine", "Motor de Análisis de Requisitos IA"),
          description: txt(
            "基于大语言模型的需求分析引擎，能够理解自然语言描述的需求变更，自动与签约文档对比，识别超纲内容，并估算开发工作量。准确率超过 95%。",
            "A requirements analysis engine based on large language models that understands natural language requirement changes, automatically compares with signed documents, identifies out-of-scope content, and estimates development workload with over 95% accuracy.",
            "Un motor de análisis basado en modelos de lenguaje que comprende cambios de requisitos en lenguaje natural, compara automáticamente con documentos firmados e identifica contenido fuera del alcance."
          ),
          metric: "95%+",
          metricLabel: txt("分析准确率", "Analysis Accuracy", "Precisión"),
        },
        {
          title: txt("开放 API 生态", "Open API Ecosystem", "Ecosistema API Abierto"),
          description: txt(
            "提供 28+ RESTful API 接口和 JavaScript SDK，支持 6 种 Webhook 事件推送。开发者可以将 ReviewHub 深度集成到现有工作流中，实现自动化反馈处理。",
            "28+ RESTful API endpoints and JavaScript SDK with 6 Webhook event types. Developers can deeply integrate ReviewHub into existing workflows for automated feedback processing.",
            "28+ endpoints API RESTful y SDK JavaScript con 6 tipos de eventos Webhook. Los desarrolladores pueden integrar ReviewHub en flujos de trabajo existentes."
          ),
          metric: "28+",
          metricLabel: txt("API 接口", "API Endpoints", "Endpoints"),
        },
        {
          title: txt("企业级安全与隔离", "Enterprise Security & Isolation", "Seguridad Empresarial y Aislamiento"),
          description: txt(
            "多租户架构下数据完全隔离，支持企业级权限管理。所有数据传输采用 HTTPS 加密，文件存储使用 S3 兼容对象存储，确保数据安全合规。",
            "Complete data isolation in multi-tenant architecture with enterprise-grade permission management. All data transmission uses HTTPS encryption with S3-compatible object storage for security compliance.",
            "Aislamiento completo de datos en arquitectura multi-tenant con gestión de permisos empresarial. Transmisión HTTPS y almacenamiento S3 compatible."
          ),
          metric: "99.9%",
          metricLabel: txt("服务可用性", "Uptime SLA", "Disponibilidad"),
        },
      ]}
      architectureDescription={txt(
        "ReviewHub 采用前后端分离的 SaaS 架构。前端包括嵌入式 Widget（Shadow DOM 隔离）和管理后台（React + TypeScript）。后端基于 Node.js + Express，数据库使用 PostgreSQL + Drizzle ORM。AI 模块集成大语言模型进行需求分析和语音转写。文件存储使用 S3 兼容对象存储，支持 28+ RESTful API 和 6 种 Webhook 事件推送。",
        "ReviewHub uses a decoupled SaaS architecture. The frontend includes an embedded Widget (Shadow DOM isolation) and admin dashboard (React + TypeScript). The backend is built on Node.js + Express with PostgreSQL + Drizzle ORM. The AI module integrates LLMs for requirements analysis and speech transcription. File storage uses S3-compatible object storage, supporting 28+ RESTful APIs and 6 Webhook event types.",
        "ReviewHub utiliza una arquitectura SaaS desacoplada. El frontend incluye un Widget integrado (aislamiento Shadow DOM) y panel de administración (React + TypeScript). El backend está construido con Node.js + Express y PostgreSQL + Drizzle ORM. El módulo de IA integra LLMs para análisis de requisitos y transcripción de voz."
      )}
    >
      {/* 产品演示入口 - 放在底部CTA之前 */}
      <section className="relative py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Globe size={16} />
              {txt("在线体验", "Live Demo", "Demo en Vivo")}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {txt("立即体验 ReviewHub", "Try ReviewHub Now", "Pruebe ReviewHub Ahora")}
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
              {txt(
                "ReviewHub 已上线运营，支持免费注册使用。点击下方按钮直接访问产品，体验截图标注、语音反馈、AI 需求分析等全部功能。",
                "ReviewHub is live and operational. Register for free to experience all features including screenshot annotation, voice feedback, and AI requirement analysis.",
                "ReviewHub está en funcionamiento. Regístrese gratis para experimentar todas las funciones, incluyendo anotación de capturas, feedback de voz y análisis de requisitos con IA."
              )}
            </p>
            <a
              href="https://review.figo.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <ExternalLink size={22} />
              {txt("访问产品演示", "Visit Product Demo", "Visitar Demo del Producto")}
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <span>{txt("✓ 免费注册", "✓ Free Registration", "✓ Registro Gratuito")}</span>
              <span>{txt("✓ 无需信用卡", "✓ No Credit Card Required", "✓ Sin Tarjeta de Crédito")}</span>
              <span>{txt("✓ 3个项目免费", "✓ 3 Free Projects", "✓ 3 Proyectos Gratis")}</span>
            </div>
          </div>
        </div>
      </section>
    </ProductDetailLayout>
    </>
  );
}
