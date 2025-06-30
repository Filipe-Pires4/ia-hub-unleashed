
import { Link } from 'react-router-dom';
import { Users, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsCrm = () => {
  const prompts = [
    {
      title: "CRM para Setor de Saúde com Conformidade HIPAA",
      content: "Projete um sistema de Customer Relationship Management (CRM) altamente especializado e seguro, desenvolvido especificamente para atender às rigorosas demandas do setor de saúde. Este sistema deve garantir total e irrestrita conformidade com as regulamentações da HIPAA (Health Insurance Portability and Accountability Act) para a proteção de dados sensíveis de pacientes. As funcionalidades essenciais incluirão agendamento de consultas intuitivo, gestão detalhada do histórico médico do paciente e comunicação segura e criptografada, assegurando a privacidade e a integridade das informações em todas as interações.",
      rating: "10/10 - Crítico, conformidade, segurança, com foco em privacidade e integridade de dados de saúde."
    },
    {
      title: "Sistema de Gerenciamento de Clientes (CRM) com IA",
      content: "Desenvolva um sistema de Gerenciamento de Relacionamento com o Cliente (CRM) de última geração que integre e utilize de forma inteligente a inteligência artificial para prever o comportamento futuro do cliente, automatizar interações personalizadas e otimizar a oferta de produtos e serviços. O sistema deve incluir módulos robustos para gestão eficiente de leads, registro completo do histórico de interações, automação avançada de marketing e relatórios analíticos detalhados, proporcionando insights acionáveis para estratégias de negócios mais eficazes e personalizadas.",
      rating: "9/10 - Complexo, IA, automação, com foco em personalização e insights acionáveis."
    },
    {
      title: "Integração de CRM com Plataformas de E-commerce",
      content: "Projete uma solução de integração abrangente e eficiente para conectar um sistema de Customer Relationship Management (CRM) existente com as plataformas de e-commerce mais populares do mercado, como Shopify e WooCommerce. O objetivo principal é sincronizar de forma contínua e em tempo real dados cruciais de clientes, informações de pedidos e carrinhos abandonados, visando otimizar significativamente as campanhas de marketing e as estratégias de vendas, resultando em maior conversão e retenção de clientes através de uma visão unificada do cliente.",
      rating: "9/10 - Integração, e-commerce, otimização, com foco em sincronização de dados e visão unificada do cliente."
    },
    {
      title: "CRM com Módulo de Suporte ao Cliente",
      content: "Desenvolva um sistema de Customer Relationship Management (CRM) que incorpore um módulo robusto e multifuncional de suporte ao cliente. Este módulo deve incluir um sistema de tickets eficiente para rastreamento de solicitações, uma base de conhecimento abrangente para autoatendimento, funcionalidade de chat ao vivo para suporte em tempo real e integração perfeita com canais de comunicação como e-mail e telefone. O objetivo é gerenciar de forma eficiente e centralizada todas as interações de suporte, garantindo uma resolução rápida e satisfatória para as demandas dos clientes, elevando a qualidade do atendimento.",
      rating: "9/10 - Suporte, multicanal, eficiência, com foco em resolução rápida e qualidade de atendimento."
    },
    {
      title: "CRM com Análise Preditiva de Churn",
      content: "Desenvolva um sistema de Customer Relationship Management (CRM) avançado que utilize análise preditiva de dados para identificar proativamente clientes com alto risco de churn, ou seja, de cancelamento de serviços ou produtos. O sistema deve oferecer insights acionáveis e ferramentas estratégicas para implementar ações de retenção proativas e personalizadas, minimizando a perda de clientes e maximizando o Lifetime Value (LTV). A capacidade de antecipar e agir sobre o churn é crucial para a sustentabilidade e o crescimento do negócio, permitindo intervenções direcionadas e eficazes.",
      rating: "9/10 - Preditivo, retenção, insights, com foco em minimização de churn e maximização de LTV."
    },
    {
      title: "Prompt de Arquiteto de Software (CRM)",
      content: "Gere um prompt claro, conciso e altamente detalhado para o agente Claude-3.5-Sonnet, instruindo-o a atuar como um arquiteto de software sênior, com uma especialização aprofundada em sistemas de Customer Relationship Management (CRM). O agente será encarregado de responder a perguntas específicas e complexas fornecidas sobre a arquitetura de software para CRM. Cada resposta deve ser formulada individualmente, com rigor técnico e clareza, e apresentada em um novo documento, garantindo a organização e a facilidade de consulta das informações arquitetônicas fornecidas.",
      rating: "9/10 - Define papel, detalhado, formato de saída, com foco em rigor técnico e organização."
    },
    {
      title: "Criando Produtos SaaS para Gerenciamento de Relacionamento com o Cliente",
      content: "Atue como um Especialista em Produtos SaaS com vasta experiência em Customer Relationship Management (CRM). Desejo fazer algumas perguntas sobre a criação de produtos SaaS inovadores para o gerenciamento de relacionamento com o cliente. Poderia me auxiliar a compreender como projetar e desenvolver soluções de software que capacitem as empresas a gerenciar e fortalecer proativamente os relacionamentos com seus clientes? Além disso, como podemos utilizar análise de dados e insights do cliente para personalizar interações e melhorar significativamente a satisfação do cliente, oferecendo integrações e opções de personalização para diversos canais de atendimento ao cliente, garantindo uma experiência coesa e positiva?",
      rating: "8/10 - Abrangente, focado em CRM, com ênfase em personalização e experiência coesa do cliente."
    },
    {
      title: "Criando Produtos SaaS para CRM e Automação de Vendas",
      content: "Atue como um Especialista em Produtos SaaS com profundo conhecimento em CRM e automação de vendas. Tenho algumas questões sobre a criação de produtos SaaS que integrem essas duas áreas cruciais. Poderia me ajudar a entender como projetar e desenvolver soluções de software que permitam às empresas gerenciar e rastrear eficientemente diferentes estágios de vendas e interações com clientes? Adicionalmente, como podemos empregar análise de dados e relatórios detalhados para otimizar o desempenho de vendas e marketing, e oferecer opções de personalização e integração para diversas plataformas de CRM e vendas, maximizando a eficácia das equipes de vendas?",
      rating: "8/10 - Abrangente, focado em vendas, com ênfase em otimização de desempenho e integração de plataformas."
    },
    {
      title: "Usando Produtos SaaS para Gerenciamento de Vendas e CRM",
      content: "Atue como um Especialista em Produtos SaaS com expertise em gerenciamento de vendas e CRM. Gostaria de fazer algumas perguntas sobre a utilização prática de produtos SaaS para otimizar essas operações. Poderia me auxiliar a compreender como usar soluções baseadas em nuvem para gerenciar e rastrear eficientemente diferentes tipos de operações de vendas e CRM? Além disso, como podemos aplicar análise de dados e relatórios para otimizar continuamente o desempenho e a manutenção das atividades de vendas e CRM, garantindo a conformidade rigorosa com todos os requisitos regulatórios e de segurança de dados, protegendo as informações confidenciais da empresa e dos clientes?",
      rating: "8/10 - Detalhado, focado em vendas, com ênfase em otimização contínua e conformidade regulatória."
    },
    {
      title: "CRM para Pequenas Empresas com Foco em Usabilidade",
      content: "Crie um prompt detalhado para o desenvolvimento de um sistema de Customer Relationship Management (CRM) simplificado e altamente intuitivo, projetado especificamente para atender às necessidades e ao orçamento de pequenas empresas. O foco principal deve ser a facilidade de uso, o baixo custo de implementação e manutenção, e a inclusão de funcionalidades essenciais como gestão de contatos, agendamento de compromissos e acompanhamento de vendas. O objetivo é capacitar pequenas empresas a gerenciar seus clientes de forma eficaz, sem a complexidade e o custo de soluções corporativas, promovendo o crescimento sustentável.",
      rating: "8/10 - Nicho, usabilidade, custo-benefício, com foco em capacitação e crescimento sustentável de pequenas empresas."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-green-400 mr-3" />
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
                <h3 className="text-xl font-bold text-green-300 mb-4">
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
            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
