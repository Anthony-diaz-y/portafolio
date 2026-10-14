import type { Metadata } from "next";
import { ProjectsContainer } from "@/modules/projects/server";
import { PageHeader } from "@/shared/components/page-header";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Casos seleccionados de la experiencia profesional y académica de Anthony Díaz.",
};

export default function Page() {
  return (
    <>
      <PageHeader title="Proyectos" description="Una selección de mi trabajo en desarrollo digital." />
      <ProjectsContainer />
    </>
  );
}
