---
title: "Label is after caption!"
description: "Labels should always be used after captions"
date: 2012-10-23
author: "maxulysse"
tags: ["latex", "tips"]
image:
  path: "/assets/img/category/latex.png"
---


Very important not to mess things up, when you’re describing your figures in LaTex.
If you wrote:

```LaTeX
\begin{figure}
\caption{Figure}
\label{fig:figure1}
\end{figure}
```

No problem, it’s working well, and linked well also.

But if you wrote:

```LaTeX
\begin{figure}
\label{fig:figure1}
\caption{Figure}
\end{figure}
```

It seems to be working, but the link is not good.
And could be a reference to anything else (section, subsection, chapter, and even nothing) but the figure itself.

So, “Label is after caption!”
