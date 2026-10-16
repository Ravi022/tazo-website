type CroppedOrganization = {
  name: string;
  crop: string;
  src?: string;
  sourceWidth?: number;
  sourceHeight?: number;
};

type ImageOrganization = {
  name: string;
  src: string;
};

export type Organization = CroppedOrganization | ImageOrganization;

export type Sector = {
  name: string;
  organizations: readonly Organization[];
};

export const sectors: readonly Sector[] = [
  {
    name: "Iron, Steel, Cement & Power",
    organizations: [
      { name: "Rashmi Metaliks Limited", src: "/brand/rashmi-metaliks.png" },
      { name: "Rashmi Cement Limited", src: "/brand/rashmi-cement.png" },
      {
        name: "Orissa Metaliks Private Limited",
        src: "/brand/ompl.png",
        crop: "8 50 148 61",
        sourceWidth: 162,
        sourceHeight: 148,
      },
    ],
  },
  {
    name: "Pipes & Fittings",
    organizations: [
      { name: "Rashmi Seamless", crop: "354 249 151 74" },
      { name: "Rashmi Green", crop: "546 250 155 73" },
    ],
  },
  {
    name: "Mines",
    organizations: [{ name: "Reach Dredging Ltd.", src: "/brand/reach.jpeg" }],
  },
  {
    name: "Energy",
    organizations: [{ name: "Rashmi 6 Paradigm Limited", src: "/brand/paradigm.jpeg" }],
  },
  {
    name: "Embedded",
    organizations: [
      { name: "Rashmi Rare Earth", crop: "334 590 187 49" },
      { name: "e Hoome IoT", src: "/brand/ehoome.jpeg" },
    ],
  },
  {
    name: "Rubber & Chemicals",
    organizations: [
      { name: "Koove IoT Private Limited", src: "/brand/koove.jpeg" },
      { name: "Koove Organic Chemicals Private Limited", crop: "574 692 138 59" },
    ],
  },
];
