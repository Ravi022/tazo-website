import type { Metadata } from "next";
import { ClosingCta } from "@/components/ui/closing-cta";
import { PageIntro } from "@/components/ui/page-intro";
import { integrations } from "@/content/technology";

export const metadata: Metadata = {
  title: "Technology & integrations",
  description:
    "Enterprise integration and cloud infrastructure that connect operational workflows with your wider technology ecosystem.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="TECHNOLOGY & INTEGRATIONS"
        title={
          <>
            Connected systems.
            <br />
            <span>Better business visibility.</span>
          </>
        }
      >
        <p>
          Enterprise integration and cloud infrastructure that connect operational workflows with your wider technology
          ecosystem.
        </p>
      </PageIntro>

      <section className="integration-rows wrap">
        {integrations.map((integration) => (
          <article key={integration.name}>
            <div className="integration-logo">
              <img src={integration.logo} alt={integration.name} width={integration.width} height={integration.height} />
            </div>
            <div>
              <span className="eyebrow">
                {integration.number} / {integration.label}
              </span>
              <h2>
                {integration.heading[0]}
                <br />
                {integration.heading[1]}
              </h2>
              <p>{integration.description}</p>
              <ul>
                {integration.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="technology-note wrap">
        <span className="eyebrow">CONSIDERED IMPLEMENTATION</span>
        <h2>
          Your requirements
          <br />
          shape the connection.
        </h2>
        <p>
          Integration and deployment are tailored to each product and business requirement. Discuss your existing
          systems, operational workflows and deployment needs with TAZO.
        </p>
      </section>
      <ClosingCta />
    </>
  );
}
