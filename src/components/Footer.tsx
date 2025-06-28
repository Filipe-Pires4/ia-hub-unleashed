
import { Link } from 'react-router-dom';
import { Home, BookOpen, Wrench, Trophy, User, MessageSquare, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Início', path: '/', icon: Home },
    { name: 'Guias', path: '/guias', icon: BookOpen },
    { name: 'Ferramentas', path: '/ferramentas', icon: Wrench },
    { name: 'Projetos & Desafios', path: '/projetos', icon: Trophy },
    { name: 'Sobre', path: '/sobre', icon: User },
    { name: 'Caixa de Sugestões', path: '/sugestoes', icon: MessageSquare },
    { name: 'Apoie a Comunidade', path: '/apoie', icon: Heart },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/b5021d0e-d18d-4317-b365-d081f9581df5.png" 
                alt="IA Hub Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">IA Hub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sua jornada na Inteligência Artificial começa aqui. Explore, aprenda e crie com nossa comunidade.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="col-span-2">
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors text-sm py-1"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 IA Hub. Construído com 💜 para nossa comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
