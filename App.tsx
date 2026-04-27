
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NXBadge } from './components/NXBadge';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ManagementVision from './pages/ManagementVision';
import HowWeWork from './pages/HowWeWork';
import AreasOfAction from './pages/AreasOfAction';
import CaseStudy from './pages/CaseStudy';
import TargetAudience from './pages/TargetAudience';
import Contact from './pages/Contact';

// Detail Pages
import AreaLeasing from './pages/areas/AreaLeasing';
import AreaOperations from './pages/areas/AreaOperations';
import AreaFinancial from './pages/areas/AreaFinancial';
import AreaCommercial from './pages/areas/AreaCommercial';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';

const ScrollEffects = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, .line-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'A Méritum', path: '/a-meritum' },
    { name: 'Visão', path: '/visao-de-gestao' },
    { name: 'Método', path: '/como-atuamos' },
    { name: 'Atuação', path: '/atuacao' },
    { name: 'Caso Real', path: '/caso-real' },
    { name: 'Filtro', path: '/para-quem-atuamos' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-header py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img
            src="/assets/logos/4.svg"
            alt="Méritum Hotéis"
            className={`h-10 md:h-12 transition-all duration-300 group-hover:opacity-80 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[9px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 group hover:text-[#c5a059] ${
                scrolled ? 'text-[#0d2039]' : 'text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 bg-[#c5a059] ${
                location.pathname.startsWith(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <Link
            to="/contato"
            className={`px-10 py-4 text-[9px] uppercase tracking-[0.3em] font-bold transition-all duration-300 border hover:bg-[#c5a059] hover:border-[#c5a059] hover:text-white ${
              scrolled ? 'border-[#0d2039] text-[#0d2039]' : 'border-white text-white'
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden transition-colors hover:text-[#c5a059] ${scrolled ? 'text-[#0d2039]' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 gradient-blue transition-all duration-1000 ease-in-out lg:hidden z-40 flex flex-col items-center justify-center space-y-10 ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center watermark watermark-animate opacity-[0.03]">
            <img src="/3.svg" alt="" className="w-96 h-96 brightness-0 invert" />
          </div>

          <div className="relative space-y-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-white text-2xl font-serif tracking-[0.2em] uppercase hover:text-[#c5a059] transition-all duration-500 hover:tracking-[0.25em] text-center"
                style={{
                  animation: isOpen ? `fadeInUp 0.6s ease-out ${i * 0.1}s forwards` : 'none',
                  opacity: 0
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="divider-line w-24 mx-auto my-8"></div>
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="block text-[#c5a059] text-xl font-bold uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-500 text-center"
              style={{
                animation: isOpen ? `fadeInUp 0.6s ease-out ${navLinks.length * 0.1}s forwards` : 'none',
                opacity: 0
              }}
            >
              Contato
            </Link>
          </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-32 pb-12 relative overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0a0a0a] opacity-60"></div>

      {/* Subtle watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark opacity-[0.015]">
        <img src="/3.svg" alt="" className="w-[600px] h-[600px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo e Badge */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img
                src="/3.svg"
                alt="Méritum Hotéis"
                className="h-auto w-64 opacity-95 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="divider-line w-20 mb-8"></div>
            <div className="mt-10">
              <NXBadge />
            </div>
          </div>

          {/* Links Institucionais */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-[#c5a059]">Institucional</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link to="/a-meritum" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  A Méritum
                </Link>
              </li>
              <li>
                <Link to="/visao-de-gestao" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Visão
                </Link>
              </li>
              <li>
                <Link to="/como-atuamos" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Método
                </Link>
              </li>
              <li>
                <Link to="/atuacao" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Atuação
                </Link>
              </li>
              <li>
                <Link to="/caso-real" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Caso Real
                </Link>
              </li>
              <li>
                <Link to="/para-quem-atuamos" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Para Quem Atuamos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-[#c5a059]">Contato</h4>
            <div className="space-y-4 text-sm font-light">
              <p className="text-gray-300 hover:text-white transition-colors duration-300">CNPJ: 63.854.324/0001-07</p>
              <p className="text-gray-300 hover:text-white transition-colors duration-300">Foz do Iguaçu, PR - Brasil</p>
              <p>
                <a href="mailto:contato@meritumhoteis.com.br" className="text-gray-300 hover:text-[#c5a059] transition-colors duration-300">
                  contato@meritumhoteis.com.br
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.4em]">
            <p className="text-gray-400 hover:text-[#c5a059] transition-colors duration-500">© {currentYear} MÉRITUM HOTÉIS</p>
            <div className="flex space-x-10">
              <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="text-gray-400 hover:text-white transition-colors duration-300">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollEffects />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-meritum" element={<About />} />
            <Route path="/visao-de-gestao" element={<ManagementVision />} />
            <Route path="/como-atuamos" element={<HowWeWork />} />
            <Route path="/atuacao" element={<AreasOfAction />} />
            <Route path="/atuacao/arrendamento" element={<AreaLeasing />} />
            <Route path="/atuacao/operacoes" element={<AreaOperations />} />
            <Route path="/atuacao/financeiro" element={<AreaFinancial />} />
            <Route path="/atuacao/comercial" element={<AreaCommercial />} />
            <Route path="/caso-real" element={<CaseStudy />} />
            <Route path="/para-quem-atuamos" element={<TargetAudience />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
