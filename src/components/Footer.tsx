import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07152B] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center gap-6 w-full lg:grid grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          
          {/* Logos institucionales en el footer */}
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            {/* Contenedor sin fondo oscuro, en móvil/medianas en columna centrada, y en md:flex-row */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6 mb-5">
              
              {/* Logo 1: Distrito 4370 */}
              <img
                src="/logo-rotaract.png"
                alt="Distrito 4370"
                width={180}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
              
              {/* Logo 2: Rotaract Las Delicias */}
              <img
                src="/logo-las-delicias.png"
                alt="Rotaract Las Delicias"
                width={180}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
              
              {/* Logo 3: Colonia Tovar 2026 */}
              <img
                src="/logo-evento.png"
                alt="Colonia Tovar 2026"
                width={220}
                height={110}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <h4 className="font-['Open_Sans'] font-extrabold text-lg text-white">
              Seminario de Aprendizaje Distrital 2026
            </h4>
            <p className="text-xs text-white/70 max-w-sm mt-1 px-2 md:px-0">
              Rotaract Distrito 4370 • Club Anfitrión: Rotaract Las Delicias • Colonia Tovar, Venezuela.
            </p>
          </div>

          {/* Enlaces y Navegación Rápida */}
          <div className="lg:col-span-6 flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-xs font-semibold text-white/80 mt-4 lg:mt-0">
            <a href="#evento" className="hover:text-[#F5A623] transition-colors">El Evento</a>
            <a href="#cronograma" className="hover:text-[#F5A623] transition-colors">Cronograma</a>
            <a href="#ponentes" className="hover:text-[#F5A623] transition-colors">Ponentes</a>
            <a href="#equipos" className="hover:text-[#F5A623] transition-colors">Equipos</a>
            <a href="#galeria" className="hover:text-[#F5A623] transition-colors">Galería</a>
            <a href="#recursos" className="hover:text-[#F5A623] transition-colors">Recursos</a>
            <a href="#faq" className="hover:text-[#F5A623] transition-colors">Preguntas</a>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p className="text-center sm:text-left">
            “No es solo un destino, es volver a encontrarnos para seguir transformando el mundo.”
          </p>

          <div className="flex items-center gap-4">
            <span>© 2026 Rotaract Distrito 4370</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
