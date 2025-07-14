
import { Link } from 'react-router-dom';
import { ArrowLeft, Microscope } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaHumanizacaoAgentesPratica = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Microscope className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Seção Prática: Dissecando a Humanização em Nível Atômico</h1>
          </div>
          <p className="text-xl text-gray-300">
            Exemplos práticos transformados
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 border border-blue-600">
            <h2 className="text-2xl font-bold text-white mb-4">🔬 Laboratório de Humanização</h2>
            <p className="text-blue-100 leading-relaxed">
              Vamos pegar exemplos reais e elevá-los com os insights mais profundos que aprendemos. Cada transformação mostra o <strong>"antes e depois"</strong> da aplicação das técnicas ninja.
            </p>
          </div>

          {/* Exemplo 1: Reconhecimento do Humor */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">😂 O Reconhecimento do Humor Inesperado</h2>
            
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-white mb-4">📱 Cenário Real:</h3>
              <div className="bg-blue-900 p-4 rounded border-l-4 border-blue-400">
                <p className="text-blue-100"><strong>Cliente:</strong> "É que dia de entrega eu dirigindo e complicado msm kkkk"</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-900 p-6 rounded-lg border border-yellow-600">
                <h3 className="text-lg font-bold text-yellow-300 mb-3">📊 Nível 1 (Humanizado Básico)</h3>
                <div className="bg-yellow-800 p-4 rounded text-yellow-100">
                  "Boa tarde, tudo bem! Entendo"
                </div>
                <p className="text-yellow-200 text-sm mt-3">
                  <strong>Pontos positivos:</strong> Validação básica, tom amigável
                </p>
              </div>

              <div className="bg-green-900 p-6 rounded-lg border border-green-600">
                <h3 className="text-lg font-bold text-green-300 mb-3">🚀 Nível Ninja (Humanizado Profundo)</h3>
                <div className="bg-green-800 p-4 rounded text-green-100">
                  "Boa tarde, tudo bem! Entendo perfeitamente, dirigir em dia de entrega é sempre um desafio! 😂 Mas fico feliz que conseguiu um tempinho para falar conosco."
                </div>
                <p className="text-green-200 text-sm mt-3">
                  <strong>Diferenciais:</strong> Resposta ao humor, valorização do esforço
                </p>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-300 mb-3">🎯 Análise do Insight:</h3>
              <ul className="text-gray-300 space-y-2">
                <li><strong>• Emoji estratégico:</strong> O 😂 é uma resposta direta ao "kkkk", simulando uma risada de compreensão</li>
                <li><strong>• Validação ampliada:</strong> "Dirigir em dia de entrega é sempre um desafio" mostra compreensão específica</li>
                <li><strong>• Valorização:</strong> "Mas fico feliz que conseguiu um tempinho" reconhece o esforço do cliente</li>
              </ul>
            </div>
          </div>

          {/* Exemplo 2: Transparência no Erro */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">🔧 A Transparência no Erro Interno</h2>
            
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-white mb-4">📱 Cenário Real:</h3>
              <div className="space-y-2">
                <div className="bg-gray-600 p-3 rounded">
                  <p className="text-gray-100"><strong>Agente:</strong> "Acabei de enviar o e-mail com as informações"</p>
                </div>
                <div className="bg-blue-900 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-blue-100"><strong>Cliente:</strong> "Não recebi o e-mail."</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-900 p-6 rounded-lg border border-yellow-600">
                <h3 className="text-lg font-bold text-yellow-300 mb-3">📊 Nível 1 (Humanizado Básico)</h3>
                <div className="bg-yellow-800 p-4 rounded text-yellow-100">
                  "Por favor, verifique sua caixa de spam."
                </div>
                <p className="text-yellow-200 text-sm mt-3">
                  <strong>Problema:</strong> Transfere responsabilidade, não assume possível falha
                </p>
              </div>

              <div className="bg-green-900 p-6 rounded-lg border border-green-600">
                <h3 className="text-lg font-bold text-green-300 mb-3">🚀 Nível Ninja (Humanizado Profundo)</h3>
                <div className="bg-green-800 p-4 rounded text-green-100 text-sm">
                  "Poxa, lamento que não tenha recebido, [Nome do Cliente]! Acabei de verificar aqui e parece que tivemos um pequeno atraso no envio de e-mails há pouco. Por favor, poderia dar uma olhadinha na caixa de spam? Se não estiver lá, me avise que reenvio imediatamente."
                </div>
                <p className="text-green-200 text-sm mt-3">
                  <strong>Diferenciais:</strong> Empatia, transparência sobre falha, proatividade
                </p>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-300 mb-3">🎯 Análise do Insight:</h3>
              <ul className="text-gray-300 space-y-2">
                <li><strong>• Empatia genuína:</strong> "Poxa, lamento" adiciona calor humano à resposta</li>
                <li><strong>• Transparência controlada:</strong> Admite "pequeno atraso" sem denegrir o sistema</li>
                <li><strong>• Personalização:</strong> Usa o nome do cliente para criar proximidade</li>
                <li><strong>• Proatividade:</strong> Oferece solução imediata ("reenvio imediatamente")</li>
              </ul>
            </div>
          </div>

          {/* Exemplo 3: Adaptação ao "Não Sei" */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">🤔 A Adaptação ao "Não Sei" do Cliente</h2>
            
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-white mb-4">📱 Cenário Real:</h3>
              <div className="space-y-2">
                <div className="bg-gray-600 p-3 rounded">
                  <p className="text-gray-100"><strong>Agente:</strong> "Qual seria o foco da consultoria? Gerencial, Layout do estoque ou quer descobrir o ponto de dificuldade?"</p>
                </div>
                <div className="bg-blue-900 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-blue-100"><strong>Cliente:</strong> "Ah, não sei exatamente, quero ver o que vocês oferecem."</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-900 p-6 rounded-lg border border-yellow-600">
                <h3 className="text-lg font-bold text-yellow-300 mb-3">📊 Nível 1 (Humanizado Básico)</h3>
                <div className="bg-yellow-800 p-4 rounded text-yellow-100">
                  "Ok. Posso agendar a reunião. Qual horário?"
                </div>
                <p className="text-yellow-200 text-sm mt-3">
                  <strong>Problema:</strong> Não aproveita a oportunidade para agregar valor
                </p>
              </div>

              <div className="bg-green-900 p-6 rounded-lg border border-green-600">
                <h3 className="text-lg font-bold text-green-300 mb-3">🚀 Nível Ninja (Humanizado Profundo)</h3>
                <div className="bg-green-800 p-4 rounded text-green-100 text-sm">
                  "Entendi, [Nome do Cliente]! É super comum ter essa dúvida inicial. Que tal agendarmos com o nosso especialista [Nome do Especialista]? Ele tem muita experiência em [Área de Especialidade] e pode te ajudar a identificar exatamente onde a consultoria seria mais útil para sua empresa."
                </div>
                <p className="text-green-200 text-sm mt-3">
                  <strong>Diferenciais:</strong> Validação da dúvida, especialista nomeado, valor agregado
                </p>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-300 mb-3">🎯 Análise do Insight:</h3>
              <ul className="text-gray-300 space-y-2">
                <li><strong>• Normalização:</strong> "É super comum ter essa dúvida" remove constrangimento</li>
                <li><strong>• Personalização:</strong> Menciona especialista específico com credenciais</li>
                <li><strong>• Foco na necessidade:</strong> "Identificar onde seria mais útil" mostra interesse genuíno</li>
                <li><strong>• Transição suave:</strong> Não apenas agenda, mas prepara valor para o encontro</li>
              </ul>
            </div>
          </div>

          {/* Insights Finais */}
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-2xl font-bold text-white mb-6">🏆 Insights Finais da Dissecação</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-purple-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-200 mb-2">🎭 Padrão Identificado</h3>
                  <p className="text-purple-100 text-sm">
                    A humanização vai além de ser "educado". É sobre <strong>reconhecer, validar e responder</strong> aos elementos emocionais e contextuais.
                  </p>
                </div>
                
                <div className="bg-purple-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-200 mb-2">⚡ Fórmula do Sucesso</h3>
                  <p className="text-purple-100 text-sm">
                    <strong>Empatia + Transparência + Proatividade</strong> = Conexão Humana Genuína
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-200 mb-2">🚀 Diferencial Competitivo</h3>
                  <p className="text-purple-100 text-sm">
                    Agentes que aplicam essas técnicas <strong>criam vínculos emocionais</strong> que transcendem a transação comercial.
                  </p>
                </div>
                
                <div className="bg-purple-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-200 mb-2">💡 Implementação</h3>
                  <p className="text-purple-100 text-sm">
                    Cada resposta deve ser uma <strong>oportunidade de humanização</strong>, não apenas de resolução de problemas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusão */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">🎯 Conclusão: O Segredo Revelado</h2>
            
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-6 rounded-lg">
              <p className="text-gray-200 leading-relaxed text-lg mb-4">
                Ao abraçar essas <strong>"imperfeições"</strong> e ir além da lógica programática, seus agentes de WhatsApp deixarão de ser apenas ferramentas eficientes e se transformarão em <strong>pontes para a verdadeira conexão humana</strong> no mundo digital.
              </p>
              <p className="text-purple-300 leading-relaxed text-lg font-medium">
                O segredo não está no que eles fazem, mas em <strong>como eles fazem o cliente se sentir</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/humanizacao-agentes/dicas-ninjas"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Dicas Ninjas
          </Link>
          
          <Link
            to="/guias/humanizacao-agentes"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voltar ao Hub do Guia
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaHumanizacaoAgentesPratica;
