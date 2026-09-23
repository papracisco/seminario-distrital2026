import React, { useState } from 'react';
import { X, Sparkles, Check, MessageSquare, ShieldCheck } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [clubName, setClubName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Socio');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `¡Hola! Deseo inscribirme en la preventa del Seminario Distrital Colonia Tovar 2026.\n` +
      `Nombre: ${fullName || 'Participante'}\n` +
      `Club: ${clubName || 'Distrito 4370'}\n` +
      `Rol: ${role}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D91B5C]" />
              <span className="text-xs font-bold text-[#D91B5C] uppercase tracking-wider">
                Fase de Preventa Oficial
              </span>
            </div>

            <h3 className="font-['Open_Sans'] font-extrabold text-2xl sm:text-3xl text-[#1B365D] mb-2">
              Inscripción al Seminario 2026
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Asegura tu acreditación, kit conmemorativo y acceso completo al Hotel Klein Dorf (27, 28 y 29 de Noviembre).
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Carlos Mendoza"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#1B365D] focus:ring-2 focus:ring-[#1B365D]/20 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Club Rotaract / Rotary / Interact *
                </label>
                <input
                  type="text"
                  required
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  placeholder="Ej. Rotaract Las Delicias"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#1B365D] focus:ring-2 focus:ring-[#1B365D]/20 outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+58 412 1234567"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#1B365D] focus:ring-2 focus:ring-[#1B365D]/20 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Rol en el Club
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#1B365D] focus:ring-2 focus:ring-[#1B365D]/20 outline-none text-sm bg-white"
                  >
                    <option value="Presidente">Presidente</option>
                    <option value="Junta Directiva">Junta Directiva</option>
                    <option value="Socio">Socio</option>
                    <option value="Aspirante">Aspirante</option>
                    <option value="Rotario Padrino">Rotario Padrino</option>
                    <option value="Invitado Especial">Invitado Especial</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#1B365D] focus:ring-2 focus:ring-[#1B365D]/20 outline-none text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#D91B5C] hover:bg-[#c2185b] active:scale-98 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Continuar a Confirmación de Preventa</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00875A]" />
                <span>Datos protegidos por el Comité Distrital 4370</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#00875A]/10 text-[#00875A] flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>

            <h4 className="font-['Open_Sans'] font-extrabold text-2xl text-[#1B365D] mb-2">
              ¡Datos Registrados con Éxito!
            </h4>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Hola <strong>{fullName}</strong>, para completar tu reserva y coordinar la modalidad de pago de la preventa con tu club ({clubName}), haz clic abajo para comunicarte directamente con el comité organizador:
            </p>

            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="w-full py-3.5 px-6 rounded-full bg-[#00875A] hover:bg-[#00704a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mb-3 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contactar al Comité por WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Volver a la plataforma
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
