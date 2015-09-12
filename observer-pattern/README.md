The observer pattern is widely used in client-side JavaScript programming. All browser events (keypress, mouseover etc.) are examples of the pattern. Another name is custom events, meaning events that you create programmatically. This pattern is also called subscriber/published pattern.

The main advantage about this pattern is that it promotes loose coupling. Instead of one object calling another object's method, an object subscribes to another object's specific activity and gets notified. The subscribed is also called observer and the object being observed is called publisher or subject. The publisher notifies (or calls) all subscribers when an important event occurs and often passes a message in the form of an event object.

Let's implement this pattern. Let's say we have a publisher **magazine**, which publishes a daily magazine and a monthly mega magazine. A subscriber *clark* will be notified whenever the magazine publishes a new one.

The **magazine** object needs to have a property _subscribers_ that is an array storing all subscribers. The act of subscription is just adding to this array. When an event occurs, **magazine** loops through the list of subscribers and notifies them. The notification means calling a method of the subscribers object. Therefore, when subscribing, the subscriber provides one of it's methods to **magazine**'s _subscribe()_ method.

**magazine** can also have _unsubscribe()_ method, which mean removing from the array of subscribers. The last important method of **magazine** is _publish()_, which will call the subscriber's methods.

So, to summarize, a published object needs to have these members:

- subscribers - an array
- subscribe() - add to the array of subscribers
- unsubscribe() - remove from the subscribers array
- publish() - loop through subscribers and call the methods they provide when they signed up

All three methods need a type parameter, because a publisher may fire several events (publish both a daily and mega magazine) and subscribers may chose to subscribe to one, but not the other one.

It makes sense to implement theme members as part of separate object. Then we can copy them over to any other object and turn any giver object into an publisher.

```js
    var publisher = {
        subscribers: {
            any: [];
        }

        subscribe: function(fn, type) {
            type = type || 'any';
            if(typeof this.subscribers[type] === 'undefined') {
                this.subscribers[type] = [];
            }
            this.subscribers[type].push(fn);
        },

        unsubscribe: function(fn, type) {
            this.visitSubscriber('unsubscribe', fn, type);
        },

        publish: function(publication, type) {
            this.visitSubscribers('publish', publication, type);
        },

        visitSubscribers: function(action, arg, type) {
            var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;

            for (i = 0; i < max; i++) {
                if (action === 'publish') {
                    subscribers[i](args);
                } else if (subscribers[i] === arg) {
                    subscribers.splice(i,1);
                }
            }
        }
    };
```

Here is an object that takes an object and turns it into a publisher by simply copying over the generic publisher's methods:

```js
    var makePublisher = function(object) {
        var i;
        for (i in publisher) {
            if (publisher.hasOwnProperty(i) && typeof publisher[i] === function) {
                object[i] = publisher[i];
            }
        }
        object.subscribes = {
            any: [];
        };
    }
```

Now let's implement the **magazine** object. All it do is publish daily and monthly:

```js
    var magazine = {
        daily: function() {
            this.publish('big news today');
        }

        mega: function() {
            this.pushlish('interesting analysis', "monthly");
        }
    };
```

Making the **magazine** publisher:

```js
    makePublisher(magazine);
```

Now that we have a publisher, let's see the subscriber object **clark**, which will has two methods:

```js
    var clark = {
        eatChocolate: function(magazine) {
            console.log('Just read ' + magazine);
        },
        saturdayNap: function(monthly) {
            console.log('About to fall asleep reading this ' + monthly);
        }
    };
```

Now the **magazine** subscribes **clark** (in other words **clark** subscribess _to_ the **magazine**):

```js
    magazine.subscribe(clark.eatChocolate);
    magazine.subscribe(clark.saturdayNap);
```

// TODO: Add tests
