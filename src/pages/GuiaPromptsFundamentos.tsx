
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsFundamentos = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Como Criar um Bom Prompt</h1>
          </div>
          <p className="text-xl text-gray-300">
            Fundamentos essenciais para criar prompts eficazes que maximizam a qualidade das respostas do Lovable.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          {/* Introdução */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6">
              Criar um bom prompt para o Lovable é uma arte que combina clareza, especificidade e contexto. Para maximizar a eficácia de suas interações, considere os seguintes princípios:
            </p>
          </div>

          {/* Acrônimo P.A.C.E.R. */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">Acrônimo P.A.C.E.R.</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Papel</h3>
                <p className="text-gray-300">Defina claramente o papel que a IA deve assumir. Ex: "Atue como um arquiteto de software sênior..."</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Ação</h3>
                <p className="text-gray-300">Especifique a tarefa a ser realizada. Ex: "...projete e implemente um sistema de reserva de ingressos..."</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Contexto</h3>
                <p className="text-gray-300">Forneça informações relevantes e o cenário. Ex: "...para eventos de grande escala, gerenciando disponibilidade de assentos..."</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Estrutura (Formato)</h3>
                <p className="text-gray-300">Indique o formato de saída desejado. Ex: "...apresente a arquitetura em um diagrama Mermaid e um relatório detalhado."</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Restrições</h3>
                <p className="text-gray-300">Defina limites ou requisitos específicos. Ex: "...garantindo alta disponibilidade e baixa latência."</p>
              </div>
            </div>
          </div>

          {/* Método 80/20 */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">Método 80/20 na Criação de Prompts</h2>
            <p className="text-gray-300 leading-relaxed">
              Concentre 80% do seu esforço em definir claramente o objetivo e o contexto, e 20% em refinar a linguagem e adicionar detalhes específicos. Um prompt bem estruturado economiza tempo e melhora a qualidade das respostas.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">Bullet Points para Clareza</h2>
            <p className="text-gray-300 mb-4">Para garantir que seu prompt seja claro e completo, utilize bullet points para:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                <div>
                  <strong className="text-purple-200">Listar Requisitos:</strong> Enumere todas as funcionalidades, características ou dados específicos que você espera no resultado.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                <div>
                  <strong className="text-purple-200">Definir Etapas:</strong> Se a tarefa envolver um processo, descreva cada passo em um bullet point separado.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                <div>
                  <strong className="text-purple-200">Especificar Formatos:</strong> Indique o formato de saída desejado para diferentes partes da resposta (ex: "lista", "tabela", "código").
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                <div>
                  <strong className="text-purple-200">Separar Informações:</strong> Use bullet points para organizar informações complexas ou múltiplas instruções, tornando o prompt mais legível.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                <div>
                  <strong className="text-purple-200">Destacar Prioridades:</strong> Marque com bullet points os elementos mais importantes ou as prioridades do projeto.
                </div>
              </li>
            </ul>
          </div>

          {/* Dica Ninja */}
          <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6">🥷 Dica Ninja</h2>
            <div className="space-y-4 text-gray-200">
              <div>
                <strong className="text-yellow-300">Iteração é Chave:</strong> Não espere o prompt perfeito na primeira tentativa. Comece com um prompt básico e refine-o iterativamente com base nos resultados.
              </div>
              <div>
                <strong className="text-yellow-300">Use Exemplos (Few-shot):</strong> Para tarefas complexas ou com um estilo de saída específico, forneça 1-2 exemplos de entrada/saída no prompt. Isso ajuda a IA a entender melhor o padrão desejado.
              </div>
              <div>
                <strong className="text-yellow-300">Seja Explícito sobre o Público-Alvo:</strong> Se o resultado for para um público técnico ou leigo, mencione isso. Ex: "Explique em termos leigos..." ou "Use terminologia técnica..."
              </div>
              <div>
                <strong className="text-yellow-300">Defina Limites de Saída:</strong> Especifique o tamanho ou a extensão da resposta. Ex: "Responda em no máximo 200 palavras" ou "Liste 5 pontos principais."
              </div>
              <div>
                <strong className="text-yellow-300">Peça para a IA Fazer Perguntas:</strong> Inclua uma instrução como "Se precisar de mais informações, faça perguntas." Isso permite que a IA solicite esclarecimentos, evitando suposições incorretas.
              </div>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voltar ao Hub
          </Link>
          
          <Link
            to="/guias/prompts/saas"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Prompts de SaaS
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsFundamentos;
