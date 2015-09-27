# Mixins

In Javascript we can look at Mixins as a means of collecting functionalities through extension. Each new object has a prototype from which it can inherit further properties. Prototypes can inherit from other object prototype but even more importantly, can define properties for any number of object instances.We can leverage this fact to promote function re-use.

Mixins allow objects to borrow (inherit) functionality from them with minimal amount of complexity. As the pattern works well with JavaScript objet prototypes, it gives us a fairly flexible way to share functionality from not just one Mixin, but effectively many through multiple inheritance.

They can be viewed as objects with attributes and methods that can be easily shared across a number of other objects prototypes.Imagine that we define a Mixin containing utilities functions in a standard object literal:

```js
var myMixin = {
    moveUp: function() {
        return 'move up';
    },
    moveDown: function() {
        return 'move down';
    },
    stop: function() {
        return 'stop!';
    }
};
```

We can easily extend the prototype of existing constructor functions to include this behavior using a helper such as the Underscore.js `_.extend()` method:

```js


// a skeleton CarAnimator constructor
var CarAnimator = function() {
    this.moveLeft = function() {
        return 'move left';
    };
};

// A skeleton personAnimator constructor
var PersonAnimator = function() {
    this.moveRandomly = function() {
        return 'move randomly';
    };
};

// Extend both constructors with our Mixin
_.extent(CarAnimar.prototype, myMixins);
_.extent(PersonAnimator.prototype, myMixins);

// Create new instance of carAnimator
var myAnimator = new Animator();
myAnimator.moveLeft(); // "move left"
myAnimator.moveDown(); // "move down"
myAnimator.stop(); // "stop!"

```

As we can see, this allows to easily "mix" in common behavior into object constructor fairly trivially.

There is a way to augment (another way of saying extend) a constructor so that it can inherit specific methods defined in the Mixin. This time wi won't be using Underscore.js.

```js
// Define the Car constructor
var Car = function(settings) {
    this.model = settings.model || 'no model provided';
    this.color = settings.color || 'no color provided';
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

// Extend the existing object with a method from another
function augment(receivingClass, givingClass) {

    // provide only certain methods
    if (arguments[2]) {
        for (var i = 2, len = arguments.length; i  < len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    } else {
        // provide all arguments
        for (var methodName in givingClass.prototype) {
            // check is the receivingClass doesn't have a method of the same name
            // as the one currently processes
            if(!Object.hasOwnProperty(receivingClass.prototype, methodName)) {
                receivingClass.prototype = givingClass[methodName];
            }
        }    
    }
}


// Augment the Car constructor to include "driveForward" and "driveBackward"
augment(Car, Mixin, 'driveForward', 'driveBackward');

// Create new Car
var ford = new Car({
    model: "Ford Escord",
    color: 'blue'
});

// Test to make sure we now have access to the methods
myCar.driveForward(); // "drive forward"
myCar.driveBackward(); // "drive backward"


// Augment all properties from our Mixin to Car object
augment(Car, Mixin);

var fiat = new Car({
    model: 'Fiat Punto',
    color: 'red'
});

fiat.driveSideways(); // "drive sideways"

```

## Advantages

Mixins assist in decreasing functional repetition and increasing function re-use in a system. Where an application is likely to require shared behavior across object instances, we can easily any duplication by maintaining this hared functionality in a Mixin and thus focusing on implementing only the functionality our system which is truly distinct.

The downside to Mixins are a little more debatable. Some developers feel that injecting functionality into an object prototype is a bad idea as it leads to both prototype pollution and a level uncertainty regarding the origin of our functions. In large systems this may well be the case.
