import { ProjectList } from "../components/project-list";
import { getProjects } from "../queries/get-projects.query";

type ProjectsContainerProps = {
  limit?: number;
};

// Async Server Component: fetches and passes props down.
export async function ProjectsContainer({ limit }: ProjectsContainerProps) {
  const projects = await getProjects();
  return <ProjectList projects={limit === undefined ? projects : projects.slice(0, limit)} />;
}
