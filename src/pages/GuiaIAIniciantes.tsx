
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ArrowLeft, Star, Brain, Eye, MessageSquare, Zap, Shield, Users, TrendingUp, Lightbulb } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaIAIniciantes = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Brain className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Seu Guia Ninja para Dominar a Inteligência Artificial</h1>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
              <Star className="h-4 w-4 mr-1" />
              ESSENCIAL
            </span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              NOVO
            </span>
          </div>
          <p className="text-xl text-gray-300">
            Tudo o que você precisa saber para começar sua jornada na IA. Este guia abrangente cobre desde conceitos básicos até as primeiras aplicações práticas.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-12">
          {/* Seção 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">1. Introdução: Desvende os Segredos da IA (Sem Dor de Cabeça!)</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                E aí, futuro mestre da IA! Se você ouve falar de Inteligência Artificial em todo canto e fica com a sensação de que é um clube secreto para gênios da tecnologia, pode relaxar. A verdade é que a IA é como um superpoder que qualquer um pode aprender a usar, e este guia é o seu mapa do tesouro.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Esqueça o jargão complicado e o tom monótono. Aqui, vamos seguir um caminho claro, passo a passo, para você entender o que é essa tal de IA, como ela já faz parte da sua vida e, o mais importante, como usá-la a seu favor. Nosso objetivo? Fazer você entender, usar e se divertir com a IA. Vamos começar essa jornada?
              </p>
            </div>
          </section>

          {/* Seção 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">2. O que Raios é IA?</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                Vamos direto ao ponto, sem enrolação.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pense na Inteligência Artificial como um estagiário superpoderoso e incansável. No primeiro dia, ele não sabe nada sobre você ou seu trabalho. Mas ele aprende MUITO rápido.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você mostrar a ele 1.000 fotos de gatos, ele vai aprender o que é um "gato". Depois, se você mostrar uma foto nova, ele dirá com uma certeza impressionante: "Isso é um gato!". Se você der a ele todos os seus e-mails e mostrar como você separa o que é importante do que é spam, em pouco tempo ele fará isso sozinho para você.
              </p>
              <div className="bg-purple-900/30 border border-purple-500 rounded-lg p-4">
                <p className="text-purple-200 font-medium">
                  <strong>Em resumo:</strong> IA é a arte de ensinar máquinas a reconhecer padrões e tomar decisões baseadas em dados. Não é mágica, é aprendizado em alta velocidade.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">3. A IA no seu Dia a Dia (Você já usa e nem sabia!)</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                Acha que IA é coisa do futuro? Que nada! Ela já está no seu bolso, na sua TV, no seu carro... Você usa essa tecnologia todos os dias, quer ver?
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300"><strong className="text-white">Para escolher o filme de sexta:</strong> A Netflix usa IA para analisar tudo o que você já assistiu e sugerir seu próximo filme ou série favorita.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300"><strong className="text-white">Para ouvir a música perfeita:</strong> O Spotify cria playlists como "Descobertas da Semana" porque a IA dele aprendeu seu gosto musical e o compara com o de milhões de outras pessoas.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300"><strong className="text-white">Para fugir do trânsito:</strong> O Waze e o Google Maps usam IA para analisar dados de trânsito em tempo real e encontrar a rota mais rápida, prevendo engarrafamentos.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300"><strong className="text-white">Para escrever uma mensagem:</strong> O corretor ortográfico do seu celular que sugere a próxima palavra? Pura IA, aprendendo com os padrões de escrita de bilhões de frases.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300"><strong className="text-white">Para manter sua caixa de entrada limpa:</strong> O filtro de spam do seu e-mail é um ótimo exemplo de IA treinada para identificar e separar o lixo eletrônico das mensagens importantes.</p>
                </div>
              </div>
              <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 mt-6">
                <p className="text-green-200">
                  Viu só? A IA já é sua parceira e torna sua vida mais fácil de várias formas.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">4. Como a IA "Aprende" e Por Que Isso é Útil para Você</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                Entender o básico de como a IA aprende é o que separa os amadores dos ninjas. Como vimos, a IA aprende com exemplos (dados). Quanto melhores os exemplos, melhor o aprendizado.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pense em fazer um bolo. Se você der ao seu "estagiário" (a IA) ingredientes de alta qualidade e uma receita clara, o bolo sairá delicioso. Se os ingredientes forem ruins ou a receita for confusa, o resultado será um desastre.
              </p>
              <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4">
                <h4 className="font-bold text-blue-200 mb-2">Por que isso é útil?</h4>
                <p className="text-blue-200">
                  Porque ao "conversar" com a IA, você é o responsável por dar os ingredientes e a receita! O "contexto" que você fornece, os "exemplos" que você dá... tudo isso são os dados que a IA usará para te dar uma resposta. Um bom "chef de IA" (você!) sabe que precisa fornecer o melhor material para obter um resultado incrível. É por isso que aprender a criar bons pedidos (prompts) é tão importante!
                </p>
              </div>
            </div>
          </section>

          {/* Seção 5 - Framework P.R.O.M.P.T */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">5. Como Criar Prompts (A Receita Secreta)</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                "Prompt" é simplesmente o nome do pedido que você faz para a IA. Criar um bom prompt é a habilidade mais valiosa neste novo mundo. Para facilitar, use o Framework P.R.O.M.P.T. como seu checklist secreto:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">P - Persona</h4>
                  <p className="text-gray-300 text-sm">Diga à IA "quem" ela deve ser.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">R - Roteiro</h4>
                  <p className="text-gray-300 text-sm">Deixe a tarefa clara.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">O - Objetivo</h4>
                  <p className="text-gray-300 text-sm">Explique qual o resultado final.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">M - Modelo</h4>
                  <p className="text-gray-300 text-sm">Diga como a resposta deve ser formatada.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">P - Panorama</h4>
                  <p className="text-gray-300 text-sm">Dê todo o contexto necessário.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">T - Transformar</h4>
                  <p className="text-gray-300 text-sm">Peça ajustes até ficar perfeito.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 6 - Exemplos de Prompts */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">6. Prompts de Exemplo (Para Copiar, Colar e Testar!)</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h4 className="font-bold text-cyan-300 mb-3">Exemplo 1: Escrever um E-mail Profissional</h4>
                <div className="bg-gray-900 p-4 rounded border border-gray-600">
                  <p className="text-gray-300 italic">
                    "[P] Aja como um gerente de projetos sênior. [R] Escreva um e-mail para a equipe. [P] O contexto é que o prazo do 'Projeto X' foi adiado em uma semana, para o dia 15. [O] O objetivo é comunicar a nova data de forma clara e manter a equipe motivada. [M] O tom deve ser profissional, mas encorajador."
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h4 className="font-bold text-cyan-300 mb-3">Exemplo 2: Ideias para Redes Sociais</h4>
                <div className="bg-gray-900 p-4 rounded border border-gray-600">
                  <p className="text-gray-300 italic">
                    "[P] Você é um especialista em mídias sociais para pequenas empresas. [P] Meu negócio é uma livraria de bairro. [R] Me dê 5 ideias de posts para o Instagram. [O] O objetivo é atrair mais gente para a loja física. [M] Apresente as ideias em uma lista, com um título e uma pequena descrição para cada uma."
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h4 className="font-bold text-cyan-300 mb-3">Exemplo 3: Planejar uma Viagem</h4>
                <div className="bg-gray-900 p-4 rounded border border-gray-600">
                  <p className="text-gray-300 italic">
                    "[P] Aja como um guia de viagens experiente. [R] Crie um roteiro de 3 dias em Lisboa, Portugal. [P] Eu gosto de história, boa comida e de andar a pé. Meu orçamento é moderado. [O] O objetivo é ter um plano diário com sugestões de passeios e restaurantes. [M] Organize o roteiro por dia (Dia 1, Dia 2, Dia 3)."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 7 - Dicas Ninja */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">7. Dicas Ninja (Os Truques dos Mestres)</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-6 border border-yellow-500">
                <h4 className="font-bold text-yellow-300 mb-3 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Dica Ninja 1: "Pense Passo a Passo"
                </h4>
                <p className="text-yellow-100">
                  Se a tarefa for complexa, adicione a frase mágica "pense passo a passo" no final do seu pedido. Isso força a IA a organizar o raciocínio, resultando em respostas mais lógicas e completas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg p-6 border border-green-500">
                <h4 className="font-bold text-green-300 mb-3 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Dica Ninja 2: Dê Bons Exemplos
                </h4>
                <p className="text-green-100">
                  A IA aprende com exemplos. Em vez de apenas descrever, mostre o que você quer. Ex: "Traduza a frase 'eu te amo' para o japonês no mesmo estilo de 'maçã = ringo'".
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg p-6 border border-blue-500">
                <h4 className="font-bold text-blue-300 mb-3 flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Dica Ninja 3: Peça Formatos Criativos
                </h4>
                <p className="text-blue-100">
                  Não se limite a texto. Peça para a IA criar tabelas, listas, códigos, poemas ou até o roteiro de um vídeo. Ex: "Crie uma tabela comparando os prós e contras de morar em São Paulo e no Rio de Janeiro."
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-lg p-6 border border-red-500">
                <h4 className="font-bold text-red-300 mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Dica Ninja 4: Dê uma Saída para a IA
                </h4>
                <p className="text-red-100">
                  Para evitar que a IA "invente" informações (o que chamam de alucinação), termine seu prompt com: "Se você não tiver certeza da resposta, apenas diga que não sabe".
                </p>
              </div>
            </div>
          </section>

          {/* Seção 8 - Tipos de IA */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">8. Tipos de IA: Conheça os Superpoderes por Trás da Magia</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                A Inteligência Artificial não é uma coisa só, mas um campo vasto com várias especialidades. Entender um pouco sobre elas vai te ajudar a ver a IA com outros olhos e a identificar onde cada "superpoder" está sendo usado no seu dia a dia. Vamos conhecer os principais:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-700 rounded-lg p-5">
                  <h4 className="font-bold text-blue-300 mb-3 flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    Machine Learning (Aprendizado de Máquina)
                  </h4>
                  <p className="text-gray-300">
                    Imagine que você quer ensinar um computador a identificar cachorros em fotos. Em vez de programar cada regra, você mostra milhares de fotos de cachorros. O Machine Learning é exatamente isso: a capacidade de sistemas aprenderem a partir de dados, identificar padrões e fazer previsões sem serem explicitamente programados para cada tarefa.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-5">
                  <h4 className="font-bold text-purple-300 mb-3 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Deep Learning (Aprendizado Profundo)
                  </h4>
                  <p className="text-gray-300">
                    O Deep Learning é um subcampo do Machine Learning, inspirado no funcionamento do cérebro humano (redes neurais). Pense em camadas e camadas de "neurônios" artificiais que processam informações de forma hierárquica. É o que permite à IA reconhecer rostos em fotos, entender a fala humana e até dirigir carros autônomos.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-5">
                  <h4 className="font-bold text-green-300 mb-3 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Processamento de Linguagem Natural (PLN)
                  </h4>
                  <p className="text-gray-300">
                    Sabe quando você conversa com a Siri, a Alexa ou o Google Assistente? Isso é PLN em ação! É o ramo da IA que permite que computadores entendam, interpretem e gerem linguagem humana. É fundamental para chatbots, tradutores automáticos e para a própria capacidade de entender e responder aos seus prompts.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-5">
                  <h4 className="font-bold text-cyan-300 mb-3 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Visão Computacional
                  </h4>
                  <p className="text-gray-300">
                    Se a IA fosse um ser humano, a Visão Computacional seria a sua capacidade de "ver". É a área que permite que computadores "entendam" e interpretem imagens e vídeos. Desde o reconhecimento facial em seu smartphone até a detecção de objetos em carros autônomos e a análise de imagens médicas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 9 - Ética */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">9. Ética e Limitações da IA: O Lado Ninja da Responsabilidade</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                Como todo superpoder, a IA vem com grandes responsabilidades. É importante entender que, apesar de incrível, a IA não é perfeita e levanta questões importantes que todos nós, como usuários e cidadãos, devemos considerar.
              </p>
              
              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                  <h4 className="font-bold text-red-300 mb-2">O Problema do Viés (Bias)</h4>
                  <p className="text-red-100 text-sm">
                    A IA aprende com os dados que lhe são fornecidos. Se esses dados refletem preconceitos existentes, a IA pode aprender e replicar esses vieses. É crucial trabalhar para criar e usar IAs mais justas e inclusivas.
                  </p>
                </div>

                <div className="bg-orange-900/20 border border-orange-500 rounded-lg p-4">
                  <h4 className="font-bold text-orange-300 mb-2">Privacidade e Segurança dos Dados</h4>
                  <p className="text-orange-100 text-sm">
                    Para que a IA funcione, ela precisa de dados – muitos dados! Isso levanta preocupações sobre como nossas informações pessoais são coletadas, armazenadas e usadas. É fundamental garantir a privacidade e a segurança dos dados.
                  </p>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-300 mb-2">A "Alucinação" da IA</h4>
                  <p className="text-yellow-100 text-sm">
                    Às vezes a IA gera informações que parecem plausíveis, mas são incorretas ou inventadas. Sempre verifique informações críticas geradas por IA, especialmente em tópicos sensíveis ou factuais.
                  </p>
                </div>

                <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-4">
                  <h4 className="font-bold text-blue-300 mb-2">O Impacto no Mercado de Trabalho</h4>
                  <p className="text-blue-100 text-sm">
                    A IA está transformando o mercado de trabalho, automatizando tarefas repetitivas e criando novas profissões. A adaptabilidade, a criatividade, o pensamento crítico e a capacidade de colaborar com a IA serão cada vez mais valorizados.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 10 - Ferramentas */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">10. Ferramentas de IA para o Dia a Dia: Seus Novos Aliados Ninja</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                Você não precisa ser um programador para começar a usar a IA a seu favor. Existem diversas ferramentas acessíveis que podem turbinar sua produtividade e criatividade:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Chatbots e Assistentes de Escrita</h4>
                    <p className="text-gray-300 text-sm">ChatGPT, Google Bard, Microsoft Copilot - Perfeitos para gerar ideias, escrever rascunhos, criar conteúdo e estudar.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Eye className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Ferramentas de Geração de Imagens</h4>
                    <p className="text-gray-300 text-sm">Midjourney, DALL-E, Stable Diffusion - Transforme suas ideias em imagens incríveis com apenas algumas palavras.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Ferramentas de Transcrição e Resumo</h4>
                    <p className="text-gray-300 text-sm">Transcreva reuniões ou resuma palestras automaticamente, economizando horas de trabalho manual.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Tradutores Inteligentes</h4>
                    <p className="text-gray-300 text-sm">Google Translate com IA - Vão além da tradução palavra por palavra, entendendo contexto e nuances.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 11 - Futuro */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">11. O Futuro da IA e o Mercado de Trabalho: Prepare-se para a Revolução Ninja</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                A IA não é apenas uma ferramenta; é uma força transformadora que está remodelando indústrias inteiras e a forma como trabalhamos. Entender para onde ela está indo e como se posicionar é crucial para o seu sucesso.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-6 border border-purple-500 mb-6">
                <h4 className="font-bold text-purple-300 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Novas Habilidades para um Novo Mundo
                </h4>
                <div className="space-y-2">
                  <p className="text-purple-100 text-sm">• <strong>Pensamento Crítico:</strong> Fazer as perguntas certas e interpretar resultados complexos</p>
                  <p className="text-purple-100 text-sm">• <strong>Criatividade e Inovação:</strong> A faísca da criatividade original continua sendo humana</p>
                  <p className="text-purple-100 text-sm">• <strong>Inteligência Emocional:</strong> Trabalhar em equipe e liderar são habilidades insubstituíveis</p>
                  <p className="text-purple-100 text-sm">• <strong>Adaptabilidade:</strong> Aprender novas ferramentas e se adaptar será sua maior vantagem</p>
                </div>
              </div>
              
              <div className="bg-green-900/30 border border-green-500 rounded-lg p-4">
                <h4 className="font-bold text-green-300 mb-2">O Futuro é Colaborativo</h4>
                <p className="text-green-200 text-sm">
                  O cenário mais provável não é a substituição total do trabalho humano pela IA, mas sim uma colaboração. Profissionais que souberem integrar a IA em seus fluxos de trabalho serão os mais bem-sucedidos. A IA será sua assistente, sua pesquisadora, sua co-criadora.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 12 - Recursos */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">12. Recursos Adicionais: Continue sua Jornada Ninja!</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                Sua jornada para dominar a IA está apenas começando! Para aqueles que querem se aprofundar ainda mais, aqui estão algumas sugestões de onde buscar mais conhecimento:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">Cursos Online</h4>
                  <p className="text-gray-300 text-sm">Coursera, Udemy, edX e Alura oferecem cursos de introdução à IA e Machine Learning.</p>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-green-300 mb-2">Livros</h4>
                  <p className="text-gray-300 text-sm">Procure por livros que desmistifiquem a IA para não-especialistas.</p>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-300 mb-2">Podcasts</h4>
                  <p className="text-gray-300 text-sm">Muitos podcasts exploram o mundo da IA de forma acessível e didática.</p>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-pink-300 mb-2">Comunidades Online</h4>
                  <p className="text-gray-300 text-sm">Participe de fóruns e grupos dedicados à IA para trocar experiências.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-300">13. Conclusão: Seu Superpoder Foi Ativado!</h2>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 border border-purple-500">
              <p className="text-purple-100 leading-relaxed mb-4">
                Pronto! Você agora tem o mapa, as ferramentas, a receita secreta e os truques ninja para iniciar sua jornada no incrível universo da Inteligência Artificial. Você viu que ela não é um bicho de sete cabeças, já faz parte da sua vida e, o mais importante, pode ser uma aliada poderosa.
              </p>
              <p className="text-purple-100 leading-relaxed">
                Lembre-se que o segredo não é saber tudo, mas sim manter a curiosidade acesa e a vontade de experimentar. A IA não é o futuro, ela é o presente. E agora, você faz parte dele. Vá em frente, teste, crie, divirta-se e descubra o que esse novo superpoder pode fazer por você!
              </p>
            </div>
          </section>
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Guias
          </Link>
          
          <Link
            to="/guias/prompts"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Guia de Prompts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaIAIniciantes;
