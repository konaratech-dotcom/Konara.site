import { randomUUID } from "node:crypto";

const BASE = "https://general-runtime.voiceflow.com";
const COOKIE = "konara_vf_session";

function cookies(header?: string) {
  const out: Record<string, string> = {};
  for (const part of (header ?? "").split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    const k = part.slice(0, i).trim();
    const v = part.slice(i + 1).trim();
    if (!k) continue;
    try { out[k] = decodeURIComponent(v); } catch { out[k] = v; }
  }
  return out;
}

function setCookie(res: any, sessionKey: string) {
  const secure = Boolean(process.env.VERCEL || process.env.NODE_ENV === "production");
  const bits = [
    `${COOKIE}=${encodeURIComponent(sessionKey)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
  ];
  if (secure) bits.push("Secure");
  res.setHeader("Set-Cookie", bits.join("; "));
}

async function post(url: string, authorization: string, body: unknown) {
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", authorization },
    body: JSON.stringify(body),
  });
  const raw = await r.text();
  let data: any = {};
  try { data = raw ? JSON.parse(raw) : {}; } catch { data = { raw }; }
  if (!r.ok) {
    const e: any = new Error(data?.message || data?.error || `Voiceflow error (${r.status})`);
    e.status = r.status;
    throw e;
  }
  return data;
}

async function start(apiKey: string, projectID: string, environmentID: string) {
  const userID = `konara-web-${randomUUID()}`;
  const data = await post(
    `${BASE}/v4/project/${encodeURIComponent(projectID)}/environment/${encodeURIComponent(environmentID)}/session`,
    apiKey,
    { userID },
  );
  if (!data?.sessionKey) throw new Error("Voiceflow did not return a sessionKey.");
  return String(data.sessionKey);
}

async function interact(sessionKey: string, action: any, timezone?: string, page?: string) {
  return post(`${BASE}/v4/interact`, sessionKey, {
    action,
    variables: { konara_page: page || "/" },
    config: timezone ? { userTimezone: timezone } : {},
  });
}

export default async function handler(req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  const apiKey = process.env.VOICEFLOW_API_KEY;
  const projectID = process.env.VOICEFLOW_PROJECT_ID || "6aa1bdbf2243e9ee4e3cddde";
  const environmentID = process.env.VOICEFLOW_ENVIRONMENT_ID;

  if (!apiKey || !environmentID) {
    return res.status(503).json({
      ok: false,
      error: "NARA server configuration is missing VOICEFLOW_API_KEY or VOICEFLOW_ENVIRONMENT_ID.",
    });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body ?? {});
  const timezone = typeof body.timezone === "string" ? body.timezone : undefined;
  const page = typeof body.page === "string" ? body.page : "/";

  try {
    if (body.mode === "launch") {
      const sessionKey = await start(apiKey, projectID, environmentID);
      setCookie(res, sessionKey);
      const data = await interact(sessionKey, { type: "launch" }, timezone, page);
      return res.status(200).json({ ok: true, traces: data?.traces ?? [] });
    }

    const sessionKey = cookies(req.headers?.cookie)[COOKIE];
    if (!sessionKey) return res.status(409).json({ ok: false, error: "No active NARA session. Reopen NARA." });

    if (body.mode === "text") {
      const message = typeof body.message === "string" ? body.message.trim() : "";
      if (!message) return res.status(400).json({ ok: false, error: "Message is required." });
      const data = await interact(sessionKey, { type: "text", payload: message }, timezone, page);
      return res.status(200).json({ ok: true, traces: data?.traces ?? [] });
    }

    if (body.mode === "action" && body.action && typeof body.action === "object") {
      const data = await interact(sessionKey, body.action, timezone, page);
      return res.status(200).json({ ok: true, traces: data?.traces ?? [] });
    }

    return res.status(400).json({ ok: false, error: "Unsupported NARA request." });
  } catch (error: any) {
    console.error("NARA API error", error);
    return res.status(Number.isInteger(error?.status) ? error.status : 502).json({
      ok: false,
      error: error?.message || "NARA could not reach Voiceflow.",
    });
  }
}
