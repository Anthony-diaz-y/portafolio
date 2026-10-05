// Pure helpers: no React, no I/O.
export function sortByPublishedDesc<T extends { publishedAt: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

// Formats a YYYY-MM-DD date in UTC so server and client render the same day.
export function formatPostDate(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(isoDate));
}
