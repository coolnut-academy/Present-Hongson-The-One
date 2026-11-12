#!/usr/bin/env bash
set -euo pipefail
printf 'Checking release safety...\n'
if git ls-files reference-private | grep -q .; then
  echo 'ERROR: Private references are tracked by Git. Remove them from Git index before pushing.' >&2
  exit 1
fi
if [ ! -f package.json ] || [ ! -f package-lock.json ]; then
  echo 'ERROR: App not yet implemented by coding agent; missing package or lockfile.' >&2
  exit 1
fi
npm ci
npm run build
if [ -d dist/reference-private ]; then
  echo 'ERROR: Private source files found in build output.' >&2
  exit 1
fi
echo 'PASS: source privacy check and Vite build'
