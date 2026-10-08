import { useEffect, useState } from "react";

type VFChat = {
  open?: (...args: any[]) => any;
  close?: (...args: any[]) => any;
  show?: (...args: any[]) => any;
  hide?: (...args: any[]) => any;
  [key: string]: any;
};

export default function NaraVoiceflowControl() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;
    let cleanupPatchedChat: (() => void) | null = null;

    const install = () => {
      const chat = (window as any).voiceflow?.chat as VFChat | undefined;
      if (!chat) return false;

      if ((chat as any).__konaraCloseButtonPatched) {
        return true;
      }

      const originalOpen =
        typeof chat.open === "function"
          ? chat.open.bind(chat)
          : null;

      const originalClose =
        typeof chat.close === "function"
          ? chat.close.bind(chat)
          : null;

      const originalShow =
        typeof chat.show === "function"
          ? chat.show.bind(chat)
          : null;

      const originalHide =
        typeof chat.hide === "function"
          ? chat.hide.bind(chat)
          : null;

      chat.open = (...args: any[]) => {
        setOpen(true);
        document.documentElement.classList.add(
          "konara-voiceflow-open",
        );

        try {
          originalShow?.();
        } catch {
          // Ignore temporary Voiceflow state.
        }

        return originalOpen?.(...args);
      };

      chat.close = (...args: any[]) => {
        setOpen(false);
        document.documentElement.classList.remove(
          "konara-voiceflow-open",
        );

        let result: any;

        try {
          result = originalClose?.(...args);
        } finally {
          try {
            originalHide?.();
          } catch {
            // Ignore.
          }
        }

        return result;
      };

      (chat as any).__konaraCloseButtonPatched = true;

      /*
        Fresh page load: NARA live chat must start hidden.
        The custom white NARA robot remains visible because it
        is rendered separately by NaraRobot.tsx.
      */
      try {
        originalClose?.();
      } catch {
        // Ignore.
      }

      try {
        originalHide?.();
      } catch {
        // Ignore.
      }

      setOpen(false);
      document.documentElement.classList.remove(
        "konara-voiceflow-open",
      );

      cleanupPatchedChat = () => {
        if (originalOpen) chat.open = originalOpen;
        if (originalClose) chat.close = originalClose;
        if (originalShow) chat.show = originalShow;
        if (originalHide) chat.hide = originalHide;

        try {
          delete (chat as any).__konaraCloseButtonPatched;
        } catch {
          // Ignore.
        }
      };

      return true;
    };

    const timer = window.setInterval(() => {
      if (cancelled) return;

      attempts += 1;

      if (install()) {
        window.clearInterval(timer);
        return;
      }

      if (attempts >= 150) {
        window.clearInterval(timer);
      }
    }, 100);

    if (install()) {
      window.clearInterval(timer);
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      try {
        ((window as any).voiceflow?.chat as VFChat | undefined)
          ?.close?.();
      } catch {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
      window.removeEventListener("keydown", onEscape);
      cleanupPatchedChat?.();
    };
  }, []);

  const closeLiveChat = () => {
    try {
      const chat = (window as any).voiceflow?.chat as VFChat | undefined;

      chat?.close?.();
      chat?.hide?.();
    } catch {
      // Still hide the KONARA close control.
    }

    setOpen(false);

    document.documentElement.classList.remove(
      "konara-voiceflow-open",
    );
  };

  if (!open) return null;

  return (
    <button
      type="button"
      className="konara-voiceflow-visible-close"
      aria-label="Close NARA live chat"
      title="Close NARA live chat"
      onClick={closeLiveChat}
      data-konara-no-translate
    >
      <span aria-hidden="true">×</span>
    </button>
  );
}
