const Pet = require('../src/pet');


describe('constructor', () => {
  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });
});

describe('constructor', () => {
  it('has an initial age of 0', () => {
  const pet = new Pet('Fido');
  expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
  it('increments age by 1 hunger by 5 and decreases fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  it('increments fitness by 4', () => {
    const pet = new Pet('Fido');
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});