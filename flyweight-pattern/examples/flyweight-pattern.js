'use strict';

var Flyweight = (function() {
    var Flyweight = function() { };

    Flyweight.prototype.Color = 'green';
    Flyweight.prototype.Name = 'Ball';
    Flyweight.prototype.Shape = 'Circle';

    return Flyweight;
}());
