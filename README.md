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

Images/videos are Git LFS. After clone: `git lfs pull`.

## Hostinger (frontend only)

| Setting | Value |
| --- | --- |
| Branch | `staging` |
| Build | `git lfs pull && npm run build` |
| Output | `dist` if app root is `client`, else `client/dist` |
| Entry | `server.cjs` |

If PNGs/JPGs return **422** from `hcdn` while SVG/admin (Cloudinary) images work, the build used LFS **pointer** files. Fix: install Git LFS on the build image and use the build command above, then redeploy.

If images are still 422 after a real LFS build, disable Hostinger **CDN / image optimization** for the staging site (hPanel → CDN).

API is **not** deployed by that static build — run `server/` on its own host.
