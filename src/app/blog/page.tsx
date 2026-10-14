import type { Metadata } from "next";
import { PostsContainer } from "@/modules/blog/server";
import { PageHeader } from "@/shared/components/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas y artículos de Anthony Díaz.",
};

export default function Page() {
  return (
    <>
      <PageHeader title="Blog" description="Notas, ideas y aprendizajes." />
      <PostsContainer />
    </>
  );
}
