# Outbound tourism / destination marketing landing

Source: `client/tourism-landing-staging/`  
Build output: `dist/destination-marketing-agency/` (synced before every `npm run build`)

Public landing URL: `/destination-marketing-agency`  
Legacy: `/tourism/` → 301 to the new slug

Report PDF (after form submit): `/indian-outbound-tourism-report`  
(Pretty URL; Apache/Express rewrite serves `assets/reports/The Indian Outbound Inspiration report 2026.pdf` inline.)

Drop the PDF in `client/public/assets/reports/` before deploy.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run build` | Sync landing + Vite build |
| `npm run sync-tourism` | Copy staging source → `public/destination-marketing-agency/` |
