#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"

test -f dist/index.html
test -f dist/404.html
test -f dist/cv/index.html
test -f dist/archive/index.html
find dist/blog -type f -name index.html | grep -q .
test -s dist/rss.xml
test -s dist/sitemap-index.xml
grep -q '<channel>' dist/rss.xml
grep -q 'pubmed.ncbi.nlm.nih.gov' dist/cv/index.html
grep -qE 'id="garcia2013thesis"[^>]*>.{0,300}, 2013-12-20\.' dist/cv/index.html
grep -qE 'id="garcia2022cbionet"[^>]*>.{0,300}, 2022-04\.' dist/cv/index.html
grep -q 'url=/jobim2020/' dist/blog/2020/2020-07-01-jobim/index.html
test -f dist/jobim2020/index.html
