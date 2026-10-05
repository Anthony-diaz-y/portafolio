import "server-only";
import { cache } from "react";
import type { Project } from "../types/project.types";
import { fetchProjects } from "../services/projects.service";
import { sortByYearDesc } from "../utils/project.utils";

export const getProjects = cache(async (): Promise<Project[]> => sortByYearDesc(await fetchProjects()));
