import { Badge } from "@/shared/ui/badge";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/shared/constants/site.constants";
import { education, training } from "../data/career.data";
import type { Profile } from "../types/profile.types";

type ProfileBioProps = {
  profile: Profile;
};

export function ProfileBio({ profile }: ProfileBioProps) {
  return (
    <div className="about-profile">
      <div className="about-profile__intro">
        <div className="about-profile__monogram" aria-hidden="true">AD<span>.</span></div>
        <div>
          <span className="eyebrow">Perfil profesional</span>
          <h2>{profile.name}</h2>
          <p className="about-profile__role">{profile.role} · {profile.location}</p>
        </div>
      </div>
      <div className="about-profile__copy">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section aria-labelledby="skills-heading" className="about-profile__focus">
        <h2 id="skills-heading">Habilidades</h2>
        <div className="skill-groups">
          {profile.skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => <li key={skill}><Badge variant="secondary">{skill}</Badge></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section aria-labelledby="education-heading" className="about-profile__section">
        <h2 id="education-heading">Formación académica</h2>
        <ul className="education-list">
          {education.map((item) => (
            <li key={item.institution}>
              <div><h3>{item.program}</h3><p>{item.institution} · {item.detail}</p></div>
              <span>{item.expected}</span>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="training-heading" className="about-profile__section">
        <h2 id="training-heading">Formación complementaria</h2>
        <ul className="training-list">
          {training.map((item) => (
            <li key={item.name}><span>{item.name}</span><span>{item.provider} · {item.period}</span></li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="languages-heading" className="about-profile__section">
        <h2 id="languages-heading">Idiomas</h2>
        <ul className="language-list">
          {profile.languages.map((language) => <li key={language}><Check aria-hidden="true" size={14} />{language}</li>)}
        </ul>
      </section>
      <a href={SITE.linkedIn} target="_blank" rel="noreferrer" className="about-profile__linkedin">
        Ver perfil en LinkedIn <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </div>
  );
}
