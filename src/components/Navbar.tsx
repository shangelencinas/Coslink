import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Compass, Globe, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';
import { SOCIAL_LINKS } from '../data/social.ts';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeView: 'home' | 'concesionarios' | 'nosotros' | 'contacto';
  onNavigate: (view: 'home' | 'concesionarios' | 'nosotros' | 'contacto', sectionId?: string) => void;
  onOpenAuth: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeView,
  onNavigate,
  onOpenAuth,
  onOpenCalculator,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: 'home' | 'concesionarios' | 'nosotros' | 'contacto', sectionId?: string) => {
    onNavigate(view, sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08121A]/95 backdrop-blur-md shadow-lg border-b border-[#1C384D]/60 py-3'
          : 'bg-gradient-to-b from-[#08121A]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
            aria-label="Coslink Global - Home"
          >
            <img
              src="./assets/aistudio/coslink_logo_white.png"
              alt="Coslink Global - Where Mining Connects"
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navegación principal">
            <button
              onClick={() => handleLinkClick('nosotros')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeView === 'nosotros'
                  ? 'text-[#DE8633] font-semibold bg-[#C67321]/10'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleLinkClick('concesionarios')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeView === 'concesionarios'
                  ? 'text-[#DE8633] font-semibold bg-[#C67321]/10'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.nav.concessionaires}
            </button>
            <button
              onClick={() => handleLinkClick('home', 'operamos')}
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            >
              {t.nav.benefits}
            </button>
            <button
              onClick={() => handleLinkClick('contacto', 'faqs')}
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            >
              {t.nav.faqs}
            </button>
            <button
              onClick={() => handleLinkClick('contacto')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeView === 'contacto'
                  ? 'text-[#DE8633] font-semibold bg-[#C67321]/10'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Direct WhatsApp button */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Coslink Directo"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/50 rounded-lg transition-all cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Blue Dot Calculator button */}
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-700/50 rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-cyan-900/30"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.demo}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#0E1F2C] border border-[#1C384D] rounded-full p-1 text-xs">
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                  currentLang === 'es'
                    ? 'bg-[#C67321] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
              <span className="text-slate-600 px-0.5">|</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-[#C67321] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick Lang Switcher Mobile */}
            <button
              onClick={() => onLanguageChange(currentLang === 'es' ? 'en' : 'es')}
              className="px-2.5 py-1 text-xs font-bold bg-[#0E1F2C] border border-[#1C384D] rounded-md text-slate-200"
            >
              {currentLang.toUpperCase()}
            </button>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Alternar menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#08121A] border border-[#1C384D] rounded-xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-[#10212F] rounded-lg"
            >
              Inicio
            </button>
            <button
              onClick={() => handleLinkClick('nosotros')}
              className="text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-[#10212F] rounded-lg"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleLinkClick('concesionarios')}
              className="text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-[#10212F] rounded-lg"
            >
              {t.nav.concessionaires}
            </button>
            <button
              onClick={() => handleLinkClick('home', 'operamos')}
              className="text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-[#10212F] rounded-lg"
            >
              {t.nav.benefits}
            </button>
            <button
              onClick={() => handleLinkClick('contacto', 'faqs')}
              className="text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-[#10212F] rounded-lg"
            >
              {t.nav.faqs}
            </button>
            <button
              onClick={() => handleLinkClick('contacto')}
              className="text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-[#10212F] rounded-lg"
            >
              {t.nav.contact}
            </button>

            {/* Mobile Social Media Links */}
            <div className="pt-2 pb-1 px-1 flex items-center justify-between border-t border-[#1C384D]">
              <span className="text-xs text-slate-400 font-medium">Redes:</span>
              <div className="flex items-center gap-2">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0E1F2C] text-slate-300 hover:text-blue-400"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0E1F2C] text-slate-300 hover:text-pink-400"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0E1F2C] text-slate-300 hover:text-cyan-400"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1C384D] flex flex-col gap-2">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 text-center text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Escríbenos en WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full py-2.5 px-3 text-center text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-700/60 rounded-lg flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                {t.nav.demo}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 px-3 text-center text-sm font-semibold text-white bg-[#C67321] hover:bg-[#DE8633] rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <span>{t.nav.login}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
