import { testimonials } from "@/content/testimonials";
import { Eyebrow } from "@/components/ui/eyebrow";

export function CustomerFeedback() {
  return (
    <section className="customer-perspectives" id="customer-feedback">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>CUSTOMER FEEDBACK</Eyebrow>
            <h2>
              What our
              <br />
              <span>customers say.</span>
            </h2>
          </div>
          <p className="feedback-review-note">
            Proposed testimonials for review.
            <br />
            Pending confirmation by each customer.
          </p>
        </div>
        <div className="customer-profile-grid">
          {testimonials.map((person) => (
            <article key={person.name}>
              <div className="customer-portrait">
                <img src={person.photo} alt={person.name} width={320} height={400} loading="lazy" />
              </div>
              <div className="customer-profile-copy">
                <p className="feedback-draft-label">Draft · pending customer confirmation</p>
                <blockquote>{person.quote}</blockquote>
                <h3>{person.name}</h3>
                <p className="customer-role">{person.role}</p>
                <p>{person.organization}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
