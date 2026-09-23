import React from 'react';
import { FileText, Compass, ThermometerSnowflake, MapPin, Download, Check } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const tips = [
    {
      title: 'Clima de Montaña y Vestimenta',
      desc: 'Temperaturas habituales de 12°C a 20°C. Se aconseja vestimenta abrigada (chaqueta, suéter institucional) para la noche y calzado cómodo para caminar.',
      icon: ThermometerSnowflake,
      color: '#0284C7'
    },
    {
      title: 'Ubicación & Acceso',
      desc: 'Hotel Klein Dorf, Sector El Molino, Colonia Tovar. Acceso por carretera desde La Victoria (Aragua) o El Junquito (Caracas). Se emitirán rutas recomendadas.',
      icon: MapPin,
      color: '#00875A'
    },
    {
      title: 'Kit del Participante',
      desc: 'Incluye libreta, bolígrafo, gorra, franela, termo y credencial oficial. Solo necesitas traer tu entusiasmo y ganas de aprender.',
      icon: FileText,
      color: '#F5A623'
    },
    {
      title: 'Normas y Convivencia',
      desc: 'El evento se rige bajo la Prueba Cuádruple y el código de conducta de Rotary International para garantizar un ambiente seguro y enriquecedor.',
      icon: Compass,
      color: '#D91B5C'
    }
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${tip.color}15`, color: tip.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-['Open_Sans'] font-bold text-lg text-[#1B365D] mb-2">
                  {tip.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner de Descarga de Ficha Logística */}
        <div className="bg-[#1B365D]/5 border border-[#1B365D]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1B365D] text-white flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Open_Sans'] font-bold text-base sm:text-lg text-[#1B365D]">
                Guía Rápida para Delegaciones (PDF Informativo)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Información de hospedaje, recomendaciones de traslados y protocolo distrital.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B365D] hover:bg-[#0B2545] text-white font-bold text-xs sm:text-sm transition-colors shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Solicitar Guía en WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
