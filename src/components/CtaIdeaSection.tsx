import React from 'react';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface CtaIdeaSectionProps {
  currentLang: Language;
  onNavigateToContact: () => void;
}

export const CtaIdeaSection: React.FC<CtaIdeaSectionProps> = ({
  currentLang,
  onNavigateToContact,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-20 bg-gradient-to-r from-[#07526E] via-[#0A4156] to-[#08121A] text-white relative overflow-hidden border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight uppercase mb-4 drop-shadow-md">
          {t.ctaIdea.title}
        </h2>
        <p className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl mx-auto mb-9 leading-relaxed">
          {t.ctaIdea.desc}
        </p>

        <button
          onClick={onNavigateToContact}
          className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <CalendarCheck className="w-5 h-5 text-[#C67321]" />
          <span>{t.ctaIdea.btn}</span>
          <ArrowRight className="w-4 h-4 text-slate-600" />
        </button>
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
