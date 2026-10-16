export type ProductTone = "dark" | "teal" | "red" | "sand";

export type ProductAdvantage = {
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  short: string;
  name: string;
  tag: string;
  headline: readonly [string, string];
  description: string;
  features: readonly string[];
  steps: readonly string[];
  tone: ProductTone;
  capabilityHeading: string;
  workflowHeading: string;
  advantages?: {
    eyebrow: string;
    heading: string;
    accent: string;
    items: readonly ProductAdvantage[];
  };
};

export const products = [
  {
    slug: "cctv-vms",
    short: "CCTV VMS",
    name: "Centralized CCTV VMS",
    tag: "SECURITY & VISIBILITY",
    headline: ["Multiple sites.", "One perspective."],
    description:
      "Connect real-time detection, customized alerts and multi-brand camera monitoring across geographically distributed locations.",
    features: [
      "Multi-site monitoring",
      "Live camera view",
      "Recording and playback",
      "Access controls",
    ],
    steps: ["Connect sites", "View live feeds", "Review recordings", "Manage access"],
    tone: "dark",
    capabilityHeading: "Visibility across locations.",
    workflowHeading: "See how the work connects.",
    advantages: {
      eyebrow: "THE TAZO VMS ADVANTAGE",
      heading: "Detect. Connect.",
      accent: "Act with clarity.",
      items: [
        {
          title: "Real-Time Detection & Customized Alerts",
          description:
            "Identify events as they happen and receive alerts tailored to your site-specific security and operational requirements.",
        },
        {
          title: "Scalable Across Multiple Locations",
          description:
            "Expand centralized monitoring across geographically distributed sites through one connected VMS platform.",
        },
        {
          title: "Actionable Insights for Proactive Security",
          description:
            "Turn detected events into actionable insights that guide corrective measures and help strengthen future security.",
        },
        {
          title: "One Platform. Multiple Camera Brands. Integrated Features.",
          description:
            "Bring compatible cameras from multiple brands together with live monitoring, recording, playback and alerting in a single software platform.",
        },
      ],
    },
  },
  {
    slug: "diagnosee-ris",
    short: "DiagnoSee RIS",
    name: "DiagnoSee RIS",
    tag: "HEALTHCARE WORKFLOWS",
    headline: ["Clarity across", "radiology workflows."],
    description:
      "Connect radiology reporting with USG and X-ray workflows, PACS and FHIR APIs.",
    features: [
      "Radiology reporting",
      "USG and X-ray workflows",
      "PACS connectivity",
      "FHIR APIs",
    ],
    steps: [
      "Select the examination",
      "Open the study",
      "Prepare the report",
      "Connect clinical data",
    ],
    tone: "teal",
    capabilityHeading: "A connected reporting journey.",
    workflowHeading: "Make the clinical workflow visible.",
  },
  {
    slug: "travel-expense",
    short: "Travel & Expense",
    name: "Travel & Expense Management",
    tag: "FINANCE & OPERATIONS",
    headline: ["Every expense.", "A clearer picture."],
    description:
      "Bring policy-controlled budgets, claims, advances and wallet settlement into a connected financial workflow.",
    features: [
      "Policy-controlled budgets",
      "Claims and advances",
      "Wallet settlement",
      "Signed international invoices",
    ],
    steps: [
      "Set a budget",
      "Manage claims & advances",
      "Settle the wallet",
      "Issue signed invoices",
    ],
    tone: "red",
    capabilityHeading: "Control across the expense cycle.",
    workflowHeading: "See how the work connects.",
  },
  {
    slug: "rental-assets",
    short: "Rental Assets",
    name: "Rental Asset Management",
    tag: "ASSETS & FINANCE",
    headline: ["Your rental operations.", "Brought together."],
    description:
      "Connect digital rental agreements, asset records and financial workflows in one operational view.",
    features: ["Digital rental agreements", "Asset records", "Financial workflows"],
    steps: ["Create an agreement", "Connect asset records", "Review financial workflows"],
    tone: "sand",
    capabilityHeading: "The details, together.",
    workflowHeading: "See how the work connects.",
  },
  {
    slug: "visitor-management",
    short: "Visitor Management",
    name: "Visitor Management",
    tag: "PEOPLE & ACCESS",
    headline: ["A considered welcome.", "A controlled entry."],
    description:
      "Bring employee approvals, QR gate passes, validity checks and visitor tracking into a connected visitor workflow.",
    features: ["Employee approvals", "QR gate passes", "Validity checks", "Visitor tracking"],
    steps: [
      "Request employee approval",
      "Generate a QR gate pass",
      "Check validity",
      "Track the visit",
    ],
    tone: "red",
    capabilityHeading: "From approval to arrival.",
    workflowHeading: "See how the work connects.",
  },
] as const satisfies readonly Product[];

export type ProductSlug = (typeof products)[number]["slug"];

const productSlugSet = new Set<string>(products.map((product) => product.slug));

export function isProductInterest(value: string) {
  return value === "general" || productSlugSet.has(value);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
