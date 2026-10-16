import { z } from "zod";
import { isProductInterest } from "@/content/products";

export const enquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().min(2).max(160),
  phone: z.string().trim().max(40).default(""),
  product: z.string().refine(isProductInterest),
  message: z.string().trim().min(10).max(3000),
  consent: z.literal("yes"),
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryRecord = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  product: string;
  message: string;
  createdAt: string;
  consent: string;
};

const MAX_BODY_BYTES = 12_000;

export function readEnquiryBody(raw: string) {
  if (raw.length > MAX_BODY_BYTES) {
    return { ok: false as const, status: 413, error: "Your message is too long." };
  }

  try {
    return { ok: true as const, value: JSON.parse(raw) as unknown };
  } catch {
    return { ok: false as const, status: 400, error: "Invalid request." };
  }
}

export async function saveEnquiry(enquiry: EnquiryRecord) {
  const url = process.env.ENQUIRY_WEBHOOK_URL;

  if (!url) {
    throw new Error("Enquiry storage is not configured");
  }

  if (!url.startsWith("https://")) {
    throw new Error("HTTPS webhook required");
  }

  const token = process.env.ENQUIRY_WEBHOOK_TOKEN;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(enquiry),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error("Enquiry delivery failed");
  }
}
