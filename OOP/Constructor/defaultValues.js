function Person(name = "Rakib", age = 20) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Rabbi", 22);
const person2 = new Person("Zayn", 21);  
const person3 = new Person();  

console.log(person1);  
console.log(person2); 
console.log(person3);