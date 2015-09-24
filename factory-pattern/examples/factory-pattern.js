'use strict';

// parent object
function CarMaker() {}

// a method of the parrent
CarMaker.prototype.drive = function() {
    return 'I have ' + this.doors + ' doors.';
};

// the static factory method
CarMaker.factory = function(type) {
    var constr = type,
        newCar;

    // error if the constructor doesn't exists
    if(typeof CarMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: constr + 'doesn\'t exist'
        };
    }

    // inherits the parent
    if(typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker.prototype = new CarMaker();
    }

    // create new instance

    newCar = new CarMaker[constr]();
    return newCar;
};


// define specific car makes

CarMaker.Compact = function() {
    this.doors = 4;
};

CarMaker.Comvertable = function() {
    this.doors = 2;
};

CarMaker.SUV = function() {
    this.doors = 24;
};
