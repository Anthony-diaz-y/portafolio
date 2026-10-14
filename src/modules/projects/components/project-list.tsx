import type { Project } from "../types/project.types";
import { ProjectCard } from "./project-card";

type ProjectListProps = {
  projects: readonly Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="project-note">
        <span className="project-note__mark" aria-hidden="true">✳</span>
        <p>Estoy preparando una selección de proyectos reales para compartir aquí.</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
