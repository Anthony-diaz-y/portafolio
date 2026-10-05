import type { Metadata } from "next";
import { ProfileBioContainer } from "@/modules/about";
import { PageHeader } from "@/shared/components/page-header";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Quién soy, cómo trabajo y con qué tecnologías.",
};

export default function Page() {
  return (
    <>
      <PageHeader title="Sobre mí" />
      <ProfileBioContainer />
    </>
  );
}
