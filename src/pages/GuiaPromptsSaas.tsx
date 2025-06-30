
import { Link } from 'react-router-dom';
import { Building, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsSaas = () => {
  const prompts = [
    {
      title: "Desenvolvimento de Produtos SaaS para Gestão Empresarial",
      content: "Atue como um Especialista em Produtos SaaS com vasta experiência em arquitetura de software e design de experiência do usuário. Elabore um guia abrangente e detalhado sobre o design estratégico e o desenvolvimento técnico de soluções SaaS intuitivas e eficientes, especificamente voltadas para o gerenciamento empresarial. Detalhe minuciosamente como incorporar o feedback contínuo do cliente e as análises aprofundadas de pesquisa de mercado em cada etapa do ciclo de vida do produto, desde a concepção até a implementação. Além disso, descreva as melhores práticas para garantir um desempenho excepcional, escalabilidade robusta e confiabilidade inabalável, assegurando uma experiência de usuário superior e resultados de negócios otimizados para os usuários finais.",
      rating: "9/10 - Abrangente, focado em negócios, com ênfase em UX e escalabilidade."
    },
    {
      title: "SaaS para Planejamento e Análise Financeira",
      content: "Atue como um Especialista em Produtos SaaS com profundo conhecimento em finanças corporativas e segurança de dados. Explique de forma clara e concisa como as organizações podem alavancar produtos SaaS de ponta para otimizar o planejamento e a análise financeira. Aborde o uso estratégico de ferramentas avançadas de análise e visualização de dados para capacitar decisões informadas e proativas. Discuta também a gestão segura e confidencial de informações financeiras sensíveis em soluções baseadas em nuvem, garantindo a conformidade rigorosa com todas as regulamentações e padrões financeiros globais, protegendo a integridade e a privacidade dos dados.",
      rating: "9/10 - Detalhado, focado em finanças, com ênfase em segurança e conformidade."
    },
    {
      title: "SaaS para Marketing Digital e Publicidade",
      content: "Atue como um Especialista em Produtos SaaS com expertise em estratégias de marketing digital e otimização de campanhas. Detalhe o processo completo de criação de produtos SaaS inovadores, projetados especificamente para o setor de marketing digital e publicidade. Explique como projetar e desenvolver soluções de software que capacitem as empresas a criar, gerenciar e otimizar campanhas digitais altamente eficazes. Aborde a utilização de análise de dados e insights acionáveis para maximizar o desempenho e o Retorno sobre o Investimento (ROI), além de oferecer opções flexíveis de personalização e integração perfeita com diversos canais de marketing, garantindo adaptabilidade e eficiência.",
      rating: "9/10 - Abrangente, focado em marketing, com ênfase em ROI e personalização."
    },
    {
      title: "SaaS para Recursos Humanos e Gestão de Talentos",
      content: "Atue como um Especialista em Produtos SaaS com conhecimento aprofundado em gestão de recursos humanos e automação de processos. Aborde o uso estratégico de produtos SaaS para otimizar as operações de recursos humanos e a gestão de talentos. Explique como as soluções baseadas em nuvem podem automatizar e simplificar processos de RH, desde a aquisição de talentos até a gestão de desempenho. Discuta a utilização de análise de dados e painéis intuitivos para monitorar e avaliar o desempenho e o engajamento dos funcionários, além de garantir a conformidade rigorosa com todas as leis e regulamentações trabalhistas vigentes, promovendo um ambiente de trabalho eficiente e legalmente seguro.",
      rating: "9/10 - Detalhado, focado em RH, com ênfase em automação e conformidade legal."
    },
    {
      title: "SaaS para Gerenciamento de Relacionamento com o Cliente",
      content: "Atue como um Especialista em Produtos SaaS com foco em estratégias de Customer Relationship Management (CRM) e personalização da experiência do cliente. Descreva o processo de criação de produtos SaaS robustos, especificamente desenvolvidos para o gerenciamento de relacionamento com o cliente. Explique como projetar e desenvolver soluções de software que permitam às empresas gerenciar, fortalecer e nutrir os relacionamentos com seus clientes de forma eficaz. Aborde a utilização de análise de dados e insights profundos do cliente para personalizar interações, antecipar necessidades e melhorar significativamente a satisfação do cliente, além de oferecer integrações e opções de personalização para diferentes canais de atendimento ao cliente, garantindo uma abordagem holística.",
      rating: "9/10 - Abrangente, focado em CRM, com ênfase em personalização e satisfação do cliente."
    },
    {
      title: "SaaS para Gerenciamento da Cadeia de Suprimentos e Logística",
      content: "Atue como um Especialista em Produtos SaaS com vasta experiência em otimização de cadeias de suprimentos e logística. Explique de forma detalhada o uso estratégico de produtos SaaS para o gerenciamento eficiente da cadeia de suprimentos e logística. Aborde como as soluções baseadas em nuvem podem otimizar e automatizar diferentes processos da cadeia de suprimentos, desde a aquisição até a entrega final. Discuta a aplicação de análise de dados avançada e modelagem preditiva para aprimorar a previsão de demanda e o gerenciamento de estoque, minimizando custos e maximizando a eficiência. Além disso, garanta a conformidade rigorosa com todos os requisitos regulatórios e de segurança, assegurando operações logísticas fluidas e seguras.",
      rating: "9/10 - Detalhado, focado em logística, com ênfase em otimização e segurança."
    },
    {
      title: "SaaS para Gerenciamento de Projetos",
      content: "Atue como um Especialista em Produtos SaaS com expertise em metodologias ágeis e gestão de projetos. Descreva o processo de criação de produtos SaaS eficazes, projetados para o gerenciamento de projetos. Explique como projetar e desenvolver soluções de software que permitam às empresas gerenciar e rastrear eficientemente diferentes projetos e tarefas, desde a concepção até a conclusão. Aborde a utilização de análise de dados e relatórios detalhados para otimizar a produtividade da equipe e a alocação de recursos, garantindo a entrega de projetos dentro do prazo e do orçamento. Além disso, ofereça opções flexíveis de personalização e integração perfeita com diversas ferramentas e plataformas de gerenciamento de projetos, promovendo a colaboração e a eficiência.",
      rating: "9/10 - Abrangente, focado em projetos, com ênfase em produtividade e integração."
    },
    {
      title: "SaaS para Cibersegurança e Proteção de Dados",
      content: "Atue como um Especialista em Produtos SaaS com profundo conhecimento em cibersegurança, criptografia e conformidade regulatória. Aborde o uso crítico de produtos SaaS para cibersegurança e proteção de dados. Explique como as soluções baseadas em nuvem podem ser empregadas para proteger e criptografar dados e informações confidenciais de forma robusta. Discuta a aplicação de análise de dados e modelagem de ameaças para detectar proativamente e prevenir ataques cibernéticos e violações de dados, minimizando riscos e vulnerabilidades. Além disso, garanta a conformidade rigorosa com todas as regulamentações e padrões de privacidade e proteção de dados, como GDPR e LGPD, assegurando a integridade e a confidencialidade das informações.",
      rating: "9/10 - Detalhado, focado em segurança, com ênfase em prevenção e conformidade."
    },
    {
      title: "SaaS para Educação e E-Learning",
      content: "Atue como um Especialista em Produtos SaaS com expertise em tecnologias educacionais e design instrucional. Descreva o processo de criação de produtos SaaS inovadores, especificamente desenvolvidos para o setor de educação e e-learning. Explique como projetar e desenvolver soluções de software que permitam às empresas e instituições educacionais criar e entregar conteúdo de aprendizagem altamente envolvente e interativo. Aborde a utilização de análise de dados e ferramentas de avaliação para medir o desempenho e o progresso dos alunos de forma eficaz, fornecendo insights valiosos. Além disso, ofereça opções flexíveis de personalização e integração perfeita com diferentes plataformas e sistemas educacionais, promovendo uma experiência de aprendizado adaptável e enriquecedora.",
      rating: "9/10 - Abrangente, focado em educação, com ênfase em engajamento e personalização."
    },
    {
      title: "SaaS para Gerenciamento Jurídico e de Contratos",
      content: "Atue como um Especialista em Produtos SaaS com conhecimento aprofundado em direito empresarial e gestão de documentos. Explique de forma abrangente o uso de produtos SaaS para o gerenciamento jurídico e de contratos. Aborde como as soluções baseadas em nuvem podem ser utilizadas para gerenciar e armazenar documentos e contratos legais com segurança e eficiência. Discuta a aplicação de análise de dados e relatórios detalhados para rastrear e analisar o desempenho e a conformidade legal, identificando potenciais riscos e oportunidades. Além disso, garanta a adesão rigorosa às práticas e padrões de negócios éticos e profissionais, assegurando a integridade e a validade de todos os processos jurídicos e contratuais.",
      rating: "9/10 - Detalhado, focado em jurídico, com ênfase em segurança e conformidade ética."
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
