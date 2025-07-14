
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, Sparkles, Heart } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaHumanizacaoAgentes = () => {
  const chapters = [
    {
      title: "A Humanização como Contraintuição na Era da Perfeição Digital",
      description: "Descobrindo a força das imperfeições programadas",
      icon: "🤖",
      link: "/guias/humanizacao-agentes/contraintuicao",
      readTime: "8 min"
    },
    {
      title: "Os Micromomentos Inesperados",
      description: "Onde a humanidade realmente floresce no atendimento",
      icon: "✨",
      link: "/guias/humanizacao-agentes/micromomentos",
      readTime: "12 min"
    },
    {
      title: "Dicas Ninjas para Injetar Alma em Seus Agentes",
      description: "Segredos que ninguém te contou",
      icon: "🥷",
      link: "/guias/humanizacao-agentes/dicas-ninjas",
      readTime: "10 min"
    },
    {
      title: "Seção Prática: Dissecando a Humanização em Nível Atômico",
      description: "Exemplos práticos transformados",
      icon: "🔬",
      link: "/guias/humanizacao-agentes/pratica",
      readTime: "15 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">O que torna um atendimento Humano?</h1>
          </div>
          <h2 className="text-xl text-purple-300 mb-6">O Blueprint Secreto da Conexão Digital</h2>
          
          {/* Introdução */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              No universo da Inteligência Artificial e das automações de WhatsApp, muitos de nós buscamos a perfeição algorítmica. Criamos fluxos impecáveis, respostas instantâneas e a lógica mais otimizada possível.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mas e se a verdadeira maestria estivesse em abraçar a "imperfeição" humana? E se os atalhos para um atendimento que realmente cativa residissem em detalhes que poucos ousam programar?
            </p>
            <p className="text-purple-300 leading-relaxed font-medium">
              Este guia é o seu blueprint secreto para desvendar a humanização, trazendo insights que vão além do óbvio para quem já domina a construção de agentes de WhatsApp.
            </p>
          </div>
        </div>

        {/* Capítulos */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <Sparkles className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Capítulos do Guia</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.map((chapter, index) => (
              <Link
                key={index}
                to={chapter.link}
                className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{chapter.icon}</span>
                  <span className="text-sm text-gray-400">{chapter.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {index + 1}. {chapter.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {chapter.description}
                </p>
                
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">Ler capítulo</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 border border-purple-500 text-center">
          <Bot className="h-12 w-12 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Transforme seus Agentes em Especialistas Humanos
          </h3>
          <p className="text-purple-100 mb-6">
            Descubra os segredos para criar conexões digitais verdadeiramente humanas e revolucione seu atendimento no WhatsApp.
          </p>
          <Link
            to={chapters[0].link}
            className="inline-flex items-center bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Começar a Ler
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaHumanizacaoAgentes;
