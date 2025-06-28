
import { useState } from 'react';
import { Trophy, Calendar, Users, ExternalLink, Github, Play, Award } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Projetos = () => {
  const [activeTab, setActiveTab] = useState('atual');

  const currentChallenge = {
    title: "Desafio da Semana: Criador de Histórias Personalizadas",
    description: "Crie um agente de IA capaz de gerar histórias infantis personalizadas baseadas no nome da criança, idade e temas favoritos.",
    duration: "7 dias",
    difficulty: "Intermediário",
    participants: 87,
    prize: "Destaque na comunidade + Kit de recursos premium",
    requirements: [
      "Usar qualquer ferramenta de IA conversacional",
      "Criar prompts que personalizem a história",
      "Incluir pelo menos 3 elementos personalizáveis",
      "Documentar o processo de criação"
    ],
    deliverables: [
      "Screenshot ou vídeo do agente funcionando",
      "Prompt final utilizado",
      "Exemplo de história gerada",
      "Breve explicação do processo"
    ],
    deadline: "2024-07-05"
  };

  const projectGallery = [
    {
      title: "ChatBot Personal Trainer",
      author: "Maria Silva",
      description: "Agente especializado em criar treinos personalizados e acompanhar o progresso fitness.",
      image: "🏋️‍♀️",
      category: "Saúde & Fitness",
      likes: 42,
      tools: ["ChatGPT", "Notion AI"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Assistente de Estudos",
      author: "João Santos",
      description: "IA que cria cronogramas de estudo, explica conceitos complexos e gera questões de prática.",
      image: "📚",
      category: "Educação",
      likes: 38,
      tools: ["Claude", "Perplexity"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Gerador de Receitas Criativas",
      author: "Ana Costa",
      description: "Cria receitas baseadas nos ingredientes disponíveis e restrições alimentares.",
      image: "👨‍🍳",
      category: "Culinária",
      likes: 35,
      tools: ["ChatGPT", "DALL-E"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Mentor de Programação",
      author: "Carlos Tech",
      description: "Agente que ensina programação através de exercícios práticos e feedback personalizado.",
      image: "💻",
      category: "Programação",
      likes: 51,
      tools: ["GitHub Copilot", "ChatGPT"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Planejador de Viagens Inteligente",
      author: "Laura Viajante",
      description: "Cria roteiros personalizados considerando orçamento, preferências e época do ano.",
      image: "✈️",
      category: "Turismo",
      likes: 29,
      tools: ["Perplexity", "ChatGPT"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Assistente de Design",
      author: "Roberto Designer",
      description: "Gera conceitos visuais, sugere paletas de cores e cria briefings criativos.",
      image: "🎨",
      category: "Design",
      likes: 44,
      tools: ["Midjourney", "Claude"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const pastChallenges = [
    {
      title: "Agente Tradutor Cultural",
      winner: "Pedro Lima",
      participants: 156,
      description: "Tradutor que adapta expressões culturais, não apenas palavras."
    },
    {
      title: "Organizador de Emails Inteligente",
      winner: "Carla Admin",
      participants: 203,
      description: "IA que categoriza e prioriza emails automaticamente."
    },
    {
      title: "Gerador de Conteúdo para Redes Sociais",
      winner: "Marcos Social",
      participants: 127,
      description: "Cria posts, legendas e hashtags personalizadas para cada rede social."
    }
  ];

  const categories = ["Todos", "Educação", "Saúde & Fitness", "Culinária", "Programação", "Turismo", "Design"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos" 
    ? projectGallery 
    : projectGallery.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Trophy className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Projetos & Desafios</h1>
          </div>
          <p className="text-xl text-gray-300">
            Participe dos nossos desafios semanais e explore projetos incríveis da comunidade.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('atual')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'atual'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Desafio Atual
            </button>
            <button
              onClick={() => setActiveTab('galeria')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'galeria'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Galeria de Projetos
            </button>
            <button
              onClick={() => setActiveTab('anteriores')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'anteriores'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Desafios Anteriores
            </button>
          </nav>
        </div>

        {/* Desafio Atual */}
        {activeTab === 'atual' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 border border-purple-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-yellow-400 mr-3" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {currentChallenge.title}
                    </h2>
                    <div className="flex items-center mt-2 space-x-4 text-purple-100">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{currentChallenge.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{currentChallenge.participants} participantes</span>
                      </div>
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                        {currentChallenge.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-purple-100 mb-6 text-lg leading-relaxed">
                {currentChallenge.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-3">Requisitos:</h3>
                  <ul className="space-y-2">
                    {currentChallenge.requirements.map((req, index) => (
                      <li key={index} className="text-purple-100 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-3">Entregáveis:</h3>
                  <ul className="space-y-2">
                    {currentChallenge.deliverables.map((deliverable, index) => (
                      <li key={index} className="text-purple-100 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-purple-100">
                  <p className="text-sm">Prêmio: <span className="font-semibold">{currentChallenge.prize}</span></p>
                  <p className="text-sm">Prazo: <span className="font-semibold">{currentChallenge.deadline}</span></p>
                </div>
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                  <Play className="h-5 w-5 mr-2" />
                  Participar Agora
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Galeria de Projetos */}
        {activeTab === 'galeria' && (
          <div className="space-y-8">
            {/* Filtros */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid de Projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{project.image}</span>
                    <span className="bg-purple-600 text-purple-100 px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-1">por {project.author}</p>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.likes} curtidas</span>
                    </div>

                    <div className="flex space-x-2">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors">
                        <Github className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Desafios Anteriores */}
        {activeTab === 'anteriores' && (
          <div className="space-y-6">
            {pastChallenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{challenge.title}</h3>
                    <p className="text-gray-400">{challenge.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <Award className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Vencedor</span>
                    </div>
                    <p className="text-white font-semibold">{challenge.winner}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-400">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">{challenge.participants} participantes</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projetos;
