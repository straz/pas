var MONTHS = new Array("January", "February", "March",
		       "April", "May", "June", "July",
		       "August", "September", "October",
		       "November", "December");

// Associate each page with its own init function
var INIT_FUNCTIONS  = {'/articles.html' : init_articles,
		       '/blog-posts.html' : show_blogs};


$(document).ready(init);

function init() {
  for (var key in INIT_FUNCTIONS){
    if (window.location.pathname == key){
      var init_function =  INIT_FUNCTIONS[key];
      init_function();
    }
  }
}

function init_articles() {
  var tag = detect_tag();
  if (tag == '' ) {
    tag = 'all';
  }
  fetch_and_render_articles(tag); // defined in storage.js
}


// if by_years is true, sort and group articles by year
function render_articles(articles, tag, by_years){
  update_page_heading(tag);
  var result = [];
  var year = -1;
  var decades = {};
  if (by_years){
    sort_by_date(articles);
  }
  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    var date = parse_date(article.date);
    var new_year = date.getFullYear();
    if (by_years && (new_year != year)) {
      year = new_year;
      result.push($('<h2/>').append($('<a/>').attr('name', new_year).text(new_year)));
    }
    var decade = get_decade(year);
    if (!(decade in decades)){
      decades[decade] = 0;
    }
    decades[decade] += 1;
    result.push(render_article(article));
  }
  var first = parse_date(articles[0].date);
  var last = parse_date(articles[articles.length - 1].date);
  var max = get_decade(first.getFullYear());
  var min = get_decade(last.getFullYear());

  // retro - huh?
  $('ul.toc').html('');
  $.each(result, function(i, r){
	   $('ul.toc').append(r);});
  add_year_picker(decades, min, max);
}

// 'tags' is defined globally in articles.html, in a <script> tag
function update_page_heading(tag){
  var heading = tag;
  var entry = get_tag(tag, tags);
  if (entry && entry.full){
    heading = entry.full;
  }
  $('.page-heading').text(heading);
  fetch_and_render_tag_intro(tag); // defined in storage.js
}

// case-insensitive lookup of tag
// returns tag object if found
// returns null if not found
function get_tag(tag, collection){
  var entry = null;
  for (var t in tags) {
    if (collection[t].tag.toLowerCase() == tag.toLowerCase()) {
      entry = collection[t];
      break;
    }
  }
  return entry;
}

// tags is a javascript global var loaded from tags.yml into articles.html
// returns true if tags.yml contains intro:true flag for this tag.
function has_intro(tag){
  var entry = get_tag(tag, tags);
  return (entry != null) && entry.intro;
}

// tag is the tag to render
// table is a table of {tag: html_snippet, ..}

function render_tag_intro(tag, table){
  var itag = tag.toLowerCase();
  if (!(itag in table)){
    $('.tag-intro').css('display', 'none').html('');
  }
  $('.tag-intro').html(table[itag]).css('display', 'block');
}

// ------------------------------------------
function get_decade(year){
  return Math.floor(year/ 10) * 10;
}

function add_year_picker(decades, min, max){
  if (min == max){
    return;
  }
  $('.years').html('');
  for (var d = max; d >= min; d--) {
    if (d in decades){
      $('.years').append($('<a/>').attr({href: '#'+min_year(d)}).html(d + "&rsquo;s"));
   }
  }
}

// decade is a year like 1960
// returns the earliest year anchor (on the page, e.g. <a name="1962">) in the given decade
function min_year(decade) {
  var min = 9999;
  $('a').each(function(i, elt) {
		var year = $(elt).attr('name');
		if (year != undefined &&
		    get_decade(year) == decade &&
		    year < min){
		  min = year;
		}
	       }
	      );
  return min;
}

// Returns the empty string for most links (.html)
// but for ppt|pdf|doc, returns a <span/> containg the exension.
function render_extension(article){
  var reg = /ppt|pdf|doc|xls|mp3/;
  var url = article.url;
  var ext = url.substr(url.lastIndexOf('.') + 1);
  if (reg.test(ext.toLowerCase())){
    return $('<span/>').addClass('extension').text('['+ext+']');
  } else if (is_vimeo(url)){
    return $('<span/>').addClass('extension').text('[video]');
  } else if (is_youtube(url)){
    return $('<span/>').addClass('extension').text('[youtube]');
  }
  return '';
}

function is_vimeo(url){
    var parser = document.createElement('a');
    parser.href = url;
    return parser.hostname.indexOf('vimeo.com') != -1;
}

function is_youtube(url){
    var parser = document.createElement('a');
    parser.href = url;
    return parser.hostname.indexOf('youtube.com') != -1 ||
	   parser.hostname.indexOf('youtu.be') != -1;
}

function render_original(article, ext){
  if (ext != '' && ('original' in article)){
    var link = $('<a/>').text('original').attr('href', article.original);
    return $('<span/>').addClass('extension').append($('<i/>').html(link));
  }
  return '';
}

function render_article(article){
  var ext = render_extension(article);
  var original = render_original(article, ext);
  var date = pretty_date(article);
  if ('render_date' in article){
    date = article.render_date;
  }
  return $('<li/>').append($('<a/>').attr('href', article.url)
			   .addClass('article')
			   .html(article.title),
			   ext, original,
			   $('<br/>'),
			   $('<span/>').attr('class','post-meta')
			   .html(article.desc + ', ' + date));
}

