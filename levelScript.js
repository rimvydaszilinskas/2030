class Game{
  // level class to manipulate and return levels
  constructor(){
    // this.levelData = require("levelData.json");
    // console.log(this.levelData);
    this.levelData = {
      levels : [
        {
          "color" : "#e42832",
          "steps" : [
            {
              "specialScreen" : false,
              "instructionMessage" : null,
              "userMessage" : "Introduction from facilitator",
              "circleCenter" : {
                "dataType" : "text",
                "text" : "Introduction",
                "hider" : false,
              },
            },
            {
              "specialScreen" : false,
              "instructionMessage" : "Please follow the facilitator",
              "userMessage" : "Agenda for today",
              "circleCenter" : {
                "dataType" : "text",
                "text" : "Agenda for today",
                "hider" : true,
              },
            },
            {
              "specialScreen" : false,
              "instructionMessage" : "Round introduction at the table",
              "userMessage" : "Please introduce each other",
              "circleCenter" : {
                "dataType" : "image",
                "image" : "introduction.svg",
                "hider" : true,
                "action" : "timer",
                "time" : 300,
              },
            },
          ],
        },
        {
          "color" : "#daa449",
        },
        {
          "color" : "#4aa547",
        },
        {
          "color" : "#c9223d",
        },
        {
          "color" : "#ea503e",
        },
        {
          "color" : "#23badd",
        },
        {
          "color" : "#fcbf2c",
        },
        {
          "color" : "#a01d4c",
        }
      ],
    };
    this.currentLevel = 0;
    this.currentStep = 0;
    this.maxLevels = this.levelData.levels.length;
  }

  getLevel(){
    return this.levelData.levels[this.currentLevel];
  }

  getStep(){
    return this.levelData.levels[this.currentLevel].steps[this.currentStep];
  }

  getColor(){
    return this.levelData.levels[this.currentLevel].color;
  }

  isSpecial(){
    return this.levelData.levels[this.currentLevel].steps[this.currentStep].specialScreen;
  }

  hasSpecialAction(){
    if(this.levelData.levels[this.currentLevel].steps[this.currentStep].circleCenter.action)
      return true;
    return false;
  }

  next(){
    //next step
    this.currentStep++;
    //check if the level does not need to be increased
    if(this.currentStep === this.levelData.levels[this.currentLevel].steps.length){
      //increase level and decrease step to 0
      this.currentLevel++;
      if(this.currentLevel === this.levelData.levels.length()){
        this.currentLevel--;
        return null;
      }
      this.currentStep = 0;
    }
    return this.levelData.levels[this.currentLevel].steps[this.currentStep];
  }

  previous(){
    this.currentStep--;
    if(this.currentStep < 0){
      this.currentStep = 0;
      this.currentLevel--;
      if(this.currentLevel < 0){
        this.currentLevel++;
        return null;
      }
    }

    return this.levelData.levels[this.currentLevel].steps[this.currentStep];
  }

}
