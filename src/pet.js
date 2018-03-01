const AGE_INCREMENT_VALUE = 1;
const HUNGER_INCREMENT_VALUE = 5;
const FITNESS_DECREASE_VALUE = 3;
const FITNESS_INCREMENT_VALUE = 4;
const MAXIMUM_FITNESS_VALUE = 10;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype.growUp = function() {
  
  this.age += AGE_INCREMENT_VALUE;
  this.hunger += HUNGER_INCREMENT_VALUE;
  this.fitness -= FITNESS_DECREASE_VALUE;
}

Pet.prototype.walk = function() {
  
  if ((this.fitness + FITNESS_INCREMENT_VALUE) > MAXIMUM_FITNESS_VALUE){
    this.fitness = MAXIMUM_FITNESS_VALUE;
  } else {
    this.fitness += FITNESS_INCREMENT_VALUE;
  }
}



module.exports = Pet;