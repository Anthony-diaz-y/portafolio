import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MessageFormContainer } from "@/modules/contact";
import { PageHeader } from "@/shared/components/page-header";
import { SITE } from "@/shared/constants/site.constants";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbeme para hablar de un proyecto o colaboración.",
};

export default function Page() {
  return (
    <section className="contact-page">
      <PageHeader title="Hablemos de tu próxima idea" description="Un proyecto, una colaboración o simplemente una buena conversación sobre tecnología: estoy abierto a conectar." />
      <div className="contact-layout">
        <aside className="contact-aside">
          <div className="contact-note">
            <span className="contact-note__spark" aria-hidden="true">✳</span>
            <span className="eyebrow">¿Qué tienes en mente?</span>
            <h2>Las buenas ideas empiezan con una conversación.</h2>
            <p>Cuéntame un poco de tu propuesta y encontraremos el siguiente paso.</p>
          </div>
          <div className="contact-topics" aria-label="Temas de conversación">
            <span>Desarrollo web</span><span>Colaboraciones</span><span>Oportunidades</span>
          </div>
          <Link className="contact-social" href={SITE.linkedIn} target="_blank" rel="noreferrer">
            <span className="contact-social__mark" aria-hidden="true">in</span>
            <span><small>También puedes escribirme en</small><strong>LinkedIn</strong></span>
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </aside>
        <div className="contact-form-card">
          <div className="contact-form-card__heading"><span className="eyebrow">Contacto directo</span><h2>Prepara tu mensaje</h2><p>El formulario está en preparación; para contactarme ahora, puedes usar LinkedIn.</p></div>
          <MessageFormContainer />
        </div>
      </div>
    </section>
  );
}
