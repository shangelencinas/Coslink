import React from 'react';
import { Layers, ShieldCheck, TrendingUp, CheckCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface EnfoqueSectionProps {
  currentLang: Language;
}

export const EnfoqueSection: React.FC<EnfoqueSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const steps = [
    {
      num: t.enfoque.step1Num,
      title: t.enfoque.step1Title,
      desc: t.enfoque.step1Desc,
      icon: Layers,
      highlight: 'Fase 01: Identificación & Título',
      color: 'from-amber-500/20 to-orange-600/10 border-amber-500/40 text-amber-400',
    },
    {
      num: t.enfoque.step2Num,
      title: t.enfoque.step2Title,
      desc: t.enfoque.step2Desc,
      icon: ShieldCheck,
      highlight: 'Fase 02: Dictamen Técnico COSMIN',
      color: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/40 text-cyan-400',
    },
    {
      num: t.enfoque.step3Num,
      title: t.enfoque.step3Title,
      desc: t.enfoque.step3Desc,
      icon: TrendingUp,
      highlight: 'Fase 03: Rondas de Capital & Matchmaking',
      color: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/40 text-emerald-400',
    },
  ];

  return (
    <section className="py-24 bg-[#0B151E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10212F] border border-[#1C384D] text-[#DE8633] text-xs font-bold uppercase tracking-widest mb-4">
            {t.enfoque.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
            {t.enfoque.title}
          </h2>
        </div>

        {/* 3 Step Interactive Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0E1F2C] border border-[#1C384D] p-8 flex flex-col justify-between hover:border-slate-400/40 transition-all duration-300 shadow-xl group"
              >
                {/* Large background number */}
                <div className="absolute top-4 right-6 text-6xl font-black text-[#152C3D]/80 font-display select-none">
                  0{step.num}
                </div>

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} border flex items-center justify-center mb-6 shadow-inner`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {step.highlight}
                  </span>

                  <h3 className="text-2xl font-bold font-display text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1C384D]/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Paso 0{step.num} de 03</span>
                  <div className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Estándar Coslink</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
