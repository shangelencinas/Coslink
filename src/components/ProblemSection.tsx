import React from 'react';
import { Pickaxe, Briefcase, Wrench, ArrowRight, Quote } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface ProblemSectionProps {
  currentLang: Language;
  onNavigateToContact: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  currentLang,
  onNavigateToContact,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-24 bg-[#08121A] relative border-t border-[#1C384D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#07526E]/20 border border-[#07526E]/40 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            {t.problem.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-6 uppercase">
            {t.problem.title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            {t.problem.intro}
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1: Concessionaires */}
          <div className="relative group p-8 rounded-2xl bg-[#0E1F2C] border border-[#1C384D] hover:border-[#C67321]/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/20 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-xl bg-[#07526E]/30 border border-[#07526E]/50 flex items-center justify-center text-[#DE8633] mb-6 group-hover:scale-110 transition-transform">
                <Pickaxe className="w-6 h-6 text-[#DE8633]" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-4">
                {t.problem.card1Title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {t.problem.card1Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1C384D]/60 flex items-center text-xs font-semibold text-[#DE8633]">
              <span>Validación & Estructuración</span>
            </div>
          </div>

          {/* Card 2: Investors */}
          <div className="relative group p-8 rounded-2xl bg-[#0E1F2C] border border-[#1C384D] hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-xl bg-[#07526E]/30 border border-[#07526E]/50 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-4">
                {t.problem.card2Title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {t.problem.card2Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1C384D]/60 flex items-center text-xs font-semibold text-cyan-400">
              <span>Debida Diligencia & Mitigación</span>
            </div>
          </div>

          {/* Card 3: Providers */}
          <div className="relative group p-8 rounded-2xl bg-[#0E1F2C] border border-[#1C384D] hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-950/20 flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-xl bg-[#07526E]/30 border border-[#07526E]/50 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-4">
                {t.problem.card3Title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {t.problem.card3Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1C384D]/60 flex items-center text-xs font-semibold text-amber-400">
              <span>Cadena de Suministro Minera</span>
            </div>
          </div>
        </div>

        {/* Quote Banner */}
        <div className="relative overflow-hidden rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#0E2333] via-[#07526E]/50 to-[#0B1B26] border border-[#1C384D] shadow-2xl">
          <div className="absolute -top-12 -right-8 opacity-10 text-white pointer-events-none">
            <Quote className="w-56 h-56" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xl sm:text-2xl font-medium text-slate-100 italic leading-snug">
                {t.problem.quote}
              </p>
              <div className="mt-3 text-xs tracking-wider uppercase font-semibold text-[#DE8633]">
                Coslink Global — Where Mining Connects
              </div>
            </div>

            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#C67321] hover:bg-[#DE8633] rounded-xl shadow-lg hover:shadow-orange-950/40 transition-all duration-200 shrink-0 cursor-pointer"
            >
              <span>{t.problem.ctaQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
