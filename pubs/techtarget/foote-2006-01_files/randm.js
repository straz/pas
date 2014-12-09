function write_script(randnum)
{
	var dynamiclogic_str;
	dynamiclogic_str="<scr"+"ipt language=\"JavaScript1.1\" src=\"http://amch.questionmarket.com/adsc/d170769/5/171175/set_jp_cookie.php?randnum="+randnum+"\">";
	dynamiclogic_str= dynamiclogic_str + "</scr"+"ipt>";
document.write("");
}
var DL_axel = Math.random()+"";
var DL_rand = (DL_axel * 10000000000000)+"";
var DL_dotat=DL_rand.indexOf(".");
var DL_randnum=DL_rand.substring(0,DL_dotat);
write_script(DL_randnum);
