import Link from "next/link";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { SITE } from "@/shared/constants/site.constants";
import { BrandMark } from "@/shared/components/brand-mark";
import { education, training } from "../data/career.data";
import type { Profile } from "../types/profile.types";

type ProfileBioProps = {
  profile: Profile;
};

export function ProfileBio({ profile }: ProfileBioProps) {
  return (
    <div className="about-layout">
      <div className="about-layout__main">
        <section className="about-story" aria-labelledby="about-story-title">
          <div className="about-story__ornament" aria-hidden="true">✳</div>
          <span className="eyebrow">Quién soy</span>
          <h2 id="about-story-title">Desarrollo con curiosidad.<br /><em>Pienso en sistemas.</em></h2>
          <div className="about-story__copy">
            {profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="about-story__footer">
            <span><MapPin aria-hidden="true" size={14} />{profile.location}</span>
            <Link href="/experience">Mi trayectoria <ArrowUpRight aria-hidden="true" size={15} /></Link>
          </div>
        </section>

        <section className="about-section about-skills" aria-labelledby="skills-heading">
          <div className="about-section__heading">
            <div><span className="eyebrow">Herramientas y método</span><h2 id="skills-heading">Habilidades</h2></div>
            <span className="about-section__spark" aria-hidden="true">✦</span>
          </div>
          <div className="skill-groups">
            {profile.skillGroups.map((group, index) => (
              <div className="skill-group" key={group.title}>
                <span className="skill-group__number">0{index + 1}</span>
                <div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((skill) => <li key={skill}><Badge variant="secondary">{skill}</Badge></li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section about-training" aria-labelledby="training-heading">
          <div className="about-section__heading">
            <div><span className="eyebrow">Aprendizaje continuo</span><h2 id="training-heading">Formación complementaria</h2></div>
          </div>
          <ul className="training-list">
            {training.map((item) => (
              <li key={item.name}>
                <span className="training-list__marker" aria-hidden="true">↗</span>
                <div><h3>{item.name}</h3><p>{item.provider}</p></div>
                <time>{item.period}</time>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <aside className="about-layout__side" aria-label="Resumen del perfil">
        <section className="about-identity">
          <div className="about-identity__top"><span className="eyebrow">Perfil profesional</span><span className="about-identity__dot" aria-hidden="true" /></div>
          <div className="about-identity__monogram"><BrandMark className="about-identity__monogram-glyph" /></div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <div className="about-identity__links">
            <a href={SITE.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={14} /></a>
            <a href={SITE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={14} /></a>
          </div>
        </section>

        <section className="about-section about-education" aria-labelledby="education-heading">
          <div className="about-section__heading"><div><span className="eyebrow">En curso</span><h2 id="education-heading">Formación académica</h2></div></div>
          <ol>
            {education.map((item, index) => (
              <li key={item.institution}>
                <span className="education-list__number">0{index + 1}</span>
                <div><h3>{item.program}</h3><p>{item.institution}</p><span>{item.detail}</span><small>{item.expected}</small></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-languages" aria-labelledby="languages-heading">
          <span className="eyebrow">Comunicación</span>
          <h2 id="languages-heading">Idiomas</h2>
          <ul>{profile.languages.map((language) => <li key={language}><Check aria-hidden="true" size={14} />{language}</li>)}</ul>
        </section>
      </aside>
    </div>
  );
}
