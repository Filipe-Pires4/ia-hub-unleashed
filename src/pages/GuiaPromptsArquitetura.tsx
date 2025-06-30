
import { Link } from 'react-router-dom';
import { GitBranch, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsArquitetura = () => {
  const prompts = [
    {
      title: "Prompt de Arquiteto de Software",
      content: "Gere um prompt claro, conciso e altamente detalhado para o agente Claude-3.5-Sonnet, instruindo-o a atuar como um arquiteto de software sênior com vasta experiência. O agente será encarregado de responder a perguntas específicas e complexas fornecidas sobre arquitetura de software, demonstrando profundo conhecimento em padrões de design, estilos arquitetônicos e melhores práticas da indústria. Cada resposta deve ser formulada individualmente, com rigor técnico e clareza, e apresentada em um novo documento, garantindo a organização e a facilidade de consulta das informações arquitetônicas fornecidas, incluindo justificativas e exemplos práticos para ilustrar os conceitos abordados.",
      rating: "9/10 - Define papel, detalhado, formato de saída, com foco em rigor técnico, organização e exemplos práticos."
    },
    {
      title: "Arquitetura de Microsserviços para Grande Escala",
      content: "Projete uma arquitetura de microsserviços robusta e escalável, ideal para uma aplicação web de grande escala que exige alta disponibilidade e resiliência. Detalhe minuciosamente os mecanismos de comunicação entre serviços, como APIs REST, gRPC e filas de mensagens (e.g., Kafka, RabbitMQ), bem como estratégias para descoberta de serviços, tolerância a falhas e observabilidade (monitoramento, logging, tracing). O objetivo é criar um sistema distribuído que possa evoluir de forma independente, garantindo a performance e a manutenibilidade em ambientes de produção complexos e de alto tráfego.",
      rating: "10/10 - Escalável, complexo, robusto, com foco em alta disponibilidade, resiliência e manutenibilidade."
    },
    {
      title: "Design de Sistema Distribuído para Processamento de Eventos",
      content: "Projete um sistema distribuído de processamento de eventos em tempo real, capaz de lidar com grandes volumes de dados e baixa latência. A arquitetura deve integrar um broker de mensagens eficiente (e.g., Kafka, RabbitMQ) para ingestão de eventos, processadores de stream (e.g., Apache Spark Streaming, Apache Flink) para transformação e análise, e um banco de dados de séries temporais otimizado para armazenamento e consulta. O objetivo é construir uma plataforma analítica que forneça insights instantâneos e suporte a decisões críticas, garantindo a consistência e a durabilidade dos dados em um ambiente distribuído e assíncrono.",
      rating: "10/10 - Distribuído, tempo real, big data, com foco em baixa latência, insights instantâneos e durabilidade dos dados."
    },
    {
      title: "Arquitetura de Segurança para Aplicações Web",
      content: "Detalhe uma arquitetura de segurança abrangente e multicamadas para aplicações web modernas, cobrindo os principais pilares de proteção. Inclua estratégias para autenticação robusta (e.g., JWT, OAuth), autorização granular (e.g., RBAC, ABAC), proteção ativa contra as vulnerabilidades do OWASP Top 10, criptografia de dados em trânsito e em repouso, e gerenciamento seguro de segredos (chaves, credenciais). O objetivo é mitigar riscos de segurança, garantir a conformidade regulatória e proteger informações sensíveis, construindo uma aplicação resiliente a ataques cibernéticos e mantendo a confiança dos usuários.",
      rating: "9/10 - Abrangente, segurança, proteção, com foco em mitigação de riscos, conformidade e proteção de informações sensíveis."
    },
    {
      title: "Estratégias de Cache para Aplicações de Alta Performance",
      content: "Explique e demonstre a aplicação de diferentes estratégias de cache para otimizar o desempenho de aplicações web de alta performance, visando reduzir a latência e a carga sobre os servidores. Aborde o uso de CDNs (Content Delivery Networks) para conteúdo estático, cache de banco de dados para consultas frequentes e cache de aplicação para dados computados. Inclua discussões sobre mecanismos de invalidação de cache e estratégias para garantir a consistência dos dados, assegurando que os usuários sempre recebam informações atualizadas e que a aplicação mantenha sua agilidade e escalabilidade sob alta demanda.",
      rating: "9/10 - Performance, otimização, estratégias, com foco em redução de latência, consistência de dados e escalabilidade."
    },
    {
      title: "Arquitetura de Dados para Data Lakehouse",
      content: "Projete uma arquitetura de dados moderna para um Data Lakehouse, combinando as vantagens de flexibilidade e escalabilidade de um data lake com a estrutura e performance de um data warehouse. A arquitetura deve detalhar os processos de ingestão de dados de diversas fontes, estratégias de armazenamento otimizado, métodos de processamento (e.g., Apache Spark, Databricks) para transformação e enriquecimento, e mecanismos de acesso para análise e geração de relatórios. O objetivo é criar uma plataforma unificada que suporte cargas de trabalho de BI tradicional e machine learning avançado, proporcionando uma visão 360 graus dos dados e capacitando decisões estratégicas.",
      rating: "10/10 - Dados, híbrido, análise, com foco em unificação de dados, BI e machine learning."
    },
    {
      title: "Design de API Gateway com Autenticação e Rate Limiting",
      content: "Projete um API Gateway robusto e seguro que atue como o ponto de entrada unificado para um conjunto de microsserviços. O design deve incluir a implementação de autenticação (e.g., JWT, OAuth), autorização, rate limiting para proteção contra abusos, roteamento inteligente de requisições e transformação de payloads. O objetivo é centralizar a gestão de APIs, aplicar políticas de segurança e otimizar o tráfego, proporcionando uma camada de abstração e controle que melhora a segurança, a performance e a manutenibilidade da arquitetura de microsserviços, garantindo uma experiência de desenvolvedor consistente e segura.",
      rating: "9/10 - Unificado, segurança, controle, com foco em centralização, performance e manutenibilidade."
    },
    {
      title: "Arquitetura Orientada a Eventos (EDA)",
      content: "Explique os princípios fundamentais e os benefícios da Arquitetura Orientada a Eventos (EDA), demonstrando como projetar sistemas que se comunicam de forma assíncrona através de eventos. Aborde a utilização de event brokers (e.g., Kafka, RabbitMQ) e event streams para desacoplamento de serviços, escalabilidade e resiliência. O objetivo é capacitar o desenvolvimento de sistemas distribuídos que respondam a mudanças de estado em tempo real, promovendo a flexibilidade, a extensibilidade e a capacidade de evolução independente dos componentes, ideal para cenários de alta demanda e complexidade, garantindo a consistência eventual dos dados.",
      rating: "9/10 - Desacoplamento, escalável, eventos, com foco em flexibilidade, extensibilidade e consistência eventual."
    },
    {
      title: "Estratégias de Deploy e Rollback para DevOps",
      content: "Detalhe estratégias avançadas de deploy (e.g., Blue/Green, Canary, Rolling Updates) e rollback para garantir a entrega contínua e a resiliência de aplicações em um ambiente DevOps. Inclua a importância da automação de pipelines CI/CD e a implementação de monitoramento proativo para detecção rápida de anomalias. O objetivo é minimizar o tempo de inatividade, reduzir riscos durante as implantações e permitir reversões rápidas em caso de falhas, assegurando a estabilidade e a disponibilidade da aplicação, e promovendo uma cultura de entrega de software de alta qualidade e confiança.",
      rating: "9/10 - DevOps, automação, resiliência, com foco em minimização de tempo de inatividade, redução de riscos e alta disponibilidade."
    },
    {
      title: "Arquitetura para Aplicações Serverless",
      content: "Projete uma arquitetura otimizada para uma aplicação serverless, utilizando serviços de computação sem servidor como AWS Lambda, Azure Functions ou Google Cloud Functions. O design deve focar na escalabilidade automática, na otimização de custos (pagamento por uso) e na integração perfeita com outros serviços de nuvem (e.g., bancos de dados NoSQL, filas de mensagens, APIs Gateway). O objetivo é construir uma aplicação altamente disponível e resiliente, que se adapte dinamicamente à demanda, eliminando a necessidade de gerenciar infraestrutura e permitindo que os desenvolvedores se concentrem exclusivamente na lógica de negócios, acelerando o tempo de lançamento no mercado.",
      rating: "10/10 - Escalável, custo-benefício, nuvem, com foco em alta disponibilidade, resiliência e agilidade no desenvolvimento."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <GitBranch className="h-8 w-8 text-indigo-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Prompts de Arquitetura de Software</h1>
          </div>
          <p className="text-xl text-gray-300">
            Focados no design e estruturação de sistemas complexos, cobrindo microsserviços, segurança, performance e escalabilidade.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-8">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-indigo-300 mb-4">
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
            to="/guias/prompts/frontend"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Prompts de Frontend
          </Link>
          
          <Link
            to="/guias/prompts/engenharia-prompt"
            className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Prompts de Engenharia de Prompt
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsArquitetura;
