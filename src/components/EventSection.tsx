import React, { useState } from 'react';
import { Sun, Mountain, Landmark, Flower2, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { PILLARS_DATA } from '../data/eventData';
import { PillarItem } from '../types';

export const EventSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PILLARS_DATA[0].id);

  const selectedPillar = PILLARS_DATA.find((p) => p.id === selectedPillarId) || PILLARS_DATA[0];

  const renderPillarIcon = (iconName: PillarItem['iconName'], color: string) => {
    const props = { className: 'w-6 h-6 sm:w-7 sm:h-7', style: { color } };
    switch (iconName) {
      case 'Sun':
        return <Sun {...props} />;
      case 'Mountain':
        return <Mountain {...props} />;
      case 'Landmark':
        return <Landmark {...props} />;
      case 'Flower2':
        return <Flower2 {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="evento" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00875A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B365D]/8 text-[#1B365D] font-bold text-xs uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00875A]" />
            <span>IDENTIDAD & PROPÓSITO DISTRITAL</span>
          </div>

          <h2 className="font-['Open_Sans'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1B365D] tracking-tight mb-5 leading-tight">
            Desconectarnos para volver a encontrarnos
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            El <strong>Seminario de Aprendizaje Distrital 2026</strong> convoca a los líderes del Distrito 4370 
            en el clima de montaña de la Colonia Tovar. Una experiencia diseñada para pausar el ritmo 
            acelerado de la rutina diaria, consolidar competencias directivas, profundizar lazos de hermandad y 
            encender la pasión por el servicio transformador.
          </p>
        </div>

        {/* 4 TARJETAS INTERACTIVAS DE LOS PILARES OFICIALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {PILLARS_DATA.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'shadow-xl scale-102 ring-2'
                    : 'shadow-xs hover:shadow-md hover:-translate-y-1 border-slate-200/80'
                }`}
                style={{
                  borderColor: isSelected ? pillar.color : undefined,
                  boxShadow: isSelected ? `0 12px 30px ${pillar.color}22` : undefined,
                }}
              >
                {/* Indicador de color en la parte superior */}
                <div
                  className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                  style={{ backgroundColor: pillar.color }}
                />

                <div>
                  {/* Encabezado de la tarjeta: Icono + subtítulo */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ backgroundColor: pillar.accentBg }}
                    >
                      {renderPillarIcon(pillar.iconName, pillar.color)}
                    </div>
                    
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: pillar.accentBg,
                        color: pillar.color,
                      }}
                    >
                      Pilar Oficial
                    </span>
                  </div>

                  {/* Nombre y subtítulo */}
                  <h3 className="font-['Open_Sans'] font-bold text-xl text-[#1B365D] mb-1.5">
                    {pillar.name}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: pillar.color }}>
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {isSelected ? 'Mostrando detalles' : 'Clic para explorar'}
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-transform"
                    style={{
                      backgroundColor: pillar.color,
                      transform: isSelected ? 'scale(1.3)' : 'scale(1)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* DETALLE EXPANDIDO DEL PILAR SELECCIONADO */}
        <div
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/90 relative overflow-hidden transition-all duration-300"
          style={{ borderLeft: `6px solid ${selectedPillar.color}` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: selectedPillar.accentBg }}
                >
                  {renderPillarIcon(selectedPillar.iconName, selectedPillar.color)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: selectedPillar.color }}>
                    Profundización del Pilar
                  </span>
                  <h4 className="font-['Open_Sans'] font-bold text-2xl text-[#1B365D]">
                    {selectedPillar.name}
                  </h4>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                {selectedPillar.description}
              </p>

              {/* Puntos Clave */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Enfoque en el Seminario:
                </span>
                {selectedPillar.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: selectedPillar.color }}
                    />
                    <span className="text-sm font-medium text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cita Inspiracional en Tarjeta Lateral */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-6 sm:p-7 relative"
                style={{ backgroundColor: selectedPillar.accentBg }}
              >
                <Quote className="w-8 h-8 opacity-40 mb-3" style={{ color: selectedPillar.color }} />
                <blockquote className="font-['Open_Sans'] font-bold text-lg text-[#1B365D] italic mb-3 leading-snug">
                  {selectedPillar.quote}
                </blockquote>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-3 border-t border-black/5">
                  <span>Seminario Distrital 2026</span>
                  <span style={{ color: selectedPillar.color }}>Hotel Klein Dorf</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
