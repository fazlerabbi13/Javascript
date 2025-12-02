const person = {
    name: 'Rabbi',
    greet: function() {
        const arrowGreet = () => {
            console.log('Hello, ' + this.name); 
        };
        arrowGreet();
    }
};
person.greet();