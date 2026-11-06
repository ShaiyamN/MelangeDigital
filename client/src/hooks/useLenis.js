import { useEffect } from "react";

// Lenis + GSAP (~45KB compressed) only drive smooth scrolling, so they load after the
// page has painted instead of sitting in the critical bundle. Native scroll works until then.
let runtime = null;
let runtimePromise = null;

/** ScrollTrigger once the smooth-scroll runtime has loaded, else undefined. */
export const getScrollTrigger = () => runtime?.ScrollTrigger;

function loadScrollRuntime() {
  if (!runtimePromise) {
    runtimePromise = Promise.all([
      import("@studio-freight/lenis"),
      import("gsap"),
      import("gsap/dist/ScrollTrigger"),
    ]).then(([lenisModule, gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.default ?? gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.default ?? scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      runtime = { Lenis: lenisModule.default, gsap, ScrollTrigger };
      return runtime;
    });
  }
  return runtimePromise;
}

function afterPageLoad(callback) {
  const schedule = () =>
    "requestIdleCallback" in window
      ? window.requestIdleCallback(callback, { timeout: 2000 })
      : window.setTimeout(callback, 200);
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
}

const useLenis = () => {
  useEffect(() => {
    let cancelled = false;
    let cleanup = null;

    afterPageLoad(() => {
      loadScrollRuntime()
        .then(({ Lenis, gsap, ScrollTrigger }) => {
          if (cancelled) return;
          const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1,
            prevent: (node) => node.closest?.("[data-lenis-prevent]"),
          });

          // Keep GSAP pin/scrub in sync with Lenis (fixes layout that only "snaps" right after reload)
          lenis.on("scroll", ScrollTrigger.update);

          const tickerCb = (time) => {
            lenis.raf(time * 1000);
          };
          gsap.ticker.add(tickerCb);
          gsap.ticker.lagSmoothing(500, 33);

          window.__melangeLenis = lenis;

          cleanup = () => {
            gsap.ticker.remove(tickerCb);
            if (window.__melangeLenis === lenis) {
              delete window.__melangeLenis;
            }
            lenis.destroy();
          };
        })
        .catch((err) => console.warn("Smooth scroll unavailable:", err));
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);
};

export default useLenis;
