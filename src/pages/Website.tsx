import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/website.css";

const websiteTypes = [
  {
    number: "01",
    label: "BUSINESS",
    title: "Business Websites",
    text: "Clear, professional websites built around credibility, customer journeys and the information people actually need.",
  },
  {
    number: "02",
    label: "CONVERSION",
    title: "Landing Pages",
    text: "Focused pages designed around one offer, one audience and one clear action.",
  },
  {
    number: "03",
    label: "RESPONSIVE",
    title: "Mobile-first Builds",
    text: "Experiences designed to feel intentional across desktop, tablet and mobile instead of simply shrinking the desktop layout.",
  },
  {
    number: "04",
    label: "ADVANCED",
    title: "Advanced Websites",
    text: "More sophisticated digital experiences for businesses that need deeper interactions, custom sections and intelligent systems behind the interface.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business, audience, goals and customer journey.",
  },
  {
    number: "02",
    title: "Design",
    text: "Shape the structure, visual direction and user experience before development.",
  },
  {
    number: "03",
    title: "Build",
    text: "Develop the responsive website and connect the required functionality.",
  },
  {
    number: "04",
    title: "Test",
    text: "Check devices, layouts, interactions, links and customer journeys.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Deploy the finished website and connect the production systems.",
  },
  {
    number: "06",
    title: "Improve",
    text: "Use real activity, feedback and business needs to refine the site over time.",
  },
];

const connectedSystems = [
  "AI Receptionist",
  "Lead Capture",
  "Appointment Booking",
  "CRM",
  "WhatsApp",
  "Email Follow-ups",
  "Analytics",
];

