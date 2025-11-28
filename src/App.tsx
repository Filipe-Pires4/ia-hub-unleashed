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
import GuiaPrompts from "./pages/GuiaPrompts";
import GuiaPromptsFundamentos from "./pages/GuiaPromptsFundamentos";
import GuiaPromptsSaas from "./pages/GuiaPromptsSaas";
import GuiaPromptsLandingPage from "./pages/GuiaPromptsLandingPage";
import GuiaPromptsCrm from "./pages/GuiaPromptsCrm";
import GuiaPromptsBackend from "./pages/GuiaPromptsBackend";
import GuiaPromptsFrontend from "./pages/GuiaPromptsFrontend";
import GuiaPromptsArquitetura from "./pages/GuiaPromptsArquitetura";
import GuiaPromptsEngenhariaPrompt from "./pages/GuiaPromptsEngenhariaPrompt";
import GuiaIAIniciantes from "./pages/GuiaIAIniciantes";
import GuiaPromptsEficazes from "./pages/GuiaPromptsEficazes";
import GuiaPromptsEficazesOQueEIA from "./pages/GuiaPromptsEficazesOQueEIA";
import GuiaPromptsEficazesImportancia from "./pages/GuiaPromptsEficazesImportancia";
import GuiaPromptsEficazesCriarPrompts from "./pages/GuiaPromptsEficazesCriarPrompts";
import GuiaPromptsEficazesTecnicasAvancadas from "./pages/GuiaPromptsEficazesTecnicasAvancadas";
import GuiaPromptsEficazesExemplos from "./pages/GuiaPromptsEficazesExemplos";
import GuiaPromptsEficazesDicas from "./pages/GuiaPromptsEficazesDicas";
import GuiaHumanizacaoAgentes from "./pages/GuiaHumanizacaoAgentes";
import GuiaHumanizacaoAgentesContraintuicao from "./pages/GuiaHumanizacaoAgentesContraintuicao";
import GuiaHumanizacaoAgentesMicromomentos from "./pages/GuiaHumanizacaoAgentesMicromomentos";
import GuiaHumanizacaoAgentesDicas from "./pages/GuiaHumanizacaoAgentesDicas";
import GuiaHumanizacaoAgentesPratica from "./pages/GuiaHumanizacaoAgentesPratica";
import GuiaAquecimentoChip from "./pages/GuiaAquecimentoChip";
import GuiaAquecimentoChipCriptografia from "./pages/GuiaAquecimentoChipCriptografia";
import GuiaAquecimentoChipCronograma from "./pages/GuiaAquecimentoChipCronograma";
import GuiaAquecimentoChipAPIs from "./pages/GuiaAquecimentoChipAPIs";
import GuiaAquecimentoChipErros from "./pages/GuiaAquecimentoChipErros";
import GuiaAquecimentoChipCasosDeUso from "./pages/GuiaAquecimentoChipCasosDeUso";

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
              <Route path="/guias/ia-iniciantes" element={<GuiaIAIniciantes />} />
              <Route path="/guias/prompts" element={<GuiaPrompts />} />
              <Route path="/guias/prompts-eficazes" element={<GuiaPromptsEficazes />} />
              <Route path="/guias/prompts-eficazes/o-que-e-ia" element={<GuiaPromptsEficazesOQueEIA />} />
              <Route path="/guias/prompts-eficazes/importancia-prompts" element={<GuiaPromptsEficazesImportancia />} />
              <Route path="/guias/prompts-eficazes/como-criar-prompts" element={<GuiaPromptsEficazesCriarPrompts />} />
              <Route path="/guias/prompts-eficazes/tecnicas-avancadas" element={<GuiaPromptsEficazesTecnicasAvancadas />} />
              <Route path="/guias/prompts-eficazes/exemplos-praticos" element={<GuiaPromptsEficazesExemplos />} />
              <Route path="/guias/prompts-eficazes/dicas-de-ouro" element={<GuiaPromptsEficazesDicas />} />
              <Route path="/guias/humanizacao-agentes" element={<GuiaHumanizacaoAgentes />} />
              <Route path="/guias/humanizacao-agentes/contraintuicao" element={<GuiaHumanizacaoAgentesContraintuicao />} />
              <Route path="/guias/humanizacao-agentes/micromomentos" element={<GuiaHumanizacaoAgentesMicromomentos />} />
              <Route path="/guias/humanizacao-agentes/dicas-ninjas" element={<GuiaHumanizacaoAgentesDicas />} />
              <Route path="/guias/humanizacao-agentes/pratica" element={<GuiaHumanizacaoAgentesPratica />} />
              <Route path="/guias/aquecimento-chip" element={<GuiaAquecimentoChip />} />
              <Route path="/guias/aquecimento-chip/criptografia" element={<GuiaAquecimentoChipCriptografia />} />
              <Route path="/guias/aquecimento-chip/cronograma" element={<GuiaAquecimentoChipCronograma />} />
              <Route path="/guias/aquecimento-chip/apis" element={<GuiaAquecimentoChipAPIs />} />
              <Route path="/guias/aquecimento-chip/erros" element={<GuiaAquecimentoChipErros />} />
              <Route path="/guias/aquecimento-chip/casos-de-uso" element={<GuiaAquecimentoChipCasosDeUso />} />
              <Route path="/guias/prompts/como-criar-prompt" element={<GuiaPromptsFundamentos />} />
              <Route path="/guias/prompts/saas" element={<GuiaPromptsSaas />} />
              <Route path="/guias/prompts/landing-page" element={<GuiaPromptsLandingPage />} />
              <Route path="/guias/prompts/crm" element={<GuiaPromptsCrm />} />
              <Route path="/guias/prompts/backend" element={<GuiaPromptsBackend />} />
              <Route path="/guias/prompts/frontend" element={<GuiaPromptsFrontend />} />
              <Route path="/guias/prompts/arquitetura" element={<GuiaPromptsArquitetura />} />
              <Route path="/guias/prompts/engenharia-prompt" element={<GuiaPromptsEngenhariaPrompt />} />
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
