
import { Link } from 'react-router-dom';
import { Layout, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsLandingPage = () => {
  const prompts = [
    {
      title: "Página de Destino de Agência de TI Animada em 3D",
      content: "Projete uma página de destino moderna e visualmente impactante, incorporando animações 3D sofisticadas, especificamente desenvolvida para uma agência de soluções de TI inovadora. O objetivo é criar uma experiência imersiva para o usuário, destacando os serviços e a expertise tecnológica da agência de forma dinâmica e envolvente, com foco em capturar a atenção e gerar leads qualificados através de um design de ponta e interatividade fluida.",
      rating: "9/10 - Detalhado, visual, nicho específico, com foco em experiência e geração de leads."
    },
    {
      title: "Desenvolvimento de Portfólio Animado em 3D",
      content: "Elabore um guia técnico e criativo para a construção de um portfólio online altamente inovador, apresentando animações 3D dinâmicas. Inclua instruções detalhadas sobre como integrar um fundo de peixe interativo e projetos apresentados em seções 3D imersivas. O objetivo é proporcionar uma experiência de navegação única e memorável, que demonstre a capacidade técnica e a criatividade do desenvolvedor, atraindo potenciais clientes e empregadores com um design diferenciado e funcionalidades interativas.",
      rating: "9/10 - Detalhado, interativo, visual, com foco em inovação e atração de talentos/clientes."
    },
    {
      title: "Site Animado em 3D",
      content: "Crie um conceito de site com uma página inicial cativante, apresentando uma mala animada em 3D com o efeito 'WOW', que se move e muda de cor dinamicamente em resposta à rolagem do usuário. Este design visa proporcionar uma experiência de usuário altamente interativa e visualmente deslumbrante, ideal para marcas que desejam transmitir inovação, modernidade e um senso de descoberta, garantindo um impacto memorável e diferenciado no visitante.",
      rating: "9/10 - Detalhado, interativo, visual, com foco em impacto e inovação de marca."
    },
    {
      title: "Criação de Jogo de Cartas 29",
      content: "Desenvolva um jogo de cartas completo, especificamente o popular jogo '29', otimizado para navegadores da web. A implementação deve ser robusta, utilizando HTML para a estrutura, CSS para um design responsivo e visualmente atraente, e JavaScript para a lógica do jogo e interatividade. O projeto deve incluir todas as regras do jogo, um sistema de pontuação preciso e uma interface de usuário intuitiva, proporcionando uma experiência de jogo fluida e divertida para os usuários online.",
      rating: "9/10 - Projeto completo, tecnologias especificadas, com foco em funcionalidade e experiência de jogo."
    },
    {
      title: "Página de Login Animada em 3D",
      content: "Forneça o código-fonte completo e as diretrizes de implementação para uma página de login visualmente impressionante, que incorpore elementos animados em 3D. O design deve ser moderno e seguro, garantindo uma experiência de usuário envolvente e esteticamente agradável, sem comprometer a funcionalidade e a segurança do processo de autenticação. O objetivo é elevar a primeira impressão do usuário com a aplicação, combinando beleza e eficiência.",
      rating: "8/10 - Específico, focado em design, com ênfase em segurança e primeira impressão."
    },
    {
      title: "Site de Supercarros Animado em 3D",
      content: "Planeje e conceitue um site dinâmico e de alta performance, dedicado a supercarros, que integre animações 3D realistas e interativas. O site deve exibir modelos de carros com detalhes impressionantes, permitindo aos usuários explorar veículos de diferentes ângulos e cores. O objetivo é criar uma experiência imersiva e luxuosa, que reflita a exclusividade e a tecnologia dos supercarros, atraindo entusiastas e potenciais compradores com um design visualmente rico e funcionalidades avançadas.",
      rating: "8/10 - Criativo, focado em design, com ênfase em imersão e luxo."
    },
    {
      title: "Guia de Site Animado em 3D",
      content: "Elabore um guia abrangente e prático para projetar e desenvolver um site que utilize animações 3D de forma eficaz. O guia deve cobrir desde os princípios de design e as ferramentas necessárias até as melhores práticas de otimização de desempenho e compatibilidade com diferentes navegadores. O objetivo é capacitar desenvolvedores e designers a criar experiências web inovadoras e visualmente ricas, garantindo que as animações 3D aprimorem a usabilidade e o engajamento do usuário, sem comprometer a velocidade de carregamento.",
      rating: "8/10 - Abrangente, focado em design, com ênfase em otimização e usabilidade."
    },
    {
      title: "Aprimoramento de Animação 3D",
      content: "Proponha estratégias detalhadas para aprimorar um site existente através da integração de animações 3D. A proposta deve incluir a identificação de áreas-chave para aplicação de animações, a seleção de tecnologias apropriadas e a estimativa de impacto no desempenho e na experiência do usuário. O objetivo é revitalizar a interface, aumentar o engajamento e modernizar a percepção da marca, garantindo que as novas animações complementem o conteúdo existente e melhorem a navegação de forma significativa.",
      rating: "8/10 - Específico, focado em aprimoramento, com ênfase em impacto e modernização."
    },
    {
      title: "Desenvolvimento de Site de Chat de Vídeo 1v1",
      content: "Forneça um guia técnico completo para a criação de um site de chat de vídeo em tempo real, permitindo comunicação um-para-um. O guia deve abordar a seleção de tecnologias de streaming, a implementação de WebRTC para comunicação peer-to-peer, o gerenciamento de sessões e a garantia de segurança e privacidade dos usuários. O objetivo é desenvolver uma plataforma robusta e de baixa latência, que ofereça uma experiência de vídeo e áudio de alta qualidade, facilitando a conexão instantânea entre os usuários.",
      rating: "8/10 - Claro, funcional, específico, com foco em tempo real e qualidade de comunicação."
    },
    {
      title: "Curso de React e Node.js de 30 Dias",
      content: "Desenvolva um plano de curso abrangente e intensivo, com duração de 30 dias, projetado para capacitar desenvolvedores a dominar as tecnologias React e Node.js. O curso deve cobrir desde os fundamentos até tópicos avançados, incluindo desenvolvimento de APIs RESTful com Node.js, construção de interfaces de usuário complexas com React, gerenciamento de estado, autenticação e implantação. O objetivo é fornecer um caminho de aprendizado estruturado e prático, que prepare os alunos para construir aplicações web completas e escaláveis, com exercícios práticos e projetos desafiadores.",
      rating: "8/10 - Abrangente, focado em tecnologias, com ênfase em aprendizado prático e construção de aplicações."
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
