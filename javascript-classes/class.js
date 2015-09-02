/*
 * JavaScript Constructor function
 *
*/

// Creating a car class
function Car(model) {
    this.model = model;
    this.color = 'red';
    this.year = '2010';

    this.getInfo = function() {
        return this.model + ' ' + this.year;
    };
}

// Instantiating the object using the Car constructor

var newCar = new Car('Ford');

newCar.year = '2006'; // Changing the property of the object

console.log(newCar.getInfo()); // Will return "Ford 2006"
