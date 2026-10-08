const MAX_BODY_BYTES = 50_000;
const RESEND_ENDPOINT = "https://api.resend.com/emails";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  enquiry?: unknown;
  business?: unknown;
  problem?: unknown;
  website?: unknown;
};

function text(value: unknown, max: number) {
  return typeof value === "string"
    ? value.trim().slice(0, max)
    : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(response: any, status: number, body: unknown) {
  response.status(status);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("X-Content-Type-Options", "nosniff");
  return response.json(body);
}

export default async function handler(request: any, response: any) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { ok: false, code: "METHOD_NOT_ALLOWED" });
  }

  const contentLength = Number(request.headers?.["content-length"] ?? 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return json(response, 413, { ok: false, code: "PAYLOAD_TOO_LARGE" });
  }

  const allowedOrigin = process.env.CONTACT_ALLOWED_ORIGIN?.trim();
  const origin = String(request.headers?.origin ?? "");

  if (allowedOrigin && origin && origin !== allowedOrigin) {
    return json(response, 403, { ok: false, code: "ORIGIN_NOT_ALLOWED" });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !toEmail || !fromEmail) {
    return json(response, 503, { ok: false, code: "CONTACT_NOT_CONFIGURED" });
  }

  const body: ContactPayload =
    typeof request.body === "string"
      ? (() => {
          try {
            return JSON.parse(request.body);
          } catch {
            return {};
          }
        })()
      : request.body ?? {};

  // Honeypot: bots commonly populate hidden website fields.
  if (text(body.website, 200)) {
    return json(response, 200, { ok: true });
  }

  const name = text(body.name, 120);
  const company = text(body.company, 160);
  const email = text(body.email, 254).toLowerCase();
  const enquiry = text(body.enquiry, 120);
  const business = text(body.business, 2_500);
  const problem = text(body.problem, 4_000);

  if (!name || !email || !enquiry || !business || !problem) {
    return json(response, 400, { ok: false, code: "MISSING_FIELDS" });
  }

  if (!validEmail(email)) {
    return json(response, 400, { ok: false, code: "INVALID_EMAIL" });
  }

  const subjectPrefix =
    process.env.CONTACT_SUBJECT_PREFIX?.trim() || "KONARA enquiry";

  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company || "—");
  const safeEmail = escapeHtml(email);
  const safeEnquiry = escapeHtml(enquiry);
  const safeBusiness = escapeHtml(business).replaceAll("\n", "<br />");
  const safeProblem = escapeHtml(problem).replaceAll("\n", "<br />");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `${subjectPrefix}: ${enquiry} — ${name}`,
        html: `
          <div style="font-family:Inter,Arial,sans-serif;max-width:680px;margin:auto;color:#111827">
            <h1 style="font-size:24px;margin-bottom:8px">New KONARA project enquiry</h1>
            <p style="color:#667085;margin-top:0">Submitted through the KONARA website.</p>
            <hr style="border:0;border-top:1px solid #e5e7eb;margin:24px 0" />
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Company:</strong> ${safeCompany}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Enquiry:</strong> ${safeEnquiry}</p>
            <h2 style="font-size:16px;margin-top:26px">Business</h2>
            <p style="line-height:1.65">${safeBusiness}</p>
            <h2 style="font-size:16px;margin-top:26px">Problem / improvement</h2>
            <p style="line-height:1.65">${safeProblem}</p>
          </div>
        `,
        text: [
          "New KONARA project enquiry",
          "",
          `Name: ${name}`,
          `Company: ${company || "—"}`,
          `Email: ${email}`,
          `Enquiry: ${enquiry}`,
          "",
          "Business:",
          business,
          "",
          "Problem / improvement:",
          problem,
        ].join("\n"),
      }),
      signal: controller.signal,
    });

    if (!resendResponse.ok) {
      return json(response, 502, { ok: false, code: "DELIVERY_FAILED" });
    }

    return json(response, 200, { ok: true });
  } catch {
    return json(response, 502, { ok: false, code: "DELIVERY_FAILED" });
  } finally {
    clearTimeout(timeout);
  }
}
