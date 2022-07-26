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
console.log(newDog);

const newBird = makeDomestic.call(bird, false);
console.log(newBird);