//-------------
// Dates

// date is a string like '2014-5' or '2014-5-31'
function parse_date(date){
  var val = date.split('-'),
      year = parseInt(val[0], 10),
      month = parseInt(val[1], 10) - 1,
      day = parseInt(val[2], 10);
 if (isNaN(day)){
   day = 1;
 }
 return new Date(year, month, day, 0, 0, 0);
}

// returns something like 'January 2005'
function pretty_date(article){
  var date = article.date_obj;
  return MONTHS[date.getMonth()] + ' ' + date.getFullYear();
}

function sort_by_date(array){
  array.sort(function(a,b){
	       return b.date_obj - a.date_obj;
	     });
}

// Date is an ISO date string like '2010-05-01T18:29:00.000-04:00'
// returns 5/1/2010, or equivalent in browser's own locale
function date_fmt(date){
  var d = new Date(date);
  try {
    var lang = get_user_lang();
    return d.toLocaleDateString(lang);
  } catch (e) {
    console.log('err in date_fmt', e);
    return (1+d.getMonth()) + '/' + d.getDate() + '/' + d.getFullYear();
  }
}

// tries to figure out what language the user's browser is using
function get_user_lang(){
  return navigator.languages || navigator.language || navigator.userLanguage;
}

// ------------
// Tags

// returns true if tag describes article
function is_member(article, tag){
  if (tag == 'all'){
    return true;
  }
  for (var key in article){
    var field = article[key].toString();
    var needle = tag.toLowerCase();
    if (field == undefined){
      continue;
    }
    if (field.toLowerCase().indexOf(needle) != -1) {
      return true;
    }
  }
  return false;
}

function detect_tag(){
  return getParameterByName('t');
}


function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//-----RSS-----------
//
// https://developers.google.com/blogger/code
// https://developers.google.com/gdata/samples/blogger_sample
// paging capped to 150 items per API call
const START_BLOCKS = [0, 150, 300, 450, 600, 750]
var LOADING = [];

function show_blogs(){
    var blogname = 'www.pstrassmannblogspot.org';
    var params = {alt: 'json-in-script',
		  'max-results': 150};
    // kick off a bunch of ajax calls, one per block of 150 posts
    $.each(START_BLOCKS, function(i, start){
	params['start-index'] = start+1; // start at 1, not 0
	url = 'https://'+blogname+'/feeds/posts/default?'+$.param(params);
	$.ajax({type:'GET',
		dataType:'jsonp',
		jsonp:'callback',
		success: function(data){
		    rss_callback(i, data);
		    check_done(i)
		},
		url: url});
	LOADING.push(i);
    });
}

function check_done(i){
    // remove i from LOADING
    LOADING = LOADING.filter(function(value, index, arr){
	return value != i;
    });
    // hide spinner when all pending jobs are done
    if (LOADING.length == 0){
	var count = $('.blog-posts .year li').length;
	$('.blog-posts').append($('<li/>').addClass('count').text(count + ' posts'));
	sort_posts();
	$('.loading').hide();
	console.log('done!');
    }
}

function sort_posts(){
    $('.blog-posts .year').each(function(i, year){
	var posts = $(year).children('li');
	[].sort.call(posts, function(a, b) {
	    adate = new Date($(a).attr('date'));
	    bdate = new Date($(b).attr('date'));
	    return a = b;
	});
	$(posts).each(function(){
	    $(year).append(this);
	});
    });
}

// year is an integer
function post_year(year, posts){
    var yeardiv = $('#Y'+year);
    if (yeardiv.length==0){
	yeardiv = $('<div/>').attr({id: 'Y'+year, year: year}).addClass('year');
	yeardiv.append($('<div/>').text(year));
	$(posts).each(function(j, post) {yeardiv.append(post)});
    }
    var yeardivs = $('.blog-posts .year');
    if (yeardivs.length == 0) {
	$('.blog-posts').append(yeardiv.append(posts));
    } else {
	yeardivs.each(function(i, item){
	    var pos = $(item).attr('year');
	    if (pos == year){
		// merge posts
		$(posts).each(function(j, post) {$(item).append(post)});
		return false;
	    } else if (pos < year) {
		$(item).before(yeardiv);
		return false;
	    } else {
		console.log('ERROR, failed to position', year);
	    }
	});
    }
}

function rss_callback(n, data){
    if (typeof data.feed.entry == 'undefined') return;
    var years = {}
    $.each(data.feed.entry, function(index, item){
	var title = item.title.$t;
	var published = item.published.$t;
	var pubYear = new Date(published).getFullYear();
	var content = item.content.$t;
	var link = rss_get_permalink(item);
	if (title == ''){
	    title = '<i>untitled</i>';
	}
	var post = $('<li/>').append(
	    $('<a/>').attr('href', link).html(title),
	    ' ',
	    $('<span/>').addClass('extension').text(date_fmt(published))
	);
	post.attr('date', date_fmt(published));
	if (typeof years[pubYear] == "undefined"){
	    years[pubYear] = []
	}
	years[pubYear].push(post);
    });
    for (y in years){
	post_year(y, years[y]);
    }
}

function rss_get_permalink(item){
  var result = undefined;
  $.each(item.link, function(index, link){
	   if (link.rel == 'alternate'){
	     result = link.href;
	     return false;
	   }
	 });
  return result;
}

