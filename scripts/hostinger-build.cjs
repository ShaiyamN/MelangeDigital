// Hostinger build entry — run from repo root via `npm run build`.
// Hostinger sets NODE_ENV=production during install, which skips devDependencies
// (vite, tailwind, etc.) and makes `vite build` fail with no useful panel diagnosis.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname.replace(/[/\\]scripts$/, "");
const client = path.join(root, "client");
const distIndex = path.join(client, "dist", "index.html");

function run(cmd, opts = {}) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: opts.cwd || root, env: opts.env || process.env });
}

console.log("hostinger-build: start");
console.log("  node", process.version);
console.log("  cwd", process.cwd());
console.log("  NODE_ENV", process.env.NODE_ENV || "(unset)");

if (!fs.existsSync(path.join(client, "package.json"))) {
  console.error("hostinger-build: client/package.json not found — set Application root to repo root, not client/");
  process.exit(1);
}

// Cap heap for shared Hostinger plans; wasm rollup already avoids native binary issues.
process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, "--max-old-space-size=3072"]
  .filter(Boolean)
  .join(" ");

// Must include devDependencies (vite lives there).
run("npm install --prefix client --include=dev --no-audit --no-fund --legacy-peer-deps");
run("npm run build --prefix client");

if (!fs.existsSync(distIndex)) {
  console.error(`hostinger-build: missing ${distIndex}`);
  console.error("  If Hostinger asks for Output directory, use: client/dist");
  console.error("  Entry file: client/server.cjs  |  Start: npm start");
  process.exit(1);
}

const mb = (fs.statSync(distIndex).size / (1024 * 1024)).toFixed(2);
console.log(`hostinger-build: ok (${distIndex}, ${mb} MB)`);
