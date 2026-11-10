/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { EnfoqueSection } from './components/EnfoqueSection.tsx';
import { OperamosSection } from './components/OperamosSection.tsx';
import { ConectamosSection } from './components/ConectamosSection.tsx';
import { EventosSection } from './components/EventosSection.tsx';
import { CtaIdeaSection } from './components/CtaIdeaSection.tsx';
import { ConcesionariosView } from './components/ConcesionariosView.tsx';
import { NosotrosView } from './components/NosotrosView.tsx';
import { ContactoView } from './components/ContactoView.tsx';
import { Footer } from './components/Footer.tsx';
import { BlueDotCalculatorModal } from './components/BlueDotCalculatorModal.tsx';
import { AuthModal } from './components/AuthModal.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';
import { Language } from './data/translations.ts';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [activeView, setActiveView] = useState<'home' | 'concesionarios' | 'nosotros' | 'contacto'>('home');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Read URL parameters and hash on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam === 'concesionarios' || viewParam === 'nosotros' || viewParam === 'contacto') {
      setActiveView(viewParam);
    }

    const hash = window.location.hash.replace('#', '');
    if (hash === 'operamos' || hash === 'beneficios') {
      setActiveView('home');
      setTimeout(() => {
        document.getElementById('operamos')?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else if (hash === 'faqs') {
      setActiveView('contacto');
    }
  }, []);

  const handleNavigate = (
    view: 'home' | 'concesionarios' | 'nosotros' | 'contacto',
    sectionId?: string
  ) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <div className="min-h-screen bg-[#08121A] text-slate-100 flex flex-col font-sans selection:bg-[#C67321]/30 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero
              currentLang={currentLang}
              onNavigateToContact={() => handleNavigate('contacto')}
              onOpenCalculator={() => setIsCalculatorOpen(true)}
            />
            <ProblemSection
              currentLang={currentLang}
              onNavigateToContact={() => handleNavigate('contacto')}
            />
            <EnfoqueSection currentLang={currentLang} />
            <OperamosSection
              currentLang={currentLang}
              onOpenAuth={() => setIsAuthOpen(true)}
            />
            <ConectamosSection
              currentLang={currentLang}
              onNavigateToContact={() => handleNavigate('contacto')}
              onOpenCalculator={() => setIsCalculatorOpen(true)}
            />
            <EventosSection currentLang={currentLang} />
            <CtaIdeaSection
              currentLang={currentLang}
              onNavigateToContact={() => handleNavigate('contacto')}
            />
          </>
        )}

        {activeView === 'concesionarios' && (
          <ConcesionariosView
            currentLang={currentLang}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            onOpenAuth={() => setIsAuthOpen(true)}
            onNavigateToContact={() => handleNavigate('contacto')}
          />
        )}

        {activeView === 'nosotros' && (
          <NosotrosView
            currentLang={currentLang}
            onNavigateToContact={() => handleNavigate('contacto')}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        )}

        {activeView === 'contacto' && (
          <ContactoView currentLang={currentLang} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Modals & Overlays */}
      <BlueDotCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        currentLang={currentLang}
        onScheduleAudit={() => {
          setIsCalculatorOpen(false);
          handleNavigate('contacto');
        }}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentLang={currentLang}
      />

      <CookieBanner currentLang={currentLang} />
    </div>
  );
}
