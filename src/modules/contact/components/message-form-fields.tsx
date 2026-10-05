import type { UseFormRegister } from "react-hook-form";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import type { MessageField, MessageInput } from "../schemas/message.schema";

type MessageFormFieldsProps = {
  register: UseFormRegister<MessageInput>;
  errors: Partial<Record<MessageField, string>>;
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-sm text-destructive">
      {message}
    </p>
  );
}

// Presentational fields; the client container owns state, validation and submission.
export function MessageFormFields({ register, errors }: MessageFormFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="message-name">Nombre</Label>
        <Input
          id="message-name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "message-name-error" : undefined}
          {...register("name")}
        />
        <FieldError id="message-name-error" message={errors.name} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message-email">Correo electrónico</Label>
        <Input
          id="message-email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "message-email-error" : undefined}
          {...register("email")}
        />
        <FieldError id="message-email-error" message={errors.email} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message-body">Mensaje</Label>
        <Textarea
          id="message-body"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-body-error" : undefined}
          {...register("message")}
        />
        <FieldError id="message-body-error" message={errors.message} />
      </div>
    </>
  );
}
