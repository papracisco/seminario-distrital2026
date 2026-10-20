import React, { useState } from 'react';
import { Camera, Sparkles, MapPin, Maximize2, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  badge: string;
  category: 'Sede' | 'Cultura' | 'Arquitectura' | 'Destino' | 'Hospedaje' | 'Paisajes';
  location: string;
  image: string;
  webpImage: string;
  description: string;
  span?: string;
  aspect?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'kleindorf-main',
    title: 'Hotel Klein Dorf • Sede Oficial',
    badge: 'SEDE OFICIAL',
    category: 'Sede',
    location: 'Sector El Molino, Colonia Tovar',
    image: '/hero-hotel-kleindorf.jpg',
    webpImage: '/hero-hotel-kleindorf.webp',
    description: 'Arquitectura alpina tradicional rodeada de jardines y la serenidad de la montaña aragüeña para vivir tres días inolvidables.',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-4/3 md:aspect-auto'
  },
  {
    id: 'colonia-uno',
    title: 'Iglesia San Martín de Tours',
    badge: 'PATRIMONIO & HISTORIA',
    category: 'Cultura',
    location: 'Casco Histórico, Colonia Tovar',
    image: '/coloniauno.jpg',
    webpImage: '/coloniauno.webp',
    description: 'Templo histórico fundado por los primeros colonos alemanes, epicentro patrimonial y arquitectónico del valle.',
    span: 'md:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'colonia-dos',
    title: 'Arquitectura Tradicional Alemana',
    badge: 'ARQUITECTURA',
    category: 'Arquitectura',
    location: 'Centro Colonial, Colonia Tovar',
    image: '/colonia2.JPG',
    webpImage: '/colonia2.webp',
    description: 'Fachadas con entramado tradicional de madera y tejados alpinos que conservan viva la herencia europea en Aragua.',
    span: 'md:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'colonia-tres',
    title: 'Cultura y Tradición Tovar',
    badge: 'CULTURA',
    category: 'Cultura',
    location: 'Valle de la Colonia Tovar',
    image: '/coloniatres.jpeg',
    webpImage: '/coloniatres.webp',
    description: 'Tradición viva, gastronomía típica y calidez de un pueblo acogedor entre las nubes.',
    span: 'md:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'colonia-flores',
    title: 'Hortensias & Flores de Montaña',
    badge: 'NATURALEZA',
    category: 'Paisajes',
    location: 'Senderos Naturales de Aragua',
    image: '/hero-flores-tovar.jpg',
    webpImage: '/hero-flores-tovar.webp',
    description: 'Vibrantes tonalidades florales y jardines que adornan cada rincón en el clima templado de montaña.',
    span: 'md:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'colonia-cabanas',
    title: 'Cabañas y Paisaje de Montaña',
    badge: 'PAISAJE & HOSPEDAJE',
    category: 'Hospedaje',
    location: 'Sector Montañoso, Colonia Tovar',
    image: '/coloniacabanashessen.jpg',
    webpImage: '/coloniacabanashessen.webp',
    description: 'Alojamiento con encanto colonial entre colinas verdes, neblina matutina y clima fresco de altura.',
    span: 'md:col-span-1 sm:md:col-span-1',
    aspect: 'aspect-4/3'
  },
  {
    id: 'entrada-colonia',
    title: 'Arco de Bienvenida a la Colonia Tovar',
    badge: 'DESTINO',
    category: 'Destino',
    location: 'Entrada Principal, Aragua',
    image: '/entradacolonia.jpg',
    webpImage: '/entradacolonia.webp',
    description: 'El emblemático arco de acceso a la cordillera que da la bienvenida a delegaciones de todo el país.',
    span: 'md:col-span-2',
    aspect: 'aspect-16/9 md:aspect-21/9'
  }
];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = ['Todos', 'Sede', 'Cultura', 'Arquitectura', 'Destino', 'Paisajes', 'Hospedaje'];

  const filteredItems = selectedCategory === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative">
      {/* Ancla para compatibilidad con enlaces antiguos #kits */}
      <div id="kits" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D91B5C]/10 text-[#D91B5C] font-bold text-xs uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MOMENTOS INOLVIDABLES</span>
          </div>

          <h2 className="font-['Open_Sans'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1B365D] tracking-tight mb-4">
            Galería de Experiencias
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Revive la magia de la Colonia Tovar y nuestros encuentros pasados
          </p>

          {/* Filtros de Categoría */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1B365D] text-white shadow-sm shadow-[#1B365D]/20 scale-102'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-[#1B365D] border border-slate-200/90'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cuadrícula de fotos moderna estilo masonry / grid con hover zoom sutil sin fotos repetidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/80 ${item.span || 'md:col-span-1'}`}
            >
              {/* Imagen con zoom sutil scale-105 duration-300 */}
              <div className={`w-full h-full min-h-[240px] sm:min-h-[280px] overflow-hidden ${item.aspect || 'aspect-4/3'}`}>
                <picture>
                  <source srcSet={item.webpImage} type="image/webp" />
                  <img
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Gradiente y superposición de información en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Botón flotante de visualización */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 shadow-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Badge temático oficial solicitado */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#1B365D] backdrop-blur-md shadow-xs">
                  {item.badge}
                </span>
              </div>

              {/* Textos y Ubicación */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#F5A623] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h3 className="font-['Open_Sans'] font-extrabold text-lg sm:text-xl text-white group-hover:text-white leading-snug drop-shadow-xs">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner inferior conmemorativo */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D91B5C]/10 text-[#D91B5C] flex items-center justify-center shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Open_Sans'] font-bold text-base sm:text-lg text-[#1B365D]">
                Comparte tu experiencia en la Colonia Tovar
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Usa el hashtag oficial <strong className="text-[#D91B5C]">#SADTovar2026</strong> en tus fotos y publicaciones en redes.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1B365D]/8 text-[#1B365D] font-bold text-xs sm:text-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>3 Días Inolvidables</span>
            </span>
          </div>
        </div>

      </div>

      {/* Modal / Visor de imagen en pantalla completa */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[70vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <picture>
                <source srcSet={activeModalItem.webpImage} type="image/webp" />
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  width={1200}
                  height={800}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1B365D]/10 text-[#1B365D]">
                  {activeModalItem.badge}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                  {activeModalItem.location}
                </span>
              </div>
              <h3 className="font-['Open_Sans'] font-extrabold text-xl text-[#1B365D] mb-1">
                {activeModalItem.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeModalItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
