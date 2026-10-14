import Link from "next/link";
import type { Project } from "../types/project.types";
import { ProjectCard } from "./project-card";

type ProjectListProps = {
  projects: readonly Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return <div className="project-empty"><span aria-hidden="true">✳</span><p>Aún no hay casos publicados. Puedes conocer mi <Link href="/experience">trayectoria profesional</Link>.</p></div>;
  }

  return (
    <ul className="project-grid" aria-label="Proyectos seleccionados">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </ul>
  );
}
