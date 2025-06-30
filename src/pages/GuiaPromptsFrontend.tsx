
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsFrontend = () => {
  const prompts = [
    {
      title: "Função WordPress para API Reddit",
      content: "Crie uma função WordPress que fará uma solicitação de API usando wp_remote_post() para {URL DA API DO REDDIT} usando a chave de API {SUA CHAVE DE API} para gerar uma lista das minhas postagens e comentários mais recentes. Eu sempre uso meu nome de usuário do Reddit, {SEU NOME DE USUÁRIO DO REDDIT}. A função terá os seguintes argumentos opcionais: $limit (inteiro) padrão 20, mas aceita um número entre 1 e 100. Se um valor inválido for fornecido, retorne um WP_Error mencionando o problema. $subreddits (array) padrão [], aceita um array de strings contendo subreddits específicos para incluir postagens e comentários. Quando fornecido, definirá os parâmetros de API apropriados, caso contrário, todas as postagens e comentários serão incluídos.",
      rating: "10/10 - Extremamente detalhado, funcional, com validação de entrada e tratamento de erro."
    },
    {
      title: "Aplicação Web Progressiva (PWA) para Notícias",
      content: "Desenvolva uma PWA para um portal de notícias, garantindo carregamento rápido, funcionalidade offline, notificações push e uma experiência de usuário semelhante a um aplicativo nativo.",
      rating: "10/10 - Offline, rápido, nativo."
    },
    {
      title: "Interface de Usuário para Plataforma de E-commerce",
      content: "Desenvolva a interface de usuário completa para uma plataforma de e-commerce responsiva, incluindo páginas de listagem de produtos, detalhes do produto, carrinho de compras, checkout e perfil do usuário, com foco em UX/UI e desempenho.",
      rating: "9/10 - Completo, responsivo, UX/UI."
    },
    {
      title: "Dashboard Interativo com Visualizações de Dados",
      content: "Crie um dashboard interativo utilizando React (ou Vue/Angular) para exibir dados complexos de vendas e marketing, com gráficos dinâmicos, filtros e capacidade de drill-down.",
      rating: "9/10 - Interativo, dados, visualizações."
    },
    {
      title: "Componentes Reutilizáveis com Storybook",
      content: "Crie uma biblioteca de componentes de UI reutilizáveis utilizando React e Storybook, com documentação interativa e exemplos de uso para cada componente.",
      rating: "9/10 - Reutilizável, documentado, modular."
    },
    {
      title: "Frontend para Aplicativo de Chat em Tempo Real",
      content: "Desenvolva a interface de usuário para um aplicativo de chat em tempo real, com exibição de mensagens, lista de contatos, indicadores de digitação e suporte a emojis, utilizando WebSockets para comunicação.",
      rating: "9/10 - Tempo real, interativo, comunicação."
    },
    {
      title: "Frontend para Plataforma de E-learning com Player de Vídeo Customizado",
      content: "Desenvolva o frontend para uma plataforma de e-learning, incluindo um player de vídeo customizado com funcionalidades de anotação, controle de velocidade e acompanhamento de progresso do aluno.",
      rating: "9/10 - Customizado, interativo, aprendizado."
    },
    {
      title: "Otimização de Workflow Frontend com Vite",
      content: "Explique como o Vite pode acelerar o workflow de desenvolvimento frontend, detalhando seus principais recursos e benefícios em comparação com outras ferramentas de build.",
      rating: "8/10 - Abrangente, focado em ferramenta, comparativo."
    },
    {
      title: "Animações Complexas com GSAP/Framer Motion",
      content: "Implemente animações complexas e fluidas em uma página web utilizando bibliotecas como GSAP ou Framer Motion, para criar uma experiência de usuário envolvente e memorável.",
      rating: "8/10 - Animações, fluidez, experiência."
    },
    {
      title: "Formulário Multi-etapas com Validação",
      content: "Crie um formulário multi-etapas com validação em cada etapa, barra de progresso e feedback visual para o usuário, otimizando a experiência de preenchimento de formulários longos.",
      rating: "8/10 - Validação, UX, progresso."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Globe className="h-8 w-8 text-yellow-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Prompts de Frontend</h1>
          </div>
          <p className="text-xl text-gray-300">
            Voltados para a criação de interfaces de usuário ricas e responsivas, explorando frameworks modernos e otimização de desempenho.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-8">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">
                  {index + 1}. {prompt.title}
                </h3>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg mb-4 border border-gray-600">
                <p className="text-gray-300 leading-relaxed italic">
                  "{prompt.content}"
                </p>
              </div>
              
              <div className="text-sm text-green-400 font-medium">
                <strong>Avaliação:</strong> {prompt.rating}
              </div>
            </div>
          ))}
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts/backend"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Prompts de Backend
          </Link>
          
          <Link
            to="/guias/prompts/arquitetura"
            className="flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Prompts de Arquitetura
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsFrontend;
