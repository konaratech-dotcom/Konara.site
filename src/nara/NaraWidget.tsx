import { useEffect } from "react";

import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/copy";
import { KonaraGuideExtension } from "./KonaraGuideExtension";

const VOICEFLOW_PROJECT_ID = "6aa1bdbf2243e9ee4e3cddde";
const VOICEFLOW_SCRIPT_ID = "konara-voiceflow-widget";

/*
  Voiceflow stays loaded for the live assistant and the
  website-guide extension, but its own launcher is hidden.
  The white NARA robot is the only visible launcher.
*/
const VOICEFLOW_CUSTOM_CSS =
  "data:text/css;base64,LnZmcmMtbGF1bmNoZXJ7ZGlzcGxheTpub25lIWltcG9ydGFudDt9KiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Y3Vyc29yOm5vbmUhaW1wb3J0YW50O30=";

type VoiceflowLoadConfig = {
  verify: {
    projectID: string;
  };

  url: string;

  voice?: {
    url: string;
  };

  assistant?: {
    extensions?: unknown[];
    title?: string;
    description?: string;
    color?: string;
    fontFamily?: string;
    inputPlaceholder?: string;
    renderMode?: "widget" | "popover";
    stylesheet?: string;

    header?: {
      hideImage?: boolean;
      title?: string;
    };

    banner?: {
      hide?: boolean;
      title?: string;
      description?: string;
    };

    avatar?: {
      hide?: boolean;
      imageUrl?: string;
    };

    persistence?: "localStorage" | "sessionStorage" | "memory";
  };
};

type VoiceflowChat = {
  load: (
    config: VoiceflowLoadConfig,
  ) => void | Promise<void>;

  open: () => void;
  close: () => void;
};

declare global {
  interface Window {
    voiceflow?: {
      chat: VoiceflowChat;
    };
  }
}

export default function NaraWidget() {
  const { language } = useLocale();
  const copy = getCopy(language.code);

  useEffect(() => {
    let cancelled = false;

    const initialiseVoiceflow = async () => {
      if (!window.voiceflow?.chat) {
        return;
      }

      await Promise.resolve(
        window.voiceflow.chat.load({
          verify: {
            projectID: VOICEFLOW_PROJECT_ID,
          },

          url: "https://general-runtime.voiceflow.com",

          voice: {
            url: "https://runtime-api.voiceflow.com",
          },

          assistant: {
            extensions: [KonaraGuideExtension],

            title: "NARA",

            description: copy.assistant.text,

            color: "#3f85fa",

            fontFamily: "inherit",

            inputPlaceholder: copy.assistant.ask,

            renderMode: "widget",

            persistence: "memory",

            stylesheet: VOICEFLOW_CUSTOM_CSS,

            header: {
              hideImage: true,
              title: "NARA",
            },

            banner: {
              title: "NARA",
              description: copy.assistant.voiceText,
            },

            avatar: {
              hide: true,
            },
          },
        }),
      );

      if (!cancelled) {
        window.dispatchEvent(
          new CustomEvent("konara:nara-ready"),
        );
      }
    };

    const scriptAlreadyExists =
      document.getElementById(
        VOICEFLOW_SCRIPT_ID,
      ) as HTMLScriptElement | null;

    if (window.voiceflow?.chat) {
      void initialiseVoiceflow();
    } else if (scriptAlreadyExists) {
      const onLoad = () => {
        void initialiseVoiceflow();
      };

      scriptAlreadyExists.addEventListener(
        "load",
        onLoad,
        { once: true },
      );

      return () => {
        cancelled = true;
        scriptAlreadyExists.removeEventListener(
          "load",
          onLoad,
        );
      };
    } else {
      const script = document.createElement("script");

      script.id = VOICEFLOW_SCRIPT_ID;
      script.src =
        "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      script.type = "text/javascript";
      script.async = true;

      script.onload = () => {
        void initialiseVoiceflow();
      };

      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, [
    language.code,
    copy.assistant.ask,
    copy.assistant.text,
    copy.assistant.voiceText,
  ]);

  /*
    No visible launcher is rendered here.
    NaraRobot is the single public entry point.
  */
  return null;
}
