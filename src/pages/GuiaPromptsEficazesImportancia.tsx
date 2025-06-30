
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Target } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsEficazesImportancia = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Qual a Importância Disso?</h1>
          </div>
          <p className="text-xl text-gray-300">
            Ou: Por Que Você Precisa Ser um Mestre dos Prompts!
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Você pode estar se perguntando: "Ok, entendi que IA é um estagiário e prompt é a instrução. Mas por que isso é tão importante assim?" A resposta é simples e poderosa: <strong className="text-blue-300">prompts eficazes são a chave para desbloquear todo o potencial da IA!</strong>
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl p-8 border border-orange-600">
            <h2 className="text-2xl font-bold text-orange-300 mb-6">🔥 A Analogia do Forno</h2>
            <p className="text-orange-100 leading-relaxed mb-4">
              Pense na IA como um forno superpotente. Você pode ter os melhores ingredientes do mundo (dados, algoritmos, etc.), mas se você não souber a receita certa e a temperatura ideal (o prompt), o seu bolo (o resultado da IA) pode sair solado, queimado ou nem mesmo sair do forno!
            </p>
            <p className="text-orange-100 leading-relaxed">
              Um prompt bem elaborado garante que a IA entenda exatamente o que você quer, economizando tempo, esforço e, o mais importante, entregando resultados de <strong className="text-yellow-300">alta qualidade</strong>.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">🚀 Dominar a arte de criar prompts é como ter um superpoder no mundo digital!</h2>
            <p className="text-gray-300 leading-relaxed mb-6">Você será capaz de:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">📝 Gerar conteúdo incrível</h3>
                  <p className="text-gray-300">Desde artigos e roteiros até e-mails e posts para redes sociais.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">🤖 Automatizar tarefas chatas</h3>
                  <p className="text-gray-300">Deixe a IA fazer o trabalho repetitivo enquanto você foca no que realmente importa.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">💡 Resolver problemas complexos</h3>
                  <p className="text-gray-300">Use a IA como um parceiro de brainstorming para encontrar soluções inovadoras.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">⚡ Aumentar sua produtividade</h3>
                  <p className="text-gray-300">Faça em minutos o que levaria horas ou dias.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">🎯 Conclusão</h2>
            <p className="text-purple-100 leading-relaxed mb-4">
              Em resumo, ser um mestre dos prompts não é apenas uma habilidade legal; é uma <strong className="text-yellow-300">necessidade</strong> no mundo de hoje. É o que vai diferenciar você e te colocar à frente na era da Inteligência Artificial.
            </p>
            <p className="text-purple-100 leading-relaxed">
              Então, bora aprender a arte do prompt!
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts-eficazes/o-que-e-ia"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: O que é IA?
          </Link>
          
          <Link
            to="/guias/prompts-eficazes/como-criar-prompts"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Como Criar Prompts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsEficazesImportancia;
