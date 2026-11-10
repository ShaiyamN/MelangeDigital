import React, { useEffect, useRef, useState } from "react";

// Diwali 2026 (Lakshmi Puja: 8 Nov). Effect shows only inside this window (IST).
const DIWALI_START = new Date("2026-10-28T00:00:00+05:30");
const DIWALI_END = new Date("2026-11-13T00:00:00+05:30");

// Geometry in mainLogo.png pixel space (774 x 192). Fan rays meet at APEX.
const VB_W = 774;
const VB_H = 192;
const APEX = { x: 181, y: 163 };
const LOGO_W = 176;
const SCALE = LOGO_W / VB_W; // css px per logo px

// Fireworks canvas area, in logo px (extends past the logo so bursts can spread).
const FW = { x: -60, y: -120, w: 960, h: 330 };

// Realistic fireworks: particles with drag + gravity, looping every T seconds.
const T = 4.8;
const RISE = 0.6;
const BURSTS = [
  { x: 60, y: 6, launch: 0, R: 74, n: 80, k: 2.3, grav: 34, life: 1.9, trail: 0.16,
    hot: "#FFE7A3", color: "#F5A00F", ember: "#C9471A", crackle: true, seed: 11 },
  { x: 330, y: -10, launch: 1.6, R: 82, n: 95, k: 2.0, grav: 30, life: 2.0, trail: 0.3,
    hot: "#FF9CCB", color: "#F2338A", ember: "#8E1A6C", crackle: false, seed: 23 },
  { x: 815, y: 0, launch: 3.2, R: 70, n: 70, k: 1.5, grav: 50, life: 2.8, trail: 0.55, willow: true,
    hot: "#FFE2A0", color: "#E8A23A", ember: "#A9530F", crackle: false, seed: 37 },
  { x: 205, y: -36, launch: 2.45, R: 46, n: 55, k: 2.6, grav: 30, life: 1.5, trail: 0.13,
    hot: "#D8B8FF", color: "#8B3DFF", ember: "#4B17A8", crackle: true, seed: 51 },
];

const isDiwaliSeason = () => {
  if (typeof window === "undefined") return false;
  if (navigator.webdriver) return false; // keep prerendered SEO HTML free of the seasonal effect
  const q = new URLSearchParams(window.location.search).get("diwali");
  if (q === "1") return true;
  if (q === "0") return false;
  const now = new Date();
  return now >= DIWALI_START && now < DIWALI_END;
};

