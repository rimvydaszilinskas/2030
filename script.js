var time = 200;
var initialOffset = '2464.9';
var i = 1;

// button vars
var increase_level_btn = $(".level-plus");

increase_level_btn.on("click", ()=>{
  svg_timer_holder.css({
    "transition": "all 1s linear",
    "display" : "inline",
  });
  startTimer();

  console.log("start");
});

function startTimer(){
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
