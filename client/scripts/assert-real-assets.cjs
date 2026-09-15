const fs = require("fs");
const path = require("path");

// Refuse to build if image files are still Git LFS pointers (Hostinger has no git-lfs).

const root = path.join(__dirname, "..");

function isLfsPointer(filePath) {
  const fd = fs.openSync(filePath, "r");
  const buf = Buffer.alloc(80);
  const n = fs.readSync(fd, buf, 0, 80, 0);
  fs.closeSync(fd);
  return buf.slice(0, n).toString("utf8").startsWith("version https://git-lfs.github.com");
}

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
    bad++;
  }
}

if (bad) {
  console.error(`\n${bad} asset check(s) failed. Re-commit assets without Git LFS.`);
  process.exit(1);
}

console.log("assert-real-assets: ok");
