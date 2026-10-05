import type { Project } from "../types/project.types";

// Static content today; services/projects.service.ts is its only reader, so a CMS swap touches one file.
export const projectsData: readonly Project[] = [
  {
    id: "1",
    slug: "gestor-de-tareas",
    title: "Gestor de tareas colaborativo",
    summary: "Tablero kanban en tiempo real para equipos pequeños.",
    description: [
      "Aplicación para organizar tareas por columnas con actualizaciones en tiempo real entre los miembros del equipo.",
      "Incluye autenticación, permisos por tablero y un historial de cambios por tarea.",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    year: 2026,
    repoUrl: "https://github.com/",
  },
  {
    id: "2",
    slug: "tienda-artesanal",
    title: "Tienda online artesanal",
    summary: "Comercio electrónico rápido y accesible para un taller local.",
    description: [
      "Catálogo con filtros, carrito persistente y pasarela de pago integrada.",
      "Optimizada para móviles, con puntuaciones de Lighthouse superiores a 95.",
    ],
    tags: ["React", "Tailwind CSS", "Stripe"],
    year: 2025,
    liveUrl: "https://example.com/",
  },
  {
    id: "3",
    slug: "panel-de-metricas",
    title: "Panel de métricas",
    summary: "Visualización de indicadores de negocio con gráficos interactivos.",
    description: [
      "Panel interno que agrega datos de varias fuentes y los presenta en gráficos filtrables por fecha.",
      "Exportación a CSV y alertas configurables por umbral.",
    ],
    tags: ["TypeScript", "D3.js", "Node.js"],
    year: 2024,
  },
];
