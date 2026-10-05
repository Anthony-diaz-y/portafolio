import "server-only";
import { cache } from "react";
import type { Post } from "../types/post.types";
import { getPosts } from "./get-posts.query";

export const getPostBySlug = cache(async (slug: string): Promise<Post | undefined> => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
});
