if (document.images) {
	img01on=new Image();
	img01on.src=imageRoot+"/nav_top_about_on.gif";
	img01off=new Image();
	img01off.src=imageRoot+"/nav_top_about_off.gif";

	img02on=new Image();
	img02on.src=imageRoot+"/nav_top_consulting_on.gif";
	img02off=new Image();
	img02off.src=imageRoot+"/nav_top_consulting_off.gif";
		
	img03on=new Image();
	img03on.src=imageRoot+"/nav_top_crosstalk_on.gif";
	img03off=new Image();
	img03off.src=imageRoot+"/nav_top_crosstalk_off.gif";
	
	img04on=new Image();
	img04on.src=imageRoot+"/nav_top_conference_on.gif";
	img04off=new Image();
	img04off.src=imageRoot+"/nav_top_conference_off.gif";
	
	img05on=new Image();
	img05on.src=imageRoot+"/nav_top_resources_on.gif";
	img05off=new Image();
	img05off.src=imageRoot+"/nav_top_resources_off.gif";
}

function imgon(imgName) {
	if (document.images) {
		document[imgName].src=eval (imgName + "on.src");
	}
}

function openWindow(theURL,winName,features) {
  window.open(theURL,winName,features);
}

function imgoff(imgName) {
	if (document.images) {
		document[imgName].src=eval (imgName +"off.src");
	}
}

function show(dst,rc,w,h){ 
	if(document.images) {
		dst.width=w;
		dst.height=h;
		dst.src=rc;
	} 
} 

