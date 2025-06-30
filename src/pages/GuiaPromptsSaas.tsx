
import { Link } from 'react-router-dom';
import { Building, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsSaas = () => {
  const prompts = [
    {
      title: "Criando Produtos SaaS para Gerenciamento de Negócios",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre a criação de produtos SaaS para gerenciamento de negócios. Você pode me ajudar a entender como projetar e desenvolver soluções de software intuitivas e eficientes que simplifiquem e automatizem diferentes processos de negócios, usem feedback de clientes e pesquisa de mercado para informar o desenvolvimento e a inovação de produtos, e garantam desempenho e confiabilidade ideais para os usuários finais?",
      rating: "8/10 - Abrangente, focado em negócios."
    },
    {
      title: "Usando Produtos SaaS para Planejamento e Análise Financeira",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre o uso de produtos SaaS para planejamento e análise financeira. Você pode me ajudar a entender como usar ferramentas de análise e visualização de dados para analisar dados financeiros e tomar decisões informadas, usar soluções baseadas em nuvem para gerenciar e armazenar informações financeiras com segurança, e garantir a conformidade com regulamentações e padrões financeiros?",
      rating: "8/10 - Detalhado, focado em finanças."
    },
    {
      title: "Criando Produtos SaaS para Marketing Digital e Publicidade",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre a criação de produtos SaaS para marketing digital e publicidade. Você pode me ajudar a entender como projetar e desenvolver soluções de software que permitam às empresas criar e gerenciar campanhas digitais eficazes, usar análise de dados e insights para otimizar o desempenho e o ROI, e oferecer opções de personalização e integração para diferentes canais de marketing?",
      rating: "8/10 - Abrangente, focado em marketing."
    },
    {
      title: "Usando Produtos SaaS para Recursos Humanos e Gestão de Talentos",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre o uso de produtos SaaS para recursos humanos e gestão de talentos. Você pode me ajudar a entender como usar soluções baseadas em nuvem para otimizar processos de RH e automatizar o gerenciamento da força de trabalho, usar análise de dados e painéis para monitorar e avaliar o desempenho e o engajamento dos funcionários, e garantir a conformidade com as leis e regulamentações trabalhistas?",
      rating: "8/10 - Detalhado, focado em RH."
    },
    {
      title: "Criando Produtos SaaS para Gerenciamento de Relacionamento com o Cliente",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre a criação de produtos SaaS para gerenciamento de relacionamento com o cliente. Você pode me ajudar a entender como projetar e desenvolver soluções de software que permitam às empresas gerenciar e fortalecer os relacionamentos com os clientes, usar análise de dados e insights do cliente para personalizar interações e melhorar a satisfação do cliente, e oferecer integrações e opções de personalização para diferentes canais de atendimento ao cliente?",
      rating: "8/10 - Abrangente, focado em CRM."
    },
    {
      title: "Usando Produtos SaaS para Gerenciamento da Cadeia de Suprimentos e Logística",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre o uso de produtos SaaS para gerenciamento da cadeia de suprimentos e logística. Você pode me ajudar a entender como usar soluções baseadas em nuvem para otimizar e automatizar diferentes processos da cadeia de suprimentos, usar análise de dados e modelagem preditiva para melhorar a previsão de demanda e o gerenciamento de estoque, e garantir a conformidade com os requisitos regulatórios e de segurança?",
      rating: "8/10 - Detalhado, focado em logística."
    },
    {
      title: "Criando Produtos SaaS para Gerenciamento de Projetos",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre a criação de produtos SaaS para gerenciamento de projetos. Você pode me ajudar a entender como projetar e desenvolver soluções de software que permitam às empresas gerenciar e rastrear diferentes projetos e tarefas, usar análise de dados e relatórios para otimizar a produtividade e a alocação de recursos, e oferecer opções de personalização e integração para diferentes ferramentas e plataformas de gerenciamento de projetos?",
      rating: "8/10 - Abrangente, focado em projetos."
    },
    {
      title: "Usando Produtos SaaS para Cibersegurança e Proteção de Dados",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre o uso de produtos SaaS para cibersegurança e proteção de dados. Você pode me ajudar a entender como usar soluções baseadas em nuvem para proteger e criptografar dados e informações confidenciais, usar análise de dados e modelagem de ameaças para detectar e prevenir ataques cibernéticos e violações de dados, e garantir a conformidade com as regulamentações e padrões de privacidade e proteção de dados?",
      rating: "8/10 - Detalhado, focado em segurança."
    },
    {
      title: "Criando Produtos SaaS para Educação e E-Learning",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre a criação de produtos SaaS para educação e e-learning. Você pode me ajudar a entender como projetar e desenvolver soluções de software que permitam às empresas e instituições educacionais criar e entregar conteúdo de aprendizagem envolvente e interativo, usar análise de dados e ferramentas de avaliação para medir o desempenho e o progresso dos alunos, e oferecer opções de personalização e integração para diferentes plataformas e sistemas educacionais?",
      rating: "8/10 - Abrangente, focado em educação."
    },
    {
      title: "Usando Produtos SaaS para Gerenciamento Jurídico e de Contratos",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre o uso de produtos SaaS para gerenciamento jurídico e de contratos. Você pode me ajudar a entender como usar soluções baseadas em nuvem para gerenciar e armazenar documentos e contratos legais com segurança, usar análise de dados e relatórios para rastrear e analisar o desempenho e a conformidade legal, e garantir práticas e padrões de negócios éticos e profissionais?",
      rating: "8/10 - Detalhado, focado em jurídico."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Building className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Prompts de SaaS</h1>
          </div>
          <p className="text-xl text-gray-300">
            Focados no desenvolvimento e gerenciamento de produtos Software as a Service, cobrindo desde a concepção até a otimização de processos.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-8">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-300 mb-4">
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
            to="/guias/prompts/como-criar-prompt"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Como Criar Prompts
          </Link>
          
          <Link
            to="/guias/prompts/landing-page"
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Prompts de Landing Page
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsSaas;
