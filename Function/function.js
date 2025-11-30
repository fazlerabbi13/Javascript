// function greet(name){
//     console.log("Hello " + name);
// }
// greet("Fazle Rabbi");

// Default Parameters

// function greet(name = "Fazle Rabbi"){
//     console.log("Hello, " + name);
// }
// greet();
// greet("World");

// Return Statement

// function add(a, b){
//     return a + b;
// }

// let result = add(5,7);
// console.log(result);

// Anonymous Function

// const greet = function() {
//     return "Hello World!";
// };

// console.log(greet());

// Arrow Function (ES6)

// const add = (a, b) => a * b;
// console.log(add(4, 5));

// Constructor Function

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const user = new Person("Neha", 22);
// console.log(user.name);
// console.log(user.age);


// Higher-Order Function

// function multiplyBy(factor){
//     return function(num){
//         return num * factor;
//     };
// }

// const double = multiplyBy(2);
// console.log(double(5));

// Nested Functions

function outerFunc(a){
    function innerFunc(b){
        return a + b;
    }
    return innerFunc;
}

const add = outerFunc(10);
console.log(add(2));