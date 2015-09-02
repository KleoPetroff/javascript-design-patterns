'use strict';

// Basic Constructor

// Defining the constructor
function Car(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;

    this.information = function() {
        return 'This car model is ' + this.model + ', with ' + this.color + ' color from ' + this.age + ' year.';
    };
}


// Create a new instance of the constructor object

var honda = new Car('Civic', 'grey', 2007);
var fiat = new Car('punto','blue', 2006);

// Calling the object method

console.log(honda.information());
console.log(fiat.information());
