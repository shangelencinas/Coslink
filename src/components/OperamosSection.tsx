import React from 'react';
import { Lock, FileCheck, Target, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface OperamosSectionProps {
  currentLang: Language;
  onOpenAuth: () => void;
}

export const OperamosSection: React.FC<OperamosSectionProps> = ({
  currentLang,
  onOpenAuth,
}) => {
  const t = TRANSLATIONS[currentLang];

  const columns = [
    {
      num: t.operamos.col1Num,
      title: t.operamos.col1Title,
      desc: t.operamos.col1Desc,
      icon: Lock,
      tag: 'Bóveda Cifrada',
    },
    {
      num: t.operamos.col2Num,
      title: t.operamos.col2Title,
      desc: t.operamos.col2Desc,
      icon: FileCheck,
      tag: 'NDAs & Propiedad Intelectual',
    },
    {
      num: t.operamos.col3Num,
      title: t.operamos.col3Title,
      desc: t.operamos.col3Desc,
      icon: Target,
      tag: 'Cierre de Capital',
    },
  ];

  return (
    <section id="operamos" className="py-24 bg-[#08121A] relative border-t border-[#1C384D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#07526E]/20 border border-[#07526E]/40 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
              {t.operamos.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
              {t.operamos.title}
            </h2>
          </div>

          <button
            onClick={onOpenAuth}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#07526E] to-[#0C6E94] hover:from-[#096182] hover:to-[#107ea8] border border-cyan-400/30 rounded-xl shadow-lg transition-all cursor-pointer self-start md:self-auto"
          >
            <span>{t.operamos.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0E1F2C] border border-[#1C384D] p-8 hover:border-[#DE8633]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-display text-[#DE8633]">
                      {col.num}
                    </span>
                    <span className="text-xs uppercase font-semibold text-slate-400 bg-[#152C3D] px-2.5 py-1 rounded-md border border-[#1C384D]">
                      {col.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#07526E]/30 border border-[#07526E]/50 flex items-center justify-center text-cyan-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {col.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {col.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1C384D]/60 flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Protocolo de confidencialidad activa</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
