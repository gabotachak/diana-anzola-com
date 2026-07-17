export const profile = {
  name: "Diana Milena Anzola Tachak",
  role: "Abogada — Derecho Laboral y Seguridad Social",
  roles: [
    "Derecho Laboral",
    "Seguridad Social",
    "Derecho Constitucional",
    "Contratación Estatal",
  ],
  location: "Bogotá, Colombia",
  heroTitle: "Defiendo tus derechos laborales, pensionales y de familia",
  bioClient:
    "¿Te despidieron sin justa causa? ¿Tienes una incapacidad, pensión o EPS que no responde? ¿Necesitas resolver un divorcio, sucesión o custodia? Te asesoro y te represento con más de 14 años de experiencia en tutelas, derecho laboral, seguridad social y derecho de familia — en el sector público y privado.",
  bio: "Abogada especialista en Derecho Laboral y Seguridad Social con más de 14 años de experiencia integral. Sólida trayectoria en el sector público gestionando acciones de tutela, respuesta a entes de control, PQRS y contratación estatal (SECOP); y en el sector privado liderando la revisión de contratos mercantiles, actualización normativa y procesos disciplinarios laborales.",
  quote: "Reconocida por mi capacidad de mitigación de riesgos legales, alto sentido de pertenencia y un rigor técnico que me ha permitido ser recontratada por mérito en entidades del Estado.",
  contact: {
    phone: "3107507846",
    phoneIntl: "+573107507846",
    email: "abogada@diana-anzola.com",
    whatsapp: "https://wa.me/573107507846",
    location: "Bogotá, Colombia",
  },
};

