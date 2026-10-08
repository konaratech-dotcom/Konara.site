import { Link } from "react-router-dom";

import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/copy";
import { getLegalCopy } from "../i18n/legalCopy";

export default function Footer() {
  const { language } = useLocale();
  const copy = getCopy(language.code);
  const legal = getLegalCopy(language.code);

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link
              to="/"
              className="footer-brand-row"
              aria-label={`${copy.nav[0]} · KONARA`}
            >
              <span className="footer-mark">K</span>
              <span className="footer-brand">KONARA</span>
            </Link>

            <p className="footer-tagline">{copy.footer.tagline}</p>

            <div className="footer-meta-row">
              <span className="footer-status-dot" />
              <span>{copy.footer.founded}</span>
              <span className="footer-meta-separator">•</span>
              <span>{copy.footer.vision}</span>
            </div>
          </div>

          <nav
            className="footer-column"
            aria-label={`${copy.nav[1]} · KONARA`}
          >
            <div className="footer-column-title">{copy.nav[1]}</div>
            <Link to="/">{copy.nav[0]}</Link>
            <Link to="/solutions">{copy.nav[1]}</Link>
            <Link to="/services">{copy.nav[2]}</Link>
            <Link to="/website">KONARA WEB</Link>
          </nav>

          <nav
            className="footer-column"
            aria-label={`${copy.nav[3]} · KONARA`}
          >
            <div className="footer-column-title">{copy.nav[3]}</div>
            <Link to="/about">{copy.nav[3]}</Link>
            <Link to="/contact">{copy.nav[4]}</Link>
            <Link to="/contact" className="footer-inline-demo">
              {copy.common.book}
              <span aria-hidden="true">↗</span>
            </Link>
          </nav>

          <div className="footer-column footer-legal-column">
            <div className="footer-column-title">{legal.footer.legal}</div>
            <Link to="/impressum">{legal.footer.notice}</Link>
            <span className="footer-location">{legal.footer.location}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">© KONARA 2026</div>

          <div className="footer-bottom-copy">
            <span>{copy.footer.tagline}</span>
            <span className="footer-bottom-divider" />
            <Link to="/impressum">{legal.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
