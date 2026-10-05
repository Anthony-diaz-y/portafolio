export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: readonly string[];
  tags: readonly string[];
  year: number;
  repoUrl?: string;
  liveUrl?: string;
};
