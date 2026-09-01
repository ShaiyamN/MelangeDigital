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

Use a **Node.js Web App** (not static hosting). Application root must be **`client`**.

| Setting | Value |
| --- | --- |
| Branch | `staging` |
| Application root | `client` |
| Framework | **Express** or **Other** (not the Vite static preset) |
| Node.js version | **20.x** |
| Build command | `npm run build` *(Hostinger already runs `npm install` — do not add a second install here)* |
| Start command | `npm start` |
| Entry file | `server.cjs` |
| Output directory | `dist` *(not `client/dist` — app root is already `client`)* |

Build tools (`vite`, `tailwindcss`, etc.) live in `dependencies` so Hostinger’s production install still has them when `NODE_ENV=production`. Vite is capped at **768MB heap** during build (`scripts/run-vite-build.cjs`) — shared plans under 1GB RAM may still OOM; use Business/Cloud (2GB+) or build locally and redeploy.

**If deploy fails with no useful log:** Deployments → failed build → **Build logs**. Look for the last `ok:` / `FAIL:` / `run-vite-build:` line. Common misconfigurations: wrong app root, build command includes `npm install`, output directory set to `client/dist`, or Framework preset set to Vite static (skips `server.cjs`).

Before every deploy, run from `client/`:

```bash
npm run verify:hostinger
```

If PNGs/JPGs return **422** from `hcdn` while SVG/admin images work, redeploy after a clean build (broken LFS pointers). If still 422, disable Hostinger **CDN** for staging.

API is **not** deployed by that static build — run `server/` on its own host.
