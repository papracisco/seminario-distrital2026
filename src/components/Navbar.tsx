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

      const sections = ['inicio', 'evento', 'cronograma', 'ponentes', 'equipos', 'galeria', 'kits', 'recursos', 'faq'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section === 'kits' ? 'galeria' : section);
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
    { href: '#galeria', label: 'Galería', id: 'galeria' },
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
          {/* Logo 1 *
          <div className="flex items-center justify-center flex-shrink-0">
            <img
              src="/logo-rotaract.png"
              alt="Rotaract Distrito 4370"
              className="h-[28px] sm:h-[26px] md:h-[120px] w-auto max-w-[120px] sm:max-w-[100px] object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </div>

          {/* Logo 2 *
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
              className="h-[140px] sm:h-[160px] md:h-[190px] w-auto max-w-[160px] sm:max-w-[190px] object-contain transition-transform duration-200 group-hover:scale-102"
              loading="lazy"
              decoding="async"
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
          <a
            href="https://wa.me/584243355739?text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20inscripci%C3%B3n%20y%20el%20evento%20del%20Seminario%20Distrital%202026%20en%20la%20Colonia%20Tovar."
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-[#D91B5C] hover:bg-[#c2185b] active:scale-98 text-white font-bold text-[12px] sm:text-[13px] md:text-[13.5px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer whitespace-nowrap ${
              mobileMenuOpen
                ? 'opacity-0 scale-90 pointer-events-none'
                : 'opacity-100 scale-100 pointer-events-auto'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
            <span>Inscribirme</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden sm:inline-block" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100/80 focus:outline-none flex-shrink-0 transition-all duration-200 active:scale-90 select-none"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {/* Contenedor flexible para las 3 líneas con tamaño agrandado */}
            <div className="w-7 h-6 flex flex-col justify-between items-center relative">
              {/* Barra Superior */}
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen
                    ? 'bg-[#D91B5C] translate-y-[11px] rotate-45'
                    : 'bg-slate-700'
                }`}
              />

              {/* Barra Central */}
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? 'opacity-0 scale-x-0 bg-[#D91B5C]'
                    : 'opacity-100 scale-x-100 bg-slate-700'
                }`}
              />

              {/* Barra Inferior */}
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen
                    ? 'bg-[#D91B5C] -translate-y-[11px] -rotate-45'
                    : 'bg-slate-700'
                }`}
              />
            </div>
          </button>
        </div>

      </div>
    </div>

    {/* MENÚ MÓVIL DESPLEGABLE CON ANIMACIÓN SUAVE FADE DOWN */}
    <div
      className={`xl:hidden overflow-hidden transition-all duration-300 ease-out bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-lg transform ${
        mobileMenuOpen
          ? 'max-h-[500px] opacity-100 translate-y-0 py-3 pb-6 pointer-events-auto'
          : 'max-h-0 opacity-0 -translate-y-2.5 py-0 border-b-0 shadow-none pointer-events-none'
      }`}
    >
      <div className="flex flex-col space-y-1 max-w-md mx-auto px-4">
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
          <a
            href="https://wa.me/584243355739?text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20inscripci%C3%B3n%20y%20el%20evento%20del%20Seminario%20Distrital%202026%20en%20la%20Colonia%20Tovar."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D91B5C] text-white font-bold text-[14px] shadow-sm hover:bg-[#c2185b] transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Inscribirme en el Seminario</span>
          </a>
          <p className="text-center text-[11px] text-slate-500 font-medium">
            27, 28 y 29 de Noviembre de 2026 • Hotel Klein Dorf
          </p>
        </div>
      </div>
    </div>
  </header>
);
}