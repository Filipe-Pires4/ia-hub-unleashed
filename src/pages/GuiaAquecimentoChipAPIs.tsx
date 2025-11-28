import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Smartphone, Users, Code, Shield, Zap, Server } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaAquecimentoChipAPIs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
              Capítulo 3
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            APIs e Boas Práticas
          </h1>
          <p className="text-xl text-gray-300">
            Como usar Evolution API, Baileys e outras ferramentas de forma segura
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-invert max-w-none">

          {/* Por que o grupo funciona */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">O Grupo de Aquecimento: Por Que Funciona Tão Bem?</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Agora você entende por que um grupo de aquecimento é a solução perfeita:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">1. Interações Reais</h4>
                <p className="text-gray-300 text-sm">
                  Quando você manda qualquer mensagem no grupo (até "teste"), pessoas reais respondem. O WhatsApp vê: "interação genuína".
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">2. Resposta Rápida</h4>
                <p className="text-gray-300 text-sm">
                  Diferente de mandar para clientes (que podem demorar horas ou nunca responder), no grupo alguém sempre responde rápido.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">3. Padrão Natural</h4>
                <p className="text-gray-300 text-sm">
                  Você não precisa planejar. Só entra no grupo, manda algumas mensagens por dia, recebe respostas, e pronto.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-2">4. Variedade de Conteúdo</h4>
                <p className="text-gray-300 text-sm">
                  Um manda texto, outro figurinha, outro emoji, outro áudio... Tudo isso varia o seu perfil de uso.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5 md:col-span-2">
                <h4 className="font-bold text-purple-400 mb-2">5. Zero Risco</h4>
                <p className="text-gray-300 text-sm">
                  Ninguém no grupo vai te bloquear ou reportar spam, porque todo mundo está lá com o mesmo objetivo.
                </p>
              </div>
            </div>
          </div>

          {/* Sobre APIs */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Sobre APIs para WhatsApp</h2>
            </div>

            <p className="text-gray-300 mb-6">
              No mercado brasileiro, a maioria das automações utiliza APIs não oficiais como Evolution API, Baileys, WPPConnect, entre outras. Essas soluções são populares porque:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                <p className="text-gray-300">✅ São mais acessíveis financeiramente</p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                <p className="text-gray-300">✅ Mais flexíveis para diferentes necessidades</p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                <p className="text-gray-300">✅ Permitem maior controle sobre as automações</p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/50">
                <p className="text-gray-300">✅ Têm comunidades ativas de suporte</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/50">
              <p className="text-lg text-center text-gray-200">
                💡 <strong className="text-white">O segredo não está em qual API você usa, mas em COMO você usa.</strong>
              </p>
            </div>
          </div>

          {/* Cuidados com APIs não oficiais */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Aquecimento com APIs Não Oficiais: Cuidados Extras</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Se você está usando Evolution API, Baileys, WPPConnect ou similar, precisa de alguns cuidados adicionais:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-4">1. Configuração da Instância</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Configure delays realistas entre mensagens (mínimo 3-5 segundos)</li>
                  <li>• Use user-agent atualizado do navegador</li>
                  <li>• Mantenha a sessão sempre conectada (evite reconexões constantes)</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-4">2. Comportamento Mais Humano</h3>
                <p className="text-gray-300 mb-3">Com APIs não oficiais, é ainda mais importante parecer humano:</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Varie os intervalos entre mensagens (use delays randômicos)</li>
                  <li>• Simule "digitando..." antes de enviar</li>
                  <li>• Não envie mensagens exatamente no mesmo segundo todos os dias</li>
                  <li>• Adicione variações de horário</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-4">3. Gerenciamento de Sessão</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Evite logar e deslogar constantemente</li>
                  <li>• Mantenha a mesma sessão ativa por longos períodos</li>
                  <li>• Faça backup do QR code / sessão regularmente</li>
                  <li>• Se precisar reconectar, espere algumas horas antes de enviar mensagens</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-4">4. Monitoramento Específico</h3>
                <p className="text-gray-300 mb-3">Fique atento a esses sinais com APIs não oficiais:</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-yellow-400">Desconexões frequentes</strong> - Pode indicar que está sendo detectado</li>
                  <li>• <strong className="text-yellow-400">"Checking phone" constante</strong> - Sinal de alerta</li>
                  <li>• <strong className="text-yellow-400">Sessão sendo invalidada</strong> - Você está sob suspeita</li>
                  <li>• <strong className="text-yellow-400">Mensagens não entregando (cinza)</strong> - Possível shadow ban</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Boas práticas de código */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Boas Práticas de Código</h2>
            </div>

            <p className="text-gray-300 mb-6">Se você desenvolve as automações:</p>

            <div className="bg-gray-900 rounded-lg p-5 mb-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`// ✅ Bom: Delay randômico
await delay(Math.random() * (5000 - 3000) + 3000);

// ❌ Ruim: Delay fixo
await delay(3000);`}
              </pre>
            </div>

            <ul className="text-gray-300 space-y-2">
              <li>• Implemente retry com backoff exponencial</li>
              <li>• Trate erros de forma adequada</li>
              <li>• Não force reconexão agressivamente</li>
              <li>• Respeite rate limits</li>
            </ul>
          </div>

          {/* Estrutura Recomendada */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Estrutura Recomendada</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-5">
                <p className="text-gray-300">
                  <strong className="text-white">1 instância = 1 chip = 1 projeto</strong><br />
                  <span className="text-sm text-gray-400">(não misture)</span>
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-5">
                <p className="text-gray-300">
                  <strong className="text-white">Use proxy residencial se possível</strong><br />
                  <span className="text-sm text-gray-400">(mais natural)</span>
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-5">
                <p className="text-gray-300">
                  <strong className="text-white">Rode em servidores com boa reputação</strong>
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-5">
                <p className="text-gray-300">
                  <strong className="text-white">Evite VPS muito baratos</strong><br />
                  <span className="text-sm text-gray-400">(IPs queimados)</span>
                </p>
              </div>
            </div>

            <div className="bg-yellow-900/20 rounded-lg p-5 border border-yellow-900/50 mt-6">
              <p className="text-gray-300">
                <strong className="text-yellow-400">⚠️ Lembre-se:</strong> APIs não oficiais funcionam muito bem no mercado brasileiro, mas exigem mais atenção aos detalhes técnicos. O aquecimento correto é seu maior aliado para longevidade do número.
              </p>
            </div>
          </div>

          {/* Estratégias Avançadas */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Estratégias Avançadas de Aquecimento</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-5">
                <h3 className="text-lg font-bold text-purple-400 mb-3">1. Uso de Múltiplas Personas</h3>
                <p className="text-gray-300 mb-3">No grupo de aquecimento, você pode:</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Às vezes ser formal: "Bom dia, grupo!"</li>
                  <li>• Às vezes ser informal: "e aí galera"</li>
                  <li>• Às vezes só reagir: "kkkkk"</li>
                  <li>• Às vezes só observar</li>
                </ul>
                <p className="text-gray-400 text-sm mt-3">Isso cria um perfil mais "humano" e natural.</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h3 className="text-lg font-bold text-purple-400 mb-3">2. Técnica do Espelhamento</h3>
                <p className="text-gray-300 mb-3">Observe como os outros estão conversando e faça parecido:</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Se alguém mandou figurinha → Você manda figurinha</li>
                  <li>• Se alguém mandou áudio → Você pode mandar áudio</li>
                  <li>• Se alguém está perguntando algo → Você responde</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h3 className="text-lg font-bold text-purple-400 mb-3">3. Janelas de Atividade</h3>
                <p className="text-gray-300 mb-3">Em vez de ficar o dia todo online, crie "janelas":</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• 09:00 - 09:30 → Online e ativo</li>
                  <li>• 10:00 - 17:00 → Offline</li>
                  <li>• 18:00 - 19:00 → Online e ativo</li>
                  <li>• 19:00 - 08:00 → Offline</li>
                </ul>
                <p className="text-gray-400 text-sm mt-3">Isso simula uma pessoa real com rotina.</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h3 className="text-lg font-bold text-purple-400 mb-3">4. Mix de Velocidades</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Às vezes responde em 10 segundos</li>
                  <li>• Às vezes demora 2 minutos</li>
                  <li>• Às vezes demora 1 hora</li>
                  <li>• Às vezes não responde</li>
                </ul>
                <p className="text-gray-400 text-sm mt-3">
                  <strong>Humanos são inconsistentes. Robôs são consistentes.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/aquecimento-chip/cronograma"
            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior: Cronograma
          </Link>
          <Link
            to="/guias/aquecimento-chip/erros"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Erros Fatais
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaAquecimentoChipAPIs;
