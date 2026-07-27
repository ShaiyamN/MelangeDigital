const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Hostinger clones often skip LFS smudge — Vite then emits garbage "PNG"s and
// hcdn returns 422 for them. Pull LFS when available, then refuse to build on pointers.

const root = path.join(__dirname, "..");

function tryLfsPull() {
  try {
    execSync("git lfs version", { stdio: "ignore", cwd: root });
  } catch {
    console.warn("git lfs not installed — skipping git lfs pull");
    return;
  }
  try {
    execSync("git lfs pull", { stdio: "inherit", cwd: path.join(root, "..") });
  } catch (e) {
    console.warn("git lfs pull failed:", e.message);
  }
}

function isLfsPointer(filePath) {
  const fd = fs.openSync(filePath, "r");
  const buf = Buffer.alloc(80);
  const n = fs.readSync(fd, buf, 0, 80, 0);
  fs.closeSync(fd);
  return buf.slice(0, n).toString("utf8").startsWith("version https://git-lfs.github.com");
}

tryLfsPull();

const samples = [
  "src/assets/images/Bpost1.png",
  "src/assets/images/mainLogo.png",
  "src/assets/images/displaylogo.png",
];

let bad = 0;
for (const rel of samples) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    console.error(`Missing sample asset: ${rel}`);
    bad++;
    continue;
  }
  if (isLfsPointer(abs)) {
    console.error(`LFS pointer (not real file): ${rel}`);
    console.error("Hostinger/Linux builds must run: git lfs pull");
    bad++;
  }
}

if (bad) {
  console.error(`\n${bad} asset check(s) failed. Refusing to build broken images.`);
  process.exit(1);
}

console.log("assert-real-assets: ok");
