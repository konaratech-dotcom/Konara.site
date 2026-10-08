import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/copy";
import { getContactStatus } from "../i18n/contactStatus";

import "../styles/contact.css";

const enquiryTypes = [
  "AI & Automation",
  "Website Design & Development",
  "KONARA OS",
  "Business Consultation",
  "Something Else",
];

export default function Contact() {
  const { language } = useLocale();
  const copy = getCopy(language.code);
  const statusCopy = getContactStatus(language.code);

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      enquiry: String(data.get("enquiry") ?? "").trim(),
      business: String(data.get("business") ?? "").trim(),
      problem: String(data.get("problem") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.enquiry ||
      !payload.business ||
      !payload.problem
    ) {
      setSubmitError(copy.common.required);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setSubmitError(copy.common.invalidEmail);
      return;
    }

    setSending(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("CONTACT_DELIVERY_FAILED");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setSubmitError(statusCopy.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page" data-konara-guide="contact">
      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-hero-grid" />
        <div className="contact-hero-glow contact-glow-one" />
        <div className="contact-hero-glow contact-glow-two" />

        <div className="page-shell contact-hero-inner">
          <motion.div
            className="contact-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="contact-kicker">
              <span />
              CONTACT KONARA
            </div>

            <h1>
              Start with
              <span> the problem.</span>
            </h1>

            <p>
              Tell us what your business is trying to improve. We’ll help
              identify where AI, automation, a website or a connected KONARA
              system could make sense.
            </p>
          </motion.div>

          <motion.div
            className="contact-hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.82, delay: 0.1 }}
          >
            <div className="contact-orbit contact-orbit-one" />
            <div className="contact-orbit contact-orbit-two" />
            <div className="contact-orbit contact-orbit-three" />

            <div className="contact-core">
              <small>KONARA</small>
              <strong>LET’S TALK</strong>
              <span>BUSINESS → SYSTEM</span>
            </div>

            <div className="contact-node contact-node-ai">AI</div>
            <div className="contact-node contact-node-web">WEB</div>
            <div className="contact-node contact-node-auto">AUTO</div>
          </motion.div>
        </div>
      </section>

      {/* LIGHT INTRO */}

      <section className="contact-light-section">
        <div className="contact-light-wave" />

        <div className="page-shell contact-light-layout">
          <div>
            <div className="dark-eyebrow">NO TECHNICAL BRIEF REQUIRED</div>

            <h2>
              You don’t need to know
              <span> what system you need yet.</span>
            </h2>
          </div>

          <div>
            <p>
              Describe the business, the customer journey or the repetitive
              work causing friction. KONARA can help translate the problem into
              the right technical direction.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="contact-form-section">
        <div className="contact-form-glow" />

        <div className="page-shell contact-form-layout">
          <motion.div
            className="contact-form-intro"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="section-eyebrow">PROJECT ENQUIRY</div>

            <h2>
              Tell us a little
              <span> about what you need.</span>
            </h2>

            <p>
              The more context you provide, the easier it is to understand
              where KONARA may be useful.
            </p>

            <div className="contact-info-stack">
              <div className="contact-info-item">
                <span>01</span>

                <div>
                  <strong>Your business</strong>
                  <p>What does the company do?</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span>02</span>

                <div>
                  <strong>The problem</strong>
                  <p>Where is the friction or repetitive work?</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span>03</span>

                <div>
                  <strong>The outcome</strong>
                  <p>What would a better experience look like?</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <label className="contact-honeypot" aria-hidden="true">
                  <span>Website</span>
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>

                <div className="contact-form-row">
                  <label>
                    <span>Name</span>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    <span>Company</span>

                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                    />
                  </label>
                </div>

                <div className="contact-form-row">
                  <label>
                    <span>Email</span>

                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      required
                    />
                  </label>

                  <label>
                    <span>What can we help with?</span>

                    <select name="enquiry" defaultValue="" required>
                      <option value="" disabled>
                        Select an option
                      </option>

                      {enquiryTypes.map((type) => (
                        <option value={type} key={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="contact-full-field">
                  <span>Tell us about the business</span>

                  <textarea
                    name="business"
                    rows={4}
                    placeholder="What does your business do?"
                    required
                  />
                </label>

                <label className="contact-full-field">
                  <span>What would you like to improve?</span>

                  <textarea
                    name="problem"
                    rows={5}
                    placeholder="Tell us about the customer journey, workflow or problem you're trying to improve."
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={sending}
                  aria-busy={sending}
                >
                  {sending ? statusCopy.sending : copy.contact.send}
                  <span aria-hidden="true">{sending ? "•" : "↗"}</span>
                </button>

                {submitError && (
                  <p
                    className="contact-form-error"
                    role="alert"
                    data-konara-no-translate
                  >
                    {submitError}
                  </p>
                )}
              </form>
            ) : (
              <div className="contact-success">
                <div className="contact-success-mark">✓</div>

                <small>KONARA</small>

                <div data-konara-no-translate>
                  <h3>{statusCopy.successTitle}</h3>

                  <p>{statusCopy.successText}</p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError("");
                    }}
                  >
                    {statusCopy.returnToForm}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* NARA */}

      <section className="contact-nara-section">
        <div className="page-shell contact-nara-layout">
          <motion.div
            className="contact-nara-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="contact-nara-ring ring-a" />
            <div className="contact-nara-ring ring-b" />

            <div className="contact-nara-core">
              <small>KONARA AI</small>
              <strong>NARA</strong>
              <span>BUSINESS GUIDE</span>
            </div>

            <div className="contact-nara-status">
              <span />
              AVAILABLE
            </div>
          </motion.div>

          <motion.div
            className="contact-nara-copy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-eyebrow">NOT SURE WHERE TO START?</div>

            <h2>
              NARA can help
              <span> narrow it down.</span>
            </h2>

            <p>
              KONARA’s intelligent business guide can help visitors understand
              the company, explore solutions and work out which direction may
              be most relevant before contacting the team.
            </p>

            <div className="contact-nara-tags">
              <span>Ask questions</span>
              <span>Find a solution</span>
              <span>About KONARA</span>
              <span>Website guidance</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHT NEXT STEP */}

      <section className="contact-next-section">
        <div className="contact-next-wave contact-next-wave-one" />
        <div className="contact-next-wave contact-next-wave-two" />

        <div className="page-shell contact-next-layout">
          <div>
            <div className="dark-eyebrow">WHAT HAPPENS NEXT?</div>

            <h2>
              Understand first.
              <span> Build second.</span>
            </h2>
          </div>

          <div className="contact-next-steps">
            <div>
              <span>01</span>

              <div>
                <strong>Understand</strong>
                <p>Learn how the business currently works.</p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <strong>Identify</strong>
                <p>Find the highest-value friction to improve.</p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <strong>Design</strong>
                <p>Shape the right KONARA system around it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}

      <section className="contact-final-section">
        <div className="contact-final-glow" />

        <div className="page-shell contact-final-inner">
          <div className="section-eyebrow">KONARA</div>

          <h2>
            Better systems begin with
            <span> better understanding.</span>
          </h2>

          <p>
            Bring the business problem. We’ll work from there.
          </p>
        </div>
      </section>
    </div>
  );
}