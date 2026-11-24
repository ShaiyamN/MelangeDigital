/**
 * Keeps sitemap <lastmod> for code-built pages (home, services, about, ...) in
 * scripts/static-lastmod.json. Runs in `npm run build:full`.
 *
 * Each page gets a fingerprint of its own content: the page's source files
 * (followed through relative imports), the text data it uses (one service's
 * entry for /services/<slug>), and its title, description and JSON-LD. When the
 * fingerprint changes, that page's lastmod becomes today. Shared chrome
 * (Navbar/Footer in components/layout), utils, hooks and CSS are left out so
 * code-only or styling changes do not mark every page as updated.
 *
 *   node scripts/update-static-lastmod.mjs          update the JSON
 *   node scripts/update-static-lastmod.mjs --check  exit 1 if it is stale
 *
 * CMS pages (/blogs/*, /work/*) take lastmod from Firestore, not from here.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const SCRIPTS_DIR = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_DIR = path.resolve(SCRIPTS_DIR, "..");
const SRC_DIR = path.join(CLIENT_DIR, "src");
export const LASTMOD_FILE = path.join(SCRIPTS_DIR, "static-lastmod.json");
const SERVICES_DATA_FILE = path.join(SRC_DIR, "constants", "servicesData.js");

const PAGES = path.join(SRC_DIR, "components", "pages");
/** Route → page component that renders it (see <Routes> in src/App.jsx). */
const ENTRY_FOR_ROUTE = {
  "/": "Home/index.jsx",
  "/services": "Services/index.jsx",
  "/work": "Work/index.jsx",
  "/about": "About/index.jsx",
  "/contact": "Contact/index.jsx",
  "/careers": "Career/index.jsx",
  "/blogs": "Blogs.jsx",
  "/terms-of-service": "TermsofService.jsx",
  "/privacy-policy": "PrivatePolicy.jsx",
  "/cookie-policy": "Cookies.jsx",
  "/indian-outbound-tourism-report": "ReportLanding.jsx",
};
const SERVICE_DETAIL_ENTRY = "Services/ServiceDetail.jsx";

/** Not followed: shared chrome and plumbing that appears on (or serves) every page. */
const SKIP_DIRS = [
  path.join(SRC_DIR, "components", "layout"),
  path.join(SRC_DIR, "utils"),
  path.join(SRC_DIR, "hooks"),
  path.join(SRC_DIR, "assets"),
];
const SKIP_FILES = new Set([
  path.join(PAGES, "marketingShell.jsx"),
  path.join(SRC_DIR, "firebaseApp.js"),
  path.join(SRC_DIR, "firebaseDb.js"),
]);
/** Only text sources count; images/video are not followed. */
const CONTENT_FILE_RE = /\.(jsx?|mjs|json|html)$/;
const RESOLVE_EXTS = ["", ".jsx", ".js", ".mjs", ".json", "/index.jsx", "/index.js"];

