# Tourism landing — deploy notes

The static tourism landing page lives in a **separate repo**:

`melange-digital-tourism-board-landing (1)/`

A snapshot may also exist at `client/tourism-landing-staging/` (not deployed).

It is **not** part of the default main-site build while the page is down.

## Current state (landing live)

- `/tourism` is served as a **static landing** from `public/tourism/` (synced at build time).
- `npm run build` copies the tourism landing into `dist/tourism/`.
- The React `Tourism.jsx` placeholder route is removed — nav/footer use `<a href="/tourism/">`.

## Go live again

1. Edit tourism landing in the separate repo.
2. In `MelangeMain/client`, restore integration (or run `npm run build:tourism` after re-applying):
   - Tourism nav links as `<a href="/tourism/">` (not React `NavLink`)
   - `vite.config.js` tourism dev middleware (optional for local dev)
   - `.htaccess` tourism static rules in `public/.htaccess`
   - Remove `/tourism` from `prerender.js` and `App.jsx` `Tourism` route
3. Build with tourism bundle:
   ```bash
   npm run build:tourism
   ```
4. Upload full `dist/` to Hostinger `public_html/`.
5. Ensure `dist/tourism/index.html` is the static landing (check for `nav-link-4`, not React root).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run build` | Main site only (default) |
| `npm run sync-tourism` | Copy landing repo → `public/tourism/` |
| `npm run build:tourism` | Sync + build + prerender with static `/tourism/` |
