import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FigoAgent from "./pages/FigoAgent";
import FigoEngine from "./pages/products/FigoEngine";
import SaleSpark from "./pages/products/SaleSpark";
import Moss from "./pages/products/Moss";
import RingAI from "./pages/products/RingAI";
import FigoAI from "./pages/products/FigoAI";

function Router() {
  return (
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
