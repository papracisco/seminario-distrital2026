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
  Layers,
  Crown,
  Shirt,
  HeartPulse
} from 'lucide-react';
import { COMMITTEES_DATA } from '../data/teams';
import { Committee } from '../types';
// importas todas las fotos de la carpeta como un diccionario automático:
const memberImages = import.meta.glob('../assets/integrantesComite/*.{jpg,jpeg,png,webp}', { eager: true });

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

// Función auxiliar para resolver la ruta de Vite dinámicamente según el archivo
const getMemberPhoto = (photoPath?: string) => {
  if (!photoPath) return undefined;
  // Si ya es una ruta resuelta directamente por un import de Vite:
  if (photoPath.startsWith('data:') || photoPath.startsWith('blob:') || photoPath.includes('/assets/') || photoPath.includes('/@fs/')) {
    return photoPath;
  }
  const fileName = photoPath.split('/').pop()?.split('?')[0]; 
  const key = `../assets/integrantesComite/${fileName}`;
  
  const match = memberImages[key] as { default: string } | undefined;
  return match ? match.default : photoPath;
};

export const Teams: React.FC<TeamsProps> = ({ committees = COMMITTEES_DATA }) => {
  // Estado para el comité activo en el acordeón (por defecto todos cerrados)
  const [openCommitteeId, setOpenCommitteeId] = useState<string | null>(null);

  const toggleCommittee = (committeeId: string) => {
    const isOpening = openCommitteeId !== committeeId;
    
    // Cambiamos el estado
    setOpenCommitteeId(isOpening ? committeeId : null);

    // Si se está abriendo, hacemos el autoscroll hacia el centro
    if (isOpening) {
      // Damos un pequeño respiro de 100ms para que el DOM empiece a renderizar
      setTimeout(() => {
        const element = document.getElementById(`committee-card-${committeeId}`);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' // Esto lo "pinea" o centra exactamente en el medio de la pantalla
          });
        }
      }, 100);
    }
  };

  const renderCommitteeIcon = (iconName: Committee['iconName'], color: string) => {
    const props = { className: 'w-5 h-5 sm:w-6 sm:h-6', style: { color } };
    switch (iconName) {
      case 'Crown':
        return <Crown {...props} />;
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
      case 'Shirt':
      case 'Sparkles':
        return <Shirt {...props} />;
      case 'HeartPulse':
        return <HeartPulse {...props} />;
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
                  width={180}
                  height={44}
                  className="h-11 w-auto object-contain aspect-[180/44]"
                  loading="lazy"
                  decoding="async"
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
                  width={180}
                  height={44}
                  className="h-11 w-auto object-contain aspect-[180/44]"
                  loading="lazy"
                  decoding="async"
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

          {/* LISTA DE COMITÉS OPERATIVOS */}
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
                          <span className="text-xs font-bold text-slate-400">
                            {String(index + 1).padStart(2, '0')}.
                          </span>
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

                  {/* CONTENEDOR DESPLEGABLE CON ANIMACIÓN FLUIDA */}
                  <div 
                    id={`committee-panel-${committee.id}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-8 py-7 border-t border-slate-100 bg-white">
                        
                        {/* Misión del Comité */}
                        <div className="text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 leading-relaxed shadow-2xs">
                          <strong className="text-[#1B365D] font-bold">Misión del Comité:</strong> {committee.description}
                        </div>

                        {/* GRID DE INTEGRANTES MÁS GRANDES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                          {committee.members.map((member, memberIdx) => {
                            const isOpen = openCommitteeId === committee.id; 
                            const membersCount = committee.members.length;

                            const resolvedPhotoUrl = getMemberPhoto(member.photoUrl);
                            const objPosition = member.photoStyle?.objectPosition || 'center top';
                            const imgScale = member.photoStyle?.scale || 1;
                            
                            const rotateVal = member.photoStyle?.rotate 
                              ? (typeof member.photoStyle.rotate === 'number' ? `${member.photoStyle.rotate}deg` : member.photoStyle.rotate)
                              : undefined;

                            let transformStyle = member.photoStyle?.transform;
                            if (!transformStyle) {
                              if (rotateVal) {
                                transformStyle = `rotate(${rotateVal}) scale(${imgScale})`;
                              } else if (imgScale !== 1) {
                                transformStyle = `scale(${imgScale})`;
                              }
                            }

                            return (
                              <div
                                key={member.id}
                                id={`committee-card-${committee.id}`} // ID único para cada tarjeta de miembro,para el togglecomite
                                className="animate-stagger-fade-in bg-[#F8FAFC] hover:bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 min-h-[260px] sm:min-h-[280px] border border-slate-200/90 hover:border-[#D91B5C] hover:shadow-xl hover:shadow-[#D91B5C]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center group"
                                style={{ animationDelay: `${memberIdx * 0.06}s` }}
                              >
                                {/* CONTENEDOR DE AVATAR / FOTO */}
                                <div className="relative mb-4 sm:mb-5">
                                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 border-2 border-slate-200/90 shadow-sm flex items-center justify-center text-slate-600 shrink-0 group-hover:scale-105 group-hover:border-[#D91B5C]/50 transition-all duration-300">
                                    {resolvedPhotoUrl ? (
                                      <img 
                                        src={resolvedPhotoUrl}
                                        alt={member.name}
                                        width={112}
                                        height={112}
                                        className="w-full h-full object-cover aspect-square animate-fade-in"
                                        style={{ 
                                          objectFit: 'cover', 
                                          objectPosition: objPosition,
                                          transform: transformStyle
                                        }}
                                        loading="eager"
                                        decoding="async"
                                      />
                                    ) : (
                                      <div className="flex items-center justify-center w-full h-full">
                                        <span className="font-['Open_Sans'] font-extrabold text-2xl sm:text-3xl text-slate-600 tracking-wider select-none">
                                          {member.initials || getInitials(member.name)}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                  {/* Punto institucional */}
                                  <div
                                    className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white shadow-xs"
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
                                  <span className="inline-block text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs group-hover:border-[#D91B5C]/40 group-hover:text-[#1B365D] transition-colors">
                                    {member.role}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    </div>
                  </div>
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
