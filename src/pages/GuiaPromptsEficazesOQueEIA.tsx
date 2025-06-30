
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Brain } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsEficazesOQueEIA = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Brain className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">O que Raios é IA?</h1>
          </div>
          <p className="text-xl text-gray-300">
            Ou: Seu Novo Estagiário Superpoderoso!
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Imagine que você tem um <strong className="text-purple-300">estagiário superinteligente</strong> que aprende rapidinho, mas que precisa de instruções bem claras para fazer o trabalho perfeito. Esse estagiário é a Inteligência Artificial!
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">A IA é capaz de:</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 font-bold">•</span>
                <span>Processar uma quantidade absurda de informações.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 font-bold">•</span>
                <span>Realizar tarefas complexas em tempo recorde.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 font-bold">•</span>
                <span>Aprender com a experiência.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 border border-blue-600">
            <p className="text-blue-100 leading-relaxed mb-4">
              No mundo da IA, o <strong className="text-yellow-300">prompt</strong> é a sua forma de conversar com esse estagiário. É a instrução, a pergunta, o comando que você dá para que ele entenda o que você quer e entregue o resultado esperado.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">A importância de um bom prompt:</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold text-red-300 mb-2">❌ Instrução vaga:</h3>
                <p className="text-gray-300">O resultado pode ser inesperado (tipo pedir um expresso e receber um café com sabor de abacaxi!).</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-green-300 mb-2">✅ Instrução clara, direta e específica:</h3>
                <p className="text-gray-300">A IA vai te surpreender com a eficiência e a qualidade do trabalho!</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-2xl p-8 border border-yellow-600">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">💡 Dica:</h2>
            <p className="text-yellow-100 leading-relaxed">
              Pense na IA como um gênio da lâmpada, mas que só realiza desejos se você souber pedir direitinho!
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts-eficazes"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Hub
          </Link>
          
          <Link
            to="/guias/prompts-eficazes/importancia-prompts"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: A Importância dos Prompts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsEficazesOQueEIA;
