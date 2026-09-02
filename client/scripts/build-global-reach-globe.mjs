import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { geoOrthographic, geoPath as d3GeoPath } from "d3-geo";
import { feature } from "topojson-client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLIENT = path.join(__dirname, "..");
const MARKETING = path.join(CLIENT, "public/destination-marketing-agency");
const OUT_SVG = path.join(MARKETING, "images/global/world-map-globe.svg");
const HOME_MARKUP = path.join(CLIENT, "src/components/pages/Home/markup.html");
const CACHE = "20260815n";
const OCEAN = "#E8E7EC";
const LAND = "#FFFFFF";
const INDIA_FILL = "#5B21B6";
const INDIA_SCALE = 1.3;
const HUB_LL = [78.9, 20.6];
const PLACES = [
  { name: "UNITED KINGDOM", lon: -3.4, lat: 55.4, side: "left" },
  { name: "PORTUGAL", lon: -8.2, lat: 39.5, side: "left" },
  { name: "UNITED ARAB EMIRATES", lon: 54.4, lat: 24.5, side: "left" },
  { name: "ZAMBIA", lon: 27.8, lat: -13.1, side: "left" },
  { name: "SINGAPORE", lon: 103.8, lat: 1.35, side: "right" },
];
// rotate is locked (India-facing). Scale is the globe radius in px; viewport is a crop window inside that sphere.
const ROTATE = [-78.9, -20.6, 0];
const SCALE = 1000;
const VW = 1840;
const PAD_TOP = 56;
const PAD_BOTTOM = 44;
const probe = geoOrthographic().rotate(ROTATE).scale(SCALE).translate([VW / 2, 0]).clipAngle(90);
const pinYs = [HUB_LL, ...PLACES.map((d) => [d.lon, d.lat])].map((ll) => {
  const xy = probe(ll);
  if (!xy) throw new Error(`unprojectable ${ll}`);
  return xy[1];
});
const ty = PAD_TOP - Math.min(...pinYs);
const VH = Math.ceil(Math.max(...pinYs) + ty + PAD_BOTTOM);
const PARAMS = { rotate: ROTATE, scale: SCALE, translate: [VW / 2, ty] };
const limb = { top: ty - SCALE, left: VW / 2 - SCALE, right: VW / 2 + SCALE, bottom: ty + SCALE };
if (limb.top >= 0 || limb.left >= 0 || limb.right <= VW || limb.bottom <= VH) {
  throw new Error(`globe limb still in view ${JSON.stringify({ limb, VW, VH })}`);
}

const landTopo = JSON.parse(readFileSync(path.join(CLIENT, "node_modules/world-atlas/land-50m.json"), "utf8"));
const landFeat = feature(landTopo, landTopo.objects.land);
const countriesTopo = JSON.parse(
  readFileSync(path.join(CLIENT, "node_modules/world-atlas/countries-10m.json"), "utf8"),
);
const india = feature(countriesTopo, countriesTopo.objects.countries).features.find((f) => +f.id === 356);
if (!india) throw new Error("India (356) missing from world-atlas");

const projection = geoOrthographic()
  .rotate(PARAMS.rotate)
  .scale(PARAMS.scale)
  .translate(PARAMS.translate)
  .clipAngle(90)
  .clipExtent([
    [0, 0],
    [VW, VH],
  ]);

function inView(p, pad = 32) {
  return p && p[0] >= pad && p[0] <= VW - pad && p[1] >= pad && p[1] <= VH - pad;
}

const geoPath = d3GeoPath(projection);
const hub = projection(HUB_LL);
const pins = PLACES.map((d) => {
  const xy = projection([d.lon, d.lat]);
  if (!inView(xy)) throw new Error(`${d.name} outside viewport ${xy}`);
  return { ...d, xy };
});
if (!inView(hub)) throw new Error(`hub outside viewport ${hub}`);
const [icx, icy] = geoPath.centroid(india);
const sphereD = geoPath({ type: "Sphere" });
const landD = geoPath(landFeat);
const indiaD = geoPath(india);
if (!sphereD || !landD || !indiaD) throw new Error("empty path");
if (!Number.isFinite(icx) || !Number.isFinite(icy)) throw new Error("india centroid");

