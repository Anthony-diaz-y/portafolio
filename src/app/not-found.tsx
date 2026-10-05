import Link from "next/link";
import { PageHeader } from "@/shared/components/page-header";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Página no encontrada" description="Lo que buscas no existe o se ha movido." />
      <Link href="/" className="text-sm underline">
        Volver al inicio
      </Link>
    </>
  );
}
