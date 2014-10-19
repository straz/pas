var MONTHS = new Array("January", "February", "March",
		       "April", "May", "June", "July", "August", "September",
		       "October", "November", "December");

$(document).ready(init);


function init() {fetch_and_render_articles('');}

function fetch_and_render_articles(tag){
  render_articles(get_articles(tag), true);
}

function render_articles(articles, by_years){
  var result = [];
  var year = -1;
  if (by_years){
    sort_by_date(articles);
  }
  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    var date = article.iso_date;
    var new_year = new Date(date).getFullYear();
    if (by_years && (new_year != year)) {
      year = new_year;
      result.push($('<h2/>').text(new_year));
    }
    result.push(render_article(article));
  }
  $('ul.toc').append(result);
}

function render_article(article){
  return $('<li/>').append($('<a/>').attr('href', article.url)
			   .html(article.title),
			   $('<br/>'),
			   $('<span/>').attr('class','post-meta')
			   .html(article.desc + ', ' + get_date(article)));
}

function get_date(article){
  var date = new Date(article.iso_date);
  return MONTHS[date.getMonth()] + ' ' + date.getFullYear();
}

function is_member(article, tag){
  return true;
}

function get_articles(tag){
  var result = [];
  for (var i = 0; i < all_articles.length; i++) {
    var article = all_articles[i];
    if (is_member(article, tag)){
      result.push(article);
    }
  }
  return result;
}

function sort_by_date(array){
  array.sort(function(a,b){
	       return new Date(b.date) - new Date(a.date);
	     });
}
