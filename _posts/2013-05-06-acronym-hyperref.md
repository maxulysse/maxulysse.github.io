---
layout: post
title: Problems between acronym and Hyperref
description: How to handle an acronym in the title with Hyperref
date: 2013-05-06 17:00
tags:
  - LaTeX
  - Tips
author: maxulysse
image:
  path: /assets/img/category/LaTeX.png
---

Normally, when you want to use an acronym in a title, you’re supposed to force the use of the short or the long version of the acronym, otherwise, when the Table of Contents is built, it will be the first appearance of your acronym, and you’ll have problem with your ToC.

In one of my section title, I used `\acl{}` to get the long version of my acronym in the title, but `Hyperref` (which is used to build the PDF bookmarks) thinks there is a problem with that, so I get this error:
```
Package hyperref Warning: Token not allowed in a PDF string (PDFDocEncoding):
```

To prevent that, you should use `\texorpdfstring{}{}`
Between the first brackets, you put your acronym, in the second what should be written by Hyperref in the PDF bookmarks.

Finally it’s almost a completely useless solution, it’s easier to write the content without acronym in the first place, but this problem will happen with math symbols, so the trick could be interesting to know
