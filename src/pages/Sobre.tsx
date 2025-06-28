
import { Users, Target, Heart, Zap, Globe, BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Sobre = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Educação Acessível",
      description: "Tornar o conhecimento sobre IA acessível para todos, independente do nível técnico."
    },
    {
      icon: Users,
      title: "Comunidade Colaborativa",
      description: "Fomentar um ambiente onde todos aprendem juntos e compartilham experiências."
    },
    {
      icon: Zap,
      title: "Aprendizado Prático",
      description: "Foco em projetos reais e aplicações práticas que fazem diferença no dia a dia."
    },
    {
      icon: Heart,
      title: "Transparência",
      description: "Compartilhar conhecimento de forma aberta, honesta e sem agenda comercial."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Nascimento da Comunidade",
      description: "IA Hub surge como um espaço para desmistificar a inteligência artificial e conectar pessoas interessadas no tema."
    },
    {
      year: "Meta 2024",
      title: "1000 Membros Ativos",
      description: "Nosso objetivo é alcançar mil membros engajados, criando uma base sólida para o crescimento da comunidade."
    },
    {
      year: "Visão 2025",
      title: "Referência Nacional",
      description: "Ser reconhecido como a principal comunidade brasileira de IA para iniciantes e entusiastas."
    }
  ];

  const team = [
    {
      name: "Filipe Cesar",
      role: "Fundador & Curador de Conteúdo",
      description: "Entusiasta de IA com foco em tornar tecnologia complexa acessível para todos.",
      emoji: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Globe className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Sobre o IA Hub</h1>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            O IA Hub nasceu da necessidade de criar um espaço onde curiosos, iniciantes e entusiastas 
            podem explorar o mundo da Inteligência Artificial de forma prática e descomplicada.
          </p>
        </div>

        {/* Missão */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-white mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Nossa Missão</h2>
            </div>
            <p className="text-purple-100 text-lg md:text-xl leading-relaxed">
              Democratizar o acesso ao conhecimento sobre Inteligência Artificial, criando uma ponte 
              entre a complexidade da tecnologia e a curiosidade das pessoas. Acreditamos que todos 
              podem se beneficiar da IA, independente de sua formação técnica.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 p-3 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Nossa Jornada</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Equipe */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Quem Somos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center"
              >
                <div className="text-4xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Como Contribuir */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-red-400 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Como Você Pode Contribuir</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-600 p-4 rounded-lg mb-4 inline-block">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Participar</h3>
                <p className="text-gray-300 text-sm">
                  Engaje nos desafios, compartilhe experiências e ajude outros membros.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 p-4 rounded-lg mb-4 inline-block">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Compartilhar</h3>
                <p className="text-gray-300 text-sm">
                  Contribua com conteúdo, tutoriais e conhecimento para a comunidade.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 p-4 rounded-lg mb-4 inline-block">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Apoiar</h3>
                <p className="text-gray-300 text-sm">
                  Ajude a manter o projeto vivo através de contribuições financeiras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section>
          <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Vamos Conversar?</h2>
            <p className="text-gray-300 mb-6">
              Tem sugestões, dúvidas ou quer colaborar conosco? 
              Estamos sempre abertos para novas ideias e parcerias.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Enviar Sugestão
              </button>
              <button className="bg-transparent border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Apoiar Projeto
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
