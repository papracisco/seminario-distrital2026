import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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

    // 1. Animación de Entrada de la marca
    const tl = gsap.timeline();

    tl.fromTo(
      iconRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
    .to(iconRef.current, {
      x: -30,
      duration: 0.7,
      ease: 'power3.inOut'
    })
    .fromTo(
      textRef.current,
      { opacity: 0, x: 30, filter: 'blur(8px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    if (arrowRef.current) {
      tl.fromTo(
        arrowRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.2'
      );
    }

    // 2. Control del Navbar al hacer Scroll
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom 20%',
        onLeave: () => {
          // Muestra el Navbar completo al desplazar la intro hacia arriba
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
          // Oculta el Navbar si el usuario vuelve a subir arriba del todo
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
      <div className="flex items-center justify-center gap-2 px-4">
        <img
          ref={iconRef}
          src={logoIcon}
          alt="Icono Logo"
          className="w-24 sm:w-32 md:w-40 h-auto object-contain"
        />
        <img
          ref={textRef}
          src={logoText}
          alt="Texto Logo"
          className="w-40 sm:w-56 md:w-72 h-auto object-contain"
        />
      </div>

      <div
        ref={arrowRef}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-slate-500 animate-bounce"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Desliza</span>
        <span className="text-xl">↓</span>
      </div>
    </section>
  );
}