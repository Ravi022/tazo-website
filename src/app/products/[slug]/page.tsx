import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink, TextLink } from "@/components/ui/links";
import { getProduct, products } from "@/content/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  return {
    title: product?.name ?? "Product",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const advantages = "advantages" in product ? product.advantages : undefined;

  return (
    <>
      <section className={`product-hero product-${product.tone}`}>
        <div className="wrap">
          <TextLink href="/products">All software products</TextLink>
          <div className="product-hero-heading">
            <div>
              <Eyebrow>{product.tag}</Eyebrow>
              <h1>
                {product.headline.map((line, index) => (
                  <span key={line} className={index ? "muted" : undefined}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>
            </div>
            <div>
              <p>{product.description}</p>
              <ButtonLink href={`/contact?product=${product.slug}`}>Request a product demo</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {advantages ? (
        <section className="vms-usps wrap">
          <div>
            <Eyebrow>{advantages.eyebrow}</Eyebrow>
            <h2>
              {advantages.heading}
              <br />
              <span>{advantages.accent}</span>
            </h2>
          </div>
          <div className="vms-usp-list">
            {advantages.items.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="capability-section wrap">
        <div>
          <Eyebrow>PRODUCT CAPABILITIES</Eyebrow>
          <h2>{product.capabilityHeading}</h2>
        </div>
        <div className="capability-list">
          {product.features.map((feature, index) => (
            <div key={feature}>
              <span>0{index + 1}</span>
              <h3>{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="wrap">
          <Eyebrow>A WORKFLOW PERSPECTIVE</Eyebrow>
          <h2>{product.workflowHeading}</h2>
          <p className="workflow-caption">An illustrative journey. Implementation is tailored to your requirements.</p>
          <ol className="workflow-steps">
            {product.steps.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>
          <TextLink href={`/contact?product=${product.slug}`}>Discuss your implementation</TextLink>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
