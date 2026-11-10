/**
 * Mexican Mining Regulatory Dates & Compliance Calendar
 * Based on the Ley Minera and Ley Federal de Derechos
 */

export interface ComplianceMilestone {
  id: string;
  months: string;
  title: string;
  authority: string;
  legalBasis: string;
  description: string;
  frequency: 'semestral' | 'anual';
  criticality: 'alta' | 'media' | 'urgente';
}

export const REGULATORY_CALENDAR: ComplianceMilestone[] = [
  {
    id: 'derechos-mineros',
    months: 'Ene / Jul',
    title: 'Pago de derechos sobre minería',
    authority: 'Secretaría de Economía / SAT',
    legalBasis: 'Art. 263 de la Ley Federal de Derechos',
    description: 'Pago semestral obligatorio por hectárea concesionada según la antigüedad del lote minero para mantener vigencia.',
    frequency: 'semestral',
    criticality: 'urgente',
  },
  {
    id: 'informes-tecnicos',
    months: 'Ene / Feb',
    title: 'Presentación de informes técnicos de obras',
    authority: 'Dirección General de Minas (DGM)',
    legalBasis: 'Art. 28 de la Ley Minera y Reglamento',
    description: 'Reporte técnico pormenorizado de trabajos de exploración geológica, geofísica o geoquímica realizados en el ejercicio anterior.',
    frequency: 'anual',
    criticality: 'alta',
  },
  {
    id: 'informe-estadistico',
    months: 'Ene / Feb',
    title: 'Informe estadístico de producción y beneficio',
    authority: 'Dirección General de Minas (DGM)',
    legalBasis: 'Reglamento de la Ley Minera',
    description: 'Declaración estadística obligatoria respecto al beneficio de minerales, sustancias concesibles, leyes y volúmenes obtenidos.',
    frequency: 'anual',
    criticality: 'alta',
  },
  {
    id: 'derechos-especiales',
    months: 'Mar',
    title: 'Pago de derechos especiales sobre minería',
    authority: 'Servicio de Administración Tributaria (SAT)',
    legalBasis: 'Art. 268 y 270 de la Ley Federal de Derechos',
    description: 'Entero del derecho especial (7.5% sobre utilidad antes de deducciones financieras) y derecho extraordinario sobre metales preciosos.',
    frequency: 'anual',
    criticality: 'urgente',
  },
  {
    id: 'comprobacion-obras',
    months: 'May',
    title: 'Comprobación de obras y trabajos de exploración / explotación',
    authority: 'Dirección General de Minas (DGM)',
    legalBasis: 'Art. 29 de la Ley Minera',
    description: 'Acreditación formal del monto mínimo de inversión o facturación en el lote mediante perito minero registrado.',
    frequency: 'anual',
    criticality: 'urgente',
  },
];

export function getUpcomingMilestones(currentMonthIndex: number): ComplianceMilestone[] {
  // Returns milestones sorted by proximity to the current month (0-indexed: Jan=0, Feb=1, etc.)
  return [...REGULATORY_CALENDAR].sort((a, b) => {
    const parseMonth = (m: string) => {
      if (m.includes('Ene')) return 0;
      if (m.includes('Mar')) return 2;
      if (m.includes('May')) return 4;
      if (m.includes('Jul')) return 6;
      return 11;
    };
    const diffA = (parseMonth(a.months) - currentMonthIndex + 12) % 12;
    const diffB = (parseMonth(b.months) - currentMonthIndex + 12) % 12;
    return diffA - diffB;
  });
}
