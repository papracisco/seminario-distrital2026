import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Shield, 
  Code, 
  Megaphone, 
  Coins, 
  Truck, 
  Award, 
  ChevronDown, 
  Sparkles,
  Layers
} from 'lucide-react';
import { COMMITTEES_DATA } from '../data/teams';
import { Committee } from '../types';

interface TeamsProps {
  committees?: Committee[];
}

// Función auxiliar para extraer iniciales si no están definidas
const getInitials = (name: string, fallback?: string): string => {
  if (fallback) return fallback;
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return (parts[0]?.slice(0, 2) || 'CT').toUpperCase();
};

export const Teams: React.FC<TeamsProps> = ({ committees = COMMITTEES_DATA }) => {
  // Estado para el comité activo en el acordeón (por defecto todos cerrados)
  const [openCommitteeId, setOpenCommitteeId] = useState<string | null>(null);

  const toggleCommittee = (id: string) => {
    setOpenCommitteeId((prev) => (prev === id ? null : id));
  };

  const renderCommitteeIcon = (iconName: Committee['iconName'], color: string) => {
    const props = { className: 'w-5 h-5 sm:w-6 sm:h-6', style: { color } };
    switch (iconName) {
      case 'Code':
        return <Code {...props} />;
      case 'Megaphone':
        return <Megaphone {...props} />;
      case 'Coins':
        return <Coins {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      case 'Award':
        return <Award {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section id="equipos" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DE LA SECCIÓN (Fiel a imagen institucional) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B365D]/8 text-[#1B365D] font-bold text-xs uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-[#1B365D]" />
            <span>COMITÉ ANFITRIÓN & ORGANIZACIÓN</span>
          </div>

          <h2 className="font-['Open_Sans'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1B365D] tracking-tight mb-4">
            Equipos Detrás del Encuentro
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            La sinergia y el compromiso de jóvenes rotaractianos para crear un evento de nivel internacional en la Colonia Tovar.
          </p>
        </div>

        {/* 1. DOS TARJETAS PRINCIPALES: Distrito 4370 y Club Anfitrión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          
          {/* Tarjeta 1: Rotaract Distrito 4370 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <img
                  src="/logo-rotaract.png"
                  alt="Rotaract Distrito 4370"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D]">
                  Liderazgo Distrital
                </span>
              </div>

              <h3 className="font-['Open_Sans'] font-extrabold text-2xl text-[#1B365D] mb-3">
                Rotaract Distrito 4370
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Abarcando clubes de toda la región centro-oriental y capital de Venezuela, el Distrito 4370 impulsa 
                la formación integral de la juventud y el fortalecimiento de proyectos comunitarios de alto impacto.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Shield className="w-4 h-4 text-[#00875A]" />
              <span>Aval Oficial y Certificación Distrital 2026-2027</span>
            </div>
          </div>

          {/* Tarjeta 2: Club Rotaract Las Delicias */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <img
                  src="/logo-las-delicias.png"
                  alt="Rotaract Las Delicias"
                  className="h-12 w-auto object-contain"
                />
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#D91B5C]/10 text-[#D91B5C]">
                  Club Anfitrión
                </span>
              </div>

              <h3 className="font-['Open_Sans'] font-extrabold text-2xl text-[#1B365D] mb-3">
                Club Rotaract Las Delicias
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Con sede en el estado Aragua y una profunda vinculación con la hospitalidad de la Colonia Tovar, 
                asumen con orgullo la sede anfitriona y la logística integral para recibir a todas las delegaciones.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Heart className="w-4 h-4 text-[#D91B5C]" />
              <span>Hospitalidad, logística local y atención al participante</span>
            </div>
          </div>

        </div>

        {/* 2. SUB-SECCIÓN: COMITÉS OPERATIVOS & SISTEMA DE ACORDEÓN */}
        <div className="max-w-5xl mx-auto">
          
          {/* Cabecera de la sub-sección */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D91B5C]/10 text-[#D91B5C] font-extrabold text-[11px] uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NUESTROS COMITÉS OPERATIVOS</span>
            </div>

            <h3 className="font-['Open_Sans'] font-extrabold text-2xl sm:text-3xl text-[#1B365D]">
              Estructura de Trabajo Las Delicias
            </h3>

            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              Haz clic en cada comisión para conocer a los integrantes que lideran la ejecución técnica y operativa del evento.
            </p>
          </div>

          {/* LISTA DE LOS 5 COMITÉS OPERATIVOS */}
          <div className="space-y-4">
            {committees.map((committee, index) => {
              const isOpen = openCommitteeId === committee.id;
              const membersCount = committee.members.length;

              return (
                <div
                  key={committee.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-300"
                >
                  {/* BARRA CLICABLE DEL ACORDEÓN */}
                  <button
                    type="button"
                    onClick={() => toggleCommittee(committee.id)}
                    className={`w-full px-5 sm:px-8 py-5 flex items-center justify-between text-left transition-colors duration-200 focus:outline-none cursor-pointer ${
                      isOpen ? 'bg-[#F8FAFC]' : 'hover:bg-slate-50'
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`committee-panel-${committee.id}`}
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      {/* Icono del Comité */}
                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200"
                        style={{ backgroundColor: `${committee.color}15` }}
                      >
                        {renderCommitteeIcon(committee.iconName, committee.color)}
                      </div>

                      {/* Nombre y Contador exacto de Integrantes */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-400">0{index + 1}.</span>
                          <h4 className="font-['Open_Sans'] font-bold text-base sm:text-lg text-[#1B365D]">
                            {committee.name}
                          </h4>
                        </div>
                        <span className="text-[12px] text-slate-500 font-medium">
                          {membersCount} {membersCount === 1 ? 'integrante asignado' : 'integrantes asignados'}
                        </span>
                      </div>
                    </div>

                    {/* Flecha indicadora y badge de estado */}
                    <div className="flex items-center gap-3">
                      <span 
                        className="hidden sm:inline-block text-[11px] font-bold px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: `${committee.color}15`,
                          color: committee.color
                        }}
                      >
                        {isOpen ? 'Ocultar' : 'Ver equipo'}
                      </span>
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isOpen ? 'bg-[#1B365D] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* CONTENEDOR DESPLEGABLE CON GRID DE MIEMBROS MÁS GRANDES */}
                  {isOpen && (
                    <div 
                      id={`committee-panel-${committee.id}`}
                      className="px-5 sm:px-8 py-7 border-t border-slate-100 bg-white animate-in slide-in-from-top-2 duration-250"
                    >
                      {/* Misión del Comité */}
                      <div className="text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 leading-relaxed shadow-2xs">
                        <strong className="text-[#1B365D] font-bold">Misión del Comité:</strong> {committee.description}
                      </div>

                      {/* GRID DE INTEGRANTES MÁS GRANDES (Mayor protagonismo a las fotos) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                        {committee.members.map((member) => (
                          <div
                            key={member.id}
                            className="bg-[#F8FAFC] hover:bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 min-h-[250px] sm:min-h-[270px] border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between text-center group"
                          >
                            {/* CONTENEDOR DE AVATAR / FOTO (Incrementado de 64px a 96px/112px con overflow hidden y object cover) */}
                            <div className="relative mb-4 sm:mb-5">
                              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-slate-100 to-slate-200 border-2 sm:border-[3px] border-slate-200/90 shadow-sm flex items-center justify-center text-slate-600 overflow-hidden group-hover:scale-105 group-hover:border-slate-300 transition-all duration-300">
                                {member.photoUrl ? (
                                  <img 
                                    src={member.photoUrl} 
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top"
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                    loading="eager"
                                  />
                                ) : (
                                  <div className="flex items-center justify-center w-full h-full">
                                    <span className="font-['Open_Sans'] font-extrabold text-2xl sm:text-3xl text-slate-600 tracking-wider select-none">
                                      {member.initials || getInitials(member.name)}
                                    </span>
                                  </div>
                                )}
                              </div>
                              {/* Punto institucional con el color oficial del comité */}
                              <div
                                className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white shadow-xs"
                                style={{ backgroundColor: committee.color }}
                                title={`Comité: ${committee.name}`}
                              />
                            </div>

                            {/* Nombre del Miembro */}
                            <div className="w-full mb-3">
                              <h5 className="font-['Open_Sans'] font-extrabold text-base sm:text-lg text-[#1B365D] group-hover:text-[#D91B5C] transition-colors leading-snug">
                                {member.name}
                              </h5>
                            </div>

                            {/* Cargo / Rol en el Comité */}
                            <div className="w-full flex justify-center">
                              <span 
                                className="inline-block text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs group-hover:border-slate-300 transition-colors"
                              >
                                {member.role}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export const TeamsSection = Teams;
export default Teams;
