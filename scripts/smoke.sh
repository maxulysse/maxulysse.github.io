#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"

test -f dist/index.html
test -f dist/404.html
test -f dist/rss.xml
test -f dist/sitemap-index.xml
test -f dist/cv/index.html
test -f dist/archive/index.html
test -f dist/blog/page/1/index.html
test -s dist/rss.xml
test -s dist/sitemap-index.xml
grep -q '<channel>' dist/rss.xml
