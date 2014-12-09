<?php

require("articles.php");


function get_article ($tag, $articles) {
  while (list($index, $a) = each($articles)) { 
    if  ( $a[0] == $tag )  return ($a[0].".php") ;
  };
};

function show_km_article ( $article ) {
  $title = $article[title];
  $date = $article[date];      // like September, 1999
  $pdate = $article[pdate];    // like 9-1-99
  $coverart = $article[coverart];
  $subhead = $article[subhead];
  $body = $article[body];
 
  $output = "<HTML>
<HEAD>
<TITLE>$title</title>
<META Name=description Content=\"$subhead\">
<META Name=keywords Content=\"knowledge, management, culture, intelligence, e-business, supply-chain management, continuous change\">
</head>

<body bgcolor=white>

<br>
<center>
<table width=463 cellpadding=5 cellspacing=0 border=0>
 <tr valign=top>
 <td align=center>
<a href=\"http://www.destinationcrm.com/km/dcrm_km_index.asp?ed=$pdate\" target=\"_top\">
<img src=$coverart border=0><br><br>
<font color=\"#000000\" face=\"arial, helvetica, sans-serif\" size=1>
$date</a><br><br>
<a href=\"http://www.destinationcrm.com/dcrm_sb_km.asp\" target=_top>subscribe</a><br><br>
<a href=\"mailto:editor@kmmag.com?subject=";

  $output .= htmlentities($title);
  $output .= "\">e-mail the editor</a><br><br>
<a href=\"./\">More KM articles<br>by Paul Strassmann</a><br><br>
</font>
 </td>
 <td>
<font color=\"#000000\" face=\"arial, helvetica, sans-serif\">

<h2>$title</h2>

<h3>$subhead</h3>

<B>By Paul A. Strassmann</B>

<p><img src=\"pas.gif\" align=right>

$body

<hr noshade=100%>

<p>Paul A. Strassmann originated the trademarked concepts 
\"information productivity\", \"return-on-management\" and \"knowledge capital.\"

 </td>
 </tr>
</table>
</center>

<br>

<p><FONT SIZE=-2>&copy; 2001 Freedom Technology Media Group</FONT>


</BODY></HTML>
";
  return $output;
}



?>