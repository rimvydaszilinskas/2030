var window_height = $(window).height();
var window_width = $(window).width();
var main_circle_holder = $(".main-circle-holder");
var main_circle_empty = $("#main-circle-empty");
var level_display1 = $("#level-display-1");
var level_displays = $(".level-display")
var white_circle = $("#white-circle");
var circle_text_holder = $("#circle-text-holder");
var circle_text = $("#circle-text");
var instruction_message_holder = $(".instruction-message-holder");
var instruction_message = $(".instruction-message")

//player elements
var player_rows = $(".player-row");
var player_row_inverted = $("#inverted-player-row");
var level_rows = $(".level-row");
var user_rows = $(".user-row");
var logo_holders = $(".logo-holder");
var user_messages = $(".user-message");
var level_numbers = $(".level-number")

//timer elements
var svg_timer_holder = $("#svg-timer-holder");
var timer_circle = $("#timer-circle");

//constants for the maths
const RotatePerLevel = 21.1764706; // in deg
const ShrinkRatio = 3.1; // at least 3.01

$(document).ready(() => {
  // init code goes here
  var window_height = $(window).height();
  var window_width = $(window).width();
  change();
  // $(".game").show("fast");

  $(".loading").hide("fast");
  // $(".game").show("fast");
});

$(window).resize(() => {
  window_height = $(window).height();
  window_width = $(window).width();
  change();
});

//change the sizes and move the elements according to screen size
function change(){
  // resize the elements based on the screen size
  resizeElements();
  // move elements accordingly
  moveCircle();
  //move the level display
  moveLevelDisplay();
  //move the white circle to hide the unwantd items to be shown
  moveWhiteCircle();
  //move and position elements in the user Row
  positionUserRow();
  //position the timer circle
  positionTimerCircle();
  //position the hidden wheel of fortune
  positionWheelOfFortune();
  //position the main text in the circular area
  positionMainText();
  //position the instruction messages on both sides of the wheel
  positionInstructionMessages();
};

function resizeElements(){
  // resize the empty circle
  var originalWidth = main_circle_empty.width();
  main_circle_empty.width(window_width / ShrinkRatio);
  // calculate the shrink for the further elements resizing
  var shrink = main_circle_empty.width() / originalWidth;
  // resize the level display
  level_displays.each((index, element) => {
    $(element).width($(element).width() * shrink);
  });
  // resize the white circle
  white_circle.width(main_circle_empty.width() * 0.865);
};

function moveCircle(){
  var widthLeft = window_width / 3 - main_circle_empty.width();
  var heightLeft = window_height / 3 - main_circle_empty.height();
  var left = 0;
  var top = 0;

  if(widthLeft > 0){
    left = window_width / 3 + widthLeft / 2;
    if(heightLeft > 0){
      top = window_height / 3 + heightLeft / 2;
    } else if(heightLeft === 0){
      top = window_height / 3;
    } else {
      top = (window_height / 3) - (heightLeft / 2 * (-1));
    }
  }else if(widthLeft === 0){
    // TODO count the required parameters for this case
  }else{
    // TODO count the required parameters for this case
  }

  //change the actual position of the element
  main_circle_holder.css({
    "top" : top,
    "left" : left,
    // "color" : "green"
  });
}

function moveLevelDisplay(){
  var widthLeft = (main_circle_empty.width() - level_display1.width()) / 2;
  level_displays.each((index, element) => {
    var top = level_display1.height() - $(element).height();

    if(parseInt($(element).attr("id").split("-")[2]) >= 7){
      top = main_circle_empty.height() - $(element).height() - top;
      
      $(element).css({
        "top" : top,
      });
    } else {
      $(element).css({
        "top" : top,
      });
    }

  });
  level_displays.css({
    "left" : widthLeft,
  });
}

function moveWhiteCircle(){
  var widthLeft = (main_circle_empty.width() - white_circle.width()) / 2;
  var heightLeft = (main_circle_empty.height() - white_circle.height()) / 2;
  white_circle.css({
    "left" : widthLeft,
    "top" : heightLeft,
  });
}

function positionMainText(){
  var widthLeft = (main_circle_empty.width() - circle_text.width()) / 2;
  var heigthLeft = (main_circle_empty.height() - circle_text.height()) / 2;
  // alert(heigthLeft);
  circle_text.css({
    // "display" : "absolute",
    // "color" : "red",
    "left" : widthLeft,
    "top" : heigthLeft,
  });
}

// position the main instructional area on the sides of the circle
function positionInstructionMessages(){
  var inverted_instruction = $(".instruction-message-holder.inverted");
  var height = ($(window).height() - instruction_message_holder.height()) / 2;
  var left = ($(window).width() / ShrinkRatio - instruction_message_holder.width()) / 2;

  instruction_message_holder.each((index, element) => {
    if($(element).hasClass("inverted")){
      $(element).css({
        "right" : left,
        "top" : height,
      });
    }else {
      $(element).css({
        "left" : left,
        "top" : height,
      });
    }
  });
}

function positionUserRow(){
  //move the level display with arrows
  level_rows.each((index, element) => {
    var padding = $(window).width() / 4;

    $(element).css({
      "margin-left" : padding,
    });
    // alert(padding);
  });

  //move the user message
  user_messages.each((index, element) => {
    var left_padding = ($(window).width() - user_messages.width()) / 2;
    left_padding -= logo_holders.width();
    var padding = (user_rows.height() - user_messages.height()) / 2;
    $(element).css({
      "margin-left" : left_padding,
      "margin-top" : padding,
      "margin-bottom" : padding
    });
    // $(".player-row.inverted").html($(element).html());
  });

  // copy the user message row
  player_row_inverted.html(player_rows.html());
  // console.log($("#inverted-player-row .user-message").html());
}

function positionTimerCircle(){
  var main_circle_width = main_circle_empty.width();
  var center = main_circle_width / 2;
  var radius = center * 0.86;
  var circumference = radius * Math.PI * 2;
  svg_timer_holder.width(main_circle_width);
  svg_timer_holder.height(main_circle_width);
  timer_circle.attr("cx", center).attr("cy", center).attr("r", radius);
  timer_circle.css({
    "stroke-dasharray" : circumference, /* this value is the pixel circumference of the circle */
    "stroke-dashoffset" : circumference,
  });
  initialOffset = circumference;
}

function positionWheelOfFortune(){
  // TODO: insert code here
}
