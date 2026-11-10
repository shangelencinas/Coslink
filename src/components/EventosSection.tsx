import React, { useState } from 'react';
import { Calendar, Bell, Check, Sparkles, MapPin } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';

interface EventosSectionProps {
  currentLang: Language;
}

export const EventosSection: React.FC<EventosSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-24 bg-[#08121A] relative border-t border-[#1C384D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#07526E]/20 border border-[#07526E]/40 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
              Networking & Summits
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white uppercase">
              {t.events.title}
            </h2>
          </div>

          <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
            {t.events.badgeSoon}
          </span>
        </div>

        {/* Event Card / Showcase */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0E1F2C] to-[#0A1620] border border-[#1C384D] p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#DE8633] mb-4">
              <Calendar className="w-4 h-4 text-[#DE8633]" />
              <span>Foros de Inversión y Vinculación Minera</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
              {t.events.emptyText}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
              Participamos activamente en congresos de la industria como PDAC (Toronto), Convención Internacional de Minería (Acapulco) y Simposios de Sonora. Suscríbete para recibir invitaciones exclusivas a nuestras rondas privadas de presentación de proyectos con capital calificado.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-semibold">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>¡Gracias! Te avisaremos con anticipación de los próximos eventos.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.correo@empresa.com"
                  required
                  className="px-4 py-3 rounded-xl bg-[#08121A] border border-[#1C384D] text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-[#C67321] transition-colors flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#C67321] hover:bg-[#DE8633] text-white font-bold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notificarme</span>
                </button>
              </form>
            )}
          </div>

          <div className="hidden lg:block absolute -right-12 -bottom-12 w-80 h-80 rounded-full bg-[#07526E]/10 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
