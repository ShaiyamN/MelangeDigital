import { Link } from "react-router-dom";

const ARROW = "/destination-marketing-agency/images/arrow-top-right-purple.svg";

export default function MelangeCta({ to, onClick, children, className = "", iconClassName = "" }) {
  const inner = (
    <>
      <span>{children}</span>
      <span className={`melange-cta__icon ${iconClassName}`.trim()} aria-hidden="true">
        <img src={ARROW} width="12" height="12" alt="" />
      </span>
    </>
  );
  const cls = `melange-cta ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button type="button" className={cls} onClick={onClick}>
        {inner}
      </button>
    );
  }
  return (
    <button type="button" className={cls}>
      {inner}
    </button>
  );
}
