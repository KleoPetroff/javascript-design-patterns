  /* Creating Objects */


    // Object creating with Object constructor literal
    var name = {};

    // Object created with Object.create method
    var myName = Object.create(Object.prototype);

    myName.firstName = 'John';
    myName['secondName'] = 'Smith';

    // Object created with Object constructor
    var otherName = new Object();

    // Property set with dot notation
    // Property set with brackets notation

    // Property set with defineProperty method
    Object.defineProperty(myName, 'age', {
        value: 24,
        writable: true,
        enumerable: true,
        configurable: true
    });


    // Property set with defineProperties method
