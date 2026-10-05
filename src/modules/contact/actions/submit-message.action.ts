"use server";

import { z } from "zod";
import { messageSchema } from "../schemas/message.schema";
import { saveMessage } from "../services/messages.service";
import type { ActionResult } from "../types/message.types";

// Signature fits useActionState(submitMessage, null).
export async function submitMessage(_prev: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const parsed = messageSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, errors: z.flattenError(parsed.error).fieldErrors };
  }
  await saveMessage(parsed.data);
  return { ok: true };
}
