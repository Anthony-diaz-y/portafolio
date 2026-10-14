import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Profile } from "../types/profile.types";
import { ProfileIntro } from "./profile-intro";

const profile: Profile = {
  name: "Ana",
  role: "Desarrolladora",
  location: "Lima, Perú",
  tagline: "Lema",
  bio: [],
  skillGroups: [],
  languages: [],
};

describe("ProfileIntro", () => {
  it("greets with the name and links to projects and contact", () => {
    render(<ProfileIntro profile={profile} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hola, soy Ana.");
    expect(screen.getByRole("link", { name: "Ver proyectos" })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Hablemos" })).toHaveAttribute("href", "/contact");
  });
});
