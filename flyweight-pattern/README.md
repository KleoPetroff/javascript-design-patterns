# Flyweight Pattern

The flyweight pattern is used in instances when there is a large number of instances of objects which only vary slightly. It aims to minimize the use of memory in an application by sharing as much data as possible with related objects (e.g application configuration, state and so on). A large number in this case is probably a number higher than 10,000 other than 50. The flyweight offers a way to compress the data, by only keeping track of the values that differ form some prototype in each instance.

JavaScript's prototype model is ideal for this scenario. We can simply assign the most common value to the prototype and have individual instances override them as needed.

Let's see a simple example:

```js
var Soldier = (function() {
    'use strict';
    this.prototype.Health = 10;
    this.prototype.FightingAbility = 15;
    this.prototype.Hunger = 0;

    return Soldier;
}());
```


Using this approach we are able to defer all requests for the soldier's health to the prototype. Setting the value is easy:

```js
var soldier1 = new Soldier();
var soldier2 = new Soldier();

console.log(soldier2.Health); // 10

soldier2.Health = 20;

console.log(soldier.Health) // 20
```