const IMPORT_RE =
  /(?:import|export)\s[^'"`;]*?from\s*["']([^"']+)["']|import\s*\(\s*["']([^"']+)["']\s*\)|import\s+["']([^"']+)["']/g;

const rel = (file) => path.relative(CLIENT_DIR, file).split(path.sep).join("/");
const readText = (file) => fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");

function isSkipped(file) {
  if (SKIP_FILES.has(file)) return true;
  if (!CONTENT_FILE_RE.test(file)) return true;
  return SKIP_DIRS.some((dir) => file.startsWith(dir + path.sep));
}

function resolveImport(fromFile, spec) {
  if (!spec.startsWith(".")) return null; // packages
  const base = path.resolve(path.dirname(fromFile), spec.split("?")[0]);
  for (const ext of RESOLVE_EXTS) {
    const candidate = path.normalize(base + ext);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  return null;
}

/**
 * Files that make up a route's own content, plus inline data parts.
 * @returns {{ files: string[], parts: Record<string, string> }}
 */
export async function routeInputs(route) {
  const serviceSlug = route.startsWith("/services/") ? route.slice("/services/".length) : null;
  const entryRel = serviceSlug ? SERVICE_DETAIL_ENTRY : ENTRY_FOR_ROUTE[route];
  if (!entryRel) throw new Error(`update-static-lastmod: no page entry mapped for ${route}`);

  const files = new Set();
  const parts = {};
  const queue = [path.join(PAGES, entryRel)];
  const seen = new Set();
  while (queue.length) {
    const file = queue.pop();
    if (seen.has(file)) continue;
    seen.add(file);
    if (serviceSlug && file === SERVICES_DATA_FILE) {
      // Shared by all four service pages: only this service's entry counts.
      const { SERVICES_DATA, SERVICE_COLLAGE_TILES } = await import(
        pathToFileURL(SERVICES_DATA_FILE).href
      );
      if (!SERVICES_DATA[serviceSlug]) {
        throw new Error(`update-static-lastmod: ${serviceSlug} missing from servicesData.js`);
      }
      parts.serviceData = JSON.stringify({
        data: SERVICES_DATA[serviceSlug],
        collage: SERVICE_COLLAGE_TILES?.[serviceSlug] ?? null,
      });
      continue;
    }
    files.add(file);
    if (!/\.(jsx?|mjs)$/.test(file)) continue;
    const text = readText(file);
    for (const m of text.matchAll(IMPORT_RE)) {
      const target = resolveImport(file, m[1] || m[2] || m[3]);
      if (target && !isSkipped(target)) queue.push(target);
    }
  }

  // Title, description and JSON-LD as served (seo-head.cjs + page-schemas.cjs).
  const { resolveMeta } = require("./seo-head.cjs");
  const meta = resolveMeta(route, { routes: new Set([route]), byPath: {} });
  parts.seo = JSON.stringify({
    title: meta.title,
    description: meta.description,
    jsonLd: meta.jsonLdBlocks || null,
  });

  return { files: [...files].sort(), parts };
}

export async function fingerprint(route) {
  const { files, parts } = await routeInputs(route);
  const hash = crypto.createHash("sha256");
  for (const file of files) hash.update(`file:${rel(file)}\n${readText(file)}\n`);
  for (const key of Object.keys(parts).sort()) hash.update(`part:${key}\n${parts[key]}\n`);
  return hash.digest("hex");
}

/** Code-built routes in sitemap order (site-routes.mjs, minus CMS paths). */
export async function codeRoutes() {
  const { routes } = await import(pathToFileURL(path.join(SCRIPTS_DIR, "site-routes.mjs")).href);
  return routes.filter((r) => !r.startsWith("/work/") && !r.startsWith("/blogs/"));
}

function today() {
  if (process.env.STATIC_LASTMOD_TODAY) return process.env.STATIC_LASTMOD_TODAY;
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const COMMENT =
  "Generated by scripts/update-static-lastmod.mjs during build:full. Sitemap <lastmod> for code-built pages: when a page's content fingerprint changes, its lastmod becomes the build date. Commit this file with client/spa. Do not edit hashes by hand.";

export async function computeLastmods(previous = {}) {
  const pages = {};
  const changed = [];
  for (const route of await codeRoutes()) {
    const hash = await fingerprint(route);
    const prev = previous[route];
    if (prev && prev.hash === hash && prev.lastmod) {
      pages[route] = prev;
    } else if (prev && !prev.hash && prev.lastmod) {
      pages[route] = { lastmod: prev.lastmod, hash }; // seeded date, first fingerprint
    } else {
      pages[route] = { lastmod: today(), hash };
      changed.push(route);
    }
  }
  return { pages, changed };
}

async function main() {
  const check = process.argv.includes("--check");
  const existing = fs.existsSync(LASTMOD_FILE)
    ? JSON.parse(fs.readFileSync(LASTMOD_FILE, "utf8"))
    : {};
  const { pages, changed } = await computeLastmods(existing.pages || {});
  const next = `${JSON.stringify({ _comment: COMMENT, pages }, null, 2)}\n`;
  const current = fs.existsSync(LASTMOD_FILE) ? readText(LASTMOD_FILE) : "";

  if (check) {
    if (next !== current) {
      console.error(
        `static-lastmod: stale for ${changed.join(", ") || "fingerprints"}. Run npm run build:full and commit scripts/static-lastmod.json.`,
      );
      process.exit(1);
    }
    console.log("static-lastmod: up to date");
    return;
  }

  if (next !== current) fs.writeFileSync(LASTMOD_FILE, next);
  if (changed.length) {
    console.log(`static-lastmod: lastmod ${today()} for ${changed.join(", ")}`);
  } else {
    console.log("static-lastmod: no page content changes");
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
