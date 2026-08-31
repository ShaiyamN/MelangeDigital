// Hostinger Express apps with no Build command: set HOSTINGER_INSTALL_ONLY=1
// so install → postinstall builds dist before start.
// When Build command is npm run build (default), postinstall must stay idle —
// otherwise npm ci + npm run build runs Vite twice and often times out/OOMs.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const onHostinger =
  process.cwd().includes("hbuilds") ||
  Boolean(process.env.HOSTINGER) ||
  Boolean(process.env.HBUILD);

if (!onHostinger || !process.env.HOSTINGER_INSTALL_ONLY) process.exit(0);

// Guard: skip if dist/ already exists (root build script likely already ran)
const distDir = path.join(__dirname, "..", "dist");
if (fs.existsSync(distDir)) {
  console.log("maybe-hostinger-build: dist/ exists, skipping build");
  process.exit(0);
}

execSync("npm run build", { stdio: "inherit" });
