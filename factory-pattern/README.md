# Factory Pattern

The Factory Pattern is a creational pattern concerned with the notion of creating objects. It differs from the other patterns in its category with that it doesn't explicitly require us to use a constructor. Instead, a Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created.

The objects created by the factory method (or class) are by design inheriting from the same parent object, they are subclasses implementing specialized functionality. Sometimes the common parent is the same class that contains the factory method.

Let's see an example implementation where we have:

- a common parent `CarMaker` constructor
- A static method of the `CarMaker` called `factory()`, which creates car objects
- Specialized constructors `CarMaker.Compact`, `CarMaker.SUV` and `CarMaker.Convertible` that inherit from `CarMaker`. All of them will be defined as static properties of the parent so that we keep the global namespace clean, and so we also know where to find them when need them.

The finished implementation will be used as follows:

```js
var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

corolla.drive(); // "I have 4 doors"
solstice.drive(); // "I have 2 doors"
cherokee.drive() // "I have 17 doors"

```

This part - `var corolla = CarMaker.factory('Compact');` is probably the most recognizable in the factory pattern. You have a method that accepts a type given as a string at runtime and then creates and returns objects of the requested type. There are no constructors used with `new` or any object literals in sight, just a function that creates objects based on a type identified by a string.

Here is an example implementation:

```js
// parent constructor
function CarMaker() {};

// a method of the parent
CarMaker.prototype.drive = function() {
    return 'I have ' + this.doors + ' doors';
};

// the static factory method
CarMaker.factory = function(type) {
    var constr = type,
        newCar;

    // error if the constructor doesn't exists
    if(typeof CarMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: constr + "doesn't exists";
        };
    }

    // inherit the parent but only once
    if(typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }

    // create new instance
    newCar = new CarMaker[constr]();
    return newCar;
}

//define specific car makers
CarMaker.Compact = function() {
    this.doors = 4;
}
CarMaker.Convertible = function() {
    this.doors = 2;
}

Car.SUV = function() {
    this.doors = 24;
}

```

The implementation of this pattern is pretty straightforward. All we need to do is look for the constructor function that creates an object of the required type. In this case a simple naming convention was used to map objects types to the constructors that create them. The inheritance part was just an example of a common repeating piece of code that could be put into the factory method instead of repeated for every constructor type.


## When to use the Factory Pattern

- when our object or component setup involves a high level of complexity
- then we need to easily generate different instances of objects depending on the environment we are in
- when we are working with many small objects or components that share the same properties

## When not to use the Factory Pattern

When applied to the wrong type of problem, this pattern can introduce an unnecessarily great deal of complexity. Unless providing an interface for objects creation is a design goal for the library or framework we are writing, it's suggested sticking to explicit constructors to avoid the unnecessary overhead.

# Buid-in Object Factory

For an example of "factory in the wild", consider the build-in global `Object()` constructor. It also behaves as a factory, because it creates different objects, depending on the input. If you pass it a primitive number, it can create an object with the `Number()` constructor behind the scenes. The same is true for the string and boolean values. Any other values, including no inputs values, will create a normal object.

# Abstract Factory

An Abstract Factory Pattern aims to encapsulate a group of individual factories with a common goal. It separates the details of implementation of a set of objects from their general usage. An Abstract Factory should be used where a system must be independent from the way the objects it creates are generated or it needs to work with multiple type of objects.
