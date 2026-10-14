import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { career } from "@/modules/about/data/career.data";
import { PageHeader } from "@/shared/components/page-header";

export const metadata: Metadata = {
  title: "Trayectoria",
  description: "Experiencia profesional y práctica de Anthony Díaz en desarrollo full stack.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Trayectoria"
        description="Experiencia en desarrollo web, plataformas académicas, sistemas internos y trabajo con datos."
      />
      <ol className="career-list">
        {career.map((entry) => (
          <li className="career-entry" key={entry.id}>
            <div className="career-entry__rail"><span /></div>
            <article className="career-entry__card">
              <div className="career-entry__heading">
                <div>
                  <span className="eyebrow">{entry.kind}</span>
                  <h2>{entry.role}</h2>
                  <p>{entry.company} · Perú</p>
                </div>
                <time>{entry.period}</time>
              </div>
              <ul>
                {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
      <a className="about-profile__linkedin career-link" href="https://www.linkedin.com/in/anthony-daniel-diaz-yacsahuanga-2408b3399/" target="_blank" rel="noreferrer">
        Más detalles en LinkedIn <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </>
  );
}
