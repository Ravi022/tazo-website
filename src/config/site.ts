export const site = {
  name: "TAZO",
  title: "TAZO — AI Solutions & Enterprise Software",
  description:
    "Integrated Solutions. Connected Thinking. Explore TAZO AI solutions and enterprise software across security, healthcare, finance and business operations.",
  openGraphDescription:
    "AI solutions and integrated enterprise software. Made in USA. Indian pricing.",
  tagline: "Integrated Solutions. Connected Thinking.",
  positioning: ["Made in USA.", "Indian pricing."] as const,
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://tazo-enterprise.rashmi-metal-0313.chatgpt.site",
  logo: {
    src: "/brand/tazo.jpeg",
    width: 44,
    height: 47,
  },
  address: [
    "301A, 3rd Floor",
    "World Trade Tower",
    "Fire Brigade Lane, Adjacent Lalit Hotel",
    "Connaught Place, New Delhi – 110001",
  ],
  addressLabel: "DELHI OFFICE & DEVELOPMENT CENTRE",
  nav: [
    { href: "/products", label: "Products" },
    { href: "/about", label: "Company" },
    { href: "/technology", label: "Technology" },
    { href: "/sectors", label: "Sectors We Serve" },
  ],
  footerExplore: [
    { href: "/about", label: "About TAZO" },
    { href: "/technology", label: "Technology & integrations" },
    { href: "/sectors", label: "Sectors We Serve" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export function isCurrentPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
