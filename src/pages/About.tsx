import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/about.css";

const principles = [
  {
    number: "01",
    title: "Start with the problem",
    text: "Technology only matters when it improves something real. KONARA begins by understanding the business problem before choosing the system.",
  },
  {
    number: "02",
    title: "Keep the customer journey connected",
    text: "Conversations, websites, leads, bookings and follow-ups should work together instead of becoming separate experiences.",
  },
  {
    number: "03",
    title: "Build around the business",
    text: "Different companies work differently. KONARA designs systems around existing people, workflows and goals.",
  },
  {
    number: "04",
    title: "Improve after launch",
    text: "A live system creates new information. Real usage should guide the next improvements instead of assuming everything is finished on day one.",
  },
];

const capabilities = [
  "AI Reception",
  "Lead Capture",
  "Appointment Booking",
  "CRM",
  "Automation",
  "Analytics",
  "Website Design",
];

export default function About() {
  return (
    <div className="about-page" data-konara-guide="about">
      {/* HERO */}

      <section className="about-hero">
        <div className="about-hero-grid" />
        <div className="about-hero-glow" />

        <div className="page-shell about-hero-inner">
          <motion.div
            className="about-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="about-kicker">
              <span />
              ABOUT KONARA
            </div>

            <h1>
              Building smarter ways
              <span> to do business.</span>
            </h1>

            <p>
              KONARA is building intelligent systems that connect customer
              conversations, business workflows and digital experiences into
              one clearer journey.
            </p>
          </motion.div>

          <motion.div
            className="about-hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="about-ring about-ring-one" />
            <div className="about-ring about-ring-two" />
            <div className="about-ring about-ring-three" />

            <div className="about-core">
              <div className="about-core-mark">K</div>
              <small>KONARA</small>
              <strong>INTELLIGENCE</strong>
            </div>

            <div className="about-orbit-label orbit-customers">
              CUSTOMERS
            </div>

            <div className="about-orbit-label orbit-systems">
              SYSTEMS
            </div>

            <div className="about-orbit-label orbit-action">
              ACTION
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHT MISSION */}

      <section className="about-light-section">
        <div className="about-light-wave" />

        <div className="page-shell about-light-layout">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="dark-eyebrow">WHY KONARA EXISTS</div>

            <h2>
              Business technology should
              <span> reduce friction.</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-light-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p>
              Businesses often end up with customer conversations in one
              place, leads somewhere else, bookings in another system and
              important follow-ups depending on manual work.
            </p>

            <p>
              KONARA's goal is to connect those moments intelligently so the
              business can respond faster, stay organised and create a better
              customer experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IDEA */}

      <section className="about-idea-section">
        <div className="page-shell about-idea-layout">
          <motion.div
            className="about-idea-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-eyebrow">THE IDEA</div>

            <h2>
              One intelligent layer
              <span> between conversation and action.</span>
            </h2>

            <p>
              A customer asking a question should be able to become a lead,
              book an appointment, update a CRM and enter the right follow-up
              journey without every step requiring another disconnected tool
              or manual process.
            </p>

            <Link to="/solutions" className="button button-glass">
              Explore KONARA Solutions
              <span>↗</span>
            </Link>
          </motion.div>

          <motion.div
            className="about-system-map"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="about-map-line" />

            {capabilities.map((capability, index) => (
              <div
                className={`about-map-item ${
                  index === 0 || index === capabilities.length - 1
                    ? "about-map-highlight"
                    : ""
                }`}
                key={capability}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>

                <span>{capability}</span>

                <div />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES */}

      <section className="about-principles-section">
        <div className="page-shell">
          <div className="about-principles-heading">
            <div>
              <div className="section-eyebrow">HOW WE THINK</div>

              <h2>
                Principles before
                <span> features.</span>
              </h2>
            </div>

            <p>
              Good systems are not built by adding technology everywhere.
              They are built by understanding what should happen, when it
              should happen and why.
            </p>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle, index) => (
              <motion.article
                className="about-principle-card"
                key={principle.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >
                <span className="about-principle-number">
                  {principle.number}
                </span>

                <div className="about-principle-line" />

                <h3>{principle.title}</h3>

                <p>{principle.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT VISION */}

      <section className="about-vision-section">
        <div className="about-vision-wave about-vision-wave-one" />
        <div className="about-vision-wave about-vision-wave-two" />

        <div className="page-shell about-vision-layout">
          <div>
            <div className="dark-eyebrow">THE DIRECTION</div>

            <h2>
              From individual tools
              <span> toward KONARA OS.</span>
            </h2>
          </div>

          <div className="about-vision-copy">
            <p>
              The long-term KONARA vision is an intelligent business layer
              where customer-facing AI, lead capture, booking, CRM,
              communication and analytics can operate as one connected system.
            </p>

            <Link to="/solutions" className="about-dark-link">
              Explore the system
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* NARA */}

      <section className="about-nara-section">
        <div className="about-nara-glow" />

        <div className="page-shell about-nara-layout">
          <motion.div
            className="about-nara-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="nara-orbit nara-orbit-one" />
            <div className="nara-orbit nara-orbit-two" />

            <div className="nara-core">
              <small>KONARA AI</small>
              <strong>NARA</strong>
              <span>INTELLIGENT GUIDE</span>
            </div>

            <div className="nara-status">
              <span />
              READY
            </div>
          </motion.div>

          <motion.div
            className="about-nara-copy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-eyebrow">MEET NARA</div>

            <h2>
              The intelligence
              <span> inside the experience.</span>
            </h2>

            <p>
              NARA is KONARA's intelligent business guide, designed to help
              visitors understand the company, explore relevant solutions and
              navigate the KONARA experience.
            </p>

            <p>
              Over time, NARA can become part of a broader demonstration of
              what intelligent customer experiences can look like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-final-section">
        <div className="about-final-glow" />

        <div className="page-shell about-final-inner">
          <div className="section-eyebrow">BUILD WITH KONARA</div>

          <h2>
            The best place to start
            <span> is the business problem.</span>
          </h2>

          <p>
            Tell us what is creating friction and we'll help identify where an
            intelligent system could make sense.
          </p>

          <Link to="/contact" className="button button-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}