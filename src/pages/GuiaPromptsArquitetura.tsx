
import { Link } from 'react-router-dom';
import { Code, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsArquitetura = () => {
  const prompts = [
    {
      title: "Prompt de Arquiteto de Software",
      content: "Gere um prompt claro e detalhado para o agente Claude-3.5-Sonnet que o instrua a atuar como um arquiteto de software sênior. O agente será encarregado de responder a perguntas específicas fornecidas sobre arquitetura de software. Cada resposta deve ser formulada individualmente e apresentada em um novo documento.",
      specifications: [
        "Especificação de Papel: O agente deve atuar como um arquiteto de software sênior, demonstrando experiência em padrões de design de software, estilos arquitetônicos e melhores práticas.",
        "Manuseio de Perguntas: O agente deve abordar cada pergunta separadamente, garantindo clareza e exaustividade nas respostas.",
        "Melhores Práticas: As respostas devem refletir as melhores práticas da indústria, incluindo recomendações apropriadas para ferramentas, metodologias e princípios de design.",
        "Solicitações de Recursos: Se for necessário esclarecimento adicional ou recursos externos forem necessários, o agente deve se sentir à vontade para solicitar isso ao usuário."
      ],
      requirements: [
        "Uma explicação clara do conceito ou solução.",
        "Justificativa para quaisquer recomendações feitas.",
        "Exemplos ou cenários onde aplicável para ilustrar os pontos."
      ],
      rating: "9/10 - Define papel, detalhado, formato de saída."
    },
    {
      title: "Arquitetura de Microsserviços para Grande Escala",
      content: "Projete uma arquitetura de microsserviços para uma aplicação web de grande escala, detalhando a comunicação entre serviços (APIs REST, gRPC, filas de mensagens), descoberta de serviços, tolerância a falhas e observabilidade.",
      rating: "10/10 - Escalável, complexo, robusto."
    },
    {
      title: "Design de Sistema Distribuído para Processamento de Eventos",
      content: "Projete um sistema distribuído para processamento de eventos em tempo real, utilizando um broker de mensagens (Kafka, RabbitMQ), processadores de stream (Spark Streaming, Flink) e um banco de dados de séries temporais.",
      rating: "10/10 - Distribuído, tempo real, big data."
    },
    {
      title: "Arquitetura de Segurança para Aplicações Web",
      content: "Detalhe uma arquitetura de segurança abrangente para aplicações web, cobrindo autenticação (JWT, OAuth), autorização (RBAC, ABAC), proteção contra OWASP Top 10, criptografia de dados e gerenciamento de segredos.",
      rating: "9/10 - Abrangente, segurança, proteção."
    },
    {
      title: "Estratégias de Cache para Aplicações de Alta Performance",
      content: "Explique e demonstre diferentes estratégias de cache (CDN, cache de banco de dados, cache de aplicação) para otimizar o desempenho de aplicações web de alta performance, incluindo invalidação de cache e consistência de dados.",
      rating: "9/10 - Performance, otimização, estratégias."
    },
    {
      title: "Arquitetura de Dados para Data Lakehouse",
      content: "Projete uma arquitetura de dados para um Data Lakehouse, combinando as vantagens de data lakes e data warehouses, com foco em ingestão de dados, armazenamento, processamento (Spark, Databricks) e acesso para análise.",
      rating: "10/10 - Dados, híbrido, análise."
    },
    {
      title: "Design de API Gateway com Autenticação e Rate Limiting",
      content: "Projete um API Gateway que atue como ponto de entrada unificado para microsserviços, implementando autenticação, autorização, rate limiting, roteamento e transformação de requisições.",
      rating: "9/10 - Unificado, segurança, controle."
    },
    {
      title: "Arquitetura Orientada a Eventos (EDA)",
      content: "Explique os princípios e benefícios da Arquitetura Orientada a Eventos (EDA), demonstrando como projetar sistemas que se comunicam através de eventos, utilizando event brokers e event streams para desacoplamento e escalabilidade.",
      rating: "9/10 - Desacoplamento, escalável, eventos."
    },
    {
      title: "Estratégias de Deploy e Rollback para DevOps",
      content: "Detalhe estratégias de deploy (Blue/Green, Canary, Rolling) e rollback para garantir a entrega contínua e a resiliência de aplicações em um ambiente DevOps, incluindo automação e monitoramento.",
      rating: "9/10 - DevOps, automação, resiliência."
    },
    {
      title: "Arquitetura para Aplicações Serverless",
      content: "Projete uma arquitetura para uma aplicação serverless utilizando serviços como AWS Lambda, Azure Functions ou Google Cloud Functions, com foco em escalabilidade automática, custo-benefício e integração com outros serviços de nuvem.",
      rating: "10/10 - Escalável, custo-benefício, nuvem."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 text-orange-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Prompts de Arquitetura de Software</h1>
          </div>
          <p className="text-xl text-gray-300">
            Explora frameworks modernos e otimização de desempenho para sistemas distribuídos e arquiteturas complexas.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-8">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-orange-300 mb-4">
                  {index + 1}. {prompt.title}
                </h3>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg mb-4 border border-gray-600">
                <p className="text-gray-300 leading-relaxed italic">
                  "{prompt.content}"
                </p>
              </div>

              {/* Especificações adicionais para o primeiro prompt */}
              {prompt.specifications && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">Especificações:</h4>
                  <ul className="space-y-2">
                    {prompt.specifications.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-300">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requisitos adicionais para o primeiro prompt */}
              {prompt.requirements && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">Cada resposta deve incluir:</h4>
                  <ul className="space-y-2">
                    {prompt.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
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
            className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Engenharia de Prompt
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsArquitetura;
