import React, { useState } from 'react';
import { 
  Shirt, 
  BookOpen, 
  IdCard, 
  Award, 
  ShoppingBag, 
  Coffee, 
  Crown, 
  PackageCheck, 
  Sparkles,
  Info,
  Lock
} from 'lucide-react';
import { KIT_ITEMS } from '../data/eventData';
import { KitItem } from '../types';

interface KitsSectionProps {
  onOpenRegister: () => void;
}

// Lista simplificada sin especificaciones técnicas de tela/gramaje
const SIMPLIFIED_KIT_ITEMS: KitItem[] = [
  {
    id: 'franela-oficial',
    title: 'Indumentaria Oficial',
    category: 'Indumentaria',
    badge: 'Diseño Exclusivo',
    badgeColor: '#D91B5C',
    icon: 'Shirt',
    description: 'Prenda conmemorativa oficial del Seminario de Aprendizaje Distrital 2026.',
    highlight: 'Edición Oficial',
    tag: 'Oficial'
  },
  {
    id: 'libreta-notas',
    title: 'Material de Trabajo',
    category: 'Herramientas',
    badge: 'En Producción',
    badgeColor: '#00875A',
    icon: 'BookOpen',
    description: 'Cuaderno institucional y herramientas para las sesiones y mesas de trabajo.',
    highlight: 'Uso Académico',
    tag: 'Académico'
  },
  {
    id: 'credencial-qr',
    title: 'Acceso & Acreditación',
    category: 'Accesorios',
    badge: 'Diseño Exclusivo',
    badgeColor: '#1B365D',
    icon: 'IdCard',
    description: 'Gafete oficial y lanyard conmemorativo para el acceso a las actividades.',
    highlight: 'Pase Oficial',
    tag: 'Seguridad'
  },
  {
    id: 'pin-conmemorativo',
    title: 'Insignia Conmemorativa',
    category: 'Coleccionable',
    badge: 'En Producción',
    badgeColor: '#F5A623',
    icon: 'Award',
    description: 'Pieza coleccionable de edición limitada conmemorativa de la Colonia Tovar 2026.',
    highlight: 'Coleccionable',
    tag: 'Colección'
  },
  {
    id: 'tote-bag',
    title: 'Bolso Institucional',
    category: 'Accesorios',
    badge: 'Diseño Exclusivo',
    badgeColor: '#0284C7',
    icon: 'ShoppingBag',
    description: 'Bolso oficial para portar los materiales de estudio y recuerdos del evento.',
    highlight: 'Ecológico',
    tag: 'Ecológico'
  },
  {
    id: 'termo-oficial',
    title: 'Termo Oficial',
    category: 'Bienestar',
    badge: 'En Producción',
    badgeColor: '#D91B5C',
    icon: 'Coffee',
    description: 'Botella conmemorativa para hidratación durante las jornadas en la montaña.',
    highlight: 'Edición Limitada',
    tag: 'Bienestar'
  },
  {
    id: 'gorra-oficial',
    title: 'Gorra Conmemorativa',
    category: 'Indumentaria',
    badge: 'Diseño Exclusivo',
    badgeColor: '#00875A',
    icon: 'Crown',
    description: 'Accesorio oficial conmemorativo con bordado institucional.',
    highlight: 'Accesorio Oficial',
    tag: 'Exclusivo'
  }
];

