var singletonTester = (function() {
    'use strict';

    // options: an object containing configuration options for the singleton
    function Singleton(options) {

        // Set the options to the options supplied
        // or an empty object if none are provided
        options = options || {};

        // set the properties of the singleton
        this.name = 'SingletonTester';
        this.pointX = options.pointX || 0;
        this.pointY = options.pointY || 0;
    }

    // our instance holder
    var instance;

    // emulation of statuc variable and methods
    var _static = {

        name: 'SingletonTester',

        // Method for getting an instance. It returns a single instance
        // of a singleton object

        getInstance: function(options) {
            if(instance === undefined) {
                instance = new Singleton(options);
            }

            return instance;
        }
    };
    return _static;
}());

// Usage

var singletonTest = singletonTester.getInstance({
    pointX: 10,
    pointY: 5
});

console.log(singletonTest.pointX, singletonTest.pointY); // Output: 10, 5
