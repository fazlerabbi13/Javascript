// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}

//Creating Instances with a Constructor
const p1 = new Person("Rabbi", 22);
const p2 = new Person("Zayn", 21);

p1.sayHello();
p2.sayHello();