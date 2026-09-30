import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

import logoIcon from '../assets/logo-evento-icon.png';
import logoText from '../assets/logo-evento-text.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroIntro() {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {
    if (!iconRef.current || !textRef.current) return;

    // Timeline de GSAP
    const tl = gsap.timeline();

    // 1. El icono aparece solo en el CENTRO EXACTO de la pantalla
    tl.fromTo(
      iconRef.current,
      { scale: 0.4, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }
    )
    // 2. Pequeña pausa para apreciar el icono en el centro
    .to({}, { duration: 0.2 })
    // 3. El icono se desplaza hacia la izquierda para hacerle espacio al texto
    .to(iconRef.current, {
      x: -120, // Puedes ajustar esta distancia según el tamaño de tu logo
      duration: 0.7,
      ease: 'power3.inOut'
    })
    // 4. El texto aparece desde la derecha deslizándose y quitando el desenfoque
    .fromTo(
      textRef.current,
      { opacity: 0, x: 60, filter: 'blur(8px)' },
      { opacity: 1, x: 100, filter: 'blur(0px)', duration: 0.6, ease: 'power2.out' },
      '-=0.4' // Inicia justo antes de terminar de moverse el icono
    );

    // Animación opcional de la flecha
    if (arrowRef.current) {
      tl.fromTo(
        arrowRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.2'
      );
    }

    // Control del Navbar al hacer Scroll
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom 20%',
        onLeave: () => {
          const mainNav = document.getElementById('main-navbar');
          if (mainNav) {
            gsap.to(mainNav, {
              opacity: 1,
              y: 0,
              pointerEvents: 'auto',
              duration: 0.4,
              ease: 'power2.out'
            });
          }
        },
        onEnterBack: () => {
          const mainNav = document.getElementById('main-navbar');
          if (mainNav) {
            gsap.to(mainNav, {
              opacity: 0,
              y: '-100%',
              pointerEvents: 'none',
              duration: 0.3,
              ease: 'power2.in'
            });
          }
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-white flex flex-col justify-center items-center overflow-hidden z-10"
    >
      {/* Contenedor principal de la marca */}
      <div className="relative flex items-center justify-center min-h-[140px] w-full px-4">
        
        {/* ICONO - Inicialmente en el centro exacto */}
        <img
          ref={iconRef}
          src={logoIcon}
          alt="Icono Logo"
          className="w-24 sm:w-32 md:w-40 h-auto object-contain z-10"
        />

        {/* TEXTO - Posicionado en absolute para no empujar al icono inicialmente */}
        <img
          ref={textRef}
          src={logoText}
          alt="Texto Logo"
          className="absolute w-40 sm:w-56 md:w-72 h-auto object-contain opacity-0 pointer-events-none"
        />
      </div>

      {/* Flecha Desliza */}
      <div
        ref={arrowRef}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-slate-500 animate-bounce"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Desliza</span>
        <span className="text-xl"><ChevronDown /></span>
      </div>
    </section>
  );
}