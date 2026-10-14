import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectsContainer } from "@/modules/projects/server";
import { projectsData } from "@/modules/projects/data/projects.data";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Casos seleccionados de la experiencia profesional y académica de Anthony Díaz.",
};

export default function Page() {
  return (
    <div className="projects-page">
      <header className="projects-hero">
        <div className="projects-hero__copy">
          <span className="eyebrow">Trabajo seleccionado · 2025—2026</span>
          <h1>Ideas que se convierten<br />en <em>soluciones útiles.</em></h1>
          <p>Una selección de módulos, plataformas y mejoras en los que conecté interfaces, backend y datos.</p>
          <Link href="/experience" className="projects-hero__path">Conocer mi trayectoria <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
        <div className="projects-hero__visual" aria-hidden="true">
          <span className="projects-hero__ring projects-hero__ring--one" />
          <span className="projects-hero__ring projects-hero__ring--two" />
          <span className="projects-hero__asterisk">✳</span>
          <span className="projects-hero__number">{String(projectsData.length).padStart(2, "0")}</span>
          <span className="projects-hero__caption">proyectos<br />seleccionados</span>
        </div>
      </header>

      <div className="projects-section-heading">
        <div><span className="eyebrow">Casos de estudio</span><h2>Del reto al resultado.</h2></div>
        <span>Experiencia profesional <i>+</i> proyectos académicos</span>
      </div>
      <ProjectsContainer />

      <aside className="projects-closing">
        <div><span className="eyebrow">¿Seguimos conversando?</span><h2>Las buenas ideas empiezan con una charla.</h2></div>
        <Link href="/contact" aria-label="Contactar a Anthony">Hablemos <ArrowRight aria-hidden="true" size={17} /></Link>
      </aside>
    </div>
  );
}
