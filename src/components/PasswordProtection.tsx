import React, { useState } from 'react';
import { Lock, KeyRound, AlertCircle, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';

interface PasswordProtectionProps {
  onUnlock: () => void;
}

export const PasswordProtection: React.FC<PasswordProtectionProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password.trim() === 'omaresmadridista2026') {
      setError(false);
      // Guardar en localStorage para persistencia de sesión
      try {
        localStorage.setItem('sad2026_auth', 'granted');
      } catch (err) {
        console.warn('LocalStorage no disponible', err);
      }
      onUnlock();
    } else {
      setError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#07152B]">
      
      {/* Fondo de montañas con desenfoque y gradiente institucional suave */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-105 opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545]/90 via-[#07152B]/95 to-[#1B365D]/90 backdrop-blur-sm" />

      {/* Tarjeta central limpia, moderna y segura */}
      <div className={`relative z-10 w-full max-w-md bg-white/98 backdrop-blur-md rounded-3xl p-6 sm:p-9 shadow-2xl border border-white/20 text-center animate-in fade-in zoom-in-95 duration-300 ${error ? 'shake' : ''}`}>
        
        {/* 1. LOS 3 LOGOS INSTITUCIONALES HORIZONTALES CON SEPARADORES TENUES */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[340px] mx-auto mb-6 pb-5 border-b border-slate-100">
          
          {/* Logo 1: Colonia Tovar 2026 */}
          <div className="flex items-center justify-center">
            <img
              src="/logo-evento.png"
              alt="Colonia Tovar 2026"
              className="h-[36px] sm:h-[42px] w-auto max-w-[110px] object-contain"
            />
          </div>

          {/* Divisor vertical tenue */}
          <div className="w-[1.5px] h-[26px] bg-[#CBD5E1] shrink-0" aria-hidden="true" />

          {/* Logo 2: Distrito 4370 */}
          <div className="flex items-center justify-center">
            <img
              src="/logo-rotaract.png"
              alt="Rotaract Distrito 4370"
              className="h-[22px] sm:h-[26px] w-auto max-w-[85px] object-contain"
            />
          </div>

          {/* Divisor vertical tenue */}
          <div className="w-[1.5px] h-[26px] bg-[#CBD5E1] shrink-0" aria-hidden="true" />

          {/* Logo 3: Rotaract Las Delicias */}
          <div className="flex items-center justify-center">
            <img
              src="/logo-las-delicias.png"
              alt="Rotaract Las Delicias"
              className="h-[30px] sm:h-[36px] w-auto max-w-[95px] object-contain"
            />
          </div>
        </div>

        {/* Icono de Seguridad / Candado */}
        <div className="w-14 h-14 rounded-2xl bg-[#D91B5C]/10 text-[#D91B5C] flex items-center justify-center mx-auto mb-4 shadow-xs">
          <Lock className="w-7 h-7" />
        </div>

        {/* Titular en negrita, fuente 'Open Sans' */}
        <h1 className="font-['Open_Sans'] font-extrabold text-2xl sm:text-3xl text-[#1B365D] tracking-tight mb-3">
          PÁGINA EN CONSTRUCCIÓN
        </h1>

        {/* Texto descriptivo */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 px-1">
          Estimados compañeros, estamos ultimando detalles para el lanzamiento. Por favor, introduzcan la contraseña proporcionada para acceder a la versión preliminar.
        </p>

        {/* Formulario de Verificación */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Contraseña de Acceso
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <KeyRound className="w-4 h-4" />
              </div>

              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoFocus
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Ingresa la clave aquí..."
                className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm font-medium transition-all outline-none ${
                  error
                    ? 'border-red-500 bg-red-50/50 text-red-900 focus:ring-2 focus:ring-red-400/20'
                    : 'border-slate-300 focus:border-[#1B365D] focus:ring-2 focus:ring-[#1B365D]/20 bg-slate-50/50'
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                tabIndex={-1}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Mensaje de Error en Rojo si la contraseña es incorrecta */}
            {error && (
              <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-red-600 animate-in fade-in duration-150">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Contraseña incorrecta. Por favor, verifica e intenta de nuevo.</span>
              </div>
            )}
          </div>

          {/* Botón Destacado "DESBLOQUEAR PÁGINA" */}
          <button
            type="submit"
            disabled={isSubmitting || !password.trim()}
            className="w-full py-3.5 px-6 rounded-xl bg-[#D91B5C] hover:bg-[#c2185b] active:scale-98 disabled:opacity-60 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>DESBLOQUEAR PÁGINA</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>

        {/* Nota al pie institucional */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00875A]" />
          <span>Acceso Privado • Rotaract Distrito 4370</span>
        </div>

      </div>

    </div>
  );
};
