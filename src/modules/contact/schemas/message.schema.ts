import { z } from "zod";

// Shared by the client form (React Hook Form) and the Server Action.
export const messageSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre (mínimo 2 caracteres)").max(100, "El nombre es demasiado largo"),
  email: z.string().trim().pipe(z.email("Introduce un correo electrónico válido")),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje no puede superar los 2000 caracteres"),
});

export type MessageInput = z.infer<typeof messageSchema>;
export type MessageField = keyof MessageInput;
