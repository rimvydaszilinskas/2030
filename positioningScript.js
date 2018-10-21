var window_height = $(window).height();
var window_width = $(window).width();
var main_circle_holder = $(".main-circle-holder");
var main_circle_empty = $("#main-circle-empty");
var level_display1 = $("#level-display-1");
var level_displays = $(".level-display")
var white_circle = $("#white-circle");

//player elements
var player_row = $(".player-row");

//constants for the maths
const RotatePerLevel = 21.1764706; // in deg
const ShrinkRatio = 3.01; // at least 3.01

$(document).ready(() => {
  // init code goes here
  var window_height = $(window).height();
  var window_width = $(window).width();
  change();
  // $(".loading").hide("fast");
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
    "color" : "green"
  });
}

function moveLevelDisplay(){
  var widthLeft = (main_circle_empty.width() - level_display1.width()) / 2;

  level_display1.css({
    "left": widthLeft,
  });

};

function moveWhiteCircle(){
  var widthLeft = (main_circle_empty.width() - white_circle.width()) / 2;
  var heightLeft = (main_circle_empty.height() - white_circle.height()) / 2;
  white_circle.css({
    "left" : widthLeft,
    "top" : heightLeft,
  });
};
