# Constructor Pattern

In classical object-oriented programming languages, a constructor is a special method used to initialize a newly created object.

Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is created.

## Object creation

There are three ways to create new objects in JavaScript

```
    // Each of the options will create an empty object

    var myObject = {}; // object, created with the Object constructor literal

    var myObject = Object.create(Object.prototype) // Using the Object.create method

    var myObject = new Object(); // Using the Object constructor
```

There are four ways in which keys and properties can be assigned to an object

```
// ECMAScript 3 compatible approaches

// 1. Dot notation

// Set property
myObject.someKey = 'Hello There!';

// Get property
var value = myObject.someKey;

// 2. Bracket notation

// Set property
myObject['someKey'] = 'Hello There!'

// Get property
var value = myObject['somekey'];

//!! ECMAScript 5 ONLY compatible approaches !!

// 3. Object.defineProperty method

// Set property
Object.defineProperty(myObject, 'someKey', {
        value: 'Hello There!',
        writable: true,
        enumerable: true,
        configurable: true
});

// 4. Object.defineProperties

// Set properties
Object.defineProperties(myObject, {
    'someKey': {
        value: 'Hello There!',
        writable: false;
    },
    'anotherKey': {
        value: 'Hey World',
        writable: false;
    }
});

```
## Object Constructor

JavaScript doesn't have classes, but it does support a special constructor functions that work with objects. By prefixing a call to that function with the keyword `new`, we tell the JavaScript we would like the function to behave as a constructor and instantiate new object.

Inside the constructor, the keyword `this` references the newly created objects. A basic constructor may look like that:

```
// Defining the constructor

function Car(model, color, age) {
    this.model = model;
    this.color = color;
    this.age = age;

    this.information = function() {
        return 'This car model is ' + this.model + ', with ' + this.color + ' color from ' + this.age + ' year.';
    }
}

// Usage:

// Create a new instance of the car
var ford = new Car('Escord', 'green', 2005);
var volkswagen = new Car('Golf', 'grey', 2010);

// Calling the information method
console.log(ford.information());
console.log(volkswagen.information());
```
