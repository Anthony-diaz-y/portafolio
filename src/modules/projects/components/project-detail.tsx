import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import type { Project } from "../types/project.types";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="project-detail">
      <Link href="/projects" className="project-detail__back"><ArrowLeft aria-hidden="true" size={15} /> Todos los proyectos</Link>
      <header className="project-detail__header">
        <span className="eyebrow">Caso seleccionado · {project.year}</span>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="project-detail__tags">
          {project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
      </header>
      <div className="project-detail__body">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="project-detail__actions">
        {project.liveUrl && (
          <Button asChild>
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Ver demo
            </a>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild variant="outline">
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              Ver código
            </a>
          </Button>
        )}
      </div>
    </article>
  );
}
