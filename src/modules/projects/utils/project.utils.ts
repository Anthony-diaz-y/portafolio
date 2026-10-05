// Pure helpers: no React, no I/O.
export function sortByYearDesc<T extends { year: number; title: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}
