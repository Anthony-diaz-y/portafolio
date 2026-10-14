import type { Metadata } from "next";
import { ProfileBioContainer } from "@/modules/about";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Perfil, formación académica, tecnologías e idiomas de Anthony Díaz.",
};

export default function Page() {
  return (
    <div className="about-page">
      <header className="about-page__hero">
        <div>
          <span className="eyebrow">Perfil · Lima, Perú</span>
          <h1>Sobre mí <em>y cómo pienso.</em></h1>
          <p>Aprendo a entender los procesos y a construir sistemas que los hacen más simples.</p>
        </div>
        <div className="about-page__seal" aria-hidden="true"><span>02</span><small>caminos<br />en formación</small><i>✳</i></div>
      </header>
      <ProfileBioContainer />
    </div>
  );
}
