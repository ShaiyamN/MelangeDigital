/**
 * Sanity check for tourism nav scroll-spy ranges.
 * Run: node client/scripts/check-nav-spy.mjs
 */
function activeHashFromScroll(entries, probe, slack) {
  let nearest = null;
  let nearestDist = Infinity;
  for (const e of entries) {
    if (e.top > probe && e.top <= probe + slack && e.top - probe < nearestDist) {
      nearestDist = e.top - probe;
      nearest = e.hash;
    }
  }
  if (nearest) return nearest;

  let bestPassed = null;
  for (let i = 0; i < entries.length; i++) {
    const top = entries[i].top;
    const nextTop = i + 1 < entries.length ? entries[i + 1].top : Infinity;
    if (top <= probe && nextTop > probe) return entries[i].hash;
    if (top <= probe) bestPassed = entries[i].hash;
  }
  return bestPassed;
}

const probe = 80;
const slack = 220;
const fail = (msg) => {
  console.error("FAIL:", msg);
  process.exitCode = 1;
};

// Reports on screen, #pricing top just below sticky line (the bug screenshot)
if (
  activeHashFromScroll(
    [
      { hash: "#work", top: -2400 },
      { hash: "#services", top: -900 },
      { hash: "#pricing", top: 140 },
      { hash: "#award", top: 900 },
    ],
    probe,
    slack
  ) !== "#pricing"
)
  fail("upcoming Reports heading must light Reports");

// Mid #pricing
if (
  activeHashFromScroll(
    [
      { hash: "#work", top: -3000 },
      { hash: "#services", top: -1500 },
      { hash: "#pricing", top: -40 },
      { hash: "#award", top: 600 },
    ],
    probe,
    slack
  ) !== "#pricing"
)
  fail("inside Reports range must light Reports");

// Infra between services and reports — still Services
if (
  activeHashFromScroll(
    [
      { hash: "#work", top: -2000 },
      { hash: "#services", top: -400 },
      { hash: "#pricing", top: 500 },
      { hash: "#award", top: 1200 },
    ],
    probe,
    slack
  ) !== "#services"
)
  fail("between Services and Reports stays Services");

if (!process.exitCode) console.log("check-nav-spy: ok");
