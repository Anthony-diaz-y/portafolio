// Public, server-only API of the projects module (queries, actions, async containers).
import "server-only";

export { getProjects } from "./queries/get-projects.query";
export { getProjectBySlug } from "./queries/get-project-by-slug.query";
export { ProjectsContainer } from "./containers/projects-container";
export { ProjectDetailContainer } from "./containers/project-detail-container";
