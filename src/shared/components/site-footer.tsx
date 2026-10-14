import { SITE } from "@/shared/constants/site.constants";

type SiteFooterProps = {
  year: number;
};

export function SiteFooter({ year }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <p>© {year} {SITE.author}</p>
        <p className="site-footer__note">Diseñado con cuidado <span aria-hidden="true">✳</span></p>
      </div>
    </footer>
  );
}
