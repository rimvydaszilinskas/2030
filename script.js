// button vars
var increase_level_btn = $(".level-plus");
var decrease_level_btn = $(".level-minus");

// media vars
var level_number_holder = $(".level-number");
var level_number = $(".level-numeric");


var time = 10; // time is displayed in seconds
var initialOffset = '2464.9'; // radius!
var i = 1;
var level_id_names = "#level-display-";

var expect_timer_start = false;
var timer_started = false;
var video = false;

var game = new Game();

increase_level_btn.on("click", ()=>{
  var step = game.next();

  if(video == true){
    hideVideo();
  }

  if(step != null){
    applyStep(step, game.getLevelNumber(), game.getColor());
  } else {

  }

});

decrease_level_btn.on("click", ()=>{
  var step = game.previous();

  if(video == true){
    hideVideo();
  }

  if(step != null){
    applyStep(step, game.getLevelNumber(), game.getColor());
  } else {

  }
});

$("#circle-img").on("click", ()=>{
  var originalWidth = $("#circle-img").width();
  if(expect_timer_start){
    if(!timer_started)
      $("#circle-img").animate({
        "width" : $("#circle-img").width() / 1.99,
      }, "fast", ()=>{
        $("#circle-img").width(originalWidth);
      });
      startTimer();
  }
})

function applyStep(step, level, color){
  setColor(color);
  setLevelNumber(level);
  if(step.specialScreen){
    if(step.screenType === "video"){
      showVideo(step.videosrc);
    }
    return;
  }
  changeUserMessages(step.userMessage);
  if(step.instructionMessage != null)
    changeInstructionMessages(step.instructionMessage);
  else
    changeInstructionMessages("");
  changeCircleCenterMedia(step.circleCenter);
  showHideLevelDisplays(level);
  //check if the hider has to be on or off
  displayHider(step.circleCenter.hider);
  //check if any action is needed
  if(step.circleCenter.action){
    if(step.circleCenter.action === "timer"){
      expect_timer_start = true;
    }
  } else {
    expect_timer_start = false;
  }
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
    $("#circle-text").hide("fast");
    if(object.hider)
      positionCircleImage(true);
    else
      positionCircleImage();
    $("#circle-img").attr("src", object.image).show("fast");

  } else if(object.dataType === "text"){
    $("#circle-text").html(object.text);
    if(object.hider){
      $("#circle_text").width("1000px");
    }

  } else if(object.dataType === "fortune"){
    $("#circle-text").html("fortune");
  }
  positionMainText();
}

//start the circular timer
function startTimer(){
  timer_started = true;
  expect_timer_start = false;
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
    // console.log(minutesLeft + ":" + seconds);
    // $('h2').text(minutesLeft + ":" + seconds);
    if (i == time) {
      clearInterval(interval);
      $(".instruction-message").html("TIMES UP!");
      positionInstructionMessages();
      $(".timer-circle").hide("slow");
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

function displayHider(value){
  if(value){
    $("#white-circle").show("fast");
  } else {
    $("#white-circle").hide("fast");
  }
}

function showVideo(src){
  $(".main-container").hide("fast").promise().done(()=>{
    $("#video").attr("src", src);
    $("#video-container").show("fast");
    video = true;
  });
}

function hideVideo(){
  $("#video-container").hide("fast").promise().done(()=>{
    $("#video").hide();
    $("#video").attr("src", "");
    $(".main-container").show("fast");
  });
  console.log("Hide video");
  video = false;
}
