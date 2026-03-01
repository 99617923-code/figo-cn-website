import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import FigoAgent from "./pages/FigoAgent";
import FigoEngine from "./pages/products/FigoEngine";
import SaleSpark from "./pages/products/SaleSpark";
import Moss from "./pages/products/Moss";
import RingAI from "./pages/products/RingAI";
import FigoAI from "./pages/products/FigoAI";
import FaruiChat from "./pages/products/FaruiChat";
import Services from "./pages/Services";

/** 路由切换时自动滚动到顶部 */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* 服务页路由 */}
        <Route path={"/services"} component={Services} />
        {/* 产品详情页路由 */}
        <Route path={"/products/figo-engine"} component={FigoEngine} />
        <Route path={"/products/salespark"} component={SaleSpark} />
        <Route path={"/products/moss"} component={Moss} />
        <Route path={"/products/ring-ai"} component={RingAI} />
        <Route path={"/products/farui-chat"} component={FaruiChat} />
        <Route path={"/products/figo-ai"} component={FigoAI} />
        {/* 兼容旧路径 /FigoAgent */}
        <Route path={"/FigoAgent"} component={FigoAgent} />
        <Route path={"/FigoAgent/"} component={FigoAgent} />
        {/* 首页 — FigoAgent 作为官网一级目录默认首页 */}
        <Route path={"/"} component={FigoAgent} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
