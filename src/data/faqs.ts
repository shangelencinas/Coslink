export interface FAQItem {
  id: string;
  questionEs: string;
  questionEn: string;
  answerEs: string;
  answerEn: string;
  category: 'general' | 'concesiones' | 'seguridad' | 'bluedot';
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'lanzamiento',
    category: 'general',
    questionEs: '¿Cuándo se lanza la plataforma?',
    questionEn: 'When is the platform launching?',
    answerEs: 'Coslink se encuentra actualmente en fase de registro y validación técnica de activos. El acceso a las rondas de matchmaking y Data Rooms está disponible para usuarios con invitación y concesionarios inscritos en el programa temprano.',
    answerEn: 'Coslink is currently onboarding concessions into technical validation. Matchmaking rounds and confidential Data Rooms are available for invited capital partners and early-registered concessionaires.',
  },
  {
    id: 'que-es',
    category: 'general',
    questionEs: '¿Qué es Coslink?',
    questionEn: 'What is Coslink?',
    answerEs: 'Coslink es el ecosistema digital donde se conecta la minería. Actúa como el puente estructurado entre titulares de concesiones mineras, inversionistas de capital inteligente y proveedores especializados, respaldado por debida diligencia técnica y legal.',
    answerEn: 'Coslink is the premier digital ecosystem where mining connects. We serve as the structured bridge uniting mining concession holders, smart capital investors, and specialized suppliers, supported by certified technical and legal due diligence.',
  },
  {
    id: 'seguridad-datos',
    category: 'seguridad',
    questionEs: '¿Cómo cuida Coslink la información?',
    questionEn: 'How does Coslink safeguard sensitive data?',
    answerEs: 'Toda la documentación técnica, legal y financiera se almacena en bóvedas digitales cifradas bajo acuerdos de estricta confidencialidad (NDA). El concesionario mantiene el control absoluto sobre qué información se comparte y con qué inversionistas.',
    answerEn: 'All technical, legal, and geological data is secured within encrypted digital data rooms under strict non-disclosure agreements (NDAs). Concession owners retain complete discretion over which investors receive access.',
  },
  {
    id: 'quien-puede-usar',
    category: 'general',
    questionEs: '¿Quién puede usar Coslink?',
    questionEn: 'Who can join Coslink?',
    answerEs: 'La plataforma está diseñada para cuatro perfiles clave del sector: Concesionarios y proyectistas mineros, Inversionistas y fondos de capital privado, Empresas de servicios y tecnología minera, y Expertos consultores geológicos.',
    answerEn: 'The ecosystem is tailored for four core stakeholders: Mining concession owners and project developers, Institutional and private equity investors, Specialized mining service and equipment vendors, and Certified geoscientific consultants.',
  },
  {
    id: 'tipo-concesiones',
    category: 'concesiones',
    questionEs: '¿Qué tipo de concesiones acepta la plataforma?',
    questionEn: 'What types of concessions does the platform accept?',
    answerEs: 'Aceptamos concesiones mineras de exploración y explotación en México y Latinoamérica, con título o trámite comprobable ante las autoridades mineras correspondientes (como la DGM), tanto de minerales metálicos como no metálicos.',
    answerEn: 'We accept metallic and non-metallic exploration and exploitation concessions across Mexico and Latin America holding verifiable standing with competent authorities (such as the Mexican General Directorate of Mines).',
  },
  {
    id: 'tiempo-bluedot',
    category: 'bluedot',
    questionEs: '¿Cuánto tiempo toma obtener el nivel Blue Dot?',
    questionEn: 'How long does it take to obtain Blue Dot certification?',
    answerEs: 'El proceso de validación técnica con COSMIN toma entre 15 y 45 días, dependiendo del volumen de información disponible, muestreos previos y el nivel de certificación solicitado.',
    answerEn: 'The technical validation process conducted by COSMIN typically takes between 15 and 45 days, depending on prior drill assays, historical records, and the target certification tier.',
  },
  {
    id: 'costo-inicial',
    category: 'concesiones',
    questionEs: '¿Tiene costo el registro inicial?',
    questionEn: 'Does initial registration have a cost?',
    answerEs: 'El registro inicial y diagnóstico básico de tu concesión son 100% gratuitos. Los servicios de auditoría geológica exhaustiva, estructuración de Data Room y presentación a fondos aplican bajo esquemas de éxito o planes según el nivel Blue Dot.',
    answerEn: 'Initial onboarding and basic diagnostic evaluation are completely free. Comprehensive geological audits, confidential Data Room setups, and institutional fund showcases are offered under structured success plans.',
  },
  {
    id: 'cumplimiento-regulatorio',
    category: 'concesiones',
    questionEs: '¿La plataforma me ayuda con el cumplimiento regulatorio?',
    questionEn: 'Does the platform assist with regulatory compliance?',
    answerEs: 'Sí. El sistema de calendario inteligente de Coslink notifica con antelación las fechas de pago de derechos sobre minería, entrega de informes de comprobación de obras y declaraciones estadísticas para blindar la vigencia del título.',
    answerEn: 'Yes. Coslink’s automated compliance calendar alerts you ahead of statutory deadlines for mining royalty payments, work proof filings, and statistical reports to preserve title validity.',
  },
];
