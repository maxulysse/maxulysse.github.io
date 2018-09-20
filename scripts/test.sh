#!/usr/bin/env bash
set -e

bundle exec jekyll build
bundle exec htmlproofer ./_site \
	--check-favicon \
	--check-html \
	--disable-external \
	--url-ignore /\#À/,/\#Ä/
