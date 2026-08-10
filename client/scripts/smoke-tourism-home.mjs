/**
 * Smoke checks for tourism-as-home shell cutover.
 * Run with Vite up: node client/scripts/smoke-tourism-home.mjs
 */
import http from "http";

function get(path, redirects = true) {
  return new Promise((resolve, reject) => {
    const req = http.get(
      {
        hostname: "localhost",
        port: 5173,
        path,
        headers: { Accept: "*/*" },
      },
      (res) => {
        if (
          redirects &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          resolve({
            status: res.statusCode,
            location: res.headers.location,
            type: res.headers["content-type"] || "",
            len: 0,
          });
          res.resume();
          return;
        }
        let n = 0;
        res.on("data", (c) => {
          n += c.length;
        });
        res.on("end", () => {
          resolve({
            status: res.statusCode,
            location: res.headers.location || null,
            type: res.headers["content-type"] || "",
            len: n,
          });
        });
      },
    );
    req.on("error", reject);
  });
}

function assert(cond, msg) {
  if (!cond) {
    console.error("FAIL:", msg);
    process.exitCode = 1;
  } else {
    console.log("ok:", msg);
  }
}

const home = await get("/");
assert(home.status === 200, `/ → 200 (got ${home.status})`);
assert(/text\/html/.test(home.type), `/ is html`);

for (const path of [
  "/destination-marketing-agency",
  "/destination-marketing-agency/",
  "/destination-marketing",
  "/tourism",
]) {
  const r = await get(path);
  assert(r.status === 301 && r.location === "/", `${path} → 301 / (got ${r.status} ${r.location})`);
}

const css = await get("/destination-marketing-agency/css/melange.css");
assert(css.status === 200, `DMA css asset 200`);

const img = await get(
  "/destination-marketing-agency/images/figma/Naresh-Rawal-Profile-Pic.jpg",
);
assert(img.status === 200, `testimonial img asset 200 (got ${img.status})`);

const pdf = await get("/indian-outbound-tourism-report");
assert(pdf.status === 200 && /pdf/.test(pdf.type), `report PDF 200`);

if (!process.exitCode) console.log("smoke-tourism-home: all ok");