function quad(from, to, { lift = 0, pull = 0 }) {
  const mx = (from[0] + to[0]) / 2 + pull;
  const my = (from[1] + to[1]) / 2 + lift;
  return `M${from[0].toFixed(1)} ${from[1].toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${to[0].toFixed(1)} ${to[1].toFixed(1)}`;
}

const [uk, pt, uae, zm, sg] = pins.map((p) => p.xy);
const k = SCALE / 360;
const routes = [
  quad(uk, hub, { lift: -70 * k }),
  quad(pt, hub, { lift: -28 * k }),
  quad(uae, hub, { lift: -10 * k }),
  quad(zm, hub, { lift: -24 * k, pull: 12 * k }),
  quad(sg, hub, { lift: 20 * k, pull: 8 * k }),
];

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VW} ${VH}" width="${VW}" height="${VH}">
  <path fill="${OCEAN}" d="${sphereD}"/>
  <path fill="${LAND}" d="${landD}"/>
  <path fill="${INDIA_FILL}" transform="translate(${icx.toFixed(1)} ${icy.toFixed(1)}) scale(${INDIA_SCALE}) translate(${(-icx).toFixed(1)} ${(-icy).toFixed(1)})" d="${indiaD}"/>
</svg>
`;
writeFileSync(OUT_SVG, svg);

const pinSvg = `<svg viewBox="0 0 18 24" aria-hidden="true"><path fill="#3D1578" fill-rule="evenodd" d="M9 1.6c-3.8 0-7 2.8-7 6.8 0 4.8 7 13.8 7 13.8s7-9 7-13.8c0-4-3.2-6.8-7-6.8zm0 9.2a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8z"/></svg>`;
const pinHtml = pins
  .map((p) => {
    const [x, y] = p.xy;
    return `       <div class="gr-pin gr-pin--${p.side}" style="left:${((x / VW) * 100).toFixed(2)}%;top:${((y / VH) * 100).toFixed(2)}%">${pinSvg}<span>${p.name}</span></div>`;
  })
  .join("\n");
const figure = `      <figure class="global-reach-visual">
       <img class="global-reach-map" alt="Melange offices in India, United Kingdom, Portugal, United Arab Emirates, Singapore, and Zambia" loading="lazy" width="${VW}" height="${VH}" src="images/global/world-map-globe.svg?v=${CACHE}"/>
       <svg class="global-reach-routes" viewBox="0 0 ${VW} ${VH}" aria-hidden="true">
        <g fill="none" stroke="rgba(120,70,190,0.55)" stroke-width="1.2" stroke-dasharray="4 5" stroke-linecap="round">
${routes.map((d) => `         <path d="${d}"/>`).join("\n")}
        </g>
       </svg>
${pinHtml}
      </figure>`;

const html = readFileSync(HOME_MARKUP, "utf8");
const next = html.replace(/<figure class="global-reach-visual">[\s\S]*?<\/figure>/, figure);
if (next === html) throw new Error("global-reach figure not found in index.html");
writeFileSync(HOME_MARKUP, next);

console.log("saved", OUT_SVG);
console.log("params", JSON.stringify(PARAMS));
console.log(`hub ${hub[0].toFixed(1)},${hub[1].toFixed(1)}`);
for (const p of pins) {
  const [x, y] = p.xy;
  console.log(`${p.name} ${x.toFixed(1)},${y.toFixed(1)}  ${((x / VW) * 100).toFixed(2)}% ${((y / VH) * 100).toFixed(2)}%`);
}
console.log("viewport", { VW, VH, aspect: +(VW / VH).toFixed(3) }, "limb", limb);
