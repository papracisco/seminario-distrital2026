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

    const isMobile = window.innerWidth < 640;

    const iconX = isMobile ? -76 : -120;
    const textX = isMobile ? 50 : 100;

    // Timeline de la animación inicial
    const tl = gsap.timeline();

    tl.fromTo(
      iconRef.current,
      { scale: 0.4, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }
    )
    .to({}, { duration: 0.2 })
    .to(iconRef.current, {
      x: iconX,
      duration: 0.7,
      ease: 'power3.inOut'
    })
    .fromTo(
      textRef.current,
      { opacity: 0, x: textX + 10, filter: 'blur(8px)' },
      { opacity: 1, x: textX, filter: 'blur(0px)', duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );

    if (arrowRef.current) {
      tl.fromTo(
        arrowRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.2'
      );
    }

    // ScrollTrigger infallible para el Navbar
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom 10%',
        onLeave: () => {
          const mainNav = document.getElementById('main-navbar');
          if (mainNav) {
            gsap.to(mainNav, {
              opacity: 1,
              y: 0,
              pointerEvents: 'auto',
              duration: 0.3,
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
        },
        // Respaldo de seguridad en caso de que en móvil el scroll salte rápido
        onUpdate: (self) => {
          const mainNav = document.getElementById('main-navbar');
          if (!mainNav) return;

          if (self.progress > 0.95) {
            gsap.to(mainNav, {
              opacity: 1,
              y: 0,
              pointerEvents: 'auto',
              duration: 0.3,
              ease: 'power2.out'
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
      <div className="relative flex items-center justify-center min-h-[140px] w-full max-w-full px-4 overflow-hidden">
        <img
          ref={iconRef}
          src={logoIcon}
          alt="Icono Logo"
          className="w-24 sm:w-32 md:w-40 h-auto object-contain z-10"
        />

        <img
          ref={textRef}
          src={logoText}
          alt="Texto Logo"
          className="absolute w-40 sm:w-56 md:w-72 h-auto object-contain opacity-0 pointer-events-none"
        />
      </div>

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