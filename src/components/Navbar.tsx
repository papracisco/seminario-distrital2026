import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'evento', 'cronograma', 'ponentes', 'equipos', 'kits', 'recursos', 'faq'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#evento', label: 'El Evento', id: 'evento' },
    { href: '#cronograma', label: 'Cronograma', id: 'cronograma' },
    { href: '#ponentes', label: 'Ponentes', id: 'ponentes' },
    { href: '#equipos', label: 'Equipos', id: 'equipos' },
    { href: '#kits', label: 'Kits & Merch', id: 'kits' },
    { href: '#recursos', label: 'Recursos', id: 'recursos' },
    { href: '#faq', label: 'Preguntas', id: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 75;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

return (
  <header
    id="main-navbar"
    className={`fixed top-0 left-0 right-0 w-full max-w-full overflow-x-clip z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 opacity-0 -translate-y-full pointer-events-none transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-1.5'
        : 'bg-white/90 backdrop-blur-xs border-b border-slate-100 py-2'
    }`}
  >
    {/* Contenedor centralizado sin desbordamiento */}
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-2 md:gap-4 max-h-[90px] sm:min-h-[64px]">
        
        {/* 1. LOGOS (Izquierda) */}
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, '#inicio')}
          className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group focus:outline-none"
          title="Inicio • Seminario de Aprendizaje Distrital 2026"
        >
          {/* Logo 1 */}
          <div className="flex items-center justify-center flex-shrink-0">
            <img
              src="/logo-rotaract.png"
              alt="Rotaract Distrito 4370"
              className="h-[28px] sm:h-[26px] md:h-[120px] w-auto max-w-[120px] sm:max-w-[100px] object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </div>

          {/* Logo 2 */}
          <div className="flex items-center justify-center flex-shrink-0">
            <img
              src="/logo-las-delicias.png"
              alt="Rotaract Las Delicias"
              className="h-[50px] sm:h-[34px] md:h-[150px] w-auto max-w-[150px] sm:max-w-[128px] object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </div>

          {/* Logo 3 */}
          <div id="navbar-event-logo" className="flex items-center justify-center flex-shrink-0">
            <img
              src="/logo-evento.png"
              alt="Colonia Tovar 2026"
              className="h-[90px] sm:h-[40px] md:h-[160px] w-auto max-w-[160px] sm:max-w-[140px] object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </div>
        </a>

        {/* 2. ENLACES DE NAVEGACIÓN */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5 flex-shrink" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1B365D]/8 text-[#1B365D] font-bold'
                    : 'text-slate-600 hover:text-[#1B365D] hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* 3. BOTÓN E ÍCONO HAMBURGUESA */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onOpenRegister}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-[#D91B5C] hover:bg-[#c2185b] active:scale-98 text-white font-bold text-[12px] sm:text-[13px] md:text-[13.5px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
            <span>Inscribirme</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden sm:inline-block" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1B365D]/30 flex-shrink-0"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#D91B5C]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

      </div>
    </div>

    {/* MENÚ MÓVIL DESPLEGABLE */}
    {mobileMenuOpen && (
      <div className="xl:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
        <div className="flex flex-col space-y-1 max-w-md mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-4 py-2.5 rounded-xl text-[14px] font-semibold text-slate-700 hover:text-[#1B365D] hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D91B5C] text-white font-bold text-[14px] shadow-sm hover:bg-[#c2185b] transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Inscribirme en el Seminario</span>
            </button>
            <p className="text-center text-[11px] text-slate-500 font-medium">
              27, 28 y 29 de Noviembre de 2026 • Hotel Klein Dorf
            </p>
          </div>
        </div>
      </div>
    )}
  </header>
);
}