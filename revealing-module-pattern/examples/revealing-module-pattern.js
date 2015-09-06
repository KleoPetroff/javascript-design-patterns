
var myRevealingModulePattern = (function() {
    'use strict';

    var privateVariable = 'Christian Smith',
        publicVariable  = 'Hello World';

    var privateFunction = function() {
        return privateVariable;
    };

    var publicSetName = function(name) {
        privateVariable = name;
    };

    var publicGetName = function() {
        return privateVariable;
    };

    // Public pointers to private functions and properties

    return {
        setName: publicSetName,
        greeting: publicVariable,
        getName: publicGetName
    };
}());

myRevealingModulePattern.setName('Mathias Cockberg');
