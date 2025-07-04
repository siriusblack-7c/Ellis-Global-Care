
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Caregivers from "./pages/Caregivers";
import ArrangeCare from "./pages/ArrangeCare";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Amenities from "./pages/Amenities";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Apply from "./pages/Apply";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import CaregiverDetails from "./pages/CaregiverDetails";
import { LanguageProvider } from "./contexts/LanguageContext";

// Create a react-query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/caregivers" element={<Caregivers />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/arrange-care" element={<ArrangeCare />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/caregivers/:id" element={<CaregiverDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/caregivers/:id" element={<CaregiverDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/apply" element={<Apply />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
