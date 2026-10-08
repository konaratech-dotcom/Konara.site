import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/solutions.css";

const solutions = [
  {
    number: "01",
    code: "AI",
    category: "CUSTOMER CONVERSATIONS",
    title: "AI Receptionist",
    description:
      "An intelligent first point of contact that can answer questions, understand intent, qualify visitors and guide customers toward the right next step.",
    capabilities: [
      "24/7 customer conversations",
      "Intelligent question handling",
      "Lead qualification",
      "Human handoff when needed",
    ],
  },
  {
    number: "02",
    code: "LEAD",
    category: "BUSINESS GROWTH",
    title: "Lead Capture",
    description:
      "Turn website visitors and conversations into structured opportunities your team can understand, prioritise and follow up.",
    capabilities: [
      "Contact capture",
      "Intent qualification",
      "Lead routing",
      "Structured customer context",
    ],
  },
  {
    number: "03",
    code: "BOOK",
    category: "CUSTOMER ACTION",
    title: "Appointment Booking",
    description:
      "Move customers smoothly from questions to confirmed appointments while reducing repetitive coordination for your team.",
    capabilities: [
      "Booking journeys",
      "Availability workflows",
      "Confirmations",
      "Appointment follow-ups",
    ],
  },
  {
    number: "04",
    code: "CRM",
    category: "CUSTOMER DATA",
    title: "Connected CRM",
    description:
      "Keep customer information, conversations, lead activity and follow-up context connected instead of scattered across separate tools.",
    capabilities: [
      "Customer records",
      "Conversation context",
      "Lead visibility",
      "Team handoffs",
    ],
  },
  {
    number: "05",
    code: "WA",
    category: "MESSAGING",
    title: "WhatsApp Automation",
    description:
      "Build useful automated customer journeys around one of the communication channels businesses and customers already rely on.",
    capabilities: [
      "Automated replies",
      "Customer updates",
      "Lead journeys",
      "Follow-up workflows",
    ],
  },
  {
    number: "06",
    code: "MAIL",
    category: "FOLLOW-UP",
    title: "Email Automation",
    description:
      "Keep leads and customers moving with relevant follow-ups based on their previous activity and where they are in the journey.",
    capabilities: [
      "Lead follow-ups",
      "Customer reminders",
      "Automated sequences",
      "Journey-based messaging",
    ],
  },
  {
    number: "07",
    code: "DATA",
    category: "INSIGHT",
    title: "Analytics",
    description:
      "Turn customer interactions and operational activity into clearer information that helps teams understand what is actually happening.",
    capabilities: [
      "Activity overview",
      "Lead visibility",
      "Performance signals",
      "Business insight",
    ],
  },
  {
    number: "08",
    code: "WEB",
    category: "DIGITAL EXPERIENCE",
    title: "Website Design & Development",
    description:
      "Modern responsive websites designed around clarity, conversion and the intelligent systems working behind the customer experience.",
    capabilities: [
      "Business websites",
      "Landing pages",
      "Responsive builds",
      "Advanced digital experiences",
    ],
  },
];

const journey = [
  "Customer arrives",
  "NARA understands intent",
  "Lead is captured",
  "Action is triggered",
  "CRM stays updated",
  "Follow-up continues",
  "Analytics reveal activity",
];

