// button vars
var increase_level_btn = $(".level-plus");
var decrease_level_btn = $(".level-minus");


var time = 300; // time is displayed in seconds
var initialOffset = '2464.9'; // radius!
var i = 1;

increase_level_btn.on("click", ()=>{
  changeMedia();
});

decrease_level_btn.on("click", ()=>{

});

//change the media to apropriate one
function changeMedia(){
  $(".user-text").fadeOut("fast", ()=>{
    $(".user-text").html("Introduction from facilitator!!!");
    $(".instruction-message").html("hello");
  }).promise().done(()=>{
    $(".user-text").fadeIn("fast", ()=>{});
  });

  $(".user-text").promise().done(()=>{
    positionUserRow();
    positionInstructionMessages();
  });

}

function changeUserMessages(message){

}

function changeInstructionMessages(message){

}

function changeCircleCenterMedia(object){

}

//start the circular timer
function startTimer(){

  svg_timer_holder.css({
    "transition": "all 1s linear",
    "display" : "inline",
  });

  $('.timer-circle').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
  // $('h2').text("5:00");
  var interval = setInterval(function() {
    var minutesLeft = Math.floor((time - i) / 60);
    var secondsLeft = (time-i) % 60;
    if(secondsLeft < 10){
      var seconds = "0" + secondsLeft;
    } else {
      var seconds = secondsLeft;
    }
    console.log(minutesLeft + ":" + seconds);
    // $('h2').text(minutesLeft + ":" + seconds);
    if (i == time) {
      clearInterval(interval);
      return;
    }
    $('.timer-circle').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i++;
  }, 1000);
}

//set the appropriate color
function setColor(color){
  $(".level-number").css({
    "color" : color,
  });
}
