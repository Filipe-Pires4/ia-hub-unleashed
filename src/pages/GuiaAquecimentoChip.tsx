import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, AlertTriangle, Smartphone, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaAquecimentoChip = () => {
  const chapters = [
    {
      title: "Criptografia e Metadados",
      description: "Entenda por que o WhatsApp não lê suas mensagens e o que ele realmente monitora.",
      icon: Shield,
      link: "/guias/aquecimento-chip/criptografia",
      readTime: "8 min"
    },
    {
      title: "Cronograma de Aquecimento",
      description: "O passo a passo completo para aquecer seu chip em 30 dias com segurança.",
      icon: Clock,
      link: "/guias/aquecimento-chip/cronograma",
      readTime: "10 min"
    },
    {
      title: "APIs e Boas Práticas",
      description: "Como usar Evolution API, Baileys e outras ferramentas de forma segura.",
      icon: Smartphone,
      link: "/guias/aquecimento-chip/apis",
      readTime: "12 min"
    },
    {
      title: "Erros Fatais e Recuperação",
      description: "Os erros que destroem seu chip e como se recuperar de um ban.",
      icon: AlertTriangle,
      link: "/guias/aquecimento-chip/erros",
      readTime: "8 min"
    },
    {
      title: "Casos de Uso e FAQ",
      description: "Exemplos reais, integração com n8n e respostas para as dúvidas mais comuns.",
      icon: MessageCircle,
      link: "/guias/aquecimento-chip/casos-de-uso",
      readTime: "15 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              NOVO
            </span>
            <span className="bg-purple-600 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
              WhatsApp
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            A Verdade Sobre Aquecimento de Chip no WhatsApp
          </h1>
          <p className="text-xl text-gray-300">
            O Que o WhatsApp Realmente Monitora e Como Aquecer Seu Chip Corretamente
          </p>
        </div>

        {/* Introdução */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Se você está começando a trabalhar com automações no WhatsApp, precisa entender uma coisa fundamental que poucas pessoas explicam direito: <strong className="text-white">o WhatsApp não lê suas mensagens</strong>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Isso mesmo. O conteúdo do que você escreve é irrelevante para o aquecimento do chip.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Neste guia completo, vou explicar de forma detalhada (mas mastigada) como funciona todo esse processo por trás das cortinas e por que você pode literalmente mandar "asjdhasjkdhaskjd" ou uma figurinha aleatória que o efeito para o aquecimento será o mesmo de uma mensagem elaborada.
          </p>
        </div>

        {/* O que você vai aprender */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Shield className="h-6 w-6 text-purple-400 mr-3" />
            O Que Você Vai Aprender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-300">✅ Por que o conteúdo das mensagens não importa</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-300">✅ O que o WhatsApp realmente monitora (metadados)</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-300">✅ Cronograma completo de 30 dias de aquecimento</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-300">✅ Como usar APIs não oficiais com segurança</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-300">✅ Erros fatais que destroem seu chip</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-300">✅ Casos de uso reais e integração com n8n</p>
            </div>
          </div>
        </div>

        {/* Capítulos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Capítulos do Guia</h2>
          <div className="space-y-4">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <Link
                  key={index}
                  to={chapter.link}
                  className="block bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                      <Icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {index + 1}. {chapter.title}
                        </h3>
                        <span className="text-sm text-gray-400">{chapter.readTime}</span>
                      </div>
                      <p className="text-gray-400">{chapter.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-purple-100 mb-6">
            Comece pelo primeiro capítulo e entenda a verdade sobre a criptografia do WhatsApp.
          </p>
          <Link
            to="/guias/aquecimento-chip/criptografia"
            className="inline-flex items-center bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Começar a Ler
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaAquecimentoChip;
