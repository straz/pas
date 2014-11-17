var MONTHS = new Array("January", "February", "March",
		       "April", "May", "June", "July",
		       "August", "September", "October",
		       "November", "December");

$(document).ready(init);


var PAGE_TAGS = {'/all-articles.html': 'all'};

function init() {
  check_hash_change();
  var tag = PAGE_TAGS[window.location.pathname];
  if (tag != undefined ) {
    fetch_and_render_articles(tag);
  }
}

function fetch_and_render_articles(tag){
  render_articles(get_articles(tag), true);
}


// if by_years is true, sort and group articles by year
function render_articles(articles, by_years){
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

  $('ul.toc').html('').append(result);
  add_year_picker(decades, min, max);
}

function get_decade(year){
  return Math.floor(year/ 10) * 10;
}

function add_year_picker(decades, min, max){
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

function render_article(article){
  var pdf = '';
  if ('pdf' in article){
    pdf = $('<span/>').addClass('pdf').text('[pdf]');
  }
  return $('<li/>').append($('<a/>').attr('href', article.url)
			   .html(article.title),
			   pdf,
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
  return true;
}

// returns all articles described by tag
function get_articles(tag){
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

// this change hook is triggered any time the page's hashtag changes
function hash_changed(){
  var tag = window.location.hash.replace('#', '');
  fetch_and_render_articles(tag);
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
