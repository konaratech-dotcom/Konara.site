import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import "../styles/nara-custom-chat.css";

type Trace = { type?: string; payload?: any; [key: string]: any };
type Message = { id: string; role: "assistant" | "user" | "system"; text: string };
type Choice = { id: string; label: string; action: any };

const id = (p: string) => `${p}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

function textFromTrace(trace: Trace) {
  const p = trace?.payload;
  if (typeof p === "string") return p.trim();
  for (const value of [p?.message, p?.text, p?.content]) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

function choicesFromTraces(traces: Trace[]): Choice[] {
  const out: Choice[] = [];
  for (const trace of traces) {
    const buttons = trace?.payload?.buttons;
    if (!Array.isArray(buttons)) continue;
    buttons.forEach((b: any, i: number) => {
      const label = b?.name || b?.label || b?.text || b?.title;
      const action = b?.request || b?.action || b?.event;
      if (typeof label === "string" && action && typeof action === "object") {
        out.push({ id: `${i}-${label}`, label, action });
      }
    });
  }
  return out;
}

function guideRoute(trace: Trace) {
  const raw = JSON.stringify(trace).toLowerCase();
  if (!raw.includes("konara guide") && !raw.includes("ext konara guide")) return null;
  const p = trace?.payload ?? {};
  const value = String(p.path || p.route || p.page || p.target || p.value || "").trim().toLowerCase();
  const map: Record<string, string> = {
    home: "/", homepage: "/", "/": "/",
    solutions: "/solutions", "/solutions": "/solutions",
    services: "/services", "/services": "/services",
    website: "/website", web: "/website", "konara web": "/website", "/website": "/website",
    about: "/about", company: "/about", "/about": "/about",
    contact: "/contact", enquiry: "/contact", inquiry: "/contact", "/contact": "/contact",
  };
  return map[value] || null;
}

export default function NaraCustomChat() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ingest = (traces: Trace[]) => {
    for (const trace of traces) {
      const route = guideRoute(trace);
      if (route) {
        window.history.pushState({}, "", route);
        window.dispatchEvent(new PopStateEvent("popstate"));
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      }
    }

    const incoming: Message[] = [];
    for (const trace of traces) {
      const type = String(trace?.type || "").toLowerCase();
      if (!["text", "speak", "message"].includes(type)) continue;
      const text = textFromTrace(trace);
      if (text) incoming.push({ id: id("assistant"), role: "assistant", text });
    }
    if (incoming.length) setMessages((m) => [...m, ...incoming]);
    setChoices(choicesFromTraces(traces));
  };

  const call = async (body: Record<string, unknown>) => {
    const r = await fetch("/api/nara", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        page: window.location.pathname,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    });
    const data = await r.json();
    if (!r.ok || !data?.ok) throw new Error(data?.error || "NARA request failed.");
    return Array.isArray(data.traces) ? data.traces as Trace[] : [];
  };

  const launch = async () => {
    setBusy(true);
    setReady(false);
    setMessages([]);
    setChoices([]);
    try {
      ingest(await call({ mode: "launch" }));
      setReady(true);
    } catch (error) {
      console.error(error);
      setMessages([{ id: id("system"), role: "system", text: "NARA is temporarily unavailable." }]);
    } finally {
      setBusy(false);
    }
  };

  const show = () => {
    setOpen(true);
    void launch();
  };

  const close = () => {
    setOpen(false);
    setInput("");
    setChoices([]);
  };

  useEffect(() => {
    const previous = (window as any).voiceflow;
    (window as any).voiceflow = {
      ...(previous ?? {}),
      chat: { open: show, show, close, hide: close },
    };
    return () => { (window as any).voiceflow = previous; };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => {
      const el = scrollRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }, [messages, busy, choices, open]);

  const send = async (event: FormEvent) => {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy || !ready) return;
    setInput("");
    setChoices([]);
    setMessages((m) => [...m, { id: id("user"), role: "user", text }]);
    setBusy(true);
    try { ingest(await call({ mode: "text", message: text })); }
    catch (error) {
      console.error(error);
      setMessages((m) => [...m, { id: id("system"), role: "system", text: "NARA is temporarily unavailable." }]);
    } finally { setBusy(false); }
  };

  const choose = async (choice: Choice) => {
    if (busy) return;
    setChoices([]);
    setMessages((m) => [...m, { id: id("user"), role: "user", text: choice.label }]);
    setBusy(true);
    try { ingest(await call({ mode: "action", action: choice.action })); }
    catch (error) {
      console.error(error);
      setMessages((m) => [...m, { id: id("system"), role: "system", text: "NARA is temporarily unavailable." }]);
    } finally { setBusy(false); }
  };

  if (!open) return null;

  return (
    <section className="konara-custom-chat" aria-label="NARA">
      <header className="konara-custom-chat-header">
        <div className="konara-custom-chat-brand">
          <div className="konara-custom-chat-logo">K</div>
          <div><strong>NARA</strong><span>KONARA AI Assistant</span></div>
        </div>
        <button type="button" className="konara-custom-chat-close" onClick={close} aria-label="Close NARA" data-cursor="interactive">×</button>
      </header>

      <div ref={scrollRef} className="konara-custom-chat-body">
        {messages.length === 0 && !busy && (
          <div className="konara-custom-chat-welcome">
            <div className="konara-custom-chat-logo large">K</div>
            <strong>NARA</strong>
            <p>Intelligent assistance, built into KONARA.</p>
          </div>
        )}

        {messages.map((m) => (
          <div key={m.id} className={`konara-chat-row ${m.role}`}>
            <div className="konara-chat-bubble">{m.text}</div>
          </div>
        ))}

        {busy && (
          <div className="konara-chat-row assistant">
            <div className="konara-chat-bubble konara-chat-thinking"><span/><span/><span/><em>NARA is thinking…</em></div>
          </div>
        )}

        {choices.length > 0 && (
          <div className="konara-chat-choices">
            {choices.map((c) => (
              <button key={c.id} type="button" onClick={() => void choose(c)} disabled={busy} data-cursor="interactive">{c.label}</button>
            ))}
          </div>
        )}
      </div>

      <form className="konara-custom-chat-input" onSubmit={send}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask NARA" maxLength={4000} disabled={busy || !ready} autoComplete="off" />
        <button type="submit" disabled={busy || !ready || !input.trim()} aria-label="Send" data-cursor="interactive">↑</button>
      </form>

      <footer className="konara-custom-chat-footer">KONARA</footer>
    </section>
  );
}
