import type { Profile } from "../types/profile.types";

export const profileData: Profile = {
  name: "Anthony Daniel Díaz Yacsahuanga",
  role: "Desarrollador full stack",
  location: "Lima, Perú",
  tagline: "Del modelo de datos a una interfaz clara: desarrollo soluciones web de punta a punta.",
  bio: [
    "Estudio Ingeniería Industrial en la Universidad Privada del Norte y Gestión de Sistemas de Información en Zegel. Combino el análisis de procesos con el desarrollo de productos digitales.",
    "He trabajado en módulos corporativos y plataformas académicas, conectando interfaces, servicios backend y bases de datos relacionales. Me interesan las arquitecturas modulares, la mejora continua y construir herramientas que simplifiquen el trabajo de las personas.",
  ],
  skillGroups: [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"] },
    { title: "Backend", items: ["Node.js", "Express.js", "NestJS"] },
    { title: "Datos y herramientas", items: ["PostgreSQL", "MySQL", "SQL", "GitHub", "Docker"] },
    { title: "Arquitectura y trabajo", items: ["Clean Architecture", "Screaming Architecture", "Arquitectura modular", "Scrum", "Adapter", "Repository"] },
  ],
  languages: ["Español · nativo (C1)", "Inglés · A2"],
};
