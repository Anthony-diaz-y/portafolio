import type { Metadata } from "next";
import { getPostBySlug, getPosts, PostDetailContainer } from "@/modules/blog/server";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : { title: "Artículo no encontrado" };
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  return <PostDetailContainer slug={slug} />;
}
