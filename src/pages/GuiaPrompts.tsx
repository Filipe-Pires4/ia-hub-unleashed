
import { Link } from 'react-router-dom';
import { BookOpen, Building, Layout, Users, Server, Monitor, GitBranch, Wrench } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPrompts = () => {
  const chapters = [
    {
      id: 1,
      title: "Como Criar um Bom Prompt",
      description: "Fundamentos essenciais para criar prompts eficazes",
      icon: BookOpen,
      color: "purple",
      path: "/guias/prompts/como-criar-prompt"
    },
    {
      id: 2,
      title: "Prompts de SaaS",
      description: "Desenvolvimento e gerenciamento de produtos Software as a Service",
      icon: Building,
      color: "blue",
      path: "/guias/prompts/saas"
    },
    {
      id: 3,
      title: "Prompts de Landing Page",
      description: "Criação de páginas de destino eficazes com design e interatividade",
      icon: Layout,
      color: "cyan",
      path: "/guias/prompts/landing-page"
    },
    {
      id: 4,
      title: "Prompts de CRM",
      description: "Sistemas de Gerenciamento de Relacionamento com o Cliente",
      icon: Users,
      color: "green",
      path: "/guias/prompts/crm"
    },
    {
      id: 5,
      title: "Prompts de Backend",
      description: "Arquitetura e implementação de sistemas de servidor",
      icon: Server,
      color: "red",
      path: "/guias/prompts/backend"
    },
    {
      id: 6,
      title: "Prompts de Frontend",
      description: "Interfaces de usuário ricas e responsivas",
      icon: Monitor,
      color: "yellow",
      path: "/guias/prompts/frontend"
    },
    {
      id: 7,
      title: "Prompts de Arquitetura",
      description: "Design e estruturação de sistemas complexos",
      icon: GitBranch,
      color: "indigo",
      path: "/guias/prompts/arquitetura"
    },
    {
      id: 8,
      title: "Engenharia de Prompt",
      description: "Técnicas avançadas para criar prompts mais eficazes",
      icon: Wrench,
      color: "orange",
      path: "/guias/prompts/engenharia-prompt"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "border-purple-500 text-purple-300 bg-purple-600 hover:bg-purple-700",
      blue: "border-blue-500 text-blue-300 bg-blue-600 hover:bg-blue-700",
      cyan: "border-cyan-500 text-cyan-300 bg-cyan-600 hover:bg-cyan-700",
      green: "border-green-500 text-green-300 bg-green-600 hover:bg-green-700",
      red: "border-red-500 text-red-300 bg-red-600 hover:bg-red-700",
      yellow: "border-yellow-500 text-yellow-300 bg-yellow-600 hover:bg-yellow-700",
      indigo: "border-indigo-500 text-indigo-300 bg-indigo-600 hover:bg-indigo-700",
      orange: "border-orange-500 text-orange-300 bg-orange-600 hover:bg-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guia de Prompts para Lovable: 70 Exemplos para Desenvolvedores
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Este guia foi elaborado para auxiliar você na criação de prompts eficazes para o Lovable, uma ferramenta poderosa para o desenvolvimento de software. A qualidade do resultado gerado por uma inteligência artificial depende diretamente da clareza e detalhe do prompt fornecido. Aqui, você encontrará uma coleção de 70 prompts de alta qualidade, avaliados e organizados em categorias, além de dicas e métodos para aprimorar suas próprias solicitações.
          </p>
        </div>

        {/* Sumário dos Capítulos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Sumário dos Capítulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {chapters.map((chapter) => {
              const IconComponent = chapter.icon;
              const colorClasses = getColorClasses(chapter.color);
              
              return (
                <Link
                  key={chapter.id}
                  to={chapter.path}
                  className={`bg-gray-800 rounded-2xl p-8 border-2 hover:scale-105 transition-all duration-300 ${colorClasses.split(' ')[0]} hover:${colorClasses.split(' ')[0]}`}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-8 w-8 mr-4 ${colorClasses.split(' ')[1]}`} />
                    <h3 className="text-xl font-bold">{chapter.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {chapter.description}
                  </p>
                  <div className="mt-4 text-sm font-medium opacity-75">
                    Capítulo {chapter.id}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Resumo das Categorias */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">Resumo das Categorias</h2>
          <div className="space-y-4 text-gray-300">
            <p><strong className="text-purple-200">Prompts de SaaS:</strong> Focados no desenvolvimento e gerenciamento de produtos Software as a Service, cobrindo desde a concepção até a otimização de processos.</p>
            <p><strong className="text-cyan-200">Prompts de Landing Page:</strong> Direcionados à criação de páginas de destino eficazes, com ênfase em design, interatividade e otimização para conversão.</p>
            <p><strong className="text-green-200">Prompts de CRM:</strong> Abrangem o desenvolvimento de sistemas de Gerenciamento de Relacionamento com o Cliente, incluindo funcionalidades avançadas como IA e integração.</p>
            <p><strong className="text-red-200">Prompts de Backend:</strong> Concentram-se na arquitetura e implementação de sistemas de servidor, desde APIs RESTful até soluções de processamento de dados em tempo real.</p>
            <p><strong className="text-yellow-200">Prompts de Frontend:</strong> Voltados para a criação de interfaces de usuário ricas e responsivas, explorando frameworks modernos e otimização de desempenho.</p>
            <p><strong className="text-indigo-200">Prompts de Arquitetura:</strong> Focados no design e estruturação de sistemas complexos, cobrindo microsserviços, segurança, performance e escalabilidade.</p>
            <p><strong className="text-orange-200">Engenharia de Prompt:</strong> Exemplos práticos e técnicas avançadas para criar prompts mais eficazes, incluindo few-shot, zero-shot e controle de parâmetros.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaPrompts;
