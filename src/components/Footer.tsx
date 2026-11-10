import React from 'react';
import { ArrowUp, Phone, MapPin, Globe, ExternalLink, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';
import { SOCIAL_LINKS } from '../data/social.ts';

interface FooterProps {
  currentLang: Language;
  onNavigate: (view: 'home' | 'concesionarios' | 'nosotros' | 'contacto', sectionId?: string) => void;
  onOpenAuth: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenAuth,
  onOpenCalculator,
}) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B10] text-slate-300 border-t border-[#1C384D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="./assets/aistudio/coslink_logo_white.png"
                alt="Coslink - Where Mining Connects"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-light">
              {t.footer.tagline}
            </p>

            <div className="pt-2 text-xs text-slate-400 flex flex-col gap-2 font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DE8633]" />
                <span>Hermosillo, Sonora, México</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  WhatsApp: wa.link/71ruf0
                </a>
              </div>
            </div>

            {/* Social Media Links Bar */}
            <div className="pt-3">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                {currentLang === 'es' ? 'Síguenos en Redes Sociales' : 'Follow Us on Social Media'}
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Coslink Global"
                  className="w-9 h-9 rounded-xl bg-[#0E1F2C] border border-[#1C384D] hover:border-blue-500/60 hover:bg-blue-950/40 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @coslink.global"
                  className="w-9 h-9 rounded-xl bg-[#0E1F2C] border border-[#1C384D] hover:border-pink-500/60 hover:bg-pink-950/40 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Coslink Global"
                  className="w-9 h-9 rounded-xl bg-[#0E1F2C] border border-[#1C384D] hover:border-cyan-500/60 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Coslink"
                  className="w-9 h-9 rounded-xl bg-[#0E1F2C] border border-[#1C384D] hover:border-emerald-500/60 hover:bg-emerald-950/40 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Links Column 1: Plataforma */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.platformCol}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home', 'operamos')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Sistema Blue Dot</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('concesionarios')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.concessionaires}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAuth}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.login}
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Compañía */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.companyCol}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto', 'faqs')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.faqs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Scroll to Top Column */}
          <div className="lg:col-span-2 flex lg:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E1F2C] hover:bg-[#152C3D] border border-[#1C384D] text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4 text-[#DE8633]" />
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="pt-8 mt-8 border-t border-[#1C384D]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <a href="#legal" className="hover:text-slate-300 transition-colors">
              {t.footer.legal}
            </a>
            <span>|</span>
            <a href="#terminos" className="hover:text-slate-300 transition-colors">
              {t.footer.terms}
            </a>
            <span>|</span>
            <a href="#privacidad" className="hover:text-slate-300 transition-colors">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
