import type { Organization } from "@/content/sectors";

const SECTOR_SOURCE = "/brand/sectors-source.png";

export function OrganizationLogo({ organization }: { organization: Organization }) {
  if ("crop" in organization) {
    return (
      <svg
        viewBox={organization.crop}
        className="sector-logo"
        role="img"
        aria-label={organization.name}
        preserveAspectRatio="xMidYMid meet"
      >
        <image
          href={organization.src || SECTOR_SOURCE}
          width={organization.sourceWidth || 962}
          height={organization.sourceHeight || 814}
        />
      </svg>
    );
  }

  return (
    <img
      className="sector-logo"
      src={organization.src}
      alt={organization.name}
      width={180}
      height={100}
      loading="lazy"
    />
  );
}
