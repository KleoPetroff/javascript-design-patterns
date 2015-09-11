# What is a pattern

А pattern is a reusable solution to a common problem in software design, in this case - a JavaScript application.

## Why are they important

- parents are proven solutions. They provide solid approach to solving a particular problem.
- patterns can be easily reused.
- patterns can be expressive

## Proto-pattern

A proto-pattern is a pattern that is found by someone, but is not yet established, because of it's young age.

## When a pattern is considered "good"
A "good" pattern is considered when it does the following:

- Solved a particular problem - this is one of the most essential ingredient of a good pattern
- The solution to the problem cannot be obvious - the best design patterns provide solutions to problems indirectly - this is considered a necessary approach for most challenging problems related to deseing.
- The concept described must be proven - design patterns require a proof, that they function as described.

## Tips for writing a design pattern

- How practical is the pattern? - Ensure the pattern describes proven solution to recurring problem.
- Keep best practices in mind - The design decisions we take should be based on practices we derive from an understanding of best practices.
- Our design pattern should be transparent to the users - Design patterns should be transparent and easy to understand to the developers.
- Remember that originality is **not** key in pattern design
- Patterns need a strong set of examples - A good pattern description should be followed by strong set of examples demonstrating the successful application of the pattern.

# Anti-Patterns

If we consider patterns a best practice, anti-pattern is the lesson we have learned. Anti-Patterns:

- describes a **bad** solution to a particular problem which resulted in a bad situation occuring
- describes how to get out of that situation and how to go to a good solution

Examples of anti-patterns in JavaScript:

- polluting the global namespace by defining a large number of variables in the global context
- passing strings instead of functions to either `setTimeout` or `setInterval` as it triggers the use of `eval()`
- Modifying the `Object` class prototype
- Using JavaScript in an inline form
- The use of `document.write` where native DOM alternatives as document.createElement are more appropriate.

# Categories of design patterns

Design patterns can be broken down into several categories.

### Creational Design Patterns

Creational patterns focus on handling object creation mechanism. The basic approach to object creation might otherwise lead to added complexity in a project whist these patterns aim to solve this problem by _controlling_ the creation process.

Some of this patterns are: Constructor, Factory, Abstract, Prototype, Singleton and Builder

### Structural Design Patterns

Structural Patterns are concerned with object composition and typically identify simple ways to realize relationship between different objects. They help ensure that when one part of the system changes, the entire structure of the system doesn't need to do the same.

Some of this patterns are: Decorator, Facade, Flyweight, Adapter and Proxy.

### Behavioral Design Patters

Behavioral design patterns focus on improving communication between disparate objects in a system.

Some of this patterns are: Iterator, Mediator, Observer and Visitor.

# Classes in JavaScript

JavaScript is class-less language (ES5 and lower). Classes can be simulated using functions.

# Explained Patterns

- [Constructor Pattern](https://github.com/KleoPetroff/javascript-design-patterns/tree/master/constructor-pattern)
- [Module Pattern](https://github.com/KleoPetroff/javascript-design-patterns/tree/master/module-pattern)
- [Revealing Module Pattern](https://github.com/KleoPetroff/javascript-design-patterns/tree/master/revealing-module-pattern)
- [Singleton Pattern](https://github.com/KleoPetroff/javascript-design-patterns/tree/master/singleton-pattern)
- [Observer Pattern](https://github.com/KleoPetroff/javascript-design-patterns/tree/master/observer-pattern)
- Mediator Pattern
- Command Pattern
- Prototype Pattern
- Facade Pattern
- Factory Pattern
- Mixin Pattern
- Decorator Pattern
- Flyweight Pattern
