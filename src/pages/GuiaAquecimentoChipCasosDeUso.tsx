import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle, Briefcase, HelpCircle, Workflow, Users } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaAquecimentoChipCasosDeUso = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
              Capítulo 5
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Casos de Uso e FAQ
          </h1>
          <p className="text-xl text-gray-300">
            Exemplos reais, integração com n8n e respostas para dúvidas comuns
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-invert max-w-none">

          {/* Casos de Uso Reais */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Casos de Uso Reais</h2>
            </div>

            <div className="space-y-8">
              {/* Caso 1 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Caso 1: Clínica Odontológica</h3>
                <p className="text-gray-300 mb-4">
                  Uma clínica nos procurou querendo fazer campanhas de reativação de pacientes inativos (1.200 contatos).
                </p>
                
                <div className="bg-red-900/20 rounded-lg p-4 mb-4 border border-red-900/50">
                  <h4 className="font-bold text-red-400 mb-2">❌ Erro que eles cometeram:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Compraram um chip novo</li>
                    <li>• No mesmo dia tentaram enviar para os 1.200</li>
                    <li>• Levaram ban em 50 mensagens</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                  <h4 className="font-bold text-green-400 mb-2">✅ Como consertamos:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Novo chip</li>
                    <li>• 30 dias de aquecimento no grupo</li>
                    <li>• Teste com 10 pacientes → 50 pacientes → 200 pacientes</li>
                    <li>• Depois de 45 dias: campanha completa com sucesso</li>
                    <li>• Taxa de entrega: <strong className="text-green-400">94%</strong></li>
                    <li>• Taxa de resposta: <strong className="text-green-400">31%</strong></li>
                  </ul>
                </div>
              </div>

              {/* Caso 2 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Caso 2: Lançamento de PLR</h3>
                <p className="text-gray-300 mb-4">
                  Cliente com infoproduto queria enviar para lista fria de 5.000 contatos.
                </p>
                
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-900/50">
                  <h4 className="font-bold text-blue-400 mb-2">📋 Estratégia usada:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 3 chips diferentes aquecidos simultaneamente</li>
                    <li>• 40 dias de aquecimento em cada</li>
                    <li>• Divisão da lista: 1.666 contatos por chip</li>
                    <li>• Envio em 3 dias (não tudo de uma vez)</li>
                    <li>• Taxa de entrega: <strong className="text-green-400">89%</strong></li>
                    <li>• Conversão: <strong className="text-green-400">2.3% (115 vendas)</strong></li>
                  </ul>
                </div>
              </div>

              {/* Caso 3 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Caso 3: Marketing de Agência</h3>
                <p className="text-gray-300 mb-4">
                  Agência que queria oferecer "disparo em massa" para clientes.
                </p>
                
                <div className="bg-red-900/20 rounded-lg p-4 mb-4 border border-red-900/50">
                  <h4 className="font-bold text-red-400 mb-2">❌ Problema:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Queriam usar apenas 1 chip para tudo</li>
                    <li>• Ficava alternando entre clientes diferentes</li>
                    <li>• Padrões muito erráticos</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                  <h4 className="font-bold text-green-400 mb-2">✅ Solução:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 1 chip dedicado por cliente</li>
                    <li>• Aquecimento individual de cada chip</li>
                    <li>• Cada chip com sua "personalidade" de envio</li>
                    <li>• Resultado: <strong className="text-green-400">Zero bans em 6 meses</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Integração com n8n */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Workflow className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Integração Com n8n (Após o Aquecimento)</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Depois que seu chip estiver aquecido, aí sim você pode usar o n8n para automatizar. Algumas boas práticas:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">1. Delay Entre Envios</h4>
                <p className="text-gray-300 text-sm">
                  Adicione um delay aleatório entre 30s e 2min. Nunca envie tudo instantaneamente.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">2. Horário Comercial</h4>
                <p className="text-gray-300 text-sm">
                  Configure para enviar apenas das 9h às 18h. Evite finais de semana e feriados (ou reduza muito).
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">3. Limite Diário</h4>
                <p className="text-gray-300 text-sm">
                  Defina um limite máximo por dia. Exemplo: 200 mensagens/dia no máximo.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">4. Validação de Número</h4>
                <p className="text-gray-300 text-sm">
                  Verifique se o número está formatado correto. Evite enviar para números inválidos.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">5. Registro de Interações</h4>
                <p className="text-gray-300 text-sm">
                  Guarde em banco de dados quem respondeu, quem bloqueou e quem está ativo.
                </p>
              </div>
            </div>
          </div>

          {/* Grupo de Aquecimento */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Seu Grupo de Aquecimento: Como Funciona</h2>
            </div>

            <p className="text-gray-300 mb-6">
              No nosso grupo gratuito de aquecimento, o processo é simples:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-3">📥 Como Entrar</h4>
                <ol className="text-gray-300 space-y-2 text-sm list-decimal list-inside">
                  <li>Entre em contato com a JAIFI</li>
                  <li>Informamos o link do grupo</li>
                  <li>Você entra com o chip que quer aquecer</li>
                </ol>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-3">📱 O Que Fazer no Grupo</h4>
                <ol className="text-gray-300 space-y-2 text-sm list-decimal list-inside">
                  <li>Todos os dias, envie 5-10 mensagens (pode ser qualquer coisa)</li>
                  <li>Responda quando alguém responder você</li>
                  <li>Seja ativo (mas não precisa ficar o dia todo lá)</li>
                  <li>Varie o conteúdo: texto, emoji, figurinha, áudio</li>
                </ol>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-3">📋 Regras do Grupo</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Não fazer spam de serviços ou produtos</li>
                  <li>• Não adicionar outros números sem permissão</li>
                  <li>• Respeitar todo mundo</li>
                  <li>• Ajudar os outros no processo</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-3">⏰ Quanto Tempo Ficar</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Mínimo 15 dias</li>
                  <li>• Ideal 30 dias</li>
                  <li>• Você pode ficar quanto tempo quiser</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Perguntas Frequentes (FAQ)</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: Posso aquecer vários chips ao mesmo tempo?</h4>
                <p className="text-gray-300 text-sm">
                  R: Sim! Mas use um telefone diferente para cada chip ou use WhatsApp Web em navegadores diferentes.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: Posso usar WhatsApp GB ou outras versões modificadas?</h4>
                <p className="text-gray-300 text-sm">
                  R: A maioria das automações no mercado usa APIs não oficiais (como Evolution API, Baileys, etc) que funcionam bem quando usadas corretamente. O mais importante é seguir as boas práticas de aquecimento e envio. Evite comportamentos suspeitos independente da solução que escolher.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: Qual API devo escolher?</h4>
                <p className="text-gray-300 text-sm">
                  R: No Brasil, Evolution API, Baileys e WPPConnect são as mais usadas. A Evolution API é popular por ser mais estável e ter boa documentação. O importante não é qual você escolhe, mas como você configura e usa. Todas precisam de aquecimento correto e boas práticas de envio.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: API não oficial tem mais risco de ban?</h4>
                <p className="text-gray-300 text-sm">
                  R: O risco não está na API em si, mas no COMPORTAMENTO. Você pode ser banido usando API oficial se enviar spam, e pode durar anos com API não oficial se seguir as boas práticas. O aquecimento correto e os padrões de envio são mais importantes que o tipo de API.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: E se eu já tomei ban antes nesse número?</h4>
                <p className="text-gray-300 text-sm">
                  R: O número fica "marcado". É melhor pegar um número totalmente novo.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: Preciso pagar alguma coisa?</h4>
                <p className="text-gray-300 text-sm">
                  R: Nosso grupo de aquecimento é gratuito. Você só precisa ter o chip/número.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: Funciona com WhatsApp pessoal ou só Business?</h4>
                <p className="text-gray-300 text-sm">
                  R: Funciona com os dois, mas Business é melhor para usar com automações depois.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: Quantas mensagens posso enviar depois do aquecimento?</h4>
                <p className="text-gray-300 text-sm">
                  R: Depende de como foi o aquecimento, mas geralmente de 200-500 por dia é seguro.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: E se eu ficar alguns dias sem usar o número?</h4>
                <p className="text-gray-300 text-sm">
                  R: Sem problema, mas quando voltar, comece devagar de novo.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: O aquecimento vale para sempre?</h4>
                <p className="text-gray-300 text-sm">
                  R: Mais ou menos. Se você parar de usar por muito tempo (meses), pode precisar "reaquecer".
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">P: Posso automatizar o aquecimento?</h4>
                <p className="text-gray-300 text-sm">
                  R: Tecnicamente sim, mas não recomendamos. O risco de errar o padrão e ser detectado é alto.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Entre No Nosso Grupo de Aquecimento</h2>
            <p className="text-purple-100 mb-6 text-center">
              Não arrisque seu número. Não perca tempo tentando fazer sozinho.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white text-sm">✅ Comunidade ativa para trocar mensagens</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white text-sm">✅ Respostas rápidas para simular interações reais</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white text-sm">✅ Suporte da JAIFI para tirar dúvidas</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white text-sm">✅ Ambiente seguro (ninguém vai te reportar)</p>
              </div>
            </div>

            <p className="text-center text-white font-semibold mb-4">
              Fale com a JAIFI e solicite entrada no grupo de aquecimento!
            </p>
            
            <p className="text-center text-purple-200 text-sm">
              Especialistas em Automação de Processos e WhatsApp Business API, ajudamos empresas a estruturarem suas campanhas com segurança, evitando banimentos e maximizando resultados.
            </p>
          </div>

          {/* Destaque Final */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/50">
            <p className="text-xl text-center text-gray-200">
              🔐 <strong className="text-white">Lembre-se sempre:</strong><br />
              O WhatsApp protege sua privacidade através da criptografia de ponta a ponta. Ele não lê suas mensagens, mas monitora seu comportamento. Use isso a seu favor no aquecimento!
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/aquecimento-chip/erros"
            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior: Erros Fatais
          </Link>
          <Link
            to="/guias/aquecimento-chip"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voltar ao Índice
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaAquecimentoChipCasosDeUso;
