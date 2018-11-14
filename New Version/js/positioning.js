var main_circle = $(".main-circle");
var player_rows = $(".player-row");
var level_number = $(".level-number");
var user_message = $(".user-text");
var instruction_messages = $(".instruction-message");
var instruction_message_holder = $(".instruction-message-holder");
var circle_text = $("#circle-text");
var circle_img = $("#circle-img");

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
  positionInstructionMessages();
  positionCircleMedia();
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

function positionInstructionMessages(){
  var top = ($(window).height() - instruction_message_holder.height()) / 2;
  var left = ((($(window).width() - main_circle.width()) / 2) - instruction_message_holder.width()) / 2;

  $("#instruction-message-holder-1").css({
    "top" : top,
    "left" : left,
  });

  $("#instruction-message-holder-2").css({
    "top" : top,
    "right" : left,
  });
}

function positionCircleMedia(){
  //resize the image
  circle_img.height(main_circle.height() * 0.2);
  circle_img.width(main_circle.width() * 0.2);

  var top_img = ($(window).height() - circle_img.height()) / 2;
  var left_img = ($(window).width() - circle_img.width()) / 2;
  var top_text = ($(window).height() - circle_text.height()) / 2;
  var left_text = ($(window).width() - circle_text.width()) / 2;
  var max_text_width = main_circle.width() * 0.2;

  circle_img.css({
    "top" : top_img,
    "left" : left_img,
  });

  circle_text.css({
    "max-width" : max_text_width,
    "top" : top_text,
    "left" : left_text,
  });
}
