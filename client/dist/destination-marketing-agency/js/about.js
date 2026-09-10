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

(function initReportCarousel() {
  var root = document.querySelector("[data-report-carousel]");
  if (!root) return;
  var slides = root.querySelectorAll("[data-report-slide]");
  var prev = root.querySelector("[data-report-prev]");
  var next = root.querySelector("[data-report-next]");
  if (!slides.length || !prev || !next) return;
  var i = 0;
  var startX = 0;

  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (slide, j) {
      slide.hidden = j !== i;
    });
  }

  prev.addEventListener("click", function () {
    show(i - 1);
  });
  next.addEventListener("click", function () {
    show(i + 1);
  });
  root.addEventListener(
    "touchstart",
    function (e) {
      startX = e.changedTouches[0].clientX;
    },
    { passive: true },
  );
  root.addEventListener(
    "touchend",
    function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      show(i + (dx < 0 ? 1 : -1));
    },
    { passive: true },
  );
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
      document.body ? document.body.scrollHeight : 0,
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
