---
title: "Problem with redefined section"
description: "How to handle redefined sections problems with a equation in the title"
date: 2013-01-04
author: "maxulysse"
tags: ["latex", "tips"]
image:
  path: "/assets/img/category/latex.png"
---


Section is redefined with a classical:

```LaTeX
\renewcommand\section{\@startsection{section}{1}{\z@}
{-3.5ex \@plus -1ex}
{ 2.3ex \@plus .2ex}
{\bfseries}
}
```

Suppose you’re using an unnumbered section `\section*`.
Everything is working fine, until you need to use `mathtools` for displaying an equation.
And now, your unnumbered section is numbered, and its title is `*...`

The problem is just, you just put a new line between the `}}` where it should not have been.
Just rewrite your definition, and it’ll be working again:

```LaTeX
\renewcommand\section{\@startsection{section}{1}{\z@}
{-3.5ex \@plus -1ex}
{ 2.3ex \@plus .2ex}
{\bfseries}}
```
