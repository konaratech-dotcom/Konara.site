import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import LocaleSelector from "./LocaleSelector";

import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/copy";

import "../styles/navbar.css";

const navPaths = [
  "/",
  "/solutions",
  "/services",
  "/about",
  "/contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLocale();
  const copy = getCopy(language.code);

  const navItems = navPaths.map((to, index) => ({
    to,
    label: copy.nav[index],
  }));

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="konara-navbar"
      data-konara-no-translate
    >
      <div className="konara-navbar-inner">
        <Link
          to="/"
          className="konara-navbar-brand"
          aria-label="KONARA"
        >
          <span className="konara-navbar-logo">
            K
          </span>

          <span className="konara-navbar-wordmark">
            KONARA
          </span>
        </Link>

        <nav
          className="konara-navbar-desktop"
          aria-label={copy.common.explore}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `konara-navbar-link ${
                  isActive
                    ? "konara-navbar-link-active"
                    : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="konara-navbar-actions">
          <div className="konara-locale-desktop">
            <LocaleSelector />
          </div>

          <Link
            to="/contact"
            className="konara-navbar-demo"
          >
            {copy.nav[5]}
            <span aria-hidden="true">
              ↗
            </span>
          </Link>

          <button
            type="button"
            className={`konara-menu-button ${
              menuOpen
                ? "konara-menu-button-open"
                : ""
            }`}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={copy.assistant.help}
            aria-expanded={menuOpen}
            aria-controls="konara-mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="konara-mobile-menu"
        className={`konara-mobile-menu ${
          menuOpen
            ? "konara-mobile-menu-open"
            : ""
        }`}
      >
        <div className="konara-mobile-menu-inner">
          <div className="konara-mobile-menu-top">
            <div className="konara-mobile-menu-label">
              KONARA
            </div>

            <div className="konara-locale-mobile">
              <LocaleSelector />
            </div>
          </div>

          <nav
            className="konara-mobile-navigation"
            aria-label={copy.common.explore}
          >
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `konara-mobile-link ${
                    isActive
                      ? "konara-mobile-link-active"
                      : ""
                  }`
                }
              >
                <span className="konara-mobile-link-number">
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )}
                </span>

                <span>{item.label}</span>

                <span
                  className="konara-mobile-link-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="konara-mobile-bottom">
            <p>{copy.footer.tagline}</p>

            <Link
              to="/contact"
              className="konara-mobile-demo"
            >
              {copy.nav[5]}

              <span aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
