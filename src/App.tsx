
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Provenance from "./pages/Provenance";
import Metrics from "./pages/Metrics";
import Auditors from "./pages/Auditors";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import DAO from "./pages/DAO";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { useEffect } from "react";

const queryClient = new QueryClient();

// ScrollToTop component to ensure page transitions work correctly
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add page transition effect
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('page-transition-enter');
    }
    
    // Add reveal animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [location.pathname]); // Re-run when route changes
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="dark-transition">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/provenance" element={<Provenance />} />
              <Route path="/metrics" element={<Metrics />} />
              <Route path="/auditors" element={<Auditors />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/dao" element={<DAO />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
