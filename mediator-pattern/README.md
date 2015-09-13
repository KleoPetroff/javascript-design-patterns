# Mediator Pattern

The Mediator Pattern provides central authority over a group of objects by encapsulating how these objects interact. This model is very useful for scenarios where there is a need to manage complex conditions in which every object is aware of any state change in any other object in the group.

The Mediator Pattern is very useful in the development of complex forms. An example is a page which you enter options to make a flight reservation. A simple Mediator rule would be - _you must enter a valid deapture date, a valid return date, the return date must be after the departure date, a valid departure airport,a valid number ot travelers, and only then the Search button can be activated._

Another example of Mediator is that of a control tower on an airport coordinating arrivals and departures of airplanes. A tower (the Mediator) handles what planes can take off and land because all communications (notifications being listened out for or broadcast) are done from the planes to the control tower, rather than from plane-to-plane. A centralized controller is the key to this system and that's really the role a Mediator plays in software design.

# A simple Mediator

A Mediator is an object that coordinates interactions (logic and behavior) between multiple objects. It makes decisions on when to call which objects, based on the actions(or inaction) of others objects and input.

You can write a mediator using a single line of code:

```js
    var mediator = {}
```

Of course the is just an object literal. The purpose of the Mediator is to control the workflow between objects and we really don't need anything more that an object literal to do this.

The objects participating in this pattern are:

- Mediator
    - defines an interface for communicating with Colleagues objects
    - maintains references to Colleagues objects
    - manages central control over operations
- Colleagues
    - objects that are being mediated by the Mediator
    - each instance maintains a reference to the Mediator

## Advantages

- The largest benefit of the Mediator pattern is that it reduces the communication relationship from "many-to-many" to "just many-to-one"
- Excellent at decoupling objects which often promotes smaller, reusable components

## Disadvantages

- Introduce single point of failure.
- Placing a Mediator between modules can also cause a performance hit, as they are always communicating indirectly. It's best when the mediator is only used to coordinate actions across multiple features and not for communication within the individual features themselves.

## Mediator vs. Facade

Both patterns abstract the functionality of existing modules, but there are some subtle differences.

The Mediator centralizes communication between modules. In a sense this is multidirectional. The Facade however just defines a simpler interface to a module or system but doesn't add any functionality. Other modules in the system aren't directly aware of the concept of a facade and could be considered unidirectional.
