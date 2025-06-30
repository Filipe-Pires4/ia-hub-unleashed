
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsEficazesDicas = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Rocket className="h-8 w-8 text-orange-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Dicas de Ouro</h1>
          </div>
          <p className="text-xl text-gray-300">
            Os Segredos dos Mestres dos Prompts!
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed text-lg">
              Você já tem as ferramentas e a base para criar prompts incríveis. Agora, vamos afiar suas habilidades com algumas <strong className="text-orange-300">Dicas de Ouro</strong> que os mestres dos prompts usam para obter resultados ainda mais espetaculares:
            </p>
          </div>

          {/* Dica 1 */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 border border-blue-600">
            <h2 className="text-2xl font-bold text-blue-300 mb-6">🎯 Dica de Ouro 1: Seja Específico, Sempre!</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              A IA não lê mentes (ainda!). Quanto mais detalhes e clareza você der, melhor será o resultado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-800 rounded-lg p-4">
                <h3 className="font-bold text-red-200 mb-2">❌ Evite:</h3>
                <p className="text-red-100">"Escreva sobre cachorros"</p>
              </div>
              <div className="bg-green-800 rounded-lg p-4">
                <h3 className="font-bold text-green-200 mb-2">✅ Prefira:</h3>
                <p className="text-green-100">"Escreva um poema divertido de quatro estrofes sobre um pug que adora comer pizza, com rimas AABB e um tom bem-humorado."</p>
              </div>
            </div>
          </div>

          {/* Dica 2 */}
          <div className="bg-gradient-to-r from-green-900 to-teal-900 rounded-2xl p-8 border border-green-600">
            <h2 className="text-2xl font-bold text-green-300 mb-6">🔄 Dica de Ouro 2: Iterar é a Chave!</h2>
            <p className="text-green-100 leading-relaxed mb-4">
              Raramente o primeiro prompt será perfeito. Não tenha medo de experimentar, ajustar e refinar.
            </p>
            <div className="bg-green-800 rounded-lg p-6">
              <ul className="space-y-2 text-green-100">
                <li className="flex items-start">
                  <span className="text-green-300 mr-3">•</span>
                  <span>Pense nisso como um diálogo: você dá uma instrução, a IA responde, você ajusta a instrução com base na resposta, e assim por diante.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3">•</span>
                  <span>É um processo de melhoria contínua!</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dica 3 */}
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">📋 Dica de Ouro 3: Use Delimitadores!</h2>
            <p className="text-purple-100 leading-relaxed mb-4">
              Para evitar que a IA se confunda, especialmente com textos longos ou múltiplas instruções, use delimitadores.
            </p>
            <div className="space-y-4">
              <div className="bg-purple-800 rounded-lg p-4">
                <h3 className="font-bold text-purple-200 mb-2">Opções:</h3>
                <p className="text-purple-100">Aspas triplas (`"""`), aspas simples (`'`), ou tags XML (`&lt;texto&gt;...&lt;/texto&gt;`)</p>
              </div>
              <div className="bg-purple-800 rounded-lg p-4">
                <h3 className="font-bold text-purple-200 mb-2">Benefício:</h3>
                <p className="text-purple-100">Ajuda a IA a entender onde uma instrução termina e outra começa, ou onde o texto de entrada está.</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 mt-4 font-mono text-sm">
              <p className="text-gray-300">Resuma o texto a seguir, que está delimitado por aspas triplas, em três frases:</p>
              <p className="text-yellow-300">"""O uso de energias renováveis tem crescido exponencialmente..."""</p>
            </div>
          </div>

          {/* Dica 4 */}
          <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-2xl p-8 border border-yellow-600">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6">🧠 Dica de Ouro 4: Peça para a IA Pensar em Voz Alta!</h2>
            <p className="text-yellow-100 leading-relaxed mb-4">
              Para tarefas complexas que exigem raciocínio, peça para a IA detalhar o processo de pensamento antes de dar a resposta final. Isso é conhecido como <strong className="text-orange-300">"Chain-of-Thought Prompting"</strong>.
            </p>
            <div className="space-y-4">
              <div className="bg-yellow-800 rounded-lg p-4">
                <h3 className="font-bold text-yellow-200 mb-2">Benefícios:</h3>
                <ul className="space-y-1 text-yellow-100">
                  <li>• A IA pode "explicar" como chegou àquela conclusão</li>
                  <li>• Isso muitas vezes leva a respostas mais precisas e lógicas</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <p className="text-yellow-300">Exemplo:</p>
                <p className="text-gray-300">Pense passo a passo. Qual é a capital da França? Qual é o idioma oficial falado lá?</p>
              </div>
            </div>
          </div>

          {/* Dicas 5 e 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-2xl p-6 border border-cyan-600">
              <h2 className="text-xl font-bold text-cyan-300 mb-4">🎨 Dica de Ouro 5: Mantenha a Consistência!</h2>
              <p className="text-cyan-100 leading-relaxed text-sm">
                Se você precisa de várias respostas no mesmo estilo ou formato, use o mesmo prompt (ou variações mínimas) e os mesmos exemplos (Few-Shot). A consistência ajuda a IA a manter o padrão que você estabeleceu.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-6 border border-indigo-600">
              <h2 className="text-xl font-bold text-indigo-300 mb-4">🧪 Dica de Ouro 6: Teste, Teste e Teste!</h2>
              <p className="text-indigo-100 leading-relaxed text-sm">
                A melhor forma de aprender é fazendo! Experimente diferentes abordagens, mude uma palavra aqui, adicione uma frase ali. Cada interação é uma oportunidade de aprendizado e de aprimorar suas habilidades como mestre dos prompts.
              </p>
            </div>
          </div>

          {/* Conclusão */}
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">🎉 Sua Jornada Apenas Começou!</h2>
            <p className="text-purple-100 leading-relaxed mb-6">
              Parabéns, futuro mestre dos prompts! Você acaba de dar um passo gigantesco na arte de conversar com a Inteligência Artificial. Vimos que a IA não é um bicho de sete cabeças, mas sim uma ferramenta poderosa que, com as instruções certas, pode transformar a maneira como você trabalha, cria e inova.
            </p>
            
            <div className="bg-purple-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-4">🎯 Lembre-se:</h3>
              <ul className="space-y-2 text-purple-100">
                <li className="flex items-start">
                  <span className="text-purple-300 mr-3">•</span>
                  <strong>A prática leva à perfeição:</strong> Continue experimentando, testando novas abordagens e refinando seus prompts.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-300 mr-3">•</span>
                  <strong>Cada interação é um aprendizado:</strong> Use cada resposta da IA para aprimorar suas habilidades.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-300 mr-3">•</span>
                  <strong>O mundo da IA está em constante evolução:</strong> E você, com suas novas habilidades, está mais do que preparado para surfar essa onda.
                </li>
              </ul>
            </div>

            <p className="text-purple-100 leading-relaxed text-lg">
              Então, o que você está esperando? Vá em frente, crie seus prompts, divirta-se e <strong className="text-yellow-300">libere todo o potencial da IA!</strong> A jornada apenas começou, e o futuro é seu para conquistar!
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts-eficazes/exemplos-praticos"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Exemplos Práticos
          </Link>
          
          <Link
            to="/guias/prompts-eficazes"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voltar ao Hub do Guia
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsEficazesDicas;
