import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro wrap">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
