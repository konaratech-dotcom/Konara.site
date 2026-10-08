import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    code: "01",
    eyebrow: "CONVERSATIONS",
    title: "AI Receptionist",
    text: "An intelligent first point of contact that answers questions, understands intent and moves customers toward the right next step.",
    points: ["24/7 conversations", "Lead qualification", "Human handoff"],
    visual: "AI",
  },
  {
    code: "02",
    eyebrow: "GROWTH",
    title: "Lead Capture",
    text: "Turn website traffic and conversations into structured opportunities instead of letting valuable enquiries disappear.",
    points: ["Capture details", "Qualify interest", "Route opportunities"],
    visual: "LEAD",
  },
  {
    code: "03",
    eyebrow: "BOOKING",
    title: "Appointment Booking",
    text: "Move customers from questions to confirmed appointments through a smoother automated booking journey.",
    points: ["Availability", "Confirmation", "Follow-up"],
    visual: "BOOK",
  },
  {
    code: "04",
    eyebrow: "CUSTOMERS",
    title: "Connected CRM",
    text: "Keep customer information, conversations and follow-up activity connected in one clearer workflow.",
    points: ["Customer context", "Conversation history", "Team visibility"],
    visual: "CRM",
  },
  {
    code: "05",
    eyebrow: "MESSAGING",
    title: "WhatsApp Automation",
    text: "Build intelligent customer journeys around the messaging channel your customers already use.",
    points: ["Customer replies", "Updates", "Automated journeys"],
    visual: "WA",
  },
  {
    code: "06",
    eyebrow: "FOLLOW-UP",
    title: "Email Automation",
    text: "Keep leads and customers moving with timely follow-ups based on what actually happened before.",
    points: ["Lead follow-ups", "Reminders", "Customer journeys"],
    visual: "MAIL",
  },
  {
    code: "07",
    eyebrow: "INSIGHT",
    title: "Analytics",
    text: "Turn customer and operational activity into clearer information your business can actually use.",
    points: ["Activity overview", "Performance signals", "Business insight"],
    visual: "DATA",
  },
  {
    code: "08",
    eyebrow: "KONARA WEB",
    title: "Website Design",
    text: "Premium responsive websites built around clarity, conversion and the systems working behind the experience.",
    points: ["Business websites", "Landing pages", "Advanced builds"],
    visual: "WEB",
  },
];

const services = [
  {
    tag: "01 / CONVERSATIONS",
    title: "AI Reception",
    text: "Give customers fast, intelligent answers while capturing context your team can actually use.",
  },
  {
    tag: "02 / GROWTH",
    title: "Lead Capture",
    text: "Turn website visitors and conversations into structured opportunities instead of lost enquiries.",
  },
  {
    tag: "03 / ACTION",
    title: "Smart Booking",
    text: "Move customers from questions to confirmed appointments with less friction and fewer manual steps.",
  },
  {
    tag: "04 / SYSTEMS",
    title: "Connected CRM",
    text: "Bring conversations, customer information and follow-ups into one clearer business workflow.",
  },
];

