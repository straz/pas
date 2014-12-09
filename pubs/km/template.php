<?php

require("utils.php");

$title = "";
$date = "June, 2000";
$pdate = "6-1-2000";
$coverart = "";
$subhead = "";

$body = "
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