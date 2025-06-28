
import { ExternalLink, Star, Wrench, Zap, Brain, Image, MessageSquare, Code } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Ferramentas = () => {
  const essentialTools = [
    {
      name: "ChatGPT",
      logo: "🤖",
      description: "A ferramenta de IA conversacional mais popular do mundo. Ideal para texto, código e ideias.",
      category: "Conversacional",
      isPaid: true,
      rating: 4.8,
      features: ["Conversação natural", "Geração de código", "Análise de texto"],
      guideLink: "/guias/chatgpt-guide"
    },
    {
      name: "Claude",
      logo: "🧠",
      description: "IA conversacional da Anthropic, excelente para análises complexas e raciocínio lógico.",
      category: "Conversacional",
      isPaid: true,
      rating: 4.7,
      features: ["Raciocínio lógico", "Análise de documentos", "Conversação ética"],
      guideLink: "/guias/claude-guide"
    },
    {
      name: "Midjourney",
      logo: "🎨",
      description: "Criação de imagens de alta qualidade através de prompts de texto.",
      category: "Geração de Imagem",
      isPaid: true,
      rating: 4.9,
      features: ["Arte digital", "Fotorealismo", "Estilos variados"],
      guideLink: "/guias/midjourney-guide"
    }
  ];

  const additionalTools = [
    {
      name: "Perplexity AI",
      logo: "🔍",
      description: "Motor de busca inteligente que fornece respostas com fontes verificadas.",
      category: "Pesquisa",
      isPaid: false,
      rating: 4.6,
      features: ["Busca inteligente", "Fontes verificadas", "Resumos automáticos"]
    },
    {
      name: "Runway ML",
      logo: "🎬",
      description: "Ferramentas de IA para criação e edição de vídeos profissionais.",
      category: "Vídeo",
      isPaid: true,
      rating: 4.5,
      features: ["Edição de vídeo", "Efeitos visuais", "Geração de cenas"]
    },
    {
      name: "GitHub Copilot",
      logo: "👨‍💻",
      description: "Assistente de programação que sugere código em tempo real.",
      category: "Programação",
      isPaid: true,
      rating: 4.4,
      features: ["Sugestões de código", "Múltiplas linguagens", "Integração com IDEs"]
    },
    {
      name: "DALL-E 3",
      logo: "🖼️",
      description: "Gerador de imagens da OpenAI integrado ao ChatGPT.",
      category: "Geração de Imagem",
      isPaid: true,
      rating: 4.3,
      features: ["Geração de imagens", "Integração ChatGPT", "Alta qualidade"]
    },
    {
      name: "Stable Diffusion",
      logo: "🌟",
      description: "Modelo open-source para geração de imagens, gratuito e personalizável.",
      category: "Geração de Imagem",
      isPaid: false,
      rating: 4.2,
      features: ["Open source", "Personalizável", "Comunidade ativa"]
    },
    {
      name: "Notion AI",
      logo: "📝",
      description: "IA integrada ao Notion para produtividade e organização de conteúdo.",
      category: "Produtividade",
      isPaid: true,
      rating: 4.1,
      features: ["Escrita assistida", "Organização", "Integração Notion"]
    }
  ];

  const categories = [
    { name: "Conversacional", icon: MessageSquare, color: "text-blue-400" },
    { name: "Geração de Imagem", icon: Image, color: "text-green-400" },
    { name: "Programação", icon: Code, color: "text-yellow-400" },
    { name: "Pesquisa", icon: Brain, color: "text-purple-400" },
    { name: "Vídeo", icon: Zap, color: "text-red-400" },
    { name: "Produtividade", icon: Star, color: "text-pink-400" }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.name === category);
    if (!categoryData) return MessageSquare;
    return categoryData.icon;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.name === category);
    return categoryData?.color || "text-gray-400";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Wrench className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Ferramentas de IA</h1>
          </div>
          <p className="text-xl text-gray-300">
            Descubra as melhores ferramentas de IA para turbinar sua produtividade e criatividade.
          </p>
        </div>

        {/* Ferramentas Essenciais */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Zap className="h-6 w-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold">Ferramentas Essenciais</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essentialTools.map((tool, index) => {
              const CategoryIcon = getCategoryIcon(tool.category);
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-2xl p-6 border border-purple-500 hover:border-purple-400 transition-all duration-300 group hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{tool.logo}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                        <div className="flex items-center">
                          <CategoryIcon className={`h-4 w-4 mr-1 ${getCategoryColor(tool.category)}`} />
                          <span className="text-sm text-gray-400">{tool.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {tool.isPaid ? (
                        <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                          PAGO
                        </span>
                      ) : (
                        <span className="bg-green-500 text-green-900 px-2 py-1 rounded text-xs font-bold">
                          GRÁTIS
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(tool.rating)}
                    </div>
                    <span className="text-sm text-gray-400">{tool.rating}/5</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Principais recursos:</h4>
                    <ul className="space-y-1">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Acessar
                    </button>
                    <button className="flex-1 bg-transparent border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Ver Guia
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Outras Ferramentas */}
        <section>
          <div className="flex items-center mb-8">
            <Brain className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold">Outras Ferramentas Úteis</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalTools.map((tool, index) => {
              const CategoryIcon = getCategoryIcon(tool.category);
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{tool.logo}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                        <div className="flex items-center">
                          <CategoryIcon className={`h-3 w-3 mr-1 ${getCategoryColor(tool.category)}`} />
                          <span className="text-xs text-gray-400">{tool.category}</span>
                        </div>
                      </div>
                    </div>
                    {tool.isPaid ? (
                      <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                        PAGO
                      </span>
                    ) : (
                      <span className="bg-green-500 text-green-900 px-2 py-1 rounded text-xs font-bold">
                        GRÁTIS
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {renderStars(tool.rating)}
                    </div>
                    <span className="text-xs text-gray-400">{tool.rating}/5</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1 h-1 bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <button className="w-full bg-transparent border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Acessar Ferramenta
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Categories Overview */}
        <section className="mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Categorias de Ferramentas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${category.color}`} />
                  <h3 className="text-sm font-medium text-white">{category.name}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ferramentas;
