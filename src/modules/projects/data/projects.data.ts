import type { Project } from "../types/project.types";

// Casos seleccionados de la experiencia profesional y académica de Anthony.
export const projectsData: readonly Project[] = [
  {
    id: "gestion-patrimonios",
    slug: "gestion-de-patrimonios",
    title: "Gestión de patrimonios",
    summary: "Seguimiento de obligaciones, actividades y permisos en un módulo corporativo.",
    description: [
      "Desarrollé un módulo para organizar las obligaciones de los patrimonios, centralizar sus actividades y realizar seguimiento mensual de cumplimiento.",
      "Incluí fechas objetivo y de vencimiento, actualización de información de empresas y roles con permisos para contadores registrados.",
    ],
    tags: ["Full Stack", "Trazabilidad", "Roles y permisos"],
    year: 2026,
  },
  {
    id: "abonos-bancarios",
    slug: "migracion-de-abonos-bancarios",
    title: "Migración de abonos bancarios",
    summary: "Dos flujos para recibir y migrar registros bancarios a las áreas operativa y contable.",
    description: [
      "Implementé un flujo de carga manual de archivos Excel y otro proceso automático para registros recibidos en una tabla intermedia.",
      "El módulo mantuvo la consistencia de los datos entre las áreas operativa y contable y eliminó el registro manual de abonos.",
    ],
    tags: ["Full Stack", "Automatización", "Integridad de datos"],
    year: 2026,
  },
  {
    id: "gestion-emisiones",
    slug: "gestion-de-emisiones",
    title: "Gestión de emisiones",
    summary: "Interfaces y servicios backend para la gestión de información financiera.",
    description: [
      "Lideré el desarrollo full stack de módulos corporativos, diseñando endpoints y la lógica de negocio para su consumo desde la interfaz.",
      "Implementé pantallas responsive con TypeScript, Next.js, Material UI y Tailwind CSS para consultar tablas, reportes e indicadores.",
    ],
    tags: ["TypeScript", "Next.js", "Material UI", "Tailwind CSS"],
    year: 2026,
  },
  {
    id: "inkari-cafe",
    slug: "inkari-cafe",
    title: "Inkari Café · E-commerce",
    summary: "Tienda online de café con panel administrativo y gestión de pedidos.",
    description: [
      "Desarrollé páginas responsive para la venta de café y módulos de administración de productos, pedidos y contenido.",
      "Conecté las funcionalidades de Express.js con PostgreSQL e incorporé alertas para mejorar el control operativo.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Express.js", "PostgreSQL"],
    year: 2025,
  },
  {
    id: "comparapet-data",
    slug: "comparapet-optimizacion-de-datos",
    title: "Comparapet · Optimización de datos",
    summary: "Rediseño de tablas y consultas para acelerar la búsqueda de productos.",
    description: [
      "Normalicé la estructura de tablas en PostgreSQL y reforcé las relaciones entre entidades.",
      "Implementé una consulta que duplicó la velocidad de recuperación de productos y documenté los procesos de gestión de datos.",
    ],
    tags: ["PostgreSQL", "Optimización SQL", "Mejora continua"],
    year: 2025,
  },
  {
    id: "contapack",
    slug: "contapack-backend",
    title: "Contapack · Backend",
    summary: "Funciones backend y datos empresariales con una estructura documentada.",
    description: [
      "Modelé y optimicé la base de datos de la empresa, reduje redundancias y desarrollé funcionalidades backend para la gestión de información empresarial.",
      "Documenté la arquitectura y los flujos de datos para facilitar la comprensión y el mantenimiento del sistema.",
    ],
    tags: ["Express.js", "SQL", "Documentación técnica"],
    year: 2025,
  },
];
