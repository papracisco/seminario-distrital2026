import React, { useState } from 'react';
import { 
  Mic, 
  Bookmark, 
  Sparkles, 
  X, 
  Linkedin, 
  Instagram, 
  Mail, 
  User, 
  ExternalLink,
  CalendarCheck,
  Lock
} from 'lucide-react';
import { SPEAKERS_DATA } from '../data/eventData';
import { Speaker } from '../types';

interface SpeakersSectionProps {
  speakers?: Speaker[];
}

export const SpeakersSection: React.FC<SpeakersSectionProps> = ({ speakers = SPEAKERS_DATA }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const closeModal = () => setSelectedSpeaker(null);

  return (
    <section id="ponentes" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado oficial con badge (fiel a la referencia visual) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00875A]/10 text-[#00875A] font-bold text-xs uppercase tracking-wider mb-4">
            <Mic className="w-3.5 h-3.5" />
            <span>EXPOSITORES & FACILITADORES</span>
          </div>
          <h2 className="font-['Open_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1B365D] tracking-tight mb-4">
            Aprende de Líderes Inspiradores
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Paneles de alto impacto y talleres prácticos dirigidos por ponentes con trayectoria en el servicio y desarrollo profesional.
          </p>
        </div>

        {/* Contenedor relativo con contenido bloqueado con blur y overlay Próximamente */}
        <div className="relative">
          {/* Grid de tarjetas interactivas de ponentes con efecto blur y deshabilitado */}
          <div className="select-none pointer-events-none filter blur-sm opacity-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {speakers.map((sp) => (
                <div
                  key={sp.id}
                  className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Cabecera de la tarjeta: Badge temático + Icono de marcador de libro */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[11px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider shadow-xs"
                        style={{ backgroundColor: sp.color }}
                      >
                        {sp.tag}
                      </span>
                      <Bookmark className="w-5 h-5 text-slate-400" />
                    </div>

                    {/* Nombre del Ponente */}
                    <h3 className="font-['Open_Sans'] font-extrabold text-xl text-[#1B365D] mb-1">
                      {sp.name}
                    </h3>

                    {/* Subtítulo / Organización */}
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                      {sp.organization || sp.role}
                    </p>

                    {/* Contenedor Eje Temático */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200/70 mb-4">
                      <span className="text-[11px] font-bold text-[#1B365D] block mb-1">
                        Eje Temático:
                      </span>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        {sp.topic}
                      </p>
                    </div>
                  </div>

                  {/* Pie de la tarjeta */}
                  <div>
                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#F5A623] shrink-0" />
                        <span className="truncate">Sesiones interactivas con certificación distrital</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Superposición Glassmorphism Próximamente */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
            <div className="bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-2xl rounded-2xl p-6 md:p-8 text-center max-w-md mx-4 relative overflow-hidden">
              {/* Pulso de luz animado sutil en el fondo de la tarjeta */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00875A]/10 via-[#F5A623]/15 to-[#1B365D]/10 rounded-2xl blur-lg animate-pulse pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00875A]/10 text-[#00875A] border border-[#00875A]/20 font-bold text-xs uppercase tracking-wider mb-4 shadow-xs animate-pulse">
                  <Lock className="w-3.5 h-3.5 text-[#00875A]" />
                  <span>REVELACIÓN PRÓXIMAMENTE</span>
                </div>
                <h3 className="font-['Open_Sans'] font-extrabold text-xl sm:text-2xl text-[#1B365D] mb-2">
                  Facilitadores y Líderes
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Próximamente revelaremos a los facilitadores y líderes invitados
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MODAL EMERGENTE CENTRAL AL HACER CLIC EN UN PONENTE */}
      {selectedSpeaker && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de Cierre Claro */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Cerrar modal de ponente"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start pt-2">
              
              {/* LADO IZQUIERDO: FOTO GRANDE DEL PONENTE (PLACEHOLDER MODERNO) */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center shadow-inner overflow-hidden group">
                  {selectedSpeaker.photoUrl ? (
                    <img 
                      src={selectedSpeaker.photoUrl} 
                      alt={selectedSpeaker.name} 
                      width={208}
                      height={208}
                      className="w-full h-full object-cover aspect-square"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-20 h-20 rounded-full bg-slate-300/80 flex items-center justify-center text-slate-500 mb-2 shadow-xs">
                        <User className="w-10 h-10 text-slate-600" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Foto del Ponente
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Placeholder Oficial
                      </span>
                    </div>
                  )}

                  {/* Badge de color temático en la esquina de la foto */}
                  <div 
                    className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs"
                    style={{ backgroundColor: selectedSpeaker.color }}
                  />
                </div>

                {/* Redes Sociales en el lado izquierdo */}
                <div className="flex items-center gap-3 mt-4">
                  {selectedSpeaker.socials?.linkedin && (
                    <a
                      href={selectedSpeaker.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-[#0077B5] hover:text-white text-slate-600 transition-colors shadow-xs"
                      title="LinkedIn del Ponente"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {selectedSpeaker.socials?.instagram && (
                    <a
                      href={selectedSpeaker.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-[#E1306C] hover:text-white text-slate-600 transition-colors shadow-xs"
                      title="Instagram del Ponente"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {selectedSpeaker.socials?.email && (
                    <a
                      href={`mailto:${selectedSpeaker.socials.email}`}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-[#1B365D] hover:text-white text-slate-600 transition-colors shadow-xs"
                      title="Correo institucional"
                      aria-label="Correo"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* LADO DERECHO: DATOS, TEMA, BIOGRAFÍA Y DETALLES */}
              <div className="md:col-span-7 flex flex-col">
                
                {/* Badge de Categoría */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider"
                    style={{ backgroundColor: selectedSpeaker.color }}
                  >
                    {selectedSpeaker.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Seminario Distrital 2026
                  </span>
                </div>

                {/* Nombre del Ponente */}
                <h3 className="font-['Open_Sans'] font-extrabold text-2xl sm:text-3xl text-[#1B365D] leading-tight mb-1">
                  {selectedSpeaker.name}
                </h3>

                {/* Rol / Organización */}
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                  {selectedSpeaker.organization} • {selectedSpeaker.role}
                </p>

                {/* Caja de Conferencia / Tema */}
                <div 
                  className="p-4 rounded-xl mb-4 border"
                  style={{ 
                    backgroundColor: `${selectedSpeaker.color}10`,
                    borderColor: `${selectedSpeaker.color}35`
                  }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: selectedSpeaker.color }}>
                    Tema de su Conferencia / Taller:
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-[#1B365D]">
                    {selectedSpeaker.topic}
                  </h4>
                </div>

                {/* Biografía y Trayectoria Profesional */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1.5">
                    Biografía & Trayectoria:
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                    {selectedSpeaker.bio}
                  </p>
                </div>

                {/* Botón de acción inferior */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#cronograma"
                    onClick={closeModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B365D] hover:bg-[#0B2545] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#F5A623]" />
                    <span>Ver Horario en Cronograma</span>
                  </a>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
