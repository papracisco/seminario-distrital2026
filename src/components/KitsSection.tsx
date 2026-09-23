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
  Info
} from 'lucide-react';
import { KIT_ITEMS } from '../data/eventData';
import { KitItem } from '../types';

interface KitsSectionProps {
  onOpenRegister: () => void;
}

export const KitsSection: React.FC<KitsSectionProps> = ({ onOpenRegister }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedKitItem, setSelectedKitItem] = useState<KitItem | null>(null);

  const categories = ['todos', 'Indumentaria', 'Herramientas', 'Coleccionable', 'Accesorios', 'Bienestar'];

  const filteredItems = activeCategory === 'todos' 
    ? KIT_ITEMS 
    : KIT_ITEMS.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

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

        {/* Filtros de Categorías */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold capitalize transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1B365D] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat === 'todos' ? 'Todos los Artículos' : cat}
            </button>
          ))}
        </div>

        {/* GRID VISUAL CON HOVER MODERNO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedKitItem(item)}
              className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              {/* Tag superior */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wider"
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
                  className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs"
                  style={{ backgroundColor: `${item.badgeColor}15` }}
                >
                  {renderKitIcon(item.icon, item.badgeColor)}
                </div>
              </div>

              {/* Información del Artículo */}
              <div className="text-center mt-2">
                <h3 className="font-['Open_Sans'] font-bold text-lg text-[#1B365D] group-hover:text-[#D91B5C] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="text-[#00875A] font-bold">✓ {item.highlight}</span>
                  <span className="group-hover:text-[#1B365D] transition-colors">Detalles →</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BANNER DE INCENTIVO: TODO INCLUIDO EN LA PREVENTA */}
        <div className="bg-gradient-to-r from-[#1B365D] via-[#0B2545] to-[#1B365D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A623] text-[#1B365D] font-extrabold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Kit Completo Garantizado
            </span>
            <h3 className="font-['Open_Sans'] font-extrabold text-2xl sm:text-3xl text-white mb-3">
              Todos los 7 artículos incluidos con tu entrada oficial
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              Asegurando tu cupo en la preventa distrital, recibes tu acreditación y todo el paquete conmemorativo 
              directamente al realizar tu registro presencial en el Hotel Klein Dorf.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenRegister}
                className="px-6 py-3 rounded-full bg-[#D91B5C] hover:bg-[#c2185b] active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Inscribirme y Reservar Mi Kit
              </button>
              <div className="flex items-center gap-2 text-xs text-white/70 font-medium">
                <Info className="w-4 h-4 text-[#F5A623]" />
                <span>Cupos limitados por aforo del recinto</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MODAL DETALLES DEL ARTÍCULO */}
      {selectedKitItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedKitItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${selectedKitItem.badgeColor}15` }}
              >
                {renderKitIcon(selectedKitItem.icon, selectedKitItem.badgeColor)}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {selectedKitItem.category}
                </span>
                <h4 className="font-['Open_Sans'] font-bold text-xl text-[#1B365D]">
                  {selectedKitItem.title}
                </h4>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedKitItem.description}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-6 space-y-2 text-xs font-semibold text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Especificación:</span>
                <span className="text-[#1B365D]">{selectedKitItem.badge}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Beneficio:</span>
                <span className="text-[#00875A]">{selectedKitItem.highlight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Entrega:</span>
                <span>Check-in Hotel Klein Dorf</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedKitItem(null);
                  onOpenRegister();
                }}
                className="flex-1 py-3 px-4 rounded-full bg-[#D91B5C] hover:bg-[#c2185b] text-white font-bold text-sm text-center shadow-md transition-all cursor-pointer"
              >
                Inscribirme Ahora
              </button>
              <button
                type="button"
                onClick={() => setSelectedKitItem(null)}
                className="py-3 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
