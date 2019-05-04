'use strict';

class BasicArmor {
    constructor(armorType, height = 40) {
        this.armorType = armorType;
        this.height = height;
    }
}

// new instance of BasicArmor
const chainArmor = new BasicArmor('chainArmor');

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

module.exports = {
  BasicArmor,
  chainArmor
};
