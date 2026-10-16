import { TextLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/eyebrow";

export function CompanyTeaser() {
  return (
    <section className="company-teaser">
      <div className="wrap">
        <Eyebrow>TECHNOLOGY MEETS BUSINESS UNDERSTANDING</Eyebrow>
        <div className="company-teaser-grid">
          <h2>
            Global perspective.
            <br />
            Real-world purpose.
          </h2>
          <div>
            <p>
              Technology expertise supported by leadership with 26+ years of business experience. Engineers from the
              University of Illinois, IITs, NITs and BITS.
            </p>
            <TextLink href="/about">Meet the people behind TAZO</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
