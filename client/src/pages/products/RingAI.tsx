/*
 * 「量子棱镜」— Ring AI 智能戒指移动应用 产品详情页
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import {
  Watch, Activity, Heart, Users, CreditCard, Globe,
  Dumbbell, Moon, Droplets, Thermometer, Footprints, Brain,
  Zap, Shield, Layers, Gauge,
  Smartphone, BarChart3, Bell, Settings,
} from "lucide-react";

export default function RingAI() {
  return (
    <>
    <ProductSEO
      name="Ring AI"
      tagline="通用AI智能戒指移动应用"
      description="Ring AI是面向全球市场的通用AI智能戒指移动应用，支持连接市场上所有开放API/SDK的智能戒指品牌。通过AI健康分析引擎提供个性化健康洞察、家人绑定关怀、多维度数据分析和订阅增值服务。"
      keywords={["AI智能戒指", "智能穿戴应用", "AI健康分析", "智能戒指App", "健康数据监测", "React Native", "Ring AI", "火鹰科技"]}
      path="/products/ring-ai"
    />
    <ProductDetailLayout
      name="Ring AI"
      tagline="通用 AI 智能戒指移动应用"
      heroDescription="面向全球市场的通用 AI 智能戒指移动应用，支持连接市场上所有开放 API/SDK 的智能戒指品牌。通过 AI 健康分析引擎，为用户提供个性化的健康洞察、家人绑定关怀、多维度数据分析和订阅增值服务。"
      gradient="from-emerald-500 to-cyan-500"
      gradientColors="rgba(16,185,129,0.5), rgba(6,182,212,0.5)"
      heroIcon={<Watch size={28} className="text-white" />}
      stats={[
        { value: "全品牌", label: "设备兼容" },
        { value: "全球化", label: "多语言支持" },
        { value: "10+", label: "健康维度" },
        { value: "AI驱动", label: "健康分析" },
      ]}
      features={[
        {
          icon: <Activity size={20} className="text-white" />,
          title: "AI 健康分析引擎",
          description: "基于大模型的智能健康分析，综合心率、血氧、睡眠、运动等多维度数据，生成个性化健康报告和改善建议，而非简单的数据展示。",
          badge: "核心",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: "家人绑定与关怀",
          description: "支持绑定家人的智能戒指，实时查看家人健康数据，异常指标自动预警通知。特别适合关注父母健康的子女和关心孩子的家长。",
          badge: "核心",
        },
        {
          icon: <BarChart3 size={20} className="text-white" />,
          title: "多维度数据分析",
          description: "心率变异性（HRV）、血氧饱和度、深度睡眠比例、步数与卡路里、压力指数、体温趋势等 10+ 维度的数据追踪与可视化分析。",
        },
        {
          icon: <CreditCard size={20} className="text-white" />,
          title: "订阅增值服务",
          description: "基础功能免费使用，高级 AI 分析、家人绑定、专业健康报告等增值功能通过订阅解锁。支持月付/年付，灵活的定价策略。",
        },
        {
          icon: <Globe size={20} className="text-white" />,
          title: "全球化多语言",
          description: "支持中文、英文、日文、韩文等多种语言，UI 和 AI 分析报告均支持本地化，面向全球智能穿戴市场。",
        },
        {
          icon: <Smartphone size={20} className="text-white" />,
          title: "全品牌设备兼容",
          description: "通用架构设计，支持连接市场上所有开放 API/SDK 的智能戒指品牌，用户更换设备无需更换 App，数据无缝迁移。",
          badge: "独家",
        },
        {
          icon: <Bell size={20} className="text-white" />,
          title: "智能提醒系统",
          description: "久坐提醒、喝水提醒、运动目标提醒、睡眠时间提醒等智能提醒功能，帮助用户养成健康生活习惯。",
        },
        {
          icon: <Settings size={20} className="text-white" />,
          title: "设备管理中心",
          description: "蓝牙连接管理、固件升级、设备校准、数据同步等一站式设备管理功能，确保设备始终处于最佳状态。",
        },
      ]}
      scenarios={[
        {
          title: "个人健康管理",
          description: "日常佩戴智能戒指，AI 持续追踪健康数据，定期生成健康趋势报告，提供个性化的运动、饮食和作息建议，做自己的健康管家。",
          icon: <Heart size={22} className="text-white" />,
        },
        {
          title: "运动健身追踪",
          description: "精准记录运动数据，AI 分析训练效果和恢复状态，推荐最佳训练强度和休息时间，帮助运动爱好者科学训练。",
          icon: <Dumbbell size={22} className="text-white" />,
        },
        {
          title: "睡眠质量优化",
          description: "全面监测睡眠阶段（深睡、浅睡、REM），分析影响睡眠质量的因素，提供改善建议，帮助用户获得更好的睡眠。",
          icon: <Moon size={22} className="text-white" />,
        },
        {
          title: "家庭健康守护",
          description: "为父母配备智能戒指，子女通过 App 远程查看健康数据。心率异常、血氧过低等情况自动推送预警，守护家人健康。",
          icon: <Users size={22} className="text-white" />,
        },
        {
          title: "压力与情绪管理",
          description: "通过 HRV 数据分析压力水平，结合 AI 提供冥想、呼吸练习等减压建议，帮助职场人士管理压力和情绪。",
          icon: <Brain size={22} className="text-white" />,
        },
        {
          title: "慢病辅助管理",
          description: "为高血压、糖尿病等慢病患者提供持续的健康数据监测，异常指标及时预警，辅助医生了解患者日常健康状况。",
          icon: <Thermometer size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: "通用设备适配架构",
          description: "自研的设备抽象层（DAL），将不同品牌智能戒指的 SDK/API 统一封装为标准接口。新增设备支持仅需编写适配器插件，无需修改上层业务逻辑，扩展性极强。",
          metric: "全品牌",
          metricLabel: "设备兼容",
        },
        {
          title: "AI 健康分析模型",
          description: "基于大模型微调的健康分析引擎，结合医学知识库和用户历史数据，提供超越简单阈值判断的智能分析。能够识别数据趋势、关联多维度指标、给出有依据的健康建议。",
          metric: "AI驱动",
          metricLabel: "智能分析",
        },
        {
          title: "低功耗蓝牙优化",
          description: "深度优化 BLE（低功耗蓝牙）连接策略，后台数据同步功耗降低 40%，连接稳定性提升至 99.5%，确保全天候数据采集不中断。",
          metric: "-40%",
          metricLabel: "功耗优化",
        },
        {
          title: "跨平台原生体验",
          description: "基于 React Native 构建，iOS 和 Android 双平台原生体验。核心数据处理模块使用原生代码编写，确保数据同步和蓝牙通信的性能和稳定性。",
          metric: "双平台",
          metricLabel: "原生体验",
        },
      ]}
      architectureDescription="Ring AI 采用 React Native 跨平台架构，核心包括设备抽象层（DAL）、数据处理引擎、AI 分析服务和云端同步模块。DAL 层通过插件化设计支持多品牌设备接入，数据处理引擎在本地完成实时分析，AI 分析服务基于云端大模型提供深度健康洞察，云端同步模块确保多设备数据一致性。"
    />
    </>
  );
}
