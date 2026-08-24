import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Copies tourism-landing-staging → public/destination-marketing-agency/ before every build.
// public/destination-marketing-agency/ is gitignored; source of truth is tourism-landing-staging/.
// Form post-submit opens the PDF at /indian-outbound-tourism-report (pretty URL → assets PDF).

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_ROOT = path.join(__dirname, '..');
const SOURCE = process.env.TOURISM_LANDING_PATH
  ? path.resolve(process.env.TOURISM_LANDING_PATH)
  : path.join(CLIENT_ROOT, 'tourism-landing-staging');
const LANDING_SLUG = 'destination-marketing-agency';
const DEST = path.join(CLIENT_ROOT, 'public', LANDING_SLUG);
const STALE_DIRS = [
  path.join(CLIENT_ROOT, 'public', 'tourism'),
  path.join(CLIENT_ROOT, 'public', 'indian-outbound-tourism-report'),
];

const COPY_ENTRIES = ['index.html', '404.html', 'services.html', 'about.html', 'css', 'js', 'images', 'videos'];

// A running dev server holds handles under DEST, so Windows throws EBUSY/EPERM
// mid-delete. rmSync's own retry loop is what covers that.
const rm = (target) =>
  fs.rmSync(target, { recursive: true, force: true, maxRetries: 20, retryDelay: 150 });

if (!fs.existsSync(SOURCE)) {
  console.error(`Tourism landing source not found: ${SOURCE}`);
  console.error('Set TOURISM_LANDING_PATH to override.');
  process.exit(1);
}

for (const stale of STALE_DIRS) rm(stale);

// Empty DEST's contents rather than DEST itself; the dir handle is the one Vite watches.
fs.mkdirSync(DEST, { recursive: true });
for (const name of fs.readdirSync(DEST)) rm(path.join(DEST, name));

for (const entry of COPY_ENTRIES) {
  const srcPath = path.join(SOURCE, entry);
  if (!fs.existsSync(srcPath)) continue;
  fs.cpSync(srcPath, path.join(DEST, entry), { recursive: true });
}

// Nested .htaccess omitted on purpose — root public/.htaccess is enough.

console.log(`Synced tourism landing from ${SOURCE} to ${DEST}`);
