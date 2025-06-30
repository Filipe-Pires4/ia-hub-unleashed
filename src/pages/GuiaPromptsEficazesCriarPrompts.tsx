
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Lightbulb } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsEficazesCriarPrompts = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Lightbulb className="h-8 w-8 text-yellow-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Como Criar Prompts Eficazes</h1>
          </div>
          <p className="text-xl text-gray-300">
            Seja o Maestro da Orquestra da IA!
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed text-lg">
              Agora que você já sabe a importância de um bom prompt, vamos mergulhar nas <strong className="text-yellow-300">técnicas</strong> que vão transformar você em um verdadeiro maestro da orquestra da IA! Preparado para aprender a dar as instruções certas para o seu estagiário superpoderoso?
            </p>
          </div>

          {/* Fórmula P.R.O.M.P.T. */}
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">✨ A Fórmula Mágica: P.R.O.M.P.T.</h2>
            <p className="text-purple-100 leading-relaxed mb-6">
              Esqueça as poções mágicas! A verdadeira fórmula para prompts eficazes pode ser resumida em um acrônimo que você nunca mais vai esquecer: <strong className="text-yellow-300">P.R.O.M.P.T.</strong> (Embora não seja um acrônimo universalmente reconhecido, vamos usá-lo aqui para facilitar o aprendizado e a memorização, ok? É a nossa <strong className="text-yellow-300">Dica de Ouro</strong> particular!)
            </p>
            
            <div className="space-y-6">
              <div className="bg-purple-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-200 mb-3">
                  <span className="text-yellow-300">P</span>ersona
                </h3>
                <p className="text-purple-100">
                  Defina o <strong>papel</strong> que a IA deve assumir. Quer que ela seja um especialista em marketing, um chef de cozinha, um professor de história? Quanto mais específico, melhor!
                </p>
                <div className="mt-3 p-3 bg-purple-700 rounded">
                  <strong className="text-purple-200">Exemplo:</strong> "Aja como um historiador especializado em Roma Antiga..."
                </div>
              </div>

              <div className="bg-purple-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-200 mb-3">
                  <span className="text-yellow-300">R</span>equisito
                </h3>
                <p className="text-purple-100">
                  Deixe claro o <strong>que você quer</strong> que a IA faça. Seja direto e objetivo.
                </p>
                <div className="mt-3 p-3 bg-purple-700 rounded">
                  <strong className="text-purple-200">Exemplo:</strong> "...e escreva um parágrafo sobre a vida cotidiana dos plebeus."
                </div>
              </div>

              <div className="bg-purple-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-200 mb-3">
                  <span className="text-yellow-300">O</span>bjetivo
                </h3>
                <p className="text-purple-100">
                  Qual o <strong>propósito</strong> do seu pedido? O que você espera alcançar com a resposta da IA?
                </p>
                <div className="mt-3 p-3 bg-purple-700 rounded">
                  <strong className="text-purple-200">Exemplo:</strong> "...O objetivo é educar um público leigo sobre a realidade da época."
                </div>
              </div>

              <div className="bg-purple-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-200 mb-3">
                  <span className="text-yellow-300">M</span>odelo/Formato
                </h3>
                <p className="text-purple-100">
                  Especifique o <strong>formato</strong> da saída. Quer um texto, uma lista, um código, um poema?
                </p>
                <div className="mt-3 p-3 bg-purple-700 rounded">
                  <strong className="text-purple-200">Exemplo:</strong> "...O texto deve ser em prosa, com no máximo 150 palavras."
                </div>
              </div>

              <div className="bg-purple-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-200 mb-3">
                  <span className="text-yellow-300">P</span>arâmetros/Restrições
                </h3>
                <p className="text-purple-100">
                  Adicione <strong>detalhes, limites ou restrições</strong>. Isso ajuda a IA a refinar a resposta.
                </p>
                <div className="mt-3 p-3 bg-purple-700 rounded">
                  <strong className="text-purple-200">Exemplo:</strong> "...Use uma linguagem acessível, evite jargões acadêmicos e inclua uma metáfora."
                </div>
              </div>

              <div className="bg-purple-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-200 mb-3">
                  <span className="text-yellow-300">T</span>om
                </h3>
                <p className="text-purple-100">
                  Indique o <strong>tom</strong> da resposta. Quer algo formal, divertido, sério, inspirador?
                </p>
                <div className="mt-3 p-3 bg-purple-700 rounded">
                  <strong className="text-purple-200">Exemplo:</strong> "...O tom deve ser informativo e levemente divertido."
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-800 to-orange-800 rounded-lg border border-yellow-600">
              <p className="text-yellow-100 leading-relaxed">
                <strong className="text-yellow-300">💡 Resultado:</strong> Combinando esses elementos, seu prompt se torna uma <strong>instrução cirúrgica</strong>, guiando a IA para o resultado perfeito!
              </p>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts-eficazes/importancia-prompts"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Importância dos Prompts
          </Link>
          
          <Link
            to="/guias/prompts-eficazes/tecnicas-avancadas"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Técnicas Avançadas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsEficazesCriarPrompts;
