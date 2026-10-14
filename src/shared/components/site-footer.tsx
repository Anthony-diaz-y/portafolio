import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/shared/constants/site.constants";
import { BrandMark } from "./brand-mark";

type SiteFooterProps = {
  year: number;
};

export function SiteFooter({ year }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <Link href="/" className="site-footer__signature" aria-label={`${SITE.name}, inicio`}>
          <BrandMark className="site-footer__mark" />
          <span><strong>{SITE.name}</strong><small>Desarrollo Full Stack · Lima, Perú</small></span>
        </Link>
        <p className="site-footer__copyright">© {year} {SITE.author}</p>
        <nav className="site-footer__links" aria-label="Enlaces externos">
          <a href={SITE.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={13} /></a>
          <a href={SITE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={13} /></a>
          <Link href="/contact">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}
