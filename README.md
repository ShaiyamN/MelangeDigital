# MelangeDigital

Website (`client/`) + API (`server/`). Work on branch `staging` unless releasing to production (`main`).

## Repo layout

| Path | Purpose |
| --- | --- |
| `client/` | Vite + React frontend (Hostinger static / Node web app) |
| `client/public/destination-marketing-agency/` | Marketing site assets (css, js, images) — served at `/destination-marketing-agency/` |
| `client/src/components/pages/{Home,About,Services,Work}/` | React shells + `markup.html` page bodies |
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

Node.js Web App. Application root **`client`**. Hostinger must **never run Vite** — that is what made deploys fail 10 times and succeed once (OOM). GitHub Actions builds `client/spa/`; Hostinger only verifies it.

| Setting | Value |
| --- | --- |
| Branch | `staging` (or `hostinger-dist`) |
| Application root | `client` |
| Framework | **Express** |
| Node.js version | **20.x** |
| Build command | *leave default* (`npm run build` = verify-only) |
| Start command | `npm start` |
| Entry file | **`server.js`** |
| Output directory | **leave empty** |

Vite runs on GitHub (`FORCE_VITE_BUILD=1 npm run build:full`), not on Hostinger.

