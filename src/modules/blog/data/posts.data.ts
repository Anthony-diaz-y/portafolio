import type { Post } from "../types/post.types";

// Static content today; services/posts.service.ts is its only reader, so a CMS swap touches one file.
export const postsData: readonly Post[] = [
  {
    id: "1",
    slug: "arquitectura-modular-en-nextjs",
    title: "Arquitectura modular en Next.js",
    excerpt: "Cómo organizo un proyecto por dominios de negocio en lugar de por tipo de archivo.",
    publishedAt: "2026-09-15",
    content: [
      "Cuando un proyecto crece, agrupar el código por tipo técnico (componentes, hooks, servicios) obliga a saltar entre carpetas para entender una sola funcionalidad.",
      "Organizar por dominio hace que la estructura cuente qué hace el producto: proyectos, blog, contacto. Cada módulo expone una API pública pequeña y oculta sus detalles internos.",
    ],
  },
  {
    id: "2",
    slug: "server-components-sin-miedo",
    title: "Server Components sin miedo",
    excerpt: "Qué renderizar en el servidor, qué en el cliente y por qué importa para el rendimiento.",
    publishedAt: "2026-08-02",
    content: [
      "Los Server Components permiten obtener datos cerca de la fuente y enviar menos JavaScript al navegador.",
      "La regla práctica: todo es de servidor por defecto y solo las hojas interactivas se marcan como componentes de cliente.",
    ],
  },
];
