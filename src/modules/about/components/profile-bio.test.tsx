import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Profile } from "../types/profile.types";
import { ProfileBio } from "./profile-bio";

const profile: Profile = {
  name: "Ana",
  role: "Desarrolladora",
  location: "Lima, Perú",
  tagline: "Lema",
  bio: ["Primer párrafo"],
  skillGroups: [{ title: "Frontend", items: ["React", "TypeScript"] }],
  languages: [],
};

describe("ProfileBio", () => {
  it("renders the bio, skill group, education, and LinkedIn link", () => {
    render(<ProfileBio profile={profile} />);
    expect(screen.getByText("Primer párrafo")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Habilidades" })).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Formación académica" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Ver perfil en LinkedIn/ })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/anthony-daniel-diaz-yacsahuanga-2408b3399/",
    );
  });
});
