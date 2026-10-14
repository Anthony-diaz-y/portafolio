import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { SITE } from "@/shared/constants/site.constants";
import type { Profile } from "../types/profile.types";

type ProfileIntroProps = {
  profile: Profile;
};

export function ProfileIntro({ profile }: ProfileIntroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__kicker"><span className="hero__mark" /> {profile.role}<span className="hero__location"><MapPin aria-hidden="true" size={13} />{profile.location}</span></p>
        <h1 id="hero-title">Hola, soy<br /><span>{profile.name.split(" ")[0]}.</span></h1>
        <p className="hero__description">{profile.tagline}</p>
        <div className="hero__actions">
          <Button asChild size="lg" className="hero__primary">
            <Link href="/projects">Ver proyectos <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
          <Link href="/contact" className="hero__secondary">Hablemos <ArrowDownRight aria-hidden="true" size={16} /></Link>
        </div>
        <div className="hero__socials" aria-label="Redes profesionales">
          <a href={SITE.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn de Anthony Díaz">
            <span>LinkedIn</span><ArrowUpRight aria-hidden="true" size={14} />
          </a>
          <span className="hero__social-divider" aria-hidden="true" />
          <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub de Anthony Díaz">
            <span>GitHub</span><ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="hero-art__orbit hero-art__orbit--outer" />
        <div className="hero-art__orbit hero-art__orbit--inner" />
        <div className="hero-art__spark hero-art__spark--one">✳</div>
        <div className="hero-art__spark hero-art__spark--two">✦</div>
        <div className="hero-art__card">
          <span className="hero-art__window"><i /><i /><i /></span>
          <span className="hero-art__code hero-art__code--short" />
          <span className="hero-art__code" />
          <span className="hero-art__code hero-art__code--medium" />
          <span className="hero-art__code hero-art__code--short hero-art__code--accent" />
          <span className="hero-art__code hero-art__code--medium" />
          <span className="hero-art__cursor" />
          <span className="hero-art__label">idea → realidad</span>
        </div>
        <span className="hero-art__caption">Un paso a la vez <span>↗</span></span>
      </div>
    </section>
  );
}
