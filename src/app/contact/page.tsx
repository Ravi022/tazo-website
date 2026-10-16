import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & book a demo",
  description: "Explore the right software for your operations, understand the product workflow and plan your implementation.",
};

export default function ContactPage() {
  return (
    <section className="contact-page wrap">
      <div>
        <Eyebrow>LET’S TALK</Eyebrow>
        <h1>
          Bring your
          <br />
          business
          <br />
          <span>together.</span>
        </h1>
        <p>
          Explore the right software for your operations, understand the product workflow and plan your implementation.
        </p>
        <div className="contact-address">
          <span className="eyebrow">{site.addressLabel}</span>
          <address>
            {site.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
        </div>
        <div className="contact-topics">
          <span>Product demonstrations</span>
          <span>Business requirements</span>
          <span>Implementation planning</span>
        </div>
      </div>
      <Suspense fallback={<p>Loading enquiry form…</p>}>
        <ContactForm />
      </Suspense>
    </section>
  );
}
