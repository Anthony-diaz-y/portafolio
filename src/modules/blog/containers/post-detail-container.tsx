import { notFound } from "next/navigation";
import { PostDetail } from "../components/post-detail";
import { getPostBySlug } from "../queries/get-post-by-slug.query";

export async function PostDetailContainer({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return <PostDetail post={post} />;
}
