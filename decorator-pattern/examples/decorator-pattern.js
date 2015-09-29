'use strict';

var BasicArmor = function(armorType, height) {
    this.armorType = armorType;
    this.height = 40;
};


// new instance of BasicArmor
var chainArmor = new BasicArmor('chainArmor');


// Decorators
chainArmor.setColor = function(color) {
    this.color = color;
};

chainArmor.setHeight = function(height) {
    this.height = height;
};


// chainArmor Decorators calls
chainArmor.setColor('grey');
chainArmor.setHeight(33);

console.log(chainArmor.height); // 33
console.log(chainArmor.color); // "grey"
