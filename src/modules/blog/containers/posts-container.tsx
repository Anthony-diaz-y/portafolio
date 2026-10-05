import { PostList } from "../components/post-list";
import { getPosts } from "../queries/get-posts.query";

// Async Server Component: fetches and passes props down.
export async function PostsContainer() {
  const posts = await getPosts();
  return <PostList posts={posts} />;
}
