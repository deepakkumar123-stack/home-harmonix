
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import WhyListWithMe from "./pages/WhyListWithMe";
import HomeValuation from "./pages/HomeValuation";
import Communities from "./pages/Communities";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/why-list" element={<WhyListWithMe />} />
          <Route path="/valuation" element={<HomeValuation />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
