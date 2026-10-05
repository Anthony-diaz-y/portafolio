import type { Project } from "../types/project.types";
import { ProjectCard } from "./project-card";

type ProjectListProps = {
  projects: readonly Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return <p className="text-muted-foreground">Todavía no hay proyectos publicados.</p>;
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
