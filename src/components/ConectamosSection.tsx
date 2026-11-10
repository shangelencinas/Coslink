import React from 'react';
import { ArrowRight, Compass, Shield, Database, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface ConectamosSectionProps {
  currentLang: Language;
  onNavigateToContact: () => void;
  onOpenCalculator: () => void;
}

export const ConectamosSection: React.FC<ConectamosSectionProps> = ({
  currentLang,
  onNavigateToContact,
  onOpenCalculator,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-24 bg-[#0B151E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Connecting Header Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#07526E]/40 via-[#0E2333] to-[#0A1822] border border-[#1C384D] p-8 sm:p-14 mb-20 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase mb-6">
              {t.vision.headerTitle}
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed">
              {t.vision.headerDesc}
            </p>
          </div>
        </div>

        {/* Vision & Platform Screenshot Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C67321]/20 border border-[#C67321]/40 text-[#DE8633] text-xs font-bold uppercase tracking-widest mb-4">
              {t.vision.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-snug mb-6">
              {t.vision.title}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed font-light mb-4">
              {t.vision.p1}
            </p>

            <p className="text-slate-300 text-base leading-relaxed font-light mb-8">
              {t.vision.p2}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#C67321] hover:bg-[#DE8633] rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <span>{t.vision.btnTalk}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-[#0E1F2C] hover:bg-[#152C3D] border border-[#1C384D] rounded-xl transition-all cursor-pointer"
              >
                <span>{t.vision.btnMore}</span>
              </button>
            </div>
          </div>

          {/* Right Platform Mockup with Coslink Tag */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#08121A] border-2 border-[#1C384D] shadow-2xl overflow-hidden group">
              {/* Browser window header bar */}
              <div className="bg-[#0E1F2C] px-4 py-3 border-b border-[#1C384D] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-slate-400">app.coslink.global/dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/40 text-[11px] font-semibold text-cyan-300">
                  <Shield className="w-3 h-3" />
                  <span>Sello Blue Dot Activo</span>
                </div>
              </div>

              {/* Platform screenshot */}
              <div className="relative">
                <img
                  src="./images/platform-screenshot.png"
                  alt="Plataforma Coslink Global"
                  className="w-full h-auto object-cover filter contrast-105"
                />

                {/* Coslink floating badge */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#08121A]/90 border border-[#1C384D] backdrop-blur-md shadow-xl flex items-center gap-3">
                  <img
                    src="./assets/aistudio/coslink_mark.png"
                    alt="Coslink"
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Coslink Ecosystem
                    </div>
                    <div className="text-[10px] text-[#DE8633]">
                      Catálogo Privado de Concesiones
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
