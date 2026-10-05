"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { submitMessage } from "../actions/submit-message.action";
import { MessageFormFields } from "../components/message-form-fields";
import { messageSchema, type MessageInput } from "../schemas/message.schema";

const EMPTY_MESSAGE: MessageInput = { name: "", email: "", message: "" };

// Client container: validates with the shared Zod schema, then calls the Server Action (which validates again).
export function MessageFormContainer() {
  const [state, formAction, isPending] = useActionState(submitMessage, null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageInput>({ resolver: zodResolver(messageSchema), defaultValues: EMPTY_MESSAGE });

  useEffect(() => {
    if (state?.ok) reset(EMPTY_MESSAGE);
  }, [state, reset]);

  const onValid = (values: MessageInput) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) formData.append(key, value);
    startTransition(() => formAction(formData));
  };

  const serverErrors = state && !state.ok ? state.errors : undefined;

  return (
    <form noValidate onSubmit={handleSubmit(onValid)} className="max-w-xl space-y-5">
      <MessageFormFields
        register={register}
        errors={{
          name: errors.name?.message ?? serverErrors?.name?.[0],
          email: errors.email?.message ?? serverErrors?.email?.[0],
          message: errors.message?.message ?? serverErrors?.message?.[0],
        }}
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Enviando…" : "Enviar mensaje"}
      </Button>
      {state?.ok && (
        <p role="status" className="text-sm text-muted-foreground">
          ¡Gracias! Te responderé lo antes posible.
        </p>
      )}
    </form>
  );
}
