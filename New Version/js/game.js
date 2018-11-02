class Game{
  constructor(){
    this.data = {
      levels : [
        {
          color : "red",
          steps : [
            {
              specialScreen : null,
              userMessage : "Put your goggles on and look for the play button",
              instructionMessage : null,
              circle : {
                circle : true,
                hider : false,
                message : null,
                img : null,
                special : false,
              },
              {
                specialScreen : "VR",
                userMessage : "Watch the video",
                instructionMessage: null,
                circle : null,
              },
              {
                specialScreen : null,
                userMessage : "Scroll to discover the target click on the target you want to address and read the indicators",
                specialInstructionMessage : true,
                instructionMessage : {
                  type : "cards",
                  cards : [
                    {
                      title : "TARGET 1",
                      content : "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day"
                    },
                    {
                      title : "TARGET 2",
                      content : "By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions",
                    },
                    {
                      title : "TARGET 3",
                      content : "Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substiantial coverage of the poor and the vulnerable",
                    }
                  ]
                },
              }
            },
          ]
        }
      ]

    };
  }
}
