"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { isProductInterest, products } from "@/content/products";

type FormStatus = {
  pending: boolean;
  error: string;
  reference: string;
};

const initialStatus: FormStatus = { pending: false, error: "", reference: "" };

export function ContactForm() {
  const search = useSearchParams();
  const requestedProduct = search.get("product") ?? "";
  const selectedProduct = isProductInterest(requestedProduct) && requestedProduct !== "general" ? requestedProduct : "";
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ pending: true, error: "", reference: "" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await response.json()) as { error?: string; reference?: string };

      if (!response.ok) {
        throw new Error(data.error || "We could not save your enquiry. Please try again.");
      }

      if (!data.reference) {
        throw new Error("No enquiry reference was returned. Please try again.");
      }

      form.reset();
      setStatus({ pending: false, error: "", reference: data.reference });
    } catch (error) {
      setStatus({
        pending: false,
        error: error instanceof Error ? error.message : "Unable to connect. Please try again.",
        reference: "",
      });
    }
  }

  if (status.reference) {
    return (
      <div className="form-panel success-panel" role="status">
        <CheckCircle2 size={42} />
        <p className="eyebrow">ENQUIRY RECEIVED</p>
        <h2>
          A more connected
          <br />
          conversation starts here.
        </h2>
        <p>
          Your enquiry has been securely recorded. Please keep your reference below. A demo date is not yet confirmed.
        </p>
        <code>{status.reference}</code>
        <button className="button" onClick={() => setStatus(initialStatus)} type="button">
          Send another enquiry
          <ArrowUpRight size={17} />
        </button>
      </div>
    );
  }

  return (
    <form className="form-panel" onSubmit={submit}>
      <p className="eyebrow">TELL US WHAT YOU HAVE IN MIND</p>
      <h2>Let’s find your starting point.</h2>
      <p className="form-intro">Share a few details and the workflow you would like to explore.</p>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" autoComplete="name" required maxLength={120} placeholder="Your name" />
        </label>
        <label>
          Work email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@company.com"
          />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" required maxLength={160} placeholder="Company name" />
        </label>
        <label>
          Phone <span>(optional)</span>
          <input type="tel" name="phone" autoComplete="tel" maxLength={40} placeholder="Country code + number" />
        </label>
      </div>
      <label>
        I’m interested in
        <select name="product" required defaultValue={selectedProduct}>
          <option value="" disabled>
            Select a software solution
          </option>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.name}
            </option>
          ))}
          <option value="general">Multiple products / general enquiry</option>
        </select>
      </label>
      <label>
        What would you like to solve?
        <textarea
          name="message"
          rows={4}
          required
          minLength={10}
          maxLength={3000}
          placeholder="Tell us about your current workflow and what you would like to improve."
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="consent">
        <input name="consent" type="checkbox" required value="yes" />
        <span>
          I agree that TAZO may use these details to respond to my enquiry. <a href="/privacy">Enquiry privacy</a>.
        </span>
      </label>
      {status.error ? (
        <p role="alert" className="form-error">
          {status.error}
        </p>
      ) : null}
      <button className="button" disabled={status.pending} type="submit">
        {status.pending ? "Sending enquiry…" : "Request a conversation"}
        <ArrowUpRight size={17} />
      </button>
      <p className="form-note">No calendar booking is made until a demo time is confirmed.</p>
    </form>
  );
}
