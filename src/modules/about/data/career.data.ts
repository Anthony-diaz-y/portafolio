export type CareerEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  kind: "Profesional" | "Práctica profesional";
  highlights: readonly string[];
};

export const career: readonly CareerEntry[] = [
  {
    id: "coril-patrimonios",
    company: "Grupo CORIL",
    role: "Desarrollador Full Stack · Gestión de Patrimonios",
    period: "Ago 2026 – Actualidad",
    kind: "Profesional",
    highlights: [
      "Desarrollé un módulo para organizar obligaciones de los patrimonios, sus fechas objetivo y vencimientos, con seguimiento mensual de cumplimiento.",
      "Centralicé la recepción de actividades y añadí gestión de roles y permisos para contadores registrados.",
    ],
  },
  {
    id: "coril-abonos",
    company: "Grupo CORIL",
    role: "Desarrollador Full Stack · Abonos Bancarios",
    period: "Jun 2026 – Ago 2026",
    kind: "Profesional",
    highlights: [
      "Implementé flujos manuales y automáticos para cargar y migrar abonos bancarios hacia las áreas operativa y contable.",
      "Aseguré la integridad de los datos y eliminé el registro manual de los abonos procesados.",
    ],
  },
  {
    id: "coril-emisiones",
    company: "Grupo CORIL",
    role: "Desarrollador Full Stack · Gestión de Emisiones",
    period: "Abr 2026 – Jun 2026",
    kind: "Profesional",
    highlights: [
      "Desarrollé módulos de gestión de emisiones, incluyendo interfaces y servicios backend para información financiera.",
      "Construí endpoints y vistas responsive para tablas, reportes e indicadores, con estructura modular y separación por capas.",
    ],
  },
  {
    id: "coril-intranet",
    company: "Grupo CORIL",
    role: "Desarrollador Frontend · Intranet Corporativa",
    period: "Ene 2026 – Abr 2026",
    kind: "Profesional",
    highlights: [
      "Desarrollé módulos responsive y reutilizables para la intranet del personal administrativo, organizados según roles de usuario.",
      "Integré las interfaces con servicios backend y trabajé en la consistencia visual y la mantenibilidad del código.",
    ],
  },
  {
    id: "cem-elearning",
    company: "CEM eLearning",
    role: "Desarrollador Full Stack",
    period: "Dic 2025 – Abr 2026",
    kind: "Profesional",
    highlights: [
      "Modelé la base de datos relacional y desarrollé lógica de negocio para información académica y administrativa.",
      "Apliqué una arquitectura modular en backend e interfaz y contribuí a la documentación técnica de la plataforma.",
    ],
  },
  {
    id: "comparapet",
    company: "Comparapet",
    role: "Gestor de Base de Datos y Mejora Continua",
    period: "Oct 2025 – Dic 2025",
    kind: "Profesional",
    highlights: [
      "Normalicé tablas y reforcé la integridad referencial de la base de datos PostgreSQL.",
      "Una mejora en las consultas duplicó la velocidad de recuperación de productos; también documenté procesos para facilitar el mantenimiento.",
    ],
  },
  {
    id: "openlab",
    company: "OpenLab",
    role: "Pasante de Desarrollo Full Stack",
    period: "Feb 2024 – Dic 2025",
    kind: "Práctica profesional",
    highlights: [
      "Desarrollé interfaces web responsive y servicios backend para conectar frontend y bases de datos relacionales.",
      "Diseñé APIs y lógica de negocio y optimicé consultas PostgreSQL para apoyar la evolución de las aplicaciones.",
    ],
  },
];

export const education = [
  {
    institution: "Universidad Privada del Norte",
    program: "Ingeniería Industrial",
    detail: "Estudiante · Lima, Perú",
    expected: "Finalización prevista: agosto de 2028",
  },
  {
    institution: "Zegel",
    program: "Gestión de Sistemas de Información",
    detail: "Carrera técnica · Virtual, Perú",
    expected: "Finalización prevista: julio de 2028",
  },
] as const;

export const training = [
  { name: "Excel Avanzado", provider: "IFEEP", period: "2022" },
  { name: "Bases de Datos: MySQL y PostgreSQL", provider: "MiduDev", period: "2025" },
  { name: "Power BI y Cloud Computing Básico", provider: "Universidad Nacional de Ingeniería", period: "2025" },
  { name: "NestJS Básico, Docker, NestJS con GraphQL y Java", provider: "DevTalles · Fernando Herrera", period: "2025 – Actualidad" },
] as const;

