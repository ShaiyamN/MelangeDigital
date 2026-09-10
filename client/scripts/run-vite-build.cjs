const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const os = require("os");

const root = path.join(__dirname, "..");
const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js");
const distIndex = path.join(root, "dist", "index.html");

const totalMemMB = Math.round(os.totalmem() / (1024 * 1024));
const isLowMemoryHost = totalMemMB <= 1500 && process.platform === "linux";

if (fs.existsSync(distIndex) && (process.env.SKIP_VITE_BUILD || (isLowMemoryHost && !process.env.FORCE_VITE_BUILD))) {
  console.log(`run-vite-build: prebuilt dist present on low-memory environment (${totalMemMB}MB RAM). Skipping Vite build.`);
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

console.log(`run-vite-build: node ${process.version}, NODE_OPTIONS=${process.env.NODE_OPTIONS}`);
execSync(`node "${viteBin}" build`, { stdio: "inherit", cwd: root, env: process.env });
