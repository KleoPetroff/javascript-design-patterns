// Defining the object with a IIFE
var myModule = (function() {
	'use strict';
	// The variable is private and inaccessible to the outer scope
	var counter = 0;

	// This are the public methods (API) of the object
	return {
		incrementCounter: function() {
			return counter++;
		},
		resetCounter: function() {
			counter = 0;
		},
		showCounterValue: function() {
			return counter;
		}
	};
}());
