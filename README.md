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

### Recommended — CI prebuild (avoids Hostinger OOM)

Vite needs ~768MB heap; shared Hostinger plans often kill the build mid-Vite with no useful error. **Build on GitHub Actions instead:**

1. Push to **`staging`** — workflow [`.github/workflows/hostinger-build.yml`](.github/workflows/hostinger-build.yml) builds `client/dist` and force-pushes branch **`hostinger-dist`**.
2. Wait for the **Hostinger prebuild** Action to finish (green) on GitHub.
3. Point Hostinger at **`hostinger-dist`** (not `staging`):

| Setting | Value |
| --- | --- |
| Branch | **`hostinger-dist`** |
| Application root | `client` |
| Framework | **Express** or **Other** |
| Node.js version | **20.x** *(not 22 — change in hPanel if still on default)* |
| Build command | `node scripts/verify-dist.cjs` |
| Start command | `npm start` |
| Entry file | `server.cjs` |
| Output directory | `dist` *(not `client/dist`)* |

Hostinger still runs `npm install` for runtime deps (`express`, etc.) but **does not run Vite**.

**Deploy flow:** edit code → push `staging` → wait for GitHub Action → Hostinger redeploys `hostinger-dist` (auto or manual Redeploy).

**Success markers in build logs:**
```
verify-dist: ok (.../dist/index.html, ... bytes)
hostinger-build: ok (dist/index.html)
```

### Fallback — build on Hostinger

Only if the plan has **2GB+ RAM** (Business/Cloud). Use branch **`staging`**:

| Setting | Value |
| --- | --- |
| Branch | `staging` |
| Application root | `client` |
| Framework | **Express** or **Other** |
| Node.js version | **20.x** |
| Build command | `npm run build` *(do not add `npm install` — Hostinger already installs)* |
| Start command | `npm start` |
| Entry file | `server.cjs` |
| Output directory | `dist` |

Build tools (`vite`, `tailwindcss`, etc.) live in `dependencies` so production install includes them. Vite heap is capped at 768MB in [`scripts/run-vite-build.cjs`](client/scripts/run-vite-build.cjs).

**Success markers in build logs:**
```
run-vite-build: node v20.x.x, NODE_OPTIONS=--max-old-space-size=768
✓ built in XXs
hostinger-build: ok (.../dist/index.html)
```

**Stale deploy warning:** If logs show `postinstall` → `maybe-hostinger-build`, `computing gzip size...`, or `react-router@8.3.0`, Hostinger is on an **old commit** — redeploy latest `staging` or switch to `hostinger-dist`.

Before every deploy, run from `client/`:

```bash
npm run verify:hostinger
```

If PNGs/JPGs return **422** from `hcdn` while SVG/admin images work, redeploy after a clean build (broken LFS pointers). If still 422, disable Hostinger **CDN** for staging.

API is **not** deployed by that static build — run `server/` on its own host.
