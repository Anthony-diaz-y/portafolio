import { SITE } from "@/shared/constants/site.constants";

type SiteFooterProps = {
  year: number;
};

export function SiteFooter({ year }: SiteFooterProps) {
  return (
    <footer className="border-t">
      <p className="mx-auto w-full max-w-4xl px-4 py-6 text-sm text-muted-foreground">
        © {year} {SITE.author}. Hecho con Next.js.
      </p>
    </footer>
  );
}
