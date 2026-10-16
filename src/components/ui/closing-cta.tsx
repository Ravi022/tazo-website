import { ButtonLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ClosingCta() {
  return (
    <section className="closing wrap">
      <div>
        <Eyebrow>LET’S CONNECT THE DOTS</Eyebrow>
        <h2>
          Your next chapter.
          <br />
          <span>More connected.</span>
        </h2>
      </div>
      <div>
        <p>Tell us where your operations could work better. Let’s explore the right software together.</p>
        <ButtonLink href="/contact">Start a conversation</ButtonLink>
      </div>
    </section>
  );
}
