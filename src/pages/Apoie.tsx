
import { useState } from 'react';
import { Heart, Copy, Check, Gift, Users, Zap } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Apoie = () => {
  const [copied, setCopied] = useState(false);

  const pixCode = "00020126860014br.gov.bcb.pix0136481807e9-072c-478b-bdbe-d4244541353e0224Obrigado Pelo seu apoio!5204000053039865802BR5924Filipe Cesar Pereira Pir6008Brasilia62240520daqr163234457539172063044036";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const impactAreas = [
    {
      icon: Zap,
      title: "Infraestrutura",
      description: "Manter servidores, ferramentas e plataformas funcionando 24/7"
    },
    {
      icon: Users,
      title: "Conteúdo",
      description: "Produzir guias, tutoriais e materiais educativos de qualidade"
    },
    {
      icon: Gift,
      title: "Comunidade",
      description: "Organizar eventos, desafios e premiações para membros"
    }
  ];

  const supportLevels = [
    {
      amount: "R$ 10",
      title: "Café Mensal",
      description: "Equivale a um cafezinho por mês e ajuda com custos básicos",
      impact: "Mantém as luzes acesas"
    },
    {
      amount: "R$ 25",
      title: "Apoiador",
      description: "Contribuição significativa para crescimento da plataforma",
      impact: "Financia novos conteúdos"
    },
    {
      amount: "R$ 50",
      title: "Patrocinador",
      description: "Apoio essencial para expansão e melhorias",
      impact: "Viabiliza novas funcionalidades"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-red-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Sua ajuda mantém este projeto vivo</h1>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            O IA Hub é um projeto independente e gratuito. Sua contribuição nos ajuda a manter 
            a plataforma funcionando e criar ainda mais conteúdo de qualidade para nossa comunidade.
          </p>
        </div>

        {/* Como sua ajuda faz a diferença */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Como sua ajuda faz a diferença</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center"
                >
                  <div className="bg-purple-600 p-4 rounded-lg mb-4 inline-block">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-400 text-sm">{area.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Níveis de Apoio */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Níveis de Apoio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportLevels.map((level, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{level.amount}</div>
                  <h3 className="text-lg font-bold text-white">{level.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 text-center">{level.description}</p>
                <div className="bg-purple-600 bg-opacity-20 rounded-lg p-3 text-center">
                  <p className="text-purple-300 text-xs font-medium">{level.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QR Code e PIX */}
        <section className="mb-12">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-8 text-center">Apoie via PIX</h2>
            
            {/* QR Code */}
            <div className="text-center mb-8">
              <div className="bg-white p-4 rounded-xl inline-block mb-4">
                <img 
                  src="/lovable-uploads/5894762e-435c-416f-87cd-c66fbbfcbdf6.png" 
                  alt="QR Code PIX" 
                  className="max-w-xs w-full h-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Escaneie o QR Code com seu banco ou app de pagamentos
              </p>
            </div>

            {/* PIX Copia e Cola */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-white mb-4 text-center">
                Ou copie o código PIX:
              </h3>
              <div className="bg-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <code className="text-gray-300 text-xs break-all pr-4 flex-1">
                    {pixCode}
                  </code>
                  <button
                    onClick={handleCopyPix}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all flex-shrink-0 ${
                      copied 
                        ? 'bg-green-600 text-white' 
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copiar
                      </>
                    )}
                  </button>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Cole este código em seu aplicativo de pagamentos para fazer uma transferência PIX
              </p>
            </div>
          </div>
        </section>

        {/* Transparência */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Compromisso com a Transparência</h2>
            <div className="space-y-4 text-purple-100">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-300 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>
                  <strong>100% para o projeto:</strong> Todas as contribuições são investidas diretamente no IA Hub.
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-300 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>
                  <strong>Prestação de contas:</strong> Publicamos relatórios mensais sobre o uso dos recursos.
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-300 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p>
                  <strong>Sem fins lucrativos:</strong> O IA Hub é um projeto independente focado em educação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outras formas de apoiar */}
        <section>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              Outras Formas de Apoiar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="font-semibold text-purple-400 mb-2">Compartilhe</h3>
                <p className="text-gray-400 text-sm">
                  Divulgue o IA Hub para amigos interessados em IA
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-purple-400 mb-2">Contribua</h3>
                <p className="text-gray-400 text-sm">
                  Crie conteúdo, tutoriais ou ajude outros membros
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-purple-400 mb-2">Feedback</h3>
                <p className="text-gray-400 text-sm">
                  Envie sugestões para melhorarmos a plataforma
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agradecimento */}
        <section className="mt-12">
          <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8">
            <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Muito Obrigado!</h2>
            <p className="text-gray-300">
              Cada contribuição, por menor que seja, faz uma diferença real. 
              Juntos, estamos construindo algo especial para nossa comunidade.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Apoie;
