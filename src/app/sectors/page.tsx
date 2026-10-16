import type { Metadata } from "next";
import { SectorList } from "@/components/sectors/sector-list";
import { ClosingCta } from "@/components/ui/closing-cta";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "Sectors We Serve",
  description:
    "Serving enterprises across diverse industries: iron, steel, cement and power, pipes and fittings, mines, energy, embedded, and rubber and chemicals.",
};

export default function SectorsPage() {
  return (
    <>
      <PageIntro
        eyebrow="SECTORS WE SERVE"
        title={
          <>
            Across industries.
            <br />
            <span>Connected by TAZO.</span>
          </>
        }
      >
        <p>
          Serving enterprises across diverse industries. AI solutions and integrated software for a more connected
          business.
        </p>
      </PageIntro>
      <section className="sectors-page wrap" aria-label="Sectors and organizations we serve">
        <SectorList />
      </section>
      <section className="customer-statement wrap">
        <p>
          Different industries.
          <br />
          A shared direction.
        </p>
        <h2>
          Integrated Solutions.
          <br />
          Connected Thinking.
        </h2>
      </section>
      <ClosingCta />
    </>
  );
}
