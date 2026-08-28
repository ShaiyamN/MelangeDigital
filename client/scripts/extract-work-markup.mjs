import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLIENT = path.join(__dirname, "..");
const src = fs.readFileSync(
  path.join(CLIENT, "tourism-landing-staging", "work.html"),
  "utf8",
);
const m = src.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!m) throw new Error("no body");

let body = m[1]
  .replace(/<script\b[\s\S]*?<\/script>/gi, "")
  .replace(/<footer\b[\s\S]*?<\/footer>/i, "");
const BASE = "/destination-marketing-agency/";

body = body.replace(
  /\b(src|href|poster)=(["'])(?!https?:|\/\/|\/|#|mailto:|tel:|data:)([^"']+)\2/gi,
  (_, attr, q, url) => `${attr}=${q}${BASE}${url.replace(/^\.\//, "")}${q}`,
);

const outDir = path.join(CLIENT, "src", "components", "pages", "WorkTourism");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "markup.html"), `${body.trim()}\n`);
console.log("wrote", path.join(outDir, "markup.html"), Buffer.byteLength(body), "bytes");
