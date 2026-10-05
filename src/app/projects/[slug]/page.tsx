import type { Metadata } from "next";
import { getProjectBySlug, getProjects, ProjectDetailContainer } from "@/modules/projects/server";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = await getProjectBySlug((await params).slug);
  return project
    ? { title: project.title, description: project.summary }
    : { title: "Proyecto no encontrado" };
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  return <ProjectDetailContainer slug={slug} />;
}
