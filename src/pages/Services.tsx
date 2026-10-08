import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/services.css";

const services = [
  {
    number: "01",
    eyebrow: "AI & CUSTOMER EXPERIENCE",
    title: "AI Receptionist",
    text: "Give customers a fast, intelligent first point of contact that can answer questions, understand intent, qualify enquiries and route conversations correctly.",
    points: [
      "24/7 customer conversations",
      "Intent recognition",
      "Lead qualification",
      "Human handoff",
    ],
  },
  {
    number: "02",
    eyebrow: "LEAD GENERATION",
    title: "Lead Capture",
    text: "Turn website traffic and conversations into structured opportunities instead of letting valuable enquiries disappear.",
    points: [
      "Customer detail capture",
      "Interest qualification",
      "Lead routing",
      "Follow-up context",
    ],
  },
  {
    number: "03",
    eyebrow: "CUSTOMER ACTION",
    title: "Appointment Booking",
    text: "Create smoother journeys from enquiry to confirmed appointment while reducing repetitive coordination for your team.",
    points: [
      "Availability workflows",
      "Booking journeys",
      "Confirmations",
      "Reminders",
    ],
  },
  {
    number: "04",
    eyebrow: "CUSTOMER SYSTEMS",
    title: "CRM Integration",
    text: "Connect customer information, conversations and follow-up activity with the systems your business already uses.",
    points: [
      "Customer records",
      "Conversation history",
      "Lead visibility",
      "Team handoffs",
    ],
  },
  {
    number: "05",
    eyebrow: "AUTOMATION",
    title: "Business Automation",
    text: "Reduce repetitive work by connecting the tasks, customer journeys and operational processes that keep your business moving.",
    points: [
      "Workflow automation",
      "Information routing",
      "Customer updates",
      "Internal handoffs",
    ],
  },
  {
    number: "06",
    eyebrow: "INSIGHT",
    title: "Analytics",
    text: "Turn customer activity and operational information into a clearer view of what is happening across the business.",
    points: [
      "Activity overview",
      "Lead visibility",
      "Performance signals",
      "Business insight",
    ],
  },
  {
    number: "07",
    eyebrow: "DIGITAL EXPERIENCE",
    title: "Website Design & Development",
    text: "Modern responsive websites built around clarity, conversion and the intelligent systems working behind the experience.",
    points: [
      "Business websites",
      "Landing pages",
      "Responsive builds",
      "Advanced experiences",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand the business, customer journey and the problem worth solving.",
  },
  {
    number: "02",
    title: "Design",
    text: "We map the experience, workflows, information flow and system structure.",
  },
  {
    number: "03",
    title: "Build",
    text: "We create the AI, website and automation components required for the solution.",
  },
  {
    number: "04",
    title: "Test",
    text: "We test conversations, edge cases, handoffs and customer journeys before launch.",
  },
  {
    number: "05",
    title: "Launch",
    text: "We deploy the system into the business and connect the required workflows.",
  },
  {
    number: "06",
    title: "Improve",
    text: "Real usage and feedback reveal opportunities to refine the experience over time.",
  },
];

export default function Services() {
  return (
    <div className="services-page" data-konara-guide="services">
      {/* HERO */}

      <section className="services-hero">
        <div className="services-grid-bg" />
        <div className="services-hero-glow" />

        <div className="page-shell services-hero-layout">
          <motion.div
            className="services-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="services-kicker">
              <span />
              KONARA SERVICES
            </div>

            <h1>
              Built around
              <span> your business.</span>
            </h1>

            <p>
              KONARA designs and implements intelligent customer experiences,
              automation systems and digital products around the way your
              company actually works.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact" className="button button-primary">
                Start a Project
              </Link>

              <a href="#services-list" className="button button-glass">
                Explore Services
                <span>↓</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="services-hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <div className="services-visual-ring ring-one" />
            <div className="services-visual-ring ring-two" />
            <div className="services-visual-ring ring-three" />

            <div className="services-core">
              <small>KONARA</small>
              <strong>SYSTEM</strong>
            </div>

            <div className="services-node node-ai">AI</div>
            <div className="services-node node-web">WEB</div>
            <div className="services-node node-crm">CRM</div>
            <div className="services-node node-data">DATA</div>
          </motion.div>
        </div>
      </section>

      {/* LIGHT INTRO */}

      <section className="services-light-section">
        <div className="services-light-wave" />

        <div className="page-shell services-light-layout">
          <div>
            <div className="dark-eyebrow">THE DIFFERENCE</div>

            <h2>
              Not every business needs
              <span> the same automation.</span>
            </h2>
          </div>

          <div className="services-light-copy">
            <p>
              KONARA starts with the customer journey, the operational problem
              and the systems already in place. The technology comes after the
              problem is understood.
            </p>

            <Link to="/about" className="services-dark-link">
              Learn how KONARA works
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-list-section" id="services-list">
        <div className="page-shell">
          <div className="services-section-header">
            <div>
              <div className="section-eyebrow">WHAT WE CAN BUILD</div>

              <h2>
                Focused services.
                <span> Connected when needed.</span>
              </h2>
            </div>

            <p>
              Start with one business problem or connect multiple capabilities
              into a larger KONARA system.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <motion.article
                className="service-row"
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.04, 0.16),
                }}
              >
                <div className="service-row-number">{service.number}</div>

                <div className="service-row-visual">
                  <div className="service-row-grid" />

                  <div className="service-row-center">
                    <small>KONARA</small>
                    <strong>{service.number}</strong>
                  </div>

                  <div className="service-row-ring ring-a" />
                  <div className="service-row-ring ring-b" />
                </div>

                <div className="service-row-copy">
                  <span>{service.eyebrow}</span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <div className="service-row-points">
                    {service.points.map((point) => (
                      <div key={point}>
                        <span />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={
                    service.title === "Website Design & Development"
                      ? "/website"
                      : "/contact"
                  }
                  className="service-row-action"
                >
                  ↗
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM THINKING */}

      <section className="services-system-section">
        <div className="services-system-glow" />

        <div className="page-shell services-system-layout">
          <motion.div
            className="services-system-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-eyebrow">SYSTEM THINKING</div>

            <h2>
              One service can solve a problem.
              <span> A connected system can transform the journey.</span>
            </h2>

            <p>
              A customer conversation can become a qualified lead, trigger a
              booking, update the CRM, start a follow-up journey and appear in
              analytics — without every step becoming another manual task.
            </p>

            <Link to="/solutions" className="button button-glass">
              Explore KONARA Solutions
              <span>↗</span>
            </Link>
          </motion.div>

          <motion.div
            className="services-system-flow"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="system-flow-item active">
              <small>01</small>
              <span>Customer conversation</span>
              <div />
            </div>

            <div className="system-flow-item">
              <small>02</small>
              <span>Lead qualification</span>
              <div />
            </div>

            <div className="system-flow-item">
              <small>03</small>
              <span>Booking or next action</span>
              <div />
            </div>

            <div className="system-flow-item">
              <small>04</small>
              <span>CRM update</span>
              <div />
            </div>

            <div className="system-flow-item">
              <small>05</small>
              <span>Automated follow-up</span>
              <div />
            </div>

            <div className="system-flow-item active">
              <small>06</small>
              <span>Analytics & insight</span>
              <div />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="services-process">
        <div className="page-shell">
          <div className="services-process-header">
            <div className="section-eyebrow">OUR PROCESS</div>

            <h2>
              From business problem
              <span> to working system.</span>
            </h2>
          </div>

          <div className="services-process-grid">
            {process.map((item, index) => (
              <motion.div
                className="services-process-item"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <span className="services-process-number">{item.number}</span>

                <div className="services-process-line" />

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT WEB CTA */}

      <section className="services-web-section">
        <div className="services-web-wave services-web-wave-left" />
        <div className="services-web-wave services-web-wave-right" />

        <div className="page-shell services-web-layout">
          <div>
            <div className="dark-eyebrow">KONARA WEB</div>

            <h2>
              Need the digital experience
              <span> as well as the system?</span>
            </h2>
          </div>

          <div>
            <p>
              KONARA can design and build the website customers interact with,
              then connect it to the intelligent workflows operating behind the
              experience.
            </p>

            <Link to="/website" className="services-web-button">
              Explore Website Design
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="services-final-cta">
        <div className="services-final-glow" />

        <div className="page-shell services-final-inner">
          <div className="section-eyebrow">START WITH THE PROBLEM</div>

          <h2>
            Tell us what is
            <span> slowing the business down.</span>
          </h2>

          <p>
            We’ll help identify which customer journey, workflow or system is
            worth improving first.
          </p>

          <Link to="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}