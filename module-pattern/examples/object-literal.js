'use strict';

var myObject = {
    // Object property with string value
    displayText: 'This is a simple text to display',

    // Objects can exist inside other objects
    configuration: {
        useCache: true,
        language: 'en'
    },

    // Creating Basic method
    showMessage: function() {
        // The keyword this refers to the method itself
        return this.displayText;
    },

    // Show active configuration text
    showConfiguration: function() {
        return 'Your caching option is ' + (this.configuration.useCache ? 'enabled' : 'disabled') +
               ' and your current language is ' + this.configuration.language.toUpperCase();
    },

    // Update object configuration
    updateConfiguration: function(newConfig) {
        if(typeof newConfig === 'object') {
            this.configuration = newConfig;
            console.log(this.configuration.language);
        }
    }
};

// Calling showMessage method
myObject.showMessage();

// Updating configuration Object
myObject.updateConfiguration({
    useCache: false,
    language: 'bg'
});

// Display new configuration options
myObject.showConfiguration();
