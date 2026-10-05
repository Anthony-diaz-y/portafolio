import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Project } from "../types/project.types";
import { ProjectList } from "./project-list";

const project: Project = {
  id: "1",
  slug: "primero",
  title: "Primero",
  summary: "Resumen",
  description: [],
  tags: ["Next.js"],
  year: 2026,
};

describe("ProjectList", () => {
  it("renders one linked card per project", () => {
    render(<ProjectList projects={[project]} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByRole("link", { name: "Primero" })).toHaveAttribute("href", "/projects/primero");
  });

  it("shows an empty state", () => {
    render(<ProjectList projects={[]} />);
    expect(screen.getByText("Todavía no hay proyectos publicados.")).toBeInTheDocument();
  });
});
