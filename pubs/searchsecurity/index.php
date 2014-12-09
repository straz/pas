<html>
<head><title>SearchSecurity.com: articles by Paul Strassmann</title></head>
<body bgcolor=white>

<table border=0 bordercolor=red cellpadding=0 cellspacing=0 width=350 bgcolor=#900000>
<tr><td>
<a href="http://www.searchsecurity.com">
<img src="header-logo-small.gif" alt="SearchSecurity.com" border=0></a>
</td></tr></table>

<h3>Articles by Paul A. Strassmann<br>
at SearchSecurity.com</h3><p>

<table>

  <?php
  require("utils.php");

  $as = array_reverse($articles);

  while (list($index, $a) = each($as)) { 
    echo "\n <tr><td align=right><a href=\"$a[0].php\">$a[2]</a></td>
       <td>$a[3]</td></tr>";
  };

  ?>

</table>
</body>
</html>

