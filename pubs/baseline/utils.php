<?php

function base_url () {
  $base = "http://www.strassmann.com/pubs/baseline";
  /*
  $server = $_SERVER["SERVER_NAME"];
  $dir .= dirname($_SERVER["PHP_SELF"]);
  $this = __FILE__;
  echo ("foo = http://$server$dir  $this<p>");
  */
  return $base;
}

function baseline_header ($title, $author, $date) {
  $base_url = base_url();
  $html = "<html>\n";
  $html .= "<head>\n";
  $html .= "<link rel=stylesheet href=\"$base_url/style.css\">";
  $html .= "</head>\n";
  $html .= "<body bgcolor=white>\n";
  $html .= "<table border=0 width=650>\n";
  $html .= "<tr><td width=50></td><td>\n";
  $html .= "<table>
<tr valign=bottom><td><a href=\"http://www.baselinemag.com\">
<img src=$base_url/bl_publogo2.gif width=231 height=85 alt=\"Baseline Magazine\" border=0>
</a></td><td>Baseline Magazine<br>$date</td></tr></table>\n";
  $html .= "<h2>$title</h2>\n";
  $html .= "<div class=author>by $author";
  $html .= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  $html .= "<a href=\".\">(more Baseline articles)</a></div>";
  return $html;
}

function baseline_footer () {
  $html = "</td></tr></table>\n";
  $html .= "</body>\n";
  return $html;
}

function input_box ( $name, $pname ) {
  $base_url = base_url();
  $html = "<br>\n<img src=\"$base_url/pix/grn_arrow.gif\">\n";
  $html .= "<input type=text name=$name size=14 value=\"\" onKeyUp=\"IPCalc(this.form)\" onFocus=\"select()\">\n";
  $html .= "<font class=inputlabel><b>$pname</b></font>";
  return $html;
}

function output_box ( $name, $pname ) {
  $base_url = base_url();
  $html = "<br>&nbsp;&nbsp;&nbsp;&nbsp;<input readonly type=text name=$name size=14 value=\"\" onFocus=\"select()\">\n";
  $html .= "\n<img src=\"$base_url/pix/yellow_arrow.gif\">\n";
  $html .= "<font class=inputlabel><b>$pname</b></font>";
  return $html;
}


?>