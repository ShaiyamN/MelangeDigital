/* --- Network image sphere (vanilla port of SphereImageGrid) ---
   Tourism page is static HTML — not React/shadcn/Tailwind — so this ports the
   interactive Fibonacci sphere here. Uses 10 distinct local images, repeated to
   fill the sphere such that no two identical sources sit next to each other. */
(function initNetworkSphere() {
  "use strict";

  /* Creator photos — URL-safe copies under images/creators/ */
  var UNIQUE_IMAGES = [
    { src: "/destination-marketing-agency/images/creators/hk-1.png", alt: "Creator — Hong Kong 1", title: "Hong Kong 1" },
    { src: "/destination-marketing-agency/images/creators/hk-2.png", alt: "Creator — Hong Kong 2", title: "Hong Kong 2" },
    { src: "/destination-marketing-agency/images/creators/hk-3.png", alt: "Creator — Hong Kong 3", title: "Hong Kong 3" },
    { src: "/destination-marketing-agency/images/creators/hk-4.png", alt: "Creator — Hong Kong 4", title: "Hong Kong 4" },
    { src: "/destination-marketing-agency/images/creators/ites-1.png", alt: "Creator — ITES 1", title: "ITES 1" },
    { src: "/destination-marketing-agency/images/creators/ites-2.png", alt: "Creator — ITES 2", title: "ITES 2" },
    { src: "/destination-marketing-agency/images/creators/ites-3.png", alt: "Creator — ITES 3", title: "ITES 3" },
    { src: "/destination-marketing-agency/images/creators/ites-5.png", alt: "Creator — ITES 5", title: "ITES 5" },
    { src: "/destination-marketing-agency/images/creators/ites-6.png", alt: "Creator — ITES 6", title: "ITES 6" },
    { src: "/destination-marketing-agency/images/creators/ites-7.png", alt: "Creator — ITES 7", title: "ITES 7" },
    { src: "/destination-marketing-agency/images/creators/ites-8.png", alt: "Creator — ITES 8", title: "ITES 8" },
    { src: "/destination-marketing-agency/images/creators/ites-9.png", alt: "Creator — ITES 9", title: "ITES 9" },
    { src: "/destination-marketing-agency/images/creators/ites-10.png", alt: "Creator — ITES 10", title: "ITES 10" },
    { src: "/destination-marketing-agency/images/creators/ites-11.png", alt: "Creator — ITES 11", title: "ITES 11" },
    { src: "/destination-marketing-agency/images/creators/ites-12.png", alt: "Creator — ITES 12", title: "ITES 12" },
    { src: "/destination-marketing-agency/images/creators/ites-13.png", alt: "Creator — ITES 13", title: "ITES 13" },
    { src: "/destination-marketing-agency/images/creators/ites-14.png", alt: "Creator — ITES 14", title: "ITES 14" },
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
    var isAbout = !!(wrap && wrap.closest && wrap.closest(".about-voices"));
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var images = buildImageList(UNIQUE_IMAGES, SPHERE_COUNT);

    var config = {
      dragSensitivity: 0.8,
      momentumDecay: 0.96,
      maxRotationSpeed: 6,
      baseImageScale: isAbout ? 0.33 : 0.28,
      hoverScale: 1.22,
      autoRotate: !reduceMotion,
      autoRotateSpeed: 0.32, /* keep gentle orbit so depth reads at rest */
      fadeBack: isAbout ? 0.38 : 0.55,
      liveOpacity: isAbout ? 0.1 : 0.03,
    };

    /* About: face the viewer; Home: slight yaw for motion read */
    var rotation = isAbout ? { x: 10, y: 18, z: 0 } : { x: 8, y: -22, z: 0 };
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
      if ((!w || !h) && wrap && wrap.getBoundingClientRect) {
        var rect = wrap.getBoundingClientRect();
        if (!w) w = rect.width;
        if (!h) h = rect.height;
      }
      if (w < 120) w = Math.max(280, Math.min(window.innerWidth - 48, 640));
      if (h < 80) h = w;
      return { w: w, h: h, short: Math.min(w, h) };
    }

    function sphereRadiusFor(d) {
      if (isAbout) return d.short * 0.5;
      return d.short * (d.short < 420 ? 0.42 : 0.5);
    }

    function rebuildNodes() {
      stage.innerHTML = "";
      nodes = [];
      var d = dims();
      var sphereRadius = sphereRadiusFor(d);
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
      var sphereRadius = sphereRadiusFor(d);
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

        /* Soft back fade — About hides rear hemisphere sooner for a cleaner read */
        var fadeZoneStart = sphereRadius * 0.02;
        var fadeZoneEnd = -sphereRadius * config.fadeBack;
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
        var isLive = opacity > config.liveOpacity;
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

  window.__initAboutNetworkSphere = function (root) {
    if (!root || root.getAttribute("data-sphere-ready")) return;
    root.setAttribute("data-sphere-ready", "1");
    initOne(root);
  };
})();