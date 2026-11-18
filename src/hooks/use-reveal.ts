import { useEffect } from "react";

/**
 * Reveal-on-scroll utility. Adds `in-view` to anything tagged `data-reveal`,
 * and auto-tags `<section>` elements that haven't already opted out, so the
 * whole site fades/slides in both when scrolling down AND back up.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Auto-tag <section> elements so reveal applies sitewide
    const autoTag = () => {
      document.querySelectorAll<HTMLElement>("section").forEach((s) => {
        if (s.dataset.reveal === undefined && !s.hasAttribute("data-no-reveal")) {
          s.setAttribute("data-reveal", "");
          s.setAttribute("suppresshydrationwarning", "");
        }
      });
    };
    autoTag();

    const collect = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      collect().forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("in-view");
          else e.target.classList.remove("in-view");
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );

    collect().forEach((el) => io.observe(el));

    // Re-tag & re-observe on DOM changes (route transitions add new nodes)
    const mo = new MutationObserver(() => {
      autoTag();
      collect().forEach((el) => {
        if (!(el as any).__revealed) {
          (el as any).__revealed = true;
          io.observe(el);
        }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Suppress hydration warnings for in-view class changes
    setTimeout(() => {
      collect().forEach((el) => el.setAttribute("suppresshydrationwarning", ""));
    }, 0);

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
}
