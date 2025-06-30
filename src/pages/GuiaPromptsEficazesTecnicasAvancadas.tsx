
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Code } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsEficazesTecnicasAvancadas = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 text-green-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Técnicas Avançadas</h1>
          </div>
          <p className="text-xl text-gray-300">
            Few-Shot Learning, Markdown e Chain-of-Thought
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          {/* Few-Shot Learning */}
          <div className="bg-gradient-to-r from-green-900 to-teal-900 rounded-2xl p-8 border border-green-600">
            <h2 className="text-3xl font-bold text-green-300 mb-6">🎯 O Poder do Exemplo: Few-Shot Learning</h2>
            <p className="text-green-100 leading-relaxed mb-6">
              Sabe quando você está ensinando algo para alguém e dá alguns exemplos para a pessoa entender melhor? É exatamente isso que o <strong className="text-yellow-300">Few-Shot Learning</strong> faz nos prompts! Em vez de apenas dar a instrução, você fornece <strong className="text-yellow-300">um ou mais exemplos de pares de entrada e saída</strong> para a IA aprender o padrão que você espera.
            </p>
            
            <div className="bg-green-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-green-200 mb-3">💡 Dica de Ouro:</h3>
              <p className="text-green-100">
                Pense no Few-Shot como um "mostre-me como se faz" para a IA. É incrivelmente eficaz para tarefas que exigem um formato específico, um estilo particular ou uma lógica complexa.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-300 mb-4">Exemplo Prático:</h3>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm">
                <p className="text-gray-300 mb-4">Traduza as frases para o português, mantendo o tom informal:</p>
                <div className="space-y-2 text-gray-200">
                  <p><span className="text-blue-300">Inglês:</span> "What's up, dude?"</p>
                  <p><span className="text-green-300">Português:</span> "E aí, meu chapa?"</p>
                  <br />
                  <p><span className="text-blue-300">Inglês:</span> "I'm feeling great!"</p>
                  <p><span className="text-green-300">Português:</span> "Tô me sentindo irado!"</p>
                  <br />
                  <p><span className="text-blue-300">Inglês:</span> "Let's grab some coffee."</p>
                  <p><span className="text-green-300">Português:</span> "Bora tomar um café."</p>
                </div>
              </div>
              <p className="text-green-100 mt-4">
                Ao ver os exemplos, a IA entende não só que deve traduzir, mas também o <strong className="text-yellow-300">estilo informal</strong> que você deseja. Mágico, não é?
              </p>
            </div>
          </div>

          {/* Markdown */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 border border-blue-600">
            <h2 className="text-3xl font-bold text-blue-300 mb-6">📝 Dando um Toque de Estilo: Markdown nos Prompts</h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              Você já notou como alguns textos na internet têm partes em negrito, itálico, listas e títulos? Isso é o <strong className="text-yellow-300">Markdown</strong>, uma linguagem de marcação simples que ajuda a formatar o texto. E adivinha só? Usar Markdown nos seus prompts pode fazer uma <strong className="text-yellow-300">diferença gigante!</strong>
            </p>

            <div className="bg-blue-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-200 mb-3">🔑 Por que funciona?</h3>
              <p className="text-blue-100">
                As IAs são treinadas com uma quantidade enorme de texto, e muitas vezes esse texto já vem formatado com Markdown. Quando você usa Markdown no seu prompt, é como se você estivesse falando a <strong className="text-yellow-300">língua nativa da IA</strong>, tornando suas instruções mais claras e fáceis de serem interpretadas. É como dar um mapa detalhado em vez de apenas um endereço!
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-300">💡 Dica de Ouro: Use Markdown para:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-800 rounded-lg p-4">
                  <h4 className="font-bold text-blue-200 mb-2">**Destacar informações importantes:**</h4>
                  <p className="text-blue-100">Use `**negrito**` para palavras-chave.</p>
                </div>
                <div className="bg-blue-800 rounded-lg p-4">
                  <h4 className="font-bold text-blue-200 mb-2">Criar listas:</h4>
                  <p className="text-blue-100">Use `-` ou `*` para itens de lista.</p>
                </div>
                <div className="bg-blue-800 rounded-lg p-4">
                  <h4 className="font-bold text-blue-200 mb-2">Definir seções:</h4>
                  <p className="text-blue-100">Use `#` para títulos (`# Título`, `## Subtítulo`).</p>
                </div>
                <div className="bg-blue-800 rounded-lg p-4">
                  <h4 className="font-bold text-blue-200 mb-2">Separar blocos de código:</h4>
                  <p className="text-blue-100">Use três crases (```) para envolver texto ou código.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-blue-300 mb-4">Exemplo com Markdown:</h3>
              <div className="bg-gray-900 rounded p-4 font-mono text-sm">
                <div className="text-gray-200">
                  <p><span className="text-yellow-300">**Tarefa:**</span> Resuma o seguinte texto em três bullet points:</p>
                  <br />
                  <p><span className="text-yellow-300">**Texto:**</span></p>
                  <p>"A Inteligência Artificial (IA) é um campo da ciência da computação..."</p>
                  <br />
                  <p><span className="text-yellow-300">**Formato de Saída:**</span></p>
                  <p>- Ponto 1</p>
                  <p>- Ponto 2</p>
                  <p>- Ponto 3</p>
                </div>
              </div>
              <p className="text-blue-100 mt-4">
                Percebe como o Markdown torna o prompt mais <strong className="text-yellow-300">organizado e legível</strong>? Isso ajuda a IA a processar a informação de forma mais eficiente e a entregar o resultado no formato que você espera. É um truque simples, mas poderoso!
              </p>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts-eficazes/como-criar-prompts"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Como Criar Prompts
          </Link>
          
          <Link
            to="/guias/prompts-eficazes/exemplos-praticos"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Exemplos Práticos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsEficazesTecnicasAvancadas;
