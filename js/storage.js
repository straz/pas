// Data are retrieved from 'articles.json' or 'tag-intros.json' on the server.
//
// These can be loaded into the DOM in two ways
//  a. stored in the client (browser local storage)
//  b. loaded via ajax on every page load
//
// We try (a) where supported by the browser, and use (b) if local storage
// is empty or out of date.


var DEBUG_STORAGE = true; // print to console.log

// KEYS are meta-data describing locally cached datasets.
//
// TAG_INTROS_KEYS describes HTML snippets belonging to a few selected tags
// ARTICLES_KEYS describes the entire database of all articles
//
// keys.render_function signature = (tag, collection)

var TAG_INTROS_KEYS = { local_storage_key : 'tag_intros',
			local_storage_timestamp : 'intro_build_time',
 			ajax_file : 'tag-intros.json',
			ajax_data_key : 'intros',
			name: 'tag_intros',
			render_function: render_tag_intro
		      };

var ARTICLES_KEYS = { local_storage_key : 'articles',
		      local_storage_timestamp : 'article_build_time',
		      ajax_file : 'articles.json',
		      ajax_data_key : 'articles',
		      name: 'articles',
		      render_function: render_filtered_articles
		    };


function debug_console(){
  if (DEBUG_STORAGE){
    console.log.apply(console, arguments);
  }
}


function fetch_and_render_tag_intro(tag){
  if (!has_intro(tag)){
    return;
  }
  fetch_and_render(tag, TAG_INTROS_KEYS);
}

function fetch_and_render_articles(tag){
  fetch_and_render(tag, ARTICLES_KEYS);
}

function fetch_and_render(tag, keys){
  if ((typeof localStorage) != 'undefined') {
    debug_console('get ' + keys.name + ' locally for tag=', tag);
    get_and_render_using_local(tag, keys);
  } else {
    debug_console('get ' + keys.name + ' using ajax for tag=', tag);
    $.get(keys.ajax_file, function(data) {keys.render_function(tag, data[keys.ajax_data_key]);});
  }
}


// Local storage is enabled. Use it to get tag intros.
// First, update local cache if empty or out of date
function get_and_render_using_local(tag, keys){
  if (!localStorage[keys.local_storage_key] ||
      !localStorage[keys.local_storage_timestamp] ||
      (build_time != localStorage[keys.local_storage_timestamp])) {
    //console.log(build_time, localStorage[keys.local_storage_timestamp]);
    debug_console('update ' + keys.name + ' cache with ajax. Tag=', tag);
    $.get(keys.ajax_file, function(data)
	  {
	    localStorage[keys.local_storage_key] = JSON.stringify(data[keys.ajax_data_key]);
	    localStorage[keys.local_storage_timestamp] = data['build']['build_time'];
	    keys.render_function(tag, data[keys.ajax_data_key]);
	  });
  } else {
    debug_console('render ' + keys.name + ' with local storage tag=', tag);
    var collection = JSON.parse(localStorage[keys.local_storage_key]);
    keys.render_function(tag, collection);
  }
}

// returns all articles described by tag
function filter_articles(tag, articles){
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

function render_filtered_articles(tag, articles){
  render_articles(filter_articles(tag, articles), tag, true);
}

function wipe_local_storage(){
  localStorage.clear();
}
