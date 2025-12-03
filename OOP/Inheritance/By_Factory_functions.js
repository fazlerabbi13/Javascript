function createPerson(name) {
    return {
        name: name,
        greet() {
            return `Hello my name is ${this.name}`
        }
    }
}
const one = createPerson('Fazle Rabbi')
const two = createPerson('Zayn')
console.log(one.greet())
console.log(two.greet())