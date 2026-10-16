import { enquirySchema, readEnquiryBody, saveEnquiry } from "@/lib/enquiries";

const validationError =
  "Please check your contact details, product selection and consent. Include a message of at least 10 characters.";

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || request.headers.get("host");
  if (host && originHost === host) return true;

  return origin === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return Response.json({ error: "Request origin is not allowed." }, { status: 403 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Use JSON for this request." }, { status: 415 });
  }

  const body = readEnquiryBody(await request.text());

  if (!body.ok) {
    return Response.json({ error: body.error }, { status: body.status });
  }

  const parsed = enquirySchema.safeParse(body.value);

  if (!parsed.success) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const { name, email, company, phone, product, message, consent } = parsed.data;
  const id = `TZ-${crypto.randomUUID()}`;

  try {
    await saveEnquiry({
      id,
      name,
      email,
      company,
      phone,
      product,
      message,
      consent,
      createdAt: new Date().toISOString(),
    });

    return Response.json({ reference: id }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json(
      { error: "We could not record your enquiry. Please try again shortly." },
      { status: 503 },
    );
  }
}
