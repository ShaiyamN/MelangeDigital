(function () {
  "use strict";

  var INCLUDE = ".c2a-button, .let-s-collaborate, .hero-download-btn";
  var EXCLUDE = ".submit-button, .zf-submitColor, .contact-submit-btn, .w-button";

  function findIcon(btn) {
    var graphic = btn.querySelector("img, svg");
    if (!graphic) return null;
    var node = graphic;
    while (node.parentElement && node.parentElement !== btn) {
      node = node.parentElement;
    }
    return node.parentElement === btn ? node : null;
  }

  function findLabel(btn, icon) {
    var label = null;
    Array.prototype.forEach.call(btn.children, function (child) {
      if (child === icon) return;
      if (!label && child.textContent && child.textContent.trim().length) {
        label = child;
      }
    });
    return label;
  }

  var registered = [];

  function measure(entry) {
    var btnRect = entry.btn.getBoundingClientRect();
    var iconRect = entry.icon.getBoundingClientRect();
    if (!btnRect.width || !iconRect.width) return;
    var styles = window.getComputedStyle(entry.btn);
    var padLeft = parseFloat(styles.paddingLeft) || 8;
    var targetX = btnRect.left + padLeft + iconRect.width / 2;
    var currentX = iconRect.left + iconRect.width / 2;
    entry.btn.style.setProperty("--arrow-shift", Math.round(targetX - currentX) + "px");
  }

  function measureAll() {
    registered.forEach(measure);
  }

  function setup(btn) {
    if (btn.matches(EXCLUDE) || btn.closest(EXCLUDE)) return;
    if (btn.classList.contains("btn-anim")) return;
    var icon = findIcon(btn);
    if (!icon) return;
    var label = findLabel(btn, icon);
    btn.classList.add("btn-anim");
    icon.classList.add("btn-anim__icon");
    if (label) label.classList.add("btn-anim__label");
    registered.push({ btn: btn, icon: icon, label: label });
  }

  function init() {
    document.querySelectorAll(INCLUDE).forEach(setup);
    measureAll();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measureAll).catch(function () {});
    }
  }

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measureAll, 150);
  });
  window.addEventListener("load", measureAll);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

(function initFaqMore() {
  function onFaqMoreClick(e) {
    var btn = e.target.closest(".faq-more-btn");
    if (!btn) return;
    var list = btn.closest(".faq-list");
    if (!list) return;
    var label = btn.querySelector(".faq-more-btn__label");
    var collapsed = list.getAttribute("data-faq-collapsed") !== "false";
    if (collapsed) {
      list.setAttribute("data-faq-collapsed", "false");
      btn.setAttribute("aria-expanded", "true");
      if (label) label.textContent = "Show fewer questions";
    } else {
      list.setAttribute("data-faq-collapsed", "true");
      btn.setAttribute("aria-expanded", "false");
      if (label) label.textContent = "Show all questions";
    }
  }

  if (window.__svcFaqMoreHandler) {
    document.removeEventListener("click", window.__svcFaqMoreHandler);
  }
  window.__svcFaqMoreHandler = onFaqMoreClick;
  document.addEventListener("click", onFaqMoreClick);
})();

(function initBackToTop() {
  var btn = document.getElementById("backToTop");
  if (!btn) return;
  var thresholdPx = 280;

  function nearPageEnd() {
    var scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    var viewport = window.innerHeight || document.documentElement.clientHeight || 0;
    var docHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body ? document.body.scrollHeight : 0
    );
    return scrollY + viewport >= docHeight - thresholdPx;
  }

  function sync() {
    var show = nearPageEnd();
    btn.hidden = !show;
    btn.classList.toggle("is-visible", show);
  }

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  sync();
})();
