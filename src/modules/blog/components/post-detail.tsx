import Link from "next/link";
import { SITE } from "@/shared/constants/site.constants";
import type { Post } from "../types/post.types";
import { formatPostDate } from "../utils/post.utils";

type PostDetailProps = {
  post: Post;
};

export function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <time dateTime={post.publishedAt} className="text-sm text-muted-foreground">
          {formatPostDate(post.publishedAt, SITE.locale)}
        </time>
        <h1 className="font-heading text-3xl font-bold tracking-tight">{post.title}</h1>
        <p className="text-lg text-muted-foreground">{post.excerpt}</p>
      </header>
      <div className="space-y-4 leading-relaxed">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Link href="/blog" className="inline-block text-sm text-muted-foreground hover:text-foreground">
        ← Todos los artículos
      </Link>
    </article>
  );
}
