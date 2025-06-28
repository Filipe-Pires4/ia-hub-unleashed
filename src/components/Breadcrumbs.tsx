
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const getBreadcrumbName = (path: string) => {
    const names: { [key: string]: string } = {
      'guias': 'Guias',
      'prompts': 'Guia de Prompts',
      'como-criar-prompt': 'Como Criar um Bom Prompt',
      'saas': 'Prompts de SaaS',
      'landing-page': 'Prompts de Landing Page',
      'crm': 'Prompts de CRM',
      'backend': 'Prompts de Backend',
      'frontend': 'Prompts de Frontend',
      'arquitetura': 'Prompts de Arquitetura',
      'engenharia-prompt': 'Prompts de Engenharia de Prompt',
      'ferramentas': 'Ferramentas',
      'projetos': 'Projetos & Desafios',
      'sobre': 'Sobre',
      'sugestoes': 'Caixa de Sugestões',
      'apoie': 'Apoie a Comunidade'
    };
    return names[path] || path;
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
      <Link to="/" className="flex items-center hover:text-purple-400 transition-colors">
        <Home className="h-4 w-4" />
        <span className="ml-1">Início</span>
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <div key={name} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-gray-600" />
            {isLast ? (
              <span className="text-purple-400 font-medium">
                {getBreadcrumbName(name)}
              </span>
            ) : (
              <Link 
                to={routeTo} 
                className="hover:text-purple-400 transition-colors"
              >
                {getBreadcrumbName(name)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
