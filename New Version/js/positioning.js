var main_circle = $(".main-circle");
var player_rows = $(".player-row");
var level_number = $(".level-number");
var user_message = $(".user-text");

var ratio = 3.01;

$(document).ready(() => {
  // init code goes here
  change();
  // $(".game").show("fast");
  // $(".game").show("fast");
});

$(window).resize(() => {
  change();
});

function change(){
  changeCircle();
  changePlayerRows();
}

function changeCircle(){
  //resize the circle
  main_circle.width($(window).width() / ratio);
  //move to the appropriate location
  var leftSpace = ($(window).width() - main_circle.width()) / 2;
  var topSpace = ($(window).height() - main_circle.height()) / 2;

  main_circle.css({
    "left" : leftSpace,
    "top" : topSpace,
  });
}

function changePlayerRows(){
  positionButtons();
  positionUserMessage();
}

function positionButtons(){
  var margin = level_number.height() - $(".level-btn").height();

  $(".level-btn").css({
    "margin-bottom" : margin,
  });
}

function positionUserMessage(){
  var left = ($(window).width() - user_message.width() - $(".level-holder").width() * 2 - 50) / 2;

  user_message.css({
    "padding-left" : left,
  });
}
