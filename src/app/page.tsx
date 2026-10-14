import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Code2, Layers3 } from "lucide-react";
import { ProfileIntroContainer } from "@/modules/about";
import { ProjectsContainer } from "@/modules/projects/server";

const disciplines = [
  { number: "01", title: "Interfaz", detail: "Experiencias web pensadas para personas.", icon: Layers3 },
  { number: "02", title: "Lógica", detail: "Funcionalidad que conecta cada parte.", icon: Braces },
  { number: "03", title: "Producto", detail: "Ideas que toman forma en digital.", icon: Code2 },
];

export default function Page() {
  return (
    <div className="portfolio-home">
      <ProfileIntroContainer />

      <section aria-label="Enfoque de trabajo" className="discipline-grid">
        {disciplines.map(({ number, title, detail, icon: Icon }) => (
          <article key={number} className="discipline-card">
            <div className="discipline-card__top">
              <span className="eyebrow">{number}</span>
              <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
            </div>
            <h2>{title}</h2>
            <p>{detail}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="featured-projects" className="featured-work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selección personal</span>
            <h2 id="featured-projects">Trabajo con intención.</h2>
          </div>
          <Link href="/projects" className="text-link">
            Explorar proyectos <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <ProjectsContainer limit={2} />
      </section>

      <section className="about-banner" aria-labelledby="about-banner-title">
        <div>
          <span className="eyebrow">Un poco más sobre mí</span>
          <h2 id="about-banner-title">Código con propósito.<br /><em>Curiosidad sin pausa.</em></h2>
        </div>
        <Link href="/about" className="round-link" aria-label="Conoce más sobre Anthony">
          <ArrowUpRight aria-hidden="true" size={22} />
        </Link>
      </section>

      <p className="home-signoff"><ArrowDown aria-hidden="true" size={14} /> Gracias por pasar, nos vemos pronto.</p>
    </div>
  );
}
