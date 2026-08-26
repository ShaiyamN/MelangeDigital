import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Navbar, Footer } from "../layout";

// Shared plumbing for the Figma-built static pages (About, Services) that are
// mounted inside React from extracted markup. Everything is namespaced by
// `slug` so two of them can never clash over stylesheets, scripts, or <base>.

export const TOURISM_ASSET = "/destination-marketing-agency";

function showBootLoader(show) {
  document.getElementById("boot-loader")?.classList.toggle("hidden", !show);
}

function loadCss(href, attr) {
  const existing = document.querySelector(`link[${attr}="${href}"]`);
  if (existing) {
    return existing.sheet
      ? Promise.resolve()
      : new Promise((resolve) => {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => resolve(), { once: true });
        });
  }
  return new Promise((resolve) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.setAttribute(attr, href);
    link.onload = () => resolve();
    link.onerror = () => resolve();
    document.head.appendChild(link);
  });
}

function loadScript(src, attr) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.setAttribute(attr, "1");
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

/** Head <style> the static pages need to reskin the React navbar. */
export const tourismNavCss = (slug) => `
  body.${slug}-react .font-bricolage.fixed {
    z-index: 100 !important;
  }
  body.${slug}-react .font-bricolage.fixed,
  body.${slug}-react .font-bricolage.fixed *,
  body.${slug}-react > .font-bricolage,
  body.${slug}-react > .font-bricolage * {
    font-family: "Bricolage Grotesque", sans-serif !important;
  }
  body.${slug}-react .font-bricolage.fixed a,
  body.${slug}-react > .font-bricolage a {
    text-decoration: none !important;
    color: inherit;
  }
  body.${slug}-react {
    --nav-sticky-offset: 64px;
    padding-top: 4rem;
    background: #fff;
  }
  @media (min-width: 640px) {
    body.${slug}-react {
      --nav-sticky-offset: 84.8px;
      padding-top: 5.3rem;
    }
  }
`;

/**
 * Loads the page's stylesheets, then its scripts in order, and tears both down
 * on unmount. Returns whether the CSS has landed, so the caller can gate the
 * markup against a flash of unstyled content.
 */
export function useTourismBoot(slug, css, scripts) {
  const bootId = useRef(0);
  const [cssReady, setCssReady] = useState(false);

  useLayoutEffect(() => {
    showBootLoader(true);
  }, []);

  useEffect(() => {
    const cssAttr = `data-${slug}-css`;
    const jsAttr = `data-${slug}-js`;
    const baseAttr = `data-${slug}-base`;
    const bodyClass = `${slug}-react`;

    const teardown = () => {
      document.querySelectorAll(`link[${cssAttr}]`).forEach((el) => el.remove());
      document.querySelectorAll(`script[${jsAttr}]`).forEach((el) => el.remove());
    };

    document.documentElement.classList.add("w-mod-js");
    document.body.classList.add("body", bodyClass);

    let baseEl = document.querySelector(`base[${baseAttr}]`);
    if (!baseEl) {
      baseEl = document.createElement("base");
      baseEl.setAttribute(baseAttr, "1");
      document.head.insertBefore(baseEl, document.head.firstChild);
    }
    baseEl.setAttribute("href", `${TOURISM_ASSET}/`);

    const id = ++bootId.current;
    let cancelled = false;

    (async () => {
      teardown();
      setCssReady(false);
      await Promise.all(css.map((href) => loadCss(href, cssAttr)));
      if (cancelled || bootId.current !== id) return;
      setCssReady(true);
      showBootLoader(false);

      try {
        for (const base of scripts) {
          if (cancelled || bootId.current !== id) return;
          const sep = base.includes("?") ? "&" : "?";
          await loadScript(`${base}${sep}${slug}=${id}`, jsAttr);
        }
      } catch (err) {
        if (!cancelled) console.error(`[${bodyClass}]`, err);
      }
    })();

    return () => {
      cancelled = true;
      showBootLoader(false);
      document.body.classList.remove("body", bodyClass);
      document.querySelectorAll(`base[${baseAttr}]`).forEach((el) => el.remove());
      teardown();
    };
    // Callers pass module-level constants; this boots once per mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return cssReady;
}

/** Navbar, its fixed-height spacer, and the extracted static markup. */
export function TourismShell({ slug, cssReady, markup }) {
  return (
    <>
      <Navbar />
      <div
        id="siteNav"
        className="pointer-events-none invisible fixed top-0 left-0 z-0 w-full h-16 sm:h-[5.3rem]"
        aria-hidden="true"
      />
      <div
        className={`${slug}-react-root${cssReady ? ` ${slug}-css-ready` : ""}`}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <Footer />
    </>
  );
}
