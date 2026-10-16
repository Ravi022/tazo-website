"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPath, site } from "@/config/site";
import type { MouseEvent } from "react";

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="nav-wrap">
        <Link href="/" aria-label="TAZO home" className="brand">
          <img src={site.logo.src} alt="TAZO" width={site.logo.width} height={site.logo.height} />
          <span>AI solutions & enterprise software.</span>
        </Link>
        <nav className="nav desktop-nav" aria-label="Main navigation">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="nav-demo" href="/contact">
            Book a demo
            <ArrowUpRight size={16} />
          </Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation">
            <Menu size={23} />
          </summary>
          <nav aria-label="Mobile navigation">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link className="nav-demo" href="/contact" onClick={closeMobileMenu}>
              Book a demo
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
