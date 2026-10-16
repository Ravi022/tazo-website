import { systemMap } from "@/content/technology";
import { TextLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/eyebrow";

export function TechnologyTeaser() {
  return (
    <section className="technology-teaser wrap">
      <div>
        <Eyebrow>BUILT TO CONNECT</Eyebrow>
        <h2>
          A part of your
          <br />
          bigger picture.
        </h2>
        <p>
          Connect operational workflows with enterprise data and finance processes. Support software delivery with
          cloud infrastructure, deployment and monitoring.
        </p>
        <TextLink href="/technology">Technology & integrations</TextLink>
      </div>
      <div className="system-map">
        <div className="system-top">
          {systemMap.inputs.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className="map-lines">
          {systemMap.lanes.map((lane) => (
            <span key={lane}>{lane}</span>
          ))}
        </div>
        <div className="map-core">
          <img src="/brand/tazo.jpeg" alt="TAZO" width={64} height={68} />
          <span>CONNECTED ENTERPRISE</span>
        </div>
        <div className="map-bottom">
          {systemMap.partners.map((partner) => (
            <div key={partner.name}>
              <img src={partner.logo} alt={partner.name} />
              <small>{partner.caption}</small>
            </div>
          ))}
        </div>
        <p>Integration tailored to your product and business requirements.</p>
      </div>
    </section>
  );
}
