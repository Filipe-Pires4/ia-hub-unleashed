import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (pathname: string) => {
    const breadcrumbMap: { [key: string]: string } = {
      'guias': 'Guias',
      'prompts': 'Guia de Prompts',
      'prompts-eficazes': 'Como Criar Prompts Eficazes',
      'o-que-e-ia': 'O que é IA?',
      'importancia-prompts': 'Importância dos Prompts',
      'como-criar-prompts': 'Como Criar Prompts',
      'tecnicas-avancadas': 'Técnicas Avançadas',
      'exemplos-praticos': 'Exemplos Práticos',
      'dicas-de-ouro': 'Dicas de Ouro',
      'ia-iniciantes': 'IA para Iniciantes',
      'como-criar-prompt': 'Como Criar um Bom Prompt',
      'saas': 'Prompts de SaaS',
      'landing-page': 'Prompts de Landing Page',
      'crm': 'Prompts de CRM',
      'backend': 'Prompts de Backend',
      'frontend': 'Prompts de Frontend',
      'arquitetura': 'Prompts de Arquitetura',
      'engenharia-prompt': 'Engenharia de Prompt',
      'humanizacao-agentes': 'Humanização de Agentes',
      'contraintuicao': 'A Contraintuição Digital',
      'micromomentos': 'Micromomentos Inesperados',
      'dicas-ninjas': 'Dicas Ninjas',
      'pratica': 'Seção Prática',
      'ferramentas': 'Ferramentas',
      'projetos': 'Projetos & Desafios',
      'sobre': 'Sobre',
      'sugestoes': 'Caixa de Sugestões',
      'apoie': 'Apoie a Comunidade'
    };
    return breadcrumbMap[pathname] || pathname;
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center text-sm text-gray-400 mb-6">
      <Link to="/" className="hover:text-purple-400 transition-colors">
        Início
      </Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={pathname} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2" />
            {isLast ? (
              <span className="text-gray-200">{getBreadcrumbName(pathname)}</span>
            ) : (
              <Link 
                to={routeTo} 
                className="hover:text-purple-400 transition-colors"
              >
                {getBreadcrumbName(pathname)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