export function whatsappLink(text: string): string {
  return `${profile.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type ServiceEntry = {
  question: string;
  area: string;
  description: string;
  whatsappText: string;
};

export const services: ServiceEntry[] = [
  {
    question: "¿Te despidieron sin justa causa?",
    area: "Derecho Laboral",
    description: "Reclamación de indemnizaciones, liquidaciones y prestaciones sociales ante despidos injustificados.",
    whatsappText: "Hola Diana, necesito asesoría por un despido laboral.",
  },
  {
    question: "Problemas con tu pensión, EPS o incapacidad",
    area: "Seguridad Social / Tutelas",
    description: "Acciones de tutela y trámites ante negativas de pensión, EPS, ARL o pago de incapacidades.",
    whatsappText: "Hola Diana, necesito ayuda con un tema de pensión, EPS o incapacidad.",
  },
  {
    question: "Divorcio, sucesión o custodia",
    area: "Derecho de Familia",
    description: "Acompañamiento en procesos de divorcio, sucesiones y custodia de menores.",
    whatsappText: "Hola Diana, necesito asesoría en un tema de derecho de familia.",
  },
  {
    question: "Necesitas cobrar una deuda",
    area: "Procesos Ejecutivos",
    description: "Procesos ejecutivos y estudio de títulos para el cobro efectivo de obligaciones.",
    whatsappText: "Hola Diana, necesito iniciar un proceso ejecutivo para cobrar una deuda.",
  },
  {
    question: "Contratos y asesoría para tu empresa",
    area: "Corporativo / Laboral",
    description: "Revisión de contratos mercantiles, reglamentos internos y procesos disciplinarios para empresas.",
    whatsappText: "Hola Diana, necesito asesoría corporativa/laboral para mi empresa.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "1",
    title: "Escríbeme",
    description: "Por WhatsApp, correo o el formulario de contacto, cuéntame brevemente tu situación.",
  },
  {
    step: "2",
    title: "Consulta inicial",
    description: "Conversamos sobre tu caso, resuelvo tus dudas y te explico las opciones disponibles.",
  },
  {
    step: "3",
    title: "Evaluación del caso",
    description: "Reviso los documentos y antecedentes para determinar la mejor estrategia jurídica.",
  },
  {
    step: "4",
    title: "Propuesta y honorarios",
    description: "Te presento una propuesta clara, con honorarios definidos antes de iniciar cualquier trámite.",
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  subPeriods?: string[];
  active?: boolean;
  functions?: string;
  achievements: string;
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Ejercicio Independiente",
    role: "Abogada Litigante — Asesora y Representante Judicial",
    period: "Ene 2011 — Actualidad",
    active: true,
    achievements:
      "Representación en procesos civiles (ejecutivos, estudio de títulos) y de familia (divorcios, sucesiones, custodia). Asesoría laboral y de seguridad social para empresas privadas.",
    tags: ["Derecho Civil", "Derecho de Familia", "Derecho Laboral"],
  },
  {
    company: "Departamento de Prosperidad Social (DPS)",
    role: "Abogada — Agente Especializado",
    period: "2018 — 2026",
    subPeriods: [
      "UT Unión Temporal ASD-IQ · May 2025 — Feb 2026",
      "Innovatech IT SAS · Ago 2024 — Mar 2025",
      "Américas BPS · Ago 2018 — Ene 2020",
    ],
    functions:
      "Análisis y sustentación jurídica de PQRS y tutelas relacionadas con programas sociales. Atención especializada en derechos fundamentales, Habeas Data y Derecho Constitucional. Emisión de conceptos jurídicos y validación de lineamientos legales de la entidad.",
    achievements:
      "Optimización de los tiempos de respuesta en acciones de tutela y PQRS masivas, garantizando el cumplimiento de los términos de ley y blindando a la entidad frente a incidentes de desacato y sanciones administrativas.",
    tags: ["Tutelas", "PQRS", "Derecho Constitucional", "Habeas Data"],
  },
  {
    company: "ADISPETROL S.A",
    role: "Abogado Interno Consultor",
    period: "Sep 2022 — Nov 2022",
    functions:
      "Asesoría corporativa, revisión de contratos civiles y comerciales, e imposición de procesos disciplinarios. Elaboración de contratos laborales y de aprendizaje SENA. Representación en audiencias y respuesta a requerimientos.",
    achievements:
      "Actualización estratégica del Reglamento Interno de Trabajo (RIT) conforme al marco jurídico vigente, fortaleciendo el ordenamiento laboral interno y reduciendo las contingencias disciplinarias de la compañía.",
    tags: ["Contratos Mercantiles", "Derecho Disciplinario", "RIT"],
  },
  {
    company: "Edifasha Construcciones SAS",
    role: "Abogado — Asesor Jurídico Principal",
    period: "Jun 2017 — Dic 2021",
    functions:
      "Elaboración de contratos de obra, civiles y mercantiles bajo normativa vigente. Gestión de licencias de construcción, permisos ambientales y elaboración de estudios de títulos inmobiliarios.",
    achievements:
      "Saneamiento exitoso de la tradición de inmuebles y viabilización jurídica ágil para el desarrollo de proyectos constructivos y comerciales de la constructora.",
    tags: ["Derecho Inmobiliario", "Contratos de Obra"],
  },
  {
    company: "Fondo Financiero Distrital de Salud (FFDS)",
    role: "Abogada",
    period: "Ene 2018 — May 2018",
    functions:
      "Sustentación jurídica de investigaciones administrativas sancionatorias por presuntas fallas en la prestación de servicios de salud.",
    achievements:
      "Evaluación y proyección rigurosa de fallos en investigaciones administrativas, garantizando el debido proceso y contribuyendo a la evacuación efectiva del rezago procesal en la imposición de medidas a prestadores de salud.",
    tags: ["Derecho Administrativo", "Debido Proceso"],
  },
  {
    company: "Unidad de Gestión Pensional y Parafiscales (UGPP)",
    role: "Asesor II — Abogada",
    period: "Jun 2013 — Dic 2015",
    functions:
      "Asesoría en procesos parafiscales y gestión pensional. Proyección de derechos de petición, recursos y tutelas mediante la administración de bases de datos.",
    achievements:
      "Depuración y manejo eficiente de sistemas de información para la contestación oportuna de recursos de vía gubernativa.",
    tags: ["Seguridad Social", "Gestión Pensional"],
  },
  {
    company: "Instituto Colombiano de Bienestar Familiar (ICBF)",
    role: "Abogada",
    period: "May 2012 — Dic 2012",
    functions:
      "Acompañamiento jurídico en etapas precontractual y contractual. Publicación de procesos en el SECOP y apoyo en rendición de informes a la Contraloría General de la República.",
    achievements:
      "Acompañamiento jurídico minucioso en procesos de contratación estatal, asegurando la transparencia, la correcta publicación en SECOP y el blindaje legal de la entidad frente a auditorías y reportes a la Contraloría.",
    tags: ["Contratación Estatal", "SECOP"],
  },
];

export const education = [
  {
    title: "Especialización en Derecho Laboral y Seguridad Social",
    institution: "Universidad Católica de Colombia",
    year: "2018",
  },
  {
    title: "Abogada",
    institution: "Universidad Libre de Colombia",
    year: "2010",
  },
];

export const languages = [
  {
    name: "Inglés",
    level: "En progreso",
    institution: "Instituto Colombo Americano / BLI Language School, Montreal, Canadá",
  },
];

export const skills = [
  "Derecho Laboral",
  "Seguridad Social",
  "Derecho Constitucional",
  "Acciones de Tutela",
  "PQRS",
  "Contratación Estatal (SECOP)",
  "Derecho Civil",
  "Derecho de Familia",
  "Derecho Disciplinario",
  "Contratos Mercantiles",
  "Habeas Data",
  "Derecho Inmobiliario",
  "Gestión Pensional y Parafiscal",
  "Mitigación de Riesgo Legal",
];
