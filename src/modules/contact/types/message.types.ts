export type ActionResult =
  | { ok: true }
  | { ok: false; errors: Partial<Record<string, string[]>> };
