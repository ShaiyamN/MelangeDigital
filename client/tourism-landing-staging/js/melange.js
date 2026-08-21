
(function () {
  "use strict";

  var INCLUDE = ".c2a-button, .let-s-collaborate, .hero-download-btn";
  // Never animate form submit buttons.
  var EXCLUDE = ".submit-button, .zf-submitColor, .contact-submit-btn, .w-button";

  /** Find the direct child of `btn` that contains the arrow graphic. */
  function findIcon(btn) {
    var graphic = btn.querySelector("img, svg");
    if (!graphic) return null;
    var node = graphic;
    while (node.parentElement && node.parentElement !== btn) {
      node = node.parentElement;
    }
    return node.parentElement === btn ? node : null;
  }

  /** Find the direct child of `btn` holding the label text (not the icon). */
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
    /* Target: left side of the pill (inside padding), not the centre — so the
       arrow travels fully across instead of stopping mid-button. */
    var styles = window.getComputedStyle(entry.btn);
    var padLeft = parseFloat(styles.paddingLeft) || 8;
    var padRight = parseFloat(styles.paddingRight) || 8;
    var targetX = btnRect.left + padLeft + iconRect.width / 2;
    var currentX = iconRect.left + iconRect.width / 2;
    var arrowShift = Math.round(targetX - currentX);
    entry.btn.style.setProperty("--arrow-shift", arrowShift + "px");

    /* Governments (long CTA): keep label visible and slide it right so it
       sits beside the arrow after the swap — clamped inside the pill. */
    if (entry.swap && entry.label) {
      var labelRect = entry.label.getBoundingClientRect();
      var gap = 12;
      var labelTargetLeft = padLeft + iconRect.width + gap;
      var labelCurrentLeft = labelRect.left - btnRect.left;
      var labelShift = labelTargetLeft - labelCurrentLeft;
      var maxRight = btnRect.width - padRight;
      var overflow = labelCurrentLeft + labelShift + labelRect.width - maxRight;
      if (overflow > 0) labelShift -= overflow;
      if (labelShift < 0) labelShift = 0;
      entry.btn.style.setProperty("--label-shift", Math.round(labelShift) + "px");
    }
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
    var swap = !!btn.closest("#governments");

    btn.classList.add("btn-anim");
    if (swap) btn.classList.add("btn-anim--swap");
    icon.classList.add("btn-anim__icon");
    if (label) label.classList.add("btn-anim__label");

    registered.push({ btn: btn, icon: icon, label: label, swap: swap });
  }

  function init() {
    document.querySelectorAll(INCLUDE).forEach(setup);
    measureAll();
    // Re-measure once fonts settle (label width can shift the icon's rest spot).
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



(function () {
  "use strict";

  var DESKTOP_SEL = ".nav-menu-two-2 .nav-link-4[href^='#']";
  var MOBILE_SEL = ".link-6[href^='#']";
  /* Match sticky nav bottom — which section “owns” the viewport for the spy */
  function navStickyOffset() {
    var nav = document.querySelector(".div-block-47");
    if (nav) return Math.round(nav.getBoundingClientRect().height);
    var css = getComputedStyle(document.documentElement).getPropertyValue("--nav-sticky-offset");
    var parsed = parseFloat(css);
    return Number.isFinite(parsed) ? Math.round(parsed) : 69;
  }
  function probeOffset() {
    return navStickyOffset() + 4;
  }
  var LOCK_MS = 2000;

  var lockedHash = null;
  var lockUntil = 0;
  var unlockTimer = null;

  function allNavLinks() {
    return document.querySelectorAll(DESKTOP_SEL + "," + MOBILE_SEL);
  }

  function setActive(hash) {
    allNavLinks().forEach(function (link) {
      var match = !!hash && link.getAttribute("href") === hash;
      link.classList.toggle("is-active", match);
      if (match) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  function sectionFromLink(link) {
    var href = link.getAttribute("href") || "";
    if (href.charAt(0) !== "#") return null;
    var id = href.slice(1);
    if (!id) return null;
    return document.getElementById(id);
  }

  function activeHashFromScroll() {
    var links = document.querySelectorAll(DESKTOP_SEL);
    var probe = probeOffset();
    var entries = [];
    var i;
    for (i = 0; i < links.length; i++) {
      var section = sectionFromLink(links[i]);
      if (!section) continue;
      entries.push({
        hash: links[i].getAttribute("href"),
        el: section,
      });
    }

    /* Section heading visible under the nav but top not yet past probe (common
       after Lenis scroll-to-hash / while reading the Reports intro) — check FIRST
       so #services doesn’t keep the range until #pricing finally crosses. */
    var slack = Math.min(220, Math.round(window.innerHeight * 0.35));
    var nearest = null;
    var nearestDist = Infinity;
    for (i = 0; i < entries.length; i++) {
      var t = entries[i].el.getBoundingClientRect().top;
      if (t > probe && t <= probe + slack && t - probe < nearestDist) {
        nearestDist = t - probe;
        nearest = entries[i].hash;
      }
    }
    if (nearest) return nearest;

    /* Each nav item owns the range from its section top → next nav section top
       (covers testimonials/infra between #services and #pricing). */
    var bestPassed = null;
    for (i = 0; i < entries.length; i++) {
      var top = entries[i].el.getBoundingClientRect().top;
      var nextTop =
        i + 1 < entries.length
          ? entries[i + 1].el.getBoundingClientRect().top
          : Number.POSITIVE_INFINITY;
      if (top <= probe && nextTop > probe) {
        return entries[i].hash;
      }
      if (top <= probe) bestPassed = entries[i].hash;
    }

    return bestPassed;
  }

  function targetArrived(hash) {
    if (!hash || hash.charAt(0) !== "#") return false;
    var section = document.getElementById(hash.slice(1));
    if (!section) return false;
    var top = section.getBoundingClientRect().top;
    return top <= probeOffset() + 48 && top >= -Math.min(section.offsetHeight * 0.4, 320);
  }

  function clearLock() {
    lockedHash = null;
    lockUntil = 0;
    if (unlockTimer) {
      window.clearTimeout(unlockTimer);
      unlockTimer = null;
    }
  }

  function lockTo(hash) {
    if (!hash) return;
    lockedHash = hash;
    lockUntil = Date.now() + LOCK_MS;
    setActive(hash);
    if (unlockTimer) window.clearTimeout(unlockTimer);
    unlockTimer = window.setTimeout(function () {
      /* Stay on the clicked hash if spy would still disagree for a beat (Lenis settle) */
      if (lockedHash && !targetArrived(lockedHash)) {
        lockUntil = Date.now() + 800;
        unlockTimer = window.setTimeout(function () {
          clearLock();
          setActive(activeHashFromScroll());
        }, 800);
        return;
      }
      clearLock();
      setActive(activeHashFromScroll());
    }, LOCK_MS);
  }

  function syncActiveFromScroll() {
    if (lockedHash) {
      if (targetArrived(lockedHash) || Date.now() >= lockUntil) {
        clearLock();
      } else {
        /* Keep the clicked item lit while Lenis is still animating past other sections */
        setActive(lockedHash);
        return;
      }
    }
    setActive(activeHashFromScroll());
  }

  function onNavClick(e) {
    var link = e.currentTarget;
    var hash = link.getAttribute("href");
    if (!hash || hash.charAt(0) !== "#") return;
    lockTo(hash);
  }

  function init() {
    var desktopLinks = document.querySelectorAll(DESKTOP_SEL);
    if (!desktopLinks.length) return;

    desktopLinks.forEach(function (link) {
      link.addEventListener("click", onNavClick);
    });

    document.querySelectorAll(MOBILE_SEL).forEach(function (link) {
      link.addEventListener("click", onNavClick);
    });

    window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    window.addEventListener("resize", syncActiveFromScroll);

    function attachLenis() {
      if (window.__tourismLenis && typeof window.__tourismLenis.on === "function") {
        window.__tourismLenis.on("scroll", syncActiveFromScroll);
        return true;
      }
      return false;
    }
    if (!attachLenis()) {
      window.setTimeout(attachLenis, 0);
    }

    if (window.location.hash) setActive(window.location.hash);
    else syncActiveFromScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* --- Lenis smooth scroll (index only — Lenis is not loaded on 404) --- */
if (
  typeof Lenis !== 'undefined' &&
  typeof ScrollTrigger !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
   // Do NOT blanket-prevent on the work carousel: that trapped vertical page scroll
   // whenever the cursor was over the cards. Horizontal trackpad is handled in the
   // carousel wheel listener via preventDefault + stopPropagation instead.
   const lenis = new Lenis({
   	lerp: 0.1,
   	prevent: (node) =>
   		!!(node && node.closest && node.closest('[data-lenis-prevent]:not(.div-block-214)')),
   });
   window.__tourismLenis = lenis;

  
   lenis.on('scroll', ScrollTrigger.update);

   function raf(time) {
     lenis.raf(time);
     requestAnimationFrame(raf);
   }

   requestAnimationFrame(raf);
}


/* --- Anchor scroll: every in-page jump parks the section divider under the sticky nav --- */
(function initAnchoredScroll() {
  "use strict";

  function navHeight() {
    var nav = document.querySelector(".div-block-47");
    return nav ? Math.round(nav.getBoundingClientRect().height) : 69;
  }

  function syncNavOffsetVar() {
    document.documentElement.style.setProperty(
      "--nav-sticky-offset",
      navHeight() + "px"
    );
  }

  function currentScrollY() {
    var l = window.__tourismLenis;
    if (l) {
      if (typeof l.animatedScroll === "number") return l.animatedScroll;
      if (typeof l.scroll === "number") return l.scroll;
    }
    return (
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0
    );
  }

  function targetScrollY(el) {
    return Math.max(
      0,
      Math.round(currentScrollY() + el.getBoundingClientRect().top - navHeight() - 12)
    );
  }

  function resolveScrollEl(id) {
    /* CTA / Collaborate should land on the form card, not the leadform copy column */
    if (id === "lead-form") {
      return (
        document.getElementById("lead-form-card") ||
        document.querySelector(".home-leadform-section .leadform-card") ||
        document.getElementById("form") ||
        document.getElementById("lead-form")
      );
    }
    return document.getElementById(id);
  }

  function scrollToId(id, opts) {
    var el = resolveScrollEl(id);
    if (!el) return false;
    syncNavOffsetVar();
    var y = targetScrollY(el);
    var lenis = window.__tourismLenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(y, {
        duration: (opts && typeof opts.duration === "number") ? opts.duration : 1.2,
        immediate: !!(opts && opts.immediate),
        lock: true,
      });
    } else {
      window.scrollTo({
        top: y,
        behavior: opts && opts.immediate ? "auto" : "smooth",
      });
    }
    return true;
  }

  window.__tourismScrollToId = scrollToId;

  function onAnchorClick(e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || a.hasAttribute("download") || a.getAttribute("target") === "_blank") {
      return;
    }
    var href = a.getAttribute("href");
    if (!href || href === "#" || href.length < 2) return;
    var id = decodeURIComponent(href.slice(1));
    /* Close mobile drawer on any in-drawer option — before scroll / id checks */
    var drawer = document.getElementById("mobileNavDrawer");
    if (drawer && drawer.contains(a)) {
      if (typeof window.__tourismSetMobileMenu === "function") {
        window.__tourismSetMobileMenu(false);
      } else {
        drawer.classList.remove("is-open");
        drawer.style.setProperty("transform", "translate3d(100%,0,0)", "important");
        var ov = document.querySelector(".mobile-menu-overlay");
        if (ov) ov.classList.remove("is-open");
        document.body.classList.remove("mobile-menu-open");
      }
    }
    if (!resolveScrollEl(id) && !document.getElementById(id)) return;
    /* Always handle known page sections the same way (nav + CTA + footer links) */
    e.preventDefault();
    e.stopPropagation();
    if (scrollToId(id)) {
      if (history.pushState) history.pushState(null, "", "#" + id);
      else window.location.hash = "#" + id;
    }
  }

  function boot() {
    syncNavOffsetVar();
    document.addEventListener("click", onAnchorClick, true);
    window.addEventListener("resize", syncNavOffsetVar);
    if (window.location.hash && window.location.hash.length > 1) {
      var bootId = decodeURIComponent(window.location.hash.slice(1));
      window.requestAnimationFrame(function () {
        scrollToId(bootId, { immediate: true, duration: 0 });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();


/* --- index inline block 3 --- */
function toggleVideo() {
         var vid = document.querySelector('.hero-video');
         if (!vid) return;
         var playIcon = document.getElementById('playIcon');
         var pauseIcon = document.getElementById('pauseIcon');
         if (vid.paused) {
          vid.play();
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'block';
         } else {
          vid.pause();
          playIcon.style.display = 'block';
          pauseIcon.style.display = 'none';
         }
        }

/* --- index inline block 4 --- */
document.addEventListener('DOMContentLoaded',function(){
  var vid=document.querySelector('.hero-video');
  var play=document.getElementById('playIcon');
  var pause=document.getElementById('pauseIcon');
  if(vid&&play&&pause){
    play.style.display='none';
    pause.style.display='block';
  }
});

/* --- index inline block 5 --- */
(function(){
         // ── Data ──
         var testimonials = [
          {
           testimonial: "It's always been a pleasure working with Mélange Digital. They delivered nearly double our campaign targets, driven by meticulous research and a spot-on selection of creators.",
           by: "Pooja Raut, Digital Lead & Brand Specialist, Singapore Tourism Board",
           imgSrc: "images/figma/pooja.jpeg"
          },
          {
           testimonial: "Melange brought genuine cultural access. The voices they chose were not just popular, they were credible to exactly the audience we needed. The repositioning worked.",
           by: "Puneet Kumar, Director, South Asia & Middle East, Hong Kong Tourism Board",
           imgSrc: "images/figma/Puneet-Kumar.jpg"
          },
          {
           testimonial: "Mélange Digital gave a first-time entrant at OTM Mumbai the most experience on the floor, not just a booth. The result was 500+ trade connections and our Most Promising Destination award.",
           by: "Collins Chilongoshi, Tourism Promotion Manager, Zambia Tourism Authority",
           imgSrc: "images/figma/collins.jpg"
          },
          {
           testimonial: "Mélange Digital made Singapore live inside DIVINE's track, Saucy, instead of just backing an ad around it. That's the kind of brand integration our industry needs more of.",
           by: "Rohit Machcha, VP – Revenue & IPs, Gully Gang",
           imgSrc: "images/figma/rohit-machcha.jpg"
          },
          {
           testimonial: "Our maiden GCC launch needed one team accountable for everything, from positioning to performance. Mélange Digital delivered that, and $2.3M in sales proved it was the right call.",
           by: "Naresh Rawal, Senior Vice President – Sales & Marketing, Resorts World Cruises",
           imgSrc: "images/figma/Naresh-Rawal-Profile-Pic.jpg"
          },
          {
           testimonial: "This activation shifted Saudi from a religious destination to a leisure one, right inside Phoenix Mall. Mélange Digital's execution of our kiosk brought us 400+ walk-ins and 1,200+ e-visa enquiries in four days.",
           by: "Sajin Nawshad, Director, Akbar Group",
           imgSrc: "images/figma/sajin-nawshad.jpg"
          },
          {
           testimonial: "We needed bookings from affluent India beyond the metros. Mélange Digital built a creator engine for Tier 2 and Tier 3 India, and 56M views proved it worked.",
           by: "Rae Soon, Regional Manager – Sales & Marketing (India), Resorts World Sentosa",
           imgSrc: "images/figma/rae-soon.png"
          },
          {
           testimonial: "Their data-driven campaigns helped us exceed INR 3 Crores in sales. From strategy to web development and engaging content, they truly made a difference. We felt supported throughout, and their creativity brought our vision to life!",
           by: "Vasundhara Gupta, Head – Costa Cruises",
           imgSrc: "images/figma/vasundara.png"
          }
         ];

         // ── State ──
         var list = testimonials.slice();
         var stage = document.getElementById('staggerStage');
         var prevBtn = document.getElementById('staggerPrev');
         var nextBtn = document.getElementById('staggerNext');
         if (!stage) return;

         var cardSize = 365;
         var cards = [];
         var isUpdating = false;

         // ── Responsive: update card size (must match CSS media rules) ──
         function updateCardSize() {
          var w = window.innerWidth;
          if (w <= 479) {
           cardSize = Math.min(300, Math.max(260, Math.round(w * 0.86)));
          } else if (w <= 767) {
           /* CSS: min(82vw, 290px) at ≤767 — JS was still using 365 from 640+ */
           cardSize = Math.min(290, Math.round(w * 0.82));
          } else if (w <= 900) {
           cardSize = 320;
          } else {
           cardSize = 365;
          }
         }
         updateCardSize();

         function getStaggerLayout() {
          var w = window.innerWidth;
          if (w <= 479) {
           return { anchor: '50%', centerY: 0, sideY: 4, tall: true };
          }
          if (w <= 639) {
           return { anchor: '50%', centerY: 0, sideY: 6, tall: true };
          }
          if (w <= 900) {
           return { anchor: '46%', centerY: -14, sideY: 12, tall: false };
          }
          /* Sit cards higher under the heading; keep mild lift so tops stay in-bounds */
          return { anchor: '44%', centerY: -18, sideY: 15, tall: false };
         }

         function syncStageHeight(layout) {
          var tall = layout && layout.tall;
          var h = tall
            ? Math.round(cardSize * 1.35) + 72
            : cardSize + 120;
          stage.style.height = Math.max(tall ? 420 : 400, h) + 'px';
         }

         // ── Build all card DOM elements (called once on init) ──
         function buildCards() {
          stage.innerHTML = '';
          cards = [];
          list.forEach(function(t, i) {
           var card = document.createElement('div');
           card.className = 'stagger-card';

           // Portrait image
           var img = document.createElement('img');
           img.className = 'stagger-card-img';
          img.src = encodeURI(t.imgSrc);
           img.alt = t.by.split(',')[0];
           img.loading = 'lazy';
           img.draggable = false;
           card.appendChild(img);

           // Quote text (body copy — not a section heading)
           var quote = document.createElement('p');
           quote.className = 'stagger-card-quote';
           quote.textContent = '"' + t.testimonial + '"';
           card.appendChild(quote);

           // Attribution
           var attr = document.createElement('p');
           attr.className = 'stagger-card-attr';
           attr.textContent = '- ' + t.by;
           card.appendChild(attr);

           // Click to bring to center (using position offset, not array index)
           card.addEventListener('click', function() {
            var pos = parseInt(card.getAttribute('data-pos'));
            if (pos !== 0) handleMove(pos);
           });

           stage.appendChild(card);
           cards.push(card);
          });
         }
         buildCards();

         // ── Update card content from the shifted data ──
         function updateCardContent() {
          cards.forEach(function(card, i) {
           var t = list[i];
           card.querySelector('.stagger-card-img').src = encodeURI(t.imgSrc);
           card.querySelector('.stagger-card-img').alt = t.by.split(',')[0];
           card.querySelector('.stagger-card-quote').textContent = '"' + t.testimonial + '"';
           card.querySelector('.stagger-card-attr').textContent = '- ' + t.by;
          });
         }

         // ── Position all cards using 50vw + GPU-accelerated transforms ──
        // ── Position all cards using 50vw + GPU-accelerated transforms ──
function positionCards() {
 var len = cards.length;
 var layout = getStaggerLayout();
 syncStageHeight(layout);

 cards.forEach(function(card, i) {
  var pos = i - Math.floor(len / 2);

  var isCenter = pos === 0;
  var offsetX = (cardSize / (layout.tall ? 1.35 : 1.5)) * pos;
  var translateY = isCenter ? layout.centerY : (pos % 2 !== 0 ? layout.sideY : -layout.sideY);
  var rotate = isCenter ? 0 : (pos % 2 !== 0 ? 2.5 : -2.5);

  card.style.width = cardSize + 'px';
  if (layout.tall) {
   card.style.height = 'auto';
   card.style.minHeight = Math.round(cardSize * 1.22) + 'px';
   card.style.maxHeight = 'none';
  } else {
  card.style.height = cardSize + 'px';
   card.style.minHeight = '';
   card.style.maxHeight = '';
  }
  card.style.left = '50%';
  card.style.top = layout.anchor;
  card.style.transform = 'translate(-50%, -50%) translateX(' + offsetX + 'px) translateY(' + translateY + 'px) rotate(' + rotate + 'deg)';
  card.style.boxShadow = isCenter ? '0px 8px 0px 4px rgba(27,29,30,0.08)' : '0px 0px 0px 0px transparent';
  // FIX: positionCards never set z-index. On every prev/next click the cards
  // array is rotated (push/shift) while DOM order stays as built, so paint
  // order could leave a side card’s text stacked above the center card.
  // Center gets len (always highest); others drop by |pos| so the focused
  // card always paints on top regardless of DOM order.
  card.style.zIndex = isCenter ? String(len) : String(len - Math.abs(pos));

  card.setAttribute('data-pos', pos);

  if (isCenter) {
   card.classList.add('is-center');
   card.classList.remove('is-away');
  } else {
   card.classList.remove('is-center');
   card.classList.add('is-away');
  }
 });
}
positionCards();

         // ── Smoothly rotate the carousel by shifting array + reusing DOM ──
         function handleMove(steps) {
          if (isUpdating) return;
          isUpdating = true;

          // Shift data array
          if (steps > 0) {
           for (var s = steps; s > 0; s--) { list.push(list.shift()); }
          } else {
           for (var s = steps; s < 0; s++) { list.unshift(list.pop()); }
          }

          // Shift card elements to match — DOM persists, transitions animate
          if (steps > 0) {
           for (var s = steps; s > 0; s--) { cards.push(cards.shift()); }
          } else {
           for (var s = steps; s < 0; s++) { cards.unshift(cards.pop()); }
          }

          // Update content from the new data order
          updateCardContent();

          // Re-position — CSS transition smoothly animates the transform change
          positionCards();

          isUpdating = false;
         }

         // ── Event listeners ──
         prevBtn.addEventListener('click', function() { handleMove(-1); });
         nextBtn.addEventListener('click', function() { handleMove(1); });

         // Reposition on window resize
         window.addEventListener('resize', function() {
          updateCardSize();
          positionCards();
         });

         // Initial render opacity
         cards.forEach(function(c) { c.style.opacity = '1'; });

        })();

/* --- Report stat counters (index only) --- */
(function () {
       if (!document.querySelector('.report-grid')) return;

       // ── Easing: easeOutQuart ──────────────────────────────────────────
       function easeOut(t) {
        return 1 - Math.pow(1 - t, 4);
       }
   
       // ── Animate a single element from 0 to its target ────────────────
       function animateCounter(el) {
        if (el.dataset.counted) return;
        el.dataset.counted = 'true';
   
        var raw      = el.dataset.target;
        var suffix   = el.dataset.suffix || '';
        var decimals = (raw.indexOf('.') !== -1) ? raw.split('.')[1].length : 0;
        var target   = parseFloat(raw);
        var duration = parseInt(el.dataset.duration || '2000', 10);
        var start    = null;
   
        function step(timestamp) {
         if (!start) start = timestamp;
         var elapsed  = timestamp - start;
         var progress = Math.min(elapsed / duration, 1);
         var value    = easeOut(progress) * target;
         // Format with commas if original had them
         var formatted = el.dataset.comma === 'true'
          ? Math.round(value).toLocaleString()
          : value.toFixed(decimals);
         el.textContent = formatted + suffix;
         if (progress < 1) {
          requestAnimationFrame(step);
         } else {
          var finalFormatted = el.dataset.comma === 'true'
           ? target.toLocaleString()
           : target.toFixed(decimals);
          el.textContent = finalFormatted + suffix;
         }
        }
   
        requestAnimationFrame(step);
       }
   
       // FIX: removed the "Wire up fb-count elements" branch that queried '[fb-count="true"]' — no
       // element in this file's HTML uses the fb-count attribute (it was leftover from a prior template
       // version), so it was dead code that always matched zero elements. Also dropped it from the
       // allCounters selector below.
   
       // ── Wire up report stat elements (67%, 4,200, 4.2×) ──────────────
       // FIX: queried `.report-grid [style*="Instrument Serif"]`, but the three
       // report stats use Alan Sans inline — that substring matched nothing, so
       // counters never got data-target and never animated. Class .report-stat-value
       // on the markup is the stable hook.
       document.querySelectorAll('.report-grid .report-stat-value').forEach(function (el) {
        var text    = el.textContent.trim();
        var hasComma = text.indexOf(',') !== -1;
        var cleaned = text.replace(/,/g, '');
        var suffix  = '';
        var num     = parseFloat(cleaned);
        if (isNaN(num)) return;
        if (cleaned.indexOf('%')  !== -1) suffix = '%';
        else if (cleaned.indexOf('×') !== -1) suffix = '×';
        else if (cleaned.indexOf('M+')!== -1) suffix = 'M+';
        else if (cleaned.indexOf('M') !== -1) suffix = 'M';
        else if (cleaned.indexOf('K') !== -1) suffix = 'K';
        el.dataset.target   = num.toString();
        el.dataset.suffix   = suffix;
        el.dataset.duration = '2000';
        el.dataset.comma    = hasComma ? 'true' : 'false';
        el.textContent      = '0' + suffix;
       });
   
       // ── Collect all counter elements ──────────────────────────────────
       var allCounters = Array.prototype.slice.call(
        document.querySelectorAll('.report-grid .report-stat-value[data-target]')
       );
   
       // ── IntersectionObserver — fire when element scrolls into view ────
       if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
         entries.forEach(function (entry) {
          if (entry.isIntersecting) {
           var el    = entry.target;
           var delay = parseInt(el.getAttribute('fb-count-delay') || '0', 10);
           setTimeout(function () { animateCounter(el); }, delay);
           observer.unobserve(el);
          }
         });
        }, { threshold: 0.3 });
   
        allCounters.forEach(function (el) { observer.observe(el); });
       } else {
        allCounters.forEach(function (el) { animateCounter(el); });
       }
   
      })();

/* --- Report promo carousel (two hosted reports; slide 2 is placeholder) --- */
(function () {
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

  prev.addEventListener("click", function () { show(i - 1); });
  next.addEventListener("click", function () { show(i + 1); });
  root.addEventListener("touchstart", function (e) {
    startX = e.changedTouches[0].clientX;
  }, { passive: true });
  root.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 40) return;
    show(i + (dx < 0 ? 1 : -1));
  }, { passive: true });
})();

/* --- CountUp counters (Shift + Network; SPA-safe) --- */
(function initMelangeCountUps() {
  function run() {
    if (typeof countUp === "undefined") return;

    var counters = document.querySelectorAll("[data-melange-count][data-count]");
    if (!counters.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var value = parseFloat(el.dataset.count);
          if (isNaN(value)) return;
          var decimals = parseInt(el.dataset.decimals || "0", 10);
          var prefix = el.dataset.prefix || "";
          var suffix = el.dataset.suffix || "";
          var counter = new countUp.CountUp(el, value, {
            duration: 2,
            decimalPlaces: decimals,
            useEasing: true,
            separator: ",",
            prefix: prefix,
            suffix: suffix,
          });
          if (!counter.error) counter.start();
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();

/* --- Our Work carousel: autoplay + trackpad + side nav buttons (no grab-drag) --- */
(function initWorkCarousel() {
  var track = document.querySelector(".div-block-214");
  var prevBtn = document.getElementById("workCarouselPrev");
  var nextBtn = document.getElementById("workCarouselNext");
  if (!track) return;

  var INTERVAL_MS = 4000;
  var ANIM_MS = 520;
  var WHEEL_MULT = 1.35;
  var timer = null;
  var animating = false;
  var inView = true;
  var hovering = false;
  /* Pause over the whole work section (not just the track) so nav buttons are usable */
  var shell =
    track.closest(".home-our-work-section") ||
    track.closest(".work-carousel") ||
    track;
  var lastPtr = { x: -1, y: -1 };
  var wrapping = false;

  function workCards() {
    return Array.prototype.slice.call(
      track.querySelectorAll(".work-card-link:not([data-work-hidden])")
    );
  }

  function padStatGrids() {
    workCards().forEach(function (card) {
      card.querySelectorAll(".work-card-stats").forEach(function (grid) {
      var count = grid.querySelectorAll(".work-card-stat").length;
      while (count < 3) {
        var empty = document.createElement("div");
        empty.className = "work-card-stat is-empty";
        empty.setAttribute("aria-hidden", "true");
        empty.innerHTML =
          '<span class="work-card-stat-value">&nbsp;</span><span class="work-card-stat-label">&nbsp;</span>';
        grid.appendChild(empty);
        count += 1;
      }
      });
    });
  }

  function equalizeStatBands() {
    var bands = [];
    workCards().forEach(function (card) {
      card.querySelectorAll(".work-card-stats").forEach(function (band) {
        bands.push(band);
      });
    });
    if (!bands.length) return;

    bands.forEach(function (band) {
      band.style.height = "";
      band.style.minHeight = "";
    });

    var maxBand = 0;
    bands.forEach(function (band) {
      maxBand = Math.max(maxBand, Math.ceil(band.getBoundingClientRect().height));
    });
    if (maxBand <= 0) return;

    bands.forEach(function (band) {
      band.style.height = maxBand + "px";
      band.style.minHeight = maxBand + "px";
    });
  }

  function equalizeCardHeights() {
    var cards = workCards();
    if (!cards.length) return;

    // Reset card heights first so stats bands measure at natural size
    cards.forEach(function (card) {
      card.style.height = "";
      card.style.minHeight = "";
    });

    // Match stats columns / band height across every card
    equalizeStatBands();

    var max = 0;
    cards.forEach(function (card) {
      max = Math.max(max, Math.ceil(card.getBoundingClientRect().height));
    });
    if (max <= 0) return;

    cards.forEach(function (card) {
      card.style.height = max + "px";
      card.style.minHeight = max + "px";
    });
  }

  /* Duplicate the set once so autoplay can scroll forward forever, then
     jump back by one set width with no animation (seamless loop). */
  function setupInfiniteLoop() {
    if (track.getAttribute("data-work-loop") === "1") return;
    var originals = workCards();
    if (originals.length < 2) return;
    originals.forEach(function (card) {
      card.setAttribute("data-work-original", "1");
    });
    originals.forEach(function (card) {
      var clone = card.cloneNode(true);
      clone.removeAttribute("data-work-original");
      clone.setAttribute("data-work-clone", "1");
      track.appendChild(clone);
    });
    track.setAttribute("data-work-loop", "1");
  }

  padStatGrids();
  setupInfiniteLoop();
  equalizeCardHeights();
  window.addEventListener("resize", equalizeCardHeights);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(equalizeCardHeights);
  }
  window.setTimeout(equalizeCardHeights, 100);
  window.setTimeout(equalizeCardHeights, 500);
  track.querySelectorAll("img").forEach(function (img) {
    if (img.complete) return;
    img.addEventListener("load", equalizeCardHeights);
  });

  function gapPx() {
    var g = getComputedStyle(track).gap || getComputedStyle(track).columnGap || "32";
    return parseFloat(g) || 32;
  }

  function stepSize() {
    var card = track.querySelector(".work-card-link:not([data-work-hidden])");
    if (!card) return 512;
    return card.getBoundingClientRect().width + gapPx();
  }

  /* Pixel width of one full original set (originals + gaps through to first clone). */
  function loopWidth() {
    var firstClone = track.querySelector('.work-card-link[data-work-clone="1"]:not([data-work-hidden])');
    if (!firstClone) return 0;
    var originals = track.querySelectorAll('.work-card-link[data-work-original="1"]:not([data-work-hidden])');
    if (!originals.length) return 0;
    return originals.length * stepSize();
  }

  function maxScroll() {
    return Math.max(0, track.scrollWidth - track.clientWidth);
  }

  function clampScroll(x) {
    return Math.max(0, Math.min(maxScroll(), x));
  }

  /* Keep scrollLeft inside the first set by jumping ±loopWidth with no animation. */
  function normalizeLoop() {
    var setW = loopWidth();
    if (setW <= 0) return;
    wrapping = true;
    while (track.scrollLeft >= setW - 0.5) {
      track.scrollLeft -= setW;
    }
    while (track.scrollLeft < -0.5) {
      track.scrollLeft += setW;
    }
    wrapping = false;
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function startAuto() {
    stopAuto();
    if (reduceMotion || !inView || hovering) return;
    timer = setInterval(goNext, INTERVAL_MS);
  }

  function goBy(dir) {
    if (animating) return;
    if (track.querySelectorAll(".work-card-link:not([data-work-hidden])").length < 2) return;

    var step = stepSize();
    var setW = loopWidth();
    if (setW <= 0) {
      /* Fallback if loop setup did not run */
      var max = maxScroll();
      if (max <= 0) return;
      animating = true;
      var fallback = track.scrollLeft + dir * step;
      track.scrollTo({ left: clampScroll(fallback), behavior: "smooth" });
      window.setTimeout(function () {
        animating = false;
      }, ANIM_MS);
      if (inView && !hovering) startAuto();
      return;
    }

    animating = true;

    /* Going backward from the start: jump into the clone set first so we can
       animate left without a visible snap to the end. */
    if (dir < 0 && track.scrollLeft < 4) {
      wrapping = true;
      track.scrollLeft = setW;
      wrapping = false;
    }

    var nextLeft = track.scrollLeft + dir * step;
    track.scrollTo({ left: nextLeft, behavior: "smooth" });

    window.setTimeout(function () {
      normalizeLoop();
      animating = false;
    }, ANIM_MS);

    if (inView && !hovering) startAuto();
  }

  function goNext() {
    goBy(1);
  }

  function goPrev() {
    goBy(-1);
  }

  if (prevBtn) prevBtn.addEventListener("click", goPrev);
  if (nextBtn) nextBtn.addEventListener("click", goNext);

  function setHovering(next) {
    if (hovering === next) return;
    hovering = next;
    if (hovering) stopAuto();
    else if (inView) startAuto();
  }

  function pointerOverShell(x, y) {
    if (x < 0 || y < 0) return false;
    var el = document.elementFromPoint(x, y);
    return !!(el && shell.contains(el));
  }

  function syncHoverFromPointer() {
    setHovering(pointerOverShell(lastPtr.x, lastPtr.y));
  }

  shell.addEventListener("mouseenter", function () {
    setHovering(true);
  });
  shell.addEventListener("mouseleave", function () {
    setHovering(false);
  });
  /* Keyboard / button focus should also hold autoplay */
  shell.addEventListener("focusin", function () {
    setHovering(true);
  });
  shell.addEventListener("focusout", function (e) {
    if (!shell.contains(e.relatedTarget)) setHovering(false);
  });

  /* Scroll can move the section under a stationary cursor without mouseenter.
     Keep last pointer coords and re-check so autoplay actually pauses. */
  window.addEventListener(
    "mousemove",
    function (e) {
      lastPtr.x = e.clientX;
      lastPtr.y = e.clientY;
      syncHoverFromPointer();
    },
    { passive: true }
  );
  window.addEventListener("scroll", syncHoverFromPointer, { passive: true });

  /* Manual track scroll (trackpad) also needs seamless wrap */
  track.addEventListener(
    "scroll",
    function () {
      if (wrapping || animating) return;
      normalizeLoop();
    },
    { passive: true }
  );

  // Horizontal trackpad only. Never swallow vertical — that was trapping page scroll
  // on the work section (Lenis + touch-action: pan-x).
  track.addEventListener(
    "wheel",
    function (e) {
      var absX = Math.abs(e.deltaX);
      var absY = Math.abs(e.deltaY);
      // Require clearly horizontal intent; let vertical / diagonal-vertical through
      if (absX < 2 || absX <= absY * 1.15) return;
        e.preventDefault();
        e.stopPropagation();
      track.scrollLeft = clampScroll(track.scrollLeft + e.deltaX * WHEEL_MULT);
      normalizeLoop();
      stopAuto();
      if (!hovering && inView) startAuto();
    },
    { passive: false }
  );

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          inView = entry.isIntersecting;
          syncHoverFromPointer();
          if (inView && !hovering) startAuto();
          else stopAuto();
        });
      },
      { threshold: 0.25 }
    );
    io.observe(shell);
  } else {
    startAuto();
  }
})();

/* Safety: site-home.js only adds .w-mod-ix3 after IX3 ready()+getInstance() succeed.
   If that never happens, the FOUC CSS (now disabled) and any leftover IX gates leave
   headings invisible. Ensure the class lands once the rest of the page scripts run. */
(function ensureIx3Class() {
  if (document.documentElement.classList.contains("w-mod-ix3")) return;
  document.documentElement.classList.add("w-mod-ix3");
  window.dispatchEvent(new CustomEvent("__wf_ix3_ready"));
})();

/* --- FAQ: show 3 by default, expand to all on click --- */
(function initFaqMore() {
  var list = document.querySelector(".faq-list");
  var btn = document.getElementById("faqMoreBtn");
  if (!list || !btn) return;
  var label = btn.querySelector(".faq-more-btn__label");

  btn.addEventListener("click", function () {
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
  });
})();

/* --- Mobile menu: open/close drawer (vanilla — ignore Webflow IX2 inline styles) --- */
(function initMobileMenu() {
  function boot() {
    var toggle = document.querySelector(".menu-toggle-btn");
    var drawer = document.getElementById("mobileNavDrawer");
    var overlay = document.querySelector(".mobile-menu-overlay");
    var closeBtn = document.querySelector(".menu-close-btn");
    if (!toggle || !drawer) return;

    function setOpen(open) {
      open = !!open;
      drawer.classList.toggle("is-open", open);
      if (overlay) overlay.classList.toggle("is-open", open);
      document.body.classList.toggle("mobile-menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      /* Beat Webflow IX2 inline transforms that otherwise keep the drawer stuck open */
      drawer.style.setProperty(
        "transform",
        open ? "translate3d(0,0,0)" : "translate3d(100%,0,0)",
        "important"
      );
      if (!open) {
        drawer.style.removeProperty("display");
      }
      var lenis = window.__tourismLenis;
      if (lenis) {
        if (open && typeof lenis.stop === "function") lenis.stop();
        if (!open && typeof lenis.start === "function") lenis.start();
      }
    }

    window.__tourismSetMobileMenu = setOpen;

    function isOpen() {
      return drawer.classList.contains("is-open");
    }

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(!isOpen());
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
        setOpen(false);
      });
    }
    if (overlay) {
      overlay.addEventListener("click", function () {
        setOpen(false);
      });
    }

    drawer.addEventListener(
      "click",
      function (e) {
        var a = e.target.closest && e.target.closest("a");
        if (!a || !drawer.contains(a)) return;
        setOpen(false);
      },
      true
    );

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

/* --- Back to top: show near page end --- */
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
    var lenis = window.__tourismLenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  if (window.__tourismLenis && typeof window.__tourismLenis.on === "function") {
    window.__tourismLenis.on("scroll", sync);
  }
  sync();
})();

/* --- Continuous marquees (pixel RAF — no CSS % / vw loops) ---
   Trusted boards + infrastructure: eager images, cloned segment, ResizeObserver. */
(function initPixelMarquees() {
  "use strict";

  function forceEager(root) {
    Array.prototype.forEach.call(root.querySelectorAll("img"), function (img) {
      try {
        img.loading = "eager";
        img.decoding = "async";
        img.setAttribute("loading", "eager");
      } catch (err) { /* ignore */ }
      /* Kick decode if the browser deferred a lazy image */
      if (!img.complete && img.src) {
        var src = img.getAttribute("src");
        if (src) img.src = src;
      }
    });
  }

  function waitImages(root) {
    var imgs = Array.prototype.slice.call(root.querySelectorAll("img"));
    if (!imgs.length) return Promise.resolve();
    return Promise.all(
      imgs.map(function (img) {
        if (img.complete) return Promise.resolve();
        return new Promise(function (resolve) {
          var done = function () { resolve(); };
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
          setTimeout(done, 4000);
        });
      })
    );
  }

  function neutralize(el) {
    el.style.setProperty("animation", "none", "important");
    el.style.setProperty("width", "max-content", "important");
    el.style.setProperty("max-width", "none", "important");
    el.style.setProperty("min-width", "0", "important");
    el.style.setProperty("overflow", "visible", "important");
    el.style.setProperty("flex-shrink", "0", "important");
  }

  /** Build a single seamless pair: [segment][segment clone] inside track. */
  function normalizeTrack(track) {
    var groups = Array.prototype.filter.call(track.children, function (n) {
      return n.nodeType === 1;
    });
    if (!groups.length) return null;

    var segment;
    if (
      groups.length >= 2 &&
      groups[0].classList.contains("static-marquee_logos") &&
      groups[1].classList.contains("static-marquee_logos")
    ) {
      segment = groups[0];
      while (track.children.length > 1) track.removeChild(track.lastElementChild);
    } else if (groups[0].classList.contains("marquee-segment")) {
      segment = groups[0];
      while (track.children.length > 1) track.removeChild(track.lastElementChild);
    } else {
      /* Infra: flat logo items — wrap first half (or all unique) into a segment */
      var items = groups;
      var halfCount = Math.floor(items.length / 2);
      var keep = halfCount >= 2 ? items.slice(0, halfCount) : items.slice();
      segment = document.createElement("div");
      segment.className = "marquee-segment";
      keep.forEach(function (node) {
        segment.appendChild(node);
      });
      track.innerHTML = "";
      track.appendChild(segment);
    }

    neutralize(segment);
    segment.style.display = "inline-flex";
    segment.style.alignItems = "center";
    segment.style.justifyContent = "flex-start";
    segment.style.flexWrap = "nowrap";
    /* Trailing pad = item gap so loop seam isn’t tighter than mid-row gaps */
    var gapPx = "48px";
    segment.style.gap = gapPx;
    segment.style.paddingInlineEnd = gapPx;

    var clone = segment.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    neutralize(clone);
    clone.style.display = "inline-flex";
    clone.style.alignItems = "center";
    clone.style.justifyContent = "flex-start";
    clone.style.flexWrap = "nowrap";
    clone.style.gap = gapPx;
    clone.style.paddingInlineEnd = gapPx;
    track.appendChild(clone);

    forceEager(track);
    return segment;
  }

  function setup(viewport, track, speed, reverse) {
    if (!viewport || !track || track.dataset.pixelMarquee === "1") return;
    track.dataset.pixelMarquee = "1";

    viewport.classList.add("pixel-marquee");
    track.classList.add("pixel-marquee__track");
    neutralize(track);
    track.style.display = "flex";
    track.style.flexWrap = "nowrap";
    track.style.alignItems = "center";
    track.style.gap = "0";
    track.style.transform = "translate3d(0,0,0)";
    track.style.willChange = "transform";
    viewport.style.overflow = "hidden";

    var segment = normalizeTrack(track);
    if (!segment) return;

    var offset = 0;
    var half = 0;
    var rafId = 0;
    var lastTs = 0;
    var running = true;

    function measure() {
      var w = segment.offsetWidth || segment.getBoundingClientRect().width || 0;
      half = isFinite(w) && w > 8 ? w : 0;
    }

    function frame(ts) {
      rafId = requestAnimationFrame(frame);
      if (!running) {
        lastTs = ts;
        return;
      }
      if (!half) {
        measure();
        if (!half) {
          lastTs = ts;
          return;
        }
        offset = reverse ? -half : 0;
      }
      if (!lastTs) lastTs = ts;
      var dt = Math.min(0.048, (ts - lastTs) / 1000);
      lastTs = ts;
      if (reverse) {
        offset += speed * dt;
        while (offset >= 0) offset -= half;
      } else {
        offset -= speed * dt;
        while (offset <= -half) offset += half;
      }
      track.style.transform = "translate3d(" + offset.toFixed(2) + "px,0,0)";
    }

    function remountOffset() {
      var prev = half;
      measure();
      if (half > 0) {
        if (prev > 0) offset = (offset / prev) * half;
        else offset = reverse ? -half : 0;
      }
    }

    function startLoop() {
      remountOffset();
      lastTs = 0;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(frame);
    }

    waitImages(track).then(function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(startLoop);
      });
    });

    if (typeof ResizeObserver !== "undefined") {
      var ro = new ResizeObserver(function () {
        remountOffset();
      });
      ro.observe(segment);
      ro.observe(viewport);
    } else {
      window.addEventListener("resize", function () {
        remountOffset();
      });
    }

    if (typeof IntersectionObserver !== "undefined") {
      var io = new IntersectionObserver(
        function (entries) {
          running = !!(entries[0] && entries[0].isIntersecting);
          if (running) lastTs = 0;
        },
        { root: null, rootMargin: "80px 0px", threshold: 0 }
      );
      io.observe(viewport);
    }
  }

  function boot() {
    document.querySelectorAll(".home-logo-section .marquee-css-scroll").forEach(function (track) {
      var viewport = track.closest(".logo-section") || track.parentElement;
      setup(viewport, track, 42, false);
    });
    document.querySelectorAll(".home-infra-section .infra-marquee-left .infra-track").forEach(function (track) {
      setup(track.parentElement, track, 50, false);
    });
    document.querySelectorAll(".home-infra-section .infra-marquee-right .infra-track").forEach(function (track) {
      setup(track.parentElement, track, 46, true);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

/* --- Continuous marquees end --- */

/* --- Leadform goals multi-select dropdown --- */
(function initLeadformMultiselect() {
  function initOne(root) {
    var trigger = root.querySelector(".leadform-multiselect__trigger");
    var panel = root.querySelector(".leadform-multiselect__panel");
    var label = root.querySelector(".leadform-multiselect__label");
    var checks = root.querySelectorAll('input[type="checkbox"][name="MultipleChoice"]');
    if (!trigger || !panel || !label || !checks.length) return;

    var placeholder = label.getAttribute("data-placeholder") || "Your goal/s in India";

    function selectedLabels() {
      var out = [];
      checks.forEach(function (cb) {
        if (cb.checked) {
          var text = cb.parentNode && cb.parentNode.querySelector("span");
          out.push(text ? text.textContent.trim() : cb.value);
        }
      });
      return out;
    }

    function syncLabel() {
      var selected = selectedLabels();
      if (!selected.length) {
        label.textContent = placeholder;
        root.classList.remove("has-value");
      } else if (selected.length === 1) {
        label.textContent = selected[0];
        root.classList.add("has-value");
      } else {
        label.textContent = selected.length + " goals selected";
        root.classList.add("has-value");
      }
    }

    function setOpen(open) {
      root.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    }

    trigger.addEventListener("click", function (e) {
            e.preventDefault();
      setOpen(!root.classList.contains("is-open"));
    });

    checks.forEach(function (cb) {
      cb.addEventListener("change", syncLabel);
    });

    document.addEventListener("click", function (e) {
      if (!root.contains(e.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("is-open")) {
        setOpen(false);
        trigger.focus();
      }
    });

    var form = root.closest("form");
    if (form) {
      form.addEventListener("reset", function () {
        window.setTimeout(function () {
          syncLabel();
          setOpen(false);
        }, 0);
      });
    }

    syncLabel();
  }

  function init() {
    document.querySelectorAll("[data-leadform-multiselect]").forEach(initOne);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* --- Leadform country-code picker: dial-only field, flag images in list --- */
(function initLeadformCountryCode() {
  "use strict";

  function flagUrl(iso) {
    return "https://flagcdn.com/w40/" + String(iso).toLowerCase() + ".png";
  }

  function flagUrl2x(iso) {
    return "https://flagcdn.com/w80/" + String(iso).toLowerCase() + ".png";
  }

  function enhance(select) {
    if (!select || select.dataset.enhanced === "1") return;
    select.dataset.enhanced = "1";

    var wrap = document.createElement("div");
    wrap.className = "leadform-cc";
    wrap.setAttribute("data-leadform-cc", "");

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "leadform-cc__trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Country code");

    var triggerLabel = document.createElement("span");
    triggerLabel.className = "leadform-cc__value";
    trigger.appendChild(triggerLabel);

    var panel = document.createElement("div");
    panel.className = "leadform-cc__panel";
    panel.setAttribute("role", "listbox");
    panel.hidden = true;

    var parent = select.parentNode;
    parent.insertBefore(wrap, select);
    wrap.appendChild(trigger);
    wrap.appendChild(panel);
    wrap.appendChild(select);
    select.classList.add("leadform-cc__native");
    select.setAttribute("tabindex", "-1");
    select.setAttribute("aria-hidden", "true");

    function syncTrigger() {
      triggerLabel.textContent = select.value || "+91";
    }

    function setOpen(open) {
      wrap.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      panel.hidden = !open;
    }

    function pick(value) {
      select.value = value;
      syncTrigger();
      setOpen(false);
      try {
        select.dispatchEvent(new Event("change", { bubbles: true }));
      } catch (err) {
        /* IE fallback unused */
      }
      Array.prototype.forEach.call(panel.querySelectorAll(".leadform-cc__option"), function (btn) {
        var on = btn.getAttribute("data-value") === value;
        btn.classList.toggle("is-selected", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
    }

    Array.prototype.forEach.call(select.options, function (opt) {
      var iso = opt.getAttribute("data-flag") || "";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "leadform-cc__option";
      btn.setAttribute("role", "option");
      btn.setAttribute("data-value", opt.value);
      btn.setAttribute("aria-selected", opt.selected ? "true" : "false");
      if (opt.selected) btn.classList.add("is-selected");

      if (iso) {
        var img = document.createElement("img");
        img.className = "leadform-cc__flag";
        img.src = flagUrl(iso);
        img.srcset = flagUrl2x(iso) + " 2x";
        img.width = 20;
        img.height = 15;
        img.alt = "";
        img.loading = "lazy";
        img.decoding = "async";
        btn.appendChild(img);
      }

      var code = document.createElement("span");
      code.className = "leadform-cc__code";
      code.textContent = opt.value;
      btn.appendChild(code);

      btn.addEventListener("click", function (e) {
        e.preventDefault();
        pick(opt.value);
      });
      panel.appendChild(btn);
    });

    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      setOpen(panel.hidden);
    });

    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && wrap.classList.contains("is-open")) {
        setOpen(false);
        trigger.focus();
      }
    });

    var form = select.closest("form");
    if (form) {
      form.addEventListener("reset", function () {
        window.setTimeout(function () {
          syncTrigger();
          setOpen(false);
        }, 0);
      });
    }

    syncTrigger();
  }

  function init() {
    var select = document.getElementById("international_PhoneNumber_countrycodeval");
    if (select) enhance(select);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* --- Network image sphere (vanilla port of SphereImageGrid) ---
   Tourism page is static HTML — not React/shadcn/Tailwind — so this ports the
   interactive Fibonacci sphere here. Uses 10 distinct local images, repeated to
   fill the sphere such that no two identical sources sit next to each other. */
(function initNetworkSphere() {
  "use strict";

  /* Creator photos — URL-safe copies under images/creators/ */
  var UNIQUE_IMAGES = [
    { src: "images/creators/hk-1.png", alt: "Creator — Hong Kong 1", title: "Hong Kong 1" },
    { src: "images/creators/hk-2.png", alt: "Creator — Hong Kong 2", title: "Hong Kong 2" },
    { src: "images/creators/hk-3.png", alt: "Creator — Hong Kong 3", title: "Hong Kong 3" },
    { src: "images/creators/hk-4.png", alt: "Creator — Hong Kong 4", title: "Hong Kong 4" },
    { src: "images/creators/ites-1.png", alt: "Creator — ITES 1", title: "ITES 1" },
    { src: "images/creators/ites-2.png", alt: "Creator — ITES 2", title: "ITES 2" },
    { src: "images/creators/ites-3.png", alt: "Creator — ITES 3", title: "ITES 3" },
    { src: "images/creators/ites-5.png", alt: "Creator — ITES 5", title: "ITES 5" },
    { src: "images/creators/ites-6.png", alt: "Creator — ITES 6", title: "ITES 6" },
    { src: "images/creators/ites-7.png", alt: "Creator — ITES 7", title: "ITES 7" },
    { src: "images/creators/ites-8.png", alt: "Creator — ITES 8", title: "ITES 8" },
    { src: "images/creators/ites-9.png", alt: "Creator — ITES 9", title: "ITES 9" },
    { src: "images/creators/ites-10.png", alt: "Creator — ITES 10", title: "ITES 10" },
    { src: "images/creators/ites-11.png", alt: "Creator — ITES 11", title: "ITES 11" },
    { src: "images/creators/ites-12.png", alt: "Creator — ITES 12", title: "ITES 12" },
    { src: "images/creators/ites-13.png", alt: "Creator — ITES 13", title: "ITES 13" },
    { src: "images/creators/ites-14.png", alt: "Creator — ITES 14", title: "ITES 14" },
  ];

  var SPHERE_COUNT = UNIQUE_IMAGES.length;
  var DEG = Math.PI / 180;

  function degToRad(d) { return d * DEG; }
  function normalizeAngle(angle) {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
  }

  /**
   * Expand uniques to `count` slots.
   * Step 2 is coprime with 9 → full cycle; consecutive slots never share the same src.
   * Also rejects any accidental same-as-previous (safety).
   */
  function buildImageList(unique, count) {
    var out = [];
    var n = unique.length;
    var step = 2; /* gcd(2, n)=1 for odd n — covers all creators */
    var prevSrc = null;
    var i;
    for (i = 0; i < count; i++) {
      var idx = (i * step) % n;
      if (unique[idx].src === prevSrc) {
        idx = (idx + 1) % n;
      }
      var base = unique[idx];
      out.push({
        id: "sphere-" + (i + 1),
        src: base.src,
        alt: base.alt,
        title: base.title,
        description: base.alt,
      });
      prevSrc = base.src;
    }
    return out;
  }

  /** Angular distance between two spherical positions (degrees). */
  function angularDistance(a, b) {
    var dTheta = Math.abs(a.theta - b.theta);
    if (dTheta > 180) dTheta = 360 - dTheta;
    var dPhi = Math.abs(a.phi - b.phi);
    return Math.sqrt(dTheta * dTheta + dPhi * dPhi);
  }

  /**
   * Ensure no identical src sits beside another on the sphere.
   * Swaps with a far slot when two close positions share a src.
   */
  function separateSpatialDuplicates(images, positions) {
    var NEIGHBOUR = 28; /* degrees — treat as "side by side" */
    var i, j, k;
    for (i = 0; i < positions.length; i++) {
      for (j = i + 1; j < positions.length; j++) {
        if (images[i].src !== images[j].src) continue;
        if (angularDistance(positions[i], positions[j]) > NEIGHBOUR) continue;
        /* Find a swap candidate far from both and with a different src */
        for (k = 0; k < images.length; k++) {
          if (k === i || k === j) continue;
          if (images[k].src === images[i].src) continue;
          if (angularDistance(positions[i], positions[k]) < NEIGHBOUR) continue;
          if (angularDistance(positions[j], positions[k]) < NEIGHBOUR) continue;
          var tmp = images[j];
          images[j] = images[k];
          images[k] = tmp;
          break;
        }
      }
    }
  }

  function generateSpherePositions(count, radius) {
    var positions = [];
    var goldenRatio = (1 + Math.sqrt(5)) / 2;
    var angleIncrement = (2 * Math.PI) / goldenRatio;
    var i;
    for (i = 0; i < count; i++) {
      /* Even Fibonacci lattice — (i+0.5)/n keeps poles from stacking */
      var t = (i + 0.5) / count;
      var inclination = Math.acos(1 - 2 * t);
      var azimuth = angleIncrement * i;
      var phi = inclination * (180 / Math.PI);
      var theta = (azimuth * (180 / Math.PI)) % 360;
      /* Tiny deterministic jitter only — keeps scatter even, not clustered */
      theta = (theta + (((i * 37) % 9) - 4)) % 360;
      if (theta < 0) theta += 360;
      phi = Math.max(18, Math.min(162, phi + (((i * 19) % 5) - 2)));
      positions.push({ theta: theta, phi: phi, radius: radius });
    }
    return positions;
  }

  function createModal() {
    var existing = document.getElementById("networkSphereModal");
    if (existing) return existing;

    var modal = document.createElement("div");
    modal.id = "networkSphereModal";
    modal.className = "network-sphere-modal";
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML =
      '<div class="network-sphere-modal__card">' +
      '  <div class="network-sphere-modal__media">' +
      '    <img alt="" />' +
      '    <button type="button" class="network-sphere-modal__close" aria-label="Close">' +
      '      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 0 0-1.4 1.4l4.9 4.9-4.9 4.9a1 1 0 1 0 1.4 1.4l4.9-4.9 4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4z"/></svg>' +
      "    </button>" +
      "  </div>" +
      '  <div class="network-sphere-modal__body">' +
      '    <h3 class="network-sphere-modal__title"></h3>' +
      '    <p class="network-sphere-modal__desc"></p>' +
      "  </div>" +
      "</div>";
    document.body.appendChild(modal);
    return modal;
  }

  function initOne(root) {
    var wrap = root.closest(".network-sphere-wrap") || root.parentElement;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var images = buildImageList(UNIQUE_IMAGES, SPHERE_COUNT);

    var config = {
      dragSensitivity: 0.8,
      momentumDecay: 0.96,
      maxRotationSpeed: 6,
      baseImageScale: 0.28,
      hoverScale: 1.22,
      autoRotate: !reduceMotion,
      autoRotateSpeed: 0.32, /* keep gentle orbit so depth reads at rest */
    };

    /* Mild tilt — heavy X tilt was dumping the front faces into the bottom */
    var rotation = { x: 8, y: -22, z: 0 };
    var velocity = { x: 0, y: 0 };
    var isDragging = false;
    var dragDistance = 0;
    var hoveredIndex = null;
    var lastMouse = { x: 0, y: 0 };
    var rafId = null;
    var spherical = [];
    var nodes = [];
    var activePointerId = null;

    /* Do NOT set data-lenis-prevent here — that trapped vertical page scroll
       whenever the cursor hovered the globe (same bug as the work carousel).
       Drag still rotates via pointer events; wheel should scroll the page. */
    root.style.touchAction = "pan-y";

    var stage = document.createElement("div");
    stage.className = "network-sphere__stage";
    root.appendChild(stage);

    var modal = createModal();
    var modalImg = modal.querySelector(".network-sphere-modal__media img");
    var modalTitle = modal.querySelector(".network-sphere-modal__title");
    var modalDesc = modal.querySelector(".network-sphere-modal__desc");
    var modalClose = modal.querySelector(".network-sphere-modal__close");
    var modalCard = modal.querySelector(".network-sphere-modal__card");

    function openModal(image) {
      modalImg.src = encodeURI(image.src);
      modalImg.alt = image.alt || "";
      modalTitle.textContent = image.title || "";
      modalDesc.textContent = image.description || "";
      modalTitle.hidden = !image.title;
      modalDesc.hidden = !image.description;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.hidden = true;
      document.body.style.overflow = "";
    }

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    modalClose.addEventListener("click", closeModal);
    modalCard.addEventListener("click", function (e) { e.stopPropagation(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });

    function clampSpeed(speed) {
      var m = config.maxRotationSpeed;
      return Math.max(-m, Math.min(m, speed));
    }

    function dims() {
      var w = root.clientWidth || wrap.clientWidth || 0;
      var h = root.clientHeight || wrap.clientHeight || 0;
      if (w < 120) w = Math.max(280, Math.min(window.innerWidth - 48, 640));
      if (h < 80) h = w;
      return { w: w, h: h, short: Math.min(w, h) };
    }

    function rebuildNodes() {
      stage.innerHTML = "";
      nodes = [];
      var d = dims();
      var sphereRadius = d.short * (d.short < 420 ? 0.42 : 0.5);
      spherical = generateSpherePositions(images.length, sphereRadius);
      /* If two sphere-neighbours share a src, swap with a distant slot */
      separateSpatialDuplicates(images, spherical);

      images.forEach(function (image, index) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "network-sphere__node";
        btn.setAttribute("aria-label", image.alt || image.title || "Campaign photo");
        btn.dataset.index = String(index);
        var img = document.createElement("img");
        img.src = encodeURI(image.src);
        img.alt = "";
        img.draggable = false;
        img.loading = index < 6 ? "eager" : "lazy";
        btn.appendChild(img);
        btn.addEventListener("mouseenter", function () { hoveredIndex = index; });
        btn.addEventListener("mouseleave", function () {
          if (hoveredIndex === index) hoveredIndex = null;
        });
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          /* Ignore click that was actually a drag */
          if (dragDistance > 8) return;
          if (Math.abs(velocity.x) > 0.5 || Math.abs(velocity.y) > 0.5) return;
          openModal(image);
        });
        stage.appendChild(btn);
        nodes.push(btn);
      });
    }

    function worldPositions(d) {
      var sphereRadius = d.short * (d.short < 420 ? 0.42 : 0.5);
      var baseImageSize = d.short * config.baseImageScale;
      var rotXRad = degToRad(rotation.x);
      var rotYRad = degToRad(rotation.y);
      var cameraDistance = sphereRadius * 3.1;
      /* Projected rim used for center→edge scale (stable across frames) */
      var rimRadius = sphereRadius * 1.08;

      var positions = spherical.map(function (pos, index) {
        var thetaRad = degToRad(pos.theta);
        var phiRad = degToRad(pos.phi);
        var x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
        var y = pos.radius * Math.cos(phiRad);
        var z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

        var x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
        var z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
        x = x1;
        z = z1;

        var y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
        var z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
        y = y2;
        z = z2;

        var persp = cameraDistance / (cameraDistance - z);
        persp = Math.max(0.82, Math.min(1.18, persp));
        var screenX = x * persp;
        var screenY = y * persp;

        /* depthNorm: 0 = far back, 1 = nearest camera */
        var depthNorm = (z + sphereRadius) / (2 * sphereRadius);
        depthNorm = Math.max(0, Math.min(1, depthNorm));

        /*
         * Scale from screen center → rim:
         * near the cluster center = larger; toward the edge = smaller.
         * Mild depth blend so front-of-sphere still reads slightly closer.
         */
        var radial = Math.sqrt(screenX * screenX + screenY * screenY);
        var edgeT = Math.min(1, radial / rimRadius);
        var centerNorm = 1 - edgeT;
        /* smoothstep — no hard jumps as discs cross the rim */
        centerNorm = centerNorm * centerNorm * (3 - 2 * centerNorm);
        var scale = 0.68 + centerNorm * 0.22 + depthNorm * 0.08;

        /* Soft back fade — keep more of the ring readable (less top ghosting) */
        var fadeZoneStart = sphereRadius * 0.02;
        var fadeZoneEnd = -sphereRadius * 0.55;
        var fadeOpacity = 1;
        if (z <= fadeZoneStart) {
          var t = (z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd);
          fadeOpacity = Math.max(0, Math.min(1, t));
          fadeOpacity = fadeOpacity * fadeOpacity * (3 - 2 * fadeOpacity);
        }
        fadeOpacity *= 0.72 + depthNorm * 0.28;

        return {
          x: screenX,
          y: screenY,
          z: z,
          scale: scale,
          zIndex: Math.round(1000 + z),
          fadeOpacity: fadeOpacity,
          depthNorm: depthNorm,
          originalIndex: index,
        };
      });

      return { positions: positions, baseImageSize: baseImageSize, d: d };
    }

    function render() {
      var d = dims();
      var packed = worldPositions(d);
      var positions = packed.positions;
      var baseImageSize = packed.baseImageSize;
      var cx = d.w / 2;
      var cy = d.h / 2;

      nodes.forEach(function (node, index) {
        var position = positions[index];
        if (!position) return;

        var opacity = position.fadeOpacity;
        var isLive = opacity > 0.03;
        var isHovered = isLive && hoveredIndex === index;
        var scale = position.scale * (isHovered ? config.hoverScale : 1);
        var depth = position.depthNorm;
        var shadow = Math.round(6 + depth * 16);
        var shadowAlpha = (0.12 + depth * 0.22).toFixed(2);

        /* Fixed base size + transform scale — avoids width/height thrash / popping */
        node.style.width = baseImageSize + "px";
        node.style.height = baseImageSize + "px";
        node.style.left = cx + position.x + "px";
        node.style.top = cy + position.y + "px";
        node.style.opacity = String(opacity);
        node.style.visibility = isLive ? "visible" : "hidden";
        node.style.pointerEvents = isLive && depth > 0.32 ? "auto" : "none";
        node.style.zIndex = String(position.zIndex);
        node.style.boxShadow = "0 " + shadow + "px " + (shadow * 2) + "px rgba(15, 3, 48, " + shadowAlpha + ")";
        node.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
      });
    }

    function tick() {
      if (!isDragging) {
        velocity.x *= config.momentumDecay;
        velocity.y *= config.momentumDecay;
        if (!config.autoRotate && Math.abs(velocity.x) < 0.01 && Math.abs(velocity.y) < 0.01) {
          velocity.x = 0;
          velocity.y = 0;
        } else {
          var newY = rotation.y;
          if (config.autoRotate) newY += config.autoRotateSpeed;
          newY += clampSpeed(velocity.y);
          rotation.x = normalizeAngle(rotation.x + clampSpeed(velocity.x));
          rotation.y = normalizeAngle(newY);
        }
      }
      render();
      rafId = requestAnimationFrame(tick);
    }

    function onPointerDown(clientX, clientY, pointerId) {
      isDragging = true;
      dragDistance = 0;
      activePointerId = pointerId == null ? null : pointerId;
      root.classList.add("is-dragging");
      root.style.touchAction = "none";
      velocity.x = 0;
      velocity.y = 0;
      lastMouse.x = clientX;
      lastMouse.y = clientY;
    }

    function onPointerMove(clientX, clientY) {
      if (!isDragging) return;
      var deltaX = clientX - lastMouse.x;
      var deltaY = clientY - lastMouse.y;
      dragDistance += Math.abs(deltaX) + Math.abs(deltaY);
      var rx = clampSpeed(-deltaY * config.dragSensitivity);
      var ry = clampSpeed(deltaX * config.dragSensitivity);
      rotation.x = normalizeAngle(rotation.x + rx);
      rotation.y = normalizeAngle(rotation.y + ry);
      velocity.x = rx;
      velocity.y = ry;
      lastMouse.x = clientX;
      lastMouse.y = clientY;
    }

    function onPointerUp() {
      isDragging = false;
      activePointerId = null;
      root.classList.remove("is-dragging");
      root.style.touchAction = "pan-y";
    }

    if (window.PointerEvent) {
      root.addEventListener("pointerdown", function (e) {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        e.preventDefault();
        try { root.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
        onPointerDown(e.clientX, e.clientY, e.pointerId);
      });
      root.addEventListener("pointermove", function (e) {
        if (!isDragging) return;
        if (activePointerId != null && e.pointerId !== activePointerId) return;
        e.preventDefault();
        onPointerMove(e.clientX, e.clientY);
      });
      root.addEventListener("pointerup", onPointerUp);
      root.addEventListener("pointercancel", onPointerUp);
    } else {
      root.addEventListener("mousedown", function (e) {
        e.preventDefault();
        onPointerDown(e.clientX, e.clientY, null);
      });
      document.addEventListener("mousemove", function (e) {
        onPointerMove(e.clientX, e.clientY);
      });
      document.addEventListener("mouseup", onPointerUp);

      root.addEventListener(
        "touchstart",
        function (e) {
          if (!e.touches[0]) return;
          onPointerDown(e.touches[0].clientX, e.touches[0].clientY, null);
        },
        { passive: true }
      );
      document.addEventListener(
        "touchmove",
        function (e) {
          if (!isDragging || !e.touches[0]) return;
          if (dragDistance > 6) e.preventDefault();
          onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
        },
        { passive: false }
      );
      document.addEventListener("touchend", onPointerUp);
      document.addEventListener("touchcancel", onPointerUp);
    }

    rebuildNodes();
    render();
    rafId = requestAnimationFrame(tick);

    var resizeTimer = null;
    function scheduleRebuild() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        rebuildNodes();
        render();
      }, 120);
    }
    window.addEventListener("resize", scheduleRebuild);
    window.addEventListener("orientationchange", scheduleRebuild);
    if (typeof ResizeObserver !== "undefined") {
      var ro = new ResizeObserver(scheduleRebuild);
      ro.observe(wrap || root);
    }
    /* iOS often lays out with 0 width on first paint — rebuild after settle */
    window.setTimeout(scheduleRebuild, 300);
    window.setTimeout(scheduleRebuild, 1000);

    /* Keep auto-rotate on whenever the globe is roughly on-screen.
       IntersectionObserver + Lenis is flaky on iOS, so also poll rects. */
    function syncAutoRotate() {
      if (reduceMotion) {
        config.autoRotate = false;
        return;
      }
      var el = wrap || root;
      var rect = el.getBoundingClientRect();
      var vh = window.innerHeight || 800;
      var visible = rect.bottom > 40 && rect.top < vh - 40 && rect.width > 40;
      config.autoRotate = visible;
    }
    syncAutoRotate();
    window.addEventListener("scroll", syncAutoRotate, { passive: true });
    if (window.__tourismLenis && typeof window.__tourismLenis.on === "function") {
      window.__tourismLenis.on("scroll", syncAutoRotate);
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function () { syncAutoRotate(); },
        { root: null, threshold: [0, 0.05, 0.2] }
      );
      io.observe(wrap || root);
    }
  }

  function run() {
    var root = document.querySelector("[data-network-sphere]");
    if (!root) return;
    initOne(root);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
