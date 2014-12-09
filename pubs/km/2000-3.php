<?php

require("utils.php");

$title = "The Importance of Knowledge Capital";
$date = "March, 2000";
$pdate = "3-1-2000";
$coverart = "0300-cover.gif";
$subhead = "Despite claims to the contrary, ownership of
 Knowledge Capital is highly concentrated";

$body = "

<a href=\"2000-3a.php\"><b>Sidebar:<br>Winners and Losers</b></a>

<p>Much of the rhetoric about the knowledge-based\"new economy\" is speculation unsupported by economic data. What draws attention are boasts about staggering profits made in the bidding up of Internet stocks. We are living in a time in which established rules of financial viability&#151;such as making profits&#151;should be discarded, according to prophets of the knowledge-based economy. As excesses based on speculation capture the imagination, perhaps the time has come to place some concepts of valuation of assets in a measured perspective.</p>

<p>In prior articles (\"Knowledge Metrics,\" October and November 1999 KMM), I illustrated the flight from financial capital to knowledge capital by cases drawn from the pharmaceutical industry. This approach demonstrated how one calculates knowledge-based metrics and how they differ from conventional financial accounting measures. However, these examples could be seen as applying only to conditions in the knowledge-rich pharmaceutical sector and so not relevant as a valid insight about the U.S. economy overall.</p>

<p>To paint a much larger picture, I collected 1998 financial data on 7,288 leading U.S. corporations whose stocks are listed publicly. These firms employed 36.2 million people. Their financial assets were $19.8 trillion, equal to 64 percent of all corporate assets in the U.S. This breadth should make for a credible sample. This sum also dwarfs in scope the dot-com firms that are attracting so much media attention; those new firms, in terms of employment and assets, constitute only a tiny fraction of my statistically valid sample of the real U.S. economy. Here are some of the most revealing findings:</p>

<p><li>The total financial assets of these 7,288 firms are $19.8 trillion. Yet most of this valuation is offset by liabilities and debt equaling $16.1 trillion, which leaves a net worth of $3.7 trillion. A similar number&#151;$3.4 trillion&#151;represents the net value of property and equipment of these corporations.
<p><li>The total stock market valuations of these firms on the last day of 1998 was $11.6 trillion. This figure suggests that investors believed that knowledge assets were worth $7.9 trillion or 214 percent of the net financial assets of $3.7 trillion. Again, \"new economy\" firms make only a small dent in these numbers.
<p><li>Using my own calculations (discussed previously in this column), I come up with the sum of the Knowledge Capital for these corporations: $6.4 trillion. Thus, the stock market has over-valued the corporations by $1.5 trillion (13 percent), if we use profits as the basis for judging the worth of a firm. A few high-technology firms account for a disproportionately large share of this premium.
<p><li>Unfortunately, the $1.5 trillion valuation premium must be seen as a euphoric aberration. My sum of the individual Knowledge Capital values includes a large number of firms that delivered negative Economic Value Added. When one calculates the effects of the negative contributions, the premium valuations reflect the optimism of shareholders, who are willing to gamble on continued stock appreciation even when confronted with a long string of current losses.
<p>In sum, much of what is said about the advanced state of the U.S. economy does not stand up to an uncompromising analysis of actual financial results. The  claims that the U.S. has reached unprecedented levels of prosperity also are premature. Wealth based on Knowledge Capital remains highly concentrated. It is limited in scope and can be observed only for a small number of firms.</p>

<p>Yet the data I have presented in this article should be seen as perhaps the most favorable view on economic conditions. The Knowledge Capital for large segments of the workforce remains unaccounted for, in areas such as government services, defense, not-for-profit firms and notoriously under-resourced consumer services, not to mention the rising population of part-time employees.</p>

<p>The good news is that the Knowledge Economy is still evolving from relatively backward circumstances. The present is not at the end of history, as a prominent historian claimed recently. It is merely a start-up venture without a clear understanding of where to go.  An ample dose of quantitative humility may be the right medicine for futurists to swallow now, before they plunge ahead with prognostications that lack a balanced view of the realities of economic worth.  </p>

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