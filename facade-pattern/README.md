# Facade Pattern

The Facade Pattern provides a convenient higher-level interface to larger body of code, hiding its true complexity. It is often present in systems that are built around a multi-layer architecture. It's a good pattern to keep your methods short and not have them handle too much work. Following this practice you will have a greater number of methods than if you have _uber_ methods with lots of parameters. Sometimes two or more methods may commonly be called together. In such cases it makes sense to create another method that wraps the repeating method calls.

Facade Pattern is a structural pattern that can be seen in JavaScript libraries like jQuery where, although an implementation may support methods with a wide range of behaviors, only a "facade" or limited abstraction of these methods is presented to the public for use. For example, when handling browser events, you have the following methods:

` stopPropagation()` - traps the event and doesn't let it bubble up to the parent nodes
`preventDefault()` - doesn't let the browser do the default action (for example, following a link or submitting a form)

There are two separate methods with different purposes and they should be kept separated, but at the same time, they are often called together. So instead of duplicating the two method calls all over the application, you can create a facade method that calls both of them:

```js
var myEvent = {
    // ...
    stop: function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    // ...
};
```

The facade pattern is also suitable for browsers scripting where the differences between the browsers can be hidden behind a facade. Continuing the previous example, we can add the code that handles the differences in IE's event API:

```js
var myEvent = {
    //...
    stop: function(e) {
        if(typeof e.preventDefault === 'function') {
            e.preventDefault();
        }
        if (typeof e.stopPropagation === 'function') {
            e.stopPropagation();    
        }
        // IE
        if (typeof e.returnValue === 'boolean') {
            e.returnValue = false;
        }
        if(typeof e.cancelBubble === 'boolean') {
            e.cancelBubble = true;
        }
    }
    // ...
}
```

We are all familiar with jQuery's `$(document).ready(...)`. Internally, this is actually being powered by a method call `bindReady(), which is doing this:

```js
bindReady: function() {
    ...
    if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

      // A fallback to window.onload, that will always work
      window.addEventListener( "load", jQuery.ready, false );

    // If IE event model is used
    } else if ( document.attachEvent ) {

      document.attachEvent( "onreadystatechange", DOMContentLoaded );

      // A fallback to window.onload, that will always work
      window.attachEvent( "onload", jQuery.ready );
               //...
```

This is another example of a Facade, where the rest of the world simply uses the limited interface exposed by `$(document).ready(...)` and the more complex implementation powering it is kept hidden from sight.

Facade can also be integrated with other patterns such as the Module Pattern. As we can see below, our instance of the module contains a number of private methods, a Facade is then used to supply a much simpler API to accessing these methods:

```js
var module = (function() {
    'use strict';

    var _privates = {
        id: 5,
        get: function(){
            return 'current value is ' + this.id;
        },
        set: function(value) {
            this.id = value;
        },
        walk: function(){
            return 'walking';
        },
        running: function() {
            return 'running';
        }
    };

    return {
        facade: function(args) {
            _privates.set(args.val);
            _privates.get();
            if(args.run) {
                _private.run();
            }
        }
    };
}());

// Output
module.facade({
    run: true,
    value: 15;
});

```

The facade pattern is also helpful with redesign and refactoring efforts. When you want to replace an object with a different implementation, you have to do it over a period of time, while at the same time new code is being written that uses that object. You can start with thinking about the new object's API and the proceed to create a facade in front of the old object that follows the new API. This way, when you get to fully replacing the old object, you will have code to modify because any recent client code will already use the new API.

Facades generally have few disadvantages, but one concern worth nothing is performance. Namely, one must determine whether there is an implicit cost to the abstraction a Facade offers to our implementation and if so, whether this cost is justifiable. Most of us are aware that both ``getElementById('identifier')` and `$('#identifier')` can be used to query and element on a page by its ID.

But did you know that `getElementById()` is significantly faster by a high order of magnitude. We have to keep in mind that jQuery are doing a lot more behind the scenes to optimize our query (and that a jQuery object, not just a DOM node is returned).

The challenge with this particular Facade is that in order to provide an elegant selector function capable of accepting multiple queries, there is an implicit cost of abstraction. The user isn't required to access `jQuery.getById('identifier')` or `jQuery.getByClass('identifier')` and so on. That said, the trade-off in performance has been tested in practice over the years and given the success of jQuery, a simple Facade actually worked out very well.

When using the pattern, try to be aware of any performance costs involved and make a call on whether they are worth the level of abstraction.
