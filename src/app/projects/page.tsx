import type { Metadata } from "next";
import { ProjectsContainer } from "@/modules/projects/server";
import { PageHeader } from "@/shared/components/page-header";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Selección de proyectos en los que he trabajado.",
};

export default function Page() {
  return (
    <>
      <PageHeader title="Proyectos" description="Selección de proyectos en los que he trabajado." />
      <ProjectsContainer />
    </>
  );
}
