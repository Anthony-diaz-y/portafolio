import "server-only";
import type { Post } from "../types/post.types";
import { postsData } from "../data/posts.data";

// Adapter to the external source (API, CMS, email). Only queries/ and actions/ use it.
export async function fetchPosts(): Promise<readonly Post[]> {
  // TODO: replace with the real source (CMS/API).
  return postsData;
}