const rng = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (a, b, q) => a.map((v, i) => v + (b[i] - v) * q);
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const rgba = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${clamp(a).toFixed(3)})`;

const prepareBursts = () =>
  BURSTS.map((b) => {
    const r = rng(b.seed);
    const parts = Array.from({ length: b.n }, () => {
      // uniform direction on a sphere, projected to 2D -> natural dense centre
      const z = r() * 2 - 1;
      const th = r() * Math.PI * 2;
      const rr = Math.sqrt(1 - z * z);
      const shell = r() < 0.86 ? 0.88 + r() * 0.12 : 0.45 + r() * 0.3;
      const sp = b.R * b.k * shell;
      return { vx: Math.cos(th) * rr * sp, vy: Math.sin(th) * rr * sp, life: b.life * (0.78 + r() * 0.3), size: 0.8 + r() * 0.5, ph: r() * 100 };
    });
    return { ...b, parts, startX: b.x + (r() - 0.5) * 20, hotC: hex(b.hot), colC: hex(b.color), embC: hex(b.ember) };
  });

const posAt = (b, p, a) => {
  const f = (1 - Math.exp(-b.k * a)) / b.k;
  return [b.x + p.vx * f, b.y + p.vy * f + (b.grav / b.k) * (a - f)];
};

// Soft round glow sprite per colour (cached).
const spriteCache = new Map();
const sprite = (c) => {
  const q = c.map((v) => Math.round(v / 16) * 16);
  const key = q.join(",");
  let cv = spriteCache.get(key);
  if (cv) return cv;
  cv = document.createElement("canvas");
  cv.width = cv.height = 32;
  const x = cv.getContext("2d");
  const gr = x.createRadialGradient(16, 16, 0, 16, 16, 16);
  gr.addColorStop(0, rgba(q, 1));
  gr.addColorStop(0.22, rgba(q, 0.85));
  gr.addColorStop(0.45, rgba(q, 0.2));
  gr.addColorStop(1, rgba(q, 0));
  x.fillStyle = gr;
  x.fillRect(0, 0, 32, 32);
  spriteCache.set(key, cv);
  return cv;
};

const HEAD = 1.15 / SCALE; // ~1.15 css px spark head
const LINE = 0.75 / SCALE; // ~0.75 css px trail

function drawBurst(g, b, t, tick) {
  const age = (((t - b.launch) % T) + T) % T;

  // rocket with glittering tail
  const rocketAt = (q) => {
    const e = 1 - Math.pow(1 - clamp(q), 2.2);
    return [b.startX + (b.x - b.startX) * e, b.y + 110 * (1 - e)];
  };
  if (age < RISE + 0.4) {
    const head = Math.min(age, RISE);
    for (let i = 0; i < 14; i++) {
      const e = head * (i / 14);
      const since = age - e;
      if (since > 0.4) continue;
      const [ex, ey] = rocketAt(e / RISE);
      const a = (1 - since / 0.4) * (0.5 + 0.5 * Math.random());
      const s = HEAD * 2.6;
      g.globalAlpha = a * 0.8;
      g.drawImage(sprite([240, 170, 60]), ex - s / 2, ey + 30 * since * since + 8 * since - s / 2, s, s);
    }
    if (age < RISE) {
      const [hx, hy] = rocketAt(age / RISE);
      const s = HEAD * 4.4;
      g.globalAlpha = 1;
      g.drawImage(sprite([255, 190, 80]), hx - s / 2, hy - s / 2, s, s);
    }
  }

  const a = age - RISE;
  if (a < 0) return;

  // brief flash
  if (a < 0.3) {
    const fr = (1 - a / 0.3) ** 2;
    const gr = g.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.R * 1.5);
    gr.addColorStop(0, rgba(b.hotC, 0.22 * fr));
    gr.addColorStop(1, rgba(b.colC, 0));
    g.globalAlpha = 1;
    g.fillStyle = gr;
    g.fillRect(b.x - b.R * 1.5, b.y - b.R * 1.5, b.R * 3, b.R * 3);
  }

  b.parts.forEach((p) => {
    if (a > p.life) return;
    const lq = a / p.life;
    let c = a < 0.2 ? mix(b.hotC, b.colC, a / 0.2) : mix(b.colC, b.embC, clamp((lq - 0.35) / 0.65));
    let bright = (lq < 0.6 ? 1 : 1 - Math.pow((lq - 0.6) / 0.4, 1.6)) * (0.85 + 0.15 * Math.sin(p.ph + a * 30));
    let crack = false;
    if (b.crackle && lq > 0.62) {
      crack = Math.random() > 0.5;
      if (!crack) return;
      bright = 1;
      c = mix([255, 215, 120], c, 0.35);
    }
    // motion trail
    const steps = b.willow ? 8 : 5;
    const tl = Math.min(b.trail, a);
    if (tl > 0.01 && !crack) {
      let [px, py] = posAt(b, p, a - tl);
      for (let s = 1; s <= steps; s++) {
        const [qx, qy] = posAt(b, p, a - tl + (tl * s) / steps);
        const w = s / steps;
        g.globalAlpha = bright * w * (b.willow ? 0.55 : 0.7);
        g.strokeStyle = rgba(b.willow ? mix(c, b.embC, 1 - w) : c, 1);
        g.lineWidth = LINE * p.size * (0.4 + 0.6 * w);
        g.beginPath();
        g.moveTo(px, py);
        g.lineTo(qx, qy);
        g.stroke();
        px = qx;
        py = qy;
      }
    }
    const [x, y] = posAt(b, p, a);
    const early = a < 0.14 ? 0.3 + 0.7 * (a / 0.14) : 1;
    const s = HEAD * 4.4 * p.size * (crack ? 0.75 : (1 - 0.35 * lq) * early);
    g.globalAlpha = clamp(bright);
    g.drawImage(sprite(c), x - s / 2, y - s / 2, s, s);
  });
  g.globalAlpha = 1;
}

const css = `
.dl-fx { position:absolute; left:0; top:0; width:${LOGO_W}px; height:${LOGO_W * (VB_H / VB_W)}px; pointer-events:none; }
.dl-fx svg { position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
.dl-fw { position:absolute; z-index:-1; pointer-events:none;
  left:${FW.x * SCALE}px; top:${FW.y * SCALE}px; width:${FW.w * SCALE}px; height:${FW.h * SCALE}px; }
.dl-glow { position:absolute; z-index:-1; left:${APEX.x * SCALE - 36}px; top:${(APEX.y - 70) * SCALE - 36}px;
  width:72px; height:72px; border-radius:50%;
  background:radial-gradient(circle, rgba(255,184,77,.45) 0%, rgba(255,138,61,.14) 42%, rgba(255,138,61,0) 70%);
  animation:dl-glow 3.2s ease-in-out infinite; }
.dl-flame { transform-box:fill-box; transform-origin:50% 100%; animation:dl-flicker 1.4s ease-in-out infinite; }
@keyframes dl-glow { 0%,100% { opacity:.55; transform:scale(.94); } 50% { opacity:1; transform:scale(1.04); } }
@keyframes dl-flicker {
  0%,100% { transform:scaleY(1) rotate(0deg); }
  25% { transform:scaleY(1.12) rotate(-3deg); }
  50% { transform:scaleY(.92) rotate(2deg); }
  75% { transform:scaleY(1.06) rotate(-1deg); }
}
@media (prefers-reduced-motion: reduce) {
  .dl-glow,.dl-flame { animation:none; }
  .dl-fw { display:none; }
}
`;

const DiwaliLogoFx = () => {
  const [active, setActive] = useState(false);
  const canvasRef = useRef(null);

  // Decide on the client only, so prerendered HTML and hydration always match.
  useEffect(() => {
    setActive(isDiwaliSeason());
  }, []);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!active || !cv) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(FW.w * SCALE * dpr);
    cv.height = Math.round(FW.h * SCALE * dpr);
    const g = cv.getContext("2d");
    const bursts = prepareBursts();
    const t0 = performance.now();
    let raf = 0;
    let tick = 0;

    const frame = (now) => {
      const t = ((now - t0) / 1000) % T;
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, cv.width, cv.height);
      g.setTransform(SCALE * dpr, 0, 0, SCALE * dpr, -FW.x * SCALE * dpr, -FW.y * SCALE * dpr);
      g.lineCap = "round";
      for (const b of bursts) drawBurst(g, b, t, tick);
      tick += 1;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  if (!active) return null;

  return (
    <>
      <style>{css}</style>
      <span className="dl-glow" aria-hidden="true" />
      <canvas ref={canvasRef} className="dl-fw" aria-hidden="true" />
      <span className="dl-fx" aria-hidden="true">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="none">
          <defs>
            <filter id="dl-blur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="dl-flame-g" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#FF6A1A" />
              <stop offset=".55" stopColor="#FFB03A" />
              <stop offset="1" stopColor="#FFF1B8" />
            </linearGradient>
            <linearGradient id="dl-bowl-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F08A2C" />
              <stop offset="1" stopColor="#B4450F" />
            </linearGradient>
          </defs>

          {/* Diya where the rays meet */}
          <g transform={`translate(${APEX.x} ${APEX.y + 4})`}>
            <path className="dl-flame" d="M0 -40 C9 -22 13 -10 0 0 C-13 -10 -9 -22 0 -40 Z" fill="url(#dl-flame-g)" filter="url(#dl-blur)" />
            <path d="M-40 1 Q0 6 40 1 Q30 25 0 25 Q-30 25 -40 1 Z" fill="url(#dl-bowl-g)" />
            <path d="M-40 1 Q0 6 40 1" fill="none" stroke="#FFD27A" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </span>
    </>
  );
};

export default DiwaliLogoFx;
