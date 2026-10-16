import { principles } from "@/content/company";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ConnectedAdvantage() {
  return (
    <section className="perspective wrap" id="perspective">
      <div>
        <Eyebrow>THE CONNECTED ADVANTAGE</Eyebrow>
        <h2>
          Business is complex.
          <br />
          <span>
            Your systems should
            <br />
            bring clarity.
          </span>
        </h2>
      </div>
      <div className="perspective-right">
        <p className="large-copy">When teams, workflows and data come together, a clearer picture emerges.</p>
        <p>
          TAZO digitalizes business processes with integrated software that addresses real operational challenges.
          Connect the work happening across your business to the decisions that move it forward.
        </p>
        <div className="principles">
          {principles.map((principle) => (
            <div key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
