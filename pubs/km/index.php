<html>
<head>
  <title>Knowledge Management Magazine: articles by Paul Strassmann</title>
  <link rel=stylesheet href="../../style.css">
</head>
<body bgcolor=white>

<?php 
require("../../utils.php");
echo draw_navbar ($articles);
?>

<center>
<!-- used to be http://www.kmmag.com -->
<a href="http://www.destinationcrm.com/km/dcrm_km_past.asp">
<img src=kmmag-logo.gif alt="Knowledge Management Magazine" border=0></a>

<h3>Articles by Paul A. Strassmann<br>
in Knowledge Management Magazine</h3><p>


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
<p>
&nbsp;
<p>
</center>
</body>
</html>

