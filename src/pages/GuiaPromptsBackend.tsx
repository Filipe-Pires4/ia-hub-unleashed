
import { Link } from 'react-router-dom';
import { Server, ArrowRight, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsBackend = () => {
  const prompts = [
    {
      title: "Sistema de Reserva de Ingressos (similar ao Ticketmaster)",
      content: "Projete e implemente um sistema de reserva de ingressos que gerencie a disponibilidade de assentos, transações e notificações em tempo real para eventos de grande escala.",
      rating: "10/10 - Muito complexo, tempo real, grande escala."
    },
    {
      title: "Sistema de Compartilhamento de Caronas (similar ao Uber)",
      content: "Desenvolva um sistema de compartilhamento de caronas com funcionalidades de geolocalização, correspondência de motoristas/passageiros, cálculo de tarifas dinâmico e processamento de pagamentos.",
      rating: "10/10 - Muito complexo, múltiplos módulos, tempo real."
    },
    {
      title: "Backend para Plataforma de Streaming de Vídeo",
      content: "Projete a arquitetura de backend para uma plataforma de streaming de vídeo, incluindo armazenamento de vídeo escalável, transcodificação, entrega de conteúdo (CDN), autenticação de usuários e gerenciamento de assinaturas.",
      rating: "10/10 - Escalável, complexo, multimídia."
    },
    {
      title: "Backend para Jogo Multiplayer Online",
      content: "Projete o backend para um jogo multiplayer online, lidando com sincronização de estado do jogo, persistência de dados de jogadores, matchmaking e comunicação entre jogadores em baixa latência.",
      rating: "10/10 - Baixa latência, complexo, jogo."
    },
    {
      title: "Backend para Plataforma de Análise de Dados em Tempo Real",
      content: "Projete um backend capaz de ingerir, processar e analisar grandes volumes de dados em tempo real, utilizando tecnologias de stream processing e bancos de dados NoSQL para dashboards analíticos.",
      rating: "10/10 - Big Data, tempo real, escalável."
    },
    {
      title: "Implementação de Web Crawler",
      content: "Implemente um web crawler para coletar dados de websites específicos, com foco em escalabilidade e resiliência a mudanças na estrutura das páginas.",
      rating: "9/10 - Complexo, funcional, escalável."
    },
    {
      title: "Prompt Complexo com Contexto (Flask)",
      content: "Python é uma linguagem popular no desenvolvimento web devido à sua simplicidade e bibliotecas poderosas. Explique as vantagens de usar Python para desenvolvimento web e forneça um exemplo de um aplicativo Flask simples.",
      rating: "9/10 - Abrangente, contextualizado, exemplo prático."
    },
    {
      title: "API RESTful para E-commerce",
      content: "Desenvolva uma API RESTful completa para um sistema de e-commerce, com endpoints para produtos, usuários, carrinhos de compras, pedidos e pagamentos, garantindo segurança, autenticação (OAuth2) e validação de dados.",
      rating: "9/10 - Completo, seguro, e-commerce."
    },
    {
      title: "Sistema de Notificações em Tempo Real",
      content: "Implemente um sistema de notificações em tempo real usando WebSockets para enviar alertas instantâneos a usuários sobre eventos como novas mensagens, atualizações de status ou transações.",
      rating: "9/10 - Tempo real, WebSockets, alertas."
    },
    {
      title: "Sistema de Gerenciamento de Conteúdo (CMS) Headless",
      content: "Desenvolva um CMS headless com uma API robusta para gerenciar e entregar conteúdo para diferentes frontends (web, mobile, IoT), incluindo autenticação baseada em token e controle de acesso baseado em funções.",
      rating: "9/10 - Flexível, API, segurança."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Server className="h-8 w-8 text-green-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Prompts de Backend</h1>
          </div>
          <p className="text-xl text-gray-300">
            Concentram-se na arquitetura e implementação de sistemas de servidor, desde APIs RESTful até soluções de processamento de dados em tempo real.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-8">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-green-300 mb-4">
                  {index + 1}. {prompt.title}
                </h3>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg mb-4 border border-gray-600">
                <p className="text-gray-300 leading-relaxed italic">
                  "{prompt.content}"
                </p>
              </div>
              
              <div className="text-sm text-green-400 font-medium">
                <strong>Avaliação:</strong> {prompt.rating}
              </div>
            </div>
          ))}
        </div>

        {/* Navegação */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <Link
            to="/guias/prompts/crm"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Prompts de CRM
          </Link>
          
          <Link
            to="/guias/prompts/frontend"
            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo: Prompts de Frontend
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsBackend;
