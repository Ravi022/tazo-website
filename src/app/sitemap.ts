import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/content/products";

const routes = [
  "",
  "/about",
  "/products",
  "/technology",
  "/sectors",
  "/contact",
  "/privacy",
  ...products.map((product) => `/products/${product.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
