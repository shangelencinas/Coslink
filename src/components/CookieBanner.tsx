import React, { useState, useEffect } from 'react';
import { Cookie, Shield } from 'lucide-react';
import { Language } from '../data/translations.ts';

interface CookieBannerProps {
  currentLang: Language;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ currentLang }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('coslink_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem('coslink_cookie_consent', accepted ? 'accepted' : 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-[#0E1F2C]/95 border-2 border-[#1C384D] rounded-2xl p-5 shadow-2xl backdrop-blur-md text-slate-200 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#07526E]/40 border border-[#07526E] flex items-center justify-center text-cyan-400 shrink-0">
          <Shield className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white font-display">
            {currentLang === 'es' ? 'Aviso de Privacidad y Cookies' : 'Privacy & Cookies Notice'}
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
            {currentLang === 'es'
              ? 'Usamos cookies para mejorar tu experiencia, garantizar la seguridad del Data Room y analizar el uso del sitio conforme a la normativa vigente.'
              : 'We use cookies to enhance your experience, ensure Data Room security, and evaluate platform usage according to regulations.'}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#1C384D]/60">
        <button
          onClick={() => handleChoice(false)}
          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#152C3D] transition-colors cursor-pointer"
        >
          {currentLang === 'es' ? 'Rechazar' : 'Decline'}
        </button>
        <button
          onClick={() => handleChoice(true)}
          className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#C67321] hover:bg-[#DE8633] transition-colors cursor-pointer shadow-sm"
        >
          {currentLang === 'es' ? 'Aceptar' : 'Accept'}
        </button>
      </div>
    </aside>
  );
};
