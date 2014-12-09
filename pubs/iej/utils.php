<?php

//require("articles.php");

function get_article ($tag, $articles) {
  while (list($index, $a) = each($articles)) { 
    if  ( $a[0] == $tag )  return ($a[0].".php") ;
  };
};

function show_iej_article ( $article ) {
  $title = $article[title];
  $date = $article[date];      // like September, 1999
  $pdate = $article[pdate];    // like 9-1-99
  $coverart = $article[coverart];
  $subhead = $article[subhead];
  $body = $article[body];
 
  $output = <<<END
<HTML>
<HEAD>
<TITLE>$title</title>
<META Name=description Content="$subhead">
</head>

<body bgcolor=white>

<br>
<center>
<table width=400 cellpadding=5 cellspacing=0 border=0>
 <tr valign=top>
 <td align=center><a href="http://www.informationeconomicsjournal.com" target="_top">
  <img src=$coverart border=0><br>$date</a><br></font>
   </td>
 <td width=380>

<h2>$title</h2>
<B>By Paul A. Strassmann</B>
<p><img src="pas.gif" align=right>
<br>
<blockquote><b>$subhead</b></blockquote>


$body
<hr>
<p>Paul Strassmann is a member of the editorial board of the <a href="http://www.informationeconomicsjournal.com">Information Economics Journal</a><p>


 </td>
 </tr>
</table>

</center>

<br>

<p><FONT SIZE=-2>&copy; 2003 Butler Group, Inc.</FONT>

</BODY></HTML>

END;

  return $output;
}

?>