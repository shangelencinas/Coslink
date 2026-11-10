import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Scale,
  Leaf
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface NosotrosViewProps {
  currentLang: Language;
  onNavigateToContact: () => void;
  onOpenAuth: () => void;
}

export const NosotrosView: React.FC<NosotrosViewProps> = ({
  currentLang,
  onNavigateToContact,
  onOpenAuth,
}) => {
  const t = TRANSLATIONS[currentLang];

  const values = [
    {
      title: 'Transparencia',
      desc: 'Información fidedigna, verificada y auditada en cada etapa de la vinculación comercial y geológica.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
    },
    {
      title: 'Rigor Técnico',
      desc: 'Evaluación y dictámenes realizados por especialistas con décadas de experiencia técnica en el subsuelo.',
      icon: Compass,
      color: 'text-[#DE8633]',
    },
    {
      title: 'Confianza',
      desc: 'Construimos relaciones duraderas entre concesionarios e inversores basadas en datos objetivos y verificables.',
      icon: Users,
      color: 'text-amber-400',
    },
    {
      title: 'Profesionalismo',
      desc: 'Impulsamos prácticas estructuradas y normativas que profesionalizan la industria y reducen el riesgo.',
      icon: Scale,
      color: 'text-blue-400',
    },
    {
      title: 'Responsabilidad',
      desc: 'Fomentamos el desarrollo minero sostenible con criterios ESG, respeto a comunidades y normatividad ambiental.',
      icon: Leaf,
      color: 'text-emerald-400',
    },
  ];

  const objectives = [
    {
      num: '01',
      title: 'Facilitar el acceso a oportunidades de inversión minera',
      desc: 'Conectar proyectos mineros con inversionistas calificados, proporcionando herramientas avanzadas para identificar y analizar oportunidades viables.',
    },
    {
      num: '02',
      title: 'Reducir la incertidumbre y los riesgos de inversión',
      desc: 'Proporcionar información técnica, legal y estratégica certificada que permita a los inversores tomar decisiones con certeza y solidez.',
    },
    {
      num: '03',
      title: 'Optimizar el proceso de búsqueda y vinculación',
      desc: 'Agilizar la identificación de oportunidades y el contacto entre las partes, reduciendo significativamente los costos y tiempos de transacción.',
    },
    {
      num: '04',
      title: 'Promover la transparencia en la información de proyectos',
      desc: 'Fomentar el uso de información auditada que permita evaluar activos mineros con objetividad, evitando fraudes y asimetrías de mercado.',
    },
    {
      num: '05',
      title: 'Impulsar el desarrollo responsable de la minería',
      desc: 'Promover proyectos con bases técnicas sólidas, cumplimiento legal irrestricto y consideración prioritaria de los aspectos sociales y ambientales.',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#08121A] text-slate-100 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0E1F2C] to-[#08121A] border-b border-[#1C384D]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152C3D] border border-[#1C384D] text-[#DE8633] text-xs font-bold uppercase tracking-widest mb-6">
              <span>{t.about.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-tight mb-6">
              {t.about.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#08121A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white uppercase mb-4">
              {t.about.valuesTitle}
            </h2>
            <p className="text-slate-400 text-sm">
              Pilares que guían cada evaluación geológica y vinculación de capital en Coslink.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0E1F2C] border border-[#1C384D] p-6 hover:border-[#DE8633]/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#152C3D] border border-[#1C384D] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${val.color}`} />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Field Photography Gallery */}
      <section className="py-16 bg-[#0B151E] border-y border-[#1C384D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1: Field team */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1C384D] group shadow-xl">
              <img
                src="./images/team-geophysics.jpg"
                alt="Equipo realizando trabajo geofísico en campo"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08121A] via-[#08121A]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase font-bold text-[#DE8633] tracking-wider block mb-1">
                  En Campo
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {t.about.teamFieldTitle}
                </h3>
                <p className="text-slate-300 text-xs mt-1 font-light">
                  Levantamientos geofísicos, muestreo geoquímico y cartografía geológica in situ.
                </p>
              </div>
            </div>

            {/* Image 2: Industry Presence */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1C384D] group shadow-xl">
              <img
                src="./images/conference-pdac.jpg"
                alt="Coslink presente en foros y convenciones de la industria minera"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08121A] via-[#08121A]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider block mb-1">
                  Relación Institucional
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {t.about.industryPresenceTitle}
                </h3>
                <p className="text-slate-300 text-xs mt-1 font-light">
                  Representación activa ante inversionistas calificados en PDAC Toronto y México.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COSMIN Brazo Técnico Section */}
      <section className="py-24 bg-[#08121A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0E1F2C] via-[#0B1A24] to-[#07131B] border-2 border-[#1C384D] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left Column: Technical Description */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#07526E]/40 border border-[#07526E]/70 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
                  {t.about.cosminBadge}
                </div>

                <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase mb-6 leading-tight">
                  {t.about.cosminTitle}
                </h2>

                <p className="text-slate-200 text-base leading-relaxed font-light mb-8">
                  {t.about.cosminDesc}
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    'Análisis geológico y evaluación exhaustiva del potencial mineral del activo',
                    'Verificación legal del título de concesión y estado administrativo ante la DGM',
                    'Auditoría de cumplimiento regulatorio, comprobación de obras y pagos vigentes',
                    'Asignación objetiva del nivel de certificación Blue Dot',
                    'Generación del informe técnico estructurado para presentación ante fondos',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: COSMIN Seal Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#08121A] border border-[#1C384D] p-8 text-center shadow-xl">
                  <div className="mb-6 flex justify-center">
                    <img
                      src="./images/logoCOSMIN_white.png"
                      alt="COSMIN - Centro Operativo de Servicios Mineros"
                      className="h-16 w-auto object-contain filter drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-1">
                    {t.about.cosminDivTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mb-8 font-light">
                    {t.about.cosminDivSubtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-[#0E1F2C] border border-[#1C384D]">
                      <div className="text-2xl font-black text-amber-400">+120</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{t.about.statConcessions}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0E1F2C] border border-[#1C384D]">
                      <div className="text-2xl font-black text-cyan-300">15–45</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{t.about.statDays}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0E1F2C] border border-[#1C384D]">
                      <div className="text-2xl font-black text-white">3</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{t.about.statDisciplines}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0E1F2C] border border-[#1C384D]">
                      <div className="text-2xl font-black text-emerald-400">4</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{t.about.statLevels}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section className="py-20 bg-[#0B151E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C67321]/20 border border-[#C67321]/40 text-[#DE8633] text-xs font-bold uppercase tracking-widest mb-3">
              {t.about.objectivesBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white uppercase mb-3">
              {t.about.objectivesTitle}
            </h2>
            <p className="text-slate-300 text-base font-light">
              {t.about.objectivesSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-[#0E1F2C] border border-[#1C384D] hover:border-[#DE8633]/60 transition-all flex flex-col sm:flex-row items-start gap-6 group"
              >
                <div className="text-3xl font-black font-display text-[#DE8633] shrink-0">
                  {obj.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-16 text-center">
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C67321] hover:bg-[#DE8633] text-white font-bold text-sm transition-all shadow-xl cursor-pointer"
            >
              <span>Unirme al Ecosistema Coslink</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
