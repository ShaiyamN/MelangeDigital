import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Spring cursor-follow bubble for a section (home pre-footer CTA).
 *
 * Adapted from Skiper UI — Skiper 61 SpringMouseFollow. React + Framer Motion.
 * https://skiper-ui.com/v1/skiper61
 *
 * License (Skiper UI free tier): free to use and modify in personal and commercial
 * projects; attribution to Skiper UI is required when using the free version.
 * Original author: @gurvinder-singh02 — https://gxuri.me
 *
 * Changes from the original: listens on an existing section element (the home page
 * body is static markup) instead of wrapping children, shows a labelled bubble,
 * hides itself over real links/buttons, and only runs for a fine pointer with motion
 * allowed. The bubble is decorative (aria-hidden, pointer-events: none).
 */

const SPRING = { mass: 0.1, damping: 10, stiffness: 131 };
const QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const SpringCursorFollow = ({ target, label = "Let's talk", href }) => {
  const navigate = useNavigate();
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);
  const scale = useSpring(0, SPRING);
  const [enabled, setEnabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!target || !enabled) return undefined;

    const show = (on) => {
      opacity.set(on ? 1 : 0);
      scale.set(on ? 1 : 0);
    };
    const onMove = (e) => {
      const b = target.getBoundingClientRect();
      x.set(e.clientX - b.left);
      y.set(e.clientY - b.top);
      // Step aside for the real CTA button so the two never stack.
      show(!e.target.closest("a, button"));
    };
    const onEnter = (e) => {
      const b = target.getBoundingClientRect();
      // Start at the pointer instead of springing in from the corner.
      x.jump(e.clientX - b.left);
      y.jump(e.clientY - b.top);
      show(true);
    };
    const onLeave = () => show(false);
    // The bubble promises a click: anywhere in the section (outside real controls) goes to href.
    const onClick = (e) => {
      if (href && !e.target.closest("a, button")) navigate(href);
    };

    target.addEventListener("pointermove", onMove);
    target.addEventListener("pointerenter", onEnter);
    target.addEventListener("pointerleave", onLeave);
    target.addEventListener("click", onClick);
    if (href) target.style.cursor = "pointer";
    return () => {
      target.removeEventListener("pointermove", onMove);
      target.removeEventListener("pointerenter", onEnter);
      target.removeEventListener("pointerleave", onLeave);
      target.removeEventListener("click", onClick);
      target.style.cursor = "";
      show(false);
    };
  }, [target, enabled, href, navigate, x, y, opacity, scale]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-[2] -ml-12 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-[#7123ee]/90 text-center font-bricolage text-sm font-semibold leading-tight text-white shadow-[0_12px_40px_rgba(113,35,238,0.35)] backdrop-blur-sm"
      style={{ x, y, opacity, scale }}
    >
      {label}
      <svg viewBox="0 0 12 12" width="10" height="10" className="ml-1" focusable="false">
        <path
          d="M3 9l6-6M4 3h5v5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default SpringCursorFollow;
