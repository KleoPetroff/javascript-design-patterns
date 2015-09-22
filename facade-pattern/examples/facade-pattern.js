'use strict';

var Mortgage = function(name) {
    this._name = name;
};

Mortgage.prototype = {
    apply: function(amount) {
        var result = 'approved';
        if(!new Bank().verify(this._name, amount)) {
             result = 'denied';
        } else if(!new Credit().verify(this._name, amount)) {
             result = 'denied';
        } else if (!new Background().verify(this._name, amount)) {
            result = 'denied';
        }
        return this._name + ' has been ' + result + ' for a ' + amount + ' mortgage';
    }
};

var Bank = function() {
    this.verify = function(name, amount) {
        // Other logic
        return true;
    };
};

var Credit = function() {
    this.verify = function(name, amount) {
        // other logic
        return true;
    };
};

var Background = function() {
    this.verify = function(name, amount) {
        // other logic
        return true;
    };
};
