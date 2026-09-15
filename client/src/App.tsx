import { Route, Switch } from "wouter";
import { SiteChrome } from "@/components/SiteChrome";
import AboutPage from "@/pages/About";
import Home from "@/pages/Home";
import MenuPage from "@/pages/Menu";
import NotFound from "@/pages/NotFound";
import OrderPage from "@/pages/Order";
import VisitPage from "@/pages/Visit";

export default function App() {
  return (
    <SiteChrome>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/visit" component={VisitPage} />
        <Route component={NotFound} />
      </Switch>
    </SiteChrome>
  );
}
