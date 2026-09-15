const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const os = require("os");

const root = path.join(__dirname, "..");
const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js");
const distIndex = path.join(root, "dist", "index.html");

if (fs.existsSync(distIndex) && !process.env.FORCE_VITE_BUILD) {
  console.log(`run-vite-build: prebuilt dist present (${distIndex}). Skipping Vite build to avoid OOM.`);
  process.exit(0);
}

if (!fs.existsSync(viteBin)) {
  console.error("FAIL: vite not installed — check dependencies in package.json");
  process.exit(1);
}

// Hostinger shared LVE is often 1GB; Vite needs ~768MB heap for this app.
// Do not raise above 1024 here — a 3GB request gets SIGKILL with no useful log.
if (!process.env.NODE_OPTIONS?.includes("max-old-space-size")) {
  process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, "--max-old-space-size=768"]
    .filter(Boolean)
    .join(" ");
}

if (!process.env.VITE_FIREBASE_API_KEY) {
  const envFile = path.join(root, ".env");
  if (fs.existsSync(envFile)) {
    for (const line of fs.readFileSync(envFile, "utf8").split("\n")) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}
if (!process.env.VITE_FIREBASE_API_KEY) {
  console.error("FAIL: VITE_FIREBASE_API_KEY missing — set it in client/.env or GitHub Actions secrets");
  process.exit(1);
}

console.log(`run-vite-build: node ${process.version}, NODE_OPTIONS=${process.env.NODE_OPTIONS}`);
execSync(`node "${viteBin}" build`, { stdio: "inherit", cwd: root, env: process.env });
