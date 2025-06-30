
import { Link } from 'react-router-dom';
import { Monitor, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsFrontend = () => {
  const prompts = [
    {
      title: "Função WordPress para API Reddit",
      content: "Crie uma função WordPress altamente otimizada que realizará uma solicitação de API segura e eficiente utilizando `wp_remote_post()` para o endpoint `{URL DA API DO REDDIT}`. Esta função deverá utilizar a chave de API `{SUA CHAVE DE API}` para autenticação e terá como objetivo gerar uma lista abrangente das minhas postagens e comentários mais recentes no Reddit, associados ao meu nome de usuário `{SEU NOME DE USUÁRIO DO REDDIT}`. A função incluirá argumentos opcionais para maior flexibilidade: `$limit` (inteiro), com padrão de 20, aceitando valores entre 1 e 100, e retornando um `WP_Error` para entradas inválidas; e `$subreddits` (array de strings), padrão `[]`, que permitirá filtrar postagens e comentários por subreddits específicos, definindo os parâmetros de API apropriados para inclusão se fornecido, ou abrangendo todas as postagens e comentários caso contrário. Este prompt visa a criação de uma ferramenta robusta e personalizável para gerenciamento de conteúdo do Reddit diretamente no WordPress.",
      rating: "10/10 - Extremamente detalhado, funcional, com validação de entrada e tratamento de erro, focado em robustez e personalização."
    },
    {
      title: "Interface de Usuário para Plataforma de E-commerce",
      content: "Desenvolva a interface de usuário completa e responsiva para uma plataforma de e-commerce moderna, garantindo uma experiência de compra fluida e intuitiva em todos os dispositivos. O projeto deve incluir o design e a implementação de páginas essenciais, como a listagem de produtos com filtros avançados, páginas de detalhes do produto com galerias interativas, um carrinho de compras funcional, um fluxo de checkout simplificado e um perfil de usuário abrangente. O foco principal é a excelência em UX/UI, combinando estética visual atraente com desempenho otimizado para garantir carregamento rápido e navegação sem interrupções, elevando a satisfação do cliente e as taxas de conversão.",
      rating: "9/10 - Completo, responsivo, UX/UI, com foco em experiência de compra e otimização de conversão."
    },
    {
      title: "Dashboard Interativo com Visualizações de Dados",
      content: "Crie um dashboard interativo e dinâmico utilizando um framework frontend moderno como React, Vue ou Angular, projetado para exibir dados complexos de vendas e marketing de forma clara e acionável. O dashboard deve incorporar gráficos dinâmicos e personalizáveis, filtros avançados para segmentação de dados e a capacidade de drill-down para análises mais aprofundadas. O objetivo é fornecer aos usuários uma ferramenta poderosa para monitorar métricas de desempenho, identificar tendências e tomar decisões estratégicas baseadas em dados em tempo real, com uma interface intuitiva e visualmente rica.",
      rating: "9/10 - Interativo, dados, visualizações, com foco em análise estratégica e tomada de decisão."
    },
    {
      title: "Componentes Reutilizáveis com Storybook",
      content: "Crie uma biblioteca de componentes de UI (User Interface) altamente reutilizáveis e modulares utilizando React em conjunto com Storybook. Esta biblioteca deve ser acompanhada de uma documentação interativa e exemplos de uso claros para cada componente, facilitando a colaboração entre designers e desenvolvedores e acelerando o processo de desenvolvimento de novas funcionalidades. O objetivo é estabelecer um sistema de design consistente e escalável, promovendo a padronização visual e a eficiência no desenvolvimento frontend, garantindo a qualidade e a manutenibilidade do código em projetos futuros.",
      rating: "9/10 - Reutilizável, documentado, modular, com foco em consistência de design e eficiência de desenvolvimento."
    },
    {
      title: "Frontend para Aplicativo de Chat em Tempo Real",
      content: "Desenvolva a interface de usuário completa e responsiva para um aplicativo de chat em tempo real, proporcionando uma experiência de comunicação fluida e envolvente. A interface deve incluir a exibição dinâmica de mensagens, uma lista de contatos intuitiva, indicadores de digitação para feedback visual instantâneo e suporte abrangente a emojis para expressividade. A comunicação em tempo real será gerenciada eficientemente utilizando WebSockets, garantindo baixa latência e sincronização perfeita entre os usuários. O objetivo é criar um ambiente de chat moderno e funcional, que promova a interação contínua e satisfatória entre os usuários.",
      rating: "9/10 - Tempo real, interativo, comunicação, com foco em fluidez e engajamento do usuário."
    },
    {
      title: "Frontend para Plataforma de E-learning com Player de Vídeo Customizado",
      content: "Desenvolva o frontend completo para uma plataforma de e-learning inovadora, com um player de vídeo customizado que ofereça funcionalidades avançadas para otimizar a experiência de aprendizado. O player deve incluir recursos como anotações em tempo real, controle de velocidade de reprodução e um sistema de acompanhamento de progresso do aluno. O objetivo é criar um ambiente de aprendizado interativo e personalizado, que capacite os estudantes a absorver o conteúdo de forma mais eficaz, monitorar seu desempenho e engajar-se ativamente com o material didático, promovendo um aprendizado mais profundo e significativo.",
      rating: "9/10 - Customizado, interativo, aprendizado, com foco em engajamento e personalização do ensino."
    },
    {
      title: "Otimização de Workflow Frontend com Vite",
      content: "Explique de forma detalhada e técnica como o Vite, um bundler de próxima geração, pode acelerar significativamente o workflow de desenvolvimento frontend. Aborde seus principais recursos, como o servidor de desenvolvimento instantâneo, a otimização de dependências e o HMR (Hot Module Replacement) ultra-rápido. Compare seus benefícios e vantagens em relação a outras ferramentas de build consolidadas, como Webpack, destacando como o Vite contribui para uma experiência de desenvolvimento mais ágil e produtiva, reduzindo o tempo de espera e aumentando a eficiência do desenvolvedor.",
      rating: "8/10 - Abrangente, focado em ferramenta, comparativo, com foco em agilidade e produtividade do desenvolvedor."
    },
    {
      title: "Animações Complexas com GSAP/Framer Motion",
      content: "Implemente animações complexas e fluidas em uma página web existente, utilizando bibliotecas de animação de alto desempenho como GSAP (GreenSock Animation Platform) ou Framer Motion. O objetivo é criar uma experiência de usuário visualmente envolvente e memorável, que aprimore a interatividade e a estética do site. Detalhe a aplicação de transições suaves, microinterações e efeitos visuais que contribuam para uma navegação mais dinâmica e agradável, sem comprometer o desempenho ou a acessibilidade, elevando o nível de profissionalismo e atratividade do design.",
      rating: "8/10 - Animações, fluidez, experiência, com foco em engajamento visual e profissionalismo."
    },
    {
      title: "Formulário Multi-etapas com Validação",
      content: "Crie um formulário multi-etapas robusto e amigável, com validação de entrada em cada etapa para garantir a integridade dos dados. O formulário deve incluir uma barra de progresso visualmente clara e feedback instantâneo para o usuário, otimizando a experiência de preenchimento de formulários longos e complexos. O objetivo é reduzir a taxa de abandono, guiando o usuário de forma intuitiva através do processo, e melhorar a usabilidade geral, tornando a coleta de informações mais eficiente e menos frustrante, com foco na experiência do usuário e na precisão dos dados.",
      rating: "8/10 - Validação, UX, progresso, com foco em redução de abandono e precisão de dados."
    },
    {
      title: "Otimização de Performance Frontend",
      content: "Desenvolva um plano detalhado para otimizar a performance de um aplicativo web frontend existente, visando reduzir o tempo de carregamento, melhorar a responsividade e aprimorar a experiência do usuário. O plano deve incluir estratégias como otimização de imagens, lazy loading de componentes, code splitting, minificação de arquivos CSS e JavaScript, e a implementação de caching. O objetivo é alcançar métricas de Core Web Vitals excelentes, garantindo que o aplicativo seja rápido, eficiente e acessível, proporcionando uma navegação fluida e satisfatória para todos os usuários, independentemente da conexão ou dispositivo.",
      rating: "9/10 - Performance, otimização, experiência do usuário, com foco em Core Web Vitals e acessibilidade."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Monitor className="h-8 w-8 text-yellow-400 mr-3" />
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
