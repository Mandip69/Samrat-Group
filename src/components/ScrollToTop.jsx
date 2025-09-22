import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's built-in scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Reset scroll after small delay so mobile renders fully
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // change to "smooth" if you want animation
      });
    }, 50);
  }, [pathname]);

  return null;
}
