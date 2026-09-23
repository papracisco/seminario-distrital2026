import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { SCHEDULE_DAYS } from '../data/eventData';

export const ScheduleSection: React.FC = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const activeDay = SCHEDULE_DAYS[activeDayIndex];

  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'Formación':
        return 'bg-[#00875A]/10 text-[#00875A] border-[#00875A]/20';
      case 'Conexión':
        return 'bg-[#F5A623]/10 text-[#9A5B00] border-[#F5A623]/30';
      case 'Protocolar':
        return 'bg-[#1B365D]/10 text-[#1B365D] border-[#1B365D]/20';
      case 'Social':
        return 'bg-[#D91B5C]/10 text-[#D91B5C] border-[#D91B5C]/20';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

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

        {/* Selector de Días */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10">
          {SCHEDULE_DAYS.map((day, idx) => (
            <button
              key={day.day}
              type="button"
              onClick={() => setActiveDayIndex(idx)}
              className={`px-4 sm:px-8 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex flex-col items-center ${
                activeDayIndex === idx
                  ? 'bg-[#1B365D] text-white shadow-md -translate-y-0.5'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="uppercase text-[11px] tracking-wider opacity-80">{day.day}</span>
              <span className="font-extrabold text-sm sm:text-base">{day.date.split(' de ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Resumen del Día Seleccionado */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-2">
            <div>
              <h3 className="font-['Open_Sans'] font-bold text-xl text-[#1B365D]">
                {activeDay.day}: {activeDay.date}
              </h3>
              <p className="text-sm text-slate-600 mt-1">{activeDay.summary}</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00875A]/10 text-[#00875A] self-start sm:self-auto">
              Hotel Klein Dorf
            </span>
          </div>

          {/* Lista de Actividades */}
          <div className="space-y-4">
            {activeDay.activities.map((act, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/60 hover:border-slate-300 transition-colors gap-3"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1B365D] bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#D91B5C]" />
                    <span>{act.time}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-slate-800">
                      {act.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3 text-[#00875A]" />
                      <span>{act.location}</span>
                    </div>
                  </div>
                </div>

                <span
                  className={`text-[11px] font-bold px-3 py-1 rounded-full border self-start sm:self-auto ${getTypeBadgeStyle(act.type)}`}
                >
                  {act.type}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