const osSteps = [
  "AI Receptionist",
  "Lead Capture",
  "Appointment Booking",
  "CRM",
  "Follow-ups",
  "Analytics",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business, customer journey and the real problem worth solving.",
  },
  {
    number: "02",
    title: "Design",
    text: "Map the system, experience, information flow and handoffs before building anything.",
  },
  {
    number: "03",
    title: "Build",
    text: "Create the website, automations and AI workflows around the business.",
  },
  {
    number: "04",
    title: "Improve",
    text: "Use real activity and feedback to refine the system after launch.",
  },
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);

  const previousProduct = () => {
    setActiveProduct((current) =>
      current === 0 ? products.length - 1 : current - 1,
    );
  };

  const nextProduct = () => {
    setActiveProduct((current) =>
      current === products.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProduct((current) =>
        current === products.length - 1 ? 0 : current + 1,
      );
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const product = products[activeProduct];

  return (
    <div className="home-page">
      {/* HERO */}

      <section className="premium-hero" data-konara-guide="home">
        <div className="hero-grid-background" />
        <div className="hero-light hero-light-left" />
        <div className="hero-light hero-light-right" />

        <div className="hero-wave hero-wave-one" />
        <div className="hero-wave hero-wave-two" />

        <div className="page-shell premium-hero-inner">
          <motion.div
            className="hero-top-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="hero-status-dot" />
            INTELLIGENT SYSTEMS FOR MODERN BUSINESS
          </motion.div>

          <motion.div
            className="premium-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
          >
            <h1>
              Business,
              <span> made intelligent.</span>
            </h1>

            <p>
              KONARA connects customer conversations, websites and business
              workflows into one intelligent layer — designed around the way
              your company actually works.
            </p>

            <div className="premium-hero-actions">
              <Link to="/contact" className="button button-primary">
                Book a Demo
              </Link>

              <Link to="/solutions" className="button button-glass">
                Explore KONARA
                <span>↗</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-product-stage"
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.18 }}
          >
            <div className="hero-product-glow" />

            <div className="hero-product-window">
              <div className="product-window-bar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="window-name">KONARA OS</div>

                <div className="window-live">
                  <span />
                  LIVE
                </div>
              </div>

              <div className="product-dashboard">
                <div className="dashboard-sidebar">
                  <div className="sidebar-logo">K</div>

                  <div className="sidebar-item active">
                    <span className="sidebar-icon" />
                    <span className="sidebar-label">Overview</span>
                  </div>

                  <div className="sidebar-item">
                    <span className="sidebar-icon" />
                    <span className="sidebar-label">Conversations</span>
                  </div>

                  <div className="sidebar-item">
                    <span className="sidebar-icon" />
                    <span className="sidebar-label">Leads</span>
                  </div>

                  <div className="sidebar-item">
                    <span className="sidebar-icon" />
                    <span className="sidebar-label">Automations</span>
                  </div>
                </div>

                <div className="dashboard-main">
                  <div className="dashboard-heading">
                    <div>
                      <span>Good morning</span>
                      <h3>Your business, connected.</h3>
                    </div>

                    <div className="dashboard-pill">System healthy</div>
                  </div>

                  <div className="dashboard-metrics">
                    <div className="metric-card metric-featured">
                      <span>Active conversations</span>
                      <strong>128</strong>
                      <small>+18% this week</small>
                    </div>

                    <div className="metric-card">
                      <span>Qualified leads</span>
                      <strong>42</strong>
                      <small>12 today</small>
                    </div>

                    <div className="metric-card">
                      <span>Bookings</span>
                      <strong>31</strong>
                      <small>8 automated</small>
                    </div>
                  </div>

                  <div className="dashboard-lower">
                    <div className="dashboard-chart-card">
                      <div className="chart-header">
                        <span>Customer activity</span>
                        <small>Last 7 days</small>
                      </div>

                      <div className="fake-chart">
                        <span className="bar bar-1" />
                        <span className="bar bar-2" />
                        <span className="bar bar-3" />
                        <span className="bar bar-4" />
                        <span className="bar bar-5" />
                        <span className="bar bar-6" />
                        <span className="bar bar-7" />
                      </div>
                    </div>

                    <div className="dashboard-ai-card">
                      <span className="ai-badge">NARA</span>

                      <p>
                        14 new leads were qualified while your team was away.
                      </p>

                      <div className="ai-action">
                        Review activity
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-left">
              <span>AI RECEPTION</span>
              <strong>Always on.</strong>
            </div>

            <div className="floating-card floating-card-right">
              <span>AUTOMATION</span>
              <strong>Working quietly.</strong>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT CAROUSEL */}

      <section className="product-carousel-section">
        <div className="carousel-light carousel-light-left" />
        <div className="carousel-light carousel-light-right" />

        <div className="page-shell">
          <div className="carousel-header">
            <div>
              <div className="section-eyebrow">KONARA PRODUCTS</div>

              <h2 className="premium-section-title">
                The systems behind
                <span> smarter businesses.</span>
              </h2>
            </div>

            <div className="carousel-counter">
              {String(activeProduct + 1).padStart(2, "0")}
              <span>/</span>
              {String(products.length).padStart(2, "0")}
            </div>
          </div>

          <motion.div
            key={product.title}
            className="product-carousel-card"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) nextProduct();
              if (info.offset.x > 70) previousProduct();
            }}
          >
            <div className="carousel-product-copy">
              <div className="carousel-product-meta">
                <span>{product.code}</span>
                <span>{product.eyebrow}</span>
              </div>

              <h3>{product.title}</h3>

              <p>{product.text}</p>

              <div className="carousel-points">
                {product.points.map((point) => (
                  <div key={point}>
                    <span />
                    {point}
                  </div>
                ))}
              </div>

              <Link to="/solutions" className="carousel-link">
                Explore this solution
                <span>↗</span>
              </Link>
            </div>

            <div className="carousel-product-visual">
              <div className="visual-grid" />
              <div className="visual-orbit orbit-large" />
              <div className="visual-orbit orbit-small" />

              <div className="visual-main-node">
                <small>KONARA</small>
                <strong>{product.visual}</strong>
              </div>

              <div className="visual-data-card visual-data-one">
                <span>STATUS</span>
                <strong>ACTIVE</strong>
              </div>

              <div className="visual-data-card visual-data-two">
                <span>FLOW</span>
                <strong>CONNECTED</strong>
              </div>

              <div className="visual-pulse pulse-one" />
              <div className="visual-pulse pulse-two" />
            </div>
          </motion.div>

          <div className="carousel-controls">
            <div className="carousel-dots">
              {products.map((item, index) => (
                <button
                  key={item.title}
                  className={index === activeProduct ? "active" : ""}
                  onClick={() => setActiveProduct(index)}
                  aria-label={item.title}
                />
              ))}
            </div>

            <div className="carousel-arrows">
              <button onClick={previousProduct} aria-label="Previous product">
                ←
              </button>

              <button onClick={nextProduct} aria-label="Next product">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT INTRO */}

      <section className="light-intro-section">
        <div className="light-wave-top" />

        <div className="page-shell light-intro-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="dark-eyebrow">THE KONARA APPROACH</div>

            <h2>
              Your business does not need
              <span> six disconnected tools.</span>
            </h2>
          </motion.div>

          <motion.div
            className="light-intro-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p>
              It needs a system that understands how customers enter, where
              information should go and what action should happen next.
            </p>

            <Link to="/about" className="dark-text-link">
              How KONARA thinks
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="premium-services" data-konara-guide="solutions">
        <div className="page-shell">
          <div className="premium-section-header">
            <div>
              <div className="section-eyebrow">WHAT WE BUILD</div>

              <h2 className="premium-section-title">
                One intelligent layer.
                <span> Multiple capabilities.</span>
              </h2>
            </div>

            <p>
              KONARA combines the right pieces around the business problem
              rather than forcing every company into the same system.
            </p>
          </div>

          <div className="premium-service-grid">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="premium-service-card"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="service-card-top">
                  <span>{service.tag}</span>
                  <div className="service-card-arrow">↗</div>
                </div>

                <div className="service-card-visual">
                  <div className="service-orb" />
                  <div className="service-line line-one" />
                  <div className="service-line line-two" />
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            ))}
          </div>

          <div className="services-link-row">
            <Link to="/solutions" className="button button-glass">
              See all solutions
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* KONARA OS */}

      <section className="os-section">
        <div className="os-background-glow" />

        <div className="page-shell os-layout">
          <div className="os-copy">
            <div className="section-eyebrow">KONARA OS</div>

            <h2>
              Different systems.
              <span> One connected journey.</span>
            </h2>

            <p>
              Customer-facing AI, lead capture, booking, CRM, communication and
              analytics working together instead of operating as isolated
              tools.
            </p>

            <Link to="/solutions" className="os-link">
              Explore the system
              <span>→</span>
            </Link>
          </div>

          <div className="os-flow">
            <div className="os-flow-line" />

            {osSteps.map((step, index) => (
              <div
                className={`os-step ${
                  index === 0 || index === osSteps.length - 1
                    ? "os-step-highlight"
                    : ""
                }`}
                key={step}
              >
                <div className="os-step-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span>{step}</span>

                <div className="os-step-status" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONARA WEB */}

      <section className="web-section" data-konara-guide="website">
        <div className="web-wave web-wave-left" />
        <div className="web-wave web-wave-right" />

        <div className="page-shell web-layout">
          <div className="web-visual">
            <div className="browser-mockup">
              <div className="browser-bar">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="browser-address">yourbusiness.com</div>
              </div>

              <div className="browser-page">
                <div className="browser-nav">
                  <div className="mock-logo">K</div>

                  <div className="mock-links">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="browser-hero">
                  <small>BUILT BY KONARA</small>

                  <div className="mock-heading">
                    A website should do
                    <br />
                    more than look good.
                  </div>

                  <div className="mock-copy" />
                  <div className="mock-button" />
                </div>

                <div className="browser-cards">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>

            <div className="mobile-mockup">
              <div className="mobile-notch" />

              <div className="mobile-content">
                <div className="mobile-logo">K</div>
                <div className="mobile-heading" />
                <div className="mobile-heading short" />
                <div className="mobile-copy" />
                <div className="mobile-button" />
              </div>
            </div>
          </div>

          <div className="web-copy">
            <div className="dark-eyebrow">KONARA WEB</div>

            <h2>
              We can build
              <span> your website too.</span>
            </h2>

            <p>
              From focused landing pages to advanced business websites, KONARA
              builds responsive digital experiences designed around clarity,
              conversion and the systems behind them.
            </p>

            <div className="web-features">
              <span>Business websites</span>
              <span>Landing pages</span>
              <span>Responsive design</span>
              <span>Advanced builds</span>
            </div>

            <Link to="/website" className="dark-button">
              Explore Website Design
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="process-section">
        <div className="page-shell">
          <div className="premium-section-header process-header">
            <div>
              <div className="section-eyebrow">HOW WE WORK</div>

              <h2 className="premium-section-title">
                Start with the problem.
                <span> Build the right system.</span>
              </h2>
            </div>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <div className="process-item" key={item.title}>
                <span className="process-number">{item.number}</span>
                <div className="process-line" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="home-final-cta">
        <div className="final-cta-glow" />

        <div className="page-shell final-cta-inner">
          <div className="section-eyebrow">BUILD WITH KONARA</div>

          <h2>
            Your next system
            <span> starts with a conversation.</span>
          </h2>

          <p>
            Tell us how your business works and where the friction is. We’ll
            help identify what should happen next.
          </p>

          <div className="final-cta-actions">
            <Link to="/contact" className="button button-primary">
              Book a Demo
            </Link>

            <Link to="/services" className="button button-glass">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}