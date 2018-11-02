var rotated = false;
var reversed = 0;
const FLIP_INTERVAL = 3000;

$(document).ready(() => {

  //initialize randomly
  init();

  setInterval(()=>{
    // randomize ammount of cards to flip
    var cardsToFlip = Math.floor(Math.random() * 5 + 1);
    var flipped = 0;

    $(".sdg-img").each((index, element) => {
      if(Math.floor(Math.random() * 2) === 1 && flipped < cardsToFlip){
        $(element).toggleClass("inverted");
        flipped++;
      } else if(flipped >= cardsToFlip){
        return false;
      }
    });

  }, FLIP_INTERVAL);
});

function init(){
  $(".sdg-img").each((index, element) => {

    if(reversed >= Math.floor($(".sdg-img").length * 0.6)){
      // do not continue to reverse if more than 60% of all are reversed
      return false;
    }

    //get a random 0 or 1 for reversed/not reversed
    var random = Math.floor(Math.random() * 2);

    if(random === 1){
      // make the element reversed
      reversed++;
      $(element).toggleClass("inverted");
    }
  });
}

$(".sdg-img").on("click", (e)=>{
  // TODO: load appropriate level
  console.log($(e.target).attr("id"));
});
