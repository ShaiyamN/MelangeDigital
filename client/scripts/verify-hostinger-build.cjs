// Simulates Hostinger: Application root = client/, NODE_ENV=production install, then build.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const nodeModules = path.join(root, "node_modules");
const distIndex = path.join(root, "dist", "index.html");

function run(cmd, env) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: root, env: { ...process.env, ...env } });
}

console.log("verify-hostinger-build: simulating Hostinger (NODE_ENV=production)");

if (fs.existsSync(nodeModules)) {
  console.log("  removing node_modules for clean install");
  try {
    fs.rmSync(nodeModules, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  } catch (err) {
    if (err.code === "EPERM" || err.code === "EBUSY") {
      console.error("FAIL: stop the dev server (port 5173) and rerun npm run verify:hostinger");
      process.exit(1);
    }
    throw err;
  }
}

run("npm install --no-audit --no-fund --legacy-peer-deps", { NODE_ENV: "production" });

const viteBin = path.join(nodeModules, "vite", "package.json");
if (!fs.existsSync(viteBin)) {
  console.error("FAIL: vite not installed under NODE_ENV=production");
  process.exit(1);
}
console.log("ok: vite present after production install");

// Match run-vite-build.cjs — do not simulate a 3GB heap on shared hosting.
if (!process.env.NODE_OPTIONS?.includes("max-old-space-size")) {
  process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, "--max-old-space-size=768"]
    .filter(Boolean)
    .join(" ");
}

run("npm run build", { NODE_ENV: "production" });

if (!fs.existsSync(distIndex)) {
  console.error(`FAIL: missing ${distIndex}`);
  process.exit(1);
}

console.log(`verify-hostinger-build: ok (${distIndex})`);
