import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface HeroProps {
  currentLang: Language;
  onNavigateToContact: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onNavigateToContact,
  onOpenCalculator,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background with real mining image and deep gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Coslink - Ecosistema Minero"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Multilayer gradient for atmospheric depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08121A] via-[#08121A]/85 to-[#08121A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08121A] via-transparent to-[#08121A]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,115,33,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(7,82,110,0.25),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10212F]/80 border border-[#1C384D] text-[#DE8633] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#C67321] animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.08] mb-6 drop-shadow-md">
            <span>{t.hero.titleLine1}</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-[#DE8633]">
              {t.hero.titleLine2}
            </span>{' '}
            <span>{t.hero.titleLine3}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-9 max-w-2xl">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-[#C67321] via-[#D37C26] to-[#DE8633] hover:from-[#B5671B] hover:to-[#CF7723] rounded-xl shadow-xl shadow-orange-950/40 hover:shadow-orange-950/60 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-slate-200 hover:text-white bg-[#0E1F2C]/90 hover:bg-[#152C3D] border border-[#1C384D] hover:border-cyan-500/50 rounded-xl transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-md"
            >
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[#1C384D]/70">
            <div className="p-4 rounded-xl bg-[#0E1F2C]/80 border border-[#1C384D]/80 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-black text-amber-400 mb-1">
                {t.hero.stat1Value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {t.hero.stat1Label}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E1F2C]/80 border border-[#1C384D]/80 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-black text-cyan-300 mb-1">
                {t.hero.stat2Value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {t.hero.stat2Label}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E1F2C]/80 border border-[#1C384D]/80 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-black text-white mb-1">
                {t.hero.stat3Value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {t.hero.stat3Label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
