export type Testimonial = {
  name: string;
  role: string;
  organization: string;
  photo: string;
  quote: string;
  status: "draft";
};

/** User-approved wording for layout review. These are drafts, not confirmed customer statements. */
export const testimonials: readonly Testimonial[] = [
  {
    name: "Daniel John",
    role: "CEO",
    organization: "Koove IoT Private Limited",
    photo: "/people/daniel-john.webp",
    status: "draft",
    quote:
      "TAZO brings our monitoring requirements together in one platform. Real-time detection and customized alerts help our team stay informed. Centralized visibility supports coordination across our operations. The ability to connect compatible cameras from different brands gives us flexibility. It is a practical approach to strengthening operational control.",
  },
  {
    name: "Andrea Cirino Pomicino",
    role: "CEO",
    organization: "Rashmi Metaliks — Europe Division",
    photo: "/people/andrea-pomicino.webp",
    status: "draft",
    quote:
      "Managing operations across locations requires clear visibility and connected systems. TAZO’s integrated approach aligns with these business needs. Its centralized platform supports a consistent view across geographically distributed sites. The flexibility to scale is valuable as operational requirements evolve. We appreciate the focus on practical business solutions.",
  },
  {
    name: "Ganesh Jadhav",
    role: "Plant Head",
    organization: "Koove Organic Chemicals Private Limited",
    photo: "/people/ganesh-jadhav.webp",
    status: "draft",
    quote:
      "On the plant floor, timely information is essential for effective monitoring. TAZO’s customized alerts help bring relevant events to our team’s attention. Live monitoring and playback support the review of operational incidents. These insights help us identify corrective measures and strengthen security practices. Having these capabilities together supports our day-to-day supervision.",
  },
];
