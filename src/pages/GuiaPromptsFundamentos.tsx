
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ArrowLeft, Target, Lightbulb, CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsFundamentos = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Como Criar um Bom Prompt</h1>
          </div>
          <p className="text-xl text-gray-300">
            Aprenda os fundamentos para criar prompts eficazes usando métodos comprovados e técnicas avançadas.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <p className="text-lg leading-relaxed text-gray-300">
              Criar um bom prompt para o Lovable é uma arte que combina clareza, especificidade e contexto. Para maximizar a eficácia de suas interações, considere os seguintes princípios:
            </p>
          </div>

          {/* Método P.A.C.E.R. */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-purple-300">Acrônimo P.A.C.E.R.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">🎭 Papel</h3>
                  <p className="text-gray-300">Defina claramente o papel que a IA deve assumir.</p>
                  <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                    <code className="text-purple-300">"Atue como um arquiteto de software sênior..."</code>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">⚡ Ação</h3>
                  <p className="text-gray-300">Especifique a tarefa a ser realizada.</p>
                  <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                    <code className="text-purple-300">"...projete e implemente um sistema de reserva..."</code>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">🌍 Contexto</h3>
                  <p className="text-gray-300">Forneça informações relevantes e o cenário.</p>
                  <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                    <code className="text-purple-300">"...para eventos de grande escala..."</code>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">📋 Estrutura</h3>
                  <p className="text-gray-300">Indique o formato de saída desejado.</p>
                  <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                    <code className="text-purple-300">"...apresente em diagrama Mermaid..."</code>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🚫 Restrições</h3>
                <p className="text-gray-300">Defina limites ou requisitos específicos.</p>
                <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                  <code className="text-purple-300">"...garantindo alta disponibilidade e baixa latência."</code>
                </div>
              </div>
            </div>
          </div>

          {/* Método 80/20 */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Método 80/20 na Criação de Prompts</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Concentre <strong className="text-green-400">80%</strong> do seu esforço em definir claramente o objetivo e o contexto, e <strong className="text-green-400">20%</strong> em refinar a linguagem e adicionar detalhes específicos. Um prompt bem estruturado economiza tempo e melhora a qualidade das respostas.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Bullet Points para Clareza</h2>
            <p className="text-gray-300 mb-6">
              Para garantir que seu prompt seja claro e completo, utilize bullet points para:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Listar Requisitos:</strong>
                    <span className="text-gray-300"> Enumere todas as funcionalidades esperadas</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Definir Etapas:</strong>
                    <span className="text-gray-300"> Descreva cada passo do processo</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Especificar Formatos:</strong>
                    <span className="text-gray-300"> Indique formato de saída desejado</span>
                  </div>
                </li>
              </ul>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Separar Informações:</strong>
                    <span className="text-gray-300"> Organize informações complexas</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Destacar Prioridades:</strong>
                    <span className="text-gray-300"> Marque elementos mais importantes</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Dica Ninja */}
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-6 w-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-yellow-300">Dica Ninja</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🔄 Iteração é Chave</h3>
                <p className="text-gray-300">Não espere o prompt perfeito na primeira tentativa. Comece com um prompt básico e refine-o iterativamente com base nos resultados.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">💡 Use Exemplos (Few-shot)</h3>
                <p className="text-gray-300">Para tarefas complexas, forneça 1-2 exemplos de entrada/saída no prompt. Isso ajuda a IA a entender melhor o padrão desejado.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🎯 Seja Explícito sobre o Público-Alvo</h3>
                <p className="text-gray-300">Mencione se o resultado é para público técnico ou leigo. Ex: "Explique em termos leigos..." ou "Use terminologia técnica..."</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">📏 Defina Limites de Saída</h3>
                <p className="text-gray-300">Especifique o tamanho da resposta. Ex: "Responda em no máximo 200 palavras" ou "Liste 5 pontos principais."</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">❓ Peça para a IA Fazer Perguntas</h3>
                <p className="text-gray-300">Inclua "Se precisar de mais informações, faça perguntas." Isso permite esclarecimentos e evita suposições incorretas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Índice
          </Link>
          
          <Link
            to="/guias/prompts/saas"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Prompts de SaaS
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsFundamentos;
