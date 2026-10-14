import type { Metadata } from "next";
import { ProfileBioContainer } from "@/modules/about";
import { PageHeader } from "@/shared/components/page-header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Perfil, formación académica, tecnologías e idiomas de Anthony Díaz.",
};

export default function Page() {
  return (
    <>
      <PageHeader title="Sobre mí" description="Desarrollo full stack con una mirada puesta en los procesos, los datos y las personas." />
      <ProfileBioContainer />
      <Link href="/experience" className="text-link about-experience-link">
        Ver experiencia profesional <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </>
  );
}
