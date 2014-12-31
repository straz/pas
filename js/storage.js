var DEBUG_STORAGE = false;

function debug_console(){
  if (DEBUG_STORAGE){
    console.log.apply(console, arguments);
  }
}
function fetch_and_render_articles(tag){
  if ((typeof all_articles)!= 'undefined') {
    debug_console('get-articles-direct', tag);
    render_articles(filter_articles(all_articles, tag), tag, true);
  } else if ((typeof localStorage) != 'undefined') {
    debug_console('get articles locally', tag);
    get_articles_local(tag);
  } else {
    debug_console('get articles ajax', tag);
    $.get('articles.json', function(data) {render_filtered_articles(data['articles'], tag);});
  }
}

// returns all articles described by tag
function filter_articles(articles, tag){
  var result = [];
  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    if (is_member(article, tag)){
      article.date_obj = parse_date(article.date);
      result.push(article);
    }
  }
  return result;
}

function render_filtered_articles(articles, tag){
  render_articles(filter_articles(articles, tag), tag, true);
}

// Use local storage to render articles
// First, update local cache if missing or out of date
function get_articles_local(tag){
  if (!localStorage.articles || !localStorage.build_time ||
      (build_time != localStorage.build_time)) {
    debug_console('update articles cache with ajax', tag);
    $.get('articles.json', function(data)
	  {
	    localStorage.articles = JSON.stringify(data['articles']);
	    localStorage.build_time = data['build']['build_time'];
	    render_filtered_articles(data['articles'], tag);
	  });
  } else {
    debug_console('render with local storage', tag);
    render_filtered_articles(JSON.parse(localStorage.articles), tag);
  }
}
