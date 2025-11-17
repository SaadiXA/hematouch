import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import BrandDesign from "./pages/services/BrandDesign";
import SocialMediaService from "./pages/services/SocialMediaService";
import EcommerceService from "./pages/services/EcommerceService";
import AdvertisingService from "./pages/services/AdvertisingService";
import AnalyticsService from "./pages/services/AnalyticsService";
import MotionGraphicsService from "./pages/services/MotionGraphicsService";
import InfluencerService from "./pages/services/InfluencerService";
import EventsService from "./pages/services/EventsService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services/brand-design" element={<BrandDesign />} />
          <Route path="/services/social-media" element={<SocialMediaService />} />
          <Route path="/services/ecommerce" element={<EcommerceService />} />
          <Route path="/services/advertising" element={<AdvertisingService />} />
          <Route path="/services/analytics" element={<AnalyticsService />} />
          <Route path="/services/motion-graphics" element={<MotionGraphicsService />} />
          <Route path="/services/influencer-marketing" element={<InfluencerService />} />
          <Route path="/services/events" element={<EventsService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
