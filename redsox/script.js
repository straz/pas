// Uses home games schedule, copied from
// http://mlb.mlb.com/soa/ical/schedule.csv?home_team_id=111&season=2015

var CSV = 'schedule.csv';

// Use for testing
var TEST = false;
var TEST_DAY = '5/1/15';

// python -m SimpleHTTPServer
// http://localhost:8000/index.html

$(document).ready(init);

function init(){
  $.get(CSV, render);
}

function render(data){
  var time = find_game_time(data);
  var msg = '?';
  if (time){
    msg = 'Game today<br>at ' +  time_to_12hr(time);
    $('#game').addClass('on');
  } else {
    msg = 'No game today';
    $('#game').addClass('off');
  }
  $('#game').html(msg);
}


// If today is a game day, return game time, else return false
function find_game_time(data){
  var rows = data.split('\n');
  var n = rows.length;
  var today = new Date();
  if (TEST) {
    today = new Date(TEST_DAY);
  }
  for (var i = 1; i < n; i++) {
    var row = rows[i];
    if (row.length == 0){
      break;
    }
    row = row.split(',');
    var date = parse_date(row[0], row[1]);
    if (equal_dates(today, date)){
      return date;
    }
  }
  return false;
};

// returns formatted time, e.g. '1:17pm'
function time_to_12hr (date){
  var spec = {hour: '2-digit', minute:'2-digit'};
  return date.toLocaleTimeString(navigator.language, spec)
             .toLowerCase().replace(' ', '');
}

// returns true if d1 is on the same day as d2. (ignores time)
function equal_dates(d1, d2){
  return (d1.getDay()==d2.getDay() &&
	  d1.getMonth()==d2.getMonth() &&
	  d1.getYear()==d2.getYear());
}

// input: "02/27/14", "01:05 PM"
// output: Thu Feb 27 2014 13:05:00 GMT-0500 (EST)
function parse_date(date, time){
  var dvals = date.split('/');
  var tvals = time.split(':');
  var mvals = time.split(' ');
  var hr = parseInt(tvals[0]);
  var ampm = mvals[1];
  if (ampm == "PM"){
    hr = hr + 12;
  }
  var d = new Date('20'+dvals[2], parseInt(dvals[0])-1, dvals[1],
		   hr, parseInt(tvals[1]), 0, 0, 0);
  return d;
}
