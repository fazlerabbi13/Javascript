// Parent constructor
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(this.name + " is eating.");
};

// Child constructor
// function Dog(name, breed) {
//     Animal.call(this, name); 
//     this.breed = breed;
// }
// Inherit methods using prototype
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog; 

// Add child-specific method
// Dog.prototype.bark = function () {
//     console.log(this.name + " is barking.");
// };

// const d1 = new Dog("Rocky", "German Shepherd");

// d1.eat();   
// d1.bark();

