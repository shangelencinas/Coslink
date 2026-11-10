import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Sparkles, FileCheck, Layers } from 'lucide-react';
import { evaluateBlueDotStatus, ConcessionInput } from '../utils/bluedot.ts';
import { Language } from '../data/translations.ts';

interface BlueDotCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onScheduleAudit: () => void;
}

export const BlueDotCalculatorModal: React.FC<BlueDotCalculatorModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onScheduleAudit,
}) => {
  if (!isOpen) return null;

  const [input, setInput] = useState<ConcessionInput>({
    concessionName: 'Mina La Esperanza',
    holderName: 'Grupo Explorador del Norte',
    titleNumber: '243891',
    surfaceHectares: 450,
    mineralType: 'metallic',
    hasInitialDocumentation: true,
    hasActiveTitleDGM: true,
    hasCertifiedGeologicalStudy: false,
    hasLegalAuditClearance: false,
    hasFinancialModel: false,
    hasDataRoomReady: false,
    hasEnvironmentalClearance: false,
    hasThirdPartyValuation: false,
  });

  const result = evaluateBlueDotStatus(input);

  const toggleCheck = (key: keyof ConcessionInput) => {
    setInput((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#08121A] border-2 border-[#1C384D] rounded-3xl shadow-2xl text-slate-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0E1F2C] border-b border-[#1C384D]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-700/60 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Evaluador del Sistema Blue Dot
              </h3>
              <p className="text-xs text-slate-400">
                Auditoría preliminar de madurez geológica y bancabilidad
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#152C3D] rounded-xl transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 2 Columns */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-h-[82vh] overflow-y-auto">
          {/* Left: Concession details & checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#DE8633] mb-3">
                1. Datos de la Concesión
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Nombre del lote / concesión
                  </label>
                  <input
                    type="text"
                    value={input.concessionName}
                    onChange={(e) => setInput({ ...input, concessionName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1F2C] border border-[#1C384D] text-sm text-white focus:outline-none focus:border-[#C67321]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Superficie (Hectáreas)
                  </label>
                  <input
                    type="number"
                    value={input.surfaceHectares}
                    onChange={(e) => setInput({ ...input, surfaceHectares: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1F2C] border border-[#1C384D] text-sm text-white focus:outline-none focus:border-[#C67321]"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#DE8633] mb-3">
                2. Checklist de Validación y Cumplimiento
              </h4>
              <p className="text-xs text-slate-400 mb-3 font-light">
                Marca los elementos técnicos y legales que tu concesión tiene disponibles actualmente:
              </p>

              <div className="space-y-2.5">
                {[
                  {
                    key: 'hasInitialDocumentation',
                    label: 'Documentación inicial y cédula de concesión',
                    weight: 'Nivel 1 (Básico)',
                  },
                  {
                    key: 'hasActiveTitleDGM',
                    label: 'Título vigente verificado ante la DGM',
                    weight: 'Nivel 2 (Técnico)',
                  },
                  {
                    key: 'hasCertifiedGeologicalStudy',
                    label: 'Estudio geológico previo (muestreo, ensayes certificados)',
                    weight: 'Nivel 2 (Técnico)',
                  },
                  {
                    key: 'hasLegalAuditClearance',
                    label: 'Auditoría legal de gravámenes, contratos y pagos al corriente',
                    weight: 'Nivel 2 (Técnico)',
                  },
                  {
                    key: 'hasFinancialModel',
                    label: 'Modelo económico y estructuración de proyecto de inversión',
                    weight: 'Nivel 3 (Inversión)',
                  },
                  {
                    key: 'hasDataRoomReady',
                    label: 'Data Room confidencial organizado con NDA',
                    weight: 'Nivel 3 (Inversión)',
                  },
                  {
                    key: 'hasEnvironmentalClearance',
                    label: 'Diagnóstico o autorización ambiental (MIA / SEMARNAT)',
                    weight: 'Nivel 4 (Blue Dot)',
                  },
                  {
                    key: 'hasThirdPartyValuation',
                    label: 'Estándar técnico internacional (NI 43-101 / JORC o perito DGM)',
                    weight: 'Nivel 4 (Blue Dot)',
                  },
                ].map((item) => {
                  const isChecked = !!input[item.key as keyof ConcessionInput];
                  return (
                    <label
                      key={item.key}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#0E1F2C] border-cyan-500/60 text-white'
                          : 'bg-[#0E1F2C]/40 border-[#1C384D] text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCheck(item.key as keyof ConcessionInput)}
                        className="mt-1 w-4 h-4 accent-[#C67321] rounded"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-medium text-slate-200">
                          {item.label}
                        </div>
                        <div className="text-[10px] text-cyan-400/80 font-mono mt-0.5">
                          {item.weight}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Live Result Card */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0E1F2C] border-2 border-cyan-600/40 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Resultado Preliminar
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-[#C67321] text-white">
                  {result.badgeTag}
                </span>
              </div>

              <h4 className="text-2xl font-black font-display text-white mb-2">
                {result.levelName}
              </h4>

              {/* Score bar */}
              <div className="mb-5">
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-400">Madurez Técnica:</span>
                  <span className="text-cyan-300 font-mono">{result.maturityScore}% / 100%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#08121A] border border-[#1C384D] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#07526E] via-cyan-500 to-[#DE8633] transition-all duration-500 rounded-full"
                    style={{ width: `${result.maturityScore}%` }}
                  />
                </div>
              </div>

              {/* Unlocked Benefits */}
              <div className="space-y-1.5 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DE8633] block">
                  Beneficios habilitados:
                </span>
                {result.unlockedBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Missing Checklist Items */}
              {result.pendingChecklist.length > 0 && (
                <div className="pt-3 border-t border-[#1C384D]">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1.5">
                    Para subir al siguiente nivel:
                  </span>
                  <div className="space-y-1 text-xs text-slate-400">
                    {result.pendingChecklist.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action inside modal */}
            <button
              onClick={() => {
                onClose();
                onScheduleAudit();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C67321] to-[#DE8633] hover:from-[#B5671B] hover:to-[#CF7723] text-white font-bold text-xs uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
            >
              <span>Solicitar Certificación Formal con COSMIN</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
