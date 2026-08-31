# MelangeDigital

Website (`client/`) + API (`server/`). Work on branch `staging` unless releasing to production (`main`).

## Repo layout

| Path | Purpose |
| --- | --- |
| `client/` | Vite + React frontend (Hostinger static / Node web app) |
| `server/` | Express API: careers email + Zoho CRM leads |
| `client/server.cjs` | Hostinger Node entry (serves `client/dist`; CommonJS so it works with `"type": "module"`) |
| `server.js` | Root static file server if app root is the repo (serves `client/dist`) |

## Backend (`server/`)

```bash
cd server
cp .env.example .env   # fill values
npm install
npm start              # http://localhost:8000
```

### Routes

| Method | Path | Notes |
| --- | --- | --- |
| `POST` | `/careers/submit` | Career form + PDF resume → Gmail (`EMAIL_USER` / `EMAIL_PASS`) |
| `POST` | `/performance-marketing/submit` | Same career router (legacy mount) |
| `POST` | `/token-generate` | Zoho lead create (contact form). Two handlers are stacked — split paths when refactoring |

Env keys: see [`server/.env.example`](server/.env.example).

## Frontend (`client/`)

```bash
cd client
cp .env.example .env   # VITE_FIREBASE_* / VITE_CLOUDINARY_*
npm install
npm run dev
```

Images and videos are stored in Git (not LFS) so Hostinger can build without `git lfs`.

## Hostinger (frontend only)

Use a **Node.js Web App** (not static hosting). Two valid layouts:

### Option A — repo root (recommended)

| Setting | Value |
| --- | --- |
| Branch | `staging` |
| Application root | *(empty — repo root)* |
| Node.js version | **20.x** |
| Build command | `npm run build` |
| Start command | `npm start` |
| Output / entry | `client/server.cjs` serves `client/dist` |

Root `package.json` runs `npm ci --prefix client && npm run build --prefix client`.

### Option B — `client/` as app root

| Setting | Value |
| --- | --- |
| Branch | `staging` |
| Application root | `client` |
| Node.js version | **20.x** |
| Build command | `npm run build` |
| Start command | `npm start` |
| Entry | `server.cjs` |

Do **not** set Application root to a path that has no `package.json` — Hostinger’s auto-diagnosis will show null project/build logs.

Install-only deploys (no Build command): set env `HOSTINGER_INSTALL_ONLY=1` so `postinstall` builds `dist/`. When a Build command is configured, leave that unset (default) to avoid running Vite twice.

If PNGs/JPGs return **422** from `hcdn` while SVG/admin images work, redeploy after a clean build (broken LFS pointers). If still 422, disable Hostinger **CDN** for staging.

API is **not** deployed by that static build — run `server/` on its own host.
