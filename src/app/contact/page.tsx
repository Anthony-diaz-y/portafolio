import type { Metadata } from "next";
import { MessageFormContainer } from "@/modules/contact";
import { PageHeader } from "@/shared/components/page-header";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbeme para hablar de un proyecto o colaboración.",
};

export default function Page() {
  return (
    <>
      <PageHeader title="Contacto" description="¿Tienes un proyecto en mente? Escríbeme y te responderé pronto." />
      <MessageFormContainer />
    </>
  );
}
