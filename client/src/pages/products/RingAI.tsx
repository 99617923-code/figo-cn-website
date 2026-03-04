/*
 * 「量子棱镜」— Ring AI 智能戒指移动应用 产品详情页
 */
import ProductDetailLayout from "@/components/ProductDetailLayout";
import ProductSEO from "@/components/ProductSEO";
import { useTranslation } from "react-i18next";
import {
  Watch, Activity, Heart, Users, CreditCard, Globe,
  Dumbbell, Moon, Droplets, Thermometer, Footprints, Brain,
  Zap, Shield, Layers, Gauge,
  Smartphone, BarChart3, Bell, Settings,
} from "lucide-react";

export default function RingAI() {
  const { t, i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");

  return (
    <>
    <ProductSEO
      name="Ring AI"
      tagline={isEn ? "Universal AI Smart Ring Mobile App" : "通用AI智能戒指移动应用"}
      description={isEn ? "Ring AI is a universal AI smart ring mobile application for the global market, supporting connections with all smart ring brands that have open APIs/SDKs. It provides personalized health insights, family member monitoring, multi-dimensional data analysis, and subscription-based value-added services through its AI health analysis engine." : "Ring AI是面向全球市场的通用AI智能戒指移动应用，支持连接市场上所有开放API/SDK的智能戒指品牌。通过AI健康分析引擎提供个性化健康洞察、家人绑定关怀、多维度数据分析和订阅增值服务。"}
      keywords={isEn ? ["AI Smart Ring", "Wearable App", "AI Health Analysis", "Smart Ring App", "AI Agent Custom Development", "Health Data Monitoring", "React Native", "Ring AI", "Firehawk Tech"] : ["AI智能戒指", "智能穿戴应用", "AI健康分析", "智能戒指App", "AI智能体定制开发", "健康数据监测", "React Native", "Ring AI", "火鹰科技"]}
      path="/products/ring-ai"
    />
    <ProductDetailLayout
      name="Ring AI"
      tagline={isEn ? "Universal AI Smart Ring Mobile App" : "通用 AI 智能戒指移动应用"}
      heroDescription={isEn ? "A universal AI smart ring mobile app for the global market, supporting connections with all smart ring brands that have open APIs/SDKs. Through its AI health analysis engine, it offers users personalized health insights, family member monitoring, multi-dimensional data analysis, and subscription-based value-added services." : "面向全球市场的通用 AI 智能戒指移动应用，支持连接市场上所有开放 API/SDK 的智能戒指品牌。通过 AI 健康分析引擎，为用户提供个性化的健康洞察、家人绑定关怀、多维度数据分析和订阅增值服务。"}
      gradient="from-emerald-500 to-cyan-500"
      gradientColors="rgba(16,185,129,0.5), rgba(6,182,212,0.5)"
      heroIcon={<Watch size={28} className="text-white" />}
      stats={[
        { value: isEn ? "All Brands" : "全品牌", label: isEn ? "Device-Compatible" : "设备兼容" },
        { value: isEn ? "Global" : "全球化", label: isEn ? "Multi-language" : "多语言支持" },
        { value: "10+", label: isEn ? "Health Dimensions" : "健康维度" },
        { value: isEn ? "AI-Powered" : "AI驱动", label: isEn ? "Health Analysis" : "健康分析" },
      ]}
      features={[
        {
          icon: <Activity size={20} className="text-white" />,
          title: isEn ? "AI Health Analysis Engine" : "AI 健康分析引擎",
          description: isEn ? "Intelligent health analysis based on large models, integrating multi-dimensional data like heart rate, blood oxygen, sleep, and exercise to generate personalized health reports and improvement suggestions, rather than simple data display." : "基于大模型的智能健康分析，综合心率、血氧、睡眠、运动等多维度数据，生成个性化健康报告和改善建议，而非简单的数据展示。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <Users size={20} className="text-white" />,
          title: isEn ? "Family Bonding & Care" : "家人绑定与关怀",
          description: isEn ? "Supports binding family members' smart rings to view their health data in real-time, with automatic alerts for abnormal metrics. Ideal for children monitoring their parents' health and parents caring for their children." : "支持绑定家人的智能戒指，实时查看家人健康数据，异常指标自动预警通知。特别适合关注父母健康的子女和关心孩子的家长。",
          badge: isEn ? "Core" : "核心",
        },
        {
          icon: <BarChart3 size={20} className="text-white" />,
          title: isEn ? "Multi-Dimensional Data Analysis" : "多维度数据分析",
          description: isEn ? "Tracks and visualizes over 10 dimensions of data, including Heart Rate Variability (HRV), blood oxygen saturation, deep sleep ratio, steps and calories, stress index, and body temperature trends." : "心率变异性（HRV）、血氧饱和度、深度睡眠比例、步数与卡路里、压力指数、体温趋势等 10+ 维度的数据追踪与可视化分析。",
        },
        {
          icon: <CreditCard size={20} className="text-white" />,
          title: isEn ? "Subscription Value-Added Services" : "订阅增值服务",
          description: isEn ? "Basic features are free, while advanced functions like AI analysis, family bonding, and professional health reports are unlocked via subscription. Supports flexible monthly/annual payment plans." : "基础功能免费使用，高级 AI 分析、家人绑定、专业健康报告等增值功能通过订阅解锁。支持月付/年付，灵活的定价策略。",
        },
        {
          icon: <Globe size={20} className="text-white" />,
          title: isEn ? "Global Multi-Language Support" : "全球化多语言",
          description: isEn ? "Supports multiple languages including Chinese, English, Japanese, and Korean. Both the UI and AI analysis reports are localized for the global wearable market." : "支持中文、英文、日文、韩文等多种语言，UI 和 AI 分析报告均支持本地化，面向全球智能穿戴市场。",
        },
        {
          icon: <Smartphone size={20} className="text-white" />,
          title: isEn ? "All-Brand Device Compatibility" : "全品牌设备兼容",
          description: isEn ? "Universal architecture design supports connecting to all smart ring brands with open APIs/SDKs. Users can switch devices without changing the app, ensuring seamless data migration." : "通用架构设计，支持连接市场上所有开放 API/SDK 的智能戒指品牌，用户更换设备无需更换 App，数据无缝迁移。",
          badge: isEn ? "Exclusive" : "独家",
        },
        {
          icon: <Bell size={20} className="text-white" />,
          title: isEn ? "Intelligent Reminder System" : "智能提醒系统",
          description: isEn ? "Features like sedentary reminders, hydration reminders, exercise goal reminders, and sleep time reminders help users develop healthy habits." : "久坐提醒、喝水提醒、运动目标提醒、睡眠时间提醒等智能提醒功能，帮助用户养成健康生活习惯。",
        },
        {
          icon: <Settings size={20} className="text-white" />,
          title: isEn ? "Device Management Center" : "设备管理中心",
          description: isEn ? "One-stop device management functions including Bluetooth connection management, firmware upgrades, device calibration, and data synchronization to ensure the device is always in optimal condition." : "蓝牙连接管理、固件升级、设备校准、数据同步等一站式设备管理功能，确保设备始终处于最佳状态。",
        },
      ]}
      scenarios={[
        {
          title: isEn ? "Personal Health Management" : "个人健康管理",
          description: isEn ? "Wear the smart ring daily for continuous AI-powered health data tracking. It generates regular health trend reports and provides personalized advice on exercise, diet, and sleep, acting as your personal health manager." : "日常佩戴智能戒指，AI 持续追踪健康数据，定期生成健康趋势报告，提供个性化的运动、饮食和作息建议，做自己的健康管家。",
          icon: <Heart size={22} className="text-white" />,
        },
        {
          title: isEn ? "Fitness Tracking" : "运动健身追踪",
          description: isEn ? "Accurately records exercise data, with AI analyzing training effectiveness and recovery status. It recommends optimal training intensity and rest times to help fitness enthusiasts train scientifically." : "精准记录运动数据，AI 分析训练效果和恢复状态，推荐最佳训练强度和休息时间，帮助运动爱好者科学训练。",
          icon: <Dumbbell size={22} className="text-white" />,
        },
        {
          title: isEn ? "Sleep Quality Optimization" : "睡眠质量优化",
          description: isEn ? "Comprehensively monitors sleep stages (deep, light, REM), analyzes factors affecting sleep quality, and provides improvement suggestions to help users achieve better sleep." : "全面监测睡眠阶段（深睡、浅睡、REM），分析影响睡眠质量的因素，提供改善建议，帮助用户获得更好的睡眠。",
          icon: <Moon size={22} className="text-white" />,
        },
        {
          title: isEn ? "Family Health Guardian" : "家庭健康守护",
          description: isEn ? "Equip parents with smart rings, and children can remotely view their health data via the app. Automatic alerts for abnormal heart rates or low blood oxygen levels help safeguard family health." : "为父母配备智能戒指，子女通过 App 远程查看健康数据。心率异常、血氧过低等情况自动推送预警，守护家人健康。",
          icon: <Users size={22} className="text-white" />,
        },
        {
          title: isEn ? "Stress & Emotion Management" : "压力与情绪管理",
          description: isEn ? "Analyzes stress levels through HRV data and offers stress-relief suggestions like meditation and breathing exercises, helping professionals manage stress and emotions." : "通过 HRV 数据分析压力水平，结合 AI 提供冥想、呼吸练习等减压建议，帮助职场人士管理压力和情绪。",
          icon: <Brain size={22} className="text-white" />,
        },
        {
          title: isEn ? "Chronic Disease Auxiliary Management" : "慢病辅助管理",
          description: isEn ? "Provides continuous health data monitoring for patients with chronic diseases like hypertension and diabetes. Timely warnings for abnormal indicators assist doctors in understanding patients' daily health status." : "为高血压、糖尿病等慢病患者提供持续的健康数据监测，异常指标及时预警，辅助医生了解患者日常健康状况。",
          icon: <Thermometer size={22} className="text-white" />,
        },
      ]}
      techAdvantages={[
        {
          title: isEn ? "Universal Device Adaptation Architecture" : "通用设备适配架构",
          description: isEn ? "A self-developed Device Abstraction Layer (DAL) unifies the SDKs/APIs of different smart ring brands into a standard interface. Adding support for a new device only requires writing an adapter plugin, with no changes to the upper-level business logic, making it highly extensible." : "自研的设备抽象层（DAL），将不同品牌智能戒指的 SDK/API 统一封装为标准接口。新增设备支持仅需编写适配器插件，无需修改上层业务逻辑，扩展性极强。",
          metric: isEn ? "All Brands" : "全品牌",
          metricLabel: isEn ? "Device-Compatible" : "设备兼容",
        },
        {
          title: isEn ? "AI Health Analysis Model" : "AI 健康分析模型",
          description: isEn ? "A health analysis engine fine-tuned on large models, combined with a medical knowledge base and user historical data, provides intelligent analysis that goes beyond simple threshold judgments. It can identify data trends, correlate multi-dimensional indicators, and offer evidence-based health advice." : "基于大模型微调的健康分析引擎，结合医学知识库和用户历史数据，提供超越简单阈值判断的智能分析。能够识别数据趋势、关联多维度指标、给出有依据的健康建议。",
          metric: isEn ? "AI-Powered" : "AI驱动",
          metricLabel: isEn ? "Intelligent Analysis" : "智能分析",
        },
        {
          title: isEn ? "Low-Power Bluetooth Optimization" : "低功耗蓝牙优化",
          description: isEn ? "Deeply optimized BLE (Bluetooth Low Energy) connection strategy reduces background data synchronization power consumption by 40% and increases connection stability to 99.5%, ensuring uninterrupted 24/7 data collection." : "深度优化 BLE（低功耗蓝牙）连接策略，后台数据同步功耗降低 40%，连接稳定性提升至 99.5%，确保全天候数据采集不中断。",
          metric: "-40%",
          metricLabel: isEn ? "Power Optimization" : "功耗优化",
        },
        {
          title: isEn ? "Cross-Platform Native Experience" : "跨平台原生体验",
          description: isEn ? "Built with React Native for a native experience on both iOS and Android. Core data processing modules are written in native code to ensure the performance and stability of data synchronization and Bluetooth communication." : "基于 React Native 构建，iOS 和 Android 双平台原生体验。核心数据处理模块使用原生代码编写，确保数据同步和蓝牙通信的性能和稳定性。",
          metric: isEn ? "Dual-Platform" : "双平台",
          metricLabel: isEn ? "Native Experience" : "原生体验",
        },
      ]}
      architectureDescription={isEn ? "Ring AI uses a React Native cross-platform architecture, including a Device Abstraction Layer (DAL), a data processing engine, an AI analysis service, and a cloud synchronization module. The DAL layer supports multi-brand device access through a plugin-based design, the data processing engine performs real-time analysis locally, the AI analysis service provides deep health insights based on cloud-based large models, and the cloud synchronization module ensures data consistency across multiple devices." : "Ring AI 采用 React Native 跨平台架构，核心包括设备抽象层（DAL）、数据处理引擎、AI 分析服务和云端同步模块。DAL 层通过插件化设计支持多品牌设备接入，数据处理引擎在本地完成实时分析，AI 分析服务基于云端大模型提供深度健康洞察，云端同步模块确保多设备数据一致性。"}
    />
    </>
  );
}

