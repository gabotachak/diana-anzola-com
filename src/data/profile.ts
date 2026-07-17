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
  bio: "Abogada especialista en Derecho Laboral y Seguridad Social con más de 14 años de experiencia integral. Sólida trayectoria en el sector público gestionando acciones de tutela, respuesta a entes de control, PQRS y contratación estatal (SECOP); y en el sector privado liderando la revisión de contratos mercantiles, actualización normativa y procesos disciplinarios laborales.",
  quote: "Reconocida por mi capacidad de mitigación de riesgos legales, alto sentido de pertenencia y un rigor técnico que me ha permitido ser recontratada por mérito en entidades del Estado.",
  contact: {
    phone: "3107507846",
    phoneIntl: "+573107507846",
    email: "dmat2011juridica@gmail.com",
    whatsapp: "https://wa.me/573107507846",
    location: "Bogotá, Colombia",
  },
};

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
