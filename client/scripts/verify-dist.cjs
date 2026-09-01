const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const index = path.join(root, "dist", "index.html");

if (!fs.existsSync(index)) {
  console.error("FAIL: dist/index.html missing");
  console.error("  CI builds dist on push to staging and publishes the hostinger-dist branch.");
  console.error("  Wait for GitHub Actions to finish, then redeploy from hostinger-dist.");
  process.exit(1);
}

const bytes = fs.statSync(index).size;
console.log(`verify-dist: ok (${index}, ${bytes} bytes)`);
console.log("hostinger-build: ok (dist/index.html)");
