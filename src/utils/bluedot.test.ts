import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateBlueDotStatus, ConcessionInput } from './bluedot.ts';
import { REGULATORY_CALENDAR, getUpcomingMilestones } from './compliance.ts';

test('Blue Dot: Basic unverified concession returns Level 1', () => {
  const input: ConcessionInput = {
    concessionName: 'El Fénix Minero',
    holderName: 'Minera del Norte S.A. de C.V.',
    surfaceHectares: 250,
    mineralType: 'metallic',
    hasActiveTitleDGM: false,
    hasInitialDocumentation: true,
    hasCertifiedGeologicalStudy: false,
    hasLegalAuditClearance: false,
    hasFinancialModel: false,
    hasDataRoomReady: false,
    hasEnvironmentalClearance: false,
    hasThirdPartyValuation: false,
  };

  const result = evaluateBlueDotStatus(input);
  assert.equal(result.level, 1);
  assert.equal(result.badgeTag, 'Básico');
  assert.ok(result.pendingChecklist.length > 3);
  assert.ok(result.unlockedBenefits.length >= 2);
});

test('Blue Dot: Concession with technical validation reaches Level 2', () => {
  const input: ConcessionInput = {
    concessionName: 'La Colorada Profunda',
    holderName: 'Exploraciones Sonora',
    surfaceHectares: 850,
    mineralType: 'polymetallic',
    hasActiveTitleDGM: true,
    hasInitialDocumentation: true,
    hasCertifiedGeologicalStudy: true,
    hasLegalAuditClearance: true,
    hasFinancialModel: false,
    hasDataRoomReady: false,
    hasEnvironmentalClearance: false,
    hasThirdPartyValuation: false,
  };

  const result = evaluateBlueDotStatus(input);
  assert.equal(result.level, 2);
  assert.equal(result.badgeTag, 'Técnico');
  assert.ok(result.maturityScore >= 40);
  assert.ok(result.unlockedBenefits.some(b => b.includes('COSMIN')));
});

test('Blue Dot: Fully qualified asset achieves Level 4 Blue Dot Premium', () => {
  const input: ConcessionInput = {
    concessionName: 'San Cristóbal Gold',
    holderName: 'Consorcio Minero Sierra Alta',
    surfaceHectares: 1200,
    mineralType: 'metallic',
    hasActiveTitleDGM: true,
    hasInitialDocumentation: true,
    hasCertifiedGeologicalStudy: true,
    hasLegalAuditClearance: true,
    hasFinancialModel: true,
    hasDataRoomReady: true,
    hasEnvironmentalClearance: true,
    hasThirdPartyValuation: true,
  };

  const result = evaluateBlueDotStatus(input);
  assert.equal(result.level, 4);
  assert.equal(result.badgeTag, 'Premium');
  assert.equal(result.maturityScore, 100);
  assert.equal(result.pendingChecklist.length, 0);
  assert.ok(result.unlockedBenefits.some(b => b.includes('Máxima prioridad')));
});

test('Compliance: Calendar contains all 5 mandatory milestones under Mexican Mining Law', () => {
  assert.equal(REGULATORY_CALENDAR.length, 5);
  const titles = REGULATORY_CALENDAR.map(m => m.title.toLowerCase());
  assert.ok(titles.some(t => t.includes('pago de derechos sobre minería')));
  assert.ok(titles.some(t => t.includes('informes técnicos')));
  assert.ok(titles.some(t => t.includes('informe estadístico')));
  assert.ok(titles.some(t => t.includes('derechos especiales')));
  assert.ok(titles.some(t => t.includes('comprobación de obras')));
});

test('Compliance: Upcoming milestones sorting calculates nearest deadline correctly', () => {
  const upcomingInApril = getUpcomingMilestones(3); // April (index 3)
  // Next deadline is May (index 4 - Comprobación de obras)
  assert.equal(upcomingInApril[0].months, 'May');
});
