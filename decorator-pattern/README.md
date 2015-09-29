# Decorator Pattern

Decorators are structural patterns that aim to promote code re-use. Similar to Mixins, they can be considered another alternative to object sub-classing. Sub-classing is typically a compile-time operation and is tightly coupling - this means that once a sub-class is performed, there is no way to change it at runtime.

Classically, Decorators offered the ability to add behavior to existing classes in a system dynamically. It's used to wrap and augment an existing class. They can be used to heavily modify the underlying code using them. A common reason why developers use them is their applications may contain features requiring a large quantity of distinct types of objects. Imagine having to define hundreds of different object constructors to say, a JavaScript game.

The object constructors could represent distinct player types, each with different capabilities. A *Lord of the Rings* game could require constructors for `Hobbit`, `Elf`, `Orc`, `Wizard`, `Mountain Giant`, `Stone Giant` and so on, but there could easily be hundreds of these.

The Decorator pattern isn't heavily tied to how objects are created but instead focuses on the problem of extending their functionalities. Rather than jusr relying on prototypal inheritance, we work with a single base object and progressively add decorator objects which provide the additional capabilities. The idea is that rather than sub-classing, we add (decorate) properties or methods to a base object so it's a little more streamlined.

```js
// A Vehicle constructor

function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.license = '00000-000';
};


// Test instance for a basic vehicle
var testIntanse = new Vehicle('car');
console.log(testIntanse);

// A new instance of vehicle
var truck = new Vehicle('truck');

// New functionality we're decorating vehicle with
truck.setModel = function(modelName) {
    this.model = modelName;
};
truck.setColor = function(color) {
    this.color = color;
};

// Value setters and value assignment
truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

```

## Advantages and Disadvantages

Developers enjoy using this pattern as it can be used transparently and is also fairly flexible - as we've seen, objects can be wrapped or "decorated" with new behavior and then continue to be used without needing to worry about the base object being modified. In a broader context, the pattern also avoids us needing to rely on large number of subclasses to get the same benefits.

There are also drawbacks that we should be aware of when implementing the pattern. If poorly managed, it can significantly complicate our application architecture as it introduces many small, but similar objects into our namespace. The concept here is that in addition to becoming hard to manage, other developers unfamiliar with the pattern may have a hard time grasping why it's being used.

Commenting or pattern research should help with the latter, however as long as we keep a handle on how to widespread we use the decorator in our application we should be fine on both counts.
