import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./lib/i18n"; // i18n国际化初始化
import { detectLanguageByIP } from "./lib/i18n";

// 根据IP地理位置自动设置语言（中国IP→中文，其他→英文）
detectLanguageByIP();

createRoot(document.getElementById("root")!).render(<App />);
