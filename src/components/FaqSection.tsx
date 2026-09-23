import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/eventData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B365D]/8 text-[#1B365D] font-bold text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#00875A]" />
            <span>RESOLVEMOS TUS DUDAS</span>
          </div>
          <h2 className="font-['Open_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1B365D] tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Respuestas a las consultas habituales sobre acreditación, logística y preventa distrital.
          </p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-4 mb-12">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-['Open_Sans'] font-bold text-base sm:text-lg text-[#1B365D] hover:text-[#D91B5C] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#D91B5C]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-[#F8FAFC]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ¿Tienes otra pregunta? */}
        <div className="text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-xs">
          <h3 className="font-['Open_Sans'] font-bold text-xl text-[#1B365D] mb-2">
            ¿Tienes alguna consulta adicional?
          </h3>
          <p className="text-sm text-slate-600 mb-5 max-w-md mx-auto">
            El comité de atención al participante está disponible para orientarte en cualquier requerimiento de tu delegación.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00875A] hover:bg-[#00704a] text-white font-bold text-sm shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contactar al Comité por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
