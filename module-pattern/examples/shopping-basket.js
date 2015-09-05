
var myBasket = (function() {
    'use strict';

    // Privates
    var basket = [];

    var privateFunction = function() {/* */};
    var anotherPrivateFunction = function() { /* ... */};

    // Return the exposed object to the public
    return {

        // Adding items to the backet
        addItem: function(item) {
            basket.push(item);
        },
        // Get the number of items in the basket
        getItems: function() {
            return basket.length;
        },
        clearItems: function() {
            basket = [];
        },
        // Public alias to a private function
        privateFunction, anotherPrivateFunction,

        // Get the total value of the basket
        getTotalPrize: function() {
            var items = this.getItems(),
                prize = 0;

            while(items--) {
                prize += basket[items].price;
            }

            return prize;
        }
    };
}());
