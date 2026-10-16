import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Enquiry privacy",
};

export default function PrivacyPage() {
  return (
    <article className="privacy wrap">
      <Eyebrow>ENQUIRY PRIVACY</Eyebrow>
      <h1>Your enquiry details.</h1>
      <p>
        This form collects your name, work email, company, optional phone number, product interest and the message you
        provide, together with the time of submission and an enquiry reference.
      </p>
      <h2>Purpose</h2>
      <p>
        Your details are used to review and respond to your request, discuss relevant TAZO products and plan a
        demonstration or implementation conversation. Submitting an enquiry does not subscribe you to a newsletter.
      </p>
      <h2>Storage and access</h2>
      <p>
        Enquiries are stored in the website’s backend and are not publicly listed. Please do not include passwords,
        patient information, confidential financial documents or other sensitive records in your message.
      </p>
      <h2>Questions or correction requests</h2>
      <p>
        Use the contact form to request correction or deletion, quoting your enquiry reference. You can also contact
        the Delhi Office & Development Centre at 301A, 3rd Floor, World Trade Tower, Fire Brigade Lane, Adjacent Lalit
        Hotel, Connaught Place, New Delhi – 110001.
      </p>
    </article>
  );
}
