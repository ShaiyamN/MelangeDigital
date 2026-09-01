const fs = require("fs");
const path = require("path");

// Copy dist/index.html into SPA deep-link folders so Hostinger/static can
// serve them without relying on Express sendFile fallback.
const dist = path.join(__dirname, "..", "dist");
const index = path.join(dist, "index.html");
if (!fs.existsSync(index)) {
  console.error("write-spa-shells: missing dist/index.html");
  process.exit(1);
}

const routes = [
  "admin",
  "admin/login",
  "admin/dashboard",
  "admin/manage-case-studies",
  "admin/manage-blogs",
  "admin/manage-jobs",
  "admin/manage-team",
];

for (const route of routes) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(index, path.join(dir, "index.html"));
}

console.log(`write-spa-shells: ${routes.length} admin shells`);
console.log(`hostinger-build: ok (${index})`);
