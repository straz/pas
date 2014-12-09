
function DL_write_script()
{
        var axel = Math.random()+"";
        var rand = (axel * 10000000000000)+"";
        var dotat=rand.indexOf(".");
        var randnum=rand.substring(0,dotat) + 'd' + new Date().valueOf();

	if (document.createElement && document.getElementsByTagName) {
	        var script = document.createElement('script');
	        script.src = "http://amch.questionmarket.com/adsc/d170769/5/171174/decide.php?randnum="+randnum;
		script.type = 'text/javascript';	
		if (document.getElementsByTagName('head').length > 0) {
        		document.getElementsByTagName('head').item(0).appendChild(script);
		}
	}

}

if (window.addEventListener) { // DOM Level 2 event model
  window.addEventListener("load", DL_write_script, false);
} else if (window.attachEvent) { // IE 5+
  window.attachEvent("onload", DL_write_script);
}

