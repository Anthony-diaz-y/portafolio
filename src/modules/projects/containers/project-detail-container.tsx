import { notFound } from "next/navigation";
import { ProjectDetail } from "../components/project-detail";
import { getProjects } from "../queries/get-projects.query";

export async function ProjectDetailContainer({ slug }: { slug: string }) {
  const projects = await getProjects();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <ProjectDetail
      project={project}
      nextProject={nextProject}
      projectNumber={projectIndex + 1}
      projectCount={projects.length}
    />
  );
}
