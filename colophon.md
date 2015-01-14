---
layout: post
title: Colophon
author: Steve Strassmann
date: 2014-11-15
---

To author this web site, I write all the pages in
[Markdown](http://help.github.com/articles/markdown-basics/) using a
plain ascii editor. After I write something, I upload the changes
(using [git](http://git-scm.com)) to [GitHub Pages](http://pages.github.com).

After each upload, GitHub Pages automatically runs
[Jekyll](http://jekyllrb.com). Jekyll processes the markdown pages and turns
them all into static HTML pages. This process typically takes just a few
seconds to update my entire site. GitHub Pages then serves this site for free.

### Why Jekyll is interesting

Jekyll is easier to manage than traditional blogging tools. It's
retro, a return to simpler tools. Modern web sites and blog engines
(like Wordpress or Drupal) are dynamic, meaning some code is run on
the server each time you view a page. This dynamic server code
adds management complexity and presents opportunities for security flaws.

When the web was invented in the 1990's, most pages were static html
files. The file you put on the server was exactly what the browser
loaded. Today, most web pages have static content, meaning they don't
change each time you look at them, but they're served in a dynamic
way.  Serving static files is much more efficient. Load times are
faster, they're easier to manage, and offer practically no
opportunities for malware to affect the server.

With Jekyll, there is no server software to manage, configure, or
maintain.  There is no vendor lock-in.  I can move my site to any
other ISP any time I want by just copying a folder, and I don't have
to do much else to be up and running. Jekyll is itself a free open
source tool that can run pretty much anywhere, including your laptop.

Jekyll lets you avoid cut-and-paste repetition by using templates. You
can focus on just writing content, and let the templates handle the
other stuff like formatting or nav bars.

### Why Markdown is interesting

Markdown is easier to write and maintain than HTML, because the raw
source files are more human-readable. Instead of adding HTML tags,
Markdown gives you a few basic and easy-to-write markup tools. For
example, to *italicize* some text, just surround it with asterisks.

To see how simple this is, take a look at the [raw source 
text](https://raw.githubusercontent.com/straz/pas/gh-pages/colophon.md)
for this page.

If you want to add fancy HTML to a markdown page, you can.
I find that for basic text blogging, this just isn't necessary.


### Why GitHub Pages is interesting

GitHub Pages is jekyll-aware, meaning I just upload markdown files
and GitHub runs jekyll on them automatically on their servers.

GitHub Pages is hosted by GitHub, which means it's extremely reliable
and efficient to reach audiences worldwide. Managing content with git
is a very good idea, because it keeps track of all edits. I can easily
compare, undo, and roll back to an older version of any of my content
any time.

GitHub Pages is free. Thank you, GitHub.

Using git, I have a complete and accurate backup copy of all my files
at all times. One copy is on my laptop, another is on GitHub's server,
and I can make other copies elsewhere whenever I wish.  If something
happens to either my laptop or to GitHub, or I just don't want to use
them any more, I can switch very easily.



