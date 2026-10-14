export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: readonly string[];
  tags: readonly string[];
  year: number;
  caseStudy?: {
    challenge: string;
    approach: readonly string[];
    outcome: string;
  };
  repoUrl?: string;
  liveUrl?: string;
};
