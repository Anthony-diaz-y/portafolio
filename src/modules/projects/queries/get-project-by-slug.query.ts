import "server-only";
import { cache } from "react";
import type { Project } from "../types/project.types";
import { getProjects } from "./get-projects.query";

export const getProjectBySlug = cache(async (slug: string): Promise<Project | undefined> => {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
});
