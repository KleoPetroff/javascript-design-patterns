'use strict';

// Main constructor
var Car = function(settings) {
    this.model = settings.model || 'no model given';
    this.color = settings.color || 'no color given';
};

// Mixin
var Mixin = function() {};

Mixin.prototype = {
    driveForward: function() {
        return 'drive forward';
    },
    driveBackward: function() {
        return 'drive backward';
    },
    driveSideways: function() {
        return 'drive sideways';
    }
};

// Extent an exsiting object
var augment = function(receivingClass, givingClass) {
    // only provide certain methods
    if(arguments[2]) {
        for(var i = 2, len = arguments.length; i < len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    } else {
        // provide all methods
        for (var methodName in givingClass.prototype) {
            // check if the methodName exist in receivingClass.prototype
            if(!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
};

augment(Car, Mixin, 'driveForward', 'driveBackward');

var ford = new Car({
    model: 'Ford Escord',
    color: 'blue'
});

augment(Car, Mixin);

var fiat = new Car({
    model: 'Fiat Punto',
    color: 'red'
});
