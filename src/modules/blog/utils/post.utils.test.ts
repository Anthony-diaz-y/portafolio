import { describe, expect, it } from "vitest";
import { formatPostDate, sortByPublishedDesc } from "./post.utils";

describe("sortByPublishedDesc", () => {
  it("puts the newest first without mutating the input", () => {
    const input = [{ publishedAt: "2026-01-10" }, { publishedAt: "2026-03-01" }];
    expect(sortByPublishedDesc(input).map((i) => i.publishedAt)).toEqual(["2026-03-01", "2026-01-10"]);
    expect(input[0]?.publishedAt).toBe("2026-01-10");
  });
});

describe("formatPostDate", () => {
  it("formats the date in the given locale without shifting the day", () => {
    expect(formatPostDate("2026-09-01", "es-ES")).toBe("1 de septiembre de 2026");
  });
});
