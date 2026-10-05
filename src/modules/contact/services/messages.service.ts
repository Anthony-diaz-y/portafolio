import "server-only";
import type { MessageInput } from "../schemas/message.schema";

// Adapter to the delivery channel. Only actions/ use it.
export async function saveMessage(input: MessageInput): Promise<void> {
  // TODO: send through an email provider (Resend, SES…) and validate its key in shared/config/env.ts.
  void input;
}
