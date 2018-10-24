class Game{
  // level class to manipulate and return levels
  constructor(){
    this.levelData = JSON.parse("levelData.json");
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
      this.currentStep = 0;
    }
    return this.levelData.levels[this.currentLevel].steps[this.currentStep];
  }

  previous(){
    this.currentStep--;
    if(this.currentStep < 0){
      this.currentStep = 0;
      this.currentLevel--;
    }

    return this.levelData.levels[this.currentLevel].steps[this.currentStep];
  }

}
