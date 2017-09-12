---
layout: post
title: Shift with minitoc!
description: How to handle shifts in your toc with minitoc...
date: 2012-12-18 17:00
tags:
  - LaTeX
  - Tips
author: maxulysse
image:
  path: /assets/img/category/LaTeX.png
---

Another post about Latex, but you’re in the middle of your thesis redaction, and you finally found a solution to something that’s been bothering you for quite a time, it’s a good idea to keep it somewhere.

Here, all begun with a problem with the TOC (Table of Contents).

Some items in the TOC where associated with the wrong page numbers after compiling the tex file, so I used the tocbibind package who handles it fine, and finally I can stop fighting with:
```LaTeX
\phantomsection
\addcontentsline{toc}{chapter}{}
```

But, by adding a TOT (Table of Tables) and a TOF (Table of Figures), the intern minitoc within each chapter became shifted. I got the minitoc from chapter 1 in chapter 4…

To prevent this, you should add \mtcaddchapter after declaring each TOC, TOT and TOF:
```LaTeX
% TOC
\tableofcontents
\mtcaddchapter
% TOT
\listoftables
\mtcaddchapter
% TOF
\listoffigures
\mtcaddchapter
```
