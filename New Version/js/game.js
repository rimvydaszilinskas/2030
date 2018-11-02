var rotated = false;

$(document).ready(() => {
  setInterval(()=>{
    var deg = 180;
    if(rotated){
      deg = 0;
      rotated = false;
    } else {
      rotated = true;
    }
    $(".sdg-img").each((index, element) => {
      if(index % 2 == 0)
        $(element).toggleClass("inverted");
    });


  }, 3000);
});

$(".sdg-img").on("click", e=>{
  console.log($(e.target).attr("id"));
});
