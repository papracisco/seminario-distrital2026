import React, { useState, useEffect } from 'react';
import { PasswordProtection } from './components/PasswordProtection';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EventSection } from './components/EventSection';
import { KitsSection } from './components/KitsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { SpeakersSection } from './components/SpeakersSection';
import { TeamsSection } from './components/TeamsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FaqSection } from './components/FaqSection';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';

export default function App() {
  // Estado de autenticación para la pantalla de protección
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);

  // Verificación de sesión previa en localStorage
  useEffect(() => {
    try {
      const savedAuth = localStorage.getItem('sad2026_auth');
      if (savedAuth === 'granted') {
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.warn('LocalStorage no disponible', err);
    }
  }, []);

  // Si no está autenticado, renderizar la pantalla de PÁGINA EN CONSTRUCCIÓN
  if (!isAuthenticated) {
    return <PasswordProtection onUnlock={() => setIsAuthenticated(true)} />;
  }

  // Si está autenticado, renderizar la plataforma web oficial completa
  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Open_Sans'] antialiased selection:bg-[#D91B5C] selection:text-white animate-in fade-in duration-300">
      {/* 1. NAVBAR SUPERIOR FIJO */}
      <Navbar onOpenRegister={() => setIsRegisterModalOpen(true)} />

      {/* 2. HERO SECTION CON SLIDER & NUEVO CONTADOR HASTA EL EVENTO */}
      <main>
        <HeroSection onOpenRegister={() => setIsRegisterModalOpen(true)} />

        {/* 3. SECCIÓN SOBRE EL EVENTO & LOS 4 PILARES (#evento) */}
        <EventSection />

        {/* CRONOGRAMA OFICIAL (#cronograma) */}
        <ScheduleSection />

        {/* 4. SECCIÓN DE KITS & MERCHANDISING OFICIAL (#kits) */}
        <KitsSection onOpenRegister={() => setIsRegisterModalOpen(true)} />

        {/* PONENTES (#ponentes) */}
        <SpeakersSection />

        {/* EQUIPO ORGANIZADOR (#equipos) */}
        <TeamsSection />

        {/* GUÍA Y RECURSOS (#recursos) */}
        <ResourcesSection />

        {/* PREGUNTAS FRECUENTES (#faq) */}
        <FaqSection />
      </main>

      {/* FOOTER INSTITUCIONAL */}
      <Footer />

      {/* MODAL DE INSCRIPCIÓN / PREVENTA */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </div>
  );
}
