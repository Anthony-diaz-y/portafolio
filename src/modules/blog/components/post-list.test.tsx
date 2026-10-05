import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Post } from "../types/post.types";
import { PostList } from "./post-list";

const post: Post = {
  id: "1",
  slug: "primero",
  title: "Primero",
  excerpt: "Resumen",
  publishedAt: "2026-09-01",
  content: [],
};

describe("PostList", () => {
  it("renders a linked title and the formatted date per post", () => {
    render(<PostList posts={[post]} />);
    expect(screen.getByRole("link", { name: "Primero" })).toHaveAttribute("href", "/blog/primero");
    expect(screen.getByText("1 de septiembre de 2026")).toHaveAttribute("datetime", "2026-09-01");
  });

  it("shows an empty state", () => {
    render(<PostList posts={[]} />);
    expect(screen.getByText("Todavía no hay artículos publicados.")).toBeInTheDocument();
  });
});
