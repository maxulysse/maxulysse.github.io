---
layout: post
title: Problem with slashed O!
description: How to handle Mendeley induced problems with your biography...
date: 2012-11-13 17:00
tags:
  - LaTeX
  - Mendeley
  - Tips
author: maxulysse
image:
  path: /assets/img/category/latex.png
---

I handle my bibliography with Mendeley. Mendeley keeps references and informations in a BibTex file. Some of the Northern authors have an ø in their name. Mendeley encodes it with `\o` and a white space. When I compile my document, in my bibliography, I find this white space after the ø in the name of the Northern authors.
I tried `\o` without a white space, but it’s not working. You must use `{\o}`.
I came up with this solution, copying the BibTex files, removing unwanted informations (ie abstract, url etc…), and replacing `\o` by `{\o}`:

```bash
#!/bin/bash

cat /home/user/biblio/*.bib | grep -v "url = {" | grep -v "file = {" | \
  grep -v "abstract = {" | grep -v "keywords = {" | grep -v "isbn = {" | \
  grep -v "issn = {" | grep -v "editor = {" | grep -v "address = {" | \
  grep -v "annote = {" > biblio.bib

sed -i 's/\\o /\{\\o\}/g' biblio.bib
```
