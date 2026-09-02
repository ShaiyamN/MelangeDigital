#!/usr/bin/env node
/**
 * Find unused static/Vite assets under client/public and client/src/assets.
 * Default: dry-run report. --delete removes flagged paths (use with care).
 *
 * Usage:
 *   node scripts/find-unused-assets.cjs
 *   node scripts/find-unused-assets.cjs --delete --only=duplicates
 *   node scripts/find-unused-assets.cjs --delete --from-report --root=destination-marketing-agency
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const REPORT_PATH = path.join(__dirname, "unused-assets-report.json");

const ASSET_ROOTS = [
  { id: "destination-marketing-agency", rel: "public/destination-marketing-agency", urlPrefix: "/destination-marketing-agency/" },
  { id: "influencer_marketing", rel: "public/influencer_marketing", urlPrefix: "/influencer_marketing/" },
  { id: "src-assets", rel: "src/assets", urlPrefix: null },
  { id: "videos", rel: "public/videos", urlPrefix: "/videos/" },
  { id: "about", rel: "public/about", urlPrefix: "/about/" },
  { id: "public-assets", rel: "public/assets", urlPrefix: "/assets/" },
];

const DENYLIST = new Set([
  "public/favicon.ico",
  "public/favicon.png",
  "public/logo.png",
  "public/hero_banner.jpg",
  "public/destination-marketing-agency/images/figma/hero_banner.jpg",
  "public/assets/reports/The Indian Outbound Inspiration report 2026.pdf",
  "src/assets/images/Bpost1.png",
  "src/assets/images/mainLogo.png",
  "src/assets/images/displaylogo.png",
]);

const DUPLICATE_PREFIXES = [
  "public/destination-marketing-agency/images/images/",
  "public/destination-marketing-agency/css/css/",
  "public/destination-marketing-agency/js/js/",
];

const SCAN_DIRS = [
  path.join(ROOT, "src"),
  path.join(ROOT, "public"),
  path.join(ROOT, "index.html"),
  path.join(ROOT, "server.cjs"),
  path.join(ROOT, "vite.config.js"),
];

const SKIP_SCAN = new Set([
  "scripts/unused-assets-report.json",
  "dist",
]);

const TEXT_EXT = /\.(jsx?|tsx?|html?|css|json|mjs|cjs|svg|md)$/i;
const ASSET_EXT = /\.(png|jpe?g|gif|webp|svg|ico|mp4|mov|webm|pdf|woff2?|ttf|eot|mp3|wav|json|heic)$/i;

function walkFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  const st = fs.statSync(dir);
  if (st.isFile()) {
    out.push(dir);
    return out;
  }
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkFiles(p, out);
    else out.push(p);
  }
  return out;
}

function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join("/");
}

function normSlashes(s) {
  return s.replace(/\\/g, "/");
}

function stripQueryHash(s) {
  return s.split("#")[0].split("?")[0];
}

function isExternal(u) {
  return /^(https?:|data:|mailto:|tel:|\/\/)/i.test(u);
}

function addRef(refs, raw) {
  if (!raw || typeof raw !== "string") return;
  const u = stripQueryHash(raw.trim());
  if (!u || isExternal(u) || u.startsWith("#")) return;
  refs.add(u);
}

function resolveImport(fromFile, spec) {
  spec = stripQueryHash(spec);
  if (spec.startsWith("@/")) return normSlashes(path.join("src", spec.slice(2)));
  if (spec.startsWith("/")) return normSlashes(spec.slice(1));
  const abs = path.resolve(path.dirname(fromFile), spec);
  let r = normSlashes(path.relative(ROOT, abs));
  if (!path.extname(r)) {
    for (const ext of [".js", ".jsx", ".ts", ".tsx"]) {
      if (fs.existsSync(path.join(ROOT, r + ext))) return r + ext;
    }
    if (fs.existsSync(path.join(ROOT, r, "index.js"))) return r + "/index.js";
  }
  return r;
}

function refToDisk(ref) {
  const r = normSlashes(stripQueryHash(ref));
  if (r.startsWith("src/") || r.startsWith("public/")) return r;
  if (r.startsWith("/")) return urlToDisk(r);
  // relative paths from src/ (e.g. index.css url("assets/video/foo.gif"))
  const srcCandidate = "src/" + r;
  if (r.startsWith("assets/") && fs.existsSync(path.join(ROOT, srcCandidate))) {
    return srcCandidate;
  }
  return urlToDisk("/" + r);
}

function urlToDisk(u) {
  u = stripQueryHash(u);
  if (u.startsWith("/")) u = u.slice(1);
  u = normSlashes(u);
  for (const root of ASSET_ROOTS) {
    if (root.urlPrefix && u.startsWith(root.urlPrefix.slice(1))) {
      return normSlashes(path.join(root.rel, u.slice(root.urlPrefix.length - 1)));
    }
  }
  if (u.startsWith("src/assets/")) return u;
  if (u.startsWith("public/")) return u;
  if (u.startsWith("videos/")) return "public/" + u;
  if (u.startsWith("about/")) return "public/" + u;
  if (u.startsWith("assets/")) return "public/" + u;
  if (u.startsWith("destination-marketing-agency/")) return "public/" + u;
  if (u.startsWith("influencer_marketing/")) return "public/" + u;
  return u;
}

function collectAssetFiles() {
  const files = [];
  for (const root of ASSET_ROOTS) {
    const abs = path.join(ROOT, root.rel);
    if (!fs.existsSync(abs)) continue;
    for (const f of walkFiles(abs)) {
      if (!fs.statSync(f).isFile()) continue;
      if (path.basename(f) === "index.js") continue;
      files.push({ abs: f, rel: rel(f), root: root.id });
    }
  }
  return files;
}

function parseBarrelMap(barrelPath) {
  const text = fs.readFileSync(barrelPath, "utf8");
  const map = new Map();
  for (const m of text.matchAll(/import\s+(\w+)\s+from\s+['"](\.\/[^'"]+)['"]/g)) {
    map.set(m[1], resolveImport(barrelPath, m[2]));
  }
  return map;
}

function traceUsedSrcAssets() {
  const used = new Set();
  const barrels = walkFiles(path.join(ROOT, "src/assets")).filter(
    (f) => path.basename(f) === "index.js",
  );
  const barrelMaps = new Map();
  for (const b of barrels) {
    barrelMaps.set(b, parseBarrelMap(b));
  }

  const srcFiles = walkFiles(path.join(ROOT, "src")).filter((f) =>
    /\.(jsx?|tsx?)$/.test(f),
  );

  for (const file of srcFiles) {
    const text = fs.readFileSync(file, "utf8");

    for (const m of text.matchAll(/import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g)) {
      const names = m[1].split(",").map((s) => s.trim().split(/\s+as\s+/)[0].trim());
      const resolved = resolveImport(file, m[2]);
      let barrelPath = path.join(ROOT, resolved);
      if (!fs.existsSync(barrelPath) && fs.existsSync(barrelPath.replace(/\.js$/, "") + "/index.js")) {
        barrelPath = barrelPath.replace(/\.js$/, "") + "/index.js";
      }
      const bmap = barrelMaps.get(barrelPath);
      if (bmap) {
        for (const n of names) {
          if (n && bmap.has(n)) used.add(bmap.get(n));
        }
      }
    }

    for (const m of text.matchAll(/import\s+\*\s+as\s+\w+\s+from\s+['"]([^'"]+)['"]/g)) {
      const resolved = resolveImport(file, m[1]);
      let barrelPath = path.join(ROOT, resolved);
      if (!fs.existsSync(barrelPath) && fs.existsSync(path.join(ROOT, resolved, "index.js"))) {
        barrelPath = path.join(ROOT, resolved, "index.js");
      }
      const bmap = barrelMaps.get(barrelPath);
      if (bmap) for (const p of bmap.values()) used.add(p);
    }

    for (const m of text.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
      const spec = m[1];
      const resolved = resolveImport(file, spec);
      if (resolved.startsWith("src/assets/") && ASSET_EXT.test(resolved)) {
        used.add(resolved);
      }
    }
  }

  return { used, barrelMaps };
}

function extractRefsFromText(text, fromFile) {
  const found = new Set();

  for (const m of text.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) {
    addRef(found, m[1]);
  }

  for (const m of text.matchAll(/(?:src|href|poster|data-src|content)\s*=\s*['"]([^'"]+)['"]/gi)) {
    addRef(found, m[1]);
  }

  for (const m of text.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
    const spec = m[1];
    if (ASSET_EXT.test(spec) || spec.includes("/assets/")) {
      addRef(found, resolveImport(fromFile, spec));
    }
  }

  for (const m of text.matchAll(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/g)) {
    addRef(found, resolveImport(fromFile, m[1]));
  }

  for (const m of text.matchAll(
    /['"](\/(?:destination-marketing-agency|influencer_marketing|videos|about)\/[^'"]+)['"]/g,
  )) {
    addRef(found, m[1]);
  }

  for (const m of text.matchAll(/['"](\/[^'"]+\.(?:png|jpe?g|gif|webp|svg|ico|mp4|mov|webm|pdf))['"]/gi)) {
    addRef(found, m[1]);
  }

  for (const m of text.matchAll(/\$\{ASSET\}\/([^`'"]+)/g)) {
    addRef(found, `/destination-marketing-agency/${m[1]}`);
  }

  // redirects / vite config report PDF path
  if (/redirects|vite\.config|\.htaccess/i.test(fromFile)) {
    for (const m of text.matchAll(/\/assets\/reports\/[^\s'"]+/g)) {
      addRef(found, decodeURIComponent(m[0]));
    }
  }

  return found;
}

function buildReferenceCorpus() {
  const rawRefs = new Set();
  const diskRefs = new Set();

  const scanPaths = [];
  for (const d of SCAN_DIRS) {
    if (!fs.existsSync(d)) continue;
    if (fs.statSync(d).isDirectory()) scanPaths.push(...walkFiles(d));
    else scanPaths.push(d);
  }

  for (const file of scanPaths) {
    const r = rel(file);
    if (SKIP_SCAN.has(r) || r.startsWith("dist/")) continue;
    if (!TEXT_EXT.test(r) && !r.endsWith(".html")) continue;
    let text;
    try {
      text = fs.readFileSync(file, "utf8");
    } catch {
      continue;
    }
    for (const ref of extractRefsFromText(text, file)) {
      rawRefs.add(ref);
      diskRefs.add(refToDisk(ref.startsWith("/") || ref.startsWith("src/") || ref.startsWith("public/") ? ref : ref));
    }
  }

  const { used: srcUsed } = traceUsedSrcAssets();
  for (const p of srcUsed) diskRefs.add(p);

  const basenames = new Set();
  const suffixes = new Set();
  for (const d of diskRefs) {
    if (d.startsWith("src/assets/")) continue;
    basenames.add(path.basename(d).toLowerCase());
    suffixes.add(d.toLowerCase());
    const parts = d.split("/");
    for (let i = 1; i < parts.length; i++) {
      suffixes.add(parts.slice(i).join("/").toLowerCase());
    }
  }

  return { rawRefs, diskRefs, basenames, suffixes, srcUsed };
}

function fileIsReferenced(assetRel, corpus) {
  const r = normSlashes(assetRel);
  if (DENYLIST.has(r)) return { used: true, reason: "denylist" };
  if (DUPLICATE_PREFIXES.some((p) => r.startsWith(p))) return { used: false, reason: "duplicate-tree" };

  if (r.startsWith("src/assets/")) {
    if (corpus.srcUsed.has(r)) return { used: true, reason: "src-import" };
    if (corpus.diskRefs.has(r)) return { used: true, reason: "src-ref" };
    for (const d of [...corpus.srcUsed, ...corpus.diskRefs]) {
      if (d.toLowerCase() === r.toLowerCase()) return { used: true, reason: "src-ref-ci" };
    }
    return { used: false, reason: "unused" };
  }

  if (corpus.diskRefs.has(r)) return { used: true, reason: "direct" };
  for (const d of corpus.diskRefs) {
    if (d.toLowerCase() === r.toLowerCase()) return { used: true, reason: "case-insensitive" };
  }

  const suffix = r.includes("/") ? r.split("/").slice(1).join("/").toLowerCase() : r.toLowerCase();
  if (corpus.suffixes.has(suffix)) return { used: true, reason: "suffix" };

  const base = path.basename(r).toLowerCase();
  if (corpus.basenames.has(base)) {
    return { used: false, reason: "review-basename-collision", review: true };
  }

  return { used: false, reason: "unused" };
}

function findBrokenReferences(corpus) {
  const broken = [];
  const seen = new Set();
  const add = (ref) => {
    if (seen.has(ref)) return;
    seen.add(ref);
    const disk = urlToDisk(ref.startsWith("/") ? ref : "/" + ref);
    const candidates = [
      path.join(ROOT, disk),
      path.join(ROOT, "public", disk.replace(/^public\//, "")),
    ];
    if (candidates.some((c) => fs.existsSync(c))) return;
    if (!/\.(png|jpe?g|gif|webp|svg|ico|mp4|mov|webm|pdf)$/i.test(ref)) return;
    broken.push({ ref, disk });
  };

  for (const ref of corpus.rawRefs) {
    if (isExternal(ref)) continue;
    if (ref.startsWith("src/") || ref.startsWith("public/")) continue;
    if (ref.startsWith("/assets/") && !ref.includes("/reports/")) continue;
    add(ref.startsWith("/") ? ref : "/" + ref);
  }

  for (const known of [
    "/destination-marketing-agency/videos/hero-video.mp4",
    "/favicon-away.ico",
  ]) {
    add(known);
  }

  return broken;
}

function formatBytes(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(2) + " GB";
  if (n >= 1e6) return (n / 1e6).toFixed(2) + " MB";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + " KB";
  return n + " B";
}

function main() {
  const args = process.argv.slice(2);
  const doDelete = args.includes("--delete");
  const onlyDuplicates = args.includes("--only=duplicates");
  const fromReport = args.includes("--from-report");
  const rootFilter = args.find((a) => a.startsWith("--root="))?.slice(7);

  console.log("Scanning asset roots...");
  const assetFiles = collectAssetFiles();
  console.log(`Found ${assetFiles.length} asset files`);

  console.log("Building reference corpus...");
  const corpus = buildReferenceCorpus();
  console.log(`Reference corpus: ${corpus.diskRefs.size} disk paths, ${corpus.srcUsed.size} src/assets used`);

  const unused = [];
  const review = [];
  const duplicates = [];

  for (const asset of assetFiles) {
    const st = fs.statSync(asset.abs);
    const status = fileIsReferenced(asset.rel, corpus);
    const entry = { path: asset.rel, sizeBytes: st.size, root: asset.root, reason: status.reason };
    if (DUPLICATE_PREFIXES.some((p) => asset.rel.startsWith(p))) {
      duplicates.push(entry);
      continue;
    }
    if (status.review) review.push(entry);
    else if (!status.used) unused.push(entry);
  }

  unused.sort((a, b) => b.sizeBytes - a.sizeBytes);
  review.sort((a, b) => b.sizeBytes - a.sizeBytes);

  const broken = findBrokenReferences(corpus);
  const sum = (arr) => arr.reduce((s, x) => s + x.sizeBytes, 0);
  const byRoot = (arr) => {
    const m = {};
    for (const x of arr) m[x.root] = (m[x.root] || 0) + x.sizeBytes;
    return m;
  };

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      assetFiles: assetFiles.length,
      unused: unused.length,
      unusedBytes: sum(unused),
      review: review.length,
      reviewBytes: sum(review),
      duplicates: duplicates.length,
      duplicatesBytes: sum(duplicates),
    },
    brokenReferences: broken,
    unused,
    review,
    duplicates,
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  console.log("\n=== Unused Asset Report ===");
  console.log(`Unused: ${unused.length} files (${formatBytes(sum(unused))})`);
  console.log(`Review: ${review.length} files (${formatBytes(sum(review))})`);
  console.log(`Duplicates: ${duplicates.length} files (${formatBytes(sum(duplicates))})`);
  for (const [root, bytes] of Object.entries(byRoot(unused)).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${root}: ${formatBytes(bytes)}`);
  }
  console.log("\nTop 10 largest unused:");
  for (const u of unused.slice(0, 10)) {
    console.log(`  ${formatBytes(u.sizeBytes).padStart(10)}  ${u.path}`);
  }
  if (broken.length) {
    console.log(`\nBroken refs: ${broken.length} (see report JSON)`);
  }

  if (!doDelete) {
    console.log("\nDry run. --delete --only=duplicates | --delete --from-report [--root=id]");
    return;
  }

  let toDelete = onlyDuplicates ? duplicates : fromReport ? unused : [];
  if (!onlyDuplicates && !fromReport) {
    console.error("Specify --only=duplicates or --from-report with --delete");
    process.exit(1);
  }
  if (rootFilter) {
    toDelete = toDelete.filter((x) => x.root === rootFilter);
    console.log(`\nFiltering to root=${rootFilter}: ${toDelete.length} files`);
  }

  let deleted = 0;
  let freed = 0;
  for (const item of toDelete) {
    if (DENYLIST.has(item.path)) continue;
    const abs = path.join(ROOT, item.path);
    if (!fs.existsSync(abs)) continue;
    freed += item.sizeBytes;
    fs.unlinkSync(abs);
    deleted++;
  }

  if (onlyDuplicates) {
    for (const prefix of DUPLICATE_PREFIXES) {
      const abs = path.join(ROOT, prefix);
      if (fs.existsSync(abs)) fs.rmSync(abs, { recursive: true, force: true });
    }
  }

  console.log(`Deleted ${deleted} files (${formatBytes(freed)})`);
}

main();
