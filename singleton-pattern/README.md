# Singleton Pattern

The singleton pattern is known because it restricts instantiation of a class to a single object. Classically the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist. It the event already exists, it just returns a referance to that object.

Singletons differ from static classes (objects) as we can delay their initialization, because they require some information that may not be available during initialization time.

In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global namespace to provide a single point of access for functions.


```js
    var mySingleton = (function() {
        var instance;

        var init = function() {
            // Private methods and variables
            var privateMethod = function() {
                return 'Private Method';
            };
            var privateVariable = 'Private Variable';

            return {
                // Public methods and variables
                publicVariable: function() {
                    return 'Public Method';
                },
                publicProperty: 'Public Property',
                getPrivateVar: function() {
                    return privateVariable;
                }
            }

            return {
                getInstance: function() {
                    if(!instance) {
                        instance = init();
                    }

                    return instance;
                }
            }
        }
    }());
```

What makes the Singleton is the global access to the instance(in our case through `mySingleton.getInstance()`) as we don't call `new mySingleton()`.

In the GoF book, the Singleton pattern is described as follows: _There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point._

It is important to note the difference between a static instance of a class (object) and a Singleton. Although a Singleton can be implemented as a static instance, it can also be constructed lazily, without the need for resources nor memory until this is actually needed.

If we have a static object that can be initialized directly, we need to ensure the code is always executed in the same order (in case `objCar` needs `objWheel` during its intialization) and this doesn't scale when you have a large number of source files.

Both Singletons and static objects are useful but they shouldn't be overused- the same way in which we shouldn't overuse other patterns.

In practice, the Singleton pattern is useful when exactly one objects is needed to coordinate others across a system.

Whist the Singleton has valid uses, often when we find ourselves needing it in JavaScript, it's a sign that we may need to re-evaluate our design.

They are often an indication that modules in a system are either coupled or that logic is overly spread across multiple of a codebase. Singletons can be more difficult to test dues to issues ranging from hidden dependencies, the difficulty on creating multiple instances, difficulty in stubbling dependencies and so on.
