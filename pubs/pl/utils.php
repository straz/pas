<?php

function flipper ($n, $max) {
  $result = "<font size=-1>";
  if ( $n > 1 ) {
    $prev = $n - 1;
    $result .= "<a href=\"idg-$prev.php\">&lt;&lt;</a> ";
  }
  $p = 1;
  while ( $p <= $max) {
    if ($p == $n) {
      $result .= "<font color=gray>[$p]</font> ";
    } else {
      $result .= "<a href=\"idg-$p.php\">[$p]</a> ";
    }
    $p++;
  }
  if ( $n < $max ) {
    $next = $n + 1;
    $result .= "<a href=\"idg-$next.php\">&gt;&gt;</a> ";
  }

  $result .= "</font>\n";
  return $result;
}

?>
