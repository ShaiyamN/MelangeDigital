import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
      touchMultiplier: 2,
      prevent: (node) => node.closest?.("[data-lenis-prevent]"),
    });

    // Keep GSAP pin/scrub in sync with Lenis (fixes layout that only "snaps" right after reload)
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    window.__melangeLenis = lenis;

    return () => {
      gsap.ticker.remove(tickerCb);
      if (window.__melangeLenis === lenis) {
        delete window.__melangeLenis;
      }
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
