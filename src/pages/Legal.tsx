import { Link } from "react-router-dom";

import { useLocale } from "../context/LocaleContext";
import { getLegalCopy } from "../i18n/legalCopy";

import "../styles/legal.css";

export default function Legal() {
  const { language } = useLocale();
  const legal = getLegalCopy(language.code);
  const page = legal.page;

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-grid" />

        <div className="page-shell legal-hero-inner">
          <div className="legal-kicker">
            <span />
            {page.kicker}
          </div>

          <h1>{page.title}</h1>

          <p>{page.hero}</p>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="page-shell legal-layout">
          <aside className="legal-index">
            <div className="legal-index-label">{page.information}</div>
            <a href="#operator">{page.operator}</a>
            <a href="#contact">{page.contact}</a>
            <a href="#privacy">{page.privacy}</a>
            <a href="#intellectual-property">{page.ip}</a>
          </aside>

          <div className="legal-content">
            <article id="operator" className="legal-card">
              <span>01</span>

              <div>
                <h2>{page.operatorHeading}</h2>

                <dl className="legal-data">
                  <div>
                    <dt>{page.brandWebsite}</dt>
                    <dd>KONARA</dd>
                  </div>

                  <div>
                    <dt>{page.locationLabel}</dt>
                    <dd>{legal.footer.location}</dd>
                  </div>

                  <div>
                    <dt>{page.foundedLabel}</dt>
                    <dd>2026</dd>
                  </div>
                </dl>

                <p>{page.operatorText}</p>
              </div>
            </article>

            <article id="contact" className="legal-card">
              <span>02</span>

              <div>
                <h2>{page.contactHeading}</h2>

                <p>{page.contactText}</p>

                <Link to="/contact" className="legal-link">
                  {page.contactCta}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>

            <article id="privacy" className="legal-card">
              <span>03</span>

              <div>
                <h2>{page.privacyHeading}</h2>

                <p>{page.privacyText}</p>
                <p>{page.securityText}</p>
              </div>
            </article>

            <article id="intellectual-property" className="legal-card">
              <span>04</span>

              <div>
                <h2>{page.ipHeading}</h2>

                <p>{page.ipText}</p>

                <div className="legal-copyright">© KONARA 2026</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="legal-final">
        <div className="page-shell legal-final-inner">
          <div>
            <small>KONARA</small>
            <h2>{page.clear}</h2>
          </div>

          <Link to="/contact" className="button button-primary">
            {page.contactCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
