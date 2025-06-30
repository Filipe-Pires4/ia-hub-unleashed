
import { Link } from 'react-router-dom';
import { Database, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsCrm = () => {
  const prompts = [
    {
      title: "CRM para Setor de Saúde com Conformidade HIPAA",
      content: "Projete um sistema de CRM para o setor de saúde, garantindo total conformidade com as regulamentações HIPAA para proteção de dados de pacientes, com funcionalidades de agendamento de consultas, histórico médico e comunicação segura.",
      rating: "10/10 - Crítico, conformidade, segurança."
    },
    {
      title: "Sistema de Gerenciamento de Clientes (CRM) com IA",
      content: "Desenvolva um sistema de CRM que utilize inteligência artificial para prever o comportamento do cliente, automatizar interações e personalizar ofertas. Inclua módulos para gestão de leads, histórico de interações, automação de marketing e relatórios avançados.",
      rating: "9/10 - Complexo, IA, automação."
    },
    {
      title: "Integração de CRM com Plataformas de E-commerce",
      content: "Projete uma solução para integrar um sistema de CRM existente com plataformas de e-commerce populares (ex: Shopify, WooCommerce), sincronizando dados de clientes, pedidos e carrinhos abandonados para otimizar campanhas de marketing e vendas.",
      rating: "9/10 - Integração, e-commerce, otimização."
    },
    {
      title: "CRM com Módulo de Suporte ao Cliente",
      content: "Desenvolva um CRM que inclua um módulo robusto de suporte ao cliente, com sistema de tickets, base de conhecimento, chat ao vivo e integração com e-mail e telefone, para gerenciar eficientemente as interações de suporte.",
      rating: "9/10 - Suporte, multicanal, eficiência."
    },
    {
      title: "CRM com Análise Preditiva de Churn",
      content: "Desenvolva um CRM que utilize análise preditiva para identificar clientes com alto risco de churn (cancelamento), oferecendo insights e ferramentas para estratégias de retenção proativas.",
      rating: "9/10 - Preditivo, retenção, insights."
    },
    {
      title: "Prompt de Arquiteto de Software (CRM)",
      content: "Gere um prompt claro e detalhado para o agente Claude-3.5-Sonnet que o instrua a atuar como um arquiteto de software sênior, com foco em sistemas de CRM. O agente será encarregado de responder a perguntas específicas fornecidas sobre arquitetura de software para CRM. Cada resposta deve ser formulada individualmente e apresentada em um novo documento.",
      rating: "9/10 - Define papel, detalhado, formato de saída."
    },
    {
      title: "Criando Produtos SaaS para Gerenciamento de Relacionamento com o Cliente",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre a criação de produtos SaaS para gerenciamento de relacionamento com o cliente. Você pode me ajudar a entender como projetar e desenvolver soluções de software que permitam às empresas gerenciar e fortalecer os relacionamentos com os clientes, usar análise de dados e insights do cliente para personalizar interações e melhorar a satisfação do cliente, e oferecer integrações e opções de personalização para diferentes canais de atendimento ao cliente?",
      rating: "8/10 - Abrangente, focado em CRM."
    },
    {
      title: "Criando Produtos SaaS para CRM e Automação de Vendas",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre a criação de produtos SaaS para CRM e automação de vendas. Você pode me ajudar a entender como projetar e desenvolver soluções de software que permitam às empresas gerenciar e rastrear diferentes estágios de vendas e interações com clientes, usar análise de dados e relatórios para otimizar o desempenho de vendas e marketing, e oferecer opções de personalização e integração para diferentes plataformas de CRM e vendas?",
      rating: "8/10 - Abrangente, focado em vendas."
    },
    {
      title: "Usando Produtos SaaS para Gerenciamento de Vendas e CRM",
      content: "Quero que você atue como um Especialista em Produtos SaaS, e farei algumas perguntas sobre o uso de produtos SaaS para gerenciamento de vendas e CRM. Você pode me ajudar a entender como usar soluções baseadas em nuvem para gerenciar e rastrear diferentes tipos de operações de vendas e CRM, usar análise de dados e relatórios para otimizar o desempenho e a manutenção de vendas e CRM, e garantir a conformidade com os requisitos regulatórios e de segurança?",
      rating: "8/10 - Detalhado, focado em vendas."
    },
    {
      title: "CRM para Pequenas Empresas com Foco em Usabilidade",
      content: "Crie um prompt para desenvolver um sistema de CRM simplificado e intuitivo, projetado especificamente para pequenas empresas, com foco em facilidade de uso, baixo custo e funcionalidades essenciais como gestão de contatos, agendamento e acompanhamento de vendas.",
      rating: "8/10 - Nicho, usabilidade, custo-benefício."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Database className="h-8 w-8 text-teal-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Prompts de CRM</h1>
          </div>
          <p className="text-xl text-gray-300">
            Abrangem o desenvolvimento de sistemas de Gerenciamento de Relacionamento com o Cliente, incluindo funcionalidades avançadas como IA e integração.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-8">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-teal-300 mb-4">
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
            to="/guias/prompts/landing-page"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Prompts de Landing Page
          </Link>
          
          <Link
            to="/guias/prompts/backend"
            className="flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Prompts de Backend
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsCrm;
