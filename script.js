var window_height = $(window).height();
var window_width = $(window).width();
var main_circle_holder = $(".main-circle-holder");
var main_circle_empty = $("#main-circle-empty");
var level_display = $("#level-display");

$(document).ready(() => {
  // init code goes here
  change();
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
};

function resizeElements(){
  // resize the empty circle
  var originalWidth = main_circle_empty.width();
  main_circle_empty.width(window_width / 4);
  var shrink = main_circle_empty.width() / originalWidth;
  level_display.width(level_display.width() * shrink);
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
      console.log(1);
    } else if(heightLeft === 0){
      top = window_height / 3;
      console.log(2);

    } else {
      top = (window_height / 3) - (heightLeft / 2 * (-1));
      console.log(3 + ". Height left: " + heightLeft);

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
