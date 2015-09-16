# The Prototype pattern

The GoF refer to the Prototype Pattern as one which creates an object based on template or an existing object through cloning.

The prototype object itself is effectively used as a blueprint for each object to constructor creates. For example, if the constructor function has a property `name`, each object created by the same constructor will have the same property. Said in other words, we are creating copies of existing functional objects.

One of the benefits of using the prototype pattern is that we are working with the prototypical strengths JavaScript has to offer natively. Not only is the pattern an easy way to implement inheritance, but it can also provide performance boost.

The real prototypal inheritance, as defined is ECMAScript 5, requires the use of `Object.create`. `Object.create` creates an object has a specified properties and optionally contains specified properties as well (`Object.create(prototype, optionalDescriptorObjects)`).

A simple example of the Prototype pattern:

```js
// Creating the object contructor
var myCar = function() {
    name: 'Ford',

    drive: function() {
        return "Wee. I'm driving.";
    },

    panic: function() {
        return "How to stop this thing?!";
    }
}

// Use Object.create to instantiate a new car
var ford = Object.create(myCar);

// Call ford method
ford.drive(); // will return "Wee. I'm driving."
```

`Object.create` also allows to create implement advanced concepts such as differential inheritance where objects are able to directly inherit from other objects.

```js
    var vehicle = {
        getModel: function() {
            return "The model of the vehicle is " + this.model;
        }
    }

    var car = Object.create(vehicle, {
        'id': {
            value: 1,
            // writable: false, configurable: false by default
            enumerable: true
        },

        'model': {
            value: 'Ford',
            enumerable: true;
        }
    });

    car.getModel(); // will return "The model of the vehicle is Ford"
```

Here the properties of the object are initialized by the second argument of `Object.create` using an object literal with syntax similar to that used by the `Object.defineProperty` and 'Object.defineProperties' methods.

It's worth noting that prototypal relationships can cause problems when enumerating properties of objects and wrapping the contents of the loop has a `hasProperty()` check.

If we wish to implement the prototype pattern without using `Object.create`, we can simulate the pattern:

```js
var vehiclePrototype = {
    init: function(carModel) {
        this.model = carModel;
    },

    getModel: function() {
        return 'The model of this vehicle is ' + this.model;
    }
};

// The object which will act as a constructor
var vehicle(model) {

    // Initializing the prototype object
    function F() {};
    F.prototype = vehiclePrototype;

    var f = new F();
    
    f.init(model);
    return f
}

var car = vehicle('Ford');

car.getModel(); // Will return "The model of this vehicle is Ford"
```
