import { beforeEach, describe, expect, it, vi } from "vitest";
import { saveMessage } from "../services/messages.service";
import { submitMessage } from "./submit-message.action";

vi.mock("../services/messages.service", () => ({ saveMessage: vi.fn() }));

function toFormData(values: Record<string, string>): FormData {
  const formData = new FormData();
  for (const [key, value] of Object.entries(values)) formData.append(key, value);
  return formData;
}

describe("submitMessage", () => {
  beforeEach(() => {
    vi.mocked(saveMessage).mockReset();
  });

  it("returns field errors and does not save invalid input", async () => {
    const result = await submitMessage(null, toFormData({ name: "A", email: "no-es-email", message: "corto" }));

    expect(result.ok).toBe(false);
    expect(result.ok ? undefined : Object.keys(result.errors).sort()).toEqual(["email", "message", "name"]);
    expect(saveMessage).not.toHaveBeenCalled();
  });

  it("saves trimmed input and returns ok", async () => {
    const result = await submitMessage(
      null,
      toFormData({ name: " Ana ", email: "ana@example.com", message: "Hola, me interesa tu trabajo." }),
    );

    expect(result).toEqual({ ok: true });
    expect(saveMessage).toHaveBeenCalledWith({
      name: "Ana",
      email: "ana@example.com",
      message: "Hola, me interesa tu trabajo.",
    });
  });
});
