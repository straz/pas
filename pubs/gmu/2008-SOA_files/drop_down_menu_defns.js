HM_DOM = (document.getElementById) ? true : false;
HM_NS4 = (document.layers) ? true : false;
HM_IE = (document.all) ? true : false;
HM_IE4 = HM_IE && !HM_DOM;
HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
HM_IE4M = HM_IE4 && HM_Mac;
HM_Opera = (navigator.userAgent.indexOf("Opera")!=-1);
HM_Konqueror = (navigator.userAgent.indexOf("Konqueror")!=-1);

HM_IsMenu = !HM_Opera && !HM_Konqueror && !HM_IE4M && (HM_DOM || HM_NS4 || HM_IE4);

HM_BrowserString = HM_NS4 ? "NS4" : HM_DOM ? "DOM" : "IE4";

if(window.event + "" == "undefined") event = null;
function HM_f_PopUp(){return false};
function HM_f_PopDown(){return false};
popUp = HM_f_PopUp;
popDown = HM_f_PopDown;


HM_GL_MenuWidth          = 120;
HM_GL_FontFamily         = "Verdana,Helvetica,Arial,sans-serif";
HM_GL_FontSize           = 8;
if (HM_NS4 && HM_Mac) HM_GL_FontSize  = 9;
HM_GL_FontBold           = false;
HM_GL_FontItalic         = false;
HM_GL_FontColor          = "#330066";
HM_GL_FontColorOver      = "white";
HM_GL_BGColor            = "#ccccff";
HM_GL_BGColorOver        = "#663399";
HM_GL_ItemPadding        = 3;

HM_GL_BorderWidth        = 1;
HM_GL_BorderColor        = "#9966cc";
HM_GL_BorderStyle        = "solid";
HM_GL_SeparatorSize      = 1;
HM_GL_SeparatorColor     = "#000000";

//HM_GL_ImageSrc           = "../graphics/menu_arrow.gif";
HM_GL_ImageSrc           = null;
HM_GL_ImageSrcLeft       = null;
//HM_GL_ImageSrcOver		 = "/graphics/clear.gif";;
HM_GL_ImageSrcLeftOver   = null;

HM_GL_ImageSize          = 5;
HM_GL_ImageHorizSpace    = 5;
HM_GL_ImageVertSpace     = 5;

HM_GL_KeepHilite         = true;
HM_GL_ClickStart         = false;
HM_GL_ClickKill          = 0;
HM_GL_ChildOverlap       = 40;
HM_GL_ChildOffset        = 10;
HM_GL_ChildPerCentOver   = null;
HM_GL_TopSecondsVisible  = .75;
HM_GL_ChildSecondsVisible = .75;
HM_GL_StatusDisplayBuild = 0;
HM_GL_StatusDisplayLink  = 1;
//HM_GL_UponDisplay        = null;
//HM_GL_UponHide           = null;

//HM_GL_RightToLeft        = true;
//HM_GL_CreateTopOnly      = true;
HM_GL_CreateTopOnly      = false;
//HM_GL_CreateTopOnly      = HM_NS4 ? true : false; // was: true
HM_GL_ShowLinkCursor     = true;

function popupToUrl(name, url, width, height) {
	if (typeof(height) == "undefined") {
		var height = "200";
	}
	if (typeof(width) == "undefined") {
		var width = "400";
	}
	var settings = "titlebar=no,toolbar=no,location=no,directories=no," +
				"status=no,menubar=no,scrollbars=yes," +
				"resizable=no,width=" + width + ",height=" + height +
				"screenX=100,screenY=100";
					
	window.open(url, name , settings);
}

