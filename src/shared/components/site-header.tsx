import Link from "next/link";
import { NAV_ITEMS } from "@/shared/constants/navigation.constants";
import { SITE } from "@/shared/constants/site.constants";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-heading text-lg font-semibold">
          {SITE.name}
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-1 sm:gap-4">
          <ul className="flex flex-wrap items-center gap-3 text-sm sm:gap-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
