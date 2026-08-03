/** Fails if homepage hero/video assets are too heavy for LCP. */
const fs = require("fs");
const path = require("path");

const video = path.join(__dirname, "..", "src", "assets", "video");
const limits = {
  "mobileBanner.webp": 1.5 * 1024 * 1024,
  "final.webp": 2.5 * 1024 * 1024,
  "melangeBanner.mp4": 3.5 * 1024 * 1024,
};

let bad = 0;
for (const [file, max] of Object.entries(limits)) {
  const p = path.join(video, file);
  if (!fs.existsSync(p)) {
    console.error(`missing ${file}`);
    bad++;
    continue;
  }
  const n = fs.statSync(p).size;
  const ok = n <= max;
  console.log(`${ok ? "ok" : "FAIL"} ${file}: ${(n / 1024 / 1024).toFixed(2)} MB (max ${(max / 1024 / 1024).toFixed(1)})`);
  if (!ok) bad++;
}
process.exit(bad ? 1 : 0);
