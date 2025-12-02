const person = {
    name: 'Rabbi',
    greet: function(city) {
        console.log('Hello, ' + this.name + ' from ' + city);
    }
};
person.greet('Sylhet');
const greet = person.greet;
greet.call(person, 'Bangladesh');