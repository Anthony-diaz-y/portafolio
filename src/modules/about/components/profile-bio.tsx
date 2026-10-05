import { Badge } from "@/shared/ui/badge";
import type { Profile } from "../types/profile.types";

type ProfileBioProps = {
  profile: Profile;
};

export function ProfileBio({ profile }: ProfileBioProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4 leading-relaxed">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section aria-labelledby="skills-heading" className="space-y-3">
        <h2 id="skills-heading" className="font-heading text-xl font-semibold">
          Habilidades
        </h2>
        <ul className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="secondary">{skill}</Badge>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
