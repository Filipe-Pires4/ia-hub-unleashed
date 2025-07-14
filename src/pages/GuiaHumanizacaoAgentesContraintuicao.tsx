
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaHumanizacaoAgentesContraintuicao = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Zap className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">A Humanização como Contraintuição na Era da Perfeição Digital</h1>
          </div>
          <p className="text-xl text-gray-300">
            Descobrindo a força das imperfeições programadas
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Construir agentes de WhatsApp é, para muitos, um exercício de <strong className="text-purple-300">lógica pura</strong>. Buscamos a rota mais direta, a resposta mais precisa, a ausência de atrito.
            </p>
            
            <div className="bg-purple-900 border-l-4 border-purple-400 p-6 rounded-r-lg mb-6">
              <p className="text-purple-100 leading-relaxed">
                Mas, paradoxalmente, a verdadeira humanização reside em <strong>desprogramar essa busca implacável pela perfeição</strong>. Ela está nos detalhes que imitam as imperfeições e as nuances da interação humana real, muitas vezes em contraste direto com a eficiência programada.
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              É sobre permitir que seu agente seja um pouco <strong className="text-purple-300">"menos robô"</strong> para ser muito <strong className="text-purple-300">"mais gente"</strong>.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">Por que a Imperfeição Funciona?</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">🧠 Psicologia da Autenticidade</h3>
                <p className="text-gray-300">
                  Nosso cérebro está programado para detectar padrões artificiais. Quando tudo é "perfeito demais", acionamos automaticamente nossos filtros de desconfiança.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-green-300 mb-2">💭 Familiaridade Cognitiva</h3>
                <p className="text-gray-300">
                  Pequenos "erros" e autocorreções são parte natural da comunicação humana. Quando um agente os simula, ele se torna familiar e reconhecível.
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">🤝 Quebra de Barreiras</h3>
                <p className="text-gray-300">
                  A "imperfeição controlada" quebra a barreira psicológica entre humano e máquina, criando um espaço de conforto para o cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl p-8 border border-orange-600">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">⚡ Insight Revolucionário</h2>
            <p className="text-orange-100 leading-relaxed mb-4">
              A perfeição técnica pode ser o <strong>inimigo da conexão humana</strong>. Um agente que responde instantaneamente com respostas impecáveis pode impressionar tecnicamente, mas falha em criar vínculos emocionais.
            </p>
            <p className="text-orange-100 leading-relaxed">
              A verdadeira maestria está em <strong>programar as pausas, os "erros" estratégicos e as hesitações</strong> que tornam a interação natural e humana.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">Os Pilares da Imperfeição Programada</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">🎭 Variabilidade nas Respostas</h3>
                <p className="text-gray-300 text-sm">
                  Evite respostas idênticas. Crie 3-5 variações para cada situação comum.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">⏱️ Timing Humano</h3>
                <p className="text-gray-300 text-sm">
                  Adicione delays estratégicos que simulem o tempo de leitura e reflexão.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">🔄 Autocorreções Planejadas</h3>
                <p className="text-gray-300 text-sm">
                  Programe pequenas correções que demonstrem "humanidade" na digitação.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">😊 Reações Contextuais</h3>
                <p className="text-gray-300 text-sm">
                  Reconheça e responda a elementos emocionais das mensagens dos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/humanizacao-agentes"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Hub
          </Link>
          
          <Link
            to="/guias/humanizacao-agentes/micromomentos"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Os Micromomentos Inesperados
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaHumanizacaoAgentesContraintuicao;
