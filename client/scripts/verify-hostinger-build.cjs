// Simulates Hostinger: production install (no Vite) then npm run build (verify spa).
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const spaIndex = path.join(root, "spa", "index.html");

function run(cmd, env) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: root, env: { ...process.env, ...env } });
}

if (!fs.existsSync(spaIndex)) {
  console.error("FAIL: spa/index.html missing");
  process.exit(1);
}

console.log("verify-hostinger-build: simulating Hostinger (NODE_ENV=production, no Vite)");
run("npm run build", { NODE_ENV: "production" });
console.log("verify-hostinger-build: ok");
