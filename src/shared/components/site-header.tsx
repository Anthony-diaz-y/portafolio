import Link from "next/link";
import { NAV_ITEMS } from "@/shared/constants/navigation.constants";
import { SITE } from "@/shared/constants/site.constants";
import { BrandMark } from "./brand-mark";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link href="/" className="site-brand" aria-label={`${SITE.name}, inicio`}>
          <span className="site-brand__mark"><BrandMark className="site-brand__glyph" /></span>
          <span className="site-brand__name">{SITE.name}</span>
        </Link>
        <nav aria-label="Principal" className="site-nav site-nav--desktop">
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="site-nav__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
        <div className="site-mobile-controls">
          <details className="site-mobile-nav">
            <summary><span>Menú</span><span aria-hidden="true">☰</span></summary>
            <nav aria-label="Principal" className="site-mobile-nav__panel">
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="site-mobile-nav__link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
