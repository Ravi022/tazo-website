import { TextLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AiSolutions() {
  return (
    <section className="ai-section wrap">
      <div>
        <Eyebrow>AI SOLUTIONS BY TAZO</Eyebrow>
        <h2>
          Intelligence with
          <br />
          <span>business purpose.</span>
        </h2>
      </div>
      <div className="ai-section-copy">
        <p className="large-copy">AI solutions and enterprise software. Brought together around your business.</p>
        <p>
          TAZO is an AI solutions and enterprise software company focused on business digitalization. We start with
          your operational challenges and explore how AI can fit into your processes, data and existing systems.
        </p>
        <TextLink href="/contact">Discuss your AI requirements</TextLink>
      </div>
    </section>
  );
}