export const KitsSection: React.FC<KitsSectionProps> = ({ onOpenRegister }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = ['todos', 'Indumentaria', 'Herramientas', 'Coleccionable', 'Accesorios', 'Bienestar'];

  const filteredItems = activeCategory === 'todos' 
    ? SIMPLIFIED_KIT_ITEMS 
    : SIMPLIFIED_KIT_ITEMS.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  const renderKitIcon = (iconName: KitItem['icon'], color: string) => {
    const props = { className: 'w-7 h-7 sm:w-8 sm:h-8', style: { color } };
    switch (iconName) {
      case 'Shirt':
        return <Shirt {...props} />;
      case 'BookOpen':
        return <BookOpen {...props} />;
      case 'IdCard':
        return <IdCard {...props} />;
      case 'Award':
        return <Award {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Coffee':
        return <Coffee {...props} />;
      case 'Crown':
        return <Crown {...props} />;
      default:
        return <PackageCheck {...props} />;
    }
  };

  return (
    <section id="kits" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D91B5C]/10 text-[#D91B5C] font-bold text-xs uppercase tracking-wider mb-4">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>EXPERIENCIA DEL PARTICIPANTE</span>
          </div>

          <h2 className="font-['Open_Sans'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1B365D] tracking-tight mb-4">
            Kit Oficial & Merchandising Conmemorativo
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Cada delegado acreditado recibirá un kit de bienvenida exclusivo con indumentaria y 
            herramientas diseñadas bajo los más altos estándares de calidad institucional y conmemorativa.
          </p>
        </div>

        {/* Contenedor relativo con bloqueo blur y overlay Próximamente */}
        <div className="relative mb-16">
          {/* Contenedor de las tarjetas con blur y deshabilitado */}
          <div className="select-none pointer-events-none filter blur-sm opacity-40">
            {/* Filtros de Categorías */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  tabIndex={-1}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold capitalize ${
                    activeCategory === cat
                      ? 'bg-[#1B365D] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat === 'todos' ? 'Todos los Artículos' : cat}
                </button>
              ))}
            </div>

            {/* GRID VISUAL CON VISTA PREVIA SIMPLIFICADA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  {/* Tag superior */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wider shadow-xs"
                      style={{ backgroundColor: item.badgeColor }}
                    >
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {item.category}
                    </span>
                  </div>

                  {/* Icono central de gran tamaño con fondo suave */}
                  <div className="flex items-center justify-center my-4">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: `${item.badgeColor}15` }}
                    >
                      {renderKitIcon(item.icon, item.badgeColor)}
                    </div>
                  </div>

                  {/* Información del Artículo */}
                  <div className="text-center mt-2">
                    <h3 className="font-['Open_Sans'] font-bold text-lg text-[#1B365D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span className="text-[#00875A] font-bold">✓ {item.highlight}</span>
                      <span className="text-slate-400 font-medium">Detalles reservados</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Capa superior centrada glassmorphism */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
            <div className="bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-2xl rounded-2xl p-6 md:p-8 text-center max-w-md mx-4 relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D91B5C]/15 via-[#F5A623]/15 to-[#1B365D]/15 rounded-2xl blur-lg animate-pulse pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D91B5C]/10 text-[#D91B5C] border border-[#D91B5C]/20 font-bold text-xs uppercase tracking-wider mb-4 shadow-xs animate-pulse">
                  <Lock className="w-3.5 h-3.5 text-[#D91B5C]" />
                  <span>REVELACIÓN PRÓXIMAMENTE</span>
                </div>
                <h3 className="font-['Open_Sans'] font-extrabold text-xl sm:text-2xl text-[#1B365D] mb-2">
                  Kit & Merchandising
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Próximamente revelaremos los artículos oficiales y el merchandising conmemorativo del Seminario
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BANNER DE INCENTIVO: KIT OFICIAL INCLUIDO */}
        <div className="bg-gradient-to-r from-[#1B365D] via-[#0B2545] to-[#1B365D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A623] text-[#1B365D] font-extrabold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Kit Completo Garantizado
            </span>
            <h3 className="font-['Open_Sans'] font-extrabold text-2xl sm:text-3xl text-white mb-3">
              Kit oficial incluido con tu inscripción
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              Asegurando tu cupo en la inscripción oficial, recibes tu acreditación y todo el paquete conmemorativo directamente al realizar tu registro presencial en el Hotel Klein Dorf.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/584243355739?text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20inscripci%C3%B3n%20y%20el%20evento%20del%20Seminario%20Distrital%202026%20en%20la%20Colonia%20Tovar."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#D91B5C] hover:bg-[#c2185b] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Inscribirme y Reservar Mi Kit</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-white/70 font-medium">
                <Info className="w-4 h-4 text-[#F5A623]" />
                <span>Cupos limitados por aforo del recinto</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
