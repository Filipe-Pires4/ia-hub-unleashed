
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Code, Layout, Database, Server, Globe, Building, Zap } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPrompts = () => {
  const chapters = [
    {
      title: "1. Como Criar um Bom Prompt",
      description: "Aprenda os fundamentos para criar prompts eficazes usando o método P.A.C.E.R. e técnicas avançadas.",
      icon: BookOpen,
      path: "/guias/prompts/como-criar-prompt",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      title: "2. Prompts de SaaS",
      description: "10 prompts especializados para desenvolvimento de produtos Software as a Service.",
      icon: Building,
      path: "/guias/prompts/saas",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "3. Prompts de Landing Page",
      description: "10 prompts focados em criação de páginas de destino eficazes e interativas.",
      icon: Layout,
      path: "/guias/prompts/landing-page",
      gradient: "from-cyan-500 to-teal-600"
    },
    {
      title: "4. Prompts de CRM",
      description: "10 prompts para desenvolvimento de sistemas de Gerenciamento de Relacionamento com Cliente.",
      icon: Database,
      path: "/guias/prompts/crm",
      gradient: "from-teal-500 to-green-600"
    },
    {
      title: "5. Prompts de Backend",
      description: "10 prompts avançados para arquitetura e implementação de sistemas de servidor.",
      icon: Server,
      path: "/guias/prompts/backend",
      gradient: "from-green-500 to-lime-600"
    },
    {
      title: "6. Prompts de Frontend",
      description: "10 prompts para criação de interfaces de usuário ricas e responsivas.",
      icon: Globe,
      path: "/guias/prompts/frontend",
      gradient: "from-lime-500 to-yellow-600"
    },
    {
      title: "7. Prompts de Arquitetura de Software",
      description: "10 prompts para design de sistemas distribuídos e arquiteturas complexas.",
      icon: Code,
      path: "/guias/prompts/arquitetura",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "8. Prompts de Engenharia de Prompt",
      description: "10 prompts meta para aperfeiçoar suas próprias técnicas de prompting.",
      icon: Zap,
      path: "/guias/prompts/engenharia-prompt",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-10 w-10 text-purple-400 mr-4" />
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Guia de Prompts para Lovable
            </h1>
          </div>
          <div className="bg-purple-600/20 border border-purple-500/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">70 Exemplos para Desenvolvedores</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Este guia foi elaborado para auxiliar você na criação de prompts eficazes para o Lovable, uma ferramenta poderosa para o desenvolvimento de software. A qualidade do resultado gerado por uma inteligência artificial depende diretamente da clareza e detalhe do prompt fornecido. Aqui, você encontrará uma coleção de 70 prompts de alta qualidade, avaliados e organizados em categorias, além de dicas e métodos para aprimorar suas próprias solicitações.
            </p>
          </div>
        </div>

        {/* Sumário dos Capítulos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore os Capítulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <Link
                  key={index}
                  to={chapter.path}
                  className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${chapter.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {chapter.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {chapter.description}
                  </p>
                  
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-medium transition-colors">
                    Acessar Capítulo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Sumário Detalhado */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">Sumário Detalhado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Fundamentos & Teoria</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <strong>Prompts de SaaS:</strong> Focados no desenvolvimento e gerenciamento de produtos Software as a Service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <strong>Prompts de Landing Page:</strong> Direcionados à criação de páginas de destino eficazes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <strong>Prompts de CRM:</strong> Abrangem o desenvolvimento de sistemas de Gerenciamento de Relacionamento
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  <strong>Prompts de Engenharia de Prompt:</strong> Técnicas meta para aperfeiçoar suas próprias solicitações
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Desenvolvimento & Arquitetura</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <strong>Prompts de Backend:</strong> Concentram-se na arquitetura e implementação de sistemas de servidor
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <strong>Prompts de Frontend:</strong> Voltados para a criação de interfaces de usuário ricas e responsivas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  <strong>Prompts de Arquitetura:</strong> Explora frameworks modernos e otimização de desempenho
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  <strong>Como Criar Prompts:</strong> Fundamentos usando método P.A.C.E.R. e técnicas avançadas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaPrompts;
