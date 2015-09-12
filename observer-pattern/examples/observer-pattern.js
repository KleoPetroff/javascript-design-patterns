function Click() {
    this.handlers = []; // Observer

    this.subscribe = function(fn) {
        this.handlers.push(fn);
    };

    this.unsubscribe = function(fn) {
        this.handlers = this.handlers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
    };

    this.fire = function(obj, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, obj);
        });
    };
}

// log helper

var log = (function() {
    'use strict';

    var log = '';
    return {
        add: function(msg) {
            log += msg + '\n';
        },
        show: function() {
            console.log(log);
            log = '';
        }
    };
}());


(function run() {
    var clickHandler = function(item) {
        log.add('fired: ' + item);
    };

    var click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
    
    log.show();
}());
