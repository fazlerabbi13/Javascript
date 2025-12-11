function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Rabbi', 22);
person1.introduce = function () {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
};

// console.log(person1.introduce());