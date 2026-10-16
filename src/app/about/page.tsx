import type { Metadata } from "next";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageIntro } from "@/components/ui/page-intro";
import { leaders, teamDisciplines } from "@/content/company";

export const metadata: Metadata = {
  title: "About TAZO",
  description:
    "TAZO is an AI solutions and enterprise software company focused on business digitalization.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="THE COMPANY"
        title={
          <>
            Technology with
            <br />
            <span>an operational purpose.</span>
          </>
        }
      >
        <p>
          TAZO is an AI solutions and enterprise software company focused on business digitalization. Our focus is the
          work behind the business: the workflows, the people and the decisions that connect them.
        </p>
        <div className="positioning-large">
          <span>Made in USA.</span>
          <span>Indian pricing.</span>
        </div>
      </PageIntro>

      <section className="mission-section wrap">
        <div>
          <Eyebrow>OUR MISSION</Eyebrow>
          <h2>
            Simplify.
            <br />
            Digitalize.
            <br />
            Connect.
          </h2>
          <p>
            To simplify and digitalize business processes through integrated software solutions that automate
            workflows, connect teams and data, and solve real operational challenges.
          </p>
        </div>
        <div>
          <Eyebrow>OUR VISION</Eyebrow>
          <h2>
            Transformation
            <br />
            within reach.
          </h2>
          <p>
            To make digital transformation accessible to businesses of every size, empowering them to operate smarter,
            make informed decisions, and grow with confidence.
          </p>
        </div>
      </section>

      <section className="leadership wrap">
        <Eyebrow>OUR LEADERSHIP</Eyebrow>
        <h2>
          Experience that
          <br />
          sees the whole picture.
        </h2>
        <div className="leader-grid">
          {leaders.map((leader) => (
            <article key={leader.name}>
              <img src={leader.photo} alt={leader.name} width={leader.width} height={leader.height} loading="lazy" />
              <div>
                <p className="eyebrow">{leader.role}</p>
                <h3>{leader.name}</h3>
                {leader.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {"note" in leader ? <small>{leader.note}</small> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-band">
        <div className="wrap">
          <Eyebrow>DEVELOPMENT EXPERTISE</Eyebrow>
          <h2>
            Thoughtful architecture.
            <br />
            Connected delivery.
          </h2>
          <p>Our development team includes engineers from the University of Illinois (USA), IITs, NITs and BITS.</p>
          <div>
            {teamDisciplines.map((discipline) => (
              <span key={discipline}>{discipline}</span>
            ))}
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
