import Link from "next/link";
import { Button } from "@/shared/ui/button";
import type { Profile } from "../types/profile.types";

type ProfileIntroProps = {
  profile: Profile;
};

export function ProfileIntro({ profile }: ProfileIntroProps) {
  return (
    <section className="space-y-6 py-10 sm:py-16">
      <p className="text-sm font-medium text-muted-foreground">{profile.role}</p>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Hola, soy {profile.name}.</h1>
      <p className="max-w-2xl text-lg text-muted-foreground">{profile.tagline}</p>
      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="/projects">Ver proyectos</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Hablemos</Link>
        </Button>
      </div>
    </section>
  );
}
