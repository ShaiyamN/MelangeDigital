const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js");

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
