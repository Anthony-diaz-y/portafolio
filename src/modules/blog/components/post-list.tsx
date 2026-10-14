import Link from "next/link";
import { SITE } from "@/shared/constants/site.constants";
import type { Post } from "../types/post.types";
import { formatPostDate } from "../utils/post.utils";

type PostListProps = {
  posts: readonly Post[];
};

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <div className="project-note"><span className="project-note__mark" aria-hidden="true">✳</span><p>Aún no hay artículos publicados.</p></div>;
  }

  return (
    <ul className="divide-y">
      {posts.map((post) => (
        <li key={post.id} className="space-y-1 py-5 first:pt-0">
          <time dateTime={post.publishedAt} className="text-sm text-muted-foreground">
            {formatPostDate(post.publishedAt, SITE.locale)}
          </time>
          <h2 className="font-heading text-xl font-semibold">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
