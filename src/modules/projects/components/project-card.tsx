import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import type { Project } from "../types/project.types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <li className="project-card-shell">
      <Link href={`/projects/${project.slug}`} className="project-card" aria-label={project.title}>
        <div className="project-card__art" aria-hidden="true">
          <span className="project-card__art-grid" />
          <span className="project-card__art-orbit" />
          <span className="project-card__art-chip">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-card__art-line project-card__art-line--one" />
          <span className="project-card__art-line project-card__art-line--two" />
          <span className="project-card__art-line project-card__art-line--three" />
          <span className="project-card__art-mark">✳</span>
        </div>
        <div className="project-card__body">
          <div className="project-card__meta"><span>Caso seleccionado</span><time>{project.year}</time></div>
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
          <ul className="project-card__tags" aria-label="Tecnologías y áreas">
            {project.tags.map((tag) => <li key={tag}><Badge variant="secondary">{tag}</Badge></li>)}
          </ul>
          <span className="project-card__link">Ver caso <ArrowUpRight aria-hidden="true" size={16} /></span>
        </div>
      </Link>
    </li>
  );
}
