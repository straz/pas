<?php

require("utils.php");

$title = "Sidebar-WINNERS AND LOSERS";
$date = "March, 2000";
$pdate = "3-1-2000";
$coverart = "0300-cover.gif";
$subhead = "Despite claims to the contrary, ownership of
 Knowledge Capital is highly concentrated";

$body = "
<p><a href=\"2000-3.php\">back to <b>Main Article:<br>
The Importance of Knowledge Capital</b></a><p>

<p>These findings reveal a gulf in the knowledge economy:</p>


<ol>

<li>The top 100 firms among the 7,288 accumulated $5.6 trillion of
Knowledge Capital of the total of $6.4 trillion or 88 percent of the
total. These were all giant firms. This imbalance contradicts the
popular theory that small firms account for the creation of new
Knowledge Capital in the new economy. In fact, the large still rule
wherever we look.

<p> 
<li>There were 3,917 firms (almost 54 percent of the total) whose
Knowledge Capital was negative. In other words, they were worth less
than their accounting valuations and worth more on paper than if they
were auctioned off at \"book value.\" The sum of their negative
Knowledge Capital was $2.0 trillion or 36 percent of the worth of the
top 100 Knowledge Capital creators. This condition offers a strong
argument against the proposition that the U.S. economy&#151;during a
period of unprecedented prosperity&#151;may be approaching its
capacity to generate wealth. Over half of the listed corporations
appear to be searching for the bonanza of the new economy without
finding it.

<p>
<li>Translating these statistics into human terms, we discover
enormous waste. The 3,917 firms with negative Knowledge Capital
employed a total of 10.8 million persons or roughly 30 percent of the
total number of employees in our sample. The average losing firm
employed 2,757 people, and each of them was a liability, contributing
negative Economic Value Added to the economy.

<p> 
<li>Contrast the Knowledge Capital poverty of the losers with that
of the top 100 Knowledge Capital creators. Those firms employed 7.3
million persons or an average staff of 73,000. The Knowledge Capital
per employee was worth $774,400. Each employee was a source of wealth
in excess of the worth of his or her compensation.  </ol>


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