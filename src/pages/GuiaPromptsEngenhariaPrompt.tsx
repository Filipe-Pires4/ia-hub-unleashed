
import { Link } from 'react-router-dom';
import { Wrench, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const GuiaPromptsEngenhariaPrompt = () => {
  const prompts = [
    {
      title: "Prompt para Geração de Documentação de API",
      content: "Dada a seguinte especificação de API RESTful em OpenAPI (Swagger), gere a documentação completa da API em formato Markdown, incluindo exemplos de requisições e respostas para cada endpoint.",
      rating: "10/10 - Completo, documentação, formato."
    },
    {
      title: "Prompt Complexo com Contexto (Flask)",
      content: "Python é uma linguagem popular no desenvolvimento web devido à sua simplicidade e bibliotecas poderosas. Explique as vantagens de usar Python para desenvolvimento web e forneça um exemplo de um aplicativo Flask simples.",
      rating: "9/10 - Abrangente, contextualizado, exemplo prático."
    },
    {
      title: "Prompt para Geração de Testes Unitários",
      content: "Dada a seguinte função Python, gere testes unitários abrangentes usando o framework pytest que cubram casos de sucesso, falha e borda.",
      rating: "9/10 - Específico, funcional, testes."
    },
    {
      title: "Prompt para Refatoração de Código",
      content: "Refatore o seguinte trecho de código JavaScript para melhorar a legibilidade, performance e aderência aos padrões de código modernos, explicando as mudanças realizadas.",
      rating: "9/10 - Refatoração, qualidade, explicação."
    },
    {
      title: "Prompt para Depuração de Erros",
      content: "Analise o seguinte traceback de erro Python e sugira possíveis causas e soluções para o problema, incluindo exemplos de código corrigido.",
      rating: "9/10 - Depuração, análise, solução."
    },
    {
      title: "Geração de Código (Python - Fatorial)",
      content: "Escreva uma função Python que calcula o fatorial de um número.",
      rating: "8/10 - Claro, específico, funcional."
    },
    {
      title: "Few-shot Prompt (Tradução)",
      content: "Traduza as seguintes frases em inglês para o espanhol: 1. 'Good morning' - 'Buenos días' 2. 'How are you?' - '¿Cómo estás?' 3. 'Thank you' - 'Gracias' Agora, traduza isto: 'Good night'.",
      rating: "8/10 - Demonstra few-shot, claro."
    },
    {
      title: "Zero-shot Prompt (Explicação de Conceito)",
      content: "Explique o significado das leis de movimento de Newton.",
      rating: "8/10 - Demonstra zero-shot, conceitual."
    },
    {
      title: "Ajustando Temperatura (Slogan - Baixa Temperatura)",
      content: "Gere um slogan para uma nova startup de tecnologia focada em IA.",
      rating: "8/10 - Demonstra controle de temperatura, conciso."
    },
    {
      title: "Ajustando Temperatura (Slogan - Alta Temperatura)",
      content: "Gere um slogan para uma nova startup de tecnologia focada em IA.",
      rating: "8/10 - Demonstra controle de temperatura, criativo."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Wrench className="h-8 w-8 text-orange-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Prompts de Engenharia de Prompt</h1>
          </div>
          <p className="text-xl text-gray-300">
            Exemplos práticos e técnicas avançadas para criar prompts mais eficazes, incluindo few-shot, zero-shot e controle de parâmetros.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-8">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-orange-300 mb-4">
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
            to="/guias/prompts/arquitetura"
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior: Prompts de Arquitetura
          </Link>
          
          <Link
            to="/guias/prompts"
            className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voltar ao Hub de Prompts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaPromptsEngenhariaPrompt;
