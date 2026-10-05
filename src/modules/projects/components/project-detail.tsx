import Link from "next/link";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import type { Project } from "../types/project.types";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">{project.year}</p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{project.summary}</p>
      </header>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="space-y-4">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
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
        <Button asChild variant="ghost">
          <Link href="/projects">← Todos los proyectos</Link>
        </Button>
      </div>
    </article>
  );
}
