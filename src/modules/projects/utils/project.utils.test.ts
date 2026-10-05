import { describe, expect, it } from "vitest";
import { sortByYearDesc } from "./project.utils";

describe("sortByYearDesc", () => {
  it("puts the newest first and breaks ties by title, without mutating the input", () => {
    const input = [
      { year: 2024, title: "c" },
      { year: 2026, title: "b" },
      { year: 2026, title: "a" },
    ];
    expect(sortByYearDesc(input).map((i) => i.title)).toEqual(["a", "b", "c"]);
    expect(input[0]?.title).toBe("c");
  });
});
