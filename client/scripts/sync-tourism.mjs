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

const COPY_ENTRIES = ['index.html', '404.html', 'css', 'js', 'images', 'videos'];

function sleepSync(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) { /* ponytail: sync retries only */ }
}

function rmPath(target, attempts = 12) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      if (!fs.existsSync(target)) return;
      fs.rmSync(target, { recursive: true, force: true, maxRetries: 8, retryDelay: 100 });
      return;
    } catch (err) {
      lastErr = err;
      const code = err?.code;
      if (code !== 'EBUSY' && code !== 'EPERM' && code !== 'ENOTEMPTY') throw err;
      sleepSync(150 + i * 100);
    }
  }
  throw lastErr;
}

function emptyDirContents(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return;
  }
  for (const name of fs.readdirSync(dir)) rmPath(path.join(dir, name));
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

if (!fs.existsSync(SOURCE)) {
  console.error(`Tourism landing source not found: ${SOURCE}`);
  console.error('Set TOURISM_LANDING_PATH to override.');
  process.exit(1);
}

for (const stale of STALE_DIRS) rmPath(stale);

fs.mkdirSync(DEST, { recursive: true });
emptyDirContents(DEST);

for (const entry of COPY_ENTRIES) {
  const srcPath = path.join(SOURCE, entry);
  if (!fs.existsSync(srcPath)) continue;
  copyRecursive(srcPath, path.join(DEST, entry));
}

const htaccessSrc = path.join(SOURCE, '.htaccess');
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, path.join(DEST, '.htaccess'));
}

console.log(`Synced tourism landing from ${SOURCE} to ${DEST}`);
