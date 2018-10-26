class Game{
  // level class to manipulate and return levels
  constructor(){
    // this.levelData = require("levelData.json");
    // console.log(this.levelData);
    this.levelData = {
      levels : [
        {
          color : "#e42832",
          steps : [
            {
              specialScreen : false,
              instructionMessage : null,
              userMessage : "Introduction from facilitator",
              circleCenter : {
                dataType : "text",
                text : "Introduction",
                hider : false,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Please follow the facilitator",
              userMessage : "Agenda for today",
              circleCenter : {
                dataType : "text",
                text : "Agenda for today",
                hider : true,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Round introduction at the table",
              userMessage : "Please introduce each other",
              circleCenter : {
                dataType : "image",
                image : "images/introduceeachother.svg",
                hider : true,
                action : "timer",
                time : 300,
              },
            },
          ],
        },
        {
          color : "#daa449",
          steps : [
            {
              specialScreen : false,
              instructionMessage : "Please follow the facilitator",
              userMessage : "Sustainable Development Goals explanation",
              circleCenter : {
                dataType : "image",
                image : "images/SDG12.svg",
                hider : false,
              },
            },
            {
              specialScreen : false,
              instructionMessage : null,
              userMessage : null,
              circleCenter : {
                dataType : "image",
                image : "images/video.svg",
                hider : true,
              },
            },
            {
              specialScreen : true,
              screenType : "video",
              videosrc : "https://www.youtube.com/embed/mNaOE2zYnFI?rel=0;&autoplay=1&mute=1&showinfo=0&controls=0",
            },
          ],
        },
        {
          color : "#4aa547",
          steps : [
            {
              specialScreen : false,
              instructionMessage : null,
              userMessage : "Mapping of the problem",
              circleCenter : {
                dataType : "image",
                image : "images/problem3-1.svg",
                hider : false,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Talk in two how does this affect you",
              userMessage : "Mapping of the problem",
              circleCenter : {
                dataType : "image",
                image : "images/communication.svg",
                hider : true,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Talk about, how companies can benefit from tackling the problem",
              userMessage : "How can companies benefit from tackling the problems",
              circleCenter : {
                dataType : "image",
                image : "images/solvingproblem.svg",
                hider : true,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Choose a company that you would like to work with today.",
              userMessage : "This is a Simulation Scenario, therefore you can choose any company to represent.",
              circleCenter : {
                dataType : "image",
                image : "images/company-man.svg",
                hider : true,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Choose a volunteer to pick up new items from the facilitator.",
              userMessage : "Time to be creative.",
              circleCenter : {
                dataType : "image",
                image : "images/persona.svg",
                hider : true,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Now use the 2 words to create a team name and write it down.",
              userMessage : "Combine these two words and create your own team name.",
              circleCenter : {
                dataType : "image",
                image : "images/target.svg",
                hider : true,
              },
            },
          ],
        },
        {
          color : "#c9223d",
          steps : [
            {
              specialScreen : false,
              instructionMessage : null,
              userMessage : "Brainstorm session",
              circleCenter : {
                dataType : "image",
                image : "images/brainstorm.svg",
                hider : false,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Think and write down as many ideas as you have as solution that the company could implement.",
              userMessage : "Individual task.",
              circleCenter : {
                dataType : "image",
                image : "images/ideas.svg",
                hider : true,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Take 1 minute for each and share your idea with the team.",
              userMessage : "Please use only one minute each.",
              circleCenter : {
                dataType : "image",
                image : "images/sharing.svg",
                hider : true,
              },
            },
          ],
        },
        {
          color : "#ea503e",
          steps : [
            {
              specialScreen : false,
              instructionMessage : "Roadblock",
              userMessage : "Roadblock Please click to find out the news!",
              circleCenter : {
                dataType : "image",
                image : "images/roadblock-01.svg",
                hider : false,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "\"News alert!\" \"Due to the company's performance, the senior management has decided that the solution has to be implmenented in Denmark, within one year time, with a budget of one million Danish Kroner.\"",
              userMessage : null,
              circleCenter : {
                dataType : "image",
                image : "images/denmark.svg",
                hider : true,
              },
            },
          ],
        },
        {
          color : "#23badd",
          steps : [
            {
              specialScreen : false,
              instructionMessage : null,
              userMessage : "Click and find out your new role.",
              circleCenter : {
                dataType : "image",
                image : "images/information-faces.svg",
                hider : false,
              },
            },
            {
              specialScreen : true,
              media : "fortune",
              circleCenter : {
                dataType : "wheel",
                // image : "introduction.svg",
                hider : true,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Please read out loud your role and share your mission with the team",
              userMessage : "This will be your perspective from now on.",
              circleCenter : {
                dataType : "image",
                image : "images/sharing-faces.svg",
                hider : true,
              },
            },
          ],
        },
        {
          color : "#fcbf2c",
          steps : [
            {
              specialScreen : false,
              instructionMessage : null,
              userMessage : "Validation of ideas",
              circleCenter : {
                dataType : "image",
                image : "images/human-cog.svg",
                hider : false,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Now that you have a new role, please talk about the 2 ideas",
              userMessage : "Think about the idea within the new perspective given by the role.",
              circleCenter : {
                dataType : "image",
                image : "images/human-cog.svg",
                hider : true,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Use your vote and support 1 idea that convinves you the most",
              userMessage : "Vote for one final idea.",
              circleCenter : {
                dataType : "image",
                image : "images/human-cog.svg",
                hider : false,
              },
            },
          ],
        },
        {
          color : "#a01d4c",
          steps : [
            {
              specialScreen : false,
              instructionMessage : null,
              userMessage : "Create final pitch",
              circleCenter : {
                dataType : "image",
                image : "images/presentation.svg",
                hider : false,
              },
            },
            {
              specialScreen : false,
              instructionMessage : "Canvas model to be used<br><ul><li>Name of your team</li><li>Company that you represent</li><li>What is your idea?</li><li>Why do we need your solution?</li><li>How will you implement it(describe the process)?</li></ul>",
              userMessage : "Explain in few sentences what is your idea all about. Use the papers to write it down.",
              circleCenter : {
                dataType : "image",
                image : "images/presentation.svg",
                hider : true,
              },
            },
          ],
        },
        {
          color : "#ed703f",
          steps : [
            {
              specialScreen : false,
              instructionMessage : "Thank you for playing the short version of 2030 Builders Game!",
              userMessage : "Remember to sign your credentials in order to receive your badge.",
              circleCenter : {
                dataType : "text",
                text : "Visit our website 2030.Builders",
                hider : true,
              },
            },
          ],
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

  getLevelNumber(){
    return this.currentLevel + 1;
  }

  next(){
    //next step
    this.currentStep++;
    //check if the level does not need to be increased
    if(this.currentStep === this.levelData.levels[this.currentLevel].steps.length){
      //increase level and decrease step to 0
      this.currentLevel++;
      if(this.currentLevel === this.levelData.levels.length){
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
