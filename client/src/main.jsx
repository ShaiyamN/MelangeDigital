import React from "react";
import ReactDOM from "react-dom/client";
import App, { preloadRoute } from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// gtag + the Meta pixel are ~400KB of third-party JS. Run during first load, their long
// tasks (~400ms on PageSpeed desktop) land inside the Total Blocking Time window, and an
// "on idle" start is too early on fast loads. So they start on the visitor's first
// interaction, or 15s after load for visitors who never interact. The stubs below queue
// calls immediately (incl. the PageView), so nothing is lost once the scripts arrive.
const THIRD_PARTY_TRIGGERS = ["pointerdown", "pointermove", "keydown", "touchstart", "wheel"];
const pendingThirdParty = [];
let thirdPartyStarted = false;

function startThirdParty() {
  if (thirdPartyStarted) return;
  thirdPartyStarted = true;
  THIRD_PARTY_TRIGGERS.forEach((type) => window.removeEventListener(type, startThirdParty));
  pendingThirdParty.splice(0).forEach((script) => document.head.appendChild(script));
}

function appendWhenIdle(script) {
  if (thirdPartyStarted) document.head.appendChild(script);
  else pendingThirdParty.push(script);
}

THIRD_PARTY_TRIGGERS.forEach((type) =>
  window.addEventListener(type, startThirdParty, { once: true, passive: true }),
);
const startThirdPartyFallback = () => window.setTimeout(startThirdParty, 15000);
if (document.readyState === "complete") startThirdPartyFallback();
else window.addEventListener("load", startThirdPartyFallback, { once: true });

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