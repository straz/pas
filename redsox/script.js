URL = 'http://sports.yahoo.com/mlb/teams/bos/ical.ics';
CSV = 'schedule.csv';

var TEST = false;
var TEST_DAY = '5/1/15';

// http://localhost:8000/index.html
// python -m SimpleHTTPServer

$(document).ready(setup);

function setup(){
  $.get(CSV, render);
}

function render(data){
  var time = find_game_time(data);
  var msg = '?';
  if (time){
    msg = 'Game today<br>at ' +  time.getHours() + ':' + time.getMinutes();
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

