const person = {
    name: 'Rabbi',
    greet: function(city, country) {
        console.log('Hello, ' + this.name + ' from ' + city + ', ' + country);
    }
};
person.greet('Sylhet', 'Bangladesh');
const greet = person.greet;
greet.apply(person, ['Dhaka', 'Bangladesh']);