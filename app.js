// Es6
class Person {
  #name; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

console.log(typeof Person);

const victor = new Person('Victor', 52);
const anna = new Person('Anna', '40+');

anna.name = 'Ivis';
console.log(victor);
console.log(anna);
console.log(anna.name);

// Inheritance

class Zoo {
  constructor() {
    this.animals = [];
  }
}

class Animal {
  constructor(name) {
    this._speed = 0;
    this._name = name;
  }

  run(speed) {
    this._speed = speed;
    alert(`${this._name} runs with speed ${this._speed}`);
  }

  stop() {
    this._speed = 0;
    alert(`${this._name} stands still`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
    this.breed = breed;
  }

  bark() {
    alert(`Woof woof`);
  }
}

const myPet = new Animal('lion');
const myDog = new Dog('Rex', 'chihuahua');
const myDog2 = new Dog('Firulais', 'german shepherd');
console.log(myDog);
console.log(myDog2);

const myZoo = new Zoo();

myZoo.animals.push(myPet);
myZoo.animals.push(myDog);
myZoo.animals.push(myDog2);
/* myDog.bark();
myDog.run(30);
myDog.stop(); */

console.log(myZoo);

function Car(name, color) {
  this.name = name;
  this.color = color;
}

Car.prototype.honk = function () {
  console.log('honk');
};

const myCar = new Car('Jetta', 'blue');

console.log(myCar);
myCar.honk();

const myWeirdDog = {
  name: 'Something',
  speed: 0,
  bark() {
    console.log('bark');
  }
};

console.log(myWeirdDog);
