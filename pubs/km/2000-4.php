<?php

require("utils.php");

$title = "The Knowledge-Devouring Web";
$date = "April, 2000";
$pdate = "4-1-2000";
$coverart = "0400-cover.gif";
$subhead = "As Internet-based information 
sources expand, opportunities for 
knowledge creation get left behind.";

$body = "
<P>Last month, I estimated the Knowledge Capital of major U.S.
corporations employing 36.2 million people as worth $6.4 trillion.
Assuming that the rest of the workforce has similar characteristics,
we can speculate that total U.S. knowledge assets could be as high as
$25 trillion. Accountants would like to tag such assets so they could
be recorded and managed. As data and information migrate from the
heads of individuals and filing cabinets to computer networks, concern
will grow about the reliability, security and trustworthiness of the
container where this capital resides.

<P>Data, text and images are the raw materials to be extracted from
spinning disks (as information) and ultimately consumed (as
knowledge). When that happens, knowledge assets are created. The
bottleneck in this entire sequence lies in the conversion of
information into knowledge capital, and the Internet - the medium of
choice in which such transmutations occur - is part of the problem.

<P>The Internet is starting to sputter as a knowledge formation
engine. Its content is leaking. Its capability to distill available
information into useful knowledge is limping. As the scope of Internet
services expands, it magnifies the knowledge management difficulties
for organizations. The phenomenal growth in the information resources
accessible via the Internet is aggravating, rather than ameliorating,
this situation. Here are some of the metrics I considered in arriving
at these conclusions.

<ul>

<P><li>The average life of a page of text on the Internet is only
75 days. Almost all information on the Internet will be discarded.

<P><li>If we count an enterprise that allows access to the Internet
only through a central firewall as a single high-usage
&quot;household,&quot; 78 percent of households use the Internet for
research-the second most popular activity, after e-mail. Yet Internet
search engines are grossly underpowered; the best of them index only
300 million pages of an estimated five billion available pages, and
that larger total is growing by 100 million pages per week.

<P><li>In July 1999 U.S. households spent an estimated 548 million
hours online-more than half the total of 1,035 million hours spent on
PCs, thus indicating increased reliance on Internet information. The
55 million U.S. Internet users (half of the total global population)
spent much of their time surfing for useful information; on average
they spent less than a minute viewing each page they opened.

<P><li>The average online time in households now is more than three
hours per week, but most of that time goes to surfing, which hardly
qualifies as a way of acquiring knowledge assets. Spending only 51
seconds per page may be good mostly for gathering superficial
impressions and developing glib answers. This attention-deficient
behavior is evident in the average time individuals spend at some of
the central sites: AOL (12 minutes); AltaVista (12 minutes); Yahoo (27
minutes, mostly shopping); and Microsoft (six minutes).

<P><li>The dominant search engine for locating information is
Yahoo, which receives 56 percent of search referrals. Yet Yahoo
indexes as few as 10 percent of all live Web pages. The remaining 248
search engines, most of which are specialized and limited in scope,
divide the rest of the time spent finding information.

<P><li>Internet search engines work by accessing previously
extracted and catalogued pointers to indexed documents. This process
is biased because it is based on the popularity of individual sites or
on preferred selection of keywords that have been manipulated by
webmasters to attract attention for commercial advantage. Because the
revenues of Internet portals come from advertising and referral fees,
the profit motive encourages preferentially skewed and incomplete
views of what can be found by search engines.
</ul>

<P>Despite the hoopla about the &quot;global memory&quot; and the
utopian articles about the Internet as a shared treasure trove of
knowledge, the dream of providing individuals with direct access to
the sources of all knowledge is far from becoming a reality. As the
volume of data flushed through Internet pages grows, the difficulties
of finding anything comprehensive and reliable will worsen, unless
people pay middlemen to do the work.

<P>To compensate for the growing inadequacies of content-indexing
methods and the limited reach of commercial search engines, the
Internet knowledge space continues to be broken up. It is now
partitioned into islands of special-purpose e-commerce marts and
archives that offer information to customers that wish to satisfy
specialized interests. This trend leaves the Web far short of its
potential as the Universal Library in the Ether.

<P>The information that is migrating to the Internet is too valuable
to become inaccessible and not easily retrievable in whatever language
or format it presents itself. We need retrieval tools that analyze
more than indexes that have been abstracted to maximize portal
revenues. For hundreds of billions of pages, pictures, videos and
audio tracks, we need search engines that individuals can customize to
their own preferences, rather than inquiry formats that have been
precooked by a standard software package. What is at stake here is the
ability to reach and make use of an information universe that is
denominated in petabytes (thousands of terabytes, or millions of
gigabytes) instead of the paltry amount now available, which is at
least four orders of magnitude below what it ought to be.
";

 $article = array ( 
  title => "$title",
  date => "$date",
  pdate => "$pdate",
  coverart => "$coverart",
  subhead => "$subhead",
  body => "$body");

echo show_km_article ($article);

?>