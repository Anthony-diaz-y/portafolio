import type { Metadata } from "next";
import { PostsContainer } from "@/modules/blog/server";
import { PageHeader } from "@/shared/components/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre desarrollo frontend, arquitectura y rendimiento.",
};

export default function Page() {
  return (
    <>
      <PageHeader title="Blog" description="Artículos sobre desarrollo frontend, arquitectura y rendimiento." />
      <PostsContainer />
    </>
  );
}
