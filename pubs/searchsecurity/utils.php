<?php

require("articles.php");


function get_article ($tag, $articles) {
  while (list($index, $a) = each($articles)) { 
    if  ( $a[0] == $tag )  return ($a[0].".php") ;
  };
};

function show_ss_article ( $article ) {
  $title = $article[title];
  $date = $article[date];      // like September, 1999
  $pdate = $article[pdate];    // like 9-1-99
  $coverart = $article[coverart];
  $subhead = $article[subhead];
  $body = $article[body];
 
  $output = "

";
  return $output;
}

function ssecurity_head ($title, $ftitle, $date, $url) {
 $output = "<html>
<head>
<title>$title</title>

<META NAME=description CONTENT=\"$subhead\">
<META NAME=keywords CONTENT=\"information security, cost justification\">


</head>

<body bgcolor=white>

<table border=0 bordercolor=red cellpadding=0 cellspacing=0 width=350 bgcolor=#900000>
<tr><td>
<a href=\"http://www.searchsecurity.com\">
<img src=\"header-logo-small.gif\" alt=\"SearchSecurity.com\" border=0></a>
</td></tr></table>


<table width=50%>
<tr>
   <td align=right valign=top nowrap class=body><b>Source:</b>&nbsp;</td>
   <td width=100% valign=top class=body>By Paul A. Strassmann </td>
</tr>
<tr>
   <td align=right valign=top nowrap class=body><b>Date:</b>&nbsp;</td>
   <td width=100% valign=top class=body>$date</td>
</tr>
<tr>
   <td align=right valign=top nowrap class=body><b>Original:</b>&nbsp;</td>
   <td width=100% valign=top class=body>at <a href=\"$url\">searchSecurity.com</a></td>
</tr>
<tr>
   <td align=right valign=top nowrap class=body>&nbsp;</td>
   <td width=100% valign=top class=body><a href=\"./\">More articles</a> by Paul A. Strassmann at searchSecurity.com</td>
</tr>
</table>
			
<table border=0 cellpadding=0 cellspacing=2 width=480>
  <tr>
   <td width=5 rowspan=99><img src=\"spacer.gif\" width=5 height=1></td>
    <td colspan=2><img src=\"spacer.gif\" width=1 height=15></td>
    <td width=5 rowspan=99><img src=\"spacer.gif\" width=5 height=1></td>
</tr>
  <tr>

<td width=100% colspan=2 valign=top class=body>
<p>
<h2><font face=\"ariel, helvetica\">$ftitle</font></h2> 


<br><p>";

echo $output;


}

$about = "Paul A. Strassmann 
(<a href=\"mailto:paul@strassmann.com\">paul@strassmann.com</a>) 
has served as chief information systems executive started in 1957. 
Since his \"retirement\" in 1993, he has continued engagements in
 matters related to information security.</p>";

function ssecurity_foot ($copyright) {
  global $about;
 $output = "<hr>

<p><b>About the author:</b><p> 
$about
<br>

</td>
</tr>

</table>

<p><p>
<hr>
<font size=-3>Copyright $copyright by Paul Strassmann<br></font><p>

Go back up to the Strassmann, Inc. <a href=\"http://www.strassmann.com\">home page</a>.<p>
<p>
</body>
</html>";
 echo $output;
}


?>