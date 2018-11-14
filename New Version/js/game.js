class Game{
  constructor(){
    this.data = {
      levels : [
        {
          color : "ea1d2d",
          steps : [
            {
              special : false,
              instruction : null,
              userMessage : "Click on thr target you want to address and read the indicators",
              circle : {
                image : "images/sdg1_art.jpg",
                text : null,
                special : null,
              },
            },
            {
              special : true,
              instruction: null,
              userMessage : "Match the SDG facts",
              circle: null,
              media : "match_showcase",
            },
            {
              special : true,
              instrution : null,
              userMessage: null,
              circle: null,
              media : "match_game",
            },
          ]
        },
        {
          color: "d19f2a",
          steps: [
            {
              special : false,
              instruction : null,
              userMessage : "Talk in two about how does this problem affect you at the personal level",
              circle: {
                image : null,
                text : "timer",
                special : "timer",
              },
            },
            {
              special : false,
              instruction : null,
              userMessage : "Outside of your workplace how can you see this being a problem? Continue talking with each other",
              circle: {
                image : null,
                text : "timer",
                special : "timer",
              },
            },
            {
              special : true,
              instruction : null,
              userMessage : "Click the icon to roll the dice",
              circle : null,
              media : "role_dice",
            },
            {
              special : false,
              instruction : null,
              userMessage : "Choose company",
              circle: {
                image : null,
                text : null,
              },
            },
          ]
        },
        {
          color : "2c9a47",
          steps : [
            {
              special : false,
              instrution : {
                type: "img",
                img : "";
              },
              userMessage : "Write down as many ideas that you have that could be a solution to the problem",
              circle : {
                image : null,
                text : null,
              },
            },
            {
              special : true,
              instruction : null,
              userMessage : "When highlighted share your ideas with the team",
              circle : {
                image : null,
                text : null,
              },
              media : "turn_picker",
            },
          ]
        },
        {
          color : "8f1838",
          steps : [
            {
              special : true,
              instruction : null,
              userMessage: "When your icon is highlighted, click \"Spin!\"",
              circle : null,
              media : "role_picker",
            },
            {
              special : 
            }
          ]
        },
      ]

    };
  }
}
