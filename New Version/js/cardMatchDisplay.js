$(document).ready(()=>{
    $(".card").flip(
        {
            axis: 'x',
            trigger: 'manual',
        }
    );

    setTimeout(showFirstCard, 1000);
});

function showFirstCard(){
    $(".card:first").flip(true);
    setTimeout(showSecondCard, 1000);
}

function showSecondCard(){
    $(".card").flip(true);
    setTimeout(dissolveCards, 1000);
}

function dissolveCards(){
    //redirect to the game after demonstration
    $(".card").fadeOut("slow", ()=>{
        setTimeout(redirect, 1000);
        
    });
}

function redirect(){
    window.location.href="cardMatch.html";
}