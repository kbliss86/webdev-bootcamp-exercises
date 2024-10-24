// Constructor can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
}

// Dog constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
function Dog(name, age, breed, puppies) {
  Animal.call(this, name, age, breed);
  this.puppies = puppies;
}

Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Cat constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed);
  this.kittens = kittens;
}

Cat.prototype.meow = function () {
  console.log('Meow!');
};

function Duck(name, age, breed, ducklings) {
  Animal.call(this, name, age, breed);
  this.ducklings = ducklings;
}

Duck.prototype.quack = function () {
  console.log('Quack!');
};
const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);
const duck = new Duck('Donald', 40, 'White Duck',['Huey', 'Dewy', 'Lewy'])
duck.quack();
dog.bark();
cat.meow();
console.log(duck)
console.log(dog)
console.log(cat)