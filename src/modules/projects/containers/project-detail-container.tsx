import { notFound } from "next/navigation";
import { ProjectDetail } from "../components/project-detail";
import { getProjectBySlug } from "../queries/get-project-by-slug.query";

export async function ProjectDetailContainer({ slug }: { slug: string }) {
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
