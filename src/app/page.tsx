import Link from "next/link";
import { ProfileIntroContainer } from "@/modules/about";
import { ProjectsContainer } from "@/modules/projects/server";

export default function Page() {
  return (
    <>
      <ProfileIntroContainer />
      <section aria-labelledby="featured-projects" className="space-y-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="featured-projects" className="font-heading text-2xl font-semibold">
            Proyectos destacados
          </h2>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
            Ver todos →
          </Link>
        </div>
        <ProjectsContainer limit={2} />
      </section>
    </>
  );
}
