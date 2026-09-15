// Optional repo-root deploy only (Application root empty). Hostinger panel uses client/.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname.replace(/[/\\]scripts$/, "");
const client = path.join(root, "client");

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: root, env: process.env });
}

if (!fs.existsSync(path.join(client, "package.json"))) {
  console.error("hostinger-build: client/package.json not found");
  process.exit(1);
}

run("node client/scripts/verify-dist.cjs");
console.log("hostinger-build: ok");
