// button vars
var increase_level_btn = $(".level-plus");
var decrease_level_btn = $(".level-minus");

// media vars
var level_number_holder = $(".level-number");
var level_number = $(".level-numeric");


var time = 300; // time is displayed in seconds
var initialOffset = '2464.9'; // radius!
var i = 1;
var level_id_names = "#level-display-";

var game = new Game();

increase_level_btn.on("click", ()=>{
  var step = game.next();
  if(step != null){
    applyStep(step, game.getLevelNumber(), game.getColor());
  } else {

  }

});

decrease_level_btn.on("click", ()=>{
  var step = game.previous();
  if(step != null){
    applyStep(step, game.getLevelNumber(), game.getColor());
  } else {

  }
});

function applyStep(step, level, color){
  setColor(color);
  setLevelNumber(level);
  changeUserMessages(step.userMessage);
  if(step.instructionMessage != null)
    changeInstructionMessages(step.instructionMessage);
  else
    changeInstructionMessages("");
  changeCircleCenterMedia(step.circleCenter);
  showHideLevelDisplays(level);
}

function changeUserMessages(message){
  $(".user-text").fadeOut("fast", ()=>{
    $(".user-text").html(message);
  }).promise().done(()=>{
    $(".user-text").fadeIn("fast", ()=>{});
  });

  $(".user-text").promise().done(()=>{
    positionUserRow();
  });
}

function changeInstructionMessages(message){
  $(".instruction-message").fadeOut("fast", () => {
    $(".instruction-message").html(message);
  }).promise().done(() => {
    $(".instruction-message").fadeIn("fast", () => {});
  });

  $(".instruction-message").promise().done(() => {
    positionInstructionMessages();
  });
}

function changeCircleCenterMedia(object){
  if(object.dataType === "image"){

  } else if(object.dataType === "text"){

  } else if(object.dataType === "fortune"){

  }
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
  level_number_holder.css({
    "background-color" : color,
  });
}

//set the appropriate level number to the holder
function setLevelNumber(levelNumber){
  if(levelNumber < 10){
    level_number.html("0" + levelNumber);
  }
}

function showHideLevelDisplays(levelNumber){
  for(var i=0; i<=7; i++){
    if(i <= levelNumber){
      $(level_id_names + i).show("fast");
    } else {
      $(level_id_names + i).hide("fast");
    }
  }
}
