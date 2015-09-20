# Command pattern

The command pattern aims to encapsulate a request as an object and gives us the ability to both parameterize and pass method calls around.

The general idea behind the Command pattern is that is provides us a means to separate the responsibility to different objects instead.

Implementation wise, simple command objects bind together both an action and the object wishing to invoke the action. They include execution operation (such as `run()` or `execute()`). All command objects with the same interface can easily be swapped as needed and this considered one the larger benefits of the pattern.


Lets create a simple car purchasing service:

```js
(function() {
    'use strict';

    var carManager = {
        // request information
        requestInfo: function(model, id) {
            return 'The information for ' + model + ' with ID ' + id + 'is great!';
        },
        // purchase the car
        buyVehicle: function(model, id) {
            return 'You have successfully purchased Item ' + id + ', a ' + model;
        },
        // arrange a viewing
        arrangeViewing: function(model, id) {
            return 'You have successfully booked a viewing of ' + model + '( ' + id + ' )';
        }
    }
}());
```
We can easily invoke our `carManger` methods directly, after all this is completely valid JavaScript. There are however scenarios where this may be disadvantageous.

For example, image if the API behind the `carManager` changed. This will require all objects directly accessing these methods within the application to also be updated.

Let's expand our `carManager` so that our application of the Command Pattern results in the following: accept any named methods that can be performed on the `carManager` object, passing along any data that might be used such as the Car model and ID:

```js
    carManager.execute('buyVehicle', 'Fiat Punto', '435671');
```

We should now add the definition for the `carManager.execute` method:

```js

// Creating the execute method
carManger.execute = function(name) {
// checking if the object property exists and call the apply method with `this` pointing to 
// thecarManager object with arguments all expect the first one.
    return carManager[name] && carManger[name].apply(carManager, [].slice.call(arguments, 1));
}
```
