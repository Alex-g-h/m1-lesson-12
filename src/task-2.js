const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  }
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  }
};

function makeDomestic(isDomestic) {
  this.isDomestic = isDomestic;
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  return this;
}

const newDog = makeDomestic.bind(dog, true)();
console.log('newDog:', newDog);

const newBird1 = makeDomestic.call(bird, false);
console.log('newBird1 call:', newBird1);
const newBird2 = makeDomestic.apply(bird, [false]);
console.log('newBird2 apply', newBird2);