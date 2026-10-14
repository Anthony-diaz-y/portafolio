import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { career } from "@/modules/about/data/career.data";
import { SITE } from "@/shared/constants/site.constants";

export const metadata: Metadata = {
  title: "Trayectoria",
  description: "Experiencia profesional y práctica de Anthony Díaz en desarrollo full stack.",
};

export default function Page() {
  return (
    <>
      <header className="career-hero">
        <div className="career-hero__copy">
          <span className="eyebrow">Experiencia · Lima, Perú</span>
          <h1>Trayectoria con <em>propósito.</em></h1>
          <p>Un recorrido entre producto, datos y desarrollo web: de las prácticas a construir soluciones para equipos y operaciones reales.</p>
          <a className="career-hero__jump" href="#recorrido">Ver recorrido <span aria-hidden="true">↓</span></a>
        </div>
        <div className="career-hero__stamp" aria-hidden="true">
          <span>Desde</span><strong>2024</strong><i>✳</i>
        </div>
        <span className="career-hero__orbit" aria-hidden="true" />
      </header>
      <div className="career-section-heading" id="recorrido">
        <div><span className="eyebrow">El camino hasta aquí</span><h2>Experiencia profesional</h2></div>
        <span>{career.length} etapas <i>·</i> desarrollo y mejora continua</span>
      </div>
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
      <div className="career-footer">
        <p>¿Quieres conocer más sobre mi recorrido?</p>
        <Link className="career-footer__link" href={SITE.linkedIn} target="_blank" rel="noreferrer">Conversemos en LinkedIn <ArrowUpRight aria-hidden="true" size={16} /></Link>
      </div>
    </>
  );
}
