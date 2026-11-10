import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  FileText, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  AlertTriangle, 
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';
import { REGULATORY_CALENDAR } from '../utils/compliance.ts';
import { FAQS_DATA } from '../data/faqs.ts';

interface ConcesionariosViewProps {
  currentLang: Language;
  onOpenCalculator: () => void;
  onOpenAuth: () => void;
  onNavigateToContact: () => void;
}

export const ConcesionariosView: React.FC<ConcesionariosViewProps> = ({
  currentLang,
  onOpenCalculator,
  onOpenAuth,
  onNavigateToContact,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);

  const concessionFaqs = FAQS_DATA.filter(
    (f) => f.category === 'concesiones' || f.category === 'bluedot'
  );

  const [openFaq, setOpenFaq] = useState<string | null>(concessionFaqs[0]?.id || null);

  const tiers = [
    {
      level: 'Nivel 1',
      title: 'Registrado',
      tag: 'Básico',
      time: 'Inmediato',
      desc: 'Concesión registrada en la plataforma con datos cartográficos iniciales, comprobante de titularidad y ficha informativa.',
      benefits: [
        'Presencia en directorio privado',
        'Alertas del calendario regulatorio',
        'Diagnóstico preliminar de cumplimiento',
      ],
      color: 'border-slate-500/40 text-slate-300',
      badgeBg: 'bg-slate-700 text-slate-200',
    },
    {
      level: 'Nivel 2',
      title: 'Validado',
      tag: 'Técnico',
      time: '15 - 20 días',
      desc: 'Estudio geológico certificado por COSMIN y verificación legal de vigencia ante la Dirección General de Minas (DGM).',
      benefits: [
        'Sello de validación técnica COSMIN',
        'Certificación de ensayes y muestreo',
        'Confirmación de estatus legal y gravámenes',
      ],
      color: 'border-cyan-500/50 text-cyan-400',
      badgeBg: 'bg-cyan-900/80 text-cyan-300',
    },
    {
      level: 'Nivel 3',
      title: 'Estructurado',
      tag: 'Inversión',
      time: '25 - 35 días',
      desc: 'Proyecto de inversión formulado con modelo financiero, tesis de negocio y Data Room listo para debida diligencia de fondos.',
      benefits: [
        'Visibilidad ante inversores institucionales',
        'Data Room digital cifrado con NDA',
        'Estructuración para JV, cesión o royalty',
      ],
      color: 'border-amber-500/50 text-amber-400',
      badgeBg: 'bg-amber-900/80 text-amber-300',
    },
    {
      level: 'Nivel 4',
      title: 'Blue Dot',
      tag: 'Premium',
      time: '35 - 45 días',
      desc: 'Máxima acreditación del ecosistema. Activo de clase institucional con prioridad en matchmaking y foros internacionales de capital.',
      benefits: [
        'Máxima visibilidad y 4x más contactos',
        'Prioridad en roadshows de inversión privada',
        'Acompañamiento ejecutivo en cierre de acuerdos',
      ],
      color: 'border-orange-500 text-[#DE8633]',
      badgeBg: 'bg-gradient-to-r from-[#C67321] to-[#DE8633] text-white',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#08121A] text-slate-100 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[#1C384D]/60 bg-gradient-to-b from-[#0E1F2C] to-[#08121A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152C3D] border border-[#1C384D] text-[#DE8633] text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4 text-[#C67321]" />
              <span>{t.concessionaires.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-tight mb-6">
              {t.concessionaires.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10">
              {t.concessionaires.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-white bg-gradient-to-r from-[#C67321] to-[#DE8633] hover:from-[#B5671B] hover:to-[#CF7723] rounded-xl shadow-xl transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                <span>{t.concessionaires.calcCta}</span>
              </button>

              <button
                onClick={onOpenAuth}
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-[#0E1F2C] hover:bg-[#152C3D] border border-[#1C384D] rounded-xl transition-all cursor-pointer"
              >
                <span>{t.concessionaires.btnRegister}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Dot Certification Section */}
      <section className="py-20 bg-[#08121A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#07526E]/20 border border-[#07526E]/40 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
              {t.concessionaires.blueDotBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase mb-4">
              {t.concessionaires.blueDotTitle}
            </h2>
            <p className="text-slate-300 text-base font-light">
              {t.concessionaires.blueDotSubtitle}
            </p>
          </div>

          {/* 4 Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl bg-[#0E1F2C] border-2 ${tier.color} p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {tier.level}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase ${tier.badgeBg}`}>
                      {tier.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-display text-white mb-2">
                    {tier.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Tiempo estimado: {tier.time}</span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed mb-6 font-light">
                    {tier.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#1C384D]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Beneficios Acreditados:
                    </span>
                    {tier.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenCalculator}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#152C3D] hover:bg-[#1E3E54] text-white border border-[#1C384D] transition-colors cursor-pointer"
                  >
                    Simular Requisitos
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Why Blue Dot Matters Callout */}
          <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#07526E]/30 via-[#0E2333] to-[#0A1620] border border-[#1C384D] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold font-display text-white mb-3">
                {t.concessionaires.blueDotImportanceTitle}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-light">
                {t.concessionaires.blueDotImportanceText}{' '}
                <strong className="text-amber-400 font-bold">{t.concessionaires.blueDotImportanceStat}</strong>{' '}
                {t.concessionaires.blueDotImportanceEnd}
              </p>
            </div>

            <button
              onClick={onNavigateToContact}
              className="px-6 py-3.5 rounded-xl bg-[#C67321] hover:bg-[#DE8633] text-white font-bold text-sm transition-all shadow-md cursor-pointer shrink-0"
            >
              Contactar Asesor Blue Dot
            </button>
          </div>
        </div>
      </section>

      {/* Regulatory Calendar Section */}
      <section className="py-20 bg-[#0B151E] border-t border-[#1C384D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C67321]/20 border border-[#C67321]/40 text-[#DE8633] text-xs font-bold uppercase tracking-widest mb-3">
              {t.concessionaires.calendarBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white uppercase mb-4">
              {t.concessionaires.calendarTitle}
            </h2>
            <p className="text-slate-300 text-base font-light">
              {t.concessionaires.calendarSubtitle}
            </p>
          </div>

          {/* Calendar Milestones Cards */}
          <div className="space-y-4 mb-16">
            {REGULATORY_CALENDAR.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMilestone(selectedMilestone === item.id ? null : item.id)}
                className={`p-6 rounded-2xl bg-[#0E1F2C] border transition-all cursor-pointer ${
                  selectedMilestone === item.id
                    ? 'border-[#C67321] shadow-xl shadow-orange-950/20 bg-[#102434]'
                    : 'border-[#1C384D] hover:border-slate-500'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="px-4 py-2.5 rounded-xl bg-[#07526E]/40 border border-[#07526E]/60 text-cyan-300 font-mono font-bold text-sm tracking-wider text-center shrink-0">
                      {item.months}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span className="text-[#DE8633] font-medium">{item.authority}</span>
                        <span>•</span>
                        <span>{item.legalBasis}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase ${
                        item.criticality === 'urgente'
                          ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {item.criticality}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#1C384D]/60 text-slate-300 text-sm font-light">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="rounded-3xl bg-gradient-to-r from-[#07526E] to-[#0A3A4D] p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase mb-3">
              {t.concessionaires.ctaRegisterTitle}
            </h3>
            <p className="text-slate-200 text-base max-w-xl mx-auto mb-8 font-light">
              {t.concessionaires.ctaRegisterSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenAuth}
                className="px-7 py-3.5 rounded-xl bg-[#C67321] hover:bg-[#DE8633] text-white font-bold text-sm transition-all shadow-lg cursor-pointer"
              >
                {t.concessionaires.btnRegister}
              </button>
              <button
                onClick={onNavigateToContact}
                className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm transition-all shadow-lg cursor-pointer"
              >
                {t.concessionaires.btnAdvisor}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Concession FAQs Accordion */}
      <section className="py-20 bg-[#08121A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white uppercase">
              Preguntas Frecuentes para Concesionarios
            </h3>
          </div>

          <div className="space-y-3">
            {concessionFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              const question = currentLang === 'es' ? faq.questionEs : faq.questionEn;
              const answer = currentLang === 'es' ? faq.answerEs : faq.answerEn;

              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-[#0E1F2C] border border-[#1C384D] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between text-base font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>{question}</span>
                    <span className="text-[#DE8633] font-mono text-xl ml-4">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-[#1C384D]/40 font-light">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
