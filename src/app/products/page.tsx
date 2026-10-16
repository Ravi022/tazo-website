import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageIntro } from "@/components/ui/page-intro";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Software products",
  description:
    "Purposeful software across finance, security, healthcare and business operations. Find the right starting point for your business.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="THE TAZO PORTFOLIO"
        title={
          <>
            Different disciplines.
            <br />
            <span>One connected vision.</span>
          </>
        }
      >
        <p>
          Purposeful software across finance, security, healthcare and business operations. Find the right starting
          point for your business.
        </p>
      </PageIntro>
      <section className="product-directory wrap">
        {products.map((product, index) => (
          <Link
            href={`/products/${product.slug}`}
            className={`directory-row directory-${product.tone}`}
            key={product.slug}
          >
            <span className="directory-number">0{index + 1}</span>
            <div>
              <Eyebrow>{product.tag}</Eyebrow>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <div className="directory-features">
              {product.features.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
            <ArrowUpRight size={30} />
          </Link>
        ))}
      </section>
      <ClosingCta />
    </>
  );
}
