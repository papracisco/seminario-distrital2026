import React from 'react';
import { Calendar, Clock, Lock } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="cronograma" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B365D]/8 text-[#1B365D] font-bold text-xs uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#00875A]" />
            <span>AGENDA ACADÉMICA & PROTOCOLAR</span>
          </div>
          <h2 className="font-['Open_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1B365D] tracking-tight mb-4">
            Cronograma del Seminario 2026
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Tres días estructurados para maximizar el aprendizaje, el intercambio de experiencias y el networking rotario.
          </p>
        </div>

        {/* Contenedor relativo con bloqueo visual y privacidad total (sin textos preliminares en el DOM) */}
        <div className="relative">
          {/* Skeleton puramente decorativo con efecto blur y sin datos sensibles */}
          <div className="filter blur-sm opacity-50 pointer-events-none select-none">
            {/* Skeleton botones selector de días */}
            <div className="flex justify-center gap-2 sm:gap-4 mb-8">
              <div className="h-14 w-28 sm:w-36 bg-slate-200/80 rounded-2xl animate-pulse" />
              <div className="h-14 w-28 sm:w-36 bg-slate-200/60 rounded-2xl animate-pulse" />
              <div className="h-14 w-28 sm:w-36 bg-slate-200/60 rounded-2xl animate-pulse" />
            </div>

            {/* Skeleton tarjeta principal de actividades */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-3">
                <div className="h-7 w-48 bg-slate-200/80 rounded-lg animate-pulse" />
                <div className="h-6 w-32 bg-slate-200/60 rounded-full animate-pulse" />
              </div>

              {/* Bloques esqueleto de actividades */}
              <div className="space-y-3">
                <div className="h-14 w-full bg-slate-200/60 rounded-xl mb-3 animate-pulse" />
                <div className="h-14 w-full bg-slate-200/60 rounded-xl mb-3 animate-pulse" />
                <div className="h-14 w-full bg-slate-200/60 rounded-xl mb-3 animate-pulse" />
                <div className="h-14 w-full bg-slate-200/60 rounded-xl mb-3 animate-pulse" />
                <div className="h-14 w-full bg-slate-200/60 rounded-xl mb-3 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Capa superior centrada glassmorphism */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 max-w-lg overflow-visible leading-relaxed shadow-xl border border-slate-200 text-center mx-4 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1B365D]/10 via-[#00875A]/15 to-[#D91B5C]/10 rounded-2xl blur-lg animate-pulse pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B365D]/10 text-[#1B365D] border border-[#1B365D]/20 font-bold text-xs uppercase tracking-wider mb-4 shadow-xs animate-pulse">
                  <Lock className="w-3.5 h-3.5 text-[#D91B5C]" />
                  <span>REVELACIÓN PRÓXIMAMENTE</span>
                </div>
                <h3 className="font-['Open_Sans'] font-extrabold text-xl sm:text-2xl text-[#1B365D] mb-2">
                  Agenda en Preparación
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Estamos afinando los detalles de la agenda académica, conferencias magistrales y actividades protocolares del Seminario 2026.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;
