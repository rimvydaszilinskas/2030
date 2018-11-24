var opened = Array();
var timeOut = null;
var factsLeft = 10;
var started = false;
var startTime = null;

$(document).ready(()=>{
  var facts = {
    "facts" : [
      "fact1", 
      "fact2", 
      "fact3", 
      "fact4",
      "fact5", 
      "fact6", 
      "fact7", 
      "fact8", 
      "fact9", 
      "fact10"
    ],
  };
  init(facts);
});

$(".card").flip(
  {
    axis: 'x',
    trigger: 'manual'
  }
);

$(".card").click(function(event){
  if(started === false){
    startTime = Date.now();
    started = true;
  }

  clearTimeout(timeOut);
  timeOut = setTimeout(closeAll, 3000);
  if(opened !== this){
    if(opened.length < 2){
      // open a new one and compare to open one if there is one
      // console.log("less " + opened.length);
      $(this).flip(true);
      if(opened.length !== 0){
        if($($(opened[0]).children()[1]).text().trim() === $($(this).children()[1]).text().trim() && opened[0] !== this){
          // $(this).hide();
          // $(opened.pop()).hide();
          var matched = opened.pop();
          $(this).off();
          $(matched).off();
          factsLeft--;

          if(factsLeft === 0){
            var result = (Date.now() - startTime) / 1000;
            $(".leftFacts").html("Congratulations! Your time is : " + result + " seconds!");
          } else {
            $(".factsLeft").html(factsLeft);
          }
          return;
        } else {
          // no match, just skip
        }
      }
      opened.push(this);
    } else {
      // close the opened ones and open the new one
      closeAll();
      $(this).flip(true);
      opened.push(this);
    }
  } else {
    // just skip
  }
});

function init(facts){
  var half = $(".card").length / 2 - 1;
  var used = Array();

  for(var i = 0; i < $(".card").length; i++){
    while(true){
      var random = Math.floor(Math.random() * facts.facts.length);
      if(!used.includes(random)){
        used.push(random);
        $($($(".card")[i]).children()[1]).html(facts.facts[random]);
        break;
      }
    }
    if(i === half){
      used = Array();
    }
  }

  showAll();
}

function showAll(){
  setTimeout(closeAll, 2000);
  $(".card").each((index, element) =>{
    $(element).flip(true);
    opened.push(element);
  });
}

function closeAll(){
  while(opened.length !== 0){
    $(opened.pop()).flip(false);
  }
}
