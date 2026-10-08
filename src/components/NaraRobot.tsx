import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/copy";

import "../styles/nara-robot.css";

type EyePosition = {
  x: number;
  y: number;
};

type NaraView =
  | "home"
  | "what"
  | "solutions"
  | "system";

function splitCopy(value: string) {
  const [first = "", ...rest] = value.split("|");

  return {
    first: first.trim(),
    second: rest.join("|").trim(),
  };
}

export default function NaraRobot() {
  const navigate = useNavigate();
  const { language } = useLocale();
  const copy = getCopy(language.code);

  const [open, setOpen] = useState(false);
  const [view, setView] = useState<NaraView>("home");
  const [voiceReady, setVoiceReady] = useState(
    Boolean(window.voiceflow?.chat),
  );

  const [eye, setEye] = useState<EyePosition>({
    x: 0,
    y: 0,
  });

  const aboutHero = splitCopy(copy.about.hero);
  const solutionsHero = splitCopy(copy.solutions.hero);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      const x =
        (
          event.clientX /
            window.innerWidth -
          0.5
        ) * 5;

      const y =
        (
          event.clientY /
            window.innerHeight -
          0.5
        ) * 5;

      setEye({
        x: Math.max(-2.5, Math.min(2.5, x)),
        y: Math.max(-2.5, Math.min(2.5, y)),
      });
    };

    window.addEventListener(
      "mousemove",
      move,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        move,
      );
    };
  }, []);

  useEffect(() => {
    const ready = () => setVoiceReady(true);

    if (window.voiceflow?.chat) {
      setVoiceReady(true);
    }

    window.addEventListener(
      "konara:nara-ready",
      ready,
    );

    return () => {
      window.removeEventListener(
        "konara:nara-ready",
        ready,
      );
    };
  }, []);

  const go = (path: string) => {
    setOpen(false);
    setView("home");

    navigate(path);

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const openVoiceflow = () => {
    const chat = window.voiceflow?.chat;

    if (!chat) {
      setVoiceReady(false);
      return;
    }

    chat.open();
    setVoiceReady(true);
    setOpen(false);
  };

  return (
    <div
      className="konara-nara-dock"
      data-konara-no-translate
    >
      {open && (
        <div className="konara-nara-panel">
          <header className="konara-nara-panel-top">
            <div className="konara-nara-identity">
              <MiniRobot eye={eye} />

              <div>
                <strong>NARA</strong>
                <span>{copy.assistant.title}</span>
              </div>
            </div>

            <button
              type="button"
              className="konara-nara-close"
              onClick={() => {
                setOpen(false);
                setView("home");
              }}
              aria-label="NARA"
            >
              ×
            </button>
          </header>

          <div className="konara-nara-panel-body">
            {view === "home" && (
              <>
                <div className="konara-nara-status">
                  <i />
                  {copy.assistant.welcome}
                </div>

                <h3>{copy.assistant.menuTitle}</h3>

                <p className="konara-nara-intro">
                  {copy.assistant.text}
                </p>

                <div className="konara-nara-actions">
                  <NaraAction
                    title={copy.about.eyebrow}
                    text={copy.about.text}
                    onClick={() => setView("what")}
                  />

                  <NaraAction
                    title={copy.assistant.explore}
                    text={copy.solutions.text}
                    onClick={() => setView("solutions")}
                  />

                  <NaraAction
                    title={copy.home.osTitle}
                    text={copy.home.osText}
                    onClick={() => setView("system")}
                  />

                  <NaraAction
                    title="KONARA WEB"
                    text={copy.services.text}
                    onClick={() => go("/website")}
                  />
                </div>
              </>
            )}

            {view === "what" && (
              <NaraInfo
                eyebrow={copy.about.eyebrow}
                title={
                  [aboutHero.first, aboutHero.second]
                    .filter(Boolean)
                    .join(" ")
                }
                text={copy.about.text}
                second={copy.about.whyText}
                back={() => setView("home")}
                backLabel={copy.nav[0]}
                action={() => go("/about")}
                actionText={copy.nav[3]}
              />
            )}

            {view === "solutions" && (
              <NaraInfo
                eyebrow={copy.solutions.eyebrow}
                title={
                  [solutionsHero.first, solutionsHero.second]
                    .filter(Boolean)
                    .join(" ")
                }
                text={copy.solutions.text}
                second={copy.solutions.customText}
                back={() => setView("home")}
                backLabel={copy.nav[0]}
                action={() => go("/solutions")}
                actionText={copy.nav[1]}
              />
            )}

            {view === "system" && (
              <NaraInfo
                eyebrow="KONARA OS"
                title={copy.home.osTitle}
                text={copy.home.osText}
                second={copy.services.existingText}
                back={() => setView("home")}
                backLabel={copy.nav[0]}
                action={() => go("/services")}
                actionText={copy.nav[2]}
              />
            )}
          </div>

          <div className="konara-nara-panel-footer">
            <button
              type="button"
              onClick={openVoiceflow}
              disabled={!voiceReady}
            >
              <span className="konara-nara-live-dot" />
              {copy.assistant.ask}
              <b>↗</b>
            </button>

            <button
              type="button"
              onClick={() => go("/contact")}
            >
              {copy.nav[4]}
            </button>
          </div>
        </div>
      )}

      {!open && (
        <div
          className="konara-nara-hint"
          aria-hidden="true"
        >
          {copy.assistant.ask}
        </div>
      )}

      <button
        type="button"
        className={
          open
            ? "konara-nara-button active"
            : "konara-nara-button"
        }
        onClick={() => {
          setOpen((current) => !current);
          setView("home");
        }}
        aria-label={copy.assistant.ask}
      >
        <span
          className="konara-nara-pulse"
          aria-hidden="true"
        />

        <span
          className="konara-nara-ring"
          aria-hidden="true"
        />

        {open ? (
          <span className="konara-nara-x">
            ×
          </span>
        ) : (
          <RobotFace eye={eye} />
        )}

        {!open && (
          <span
            className="konara-nara-online"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}

function NaraAction({
  title,
  text,
  onClick,
}: {
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="konara-nara-action"
      onClick={onClick}
    >
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
      <b>→</b>
    </button>
  );
}

function NaraInfo({
  eyebrow,
  title,
  text,
  second,
  back,
  backLabel,
  action,
  actionText,
}: {
  eyebrow: string;
  title: string;
  text: string;
  second: string;
  back: () => void;
  backLabel: string;
  action: () => void;
  actionText: string;
}) {
  return (
    <div className="konara-nara-info">
      <div className="konara-nara-info-label">
        {eyebrow}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
      <p>{second}</p>

      <div className="konara-nara-info-buttons">
        <button
          type="button"
          onClick={back}
          aria-label={backLabel}
        >
          ←
        </button>

        <button
          type="button"
          className="primary"
          onClick={action}
        >
          {actionText}
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

function RobotFace({
  eye,
}: {
  eye: EyePosition;
}) {
  return (
    <span
      className="konara-robot-face"
      aria-hidden="true"
    >
      <span className="konara-robot-antenna">
        <i />
      </span>

      <span className="konara-robot-head">
        <span className="konara-robot-eye">
          <i
            style={{
              transform:
                `translate(${eye.x}px, ${eye.y}px)`,
            }}
          />
        </span>

        <span className="konara-robot-eye">
          <i
            style={{
              transform:
                `translate(${eye.x}px, ${eye.y}px)`,
            }}
          />
        </span>

        <span className="konara-robot-mouth" />
      </span>
    </span>
  );
}

function MiniRobot({
  eye,
}: {
  eye: EyePosition;
}) {
  return (
    <div
      className="konara-mini-robot"
      aria-hidden="true"
    >
      <span>
        <i
          style={{
            transform:
              `translate(${eye.x * 0.6}px, ${eye.y * 0.6}px)`,
          }}
        />
      </span>

      <span>
        <i
          style={{
            transform:
              `translate(${eye.x * 0.6}px, ${eye.y * 0.6}px)`,
          }}
        />
      </span>
    </div>
  );
}
