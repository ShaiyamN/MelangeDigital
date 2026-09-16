#!/bin/sh
# Blocks pushes when client/src/ has changes newer than client/spa/.
# This prevents deploying stale pre-built bundles to Hostinger.

# Find the last commit that touched client/src/ (source code)
# Find the last commit that touched client/src/ source that Vite actually bundles.
# Untracking mp4/gif must not block a Hostinger push.
SRC_COMMIT=$(git log -1 --format="%H" -- client/src/ ":!*.mp4" ":!*.gif" ":!*.mov" ":!*.webm")
# Find the last commit that touched client/spa/ (pre-built bundle)
SPA_COMMIT=$(git log -1 --format="%H" -- client/spa/)

# If no source commits exist, nothing to check
if [ -z "$SRC_COMMIT" ]; then
  exit 0
fi

# If no spa commits exist but source commits do, block
if [ -z "$SPA_COMMIT" ]; then
  echo ""
  echo "ERROR: client/spa/ has never been built, but client/src/ has commits."
  echo "Run this before pushing:"
  echo "  cd client && set FORCE_VITE_BUILD=1 && npm run build:full"
  echo "  cd .. && git add client/spa && git commit --amend --no-edit"
  echo ""
  exit 1
fi

# Check if source is strictly newer than spa
# git merge-base --is-ancestor A B → exits 0 if A is ancestor of B
# If SPA_COMMIT is an ancestor of SRC_COMMIT, source is newer
if git merge-base --is-ancestor "$SPA_COMMIT" "$SRC_COMMIT" && [ "$SPA_COMMIT" != "$SRC_COMMIT" ]; then
  echo ""
  echo "=========================================================="
  echo "  PUSH BLOCKED: client/spa/ is stale!"
  echo "=========================================================="
  echo ""
  echo "  Source (client/src/) was modified AFTER the last"
  echo "  spa rebuild. Hostinger serves client/spa/ directly"
  echo "  and cannot run Vite (OOM)."
  echo ""
  echo "  Fix: rebuild spa locally, then commit:"
  echo ""
  echo "    cd client"
  echo "    set FORCE_VITE_BUILD=1 && npm run build:full"
  echo "    cd .."
  echo "    git add client/spa"
  echo "    git commit -m \"build: rebuild spa for Hostinger\""
  echo ""
  echo "  Then push again."
  echo "=========================================================="
  echo ""
  exit 1
fi

exit 0
