# Module Pattern

Modules are an essential part of any architecture's application and typically helps in keeping the code of the project organized.

In JavaScript, there are several ways for module implementation:

- The Module Pattern
- Object literal notation
- AMD Modules
- CommonJS Modules
- ECMAScript Harmony Modules

The Module Pattern is based on object literals. So let's refresh our knowledge of them.

## Object literals

In object literal notation, the object is described as a comma-separated name/value pair enclosed with curly brackets (`{}`). The names of the object properties can be strings or identifiers. The last property of the object should not end with comma, as it will result an error.

```js
    // Define an object with Object literal
    var myObject = {
        exampleKey: exampleValue,
        'anotherExampleKey': function() {
            // ....
        }
    }
```

Object Literals don't require the keyword `new` when instantiated. Outside of the object, new properties of the object can be added as followed:

```js
    myObject.property = 'PropertyValue';
```

In example folder we can see a more complexe example of module defined using the object literal notation.

Using object literals can assist in encapsulating and organizing your code. If we are opting in this technique, then Module Pattern can be equally interesting. It still uses the object liteals but only as the return value from a scoping function.

## Module Pattern

The Modular pattern was originally defined as a way to provide both public and private encapsulation for classes.

In JavaScript, the Module Pattern is used to emulate the concept of classes in such a way that we are able to include public or private methods and variables into a single object, this protecting particular parts from the global scope. The result is a reduction in the likelihood of our function names conflicting with other functions defined in additional script on the page.

### Privacy

The Module Pattern encapsulate "privacy", state and organization using closure. It provides a way of wrapping a mix of public and private methods and variables, protecting the pieces from _leaking_ into the global scope.Within this pattern, only the public API is returned. Everything else within the closure is private.

This gives us a clean solution for shielding logic by only exposing an interface we wish the other parts of the application to use. The pattern is very similar to the immediately-invoked function expression([IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression)), expect that an object is returned instead of function.

### Examples

##### [A simple Module Pattern Example](https://github.com/KleoPetroff/javascript-design-patterns/blob/master/module-pattern/examples/module-pattern.js)

In this example, the parts of the code are unable to directly read the value of incrementCounter(), resetCounter() or showCounterValue(). The counter variable is actually fully shielded from the global scope so it acts like a private variable would - it exists only within the closure of the object, so that only the two functions can access it. Our methods are effectively namespaced, so we need to prefix any call with the name of the module (`myModule`).

#### [Module Pattern Template](https://github.com/KleoPetroff/javascript-design-patterns/blob/master/module-pattern/examples/module-pattern-template.js)

When working with the Module Pattern, we may find it useful to define a simple template that we can use for getting started with. This example covers namespacing, public and private variables and methods;

#### [Shopping Basket](https://github.com/KleoPetroff/javascript-design-patterns/blob/master/module-pattern/examples/shopping-basket.js)

This is a simple basket organizer, implemented with the Module Pattern. The module is completely self-contained in a global variable called `myBasket`. The `basket` array in the module is kept private and so other parts of the application are unable to directly read it. It only exists with the module's closure and so the only methods able to access it are those with access to the scope (methods like `addItem`, `clearItems` etc.).

Inside the object we return an `Object`. This gets automatically assigned to `myBasket` so we can interact with it.

Using IIFE with a Module Pattern has a number of advantages:

- The freedom to have private functions and private members which can only be consumed by our module. As they aren't exposed to the rest of the page(only our exported API is), they are considered truly private.
- Given that functions are declared normally and are named, it can be easy to show in a debugger.

## Module Pattern Variations

### Import mixins

The variation of the pattern demonstrates how globals(jQuery, Underscore) can be passed in as arguments to our module's anonymous function. This effectively allows us to import them and locally alias them as we wish

```js
    var myModule = (function(jQ, _) {
        'use strict';
        var privateMethodjQuery = function() {
            jQ('.wrapper').text('Hello World');
        }

        var privateMethodUnderscore = function() {
            return (_.min([23,321,123,5,123,7656]));
        }

        return {
            publicMethod: function() {
                console.log(privateMethodUnderscore);
                privateMethodjQuery();
            }
        }

    }(jQuery, _));
```

### Exports

This variation allows us to declare globals without consuming them and could similarly support the concept of global import seen in the last example

```js
    // Global Module
    var myModule = (function() {
        'use strict';

        // Module Object
        var module = {},
        privateVariable = 'Hello World';

        var privateMethod = function() { /*...*/ }

        module.publicProperty = 'PublicValue';
        module.publicMethod = function() {
            return privateVariable;
        }

        return module;
    }());
```

// TODO: Add Frameworks and Libraries Module Pattern Implementations
