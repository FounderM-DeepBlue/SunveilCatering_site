import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import OurStory from "@/pages/OurStory";
import Catering from "@/pages/Catering";
import Shop from "@/pages/Shop";
import Locations from "@/pages/Locations";
import Menu from "@/pages/Menu";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/story" component={OurStory} />
      <Route path="/menu" component={Menu} />
      <Route path="/locations" component={Locations} />
      <Route path="/catering" component={Catering} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
