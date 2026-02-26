import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FigoAgent from "./pages/FigoAgent";
import FigoEngine from "./pages/products/FigoEngine";
import SaleSpark from "./pages/products/SaleSpark";
import Moss from "./pages/products/Moss";
import RingAI from "./pages/products/RingAI";
import FigoAI from "./pages/products/FigoAI";

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
        {/* 产品详情页路由 */}
        <Route path={"/FigoAgent/products/figo-engine"} component={FigoEngine} />
        <Route path={"/FigoAgent/products/salespark"} component={SaleSpark} />
        <Route path={"/FigoAgent/products/moss"} component={Moss} />
        <Route path={"/FigoAgent/products/ring-ai"} component={RingAI} />
        <Route path={"/FigoAgent/products/figo-ai"} component={FigoAI} />
        {/* FigoAgent 主页 */}
        <Route path={"/FigoAgent"} component={FigoAgent} />
        <Route path={"/FigoAgent/"} component={FigoAgent} />
        {/* 旧站点 */}
        <Route path={"/"} component={Home} />
        <Route component={Home} />
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
