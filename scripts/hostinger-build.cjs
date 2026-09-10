// Optional repo-root deploy only (Application root empty). Hostinger panel uses client/ — see README.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname.replace(/[/\\]scripts$/, "");
const client = path.join(root, "client");
const distIndex = path.join(client, "dist", "index.html");

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: root, env: process.env });
}

console.log("hostinger-build: repo-root path (Application root must be empty)");
console.log("  node", process.version);

if (!fs.existsSync(path.join(client, "package.json"))) {
  console.error("hostinger-build: client/package.json not found");
  process.exit(1);
}

process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, "--max-old-space-size=768"]
  .filter(Boolean)
  .join(" ");

run("npm install --prefix client --no-audit --no-fund --legacy-peer-deps");
run("npm run build --prefix client");

if (!fs.existsSync(distIndex)) {
  console.error(`hostinger-build: missing ${distIndex}`);
  process.exit(1);
}

console.log(`hostinger-build: ok (${distIndex})`);
