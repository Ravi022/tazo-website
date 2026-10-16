import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children = "Book a demo",
  light = false,
}: {
  href: string;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={light ? "button button-light" : "button"} href={href}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
