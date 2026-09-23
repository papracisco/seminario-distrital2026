import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ChevronLeft, ChevronRight, Sparkles, ArrowDown } from 'lucide-react';
import { HERO_SLIDES } from '../data/eventData';
import { CountdownTime } from '../types';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  // Functional countdown to: 27 de Noviembre de 2026 09:00:00 AM (Venezuela Time: UTC-4)
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    // 2026-11-27T09:00:00-04:00 (Venezuela Standard Time UTC-4)
    const targetDate = new Date('2026-11-27T09:00:00-04:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const padZero = (n: number) => String(n).padStart(2, '0');

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section id="inicio" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 overflow-hidden">
      
      {/* 1. SLIDER / CARRUSEL DE FONDO CON FOTOGRAFÍAS ALPINAS & DE MONTAÑA */}
      <div className="absolute inset-0 z-0 bg-[#07152B]">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-90"
            />
            {/* Gradiente multicapa de alto contraste para máxima legibilidad tipográfica */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/75 to-[#0B2545]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B2545]/40 to-[#07152B]/90" />
          </div>
        ))}
      </div>

      {/* Controles de navegación del slider */}
      <div className="hidden sm:flex absolute z-20 inset-x-4 top-1/2 -translate-y-1/2 justify-between pointer-events-none">
        <button
          type="button"
          onClick={prevSlide}
          className="pointer-events-auto p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white/90 backdrop-blur-xs transition-all border border-white/10"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="pointer-events-auto p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white/90 backdrop-blur-xs transition-all border border-white/10"
          aria-label="Siguiente foto"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicadores de diapositiva */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === currentSlide ? 'w-8 bg-[#F5A623]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir a foto ${idx + 1}`}
          />
        ))}
      </div>

      {/* 2. CONTENIDO CENTRAL */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Badge Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[11px] sm:text-[12.5px] uppercase tracking-wider mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#00875A] animate-pulse" aria-hidden="true" />
          <span>SEMINARIO DE APRENDIZAJE DISTRITAL 2026</span>
        </div>

        {/* Título Principal H1 */}
        <h1 className="font-['Open_Sans'] font-extrabold text-white text-3xl sm:text-5xl md:text-6xl leading-[1.12] tracking-tight mb-4 drop-shadow-sm max-w-3xl">
          “Un lugar para volver a encontrarnos”
        </h1>

        {/* Subtítulo: Fechas y Sede */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-white/90 text-sm sm:text-lg font-medium mb-8 max-w-2xl px-2">
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1 rounded-lg">
            <Calendar className="w-4 h-4 text-[#F5A623]" />
            <span className="font-semibold text-white">27, 28 y 29 de Noviembre de 2026</span>
          </div>
          <span className="hidden sm:inline text-white/50">•</span>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1 rounded-lg">
            <MapPin className="w-4 h-4 text-[#D91B5C]" />
            <span className="text-white/95">Hotel Klein Dorf, Colonia Tovar</span>
          </div>
        </div>

        {/* 3. NUEVO CONTADOR REGRESIVO FUNCIONAL HASTA EL EVENTO */}
        <div className="w-full max-w-xl mx-auto mb-8">
          <div className="text-xs uppercase tracking-widest text-[#F5A623] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#F5A623]/40" />
            <span>Tiempo restante para el encuentro</span>
            <span className="h-[1px] w-6 bg-[#F5A623]/40" />
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3.5 w-full">
            {/* DÍAS - Sol Naciente */}
            <div className="flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-lg border-t-4 border-[#F5A623] transition-transform hover:-translate-y-1">
              <span className="font-['Open_Sans'] font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#1B365D] leading-none">
                {padZero(timeLeft.days)}
              </span>
              <span className="text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                DÍAS
              </span>
              <span className="text-[8px] sm:text-[9.5px] font-medium text-[#F5A623] mt-0.5 hidden xs:inline">
                Sol Naciente
              </span>
            </div>

            {/* HORAS - Las Montañas */}
            <div className="flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-lg border-t-4 border-[#00875A] transition-transform hover:-translate-y-1">
              <span className="font-['Open_Sans'] font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#1B365D] leading-none">
                {padZero(timeLeft.hours)}
              </span>
              <span className="text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                HORAS
              </span>
              <span className="text-[8px] sm:text-[9.5px] font-medium text-[#00875A] mt-0.5 hidden xs:inline">
                Las Montañas
              </span>
            </div>

            {/* MINUTOS - Arquitectura / Magenta */}
            <div className="flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-lg border-t-4 border-[#D91B5C] transition-transform hover:-translate-y-1">
              <span className="font-['Open_Sans'] font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#1B365D] leading-none">
                {padZero(timeLeft.minutes)}
              </span>
              <span className="text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                MINUTOS
              </span>
              <span className="text-[8px] sm:text-[9.5px] font-medium text-[#D91B5C] mt-0.5 hidden xs:inline">
                Arquitectura
              </span>
            </div>

            {/* SEGUNDOS - Flor Edelweiss / Azul */}
            <div className="flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-lg border-t-4 border-[#0284C7] transition-transform hover:-translate-y-1">
              <span className="font-['Open_Sans'] font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#1B365D] leading-none">
                {padZero(timeLeft.seconds)}
              </span>
              <span className="text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                SEGUNDOS
              </span>
              <span className="text-[8px] sm:text-[9.5px] font-medium text-[#0284C7] mt-0.5 hidden xs:inline">
                Edelweiss
              </span>
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D91B5C] hover:bg-[#c2185b] active:scale-98 text-white font-bold text-base shadow-lg shadow-[#D91B5C]/30 transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Asegurar Mi Cupo</span>
          </button>

          <a
            href="#evento"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-98 text-white font-semibold text-base backdrop-blur-xs border border-white/25 transition-all duration-200"
          >
            <span>Conocer los 4 Pilares</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Pilares Oficiales Tagline */}
        <div className="mt-8 flex items-center justify-center gap-3 text-white/80 text-xs sm:text-sm font-semibold">
          <span>Formación</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00875A]" />
          <span>Conexión</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
          <span>Inspiración</span>
        </div>

      </div>
    </section>
  );
};
