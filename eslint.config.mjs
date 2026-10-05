import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Screaming Modular boundaries. A later block replaces (not merges) a rule's
// options for the files it matches, so every block repeats the base patterns.
const basePatterns = [
  {
    group: ["@/modules/*/*", "!@/modules/*/server"],
    message: "Import other modules only via @/modules/<name> or @/modules/<name>/server.",
  },
  {
    group: ["@/app", "@/app/*"],
    message: "Nothing imports from app/: it only routes and composes.",
  },
];

const restrictImports = (...extra) => ({
  "no-restricted-imports": ["error", { patterns: [...basePatterns, ...extra] }],
});

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  { rules: restrictImports() },
  {
    files: ["src/shared/**"],
    rules: restrictImports({
      group: ["@/modules", "@/modules/*"],
      message: "shared/ must not depend on modules/. Pass data as props or move it to shared/.",
    }),
  },
  {
    files: ["src/modules/*/index.ts"],
    rules: restrictImports({
      group: ["**/queries/*", "**/actions/*", "**/services/*", "server-only"],
      message: "index.ts is the client-safe API: export queries, actions and services from server.ts.",
    }),
  },
  {
    files: ["src/modules/*/components/**"],
    rules: restrictImports({
      group: ["**/queries/*", "**/actions/*", "**/services/*", "**/containers/*", "@/modules/*/server", "server-only"],
      message: "components/ are presentational: receive data via props from a container.",
    }),
  },
  {
    files: ["src/modules/*/{queries,actions,services}/**"],
    rules: restrictImports({
      group: ["**/components/*", "**/containers/*", "**/hooks/*"],
      message: "Data layers must not import UI.",
    }),
  },
  {
    files: ["src/modules/*/utils/**", "src/shared/utils/**"],
    rules: restrictImports({
      group: ["react", "react-dom", "react/*", "next", "next/*", "**/services/*", "**/queries/*", "**/actions/*"],
      message: "utils/ must be pure: no React, Next or I/O.",
    }),
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "playwright-report/**",
    "test-results/**",
  ]),
]);

export default eslintConfig;
