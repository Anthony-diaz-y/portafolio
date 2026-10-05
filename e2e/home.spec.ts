import { expect, test } from "@playwright/test";

test("home renders the intro and featured projects", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Proyectos destacados" })).toBeVisible();
});

test("project detail is reachable from the list", async ({ page }) => {
  await page.goto("/projects");
  await page.getByRole("link", { name: "Gestor de tareas colaborativo" }).click();
  await expect(page).toHaveURL(/\/projects\/gestor-de-tareas$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Gestor de tareas colaborativo");
});

test("unknown blog post returns the not-found page", async ({ page }) => {
  const response = await page.goto("/blog/no-existe");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Página no encontrada" })).toBeVisible();
});
