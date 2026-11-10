export type Language = 'es' | 'en';

export interface TranslationDictionary {
  nav: {
    about: string;
    concessionaires: string;
    benefits: string;
    faqs: string;
    contact: string;
    login: string;
    demo: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  problem: {
    badge: string;
    title: string;
    intro: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    quote: string;
    ctaQuote: string;
  };
  enfoque: {
    badge: string;
    title: string;
    step1Num: string;
    step1Title: string;
    step1Desc: string;
    step2Num: string;
    step2Title: string;
    step2Desc: string;
    step3Num: string;
    step3Title: string;
    step3Desc: string;
  };
  operamos: {
    badge: string;
    title: string;
    cta: string;
    col1Num: string;
    col1Title: string;
    col1Desc: string;
    col2Num: string;
    col2Title: string;
    col2Desc: string;
    col3Num: string;
    col3Title: string;
    col3Desc: string;
  };
  vision: {
    headerTitle: string;
    headerDesc: string;
    badge: string;
    title: string;
    p1: string;
    p2: string;
    btnTalk: string;
    btnMore: string;
  };
  events: {
    title: string;
    btnMore: string;
    emptyText: string;
    badgeSoon: string;
  };
  ctaIdea: {
    title: string;
    desc: string;
    btn: string;
  };
  concessionaires: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    whyTitle: string;
    whySubtitle: string;
    calcCta: string;
    calendarBadge: string;
    calendarTitle: string;
    calendarSubtitle: string;
    blueDotBadge: string;
    blueDotTitle: string;
    blueDotSubtitle: string;
    blueDotImportanceTitle: string;
    blueDotImportanceText: string;
    blueDotImportanceStat: string;
    blueDotImportanceEnd: string;
    ctaRegisterTitle: string;
    ctaRegisterSubtitle: string;
    btnRegister: string;
    btnAdvisor: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    valuesTitle: string;
    teamFieldTitle: string;
    industryPresenceTitle: string;
    cosminBadge: string;
    cosminTitle: string;
    cosminDesc: string;
    cosminDivTitle: string;
    cosminDivSubtitle: string;
    statConcessions: string;
    statDays: string;
    statDisciplines: string;
    statLevels: string;
    objectivesBadge: string;
    objectivesTitle: string;
    objectivesSubtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    infoDesc: string;
    whatsappLabel: string;
    locationLabel: string;
    locationValue: string;
    formTitle: string;
    formSubtitle: string;
    fieldName: string;
    fieldCompany: string;
    fieldEmail: string;
    fieldPhone: string;
    fieldProfile: string;
    profileConcessionaire: string;
    profileProjector: string;
    profileInvestor: string;
    profileProvider: string;
    fieldMessage: string;
    btnSubmit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    openWhatsAppAgain: string;
    sendAnother: string;
    formNoteWhatsApp: string;
    faqsTitle: string;
    faqsMore: string;
    faqsLink: string;
  };
  footer: {
    tagline: string;
    platformCol: string;
    companyCol: string;
    resourcesCol: string;
    rights: string;
    legal: string;
    terms: string;
    privacy: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  es: {
    nav: {
      about: '¿Quiénes somos?',
      concessionaires: 'Concesionarios',
      benefits: 'Beneficios',
      faqs: 'FAQs',
      contact: 'Contacto',
      login: 'Iniciar sesión',
      demo: 'Evaluar Concesión',
    },
    hero: {
      badge: 'ECOSISTEMA MINERO GLOBAL',
      titleLine1: 'IMPULSAMOS PROYECTOS',
      titleLine2: 'MINEROS A TRAVÉS DE',
      titleLine3: 'CONEXIÓN ESTRATÉGICA.',
      subtitle: 'Conectemos la inversión con oportunidades de proyectos mineros a través de un ecosistema digital seguro y validado.',
      ctaPrimary: 'Hablemos →',
      ctaSecondary: 'Evaluar mi Concesión',
      stat1Label: 'Concesiones Validadas',
      stat1Value: '+120',
      stat2Label: 'Días por Validación Técnica',
      stat2Value: '15-45',
      stat3Label: 'Niveles de Certificación',
      stat3Value: '4 (Blue Dot)',
    },
    problem: {
      badge: 'NUESTRO ENFOQUE',
      title: 'UNA NECESIDAD CLARA EN EL SECTOR MINERO',
      intro: 'En el sector minero existen proyectos con potencial, capital interesado y capacidades técnicas disponibles. Coslink surge para facilitar ese encuentro bajo un modelo más estructurado y confiable.',
      card1Title: 'Concesionarios / Proyectistas',
      card1Desc: 'Existen concesionarios con activos mineros de alto valor que enfrentan dificultades para estructurar proyectos atractivos para la inversión o no tienen acceso a redes de capital.',
      card2Title: 'Inversionistas',
      card2Desc: 'Hay inversionistas interesados en el sector minero que carecen de experiencia y de conocimiento técnico, legal y regulatorio, lo que limita su participación.',
      card3Title: 'Proveedores',
      card3Desc: 'Existen empresas de servicios, equipos y tecnología especializadas en minería que no cuentan con canales efectivos para conectar con los proyectos y concesionarios que los necesitan.',
      quote: '"Coslink nace para cerrar esta brecha, uniendo el potencial del subsuelo con el motor del capital inteligente."',
      ctaQuote: 'Contáctanos →',
    },
    enfoque: {
      badge: 'GESTIÓN Y TRANSPARENCIA',
      title: 'UN NUEVO ENFOQUE PARA LOS NEGOCIOS EN MINERÍA',
      step1Num: '1',
      step1Title: 'Concesión Privada',
      step1Desc: 'Identificamos activos con alto potencial geológico y verificamos el título legal ante autoridades.',
      step2Num: '2',
      step2Title: 'Oportunidad Validada',
      step2Desc: 'Nuestro brazo técnico certifica la viabilidad geológica, legal y normativa del proyecto.',
      step3Num: '3',
      step3Title: 'Proyecto de Inversión',
      step3Desc: 'Estructuramos el negocio para la entrada de capital estratégico con modelos financieros rigurosos.',
    },
    operamos: {
      badge: 'COSLINK',
      title: '¿CÓMO OPERAMOS?',
      cta: 'Acceder a Coslink',
      col1Num: '01',
      col1Title: 'Gestión Privada',
      col1Desc: 'Ambiente seguro y confidencialidad para la exposición de activos estratégicos.',
      col2Num: '02',
      col2Title: 'Oportunidades privadas',
      col2Desc: 'Protección estricta de la propiedad intelectual y los datos sensibles del titular.',
      col3Num: '03',
      col3Title: 'Avance de Proyectos',
      col3Desc: 'Acompañamiento en el cierre de acuerdos, joint ventures y rondas de inversión.',
    },
    vision: {
      headerTitle: 'Conectamos la minería',
      headerDesc: 'Conectar a los actores de la industria minera internacional a través de un estándar seguro y confiable que facilite la creación de negocios.',
      badge: 'NUESTRA VISIÓN',
      title: 'En Coslink estamos construyendo una plataforma de última generación para acelerar los negocios en la minería.',
      p1: 'Conectamos concesionarios, inversionistas y proyectistas, validamos y estructuramos proyectos mineros viables, y facilitamos la creación de cadenas de suministro seguras y eficientes.',
      p2: 'Nuestro objetivo es transformar la minería en un ecosistema digital más ágil, transparente y colaborativo.',
      btnTalk: 'Hablemos →',
      btnMore: 'Saber más',
    },
    events: {
      title: 'EVENTOS ORGANIZADOS',
      btnMore: 'Conoce Más',
      emptyText: 'Estamos trabajando para traerles próximos eventos a la brevedad.',
      badgeSoon: 'PRÓXIMAMENTE',
    },
    ctaIdea: {
      title: '¡CUÉNTANOS TU IDEA!',
      desc: 'Agenda una cita con nosotros para que conozcas más sobre el proyecto y cómo podemos ayudarte a impulsar tu activo o inversión.',
      btn: 'Haz una cita',
    },
    concessionaires: {
      heroBadge: 'TITULARES Y DESARROLLADORES',
      heroTitle: 'Gestión integral para concesiones mineras',
      heroSubtitle: 'Potencia el valor de tu concesión con certificación técnica, visibilidad estratégica ante fondos y conexión directa con capital calificado.',
      whyTitle: '¿Por qué registrar tu concesión en Coslink?',
      whySubtitle: 'Estructuramos la información técnica y legal de tu activo para presentarlo con los estándares que exigen los inversionistas institucionales.',
      calcCta: 'Calcular Nivel Blue Dot de mi concesión',
      calendarBadge: 'CUMPLIMIENTO REGULATORIO EN MÉXICO',
      calendarTitle: 'Calendario de fechas clave',
      calendarSubtitle: 'Mantén la vigencia de tu concesión y evita sanciones con el monitoreo proactivo de obligaciones legales según la Ley Minera.',
      blueDotBadge: 'CERTIFICACIÓN',
      blueDotTitle: 'Sistema Blue Dot',
      blueDotSubtitle: 'Cuatro niveles de validación que acreditan la madurez técnica, legal y comercial de tu concesión ante el mercado de capital.',
      blueDotImportanceTitle: '¿Por qué importa el nivel Blue Dot?',
      blueDotImportanceText: 'Las concesiones con mayor nivel de validación reciben hasta',
      blueDotImportanceStat: '4x más contactos',
      blueDotImportanceEnd: 'de inversores calificados y acceden a rondas de capital privado exclusivas de la plataforma.',
      ctaRegisterTitle: 'Registra tu Concesión Hoy Mismo',
      ctaRegisterSubtitle: 'Da el primer paso hacia la gestión digital y valorización de tu concesión minera.',
      btnRegister: 'Iniciar sesión',
      btnAdvisor: 'Hablar con un asesor',
    },
    about: {
      badge: 'NUESTRA IDENTIDAD',
      title: 'Impulsando el futuro de la minería colaborativa',
      subtitle: 'Nacimos para transformar la vinculación entre concesionarios, técnicos e inversionistas mediante rigor científico, transparencia absoluta y tecnología.',
      valuesTitle: 'Nuestros Principios Rectores',
      teamFieldTitle: 'Nuestro equipo en campo',
      industryPresenceTitle: 'Presencia en la industria (PDAC & Convenciones)',
      cosminBadge: 'BRAZO TÉCNICO CERTIFICADO',
      cosminTitle: 'COSMIN — Validación Técnica',
      cosminDesc: 'COSMIN es el brazo técnico de Coslink: un equipo interdisciplinario de geólogos, abogados mineros e ingenieros que ejecuta el proceso de debida diligencia y certificación de concesiones en la plataforma.',
      cosminDivTitle: 'Centro Operativo de Servicios Mineros',
      cosminDivSubtitle: 'División técnica especializada de Coslink Global',
      statConcessions: 'Concesiones validadas',
      statDays: 'Días por validación',
      statDisciplines: 'Disciplinas técnicas',
      statLevels: 'Niveles Blue Dot',
      objectivesBadge: 'LO QUE NOS MUEVE',
      objectivesTitle: 'Nuestros Objetivos',
      objectivesSubtitle: 'Cinco objetivos estratégicos que definen el propósito y la dirección de nuestra plataforma.',
    },
    contact: {
      badge: 'CONTÁCTANOS',
      title: 'Hablemos de tu proyecto',
      subtitle: 'Agenda una cita con nuestro equipo y descubre cómo Coslink puede conectar tu proyecto con el capital y la red técnica que necesitas.',
      infoTitle: 'Estamos aquí para ayudarte',
      infoDesc: 'Conectamos concesionarios, inversionistas y proyectistas con confidencialidad y respaldo técnico.',
      whatsappLabel: 'WhatsApp Directo',
      locationLabel: 'Sede Principal',
      locationValue: 'Hermosillo, Sonora, México',
      formTitle: 'Envíanos un mensaje',
      formSubtitle: 'Nuestro equipo te responderá en menos de 24 horas hábiles.',
      fieldName: 'Nombre completo *',
      fieldCompany: 'Empresa u Organización',
      fieldEmail: 'Correo electrónico corporativo *',
      fieldPhone: 'Teléfono / WhatsApp',
      fieldProfile: 'Selecciona tu perfil *',
      profileConcessionaire: 'Concesionario (Titular de concesiones)',
      profileProjector: 'Proyectista (Desarrollador minero)',
      profileInvestor: 'Inversionista (Fondos o capital privado)',
      profileProvider: 'Proveedor (Servicios y tecnología minera)',
      fieldMessage: 'Mensaje o descripción del proyecto *',
      btnSubmit: 'Enviar mensaje',
      submitting: 'Preparando WhatsApp...',
      successTitle: '¡Consulta enviada a WhatsApp!',
      successMessage: 'Se abrió WhatsApp con tu mensaje formateado. Si no se abrió la aplicación automáticamente, pulsa el botón verde para continuar la conversación con nuestro equipo.',
      openWhatsAppAgain: 'Abrir en WhatsApp',
      sendAnother: 'Enviar otra consulta',
      formNoteWhatsApp: 'Tu información se formateará y enviará directamente a nuestro WhatsApp oficial para brindarte atención inmediata y confidencial.',
      faqsTitle: 'Preguntas Frecuentes',
      faqsMore: '¿Aún tienes dudas?',
      faqsLink: 'Contáctanos directamente vía WhatsApp',
    },
    footer: {
      tagline: 'Ecosistema digital seguro y validado para proyectos mineros e inversión estratégica.',
      platformCol: 'Plataforma',
      companyCol: 'Compañía',
      resourcesCol: 'Recursos',
      rights: 'Copyright © 2026 Coslink Global. Todos los derechos reservados.',
      legal: 'Aviso Legal',
      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      concessionaires: 'Concessionaires',
      benefits: 'Benefits',
      faqs: 'FAQs',
      contact: 'Contact',
      login: 'Sign In',
      demo: 'Evaluate Concession',
    },
    hero: {
      badge: 'GLOBAL MINING ECOSYSTEM',
      titleLine1: 'EMPOWERING MINING',
      titleLine2: 'PROJECTS THROUGH',
      titleLine3: 'STRATEGIC CONNECTION.',
      subtitle: 'Connecting investment with mining project opportunities through a secure, technically validated digital ecosystem.',
      ctaPrimary: 'Let’s Talk →',
      ctaSecondary: 'Evaluate Concession',
      stat1Label: 'Validated Concessions',
      stat1Value: '+120',
      stat2Label: 'Days per Technical Audit',
      stat2Value: '15-45',
      stat3Label: 'Certification Levels',
      stat3Value: '4 (Blue Dot)',
    },
    problem: {
      badge: 'OUR APPROACH',
      title: 'A CLEAR NEED IN THE MINING SECTOR',
      intro: 'In the mining industry there are high-potential assets, motivated capital, and top technical capabilities. Coslink was born to bridge these parties under a structured, trustworthy framework.',
      card1Title: 'Concessionaires / Developers',
      card1Desc: 'Concessionaires holding high-grade mineral assets often face hurdles structuring bankable investment packages or accessing private capital networks.',
      card2Title: 'Investors',
      card2Desc: 'Investors looking into mining frequently lack in-house geological, legal, and regulatory due diligence capabilities, increasing perceived risk.',
      card3Title: 'Service Providers',
      card3Desc: 'Specialized technology, drillers, and engineering providers lack efficient direct channels to reach vetted mining projects and operators.',
      quote: '"Coslink was created to close this gap, uniting subterranean potential with intelligent capital."',
      ctaQuote: 'Contact Us →',
    },
    enfoque: {
      badge: 'MANAGEMENT & TRANSPARENCY',
      title: 'A NEW STANDARD FOR MINING TRANSACTIONS',
      step1Num: '1',
      step1Title: 'Private Concession',
      step1Desc: 'We identify high-grade mineral prospects and verify legal title standing with mining authorities.',
      step2Num: '2',
      step2Title: 'Validated Opportunity',
      step2Desc: 'Our technical team certifies geological, legal, and environmental feasibility.',
      step3Num: '3',
      step3Title: 'Investment Project',
      step3Desc: 'We structure the opportunity for strategic equity, debt, or joint-venture participation.',
    },
    operamos: {
      badge: 'COSLINK',
      title: 'HOW WE OPERATE',
      cta: 'Access Coslink',
      col1Num: '01',
      col1Title: 'Private Governance',
      col1Desc: 'Secure, NDA-protected environment for showcasing high-value strategic mining assets.',
      col2Num: '02',
      col2Title: 'Proprietary Opportunities',
      col2Desc: 'Strict data safeguards for intellectual property, drill data, and concessionaire privacy.',
      col3Num: '03',
      col3Title: 'Project Acceleration',
      col3Desc: 'Dedicated guidance through deal closing, joint ventures, and funding rounds.',
    },
    vision: {
      headerTitle: 'Connecting Global Mining',
      headerDesc: 'Connecting global mining industry participants through an objective, reliable standard that streamlines transaction creation.',
      badge: 'OUR VISION',
      title: 'At Coslink we are building a next-generation platform to accelerate mining business deals.',
      p1: 'We connect concessionaires, investors, and project engineers, validate and structure viable mining assets, and establish secure supply chain links.',
      p2: 'Our mission is to evolve mining into an agile, transparent, and collaborative digital ecosystem.',
      btnTalk: 'Let’s Talk →',
      btnMore: 'Learn More',
    },
    events: {
      title: 'ORGANIZED EVENTS & SUMMITS',
      btnMore: 'Learn More',
      emptyText: 'We are preparing our upcoming mining investor showcases and webinars shortly.',
      badgeSoon: 'COMING SOON',
    },
    ctaIdea: {
      title: 'TELL US ABOUT YOUR PROJECT',
      desc: 'Book a consultation with our team to discover how Coslink can accelerate your concession valorization or investment portfolio.',
      btn: 'Schedule a Call',
    },
    concessionaires: {
      heroBadge: 'CONCESSION HOLDERS & OPERATORS',
      heroTitle: 'Comprehensive management for mining concessions',
      heroSubtitle: 'Maximize your concession’s valuation through certified technical due diligence, strategic exposure, and direct access to qualified capital.',
      whyTitle: 'Why register your concession on Coslink?',
      whySubtitle: 'We structure your asset’s technical and legal data into bankable standards demanded by international private equity and mining funds.',
      calcCta: 'Calculate My Blue Dot Status',
      calendarBadge: 'REGULATORY COMPLIANCE IN MEXICO',
      calendarTitle: 'Key Statutory Deadlines Calendar',
      calendarSubtitle: 'Maintain good standing and prevent concessions forfeiture with automated statutory monitoring under Mexican Mining Law.',
      blueDotBadge: 'CERTIFICATION',
      blueDotTitle: 'Blue Dot System',
      blueDotSubtitle: 'Four rigorous validation tiers certifying technical, legal, and commercial maturity for the capital market.',
      blueDotImportanceTitle: 'Why does Blue Dot matter?',
      blueDotImportanceText: 'Concessions with higher validation tiers receive up to',
      blueDotImportanceStat: '4x more inquiries',
      blueDotImportanceEnd: 'from institutional investors and gain access to exclusive private investment rounds.',
      ctaRegisterTitle: 'Register Your Concession Today',
      ctaRegisterSubtitle: 'Take the first step toward digitizing and valorizing your mineral asset.',
      btnRegister: 'Sign In',
      btnAdvisor: 'Speak with an Advisor',
    },
    about: {
      badge: 'OUR IDENTITY',
      title: 'Driving the future of collaborative mining',
      subtitle: 'Born to modernize the bridge between concessionaires, geoscientists, and institutional capital through technical rigor and cutting-edge technology.',
      valuesTitle: 'Our Guiding Principles',
      teamFieldTitle: 'Our technical team in the field',
      industryPresenceTitle: 'Industry presence (PDAC & Mining Conventions)',
      cosminBadge: 'CERTIFIED TECHNICAL ARM',
      cosminTitle: 'COSMIN — Technical Validation',
      cosminDesc: 'COSMIN is Coslink’s technical division: an interdisciplinary team of senior geologists, mining attorneys, and engineers executing rigorous due diligence and concession certification.',
      cosminDivTitle: 'Mining Services Operational Center',
      cosminDivSubtitle: 'Specialized Technical Division of Coslink Global',
      statConcessions: 'Validated Concessions',
      statDays: 'Days per Validation',
      statDisciplines: 'Technical Disciplines',
      statLevels: 'Blue Dot Levels',
      objectivesBadge: 'OUR PURPOSE',
      objectivesTitle: 'Strategic Objectives',
      objectivesSubtitle: 'Five pillars guiding our vision and market stewardship.',
    },
    contact: {
      badge: 'CONTACT US',
      title: 'Let’s talk about your project',
      subtitle: 'Book a consultation with our leadership team and explore how Coslink bridges your asset with verified capital and technical support.',
      infoTitle: 'We are here to support you',
      infoDesc: 'Connecting concessionaires, investors, and engineers with absolute discretion and technical precision.',
      whatsappLabel: 'Direct WhatsApp',
      locationLabel: 'Headquarters',
      locationValue: 'Hermosillo, Sonora, Mexico',
      formTitle: 'Send us a message',
      formSubtitle: 'Our technical advisory team responds within 24 business hours.',
      fieldName: 'Full Name *',
      fieldCompany: 'Company or Mining Syndicate',
      fieldEmail: 'Corporate Email *',
      fieldPhone: 'Phone / WhatsApp',
      fieldProfile: 'Select your role *',
      profileConcessionaire: 'Concessionaire (Title Holder)',
      profileProjector: 'Project Engineer / Geologist',
      profileInvestor: 'Investor (Family Office, Fund, Angel)',
      profileProvider: 'Service / Technology Provider',
      fieldMessage: 'Message or Project Summary *',
      btnSubmit: 'Send Message',
      submitting: 'Preparing WhatsApp...',
      successTitle: 'Inquiry sent to WhatsApp!',
      successMessage: 'WhatsApp has opened with your formatted message. If the app did not open automatically, click the green button below to chat with our team.',
      openWhatsAppAgain: 'Open in WhatsApp',
      sendAnother: 'Send another inquiry',
      formNoteWhatsApp: 'Your information will be structured and sent directly to our official WhatsApp desk for prompt, confidential attention.',
      faqsTitle: 'Frequently Asked Questions',
      faqsMore: 'Still have questions?',
      faqsLink: 'Contact our advisory desk via WhatsApp',
    },
    footer: {
      tagline: 'Secure, validated digital ecosystem for mining projects and strategic investment.',
      platformCol: 'Platform',
      companyCol: 'Company',
      resourcesCol: 'Resources',
      rights: 'Copyright © 2026 Coslink Global. All rights reserved.',
      legal: 'Legal Notice',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
    },
  },
};
