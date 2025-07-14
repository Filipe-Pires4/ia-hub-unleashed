
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaHumanizacaoAgentesDicas = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Zap className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Dicas Ninjas para Injetar Alma em Seus Agentes</h1>
          </div>
          <p className="text-xl text-gray-300">
            Segredos que ninguém te contou
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-2xl font-bold text-white mb-4">🥷 Segredos dos Mestres</h2>
            <p className="text-purple-100 leading-relaxed">
              Estas são as técnicas avançadas que separam agentes comuns de verdadeiros <strong>especialistas em conexão humana</strong>. Cada dica foi testada e refinada na prática real de atendimento.
            </p>
          </div>

          {/* O Dilema do Emoji */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">😊 O Dilema do Emoji: Menos é Mais, Mas o Contexto é Tudo</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-900 p-6 rounded-lg border border-red-600">
                <h3 className="text-lg font-bold text-red-300 mb-3">❌ Ausência Total</h3>
                <p className="text-red-100 text-sm">Torna a conversa formal e distante, perdendo oportunidades de conexão emocional.</p>
              </div>
              
              <div className="bg-red-900 p-6 rounded-lg border border-red-600">
                <h3 className="text-lg font-bold text-red-300 mb-3">❌ Uso Excessivo</h3>
                <p className="text-red-100 text-sm">Pode parecer forçado e não profissional, quebrando a credibilidade.</p>
              </div>
            </div>

            <div className="bg-green-900 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">✅ O Segredo:</h3>
              <p className="text-green-100 leading-relaxed">
                Entenda o <strong>contexto emocional</strong> da conversa. Use emojis para validar sentimentos (um 👍 para um "ok", um 🙂 para uma saudação), mas evite-os em momentos de frustração ou seriedade.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-yellow-300 mb-3">🎯 Regra de Ouro:</h3>
              <p className="text-gray-300">
                Pense no emoji como um <strong>"tom de voz"</strong> digital. Ele deve amplificar a emoção apropriada, não competir com ela.
              </p>
            </div>
          </div>

          {/* A Arte da Quebra de Linha */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">📱 A Arte da Quebra de Linha: Criando um Diálogo, Não um Monólogo</h2>
            
            <div className="space-y-6 mb-6">
              <div className="bg-red-900 p-6 rounded-lg border border-red-600">
                <h3 className="text-lg font-bold text-red-300 mb-3">❌ Problema Comum:</h3>
                <p className="text-red-100 mb-3">Mensagens muito longas, enviadas de uma vez, remetem a textos pré-definidos.</p>
                <div className="bg-red-800 p-4 rounded text-sm text-red-100">
                  "Nosso curso de Marketing Digital está disponível e aborda estratégias avançadas de SEO, Google Ads, Facebook Ads, Email Marketing e Analytics. Os horários são de segunda a sexta das 19h às 22h ou aos sábados das 8h às 17h. O investimento é de R$ 1.200 parcelado em até 12x sem juros."
                </div>
              </div>

              <div className="bg-green-900 p-6 rounded-lg border border-green-600">
                <h3 className="text-lg font-bold text-green-300 mb-3">✅ Versão Humanizada:</h3>
                <div className="space-y-2 text-sm text-green-100">
                  <div className="bg-green-800 p-3 rounded">"O curso de Marketing Digital está disponível! 🚀"</div>
                  <div className="text-gray-400 text-xs">*pausa simulada*</div>
                  <div className="bg-green-800 p-3 rounded">"Ele aborda SEO, Google Ads, Facebook Ads e muito mais"</div>
                  <div className="text-gray-400 text-xs">*pausa simulada*</div>
                  <div className="bg-green-800 p-3 rounded">"Os horários são de segunda a sexta das 19h às 22h ou aos sábados das 8h às 17h"</div>
                  <div className="text-gray-400 text-xs">*pausa simulada*</div>
                  <div className="bg-green-800 p-3 rounded">"Que tal conversarmos sobre qual horário funcionaria melhor para você?"</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-300 mb-3">💡 Resultado:</h3>
              <p className="text-gray-300">
                Isso cria um <strong>fluxo mais conversacional</strong> e simula a digitação humana natural, mantendo o cliente engajado durante toda a explicação.
              </p>
            </div>
          </div>

          {/* Preveja o Cansaço do Cliente */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">😴 Preveja o "Cansaço do Cliente": Ofereça Saídas Humanas</h2>
            
            <div className="bg-yellow-900 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
              <h3 className="text-lg font-bold text-yellow-300 mb-3">🚨 Sinais de Alerta:</h3>
              <ul className="list-disc list-inside text-yellow-100 space-y-2">
                <li>Muitas perguntas repetidas</li>
                <li>Silêncio prolongado</li>
                <li>Respostas monossilábicas</li>
                <li>Mensagens de confusão</li>
              </ul>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-green-300 mb-3">💬 Saídas Humanas Eficazes:</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="bg-gray-600 p-3 rounded">"Se preferir, posso pedir para um consultor te ligar agora, o que acha?"</div>
                  <div className="bg-gray-600 p-3 rounded">"Percebo que a informação está um pouco dispersa. Gostaria de um resumo rápido?"</div>
                  <div className="bg-gray-600 p-3 rounded">"Que tal agendarmos uma conversa rápida por telefone? Às vezes é mais fácil esclarecer as dúvidas assim 😊"</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-300 mb-3">🎯 Benefício:</h3>
              <p className="text-gray-300">
                Demonstra preocupação com a experiência do cliente, não apenas com a conclusão do fluxo. Isso <strong>reduz abandono</strong> e aumenta a satisfação.
              </p>
            </div>
          </div>

          {/* A Voz no Texto */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">🗣️ A Voz no Texto: Desenvolva uma "Personalidade" para o Agente</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Assim como um atendente humano tem um sotaque ou um jeito de falar, seu agente pode ter uma <strong className="text-purple-300">"voz" textual</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-900 p-6 rounded-lg border border-blue-600">
                <h3 className="text-lg font-bold text-blue-300 mb-3">🎩 Formal & Profissional</h3>
                <div className="text-sm text-blue-100 space-y-2">
                  <p><strong>Tom:</strong> Respeitoso, técnico</p>
                  <p><strong>Exemplo:</strong> "Será um prazer auxiliá-lo com essa questão."</p>
                </div>
              </div>
              
              <div className="bg-green-900 p-6 rounded-lg border border-green-600">
                <h3 className="text-lg font-bold text-green-300 mb-3">😊 Amigável & Próximo</h3>
                <div className="text-sm text-green-100 space-y-2">
                  <p><strong>Tom:</strong> Caloroso, acessível</p>
                  <p><strong>Exemplo:</strong> "Fico feliz em te ajudar com isso!"</p>
                </div>
              </div>
              
              <div className="bg-orange-900 p-6 rounded-lg border border-orange-600">
                <h3 className="text-lg font-bold text-orange-300 mb-3">🚀 Moderno & Dinâmico</h3>
                <div className="text-sm text-orange-100 space-y-2">
                  <p><strong>Tom:</strong> Energia, inovação</p>
                  <p><strong>Exemplo:</strong> "Bora resolver isso juntos!"</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-yellow-300 mb-3">⚡ Implementação:</h3>
              <p className="text-gray-300">
                Defina essa personalidade e seja <strong>consistente</strong>. Isso cria reconhecimento e uma sensação de familiaridade, como se o cliente estivesse conversando sempre com a mesma "pessoa" digital.
              </p>
            </div>
          </div>

          {/* Resumo das Dicas Ninjas */}
          <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl p-8 border border-orange-600">
            <h2 className="text-2xl font-bold text-orange-300 mb-6">🎯 Checklist Ninja Final</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-orange-100">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">Emoji contextual, não excessivo</span>
                </div>
                <div className="flex items-center text-orange-100">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">Mensagens quebradas em blocos</span>
                </div>
                <div className="flex items-center text-orange-100">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">Saídas para cliente cansado</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-orange-100">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">Personalidade consistente</span>
                </div>
                <div className="flex items-center text-orange-100">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">Pausas estratégicas programadas</span>
                </div>
                <div className="flex items-center text-orange-100">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">Validação de sentimentos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/humanizacao-agentes/micromomentos"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Micromomentos
          </Link>
          
          <Link
            to="/guias/humanizacao-agentes/pratica"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Seção Prática
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaHumanizacaoAgentesDicas;
