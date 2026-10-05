export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  content: readonly string[];
};
