function disclaim() {
	alert("The appearance of hyperlinks does not constitute " +
		"endorsement by the U.S. Air Force of this Web site or the " +
		"information, products, or services contained therein. For " +
		"other than authorized activities such as military exchanges " +
		"and morale, welfare and recreation sites, the U.S. Air Force " +
		"does not exercise any editorial control over the information " +
		"you may find at these locations. Such links are provided " +
		"consistent with the stated purpose of this DoD Web site.")
}

function launchImageWindow (url, imageWidth, imageHeight) {
	imageWidth = imageWidth + 25;
	imageHeight = imageHeight + 35;
	var vertMenuWidth = 25;
	var horizMenuHeight = 30;
	var vertScrollWidth = 40;
	var horizScrollHeight = 40;
	var resizeString = '';
	if (imageWidth > (screen.availWidth - vertMenuWidth)) {
		width = screen.availWidth - vertMenuWidth;
		imageHeight = imageHeight + horizScrollHeight;
		resizeString = 'resizable,scrollbars,';
	} else {
		width = imageWidth;
	}
	if (imageHeight > (screen.availHeight - horizMenuHeight)) {
		height = screen.availHeight - horizMenuHeight;
		resizeString = 'resizable,scrollbars,';
		if (width < (screen.availWidth - vertScrollWidth - vertMenuWidth)) {
			width = width + vertScrollWidth;
		}
	} else {
		height = imageHeight;
	}
	win=window.open(url,'image','height='+height+',width='+width+',nostatus,nomenubar,notitlebar,'+resizeString+'nolocation');
	win.focus();
}


