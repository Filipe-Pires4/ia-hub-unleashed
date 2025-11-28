import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar, CheckCircle, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaAquecimentoChipCronograma = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
              Capítulo 2
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cronograma de Aquecimento
          </h1>
          <p className="text-xl text-gray-300">
            O passo a passo completo para aquecer seu chip em 30 dias
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-invert max-w-none">

          {/* Por que isso muda tudo */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Por Que Isso Muda Tudo no Aquecimento?</h2>
            
            <p className="text-gray-300 mb-6">
              Entender que o WhatsApp não lê suas mensagens é libertador porque você percebe que não precisa:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-900/50">
                <p className="text-gray-300">❌ Criar mensagens elaboradas e bem escritas</p>
              </div>
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-900/50">
                <p className="text-gray-300">❌ Pensar em um script perfeito</p>
              </div>
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-900/50">
                <p className="text-gray-300">❌ Se preocupar se a mensagem faz sentido</p>
              </div>
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-900/50">
                <p className="text-gray-300">❌ Escrever textos longos e completos</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4">Você só precisa:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                <p className="text-gray-300">✅ Enviar mensagens (qualquer coisa serve)</p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                <p className="text-gray-300">✅ Criar um padrão de comportamento humano</p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                <p className="text-gray-300">✅ Receber respostas</p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                <p className="text-gray-300">✅ Ter interações reais</p>
              </div>
            </div>
          </div>

          {/* Exemplos práticos */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Como Funciona na Prática: Exemplos Reais</h2>

            <div className="space-y-6">
              <div className="bg-red-900/10 rounded-lg p-5 border border-red-900/30">
                <h3 className="text-lg font-bold text-red-400 mb-3">❌ Aquecimento "Profissional" (Desnecessário)</h3>
                <div className="bg-gray-900 rounded-lg p-4 mb-3">
                  <p className="text-gray-300 italic">"Bom dia! Como está? Espero que esteja tendo um ótimo dia. Gostaria de saber se você tem interesse em conhecer nossos serviços de..."</p>
                </div>
                <p className="text-gray-400 text-sm">
                  <strong>Resultado:</strong> Você gastou 5 minutos escrevendo uma mensagem bonita, mas para o WhatsApp tanto faz. Ele só viu: "1 mensagem enviada às 09:15 para número +5585xxxxx"
                </p>
              </div>

              <div className="bg-green-900/10 rounded-lg p-5 border border-green-900/30">
                <h3 className="text-lg font-bold text-green-400 mb-3">✅ Aquecimento "Simples" (Eficiente)</h3>
                <div className="bg-gray-900 rounded-lg p-4 mb-3 space-y-2">
                  <p className="text-gray-300"><span className="text-purple-400">Você:</span> "oi"</p>
                  <p className="text-gray-300"><span className="text-blue-400">Pessoa:</span> "oi, quem é?"</p>
                  <p className="text-gray-300"><span className="text-purple-400">Você:</span> "👍"</p>
                </div>
                <p className="text-gray-400 text-sm">
                  <strong>Resultado:</strong> O WhatsApp viu: "Mensagem enviada → Resposta recebida em 30 segundos → Nova interação em 2 minutos". Isso é comportamento humano real!
                </p>
              </div>

              <div className="bg-green-900/10 rounded-lg p-5 border border-green-900/30">
                <h3 className="text-lg font-bold text-green-400 mb-3">✅ Aquecimento "Aleatório" (Também Funciona!)</h3>
                <div className="bg-gray-900 rounded-lg p-4 mb-3 space-y-2">
                  <p className="text-gray-300"><span className="text-purple-400">Você:</span> "djkashdjkahsd"</p>
                  <p className="text-gray-300"><span className="text-blue-400">Pessoa no grupo:</span> "kkkk"</p>
                  <p className="text-gray-300"><span className="text-purple-400">Você:</span> [figurinha aleatória]</p>
                </div>
                <p className="text-gray-400 text-sm">
                  <strong>Resultado:</strong> O WhatsApp viu: "Interação → Resposta positiva → Continuação da conversa". Perfeito!
                </p>
              </div>
            </div>
          </div>

          {/* Sinais Positivos e Negativos */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">A Matemática do WhatsApp: Entendendo os Sinais</h2>
            
            <p className="text-gray-300 mb-6">
              O WhatsApp usa algoritmos de machine learning para analisar comportamentos. Funciona mais ou menos assim:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 rounded-lg p-5 border border-green-900/50">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                  <h3 className="text-lg font-bold text-green-400">Sinais POSITIVOS (Score Bom)</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>✅ Taxa de resposta alta</li>
                  <li>✅ Conversas bidirecionais</li>
                  <li>✅ Intervalos irregulares entre mensagens</li>
                  <li>✅ Variedade de horários de uso</li>
                  <li>✅ Mix de texto, áudio, figurinhas</li>
                  <li>✅ Contatos que te adicionam na agenda</li>
                  <li>✅ Tempo variável de digitação</li>
                </ul>
              </div>

              <div className="bg-red-900/20 rounded-lg p-5 border border-red-900/50">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="h-6 w-6 text-red-400" />
                  <h3 className="text-lg font-bold text-red-400">Sinais NEGATIVOS (Score Ruim)</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>❌ Taxa de bloqueio alta</li>
                  <li>❌ Mensagens não lidas em massa</li>
                  <li>❌ Envio em rajadas (100 msg em 2 min)</li>
                  <li>❌ Intervalos exatos entre mensagens</li>
                  <li>❌ Sempre o mesmo tipo de conteúdo</li>
                  <li>❌ Sempre no mesmo horário</li>
                  <li>❌ Muitos números novos de uma vez</li>
                  <li>❌ Reportes de spam</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cronograma Detalhado */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">O Processo Completo: Cronograma de 30 Dias</h2>
            </div>

            <div className="space-y-8">
              {/* Semana 1 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Semana 1: Construindo a Base</h3>
                
                <div className="bg-gray-900 rounded-lg p-5 mb-4">
                  <h4 className="font-bold text-white mb-3">📅 Dias 1-3:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Entre no grupo de aquecimento</li>
                    <li>• Envie 5-10 mensagens por dia (pode ser qualquer coisa)</li>
                    <li>• Exemplos: "oi", "teste", "😊", figurinhas, "alguém aí?"</li>
                    <li>• Responda quando alguém responder você</li>
                    <li>• <strong className="text-red-400">NÃO use automação ainda</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg p-5">
                  <h4 className="font-bold text-white mb-3">📅 Dias 4-7:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Aumente para 15-20 mensagens por dia</li>
                    <li>• Varie os horários (manhã, tarde, noite)</li>
                    <li>• Varie o conteúdo (texto, emoji, figurinha)</li>
                    <li>• Continue respondendo as pessoas</li>
                  </ul>
                </div>
              </div>

              {/* Semana 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Semana 2: Ganhando Confiança</h3>
                
                <div className="bg-gray-900 rounded-lg p-5 mb-4">
                  <h4 className="font-bold text-white mb-3">📅 Dias 8-10:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Aumente para 25-30 mensagens por dia</li>
                    <li>• Comece a adicionar alguns contatos externos (não do grupo)</li>
                    <li>• Teste enviar mensagens para 2-3 clientes reais</li>
                    <li>• Mantenha atividade no grupo</li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg p-5">
                  <h4 className="font-bold text-white mb-3">📅 Dias 11-14:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Aumente para 40-50 mensagens por dia</li>
                    <li>• Misture: 70% grupo de aquecimento + 30% contatos externos</li>
                    <li>• Observe se está recebendo respostas positivas</li>
                  </ul>
                </div>
              </div>

              {/* Semana 3 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Semana 3: Expandindo</h3>
                
                <div className="bg-gray-900 rounded-lg p-5">
                  <h4 className="font-bold text-white mb-3">📅 Dias 15-21:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Aumente para 60-80 mensagens por dia</li>
                    <li>• Agora pode ser: 50% grupo + 50% contatos externos</li>
                    <li>• Comece a testar pequenas listas (10-15 pessoas)</li>
                    <li>• Monitore bloqueios e reportes (deve ser zero ou quase zero)</li>
                  </ul>
                </div>
              </div>

              {/* Semana 4 */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Semana 4: Quase Lá</h3>
                
                <div className="bg-gray-900 rounded-lg p-5">
                  <h4 className="font-bold text-white mb-3">📅 Dias 22-30:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Aumente para 80-120 mensagens por dia</li>
                    <li>• Vá reduzindo o grupo gradualmente</li>
                    <li>• Foque mais nos seus contatos reais</li>
                    <li>• Teste campanhas pequenas (20-30 pessoas)</li>
                  </ul>
                </div>
              </div>

              {/* Após 30 dias */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">🎉 Após 30 Dias: Operação Normal</h3>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-5 border border-purple-500/50">
                  <p className="text-gray-300 mb-4">Agora seu chip está "maduro" e você pode:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>✅ Usar automações mais pesadas</li>
                    <li>✅ Enviar listas maiores (100-200 por dia)</li>
                    <li>✅ Implementar seus workflows no n8n</li>
                    <li>✅ Rodar suas campanhas de WhatsApp</li>
                  </ul>
                  <p className="text-yellow-400 mt-4 font-semibold">
                    ⚠️ MAS ATENÇÃO: Continue monitorando os sinais!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoramento */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Monitoramento: Como Saber Se Está Funcionando</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 rounded-lg p-5 border border-green-900/50">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-lg font-bold text-green-400">Sinais de Que Está Indo Bem</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>✅ Taxa de entrega acima de 90%</li>
                  <li>✅ Taxa de leitura acima de 60%</li>
                  <li>✅ Taxa de resposta acima de 20%</li>
                  <li>✅ Zero ou quase zero bloqueios</li>
                  <li>✅ Zero reportes de spam</li>
                  <li>✅ Mensagens chegando normalmente</li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 rounded-lg p-5 border border-yellow-900/50">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-lg font-bold text-yellow-400">Sinais de Alerta</h3>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>⚠️ Mensagens demorando para serem entregues</li>
                  <li>⚠️ Muitas mensagens não chegando</li>
                  <li>⚠️ Taxa de bloqueio acima de 5%</li>
                  <li>⚠️ Qualquer reporte de spam</li>
                  <li>⚠️ Pessoas reclamando que não receberam</li>
                </ul>
                <p className="text-yellow-400 mt-4 text-sm font-semibold">
                  Se você ver sinais de alerta, PAUSE TUDO e volte para o grupo de aquecimento por mais 1-2 semanas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/aquecimento-chip/criptografia"
            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior: Criptografia
          </Link>
          <Link
            to="/guias/aquecimento-chip/apis"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: APIs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaAquecimentoChipCronograma;
