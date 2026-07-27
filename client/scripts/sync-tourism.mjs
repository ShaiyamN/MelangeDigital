import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Copies the static tourism landing into public/tourism/ for build:tourism.
// Default `npm run build` does NOT run this — see TOURISM_DEPLOY.md.
//
// Windows note: never rmdir the public/tourism root — Vite (and Explorer) often
// hold a handle on that folder (EBUSY). Empty children instead, with retries.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_ROOT = path.join(__dirname, '..');
const DEFAULT_SOURCE = path.join(
  CLIENT_ROOT,
  '..',
  '..',
  '..',
  'melange-digital-tourism-board-landing (1)',
);
const STAGING_SOURCE = path.join(CLIENT_ROOT, 'tourism-landing-staging');
const configuredSource = process.env.TOURISM_LANDING_PATH
  ? path.resolve(process.env.TOURISM_LANDING_PATH)
  : null;
const SOURCE = configuredSource && fs.existsSync(configuredSource)
  ? configuredSource
  : fs.existsSync(STAGING_SOURCE)
    ? STAGING_SOURCE
    : DEFAULT_SOURCE;
const DEST = path.join(CLIENT_ROOT, 'public', 'tourism');

const COPY_ENTRIES = [
  'index.html',
  '404.html',
  'css',
  'js',
  'images',
  'videos',
];

function sleepSync(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    /* busy-wait — sync script only, short retries */
  }
}

function rmPath(target, attempts = 12) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      if (!fs.existsSync(target)) return;
      fs.rmSync(target, {
        recursive: true,
        force: true,
        maxRetries: 8,
        retryDelay: 100,
      });
      return;
    } catch (err) {
      lastErr = err;
      const code = err && err.code;
      if (code !== 'EBUSY' && code !== 'EPERM' && code !== 'ENOTEMPTY') {
        throw err;
      }
      sleepSync(150 + i * 100);
    }
  }
  throw lastErr;
}

/** Clear DEST contents without removing DEST itself (avoids Windows EBUSY on root). */
function emptyDirContents(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return;
  }
  for (const name of fs.readdirSync(dir)) {
    rmPath(path.join(dir, name));
  }
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

fs.mkdirSync(DEST, { recursive: true });
emptyDirContents(DEST);

for (const entry of COPY_ENTRIES) {
  const srcPath = path.join(SOURCE, entry);
  if (!fs.existsSync(srcPath)) continue;
  copyRecursive(srcPath, path.join(DEST, entry));
}

const htaccessSrc = path.join(SOURCE, 'tourism', '.htaccess');
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, path.join(DEST, '.htaccess'));
}

console.log(`Synced tourism landing from ${SOURCE} to ${DEST}`);
