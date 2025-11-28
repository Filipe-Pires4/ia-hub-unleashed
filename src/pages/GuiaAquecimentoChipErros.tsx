import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertTriangle, XCircle, RefreshCw, Shield } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaAquecimentoChipErros = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
              Capítulo 4
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Erros Fatais e Recuperação
          </h1>
          <p className="text-xl text-gray-300">
            Os erros que destroem seu chip e como se recuperar de um ban
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-invert max-w-none">

          {/* Erros Fatais */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="h-8 w-8 text-red-400" />
              <h2 className="text-2xl font-bold m-0">Erros Fatais Que Destroem o Aquecimento</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Atenção redobrada para NÃO fazer isso:
            </p>

            <div className="space-y-4">
              <div className="bg-red-900/20 rounded-lg p-5 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-2">🚫 Erro #1: Usar Automação Logo de Cara</h3>
                <p className="text-gray-300">
                  Mesmo que você tenha um n8n super configurado, <strong>NÃO USE</strong> nos primeiros 15 dias. Faça manual.
                </p>
              </div>

              <div className="bg-red-900/20 rounded-lg p-5 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-2">🚫 Erro #2: Copiar e Colar a Mesma Mensagem</h3>
                <p className="text-gray-300">
                  Mesmo que o conteúdo não importe para o WhatsApp ver, o PADRÃO de envio sim. Se você copia e cola, envia muito rápido e de forma idêntica.
                </p>
              </div>

              <div className="bg-red-900/20 rounded-lg p-5 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-2">🚫 Erro #3: Adicionar Muita Gente em Grupos</h3>
                <p className="text-gray-300">
                  Isso é o erro mais comum. Criar um grupo e adicionar 50 pessoas de uma vez = BAN quase certeiro.
                </p>
              </div>

              <div className="bg-red-900/20 rounded-lg p-5 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-2">🚫 Erro #4: Não Seguir as Boas Práticas da API</h3>
                <p className="text-gray-300">
                  Existem diferentes tipos de APIs para WhatsApp (oficiais e não oficiais). A maioria das pessoas usa APIs não oficiais por serem mais acessíveis e flexíveis. O importante é seguir as boas práticas de uso, independente da API escolhida: respeitar limites de envio, fazer aquecimento correto e monitorar constantemente os sinais de alerta.
                </p>
              </div>

              <div className="bg-red-900/20 rounded-lg p-5 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-2">🚫 Erro #5: Ignorar os Sinais</h3>
                <p className="text-gray-300">
                  Se você começar a ser bloqueado ou reportado, PARE IMEDIATAMENTE. Não insista.
                </p>
              </div>

              <div className="bg-red-900/20 rounded-lg p-5 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-2">🚫 Erro #6: Não Atualizar o Perfil</h3>
                <p className="text-gray-300">
                  Um número sem foto, sem nome, sem status parece mais suspeito. Configure tudo.
                </p>
              </div>

              <div className="bg-red-900/20 rounded-lg p-5 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-2">🚫 Erro #7: Usar Números Virtuais Baratos</h3>
                <p className="text-gray-300">
                  Alguns serviços oferecem números virtuais muito baratos. Muitos já estão "queimados" no WhatsApp. Prefira chips físicos reais.
                </p>
              </div>
            </div>
          </div>

          {/* Recuperação */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Recuperação: O Que Fazer Se Levar Ban</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Se você acabou levando ban, calma. Vamos resolver:
            </p>

            <div className="space-y-6">
              <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-900/50">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">⏰ Ban Temporário (24-72 horas)</h3>
                <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                  <li>Aguarde o tempo do ban passar</li>
                  <li>Quando voltar, NÃO envie mensagens em massa</li>
                  <li>Volte ao aquecimento do zero</li>
                  <li>Seja ainda mais cuidadoso dessa vez</li>
                </ol>
              </div>

              <div className="bg-red-900/20 rounded-lg p-6 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-3">❌ Ban Permanente</h3>
                <p className="text-gray-300">
                  Infelizmente, número perdido. Você vai precisar de um novo chip e começar do zero. Por isso o aquecimento é tão importante!
                </p>
              </div>

              <div className="bg-orange-900/20 rounded-lg p-6 border border-orange-900/50">
                <h3 className="text-lg font-bold text-orange-400 mb-3">⚠️ "Aviso" do WhatsApp</h3>
                <p className="text-gray-300">
                  Se você receber uma mensagem do WhatsApp dizendo que seu comportamento parece suspeito, <strong className="text-orange-400">PARE TUDO IMEDIATAMENTE</strong>. Esse é seu último aviso antes do ban.
                </p>
              </div>
            </div>
          </div>

          {/* Ferramentas Úteis */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">Ferramentas Que Podem Ajudar</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Algumas ferramentas úteis no processo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-3">📊 Para Monitoramento</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Planilha simples anotando: quantas mensagens enviou, quantas leu, quantas respondeu</li>
                  <li>• n8n pode te ajudar a criar dashboards (mas só use DEPOIS do aquecimento)</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-3">📁 Para Organização</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Rotular contatos: "Aquecimento", "Cliente Real", "Teste"</li>
                  <li>• Isso te ajuda a saber com quem está falando</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="font-bold text-purple-400 mb-3">🧪 Para Testes</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Crie um grupo só seu com outro número seu</li>
                  <li>• Envie mensagens de teste para ver se está chegando</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparativo */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">A Importância de Fazer Certo</h2>

            <p className="text-gray-300 mb-6">
              Aquecimento de chip não é uma "frescura" ou "perda de tempo". É a diferença entre:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-900/20 rounded-lg p-6 border border-red-900/50">
                <h3 className="text-lg font-bold text-red-400 mb-4">❌ Sem Aquecimento</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Perder o número em 1 dia</li>
                  <li>• Ter que comprar chip novo</li>
                  <li>• Perder dinheiro</li>
                  <li>• Perder a confiança dos clientes</li>
                  <li>• Ficar com reputação ruim no WhatsApp</li>
                </ul>
              </div>

              <div className="bg-green-900/20 rounded-lg p-6 border border-green-900/50">
                <h3 className="text-lg font-bold text-green-400 mb-4">✅ Com Aquecimento</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Número funcionando por meses/anos</li>
                  <li>• Automações rodando suave</li>
                  <li>• Alta taxa de entrega</li>
                  <li>• Clientes recebendo suas mensagens</li>
                  <li>• Negócio escalando com segurança</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/50 mt-6">
              <p className="text-lg text-center text-gray-200">
                A escolha é sua, mas depois de ler este artigo, você sabe exatamente o que fazer.
              </p>
            </div>
          </div>

          {/* Destaque Final */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/50 mb-8">
            <p className="text-xl text-center text-gray-200 mb-4">
              <strong className="text-white">Lembre-se:</strong> o WhatsApp não vê o que você escreve, ele vê como você se comporta.
            </p>
            <p className="text-gray-300 text-center">
              Você pode mandar "akjshdkajshd" ou uma mensagem super elaborada - para o sistema, é a mesma coisa. O que importa é:
            </p>
            <ul className="text-gray-300 mt-4 space-y-2 text-center">
              <li>• Você envia com frequência normal?</li>
              <li>• As pessoas respondem?</li>
              <li>• Você está sendo reportado?</li>
              <li>• Seu padrão parece humano?</li>
            </ul>
            <p className="text-center text-purple-300 mt-4 font-semibold">
              Se a resposta for SIM para as três primeiras e NÃO para a última, você está no caminho certo.
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/aquecimento-chip/apis"
            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior: APIs
          </Link>
          <Link
            to="/guias/aquecimento-chip/casos-de-uso"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Casos de Uso
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaAquecimentoChipErros;
