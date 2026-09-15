import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ARROW = "/destination-marketing-agency/images/arrow-top-right-purple.svg";

export function useBtnAnim(ref) {
  useLayoutEffect(() => {
    const btn = ref.current;
    if (!btn) return;
    const icon = btn.querySelector(".btn-anim__icon");
    if (!icon) return;

    const measure = () => {
      const btnRect = btn.getBoundingClientRect();
      const iconRect = icon.getBoundingClientRect();
      if (!btnRect.width || !iconRect.width) return;
      const padLeft = parseFloat(getComputedStyle(btn).paddingLeft) || 8;
      const targetX = btnRect.left + padLeft + iconRect.width / 2;
      const currentX = iconRect.left + iconRect.width / 2;
      btn.style.setProperty("--arrow-shift", `${Math.round(targetX - currentX)}px`);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(btn);
    window.addEventListener("resize", measure);
    document.fonts?.ready?.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);
}

export default function MelangeCta({ to, onClick, children, className = "", iconClassName = "" }) {
  const ref = useRef(null);
  useBtnAnim(ref);

  const inner = (
    <>
      <span className="btn-anim__label">{children}</span>
      <span className={`melange-cta__icon btn-anim__icon ${iconClassName}`.trim()} aria-hidden="true">
        <img src={ARROW} width="12" height="12" alt="" />
      </span>
    </>
  );
  const cls = `melange-cta btn-anim ${className}`.trim();

  if (to) {
    return (
      <Link ref={ref} to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button ref={ref} type="button" className={cls} onClick={onClick}>
        {inner}
      </button>
    );
  }
  return (
    <button ref={ref} type="button" className={cls}>
      {inner}
    </button>
  );
}
