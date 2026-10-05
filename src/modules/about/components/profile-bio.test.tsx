import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Profile } from "../types/profile.types";
import { ProfileBio } from "./profile-bio";

const profile: Profile = {
  name: "Ana",
  role: "Desarrolladora",
  tagline: "Lema",
  bio: ["Primer párrafo"],
  skills: ["React", "TypeScript"],
};

describe("ProfileBio", () => {
  it("renders the bio and one item per skill", () => {
    render(<ProfileBio profile={profile} />);
    expect(screen.getByText("Primer párrafo")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Habilidades" })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
