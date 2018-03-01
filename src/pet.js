const AGE_INCREMENT = 1;
const HUNGER_INCREMENT = 5;
const FITNESS_DECREASE = 3;
const FITNESS_INCREMENT = 4;
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const FEED_DECREASE = 3;
const NEED_FOOD = 5;
const NEED_WALK = 3;

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
  if ((this.fitness + FITNESS_INCREMENT) >= MAXIMUM_FITNESS){
    this.fitness = MAXIMUM_FITNESS;
  } else {
    this.fitness += FITNESS_INCREMENT;
  }
}

Pet.prototype.feed = function() {
  if ((this.hunger - FEED_DECREASE) <= MINIMUM_HUNGER) {
    this.hunger = MINIMUM_HUNGER;
  } else {
    this.hunger -= FEED_DECREASE;
  }
}

Pet.prototype.checkUp = function() {
  status = [];
  if (this.fitness <= NEED_WALK) {
    status.push('I need a walk');
  }
  if (this.hunger <= NEED_FOOD) {
    status.push('I am hungry');
  }
  return status;
}


module.exports = Pet;