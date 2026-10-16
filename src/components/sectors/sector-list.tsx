import { OrganizationLogo } from "@/components/sectors/organization-logo";
import { sectors } from "@/content/sectors";

export function SectorList() {
  return (
    <div className="sector-list">
      {sectors.map((sector, index) => (
        <article className="sector-row" key={sector.name}>
          <div className="sector-title">
            <span>0{index + 1}</span>
            <h3>{sector.name}</h3>
          </div>
          <div
            className={
              sector.organizations.length === 3
                ? "sector-organizations sector-organizations-three"
                : "sector-organizations"
            }
          >
            {sector.organizations.map((organization) => (
              <figure key={organization.name}>
                <div className="sector-logo-holder">
                  <OrganizationLogo organization={organization} />
                </div>
                <figcaption>{organization.name}</figcaption>
              </figure>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