if(HM_IsMenu) {
	

/* About Us */
HM_Array1 = [
[100,              	   // menu width
250-100,	           // left_position
15,             	   // top_position
,             	       // font_color
,              		   // mouseover_font_color
,			  	       // background_color VIRTUAL
,             		   // mouseover_background_color
,            		   // border_color
,                      // separator_color
,                      // top_is_permanent
,                      // top_is_horizontal
,                      // tree_is_horizontal
,                      // position_under
,                      // top_more_images_visible
,                      // tree_more_images_visible
,					   // evaluate_upon_tree_show
,					   // evaluate_upon_tree_hide
,					   // right_to_left
],					   // display_on_click
["Consulting Svcs","javascript:top.location='/about/consulting_services.html'",1,0,0],
["CrossTalk","javascript:top.location='/about/crosstalk.html'",1,0,0],
["Conference","javascript:top.location='/about/conference.html'",1,0,0],
["Customers","javascript:top.location='/about/customers.html'",1,0,0], 
["Contact Us","javascript:top.location='/about/info.html'",1,0,0],
["Site Map","javascript:top.location='/about/sitemap.html'",1,0,0]
]

/* Consulting Services */
HM_Array2 = [
[150,374-150,15,,, ,,,,,,,,,,,,,],
["CMMI","javascript:top.location='/consulting/cmmi/'",1,0,0],
["SW Estimation","javascript:top.location='/consulting/sw_estimation/estimation.html'",1,0,0],
/*["SW Acquisition","javascript:top.location='/consulting/sw_acquisition/'",1,0,0],*/
["Proc Improvement","javascript:top.location='/consulting/proc_improv/'",1,0,0],
["Project Mgmt","javascript:top.location='/consulting/project_mgt/'",1,0,0],
["Configuration Mgmt","javascript:top.location='/consulting/configuration_mgt/'",1,0,0],
/* ["SW Test Engineering","javascript:top.location='/consulting/sw_testing/'",1,0,0], */
["Sys Eng & Development","javascript:top.location='/consulting/system_engg/'",1,0,0],
["SW Measurement","javascript:top.location='/consulting/sw_measurement/'",1,0,0],
["SW Quality Engineering","javascript:top.location='/consulting/sw_quality_engg/'",1,0,0],
["Tech Adoption Svcs","javascript:top.location='/consulting/tech_adoption/'",1,0,0]
]

/* CrossTALK */
HM_Array3 = [
[110,448-100,15,,,,,,,,,,,,,,,,],
["About CrossTalk","javascript:top.location='/crosstalk/about.html'",1,0,0],
["Current Issue","javascript:top.location='/crosstalk/'",1,0,0],
["Subscription","javascript:top.location='/crosstalk/subscribe.html'",1,0,0],
["Theme Calendar","javascript:top.location='/crosstalk/theme.html'",1,0,0],
["Author Guidelines","javascript:top.location='/crosstalk/author.html'",1,0,0],
["Back Issues","javascript:top.location='/crosstalk/2003/index.html'",1,0,0],
["Article Index","javascript:top.location='/crosstalk/2003/articles.html'",1,0,0],
["Your Comments","javascript:top.location='/crosstalk/comments.html'",1,0,0]
]

/* Conference */
HM_Array4 = [
[100,525-100,15,,,,,,,,,,,,,,,]
]

/* Resources */
HM_Array5 = [
[110,607-100,15,,,,,,,,,,,,,,,],
["Seminars","javascript:top.location='/resources/seminars/'",1,0,0],
["Events", "javascript:top.location='/resources/events/'",1,0,1],
["Technical Docs","javascript:top.location='/resources/tech_docs/'",1,0,0],
["Web Sites","javascript:top.location='/resources/useful.html'",1,0,0],
["FAQ","javascript:top.location='/resources/faq.html'",1,0,0],
["Help Desk","javascript:top.location='/resources/helpdesk.html'",1,0,0]

]


//---------end writeJSleftMenusDefFast-----------------
var topIsPermanent = 0;

//---------end writeJSleftMenusDefFast-----------------
	document.write('<scr' + 'ipt language="JavaScript1.2" src="'+menuRoot+'/HM_Script'+ HM_BrowserString +'.js" type="text/javascript"></scr' + 'ipt>');
}
