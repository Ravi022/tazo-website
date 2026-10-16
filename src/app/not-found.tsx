import { ButtonLink } from "@/components/ui/links";

export default function NotFound() {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>The page you’re looking for is not here.</p>
      <ButtonLink href="/">Return home</ButtonLink>
    </section>
  );
}
