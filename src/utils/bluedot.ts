/**
 * Coslink Blue Dot Certification & Validation Engine
 * Implements the 4-level qualification matrix for mining concessions.
 */

export type BlueDotLevel = 1 | 2 | 3 | 4;

export interface ConcessionInput {
  titleNumber?: string;
  concessionName: string;
  holderName: string;
  surfaceHectares: number;
  mineralType: 'metallic' | 'non-metallic' | 'lithium' | 'polymetallic';
  hasActiveTitleDGM: boolean;
  hasInitialDocumentation: boolean;
  hasCertifiedGeologicalStudy: boolean;
  hasLegalAuditClearance: boolean;
  hasFinancialModel: boolean;
  hasDataRoomReady: boolean;
  hasEnvironmentalClearance: boolean; // MIA o informe preventivo
  hasThirdPartyValuation: boolean;
}

export interface BlueDotResult {
  level: BlueDotLevel;
  levelName: string;
  badgeTag: string;
  maturityScore: number; // 0 to 100
  estimatedValidationDays: string;
  unlockedBenefits: string[];
  pendingChecklist: string[];
  recommendations: string[];
}

export function evaluateBlueDotStatus(input: ConcessionInput): BlueDotResult {
  let score = 0;
  const pending: string[] = [];

  // Level 1 requirements: Basic registration
  if (input.concessionName.trim().length > 0 && input.hasInitialDocumentation) {
    score += 25;
  } else {
    pending.push('Carga de documentación inicial y cédula de concesión');
  }

  // Level 2 requirements: Technical & Legal clearance
  if (input.hasActiveTitleDGM) {
    score += 15;
  } else {
    pending.push('Verificación de título vigente ante la Dirección General de Minas (DGM)');
  }

  if (input.hasCertifiedGeologicalStudy) {
    score += 15;
  } else {
    pending.push('Estudio geológico certificado (muestreo, ensayes y cartografía)');
  }

  if (input.hasLegalAuditClearance) {
    score += 10;
  } else {
    pending.push('Auditoría legal de gravámenes, contratos y obligaciones al corriente');
  }

  // Level 3 requirements: Financial structuring
  if (input.hasFinancialModel) {
    score += 15;
  } else {
    pending.push('Estructuración de modelo financiero y tesis de inversión');
  }

  if (input.hasDataRoomReady) {
    score += 10;
  } else {
    pending.push('Data Room digital confidencial listo para debida diligencia');
  }

  // Level 4 requirements: Premium Blue Dot
  if (input.hasEnvironmentalClearance) {
    score += 5;
  } else {
    pending.push('Diagnóstico o autorización en materia de impacto ambiental (MIA/SEMARNAT)');
  }

  if (input.hasThirdPartyValuation) {
    score += 5;
  } else {
    pending.push('Dictamen técnico independiente o estándar internacional (NI 43-101 / JORC)');
  }

  let level: BlueDotLevel = 1;
  let levelName = 'Nivel 1 — Registrado';
  let badgeTag = 'Básico';
  let estimatedDays = '15 días';

  if (score >= 90) {
    level = 4;
    levelName = 'Nivel 4 — Blue Dot';
    badgeTag = 'Premium';
    estimatedDays = '45 días (Certificación Completa)';
  } else if (score >= 70) {
    level = 3;
    levelName = 'Nivel 3 — Estructurado';
    badgeTag = 'Inversión';
    estimatedDays = '30 días';
  } else if (score >= 40) {
    level = 2;
    levelName = 'Nivel 2 — Validado';
    badgeTag = 'Técnico';
    estimatedDays = '20 días';
  }

  const unlockedBenefits: string[] = [];
  if (level >= 1) {
    unlockedBenefits.push('Registro oficial en el directorio privado de Coslink');
    unlockedBenefits.push('Calendario automatizado de alertas regulatorias y pagos mineros');
  }
  if (level >= 2) {
    unlockedBenefits.push('Sello de validación técnica COSMIN en expediente geológico');
    unlockedBenefits.push('Informe preliminar de viabilidad geocientífica');
  }
  if (level >= 3) {
    unlockedBenefits.push('Exposición confidencial ante fondos e inversores institucionales');
    unlockedBenefits.push('Acceso a salas virtuales de negociación protegidas por NDA');
  }
  if (level >= 4) {
    unlockedBenefits.push('Máxima prioridad en algoritmos de matchmaking de capital estratégico');
    unlockedBenefits.push('Presentación directa en foros de inversión minera (PDAC, México Mining)');
    unlockedBenefits.push('Acompañamiento ejecutivo en cierre de JV, cesión o financiamiento');
  }

  const recommendations: string[] = [];
  if (level < 2) {
    recommendations.push('Inicia la revisión geológica previa con el equipo de COSMIN para subir al Nivel 2.');
  } else if (level === 2) {
    recommendations.push('Prepara tu Data Room para estructurar la oportunidad y atraer capital privado.');
  } else if (level === 3) {
    recommendations.push('Completa el dictamen ambiental y normativo para obtener el sello Blue Dot Premium.');
  } else {
    recommendations.push('Tu concesión cumple con el estándar más alto del ecosistema minero Coslink.');
  }

  return {
    level,
    levelName,
    badgeTag,
    maturityScore: Math.min(100, score),
    estimatedValidationDays: estimatedDays,
    unlockedBenefits,
    pendingChecklist: pending,
    recommendations,
  };
}
