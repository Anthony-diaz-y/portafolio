import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import type { Project } from "../types/project.types";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const approach = project.caseStudy?.approach ?? project.description;
  const outcome = project.caseStudy?.outcome ?? project.description.at(-1) ?? project.summary;

  return (
    <article className="project-detail" data-project={project.id}>
      <Link href="/projects" className="project-detail__back">
        <ArrowLeft aria-hidden="true" size={15} />
        <span>Todos los proyectos</span>
      </Link>

      <header className="project-detail__hero">
        <div className="project-detail__intro">
          <span className="project-detail__eyebrow"><i aria-hidden="true" /> Caso seleccionado <span>·</span> {project.year}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="project-detail__tags" aria-label="Tecnologías y enfoque del proyecto">
            {project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </div>

        <div className="project-detail__visual" aria-hidden="true">
          <div className="project-detail__visual-top"><span>ESTUDIO DE CASO</span><span>{project.year}</span></div>
          <div className="project-detail__visual-orbit project-detail__visual-orbit--one" />
          <div className="project-detail__visual-orbit project-detail__visual-orbit--two" />
          <div className="project-detail__visual-core"><span>{project.tags[0] ?? "Producto"}</span><i>✳</i></div>
          <div className="project-detail__visual-flow"><span /> <i /> <span /> <i /> <span /></div>
          <p>ANÁLISIS <b>·</b> CONSTRUCCIÓN <b>·</b> MEJORA</p>
        </div>
      </header>

      <div className="project-detail__chapters">
        <section className="project-detail__chapter project-detail__chapter--challenge" aria-labelledby="project-challenge">
          <span className="eyebrow">01 · Contexto</span>
          <h2 id="project-challenge">El reto</h2>
          <p>{project.caseStudy?.challenge ?? project.summary}</p>
        </section>
        <section className="project-detail__chapter project-detail__chapter--approach" aria-labelledby="project-approach">
          <span className="eyebrow">02 · Mi contribución</span>
          <h2 id="project-approach">Cómo lo abordé</h2>
          <ol>
            {approach.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="project-detail__outcome" aria-labelledby="project-outcome">
        <div className="project-detail__outcome-mark" aria-hidden="true">↗</div>
        <div><span className="eyebrow">03 · Aporte</span><h2 id="project-outcome">El resultado</h2><p>{outcome}</p></div>
        <span className="project-detail__outcome-spark" aria-hidden="true">✳</span>
      </section>

      <section className="project-detail__closing">
        <div><span className="eyebrow">¿Te interesa este tipo de solución?</span><h2>Hablemos de lo que podríamos construir.</h2></div>
        <div className="project-detail__actions">
          {project.liveUrl && (
            <Button asChild variant="outline"><a href={project.liveUrl} target="_blank" rel="noreferrer">Ver demo <ArrowUpRight aria-hidden="true" /></a></Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="outline"><a href={project.repoUrl} target="_blank" rel="noreferrer">Ver código <ArrowUpRight aria-hidden="true" /></a></Button>
          )}
          <Button asChild><Link href="/contact">Hablemos <ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </article>
  );
}
