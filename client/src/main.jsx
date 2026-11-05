import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

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
    document.head.appendChild(gtagScript);
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
    document.head.appendChild(pixelScript);
  }

  window.fbq("init", "705063051094773");
  window.fbq("track", "PageView");
}

loadAnalytics();

const root = ReactDOM.createRoot(document.getElementById("root"));
const loader = document.getElementById("boot-loader");
if (loader) loader.classList.add("hidden");

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);