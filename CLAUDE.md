@AGENTS.md

# Project rules

portafolio-pro: portfolio — personal site with projects, blog, about and a contact form.
Stack: Next.js 16 App Router (Turbopack) · React 19 · TypeScript strict · Tailwind v4 (CSS-first, no tailwind.config) · shadcn/ui (Radix) · next-themes · Zod · React Hook Form · pnpm · Vitest + RTL · Playwright.

## Communication
- Reply to me in Spanish. Code, comments, commits and file names in English.
- Visible UI text (headings, buttons, labels, errors, metadata, content) in Spanish; `<html lang="es">`.

## Architecture: Screaming Modular
- `src/app/`: routing only (layout, page, loading, error, not-found). Compose modules; no logic, no fetch.
- `src/modules/<domain>/`: one folder per business domain. Current modules: projects, blog, about, contact.
  - `components/` presentational (props → JSX, no fetching) · `containers/` orchestrate data and pass props
  - `queries/` server-only reads (`import "server-only"`, `React.cache`) · `actions/` Server Actions validated with Zod
  - `services/` external adapters, the only layer that knows the data source (used only by queries/actions; may read `data/`) · `schemas/` Zod · `types/` · `constants/` (`as const`) · `utils/` pure · `data/` static content
  - `index.ts` = client-safe public API · `server.ts` = server-only public API. Never mix them.
- `src/shared/`: `ui/` (shadcn, wrap don't edit) · `components/` · `lib/` · `hooks/` · `utils/` · `constants/` · `types/` · `config/` (Zod-validated env).
- Create only folders that are used. New module: `node ~/.claude/skills/front-nextjs/scripts/new-module.mjs <name> --with <layers>` or `/front-nextjs module <name>`.
- projects and blog are "static now, CMS later": content lives in `data/`, read only through `services/`.

## Dependency rules (enforced by ESLint `no-restricted-imports`)
- app → modules (only via `index.ts`/`server.ts`) and shared.
- Other modules: import only `@/modules/<name>` or `@/modules/<name>/server`. Never deep paths.
- containers → components, hooks, queries, actions. queries/actions → services, schemas, utils, constants, types. services → data, schemas, types.
- components → utils, constants, types, shared/ui. Nothing imports from `app/`. `shared/` never imports `modules/`.
- Promote to `shared/` only when 2+ modules use it.

## React / Next
- App Router only. Server Components by default; `"use client"` only on leaves that need state, effects or events.
- Read the relevant guide in `node_modules/next/dist/docs/` before using a Next API.
- No `any`: use `unknown` + narrowing or Zod.

## Forms
- The `"use client"` form container validates with the module's Zod schema via React Hook Form (`zodResolver`), then calls its Server Action through `useActionState`. The action validates again with the same schema.
- A client file imports the action relatively from its own module; never import `@/modules/<x>/server` from a client file.

## Naming
- kebab-case files, one PascalCase component per file, hooks `use-*.ts`.
- Suffixes: `.action.ts` `.query.ts` `.schema.ts` `.service.ts` `.types.ts` `.constants.ts` `.utils.ts` `.data.ts`. Alias `@/*` → `src/*`.

## Testing
- Unit/components: Vitest + RTL, colocated `*.test.ts(x)`. Async Server Components and flows: Playwright in `e2e/`.

## Definition of done
Before saying a task is finished, run and pass, one by one:
`pnpm typecheck` · `pnpm lint` · `pnpm test` (and `pnpm build` for structural changes).
Shell is PowerShell: don't chain commands with `&&`.
