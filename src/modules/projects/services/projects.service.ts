import "server-only";
import type { Project } from "../types/project.types";
import { projectsData } from "../data/projects.data";

// Adapter to the external source (API, CMS, email). Only queries/ and actions/ use it.
export async function fetchProjects(): Promise<readonly Project[]> {
  // TODO: replace with the real source (CMS/API).
  return projectsData;
}
