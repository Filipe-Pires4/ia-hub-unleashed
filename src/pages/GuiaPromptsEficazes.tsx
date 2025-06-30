
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Target, Lightbulb, Code, Star, Rocket } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsEficazes = () => {
  const chapters = [
    {
      id: 1,
      title: "O que Raios é IA?",
      description: "Descubra como a IA funciona como seu estagiário superpoderoso e por que prompts são fundamentais",
      icon: Brain,
      color: "purple",
      path: "/guias/prompts-eficazes/o-que-e-ia"
    },
    {
      id: 2,
      title: "A Importância dos Prompts",
      description: "Entenda por que dominar prompts é como ter um superpoder no mundo digital",
      icon: Target,
      color: "blue",
      path: "/guias/prompts-eficazes/importancia-prompts"
    },
    {
      id: 3,
      title: "Como Criar Prompts Eficazes",
      description: "Aprenda a fórmula mágica P.R.O.M.P.T. e as técnicas dos mestres",
      icon: Lightbulb,
      color: "yellow",
      path: "/guias/prompts-eficazes/como-criar-prompts"
    },
    {
      id: 4,
      title: "Técnicas Avançadas",
      description: "Domine Few-Shot Learning, Markdown e Chain-of-Thought para resultados incríveis",
      icon: Code,
      color: "green",
      path: "/guias/prompts-eficazes/tecnicas-avancadas"
    },
    {
      id: 5,
      title: "Exemplos Práticos",
      description: "Prompts prontos para copiar, colar e adaptar para suas necessidades",
      icon: Star,
      color: "cyan",
      path: "/guias/prompts-eficazes/exemplos-praticos"
    },
    {
      id: 6,
      title: "Dicas de Ouro dos Mestres",
      description: "Os segredos que os especialistas usam para obter resultados espetaculares",
      icon: Rocket,
      color: "orange",
      path: "/guias/prompts-eficazes/dicas-de-ouro"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "border-purple-500 text-purple-300 bg-purple-600 hover:bg-purple-700",
      blue: "border-blue-500 text-blue-300 bg-blue-600 hover:bg-blue-700",
      yellow: "border-yellow-500 text-yellow-300 bg-yellow-600 hover:bg-yellow-700",
      green: "border-green-500 text-green-300 bg-green-600 hover:bg-green-700",
      cyan: "border-cyan-500 text-cyan-300 bg-cyan-600 hover:bg-cyan-700",
      orange: "border-orange-500 text-orange-300 bg-orange-600 hover:bg-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Como Criar Prompts Eficazes: Desvendando os Segredos da IA!
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            E aí, futuro mestre dos prompts! Preparado para desvendar os mistérios da Inteligência Artificial de um jeito que você nunca imaginou? Esqueça aqueles filmes de ficção científica com robôs dominando o mundo (pelo menos por enquanto!). A verdade é que a IA está mais para um <strong className="text-purple-300">superpoder</strong> que você pode aprender a controlar, e o segredo para isso está nos <strong className="text-purple-300">prompts eficazes</strong>.
          </p>
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl border border-purple-600">
            <p className="text-gray-200 leading-relaxed">
              Se você já entende um pouco de IA, chatbots e agentes, mas quer levar suas habilidades para o próximo nível, você veio ao lugar certo. Prepare-se para uma jornada divertida, cheia de <strong className="text-yellow-300">dicas práticas</strong> e analogias que vão fazer você pensar: "Por que ninguém me explicou isso antes?" Vamos nessa!
            </p>
          </div>
        </div>

        {/* Sumário dos Capítulos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Sumário do Guia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter) => {
              const IconComponent = chapter.icon;
              const colorClasses = getColorClasses(chapter.color);
              
              return (
                <Link
                  key={chapter.id}
                  to={chapter.path}
                  className={`bg-gray-800 rounded-2xl p-8 border-2 hover:scale-105 transition-all duration-300 ${colorClasses.split(' ')[0]} hover:${colorClasses.split(' ')[0]}`}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-8 w-8 mr-4 ${colorClasses.split(' ')[1]}`} />
                    <h3 className="text-xl font-bold">{chapter.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {chapter.description}
                  </p>
                  <div className="text-sm font-medium opacity-75">
                    Capítulo {chapter.id}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Resumo do que você vai aprender */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">O que você vai aprender neste guia:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div className="space-y-3">
              <p><strong className="text-blue-200">Fundamentos da IA:</strong> Entenda como a IA funciona de forma simples e divertida, sem jargões complicados.</p>
              <p><strong className="text-green-200">A Fórmula P.R.O.M.P.T.:</strong> Aprenda nossa técnica exclusiva para criar prompts perfeitos toda vez.</p>
              <p><strong className="text-yellow-200">Few-Shot Learning:</strong> Domine a arte de ensinar IA com exemplos práticos e eficazes.</p>
            </div>
            <div className="space-y-3">
              <p><strong className="text-cyan-200">Markdown para Prompts:</strong> Use formatação para tornar suas instruções mais claras e precisas.</p>
              <p><strong className="text-orange-200">Exemplos Prontos:</strong> Copie e adapte prompts testados para suas necessidades específicas.</p>
              <p><strong className="text-purple-200">Dicas dos Mestres:</strong> Segredos profissionais para obter resultados espetaculares.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsEficazes;
