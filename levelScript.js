class Game{
  // level class to manipulate and return levels
  constructor(){
    this.levelData = JSON.parse("data.json");
    this.currentLevel = 0;
    this.currentStep = 0;
    this.maxLevels = this.levelData.levels.length;
  }

  getLevel(level){
    return this.levelData.levels[level];
  }

  getLevelStep(level, step){
    return this.levelData.levels[level].steps[step];
  }

  next(){
    this.currentStep++;
    if(this.levelData.levels[this.currentLevel].steps.length === this.currentStep){
      this.currentStep = 0;
      this.currentLevel++;
      if(this.currentLevel === this.maxLevels){
        return null;
      }
      return this.levelData.levels[this.currentLevel].steps[this.currentStep];
    } else{
      return this.levelData.levels[this.currentLevel].steps[this.currentStep];
    }
  }

  previous(){
    this.currentStep--;
    if(this.currentStep < 0){
      this.currentLevel--;
      this.currentStep = 0;
      return this.levelData.levels[this.currentLevel].steps[this.currentStep];
    } else {
      return this.levelData.levels[this.currentLevel].steps[this.currentStep];
    }
  }
}
