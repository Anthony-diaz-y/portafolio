import "server-only";
import { cache } from "react";
import type { Post } from "../types/post.types";
import { fetchPosts } from "../services/posts.service";
import { sortByPublishedDesc } from "../utils/post.utils";

export const getPosts = cache(async (): Promise<Post[]> => sortByPublishedDesc(await fetchPosts()));
