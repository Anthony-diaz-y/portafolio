import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// `server-only` throws outside the react-server condition; make it a no-op in unit tests.
vi.mock("server-only", () => ({}));

afterEach(() => {
  cleanup();
});
