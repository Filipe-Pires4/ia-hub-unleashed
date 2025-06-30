
import { Link } from 'react-router-dom';
import { Layout, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsLandingPage = () => {
  const prompts = [
    {
      title: "Página de Destino de Agência de TI Animada em 3D",
      content: "Projete uma página de destino moderna animada em 3D para uma agência de soluções de TI.",
      rating: "9/10 - Detalhado, visual, nicho específico."
    },
    {
      title: "Desenvolvimento de Portfólio Animado em 3D",
      content: "Guia para criar um portfólio animado em 3D com fundo de peixe e projetos interativos em seções 3D.",
      rating: "9/10 - Detalhado, interativo, visual."
    },
    {
      title: "Site Animado em 3D",
      content: "Cria um site com página inicial apresentando uma mala animada em 3D WOW que se move e muda de cor dinamicamente ao rolar.",
      rating: "9/10 - Detalhado, interativo, visual."
    },
    {
      title: "Criação de Jogo de Cartas 29",
      content: "Desenvolva um jogo de cartas 29 para navegadores da web usando HTML, CSS e JavaScript.",
      rating: "9/10 - Projeto completo, tecnologias especificadas."
    },
    {
      title: "Página de Login Animada em 3D",
      content: "Código para uma página de login animada em 3D.",
      rating: "8/10 - Específico, focado em design."
    },
    {
      title: "Site de Supercarros Animado em 3D",
      content: "Planeje um site dinâmico de supercarros animados em 3D.",
      rating: "8/10 - Criativo, focado em design."
    },
    {
      title: "Guia de Site Animado em 3D",
      content: "Orientação para projetar um site animado em 3D.",
      rating: "8/10 - Abrangente, focado em design."
    },
    {
      title: "Aprimoramento de Animação 3D",
      content: "Aprimore o site com animação 3D.",
      rating: "8/10 - Específico, focado em aprimoramento."
    },
    {
      title: "Desenvolvimento de Site de Chat de Vídeo 1v1",
      content: "Guia para criar um site de chat de vídeo em tempo real.",
      rating: "8/10 - Claro, funcional, específico."
    },
    {
      title: "Curso de React e Node.js de 30 Dias",
      content: "Um curso de aprendizado abrangente para dominar React e Node.js.",
      rating: "8/10 - Abrangente, focado em tecnologias."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Layout className="h-8 w-8 text-cyan-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Prompts de Landing Page</h1>
          </div>
          <p className="text-xl text-gray-300">
            Direcionados à criação de páginas de destino eficazes, com ênfase em design, interatividade e otimização para conversão.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-8">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-cyan-300 mb-4">
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
            to="/guias/prompts/saas"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Prompts de SaaS
          </Link>
          
          <Link
            to="/guias/prompts/crm"
            className="flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Prompts de CRM
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsLandingPage;
