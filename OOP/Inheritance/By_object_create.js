let obj = {
    name: 'Fazle Rabbi',
    age: 22,
    prints() {
        return `my name is ${this.name}`
    }
}
let obj1 = Object.create(obj)
obj1.name = 'Fazle Rabbi'
console.log(obj1.age)
console.log(obj1.prints())