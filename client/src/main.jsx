import React from "react";
import ReactDOM from "react-dom/client";
import App, { preloadRoute } from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// gtag + the Meta pixel are ~400KB of third-party JS. Fetching them during first load
// competes with the LCP image on mobile, so the scripts are appended once the page has
// loaded and gone idle. The stubs below queue calls immediately, so nothing is lost.
function appendWhenIdle(script) {
  const append = () => document.head.appendChild(script);
  const schedule = () =>
    "requestIdleCallback" in window
      ? window.requestIdleCallback(append, { timeout: 3000 })
      : window.setTimeout(append, 1500);
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
}

function loadAnalytics() {
  if (window.__PRERENDERING__ || window.__melangeAnalyticsLoaded) return;
  window.__melangeAnalyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", "G-1VTPL005KG");

  if (!document.getElementById("melange-gtag")) {
    const gtagScript = document.createElement("script");
    gtagScript.id = "melange-gtag";
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-1VTPL005KG";
    appendWhenIdle(gtagScript);
  }

  if (!window.fbq) {
    const fbq = function () {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, arguments);
      } else {
        fbq.queue.push(arguments);
      }
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;

    const pixelScript = document.createElement("script");
    pixelScript.id = "melange-fbevents";
    pixelScript.async = true;
    pixelScript.src = "https://connect.facebook.net/en_US/fbevents.js";
    appendWhenIdle(pixelScript);
  }

  window.fbq("init", "705063051094773");
  window.fbq("track", "PageView");
}

loadAnalytics();

const root = ReactDOM.createRoot(document.getElementById("root"));
const loader = document.getElementById("boot-loader");
if (loader) loader.classList.add("hidden");

const renderApp = () =>
  root.render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );

// Load the current route's chunk first so the prerendered HTML stays on screen
// until the real page can replace it, instead of flashing the Suspense fallback.
preloadRoute(window.location.pathname).catch(() => {}).then(renderApp);