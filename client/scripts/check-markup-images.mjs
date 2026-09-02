import fs from "fs";
import path from "path";

const root = path.resolve(".");
const pub = path.join(root, "public");
const markups = [
  "src/components/pages/Home/markup.html",
  "src/components/pages/About/markup.html",
  "src/components/pages/Services/markup.html",
  "src/components/pages/Work/markup.html",
];

const refs = new Set();
for (const f of markups) {
  const t = fs.readFileSync(path.join(root, f), "utf8");
  for (const m of t.matchAll(/\/destination-marketing-agency\/[^"'`\s>]+\.(?:png|jpe?g|webp|svg|avif|gif)/gi)) {
    refs.add(m[0].split("?")[0]);
  }
}

const missing = [];
for (const r of [...refs].sort()) {
  if (!fs.existsSync(path.join(pub, r.slice(1)))) missing.push(r);
}
console.log(`Markup refs: ${refs.size}, missing: ${missing.length}`);
missing.forEach((x) => console.log(x));