export default function Solutions() {
  return (
    <div className="solutions-page" data-konara-guide="solutions">
      {/* HERO */}

      <section className="solutions-hero">
        <div className="solutions-hero-grid" />
        <div className="solutions-hero-glow" />

        <div className="page-shell solutions-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="solutions-kicker">
              <span />
              KONARA SOLUTIONS
            </div>

            <h1>
              Not more software.
              <span> Better systems.</span>
            </h1>

            <p>
              KONARA combines AI, automation, customer data and digital
              experiences around the way your business actually works.
            </p>

            <div className="solutions-hero-actions">
              <Link to="/contact" className="button button-primary">
                Find the right solution
              </Link>

              <a href="#solutions" className="button button-glass">
                Explore capabilities
                <span>↓</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="solutions-hero-system"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <div className="solutions-system-ring ring-outer" />
            <div className="solutions-system-ring ring-middle" />

            <div className="solutions-system-center">
              <small>KONARA</small>
              <strong>OS</strong>
            </div>

            <div className="solutions-satellite satellite-ai">
              <span>AI</span>
            </div>

            <div className="solutions-satellite satellite-crm">
              <span>CRM</span>
            </div>

            <div className="solutions-satellite satellite-web">
              <span>WEB</span>
            </div>

            <div className="solutions-satellite satellite-data">
              <span>DATA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO LIGHT */}

      <section className="solutions-light-intro">
        <div className="solutions-light-wave" />

        <div className="page-shell solutions-light-grid">
          <div>
            <div className="dark-eyebrow">BUILT AROUND THE BUSINESS</div>

            <h2>
              Start with the friction.
              <span> Then choose the technology.</span>
            </h2>
          </div>

          <div>
            <p>
              A business should not have to reshape itself around software.
              KONARA identifies where conversations, customer information and
              repetitive work break down — then builds the right combination
              around that problem.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      <section className="solutions-products" id="solutions">
        <div className="page-shell">
          <div className="solutions-products-header">
            <div>
              <div className="section-eyebrow">CAPABILITIES</div>

              <h2>
                Build one piece.
                <span> Or connect the whole journey.</span>
              </h2>
            </div>

            <p>
              Each capability can solve a focused problem or become part of a
              wider KONARA system.
            </p>
          </div>

          <div className="solutions-product-list">
            {solutions.map((solution, index) => (
              <motion.article
                className="solutions-product-row"
                key={solution.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.04, 0.18),
                }}
              >
                <div className="product-row-number">
                  {solution.number}
                </div>

                <div className="product-row-visual">
                  <div className="product-row-grid" />

                  <div className="product-row-code">
                    <small>KONARA</small>
                    <strong>{solution.code}</strong>
                  </div>

                  <div className="product-row-orbit orbit-a" />
                  <div className="product-row-orbit orbit-b" />
                </div>

                <div className="product-row-copy">
                  <span className="product-row-category">
                    {solution.category}
                  </span>

                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>

                  <div className="product-row-capabilities">
                    {solution.capabilities.map((item) => (
                      <div key={item}>
                        <span />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="product-row-action"
                  aria-label={solution.title}
                >
                  ↗
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED JOURNEY */}

      <section className="solutions-journey">
        <div className="journey-glow" />

        <div className="page-shell journey-layout">
          <div className="journey-copy">
            <div className="section-eyebrow">THE CONNECTED JOURNEY</div>

            <h2>
              One interaction can
              <span> trigger the whole system.</span>
            </h2>

            <p>
              A conversation should not end when the chat closes. The right
              information can move into lead capture, booking, CRM, follow-up
              and analytics automatically.
            </p>

            <Link to="/contact" className="button button-glass">
              Design my KONARA system
              <span>↗</span>
            </Link>
          </div>

          <div className="journey-flow">
            <div className="journey-line" />

            {journey.map((step, index) => (
              <motion.div
                className="journey-step"
                key={step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                <div className="journey-step-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span>{step}</span>

                <div className="journey-status" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WEB ACCENT */}

      <section className="solutions-web-accent">
        <div className="solutions-web-wave solutions-web-wave-one" />
        <div className="solutions-web-wave solutions-web-wave-two" />

        <div className="page-shell solutions-web-grid">
          <div>
            <div className="dark-eyebrow">KONARA WEB</div>

            <h2>
              The customer journey often
              <span> starts with your website.</span>
            </h2>
          </div>

          <div className="solutions-web-copy">
            <p>
              KONARA can design the digital experience and the intelligent
              systems operating behind it, so the website becomes part of the
              workflow rather than a separate brochure.
            </p>

            <Link to="/website" className="solutions-dark-link">
              Explore Website Design
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="solutions-final">
        <div className="solutions-final-glow" />

        <div className="page-shell solutions-final-inner">
          <div className="section-eyebrow">NOT SURE WHAT YOU NEED?</div>

          <h2>
            Tell us where
            <span> the friction is.</span>
          </h2>

          <p>
            KONARA can help identify which parts of the customer or business
            journey are worth improving first.
          </p>

          <Link to="/contact" className="button button-primary">
            Book a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}