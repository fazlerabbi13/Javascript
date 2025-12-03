const one = {
    speak() {
        return `${this.name} walks`
    }
}
const two = {
    walks() {
        return `${this.name} walks`
    }
}
function Person(name) {
    this.name = name
}
Object.assign(Person.prototype, one, two)
const person1 = new Person('Fazle Rabbi')
console.log(person1.speak())