export const integrations = [
  {
    number: "01",
    label: "ENTERPRISE INTEGRATION",
    name: "SAP",
    logo: "/brand/sap.jpeg",
    width: 200,
    height: 99,
    heading: ["Keep operations", "and enterprise data connected."],
    description: "Connect operational workflows with enterprise data and finance processes.",
    points: ["ERP workflows", "Reconciliation", "Data exchange"],
  },
  {
    number: "02",
    label: "CLOUD TECHNOLOGY",
    name: "AWS",
    logo: "/brand/aws.jpeg",
    width: 180,
    height: 120,
    heading: ["A foundation for", "software delivery."],
    description: "Support software delivery with cloud infrastructure, deployment and monitoring.",
    points: ["Deployment", "Monitoring", "Scalability"],
  },
] as const;

export const systemMap = {
  inputs: ["YOUR OPERATIONS", "WORKFLOWS + DATA"],
  lanes: ["Finance", "Operations", "People"],
  partners: [
    { name: "SAP", logo: "/brand/sap.jpeg", caption: "Enterprise integration" },
    { name: "AWS", logo: "/brand/aws.jpeg", caption: "Cloud technology" },
  ],
} as const;
