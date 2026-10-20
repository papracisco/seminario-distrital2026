import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import HeroIntro from './components/HeroIntro';
import { EventSection } from './components/EventSection';
import { GallerySection } from './components/GallerySection';
import { ScheduleSection } from './components/ScheduleSection';
import { SpeakersSection } from './components/SpeakersSection';
import { TeamsSection } from './components/TeamsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FaqSection } from './components/FaqSection';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);

  // Plataforma web oficial pública y abierta para lanzamiento
  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Open_Sans'] antialiased selection:bg-[#D91B5C] selection:text-white animate-in fade-in duration-300">
      {/* 1. NAVBAR SUPERIOR FIJO */}
      <Navbar onOpenRegister={() => setIsRegisterModalOpen(true)} />

      <HeroIntro />
      
      {/* 2. HERO SECTION CON SLIDER & NUEVO CONTADOR HASTA EL EVENTO */}
      <main>
        <HeroSection onOpenRegister={() => setIsRegisterModalOpen(true)} />

        {/* 3. SECCIÓN SOBRE EL EVENTO & LOS 4 PILARES (#evento) */}
        <EventSection />

        {/* CRONOGRAMA OFICIAL (#cronograma) */}
        <ScheduleSection />

        {/* 4. GALERÍA DE MOMENTOS & PAISAJES (#galeria) */}
        <GallerySection />

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
