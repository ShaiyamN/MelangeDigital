# Melange Digital — Agent Rules

> **All AI agents (Gemini, Cursor, Claude, Copilot) MUST read and follow these rules.**

## Hostinger Deployment Architecture

This project deploys to **Hostinger shared hosting** which runs Node/Express.
Hostinger has ~1GB RAM and **cannot** run `vite build` (it OOM-kills the process).

### How deployment works

```
client/src/  →  (local Vite build)  →  client/dist/  →  (copy)  →  client/spa/  →  (committed to Git)  →  Hostinger serves spa/
```

- `client/spa/` is the **pre-compiled production bundle** tracked in Git
- Hostinger's `npm run build` only runs `verify-dist.cjs` (checks `spa/index.html` exists)
- Express `server.cjs` serves static files from `client/spa/`

### MANDATORY rules for all agents

1. **NEVER** change `client/package.json`'s `"build"` script. It must remain `"node scripts/verify-dist.cjs"`.
2. **NEVER** copy `spa/` → `dist/` in `verify-dist.cjs` or Hostinger `npm run build`. Default steals `dist/`; Node serves `spa/`. A full copy OOMs the 1GB box.
3. **NEVER** suggest running `vite build` on Hostinger or changing Hostinger's build command to `npm run build:full`.
4. **After editing ANY file under `client/src/`**, you **MUST** rebuild `client/spa/` before committing:
   ```
   cd client
   set FORCE_VITE_BUILD=1 && npm run build:full    # Windows
   FORCE_VITE_BUILD=1 npm run build:full            # macOS/Linux
   cd ..
   ```
5. **Always commit `client/spa/` changes** in the same commit or push as source changes.
6. **Always run verification** before pushing:
   ```
   cd client && npm run verify:hostinger && npm run verify:dist
   ```
7. **NEVER** add `client/spa/` to `.gitignore`. It is intentionally tracked.
8. **NEVER** delete or modify files in `client/spa/` directly — they are build output.

### Build scripts reference

| Script | Purpose | Where it runs |
|--------|---------|---------------|
| `npm run build` | Verify pre-built spa exists | Hostinger (production) |
| `npm run build:full` | Full Vite build + preflight checks | Local dev / GitHub Actions |
| `npm run verify:hostinger` | Simulate Hostinger build locally | Local dev |
| `npm run verify:dist` | Check spa/index.html validity | Local dev / Hostinger |

### Git hooks

A pre-push hook (`.githooks/rebuild-spa-check.sh`) will **block pushes** if `client/src/` has been modified more recently than `client/spa/`. If blocked, rebuild spa and commit before pushing.

## General Rules

- Never add AI co-author attribution to git commits. Use plain `git commit -m "message"`.
- Prefer minimal diffs. Don't refactor code that isn't related to the current task.
- Don't create `.planning/`, `.tmp-*`, or other planning artifacts in the repo.
