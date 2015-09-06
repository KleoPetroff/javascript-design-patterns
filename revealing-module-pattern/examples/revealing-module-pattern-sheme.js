var schemeRevealingModule = (function() {
    'use strict';

    // Private members
    var privateCounter = 0;

    var privateFunction = function() {
        privateCounter++;
    };

    var publicFunction = function() {
        publicIncrement();
    };

    var publicIncrement = function() {
        privateFunction();
    };

    var publicGetTotal = function() {
        return privateCounter;
    };

    var publicReset = function() {
        privateCounter = 0;
    }

    return {
        start: publicFunction,
        increment: publicIncrement,
        reset: publicReset,
        total: publicGetTotal
    };

}());
