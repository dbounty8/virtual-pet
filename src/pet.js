const AGE_INCREMENT = 1;
const HUNGER_INCREMENT = 5;
const FITNESS_DECREASE = 3;
const FITNESS_INCREMENT = 4;
const MAXIMUM_FITNESS = 10;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype.growUp = function() {
  
  this.age += AGE_INCREMENT;
  this.hunger += HUNGER_INCREMENT;
  this.fitness -= FITNESS_DECREASE;
}

Pet.prototype.walk = function() {
  
  if ((this.fitness + FITNESS_INCREMENT) > MAXIMUM_FITNESS){
    this.fitness = MAXIMUM_FITNESS;
  } else {
    this.fitness += FITNESS_INCREMENT;
  }
}



module.exports = Pet;