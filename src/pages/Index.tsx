
import { Link } from 'react-router-dom';
import { BookOpen, Wrench, Trophy, ArrowRight, Sparkles, Target, Zap } from 'lucide-react';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  const welcomeCards = [
    {
      title: "O que é IA?",
      description: "Nosso guia fundamental para desmistificar tudo.",
      buttonText: "Ler o Guia",
      link: "/guias",
      icon: BookOpen,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Ferramentas Essenciais",
      description: "Conheça as 3 ferramentas gratuitas que você precisa.",
      buttonText: "Ver Ferramentas",
      link: "/ferramentas",
      icon: Wrench,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Nosso Último Desafio",
      description: "Aprenda na prática com nossa comunidade.",
      buttonText: "Participar do Desafio",
      link: "/projetos",
      icon: Trophy,
      gradient: "from-pink-500 to-red-600"
    }
  ];

  const recentGuides = [
    {
      title: "Como Criar Seu Primeiro Prompt Eficaz",
      description: "Aprenda as técnicas fundamentais para obter os melhores resultados da IA.",
      readTime: "5 min",
      category: "Básico"
    },
    {
      title: "Automação com IA: Primeiros Passos",
      description: "Descubra como automatizar tarefas simples usando ferramentas de IA.",
      readTime: "8 min",
      category: "Intermediário"
    },
    {
      title: "Ética na IA: Guia Prático",
      description: "Entenda os aspectos éticos essenciais no uso de inteligência artificial.",
      readTime: "6 min",
      category: "Conceitual"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Seção 1: Mapa de Boas-Vindas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Desvende a Inteligência Artificial,
              <span className="block text-purple-400">do Zero ao Primeiro Projeto.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore nossos guias, ferramentas e desafios práticos para começar sua jornada na IA de forma intuitiva e prática.
            </p>
          </div>

          {/* Comece Sua Jornada Aqui */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <Sparkles className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                Comece Sua Jornada Aqui
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {welcomeCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:scale-105"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    
                    <Link
                      to={card.link}
                      className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors group"
                    >
                      {card.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Ferramenta de Chat */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-850">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Quer criar um agente?
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Utilize nossa IA da comunidade para conseguir a melhor base para trabalhar:
            </p>
          </div>
          
          <ChatInterface />
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              💡 Nossa IA está sempre aprendendo com a comunidade para oferecer as melhores sugestões
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: Guias Recentes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Zap className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Nossos Guias Mais Recentes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentGuides.map((guide, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
                    {guide.category}
                  </span>
                  <span className="text-gray-400 text-sm">{guide.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {guide.description}
                </p>
                
                <Link
                  to="/guias"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors group"
                >
                  Ler artigo
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/guias"
              className="inline-flex items-center bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              Ver Todos os Guias
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
