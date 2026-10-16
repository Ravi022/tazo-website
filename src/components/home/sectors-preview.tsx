import { SectorList } from "@/components/sectors/sector-list";
import { TextLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/eyebrow";

export function SectorsPreview() {
  return (
    <section className="sectors-home wrap">
      <div className="section-heading">
        <div>
          <Eyebrow>SECTORS WE SERVE</Eyebrow>
          <h2>
            Across industries.
            <br />
            <span>Connected by TAZO.</span>
          </h2>
        </div>
        <p>
          Serving enterprises across
          <br />
          diverse industries.
        </p>
      </div>
      <SectorList />
      <div className="sectors-more">
        <TextLink href="/sectors">Explore the sectors we serve</TextLink>
      </div>
    </section>
  );
}
