<?php

require("utils.php");

$title = "Intelligence in Question";
$date = "October, 2000";
$pdate = "10-1-200";
$coverart = "1000-cover.jpg";
$subhead = "There are many ways of assessing the
value of intellectual capital, as a look at one 
well-publicized example shows";

$body = "
<P> Many a book or study about knowledge management mentions Skandia
Insurance Co. of Sweden as the foremost pioneer and most sophisticated
proponent of accounting for the worth of its intellectual capital. As
a consequence of its intensive publicity and its exhaustive coverage
of this topic in its annual reports, Skandia has been widely cited as
an exemplar of what enlightened management ought to do to evaluate the
effectiveness of its human resources. <P>

For instance, this magazine (\"<A
HREF=\"http://www.destinationcrm.com/km/dcrm_km_article.asp?id=110\"
target=\"_blank\">The 1999 KM Year in Review,</A>\" December 1999) listed
Skandia as one of its 30 most mentioned KM practitioners. My own
search of the Web on the keywords \"Skandia\" and \"intellectual capital\"
found 1,066 recent references. The chief proponent of Skandia's
pioneering efforts, Leif Edvinsson, executive vice president, was
honored as Brain of the Year for 1998 by the British Brain Trust
foundation.<P>

Skandia has produced a formidable body of writings about its efforts
to excel in the measurement of the \"intelligence\" of its people.
Prominent among them is the Skandia Navigator business planning model,
which is designed to provide a more balanced picture of its operations
than conventional accounting statements offer. Its methods are
supposed to represent a balance between past, present and future and
to permit the breakdown of Skandia's operational vision and objectives
into factors that can be coupled to an individual's own work.
Skandia's annual reports declare that the investments made in renewing
and developing human, customer and process capital drive its financial
success. The Navigator visualizes this belief and forms the basis for
the company's business planning processes. <P>

Skandia has developed an elaborate framework for describing its
approach, and it is not easy to master. Doing so requires an immersion
in philosophy, metrics and classification. To follow such subtleties,
one must become proficient in using the Skandia Value Scheme. This
mechanism partitions intellectual capital into human capital,
structural capital, organizational capital, customer capital,
innovation capital, culture capital and process capital, as well as
flow-based models in a PC software package called Dolphin and most
importantly the Skandia Intellectual Capital Index. The index
aggregates over 100 variables into groupings such as Relationship
Capital Index, Human Capital Index, Infrastructure Capital Index and
Innovation Capital Index.<P>

A sampling of this collection leads to just about every conceivable
metric, including market share, customers lost, fund assets per
customer, satisfied customer index, number of contracts, number of
fund managers; employee turnover, average years of service, lender
age, number of women in management, empowerment index, change in
company's IT literacy, outpayment processing time, PCs per employee,
laptops per employee, administrative expense per employee, IT expense
per employee and contracts per employee. All of these inputs are
passed through a series of equations that set up relationships such as<br>
Human Capital Base Value = Net Present Value of Five Years Payroll
Costs, or<br>Human Capital Relationship Value = Value-Added per
Employee.<P>

Yet it is never made explicit how all of these mechanisms relate to
company success. The complexity of the system and problems in defining
its terms act as deterrents to verifying Skandia's valuations. After
having satisfied myself as to the comprehensiveness of Skandia's
intellectual concepts, I became curious about their effectiveness.
Does all of this inspirational thinking actually produce demonstrably
superior results?<P>

According to Skandia's documentation, intellectual capital can be
described as the difference between a company's market value and its
book value. Although I disagree with this simplistic formulation (see
\"<A HREF=\"tickertape.html\"
target=\"_blank\">Ticker-Tape Charade</A>,\" November 1999 KMM), I will
use it for the purpose of assessing how well Skandia has been able to
leverage its human resources as compared with its competitors.<P>

I found 113 corporations classified in the same industrial sector as
Skandia. They included comparable insurance companies in Belgium,
Canada, the Netherlands, Norway, Switzerland, the U.K. and the U.S. In
terms of stock-market performance, Skandia has done remarkably well.
If we quantify intellectual capital as the ratio of stock market
valuation divided by the accounting book value, Skandia has moved up
steadily from number 38 in 1996 to number 10 in 1999.<P>

However, if we take the position (as I do) that stock-market
valuations often reflect image rather than substance, a more
trustworthy way of examining the effectiveness of human resources is
to measure their economic contributions, as expressed in terms of the
profit generated per employee. From this point of view, Skandia's
performance is not spectacular. Its rankings fluctuate from 60 to 38
to 76 and back to 36. The graph \"Profit Per Employee\" shows that its
performance has been consistently second-rate since 1990. At no time
in the recent past has it delivered results comparable to the median
profit per employee of its 20 leading competitors.<P>

The dramatic spurt in profit per employee in 1999 attracted my
attention. Was it perhaps a long-hoped-for payoff from having paid
attention to human capital? The answer was surprising, as shown in the
graph \"Total Employment\": Skandia accomplished its gain in profit per
employee largely by cutting employment. In fact, this enterprise that
promotes its dedication to employee values and nurturing of human
capital has achieved much of its financial improvement by divesting
itself of people.<P>

These analyses suggest that before we accept much of the hype about
knowledge management, we should conduct an independent examination of
verifiable results. My take on Skandia is that it has been very
successful in promoting the price of its shares on the stock market.
The extent to which its publicity campaign to be known as a pioneer of
the intellectual capital movement has served that purpose I leave for
you to judge.
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














