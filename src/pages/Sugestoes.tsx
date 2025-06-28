
import { MessageSquare, Send, Lightbulb, Bug, Heart } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Sugestoes = () => {
  const feedbackTypes = [
    {
      icon: Lightbulb,
      title: "Sugestão de Melhoria",
      description: "Ideias para tornar a plataforma ainda melhor",
      color: "text-yellow-400"
    },
    {
      icon: Bug,
      title: "Reportar Problema",
      description: "Encontrou algum erro ou dificuldade?",
      color: "text-red-400"
    },
    {
      icon: Heart,
      title: "Feedback Geral",
      description: "Conte-nos sua experiência na comunidade",
      color: "text-pink-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Caixa de Sugestões</h1>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Sua opinião é fundamental para o crescimento da nossa comunidade. 
            Compartilhe suas ideias, reporte problemas ou nos conte sobre sua experiência.
          </p>
        </div>

        {/* Tipos de Feedback */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Como podemos ajudar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbackTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 text-center"
                >
                  <div className="mb-4">
                    <Icon className={`h-12 w-12 mx-auto ${type.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-400 text-sm">{type.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Formulário de Feedback */}
        <section className="mb-12">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center mb-8">
              <Send className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold">Envie seu Feedback</h2>
            </div>

            {/* Aqui seria onde o formulário externo seria incorporado */}
            <div className="bg-gray-750 rounded-lg p-8 border-2 border-dashed border-gray-600 text-center">
              <MessageSquare className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                Formulário de Feedback
              </h3>
              <p className="text-gray-500 mb-6">
                Aqui será incorporado o formulário externo para coleta de sugestões e feedback da comunidade.
              </p>
              <div className="bg-gray-700 rounded-lg p-4 text-left">
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Para administradores:</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Incorpore aqui seu formulário do Google Forms, Typeform, ou qualquer outra ferramenta de coleta de feedback de sua escolha.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Informações Adicionais */}
        <section>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Por que seu feedback é importante?
            </h2>
            <div className="space-y-4 text-purple-100">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-300 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>
                  <strong>Crescimento Contínuo:</strong> Suas sugestões nos ajudam a priorizar melhorias e novas funcionalidades.
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-300 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>
                  <strong>Experiência do Usuário:</strong> Reportar problemas nos permite corrigir erros rapidamente.
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-300 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>
                  <strong>Comunidade Ativa:</strong> Feedback construtivo fortalece nossa comunidade e cria um ambiente melhor para todos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compromisso */}
        <section className="mt-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Nosso Compromisso</h3>
            <p className="text-gray-300 text-sm">
              Lemos todas as sugestões e nos comprometemos a responder no prazo de 48 horas. 
              Sua privacidade é respeitada e suas informações nunca serão compartilhadas.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sugestoes;
