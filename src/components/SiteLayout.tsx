import { useLayoutEffect } from "react";
import NaraRobot from "./NaraRobot";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import LocaleBridge from "../i18n/LocaleBridge";
import CustomCursor from "./CustomCursor";
import NaraCustomChat from "./NaraCustomChat";

export default function SiteLayout() {
  // KONARA ROUTE SCROLL RESET START
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);
  // KONARA ROUTE SCROLL RESET END
  return (
    <div className="site-shell">
      <CustomCursor />
      <LocaleBridge />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      
      

      <NaraCustomChat />
      <NaraRobot />
    </div>
  );
}
