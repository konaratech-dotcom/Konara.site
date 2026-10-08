import { useEffect, useRef, useState } from "react";
import "../styles/cursor.css";

const INTERACTIVE = 'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';
const NARA = '.konara-nara-dock, .konara-nara-button, .konara-nara-panel, .konara-vf-close';

function nearWhite(color: string) {
  const m = color.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
  if (!m) return false;
  return Number(m[1]) >= 225 && Number(m[2]) >= 225 && Number(m[3]) >= 225;
}

function overNaraOrVoiceflow(path: EventTarget[]) {
  return path.some((node) => {
    if (!(node instanceof Element)) return false;
    const sig = `${node.tagName} ${node.id} ${node.getAttribute("class") ?? ""} ${node.getAttribute("data-testid") ?? ""}`.toLowerCase();
    return sig.includes("voiceflow") || sig.includes("vfrc") || Boolean(node.closest(NARA));
  });
}

function overWhiteText(path: EventTarget[]) {
  let checked = 0;
  for (const node of path) {
    if (!(node instanceof HTMLElement)) continue;
    if (node.tagName === "HTML" || node.tagName === "BODY") continue;
    checked += 1;
    const txt = node.textContent?.trim() ?? "";
    if (txt && nearWhite(getComputedStyle(node).color)) return true;
    if (checked >= 4) break;
  }
  return false;
}

function overInteractive(path: EventTarget[]) {
  return path.some((node) => node instanceof Element && Boolean(node.closest(INTERACTIVE)));
}

function injectShadowCursorNone(root: Document | ShadowRoot) {
  root.querySelectorAll<HTMLElement>("*").forEach((el) => {
    if (!el.shadowRoot) return;
    if (!el.shadowRoot.querySelector('[data-konara-cursor-none]')) {
      const style = document.createElement("style");
      style.setAttribute("data-konara-cursor-none", "true");
      style.textContent = `*, *::before, *::after { cursor: none !important; }`;
      el.shadowRoot.appendChild(style);
    }
    injectShadowCursorNone(el.shadowRoot);
  });
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [blue, setBlue] = useState(false);

  useEffect(() => {
    const canUse = window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(canUse);
    if (!canUse) return;

    document.documentElement.classList.add("konara-custom-cursor-enabled");
    let x = innerWidth / 2, y = innerHeight / 2, frame = 0;

    const render = () => {
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = 0;
    };

    const move = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      x = e.clientX; y = e.clientY;
      if (!frame) frame = requestAnimationFrame(render);
      const path = e.composedPath();
      setVisible(true);
      setActive(overInteractive(path));
      setBlue(overNaraOrVoiceflow(path) || overWhiteText(path));
    };

    const hide = () => { setVisible(false); setBlue(false); setActive(false); };
    const show = () => setVisible(true);

    injectShadowCursorNone(document);
    const observer = new MutationObserver(() => injectShadowCursorNone(document));
    observer.observe(document.documentElement, { childList: true, subtree: true });

    document.addEventListener("pointermove", move, true);
    document.addEventListener("pointerover", move, true);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", move, true);
      document.removeEventListener("pointerover", move, true);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      document.documentElement.classList.remove("konara-custom-cursor-enabled");
    };
  }, []);

  if (!enabled) return null;
  return <div ref={dotRef} className={[
    "konara-cursor-dot",
    visible ? "konara-cursor-visible" : "",
    active ? "konara-cursor-active" : "",
    blue ? "konara-cursor-blue" : "",
  ].filter(Boolean).join(" ")} />;
}
