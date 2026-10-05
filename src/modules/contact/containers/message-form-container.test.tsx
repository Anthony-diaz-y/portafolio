import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { submitMessage } from "../actions/submit-message.action";
import { MessageFormContainer } from "./message-form-container";

vi.mock("../actions/submit-message.action", () => ({ submitMessage: vi.fn() }));

describe("MessageFormContainer", () => {
  beforeEach(() => {
    vi.mocked(submitMessage).mockReset();
  });

  it("shows client-side errors and does not call the action", async () => {
    const user = userEvent.setup();
    render(<MessageFormContainer />);

    await user.click(screen.getByRole("button", { name: "Enviar mensaje" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(3);
    expect(submitMessage).not.toHaveBeenCalled();
  });

  it("submits valid input to the Server Action and confirms", async () => {
    vi.mocked(submitMessage).mockResolvedValue({ ok: true });
    const user = userEvent.setup();
    render(<MessageFormContainer />);

    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Correo electrónico"), "ana@example.com");
    await user.type(screen.getByLabelText("Mensaje"), "Hola, me interesa tu trabajo.");
    await user.click(screen.getByRole("button", { name: "Enviar mensaje" }));

    expect(await screen.findByRole("status")).toHaveTextContent("¡Gracias!");
    const formData = vi.mocked(submitMessage).mock.calls[0]?.[1];
    expect(formData?.get("email")).toBe("ana@example.com");
    await waitFor(() => expect(screen.getByLabelText("Nombre")).toHaveValue(""));
  });
});
