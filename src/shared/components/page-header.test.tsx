import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PageHeader } from "./page-header";

describe("PageHeader", () => {
  it("renders the title as the page heading and the optional description", () => {
    render(<PageHeader title="Proyectos" description="Lo que he construido" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Proyectos");
    expect(screen.getByText("Lo que he construido")).toBeInTheDocument();
  });
});
