import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import type { MessageField, MessageInput } from "../schemas/message.schema";
import { MessageFormFields } from "./message-form-fields";

function Harness({ errors }: { errors: Partial<Record<MessageField, string>> }) {
  const { register } = useForm<MessageInput>();
  return <MessageFormFields register={register} errors={errors} />;
}

describe("MessageFormFields", () => {
  it("renders labelled fields", () => {
    render(<Harness errors={{}} />);
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Correo electrónico")).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("links each error to its field", () => {
    render(<Harness errors={{ email: "Introduce un correo electrónico válido" }} />);
    const email = screen.getByLabelText("Correo electrónico");
    expect(email).toHaveAttribute("aria-invalid", "true");
    expect(email).toHaveAccessibleDescription("Introduce un correo electrónico válido");
  });
});
