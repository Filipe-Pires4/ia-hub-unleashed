import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Shield, Eye, Lock, CheckCircle, XCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaAquecimentoChipCriptografia = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
              Capítulo 1
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Criptografia e Metadados
          </h1>
          <p className="text-xl text-gray-300">
            Por que o WhatsApp não vê suas mensagens e o que ele realmente monitora
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-invert max-w-none">
          
          {/* Seção 1: Criptografia */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">A Criptografia de Ponta a Ponta</h2>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg">
              O WhatsApp usa uma tecnologia chamada <strong className="text-white">criptografia de ponta a ponta (E2E - End-to-End Encryption)</strong>.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">O Que Isso Significa na Prática?</h3>
            
            <p className="text-gray-300 mb-6">
              Imagine que você vai enviar uma carta para alguém, mas antes de colocar no correio, você coloca a carta dentro de um cofre com senha. Só você e a pessoa que vai receber sabem a senha desse cofre.
            </p>
            
            <p className="text-gray-300 mb-6">
              O carteiro (que seria o WhatsApp nessa história) pode até segurar o cofre, saber de onde veio, para onde vai, quanto tempo levou para chegar... mas <strong className="text-white">ele nunca consegue abrir o cofre</strong> para ver o que está escrito dentro.
            </p>

            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <p className="text-gray-300 mb-2">📤 <strong className="text-white">Você escreve a mensagem</strong> → A mensagem é criptografada (trancada no cofre)</p>
              <p className="text-gray-300 mb-2">📦 <strong className="text-white">O WhatsApp transporta</strong> → Mas não consegue ler o que está dentro</p>
              <p className="text-gray-300">📥 <strong className="text-white">A pessoa recebe</strong> → E só ela consegue descriptografar (abrir o cofre)</p>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Por Que o WhatsApp Faz Isso?</h3>
            <p className="text-gray-300">
              Privacidade! O WhatsApp prometeu que ninguém, nem mesmo eles, podem ler suas mensagens. Nem governos, nem hackers, nem os próprios funcionários do WhatsApp conseguem ver o que você escreve. Essa é uma promessa séria que eles levam muito a sério.
            </p>
          </div>

          {/* Seção 2: Metadados */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">O Que o WhatsApp VÊ de Verdade</h2>
            </div>

            <p className="text-gray-300 mb-6 text-lg">
              Se o WhatsApp não vê o conteúdo das suas mensagens, como ele consegue identificar se você está fazendo spam ou se é um usuário legítimo? A resposta está nos <strong className="text-white">METADADOS</strong>.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">O Que São Metadados?</h3>
            <p className="text-gray-300 mb-6">
              Metadados são as "informações sobre a informação". É como o envelope da carta: você não vê o conteúdo, mas sabe quem enviou, para quem, quando foi enviado, de onde, etc.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="text-lg font-bold text-purple-400 mb-3">1. Padrões de Comportamento</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Quantas mensagens você envia por minuto/hora/dia</li>
                  <li>• Intervalos entre as mensagens</li>
                  <li>• Velocidade de digitação (se você demora ou envia instantaneamente)</li>
                  <li>• Horários em que você está ativo</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="text-lg font-bold text-purple-400 mb-3">2. Dados de Conexão</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• De onde você está enviando (Wi-Fi, dados móveis, localização)</li>
                  <li>• Quantas vezes você abre o app por dia</li>
                  <li>• Quanto tempo fica online</li>
                  <li>• Padrões de conexão e desconexão</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="text-lg font-bold text-purple-400 mb-3">3. Informações de Rede</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Para quantos números diferentes você envia mensagens</li>
                  <li>• Quantos números novos você adiciona por dia</li>
                  <li>• Quantas pessoas te adicionam nos contatos</li>
                  <li>• Quantas pessoas te bloqueiam ou reportam</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="text-lg font-bold text-purple-400 mb-3">4. Interações Recebidas</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Quantas pessoas respondem suas mensagens</li>
                  <li>• Quanto tempo demora para receberem resposta</li>
                  <li>• Quantas mensagens são lidas vs não lidas</li>
                  <li>• Quantas pessoas salvam seu contato</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="text-lg font-bold text-purple-400 mb-3">5. Tipo de Mídia</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Se você envia texto, áudio, imagem, vídeo, documento</li>
                  <li>• Tamanho dos arquivos</li>
                  <li>• Frequência de cada tipo de conteúdo</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-5">
                <h4 className="text-lg font-bold text-purple-400 mb-3">6. Comportamento em Grupos</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Quantos grupos você cria</li>
                  <li>• Quantas pessoas adiciona de uma vez</li>
                  <li>• Como as pessoas reagem (saem, ficam, interagem)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seção 3: Conclusão */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold m-0">O Que Isso Significa Para Você?</h2>
            </div>

            <p className="text-gray-300 mb-6 text-lg">
              Significa que <strong className="text-white">o conteúdo não importa, o padrão importa</strong>.
            </p>

            <p className="text-gray-300 mb-6">Você pode escrever:</p>
            
            <div className="bg-gray-900 rounded-lg p-5 mb-6">
              <ul className="text-gray-300 space-y-2">
                <li>• "Olá, tudo bem?"</li>
                <li>• "asjkdhajksdhaskjd"</li>
                <li>• Enviar uma figurinha aleatória</li>
                <li>• Mandar apenas emojis: "😊👍"</li>
                <li>• Escrever um textão de 3 parágrafos</li>
              </ul>
            </div>

            <p className="text-gray-300 text-lg font-semibold mb-6">
              Para o WhatsApp, é tudo a mesma coisa!
            </p>

            <p className="text-gray-300 mb-4">O que ele está analisando é:</p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Você enviou 1 mensagem → OK</li>
              <li>• Foi para um número que já conversou antes ou é novo?</li>
              <li>• Quanto tempo demorou entre essa e a última mensagem?</li>
              <li>• A pessoa respondeu?</li>
              <li>• Você está enviando para 100 números em 5 minutos? → <span className="text-red-400 font-bold">ALERTA!</span></li>
            </ul>
          </div>

          {/* Seção 4: Mitos e Verdades */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Mitos e Verdades</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-red-900/20 rounded-lg border border-red-900/50">
                <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">MITO: "Preciso escrever mensagens reais e bonitas"</p>
                  <p className="text-gray-300">VERDADE: Pode ser qualquer coisa. "teste" funciona igual.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-900/20 rounded-lg border border-red-900/50">
                <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">MITO: "O WhatsApp lê minhas mensagens e sabe que é spam"</p>
                  <p className="text-gray-300">VERDADE: O WhatsApp não lê nada. Ele analisa comportamento.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-900/20 rounded-lg border border-red-900/50">
                <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">MITO: "Se eu usar palavras como 'promoção' ou 'desconto', sou banido"</p>
                  <p className="text-gray-300">VERDADE: O conteúdo não importa. O padrão de envio importa.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-900/20 rounded-lg border border-red-900/50">
                <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">MITO: "Preciso de conversas longas e complexas"</p>
                  <p className="text-gray-300">VERDADE: "oi" + "oi" + "👍" é uma conversa válida.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-900/20 rounded-lg border border-green-900/50">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">VERDADE: "O que importa é a interação, não o conteúdo"</p>
                  <p className="text-gray-300">EXATO! Você entendeu o ponto principal.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-900/20 rounded-lg border border-green-900/50">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">VERDADE: "Chips novos precisam de aquecimento mais cuidadoso"</p>
                  <p className="text-gray-300">SIM! Eles não têm histórico, então o WhatsApp fica mais desconfiado.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-900/20 rounded-lg border border-green-900/50">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">VERDADE: "Cada conta tem um 'score' invisível"</p>
                  <p className="text-gray-300">CORRETO! E esse score sobe ou desce conforme seu comportamento.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Destaque Final */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/50 mb-8">
            <p className="text-xl text-center text-gray-200">
              🔐 <strong className="text-white">Lembre-se sempre:</strong><br />
              O WhatsApp protege sua privacidade através da criptografia de ponta a ponta. Ele não lê suas mensagens, mas monitora seu comportamento. Use isso a seu favor no aquecimento!
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/aquecimento-chip"
            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Índice
          </Link>
          <Link
            to="/guias/aquecimento-chip/cronograma"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Cronograma
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaAquecimentoChipCriptografia;
