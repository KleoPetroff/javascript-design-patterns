var mySingleton = (function() {
    'use strict';

    // Instance stores a referance to the Singleton
    var instance;

    // The Singleton
    var init = function() {
        // Private methods and variables
        var privateMethod = function() {
            return 'Private method';
        };

        var privateVariable = 'Private variable';

        var privateRandomNumber = Math.floor(Math.random() * 10);

        return {
            // Public methods and variables
            publicMethod: function() {
                return 'Public Method';
            },
            publicProperty: 'Public property',

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        // Get the Singleton instance if it exists
        // or create a new instance

        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    };
}());


// Usage

var singleFirst = mySingleton.getInstance();
var singleSecond = mySingleton.getInstance();

console.log(singleFirst.getRandomNumber === singleSecond);
