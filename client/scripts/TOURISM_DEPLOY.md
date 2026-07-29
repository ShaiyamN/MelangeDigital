# Outbound tourism report landing

Source: `client/tourism-landing-staging/`  
Build output: `dist/indian-outbound-tourism-report/` (synced before every `npm run build`)

Public URL: `/indian-outbound-tourism-report/` (legacy `/tourism/` redirects here)

Report PDF (after form submit): `/assets/reports/indian-outbound-tourism-trends-2026.pdf`  
Drop the file in `client/public/assets/reports/` before deploy.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run build` | Sync landing + Vite build |
| `npm run sync-tourism` | Copy staging source → `public/indian-outbound-tourism-report/` |
