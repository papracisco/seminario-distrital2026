import React from 'react';
import { Compass, Lock } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  return (
    <section id="recursos" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>GUÍA DEL PARTICIPANTE</span>
          </div>
          <h2 className="font-['Open_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1B365D] tracking-tight mb-4">
            Recursos y Consejos de Viaje
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Todo lo que necesitas tener en cuenta para disfrutar al máximo tu estadía en la Colonia Tovar.
          </p>
        </div>

        {/* Contenedor relativo con bloqueo visual y privacidad total (sin textos preliminares en el DOM) */}
        <div className="relative mb-12">
          {/* Grid esqueleto decorativo puramente visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 filter blur-sm opacity-50 pointer-events-none select-none">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-200/70 mb-4 animate-pulse" />
                  <div className="h-6 w-3/4 bg-slate-200/70 rounded-md mb-4 animate-pulse" />
                  <div className="h-14 w-full bg-slate-200/60 rounded-xl mb-3 animate-pulse" />
                  <div className="h-14 w-full bg-slate-200/60 rounded-xl mb-3 animate-pulse" />
                </div>
                <div className="h-4 w-1/2 bg-slate-200/50 rounded mt-4 animate-pulse" />
              </div>
            ))}
          </div>

          {/* Capa superior centrada glassmorphism sin cortes de texto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
            <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xl rounded-2xl p-8 max-w-lg overflow-visible leading-relaxed text-center mx-4 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0284C7]/15 via-[#F5A623]/15 to-[#D91B5C]/15 rounded-2xl blur-lg animate-pulse pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] border border-[#0284C7]/20 font-bold text-xs uppercase tracking-wider mb-4 shadow-xs animate-pulse">
                  <Lock className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>REVELACIÓN PRÓXIMAMENTE</span>
                </div>
                <h3 className="font-['Open_Sans'] font-extrabold text-xl sm:text-2xl text-[#1B365D] mb-3">
                  Guías & Material de Viaje
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Próximamente revelaremos la guía completa de recomendaciones climáticas, traslados, normativas distritales y material descargable para delegaciones.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;
