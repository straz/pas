var MONTHS = new Array("January", "February", "March",
		       "April", "May", "June", "July",
		       "August", "September", "October",
		       "November", "December");

$(document).ready(init);


var PAGE_TAGS = {'/all-articles.html': 'all'};

function init() {
  if (window.location.pathname == '/articles.html'){
    check_search_change();
    var tag = detect_tag();
    if (tag == '' ) {
      tag = 'all';
    }
    fetch_and_render_articles(tag);
  }
}

function fetch_and_render_articles(tag){
  render_articles(get_articles(tag), tag, true);
}


// if by_years is true, sort and group articles by year
function render_articles(articles, tag, by_years){
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
  update_page_heading(tag);
}

function update_page_heading(tag){
  var heading = tag;
  for (var i in tags){
    var entry = tags[i];
    if (entry['tag']==tag){
      heading = entry['full'];
      break;
    }
  }
  $('.page-heading').text(heading);
}

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
  }
  return '';
}

function render_original(article, ext){
  if (ext != '' && ('original' in article)){
    var link = $('<a/>').text('original').attr('href', article.original);
    return $('<span/>').addClass('extension').append('[',link,']');
  }
  return '';
}

function render_article(article){
  var ext = render_extension(article);
  var original = render_original(article, ext);
  return $('<li/>').append($('<a/>').attr('href', article.url)
			   .addClass('article')
			   .html(article.title),
			   ext, original,
			   $('<br/>'),
			   $('<span/>').attr('class','post-meta')
			   .html(article.desc + ', ' + pretty_date(article)));
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

// returns all articles described by tag
function get_articles(tag){
  console.log('get-articles', tag);
  var result = [];
  for (var i = 0; i < all_articles.length; i++) {
    var article = all_articles[i];
    if (is_member(article, tag)){
      article.date_obj = parse_date(article.date);
      result.push(article);
    }
  }
  return result;
}

// -----------
// Hash change

function detect_tag(){
  return getParameterByName('t');
}

// this change hook is triggered any time the page's hashtag changes
function hash_changed(){
  fetch_and_render_articles(detect_tag());
}

function check_search_change(){
  var storedSearch = window.location.search;
  window.setInterval(function () {
		       if (window.location.search != storedSearch) {
			 storedSearch = window.location.search;
			 search_changed(storedSearch);
		       }
		     }, 100);
}


// install watcher. When hash tag changes, calls the change hook.
function check_hash_change(){
  if ("onhashchange" in window) {
    // event supported?
    window.onhashchange = function () { hash_changed(window.location.hash); };
    } else {
    // event not supported:
    var storedHash = window.location.hash;
    window.setInterval(function () {
			 if (window.location.hash != storedHash) {
			   storedHash = window.location.hash;
			   hash_changed(storedHash);
			 }
			}, 100);
   }
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
function get_blog_rss(callback_name){
  var blogname = 'pstrassmann.blogspot.com';
  var params = {alt: 'json-in-script',
		callback: callback_name,
		'max-results': 9999};
  var url = 'http://'+blogname+'/feeds/posts/default?'+$.param(params);
  $.ajax({type:'GET',
	  dataType:'jsonp',
	  jsonp:'jsonp',
	  url: url});
}

function rss_callback(data){
  $('.blog-posts').html('');
  $.each(data.feed.entry, function(index, item){
	   var title = item.title.$t;
	   var published = item.published.$t;
	   var content = item.content.$t;
	   var link = rss_get_permalink(item);
	   if (title == ''){
	     title = '<i>untitled</i>';
	   }
	   var post = $('<li/>').append(':&nbsp; ',
					$('<a/>').attr('href', link).html(title),
					' ',
					$('<span/>').addClass('extension').text(date_fmt(published))
				       );



	   $('.blog-posts').append(post);
	 });
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

function date_fmt(date){
  var d = new Date(date);
  return d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
}
