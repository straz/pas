$(document).ready(debug_if_online);

var DEBUG_URL = 'http://0.0.0.0:8000';

function debug_if_online(){
  if (document.location.host == "0.0.0.0:4000"){
    $.get(DEBUG_URL, check_links)
     .fail(function(){ console.log('not running');});
  }
}

function check_links(result){
  if (result != 'root!'){
    console.log('error: got something other than root: ', result);
    return;
  }
  console.log('debug is running');
  var counter = 0;
  $('a.article').each(function(i, link) {
					label_link(link);
		      });

  $('a.article').each(function(i, link) {
		counter++;
		check_link(link, counter);
	      });
  //$.get('http://0.0.0.0:8000/hey', ajax_check);
  $('ul.toc').append($('<li/>').addClass('count')
		               .text($('a.article').length + ' articles'));
}

function check_link(link, i){
  if (i>999){
    return;
  }
  var link_id = 'link'+i;
  $(link).attr('id', link_id);
  var url = $(link).attr('href');
  if (url != undefined){
    $(link).prepend($('<img/>').attr('src', '/assets/spinner.gif'));
    $.post(DEBUG_URL + '/post',
	   {link_id: link_id, url: url},
	   ajax_check);
  }
}


function label_link(link){
  var label = classify_link(link);
  $(link).addClass('origin_' + label);
}

// can be 'pubs', 'str', 'local', or 'other'
function classify_link(link){
  var host = $(link).get(0).hostname;
  if (host == '0.0.0.0'){
    return 'local';
  } else if (host == 'strassmann.com'){
    return 'str';
  } else if (host == 'pubs.strassmann.com'){
    return 'pubs';
  } else {
    return 'other';
  }
}

function ajax_check(data, status){
  var val = JSON.parse(data);
  var link = $('#'+val['link_id']);
  link.parent('li').find('img').remove();
  if (val.result == true) {
    $(link).prepend($('<img/>').attr('src', '/assets/greendot.png'));
  } else {
    $(link).prepend($('<img/>').attr('src', '/assets/reddot.png'));
  }
}