export default function Website() {
  return (
    <div className="website-page" data-konara-guide="website">
      {/* HERO */}

      <section className="website-hero">
        <div className="website-hero-grid" />
        <div className="website-hero-glow website-glow-one" />
        <div className="website-hero-glow website-glow-two" />

        <div className="page-shell website-hero-inner">
          <motion.div
            className="website-hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="website-kicker">
              <span />
              KONARA WEB
            </div>

            <h1>
              Websites built to
              <span> do business.</span>
            </h1>

            <p>
              KONARA designs and develops premium responsive websites built
              around clarity, conversion and the intelligent systems operating
              behind the customer experience.
            </p>

            <div className="website-hero-actions">
              <Link to="/contact" className="button button-primary">
                Start a Website Project
              </Link>

              <a href="#website-types" className="button button-glass">
                Explore what we build
                <span>↓</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="website-hero-visual"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.82, delay: 0.12 }}
          >
            <div className="website-browser">
              <div className="website-browser-top">
                <div className="website-browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="website-browser-address">
                  yourbusiness.com
                </div>

                <div className="website-browser-status">
                  <span />
                  LIVE
                </div>
              </div>

              <div className="website-browser-content">
                <div className="website-demo-nav">
                  <div className="website-demo-logo">K</div>

                  <div className="website-demo-links">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="website-demo-hero">
                  <small>BUILT BY KONARA</small>

                  <h3>
                    A better digital
                    <br />
                    first impression.
                  </h3>

                  <div className="website-demo-copy" />

                  <div className="website-demo-buttons">
                    <span />
                    <span />
                  </div>
                </div>

                <div className="website-demo-grid">
                  <div>
                    <span />
                    <span />
                  </div>

                  <div>
                    <span />
                    <span />
                  </div>

                  <div>
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>

            <div className="website-phone">
              <div className="website-phone-notch" />

              <div className="website-phone-inner">
                <div className="website-phone-logo">K</div>

                <div className="website-phone-title" />
                <div className="website-phone-title short" />

                <div className="website-phone-copy" />

                <div className="website-phone-button" />

                <div className="website-phone-card" />
                <div className="website-phone-card small" />
              </div>
            </div>

            <div className="website-floating-tag tag-responsive">
              RESPONSIVE
            </div>

            <div className="website-floating-tag tag-connected">
              CONNECTED
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHT INTRO */}

      <section className="website-light-intro">
        <div className="website-light-wave" />

        <div className="page-shell website-light-grid">
          <div>
            <div className="dark-eyebrow">MORE THAN A FRONT PAGE</div>

            <h2>
              Your website should
              <span> move the customer forward.</span>
            </h2>
          </div>

          <div>
            <p>
              A good website should explain the business clearly, build trust
              and make the next step obvious. When useful, KONARA can also
              connect that experience directly to AI, lead capture, booking,
              CRM and follow-up systems.
            </p>
          </div>
        </div>
      </section>

      {/* WEBSITE TYPES */}

      <section className="website-types-section" id="website-types">
        <div className="page-shell">
          <div className="website-section-header">
            <div>
              <div className="section-eyebrow">WHAT WE BUILD</div>

              <h2>
                From focused pages
                <span> to advanced websites.</span>
              </h2>
            </div>

            <p>
              The right website depends on what your business needs customers
              to understand, trust and do.
            </p>
          </div>

          <div className="website-types-grid">
            {websiteTypes.map((item, index) => (
              <motion.article
                className="website-type-card"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >
                <div className="website-type-top">
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </div>

                <div className="website-type-visual">
                  <div className="website-type-grid" />

                  <div className="website-type-screen">
                    <div className="type-screen-nav" />
                    <div className="type-screen-heading" />
                    <div className="type-screen-heading short" />
                    <div className="type-screen-button" />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIVE EXPERIENCE */}

      <section className="website-responsive-section">
        <div className="website-responsive-glow" />

        <div className="page-shell website-responsive-layout">
          <motion.div
            className="website-responsive-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-eyebrow">RESPONSIVE BY DESIGN</div>

            <h2>
              Desktop quality.
              <span> Mobile quality.</span>
            </h2>

            <p>
              Mobile is not treated as a smaller desktop version. Layout,
              spacing, navigation and interaction are designed intentionally
              for different screen sizes.
            </p>

            <div className="responsive-badges">
              <span>Desktop</span>
              <span>Tablet</span>
              <span>Mobile</span>
            </div>
          </motion.div>

          <motion.div
            className="responsive-devices"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="responsive-desktop">
              <div className="responsive-desktop-bar" />

              <div className="responsive-desktop-body">
                <span className="responsive-eyebrow" />
                <span className="responsive-heading" />
                <span className="responsive-heading short" />
                <span className="responsive-copy-line" />
                <span className="responsive-button" />

                <div className="responsive-card-grid">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="responsive-tablet">
              <div className="responsive-device-notch" />

              <div className="responsive-device-body">
                <span className="responsive-device-logo" />
                <span className="responsive-device-heading" />
                <span className="responsive-device-heading short" />
                <span className="responsive-device-copy" />
                <span className="responsive-device-button" />
              </div>
            </div>

            <div className="responsive-phone">
              <div className="responsive-device-notch" />

              <div className="responsive-device-body">
                <span className="responsive-device-logo" />
                <span className="responsive-device-heading" />
                <span className="responsive-device-heading short" />
                <span className="responsive-device-copy" />
                <span className="responsive-device-button" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONNECTED SYSTEMS */}

      <section className="website-connected-section">
        <div className="page-shell website-connected-layout">
          <div>
            <div className="section-eyebrow">CONNECTED TO KONARA</div>

            <h2>
              The website can become
              <span> part of the system.</span>
            </h2>

            <p>
              Instead of ending with a contact form, the customer journey can
              continue into the tools and workflows your business actually
              uses.
            </p>

            <Link to="/solutions" className="button button-glass">
              Explore KONARA Solutions
              <span>↗</span>
            </Link>
          </div>

          <div className="website-connected-flow">
            <div className="connected-flow-line" />

            {connectedSystems.map((system, index) => (
              <motion.div
                className={`connected-flow-item ${
                  index === 0 || index === connectedSystems.length - 1
                    ? "connected-flow-highlight"
                    : ""
                }`}
                key={system}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>

                <span>{system}</span>

                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS LIGHT */}

      <section className="website-process-section">
        <div className="website-process-wave website-process-wave-one" />
        <div className="website-process-wave website-process-wave-two" />

        <div className="page-shell">
          <div className="website-process-heading">
            <div className="dark-eyebrow">THE PROCESS</div>

            <h2>
              From first idea
              <span> to live website.</span>
            </h2>
          </div>

          <div className="website-process-grid">
            {process.map((item, index) => (
              <motion.div
                className="website-process-item"
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.05,
                }}
              >
                <span>{item.number}</span>

                <div className="website-process-line" />

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="website-projects">
        <div className="page-shell">
          <div className="website-projects-heading">
            <div>
              <div className="section-eyebrow">SELECTED WORK</div>

              <h2>
                Built to feel
                <span> like the business.</span>
              </h2>
            </div>

            <p>
              KONARA projects will appear here as the portfolio grows.
            </p>
          </div>

          <div className="website-project-placeholder">
            <div className="project-placeholder-grid" />

            <div className="project-placeholder-copy">
              <small>KONARA WEB</small>

              <h3>Projects coming soon.</h3>

              <p>
                Current work is being prepared for the KONARA portfolio.
              </p>
            </div>

            <div className="project-placeholder-mark">K</div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="website-final-cta">
        <div className="website-final-glow" />

        <div className="page-shell website-final-inner">
          <div className="section-eyebrow">KONARA WEB</div>

          <h2>
            Build a website
            <span> that actually works for the business.</span>
          </h2>

          <p>
            Tell us what you need the website to achieve and we’ll help shape
            the right digital experience around it.
          </p>

          <Link to="/contact" className="button button-primary">
            Start a Website Project
          </Link>
        </div>
      </section>
    </div>
  );
}