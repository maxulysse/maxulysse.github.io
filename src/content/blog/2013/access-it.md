---
title: "Access it"
description: "A bookmarklet to access publications"
date: 2013-10-31
author: "maxulysse"
tags: ["bookmarklet", "javascript", "tips"]
image:
  path: "/assets/img/category/javascript.png"
---


If you missed [this article (in french)](https://bioinfo-fr.net/un-bookmarklet-pour-acceder-plus-facilement-aux-publications) on `bioinfo-fr`, I will just explain the code, it could be of some help.

[Bookmarklets <i class="fa fa-wikipedia-w" aria-hidden="true"></i>](https://en.wikipedia.org/wiki/Bookmarklet), one click tools, are little scripts stored as URL in a bookmark, or as an hyperlink in a web page. Coded in JavaScript, they add new functionalities, and can even call more complex scripts, stored somewhere else.

The code here is very simple :
<script src="https://gist.github.com/MaxUlysse/6218598.js"></script>

`javascript`: The language used for writing the bookmarklet.

`function()` Call an anonymous function in JavaScript.

`location.hostname=location.hostname+'.urlproxy'`; The interesting part : It adds at the end of the domain name (`location.hostname`) the proxy’s URL, which automatically change the URL of the page on which you activate the bookmarklet.

If you get a 404 error. It means that the proxy was not planned for the visited site. Which could happen if you click twice on the bookmarklet.
