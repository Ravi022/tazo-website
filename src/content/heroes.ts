import type { ProductSlug } from "@/content/products";

export type HomeHero = {
  name: string;
  image: string;
  slug: ProductSlug;
  headline: string;
  accent: string;
  description: string;
  alt: string;
};

export const homeHeroes: readonly HomeHero[] = [
  {
    name: "CCTV VMS",
    image: "cctv",
    slug: "cctv-vms",
    headline: "Every location.",
    accent: "One clear view.",
    description:
      "Real-time detection, customized alerts and multi-brand camera monitoring. Bring geographically distributed sites into one connected VMS platform.",
    alt: "Industrial surveillance camera and a central monitoring screen overlooking a warehouse entrance.",
  },
  {
    name: "DiagnoSee RIS",
    image: "medical",
    slug: "diagnosee-ris",
    headline: "Connected radiology.",
    accent: "Simplified workflows.",
    description:
      "Connect radiology reporting, USG and X-ray workflows with PACS connectivity and FHIR APIs.",
    alt: "A bright radiology facility with a scanner and an illustrative DiagnoSee RIS workstation.",
  },
  {
    name: "Travel & Expense",
    image: "expense",
    slug: "travel-expense",
    headline: "Every journey. Every expense.",
    accent: "In control.",
    description:
      "Bring policy-controlled budgets, claims, advances and wallet settlement into one connected financial workflow.",
    alt: "Travel and expense software on a laptop in an airport lounge, with a suitcase and receipt preview.",
  },
  {
    name: "Rental Assets",
    image: "rental",
    slug: "rental-assets",
    headline: "Every asset. Every agreement.",
    accent: "In control.",
    description:
      "Bring rental agreements, asset records and financial workflows together for a clearer view of your rental operations.",
    alt: "Rental equipment yard with an asset management workstation showing equipment and agreements.",
  },
  {
    name: "Visitor Management",
    image: "visitor",
    slug: "visitor-management",
    headline: "Every visit.",
    accent: "Seamlessly managed.",
    description:
      "Connect employee approvals, QR gate passes, validity checks and visitor tracking—from request to arrival.",
    alt: "Modern corporate reception with visitor approval software and a digital gate pass.",
  },
];
