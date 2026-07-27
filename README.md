# MelangeDigital

Main repo for Melange Digital's primary website (`client/` Vite React app + `server/` API).

## Hostinger built-in Git deploy

Hostinger builds the frontend and publishes **`client/dist` only**. Do not point deploy at the repo root as the web root.

### Build settings (hPanel)

| Setting | Value |
| --- | --- |
| Repository | `https://github.com/ShaiyamN/MelangeDigital.git` |
| Branch | `main` (or `staging` — see safety below) |
| Build command | `npm run build` |
| Output directory | `client/dist` |

`npm run build` at the repo root installs `client` deps and runs `build:hostinger` (sync tourism + Vite). It skips Puppeteer prerender so Hostinger builds do not need Chrome.

### Environment variables (hPanel → build env)

Add the same keys as `client/.env.example` (`VITE_FIREBASE_*`, `VITE_CLOUDINARY_*`). Never commit real `.env` files.

### Safety: do not auto-deploy straight to production

1. Create a **staging subdomain** in Hostinger and connect Git there first.
2. On staging: enable automatic deploy from `main` (or a `staging` branch).
3. On the **live domain**: use **manual** deploy only (Deploy button after you verify staging).
4. Keep Hostinger backups/snapshots on before the first production deploy.

### After connecting Git

1. Push these repo changes to GitHub.
2. In hPanel → Websites (or Advanced → Git), connect the repo and set the table above.
3. Deploy staging → open the site → check home, `/tourism/`, admin login, forms.
4. Only then manual-deploy production.

### Notes

- `server/` is not part of this static deploy; run the API elsewhere (or Hostinger Node) separately.
- Large media uses Git LFS. If images are missing after deploy, confirm Hostinger’s Git pull fetches LFS objects (or re-upload assets into `client/public`).
- Local full build with prerender: `cd client && npm run build`.
