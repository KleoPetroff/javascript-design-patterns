class Car {

    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }

    information() {
        return `This car model is ${this.model}, with ${this.color} color from ${this.year} year.`;
    };
}

// Create a new instance of the constructor object

var honda = new Car('Civic', 'grey', 2007);
var fiat = new Car('punto','blue', 2006);

module.exports = Car;
