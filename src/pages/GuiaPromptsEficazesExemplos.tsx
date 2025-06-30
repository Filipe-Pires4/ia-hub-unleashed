
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Star } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsEficazesExemplos = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="h-8 w-8 text-cyan-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Exemplos de Prompts</h1>
          </div>
          <p className="text-xl text-gray-300">
            Para Copiar, Colar e Arrasar!
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed text-lg">
              Chegou a hora da prática! Aqui estão 3 exemplos de prompts que você pode copiar, colar e adaptar para suas próprias necessidades. Veja como as técnicas que aprendemos se encaixam na vida real:
            </p>
          </div>

          {/* Exemplo 1 */}
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">📊 Exemplo 1: O Resumidor Inteligente</h2>
            <p className="text-purple-100 mb-4">(Usando P.R.O.M.P.T. e Markdown)</p>
            <p className="text-purple-100 leading-relaxed mb-6">
              Imagine que você precisa resumir um artigo longo para uma apresentação. Este prompt é seu aliado:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="text-gray-200 space-y-2">
                <p><span className="text-yellow-300">**Persona:**</span> Aja como um analista de negócios experiente e conciso.</p>
                <br />
                <p><span className="text-yellow-300">**Requisito:**</span> Resuma o seguinte artigo técnico.</p>
                <br />
                <p><span className="text-yellow-300">**Objetivo:**</span> O resumo deve ser usado para uma apresentação executiva, destacando os pontos mais importantes de forma rápida e clara.</p>
                <br />
                <p><span className="text-yellow-300">**Modelo/Formato:**</span> O resumo deve ser apresentado em 5 bullet points, com cada ponto tendo no máximo 20 palavras.</p>
                <br />
                <p><span className="text-yellow-300">**Parâmetros/Restrições:**</span> Use uma linguagem formal e profissional. Não inclua opiniões pessoais, apenas fatos.</p>
                <br />
                <p><span className="text-yellow-300">**Tom:**</span> Informativo e direto ao ponto.</p>
                <br />
                <p><span className="text-yellow-300">**Artigo:**</span></p>
                <p>"A recente pesquisa sobre o impacto da inteligência artificial na produtividade empresarial revelou que empresas que implementaram soluções de IA em seus processos internos experimentaram um aumento médio de 15% na eficiência operacional..."</p>
              </div>
            </div>
          </div>

          {/* Exemplo 2 */}
          <div className="bg-gradient-to-r from-green-900 to-teal-900 rounded-2xl p-8 border border-green-600">
            <h2 className="text-2xl font-bold text-green-300 mb-6">🎨 Exemplo 2: O Criador de Ideias Criativas</h2>
            <p className="text-green-100 mb-4">(Usando Few-Shot e Tom Divertido)</p>
            <p className="text-green-100 leading-relaxed mb-6">
              Precisa de ideias para posts de redes sociais com um toque de humor? Este prompt vai te ajudar:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="text-gray-200 space-y-3">
                <p><span className="text-yellow-300">**Tarefa:**</span> Gere ideias de posts para redes sociais sobre a importância de beber água, seguindo o estilo dos exemplos abaixo:</p>
                <br />
                <p><span className="text-yellow-300">**Exemplos:**</span></p>
                <br />
                <div className="pl-4 border-l-2 border-green-500">
                  <p><span className="text-green-300">**Ideia 1:**</span></p>
                  <p><span className="text-blue-300">*Tema:*</span> Hidratação e energia</p>
                  <p><span className="text-blue-300">*Texto:*</span> "Seu corpo não é uma planta do deserto! Beba água e sinta a energia fluir. #HidrateSe #EnergiaTotal"</p>
                  <p><span className="text-blue-300">*Emoji:*</span> 💧⚡</p>
                </div>
                <br />
                <div className="pl-4 border-l-2 border-green-500">
                  <p><span className="text-green-300">**Ideia 2:**</span></p>
                  <p><span className="text-blue-300">*Tema:*</span> Água e pele saudável</p>
                  <p><span className="text-blue-300">*Texto:*</span> "Quer pele de pêssego? A receita secreta é... água! Muita água! #PeleRadiante #BelezaNatural"</p>
                  <p><span className="text-blue-300">*Emoji:*</span> 🍑✨</p>
                </div>
                <br />
                <p><span className="text-yellow-300">**Minha Ideia (sobre água e humor):**</span></p>
                <p><span className="text-blue-300">*Tema:*</span> Água e bom humor</p>
                <p><span className="text-blue-300">*Texto:*</span> "</p>
                <p><span className="text-blue-300">*Emoji:*</span></p>
              </div>
            </div>
          </div>

          {/* Exemplo 3 */}
          <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl p-8 border border-orange-600">
            <h2 className="text-2xl font-bold text-orange-300 mb-6">💻 Exemplo 3: O Tradutor de Código</h2>
            <p className="text-orange-100 mb-4">(Combinando Markdown e Especificidade)</p>
            <p className="text-orange-100 leading-relaxed mb-6">
              Se você trabalha com código e precisa de ajuda para entender ou traduzir trechos, este prompt é um salva-vidas:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="text-gray-200 space-y-3">
                <p><span className="text-yellow-300">**Tarefa:**</span> Explique o seguinte trecho de código Python em português, linha por linha, e depois forneça um exemplo de uso.</p>
                <br />
                <p><span className="text-yellow-300">**Código Python:**</span></p>
                <div className="bg-gray-800 rounded p-3 mt-2">
                  <p>```python</p>
                  <p>def fibonacci(n):</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;a, b = 0, 1</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;for i in range(n):</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(a, end=", ")</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a + b</p>
                  <p>```</p>
                </div>
                <br />
                <p><span className="text-yellow-300">**Formato de Saída:**</span></p>
                <br />
                <p><span className="text-yellow-300">**Explicação Linha a Linha:**</span></p>
                <p>• **Linha 1:** Explicação...</p>
                <p>• **Linha 2:** Explicação...</p>
                <br />
                <p><span className="text-yellow-300">**Exemplo de Uso:**</span></p>
                <div className="bg-gray-800 rounded p-3 mt-2">
                  <p>```python</p>
                  <p># Exemplo de como chamar a função:</p>
                  <p>fibonacci(10) # Isso irá imprimir os 10 primeiros números</p>
                  <p>```</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-2xl p-8 border border-yellow-600">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">🚀 Agora é sua vez!</h2>
            <p className="text-yellow-100 leading-relaxed">
              Com esses exemplos, você já tem um arsenal poderoso para começar a criar seus próprios prompts! A prática leva à perfeição, então não tenha medo de experimentar e ajustar. O mundo da IA está esperando por você!
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts-eficazes/tecnicas-avancadas"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Técnicas Avançadas
          </Link>
          
          <Link
            to="/guias/prompts-eficazes/dicas-de-ouro"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Dicas de Ouro
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsEficazesExemplos;
