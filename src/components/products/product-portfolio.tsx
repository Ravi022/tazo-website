import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/content/products";

export function ProductPortfolio() {
  return (
    <section className="product-explorer" id="solutions">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span />
              THE SOFTWARE PORTFOLIO
            </p>
            <h2>
              Integrated Solutions.
              <br />
              <span>Connected Thinking.</span>
            </h2>
          </div>
          <p>
            From finance to the front gate.
            <br />
            Explore software built around
            <br />
            real operational challenges.
          </p>
        </div>
        <div className="portfolio-list">
          {products.map((product, index) => (
            <article key={product.slug}>
              <span className="portfolio-number">0{index + 1}</span>
              <div>
                <p className="eyebrow">{product.tag}</p>
                <h3>
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </h3>
              </div>
              <p className="portfolio-description">{product.description}</p>
              <Link className="portfolio-link" href={`/products/${product.slug}`} aria-label={`Explore ${product.name}`}>
                <span>Explore</span>
                <ArrowUpRight size={20} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
