// Hostinger Express apps often run install + start only (no Build command).
// Run Vite build after install on Hostinger; skip locally.
const { execSync } = require("child_process");
const cwd = process.cwd();
const onHostinger =
  cwd.includes("hbuilds") ||
  Boolean(process.env.HOSTINGER) ||
  Boolean(process.env.HBUILD);

if (!onHostinger) process.exit(0);

execSync("npm run build", { stdio: "inherit" });
