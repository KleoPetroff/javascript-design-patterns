
var moduleTemplate = (function() {
    'use strict';
    var privateVariable,
        privateMethod;

    // A private counter
    privateVariable = 0;

    // A private method
    privateMethod = function(bar) {
        console.log('private method return: ',bar);
        return bar;
    };

    return {
        // A public variable
        publicVariable: 'foo',

        // A public function utilizing privates
        publicFunction: function(foo) {

            // Increment our private counter
            privateVariable++;

            // Call the private method using bar
            // use of return is not mandatory
            return privateMethod(foo);
        },

        showCounter: function() {
            return privateVariable;
        }
    };
}());
