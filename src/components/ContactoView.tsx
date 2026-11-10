import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  User, 
  Building, 
  HelpCircle,
  ExternalLink,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations.ts';
import { FAQS_DATA } from '../data/faqs.ts';
import { SOCIAL_LINKS } from '../data/social.ts';

interface ContactoViewProps {
  currentLang: Language;
}

export const ContactoView: React.FC<ContactoViewProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    perfil: 'concesionario',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');
  const [sentSummary, setSentSummary] = useState<null | {
    nombre: string;
    empresa: string;
    correo: string;
    telefono: string;
    perfilLabel: string;
    mensaje: string;
  }>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS_DATA[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const profileObj = profileOptions.find((p) => p.id === formData.perfil);
    const profileLabel = profileObj ? `${profileObj.role} - ${profileObj.label}` : formData.perfil;

    const messageLines = currentLang === 'es'
      ? [
          '⚡ *NUEVA CONSULTA - COSLINK GLOBAL*',
          '',
          `👤 *Nombre:* ${formData.nombre.trim()}`,
          `🏢 *Empresa:* ${formData.empresa.trim() || 'No especificada'}`,
          `✉️ *Correo:* ${formData.correo.trim()}`,
          `📱 *Teléfono:* ${formData.telefono.trim() || 'No especificado'}`,
          `🏷️ *Perfil:* ${profileLabel}`,
          '',
          '📝 *Mensaje:*',
          formData.mensaje.trim(),
          '',
          '---',
          'Enviado desde el formulario web de Coslink Global'
        ]
      : [
          '⚡ *NEW INQUIRY - COSLINK GLOBAL*',
          '',
          `👤 *Name:* ${formData.nombre.trim()}`,
          `🏢 *Company:* ${formData.empresa.trim() || 'Not specified'}`,
          `✉️ *Email:* ${formData.correo.trim()}`,
          `📱 *Phone:* ${formData.telefono.trim() || 'Not specified'}`,
          `🏷️ *Profile:* ${profileLabel}`,
          '',
          '📝 *Message:*',
          formData.mensaje.trim(),
          '',
          '---',
          'Sent from Coslink Global website'
        ];

    const rawMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/${SOCIAL_LINKS.whatsappRawPhone}?text=${encodeURIComponent(rawMessage)}`;

    setLastWhatsappUrl(waUrl);
    setSentSummary({
      nombre: formData.nombre.trim(),
      empresa: formData.empresa.trim(),
      correo: formData.correo.trim(),
      telefono: formData.telefono.trim(),
      perfilLabel: profileLabel,
      mensaje: formData.mensaje.trim(),
    });

    // Open WhatsApp in a new tab without window.open
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const generalFaqs = FAQS_DATA.filter((f) => f.category === 'general' || f.category === 'seguridad');

  const profileOptions = [
    { id: 'concesionario', label: t.contact.profileConcessionaire, role: 'Titular' },
    { id: 'proyectista', label: t.contact.profileProjector, role: 'Desarrollador' },
    { id: 'inversionista', label: t.contact.profileInvestor, role: 'Capital' },
    { id: 'proveedor', label: t.contact.profileProvider, role: 'Servicios' },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#08121A] text-slate-100 min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0E1F2C] to-[#08121A] border-b border-[#1C384D]/60 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152C3D] border border-[#1C384D] text-[#DE8633] text-xs font-bold uppercase tracking-widest mb-6">
            <span>{t.contact.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight mb-4">
            {t.contact.title}
          </h1>

          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 bg-[#08121A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct contact info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                  {t.contact.infoTitle}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-10 font-light">
                  {t.contact.infoDesc}
                </p>

                <div className="space-y-6 mb-8">
                  {/* WhatsApp Direct Link */}
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[#0E1F2C] border border-[#1C384D] hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-400">
                        {t.contact.whatsappLabel}
                      </div>
                      <div className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        wa.link/71ruf0 (+52 662 473 8673)
                      </div>
                      <div className="text-xs text-emerald-400/90 mt-0.5">
                        Haz clic aquí para chatear directamente en WhatsApp
                      </div>
                    </div>
                  </a>

                  {/* Sede */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0E1F2C] border border-[#1C384D]">
                    <div className="w-12 h-12 rounded-xl bg-[#07526E]/40 border border-[#07526E]/60 flex items-center justify-center text-cyan-400 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-400">
                        {t.contact.locationLabel}
                      </div>
                      <div className="text-base font-semibold text-white">
                        {t.contact.locationValue}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 font-light">
                        El centro neurálgico de la minería en el noroeste mexicano
                      </div>
                    </div>
                  </div>

                  {/* Social Networks Follow Card */}
                  <div className="p-5 rounded-2xl bg-[#0E1F2C] border border-[#1C384D]">
                    <div className="text-xs uppercase font-bold text-slate-400 mb-3">
                      {currentLang === 'es' ? 'Canales y Redes Sociales Oficiales' : 'Official Social Channels'}
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      <a
                        href={SOCIAL_LINKS.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#08121A] border border-[#1C384D] hover:border-blue-500/60 hover:text-blue-400 text-xs font-semibold text-slate-300 transition-all"
                      >
                        <Facebook className="w-4 h-4 text-blue-400" />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#08121A] border border-[#1C384D] hover:border-pink-500/60 hover:text-pink-400 text-xs font-semibold text-slate-300 transition-all"
                      >
                        <Instagram className="w-4 h-4 text-pink-400" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#08121A] border border-[#1C384D] hover:border-cyan-500/60 hover:text-cyan-400 text-xs font-semibold text-slate-300 transition-all"
                      >
                        <Linkedin className="w-4 h-4 text-cyan-400" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security note */}
              <div className="p-5 rounded-xl bg-[#10212F] border border-[#1C384D] text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-200 block mb-1">Confidencialidad Garantizada:</span>
                Toda la información proporcionada respecto a lotes o proyectos se encuentra amparada por acuerdos de no divulgación (NDA).
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#0E1F2C] border-2 border-[#1C384D] p-8 sm:p-10 shadow-2xl">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs font-semibold mb-3">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp (+52 662 473 8673)</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    {t.contact.formSubtitle}
                  </p>
                </div>

                {submitted ? (
                  <div className="py-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-4 shadow-lg shadow-emerald-950/40">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold font-display text-white mb-2">
                      {t.contact.successTitle}
                    </h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 font-light">
                      {t.contact.successMessage}
                    </p>

                    {lastWhatsappUrl && (
                      <div className="mb-6">
                        <a
                          href={lastWhatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 transition-all hover:scale-105 cursor-pointer"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>{t.contact.openWhatsAppAgain}</span>
                          <ExternalLink className="w-4 h-4 opacity-80" />
                        </a>
                      </div>
                    )}

                    {sentSummary && (
                      <div className="text-left bg-[#08121A] border border-[#1C384D] rounded-2xl p-5 mb-6 max-w-lg mx-auto text-xs text-slate-300 space-y-2">
                        <div className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center justify-between">
                          <span>Resumen de tu mensaje</span>
                          <span className="text-slate-500 font-mono">+52 662 473 8673</span>
                        </div>
                        <div><span className="text-slate-400 font-medium">Nombre:</span> {sentSummary.nombre}</div>
                        {sentSummary.empresa && <div><span className="text-slate-400 font-medium">Empresa:</span> {sentSummary.empresa}</div>}
                        <div><span className="text-slate-400 font-medium">Correo:</span> {sentSummary.correo}</div>
                        {sentSummary.telefono && <div><span className="text-slate-400 font-medium">Teléfono:</span> {sentSummary.telefono}</div>}
                        <div><span className="text-slate-400 font-medium">Perfil:</span> {sentSummary.perfilLabel}</div>
                        <div className="pt-2 border-t border-[#1C384D]/60 mt-2">
                          <span className="text-slate-400 font-medium block mb-1">Mensaje:</span>
                          <p className="text-slate-200 italic font-light bg-[#0E1F2C] p-3 rounded-lg border border-[#1C384D]/40">
                            "{sentSummary.mensaje}"
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nombre: '',
                          empresa: '',
                          correo: '',
                          telefono: '',
                          perfil: 'concesionario',
                          mensaje: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-[#152C3D] hover:bg-[#1C384D] text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          {t.contact.fieldName}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          placeholder="Tu nombre y apellidos"
                          className="w-full px-4 py-3 rounded-xl bg-[#08121A] border border-[#1C384D] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          {t.contact.fieldCompany}
                        </label>
                        <input
                          type="text"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          placeholder="Nombre de tu empresa o consorcio"
                          className="w-full px-4 py-3 rounded-xl bg-[#08121A] border border-[#1C384D] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          {t.contact.fieldEmail}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.correo}
                          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                          placeholder="correo@empresa.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#08121A] border border-[#1C384D] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          {t.contact.fieldPhone}
                        </label>
                        <input
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          placeholder="+52 (662) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-[#08121A] border border-[#1C384D] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Profile Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
                        {t.contact.fieldProfile}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {profileOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setFormData({ ...formData, perfil: opt.id })}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              formData.perfil === opt.id
                                ? 'bg-[#07526E]/40 border-emerald-400 text-white shadow-md'
                                : 'bg-[#08121A] border-[#1C384D] text-slate-300 hover:border-slate-500'
                            }`}
                          >
                            <div className="text-xs font-bold text-white mb-0.5">
                              {opt.role}
                            </div>
                            <div className="text-[11px] text-slate-400 font-light">
                              {opt.label}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        {t.contact.fieldMessage}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        placeholder="Cuéntanos brevemente sobre tu concesión, mineral de interés, o requerimiento de capital..."
                        className="w-full px-4 py-3 rounded-xl bg-[#08121A] border border-[#1C384D] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="space-y-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>{t.contact.submitting}</span>
                          </>
                        ) : (
                          <>
                            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                            <span>{t.contact.btnSubmit}</span>
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-light text-center px-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                        <span>{t.contact.formNoteWhatsApp}</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General FAQs Accordion Section */}
      <section id="faqs" className="py-20 bg-[#0B151E] border-t border-[#1C384D]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white uppercase mb-4">
              {t.contact.faqsTitle}
            </h2>
            <p className="text-slate-400 text-sm">
              Respuestas a las preguntas habituales sobre la operación, seguridad y modelo de Coslink.
            </p>
          </div>

          <div className="space-y-3 mb-14">
            {generalFaqs.map((faq) => {
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

          <div className="text-center p-6 rounded-2xl bg-[#0E1F2C] border border-[#1C384D]">
            <span className="text-slate-300 text-sm">{t.contact.faqsMore} </span>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DE8633] hover:underline font-bold text-sm inline-flex items-center gap-1.5 ml-1"
            >
              <span>{t.contact.faqsLink}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
