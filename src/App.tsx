
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Guias from "./pages/Guias";
import Ferramentas from "./pages/Ferramentas";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Sugestoes from "./pages/Sugestoes";
import Apoie from "./pages/Apoie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/guias" element={<Guias />} />
              <Route path="/ferramentas" element={<Ferramentas />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/sugestoes" element={<Sugestoes />} />
              <Route path="/apoie" element={<Apoie />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
